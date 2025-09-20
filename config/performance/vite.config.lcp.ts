import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';

// LCP-focused Vite configuration for sub-2.5s performance
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Fast Refresh optimizations
      tsDecorators: true,
      plugins: [
        ["@swc/plugin-styled-components", {
          displayName: false,
          ssr: false,
          fileName: false,
          meaninglessFileNames: ["index", "styles"]
        }]
      ]
    }),
    mode === "development" && componentTagger(),
    // Ultra-aggressive compression for LCP
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 512, // Compress smaller files
      deleteOriginFile: false,
      compressionOptions: {
        level: 11, // Maximum compression
      }
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 512,
      deleteOriginFile: false,
      compressionOptions: {
        level: 9,
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: ['es2020', 'chrome80', 'safari14', 'firefox78'], // Modern targets only
    chunkSizeWarningLimit: 300, // Smaller chunks for faster loading
    minify: 'terser',
    cssMinify: 'lightningcss',
    terserOptions: {
      compress: {
        arguments: true,
        booleans_as_integers: true,
        drop_console: true,
        drop_debugger: true,
        evaluate: true,
        hoist_funs: true,
        hoist_props: true,
        hoist_vars: true,
        inline: 3,
        join_vars: true,
        loops: true,
        passes: 3,
        pure_funcs: [
          'console.log',
          'console.info',
          'console.debug',
          'console.warn',
          'console.error'
        ],
        reduce_vars: true,
        side_effects: false,
        switches: true,
        toplevel: true,
        typeofs: false,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_symbols: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        unused: true,
      },
      format: {
        comments: false,
        ascii_only: true,
      },
      mangle: {
        toplevel: true,
        safari10: true,
        properties: {
          regex: /^_/
        }
      }
    },
    rollupOptions: {
      treeshake: {
        preset: 'smallest',
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        moduleSideEffects: false,
        unknownGlobalSideEffects: false,
      },
      output: {
        // Optimize asset naming for caching
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          const extType = name.split('.').pop() || '';

          // Critical images get priority naming
          if (/hero|critical/i.test(name)) {
            return `critical/[name]-[hash][extname]`;
          }

          if (/webp|png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/img/[name]-[hash][extname]`;
          }

          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        // Aggressive code splitting for LCP optimization
        manualChunks: (id) => {
          // Critical path chunks
          if (id.includes('AdvancedHeroLCP') || id.includes('CriticalHeroSection')) {
            return 'critical-hero';
          }

          // Core React libraries
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-core';
          }

          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router';
          }

          // Icons - separate chunk for lazy loading
          if (id.includes('lucide-react')) {
            return 'icons';
          }

          // UI components - separate chunk
          if (id.includes('@radix-ui') || id.includes('shadcn')) {
            return 'ui';
          }

          // Lazy-loaded page components
          if (id.includes('/pages/') && !id.includes('Index.tsx')) {
            const pageName = id.split('/pages/')[1].split('.')[0];
            return `page-${pageName.toLowerCase()}`;
          }

          // Location pages - separate chunks
          if (id.includes('/locations/')) {
            return 'locations';
          }

          // Other vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },

        // Minimize initial bundle size
        experimentalMinChunkSize: 20000,
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    assetsInlineLimit: 2048, // Smaller inline limit

    // Critical CSS extraction
    cssMinifyOptions: {
      preset: ['advanced', {
        autoprefixer: true,
        discardComments: { removeAll: true },
        discardDuplicates: true,
        discardEmpty: true,
        discardOverridden: true,
        discardUnused: true,
        mergeIdents: true,
        mergeLonghand: true,
        mergeRules: true,
        minifyFontValues: true,
        minifyGradients: true,
        minifyParams: true,
        minifySelectors: true,
        normalizeCharset: true,
        normalizeDisplayValues: true,
        normalizePositions: true,
        normalizeRepeatStyle: true,
        normalizeString: true,
        normalizeTimingFunctions: true,
        normalizeUnicode: true,
        normalizeUrl: true,
        normalizeWhitespace: true,
        orderedValues: true,
        reduceIdents: true,
        reduceInitial: true,
        reduceTransforms: true,
        svgo: true,
        uniqueSelectors: true,
      }]
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom'
    ],
    exclude: [
      'lovable-tagger',
      // Exclude non-critical dependencies from pre-bundling
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu'
    ],
    esbuildOptions: {
      target: 'es2020',
      define: {
        global: 'globalThis',
      },
      supported: {
        bigint: true,
      },
    }
  },

  // Advanced performance optimizations
  esbuild: {
    target: 'es2020',
    legalComments: 'none',
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    drop: ['console', 'debugger'],
    pure: ['console.log', 'console.info', 'console.debug', 'console.warn'],
  },

  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      }
    }
  }
}));