import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8085, // FIXED: Consistent port configuration
    hmr: {
      overlay: false,
      port: 8085 // Ensure HMR uses same port
    },
    open: false,
    force: true, // Force dependency re-optimization
    clearScreen: false,
    // Fix MIME type issues for module scripts
    middlewareMode: false,
    fs: {
      strict: false
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    // Fix CSS MIME type issues
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
        }
        next();
      });
    }
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
          // Optimized chunking strategy - prevent empty chunks
          if (id.includes('node_modules')) {
            // Core React bundle - substantial size
            if (id.includes('react') && !id.includes('react-router')) {
              return 'react-core';
            }
            // Router separately for better caching
            if (id.includes('react-router')) {
              return 'router';
            }
            // Large UI libraries only
            if (id.includes('@radix-ui') || id.includes('@dnd-kit')) {
              return 'ui-components';
            }
            // Charts and visualization - substantial size
            if (id.includes('recharts') || id.includes('@tanstack/react-table')) {
              return 'charts';
            }
            // All other vendor dependencies
            return 'vendor';
          }

          // Only split substantial application chunks
          if (id.includes('/pages/admin/LeadsKanban')) {
            return 'admin-kanban';
          }

          // Geographic chunking only for substantial location sets
          if (id.includes('/pages/locations/')) {
            // Group all Melbourne locations together
            return 'melbourne-locations';
          }

          // All other app code stays in main bundle
          return undefined;
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