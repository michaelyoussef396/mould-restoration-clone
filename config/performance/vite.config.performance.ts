import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

// Custom plugin for Melbourne location pages optimization
const melbourneLocationOptimizer = (): Plugin => {
  return {
    name: 'melbourne-location-optimizer',
    generateBundle(options, bundle) {
      // Analyze location page chunks
      const locationChunks = Object.keys(bundle).filter(key =>
        key.includes('locations/') && bundle[key].type === 'chunk'
      );

      console.log(`📍 Location Pages Optimized: ${locationChunks.length} chunks created`);

      // Log chunk sizes for monitoring
      locationChunks.forEach(chunkName => {
        const chunk = bundle[chunkName];
        if (chunk.type === 'chunk') {
          const sizeKB = Math.round(chunk.code.length / 1024);
          console.log(`  🏢 ${chunkName}: ${sizeKB}KB`);

          // Warn about oversized location pages
          if (sizeKB > 50) {
            console.warn(`⚠️  Large location chunk: ${chunkName} (${sizeKB}KB)`);
          }
        }
      });
    },

    // Optimize dynamic imports for location pages
    resolveId(id) {
      if (id.includes('locations/') && !id.includes('.tsx')) {
        return id + '.tsx';
      }
      return null;
    }
  };
};

// Australian CDN optimization plugin
const australianCDNOptimizer = (): Plugin => {
  return {
    name: 'australian-cdn-optimizer',
    generateBundle(options, bundle) {
      // Replace image URLs with Australian CDN
      Object.values(bundle).forEach(chunk => {
        if (chunk.type === 'chunk') {
          chunk.code = chunk.code.replace(
            /\/src\/assets\//g,
            'https://cdn-au.mouldrestoration.com.au/assets/'
          );

          // Add Australian-specific resource hints
          chunk.code = chunk.code.replace(
            /<head>/g,
            `<head>
              <link rel="dns-prefetch" href="//cdn-au.mouldrestoration.com.au">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link rel="preconnect" href="https://analytics.google.com">
            `
          );
        }
      });
    }
  };
};

