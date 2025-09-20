import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
    target: 'es2015',
    chunkSizeWarningLimit: 600,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3,
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_proto: true,
        dead_code: true,
        reduce_vars: true,
        toplevel: true,
      },
      format: {
        comments: false,
      },
      mangle: {
        toplevel: true,
        safari10: true,
      }
    },
    rollupOptions: {
      treeshake: {
        preset: 'recommended',
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
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
        manualChunks: {
          // Split lucide-react icons into separate chunk to reduce main bundle
          'lucide': ['lucide-react'],
          // Split large dependencies
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-accordion', '@radix-ui/react-navigation-menu'],
        },
      },
    },
    cssCodeSplit: true, // Split CSS for better caching and loading
    sourcemap: false,
    reportCompressedSize: false,
    // Ultra-aggressive inline threshold for LCP images
    assetsInlineLimit: 16384, // Inline assets up to 16kB for fastest loading
    cssMinify: 'lightningcss'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lovable-tagger']
  },
  // Critical: Define asset handling for consistent paths
  define: {
    __HERO_IMAGE_PATH__: JSON.stringify('/src/assets/hero-background-lcp.webp')
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