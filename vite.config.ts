import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8084,
    hmr: {
      overlay: false
    },
    open: false,
    force: true, // Force dependency re-optimization
    clearScreen: false
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Enable gzip and brotli compression
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 300, // Reduced from 600kb to enforce smaller chunks
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 4, // Increased for better compression
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_proto: true,
        dead_code: true,
        reduce_vars: true,
        toplevel: true,
        keep_infinity: true,
      },
      format: {
        comments: false,
      },
      mangle: {
        toplevel: true,
        safari10: true,
        keep_classnames: false,
        keep_fnames: false,
      }
    },
    rollupOptions: {
      treeshake: {
        preset: 'recommended',
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        moduleSideEffects: false,
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/webp|png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        manualChunks: (id) => {
          // Mobile-optimized chunking strategy
          if (id.includes('node_modules')) {
            // Core React chunks
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            // Router separately for better caching
            if (id.includes('react-router')) {
              return 'router';
            }
            // Icons in separate chunk with lazy loading
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // UI components separately
            if (id.includes('@radix-ui') || id.includes('@dnd-kit')) {
              return 'ui-components';
            }
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform')) {
              return 'forms';
            }
            // Charts and data visualization
            if (id.includes('recharts') || id.includes('@tanstack')) {
              return 'charts';
            }
            // Date utilities
            if (id.includes('date-fns') || id.includes('react-day-picker')) {
              return 'date-utils';
            }
            // All other vendor dependencies
            return 'vendor';
          }

          // Split large pages into separate chunks
          if (id.includes('/pages/admin/LeadsKanban')) {
            return 'leads-kanban';
          }
          if (id.includes('/pages/admin/Leads')) {
            return 'leads-management';
          }
          if (id.includes('/pages/admin/')) {
            return 'admin-pages';
          }

          // Location pages split by geographic regions
          if (id.includes('/pages/locations/')) {
            // Inner Melbourne suburbs
            if (id.includes('Melbourne') || id.includes('Carlton') || id.includes('Fitzroy') ||
                id.includes('Richmond') || id.includes('Collingwood') || id.includes('Abbotsford')) {
              return 'locations-inner';
            }
            // Eastern suburbs
            if (id.includes('Camberwell') || id.includes('Hawthorn') || id.includes('Kew') ||
                id.includes('Burwood') || id.includes('BoxHill') || id.includes('Glen')) {
              return 'locations-east';
            }
            // Southern suburbs
            if (id.includes('Brighton') || id.includes('Cheltenham') || id.includes('Bentleigh') ||
                id.includes('Caulfield') || id.includes('Elwood') || id.includes('StKilda')) {
              return 'locations-south';
            }
            // Western suburbs
            if (id.includes('Footscray') || id.includes('Williamstown') || id.includes('Werribee') ||
                id.includes('Sunshine') || id.includes('Newport') || id.includes('Altona')) {
              return 'locations-west';
            }
            // Northern suburbs
            if (id.includes('Preston') || id.includes('Northcote') || id.includes('Brunswick') ||
                id.includes('Coburg') || id.includes('Thornbury') || id.includes('Heidelberg')) {
              return 'locations-north';
            }
            // Outer suburbs
            return 'locations-outer';
          }

          // Service pages
          if (id.includes('/pages/services/')) {
            return 'service-pages';
          }
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    // Reduced inline threshold for mobile performance
    assetsInlineLimit: 4096, // 4kB threshold for mobile optimization
    cssMinify: 'lightningcss'
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@dnd-kit/core',
      '@dnd-kit/sortable',
      '@dnd-kit/utilities',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu'
    ],
    exclude: ['lovable-tagger'],
    force: true // Force re-optimization in development
  },
  // Critical: Define asset handling for consistent paths
  define: {
    __HERO_IMAGE_PATH__: JSON.stringify('/src/assets/hero-background-lcp.webp')
  },
  // Environment-specific configuration
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  // Optimize preloading for critical resources
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (filename === 'hero-background-lcp.webp') {
        return '/src/assets/hero-background-lcp.webp';
      }
      return { relative: true };
    }
  }
}));