// Performance monitoring plugin
const performanceMonitorPlugin = (): Plugin => {
  const startTime = Date.now();

  return {
    name: 'performance-monitor',
    buildStart() {
      console.log('🚀 Melbourne Mould Website - Performance Build Started');
    },

    buildEnd() {
      const buildTime = Date.now() - startTime;
      console.log(`✅ Build completed in ${buildTime}ms`);
    },

    generateBundle(options, bundle) {
      // Analyze bundle composition
      const analysis = {
        totalChunks: 0,
        locationChunks: 0,
        componentChunks: 0,
        utilityChunks: 0,
        totalSizeKB: 0,
        largestChunk: { name: '', size: 0 }
      };

      Object.entries(bundle).forEach(([name, chunk]) => {
        if (chunk.type === 'chunk') {
          const sizeKB = Math.round(chunk.code.length / 1024);

          analysis.totalChunks++;
          analysis.totalSizeKB += sizeKB;

          if (sizeKB > analysis.largestChunk.size) {
            analysis.largestChunk = { name, size: sizeKB };
          }

          if (name.includes('locations/')) analysis.locationChunks++;
          else if (name.includes('components/')) analysis.componentChunks++;
          else if (name.includes('utils/')) analysis.utilityChunks++;
        }
      });

      // Performance report
      console.log('\n📊 Melbourne Bundle Analysis:');
      console.log(`  Total Chunks: ${analysis.totalChunks}`);
      console.log(`  Location Pages: ${analysis.locationChunks}`);
      console.log(`  Components: ${analysis.componentChunks}`);
      console.log(`  Utilities: ${analysis.utilityChunks}`);
      console.log(`  Total Size: ${analysis.totalSizeKB}KB`);
      console.log(`  Largest Chunk: ${analysis.largestChunk.name} (${analysis.largestChunk.size}KB)`);

      // Performance warnings
      if (analysis.totalSizeKB > 1000) {
        console.warn(`⚠️  Bundle size (${analysis.totalSizeKB}KB) exceeds 1MB recommendation`);
      }

      if (analysis.largestChunk.size > 250) {
        console.warn(`⚠️  Largest chunk (${analysis.largestChunk.size}KB) exceeds 250KB recommendation`);
      }

      console.log('🇦🇺 Optimized for Australian mobile networks\n');
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  return {
    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      isDevelopment && componentTagger(),
      melbourneLocationOptimizer(),
      isProduction && australianCDNOptimizer(),
      performanceMonitorPlugin(),

      // Bundle analyzer (run with ANALYZE=true)
      process.env.ANALYZE && visualizer({
        filename: 'dist/bundle-analysis.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    // Advanced build optimization for Australian networks
    build: {
      // Optimize for Australian mobile networks
      target: ['es2020', 'chrome80', 'safari13'], // Support for older Australian mobile devices

      // Advanced code splitting for location pages
      rollupOptions: {
        output: {
          // Melbourne location pages get their own chunks
          manualChunks(id) {
            // Location pages chunk strategy
            if (id.includes('/locations/')) {
              const locationMatch = id.match(/\/locations\/([^\/]+)\.tsx/);
              if (locationMatch) {
                return `location-${locationMatch[1].toLowerCase()}`;
              }
            }

            // Vendor chunks for better caching
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              if (id.includes('@radix-ui')) {
                return 'radix-vendor';
              }
              if (id.includes('lucide-react')) {
                return 'icons-vendor';
              }
              return 'vendor';
            }

            // Component chunks
            if (id.includes('/components/')) {
              if (id.includes('/seo/')) {
                return 'seo-components';
              }
              if (id.includes('/ui/')) {
                return 'ui-components';
              }
              return 'components';
            }

            // Utility chunks
            if (id.includes('/utils/')) {
              return 'utils';
            }
          },

          // Optimized chunk file names
          chunkFileNames: (chunkInfo) => {
            const name = chunkInfo.name;

            // Location pages get descriptive names for debugging
            if (name.startsWith('location-')) {
              return 'locations/[name]-[hash].js';
            }

            return 'chunks/[name]-[hash].js';
          },

          // Asset naming for Australian CDN
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') || [];
            const ext = info[info.length - 1];

            if (['png', 'jpg', 'jpeg', 'webp', 'avif'].includes(ext || '')) {
              return 'images/[name]-[hash].[ext]';
            }

            if (['woff', 'woff2', 'ttf'].includes(ext || '')) {
              return 'fonts/[name]-[hash].[ext]';
            }

            return 'assets/[name]-[hash].[ext]';
          }
        },

        // External dependencies for CDN loading
        external: isProduction ? [
          // These could be loaded from CDN in production
          // 'react',
          // 'react-dom'
        ] : []
      },

      // Compression and minification
      minify: 'esbuild', // Faster than terser for development builds

      // Source maps for debugging (disabled in production for size)
      sourcemap: isDevelopment ? true : false,

      // Chunk size warnings optimized for Australian mobile
      chunkSizeWarningLimit: 250, // 250KB chunks for mobile networks

      // Asset inlining threshold (smaller for mobile)
      assetsInlineLimit: 2048, // 2KB instead of default 4KB

      // CSS code splitting
      cssCodeSplit: true,
    },

    // Optimization settings
    optimizeDeps: {
      // Pre-bundle dependencies for faster development
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@tanstack/react-query',
        'lucide-react'
      ],

      // Exclude location pages from pre-bundling (they should be dynamic)
      exclude: [
        'src/pages/locations/*'
      ]
    },

    // Australian mobile development settings
    preview: {
      host: '0.0.0.0', // Allow mobile device access
      port: 3000,
      cors: true
    },

    // CSS optimization
    css: {
      devSourcemap: isDevelopment,
      postcss: {
        plugins: [
          // Add Australian mobile-specific CSS optimizations
          require('autoprefixer')({
            overrideBrowserslist: [
              '>0.2% in AU', // Australian browser usage
              'last 2 versions',
              'iOS >= 12', // Australian iPhone usage
              'Samsung >= 10' // Australian Android usage
            ]
          }),

          // CSS optimization for Australian mobile networks
          isProduction && require('cssnano')({
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              minifyFontValues: true,
              minifySelectors: true
            }]
          })
        ].filter(Boolean)
      }
    },

    // Environment variables for performance monitoring
    define: {
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      __LOCATION_COUNT__: JSON.stringify(145), // Number of Melbourne location pages
      __PERFORMANCE_MODE__: JSON.stringify(isProduction ? 'production' : 'development')
    },

    // esbuild configuration for Australian mobile support
    esbuild: {
      // Support for older Australian mobile devices
      target: 'es2020',

      // Optimize for size on production
      minifyIdentifiers: isProduction,
      minifySyntax: isProduction,
      minifyWhitespace: isProduction,

      // Drop console logs in production
      drop: isProduction ? ['console', 'debugger'] : [],

      // Legal comments handling
      legalComments: 'none'
    }
  };
});