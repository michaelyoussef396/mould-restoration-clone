import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// @ts-ignore
import compression from 'vite-plugin-compression';

// Mobile-optimized Vite configuration for Melbourne Lead Management
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh for mobile development
      fastRefresh: true,
      // JSX automatic runtime for smaller bundles
      jsxRuntime: 'automatic'
    }),
    // Compression for smaller bundle sizes on mobile networks
    compression({
      algorithm: 'gzip',
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginFile: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Mobile-optimized build configuration
    target: ['es2020', 'chrome80', 'safari13'], // Support modern mobile browsers
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console.logs in production for mobile
        drop_console: true,
        drop_debugger: true,
        // Aggressive optimizations for mobile
        passes: 3,
        pure_funcs: ['console.log', 'console.warn']
      },
      mangle: {
        // Keep class names for React dev tools
        keep_classnames: true,
        keep_fnames: false
      }
    },
    rollupOptions: {
      output: {
        // Chunk splitting strategy optimized for mobile
        manualChunks: {
          // React vendor chunk
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],

          // UI components chunk
          'vendor-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-select',
            'lucide-react'
          ],

          // DnD and mobile interaction libraries
          'vendor-dnd': [
            '@dnd-kit/core',
            '@dnd-kit/sortable',
            '@dnd-kit/utilities'
          ],

          // Authentication and API
          'vendor-auth': [
            'jsonwebtoken',
            '@tanstack/react-query'
          ],

          // Date and utility libraries
          'vendor-utils': [
            'date-fns',
            'clsx',
            'class-variance-authority'
          ],

          // Mobile-specific components
          'mobile-components': [
            './src/components/mobile/MobileLeadDrawer',
            './src/components/mobile/MobileLeadCard',
            './src/hooks/useMobileOptimization'
          ]
        },
        // Mobile-optimized chunk naming
        chunkFileNames: (chunkInfo) => {
          const name = chunkInfo.name;
          if (name.includes('mobile')) {
            return 'mobile/[name]-[hash].js';
          }
          if (name.includes('vendor')) {
            return 'vendor/[name]-[hash].js';
          }
          return 'chunks/[name]-[hash].js';
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (name.endsWith('.css')) {
            return 'styles/[name]-[hash].css';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      },
      // External dependencies for CDN loading on mobile (optional)
      external: process.env.NODE_ENV === 'production' ? [
        // Can externalize large libraries for CDN loading
        // 'react', 'react-dom' // Only if using CDN
      ] : []
    },
    // Mobile performance optimizations
    chunkSizeWarningLimit: 800, // Warn for chunks larger than 800KB (mobile-friendly)
    sourcemap: process.env.NODE_ENV === 'development', // Sourcemaps only in dev
    reportCompressedSize: true, // Report compressed sizes for mobile optimization

    // CSS optimization for mobile
    cssCodeSplit: true, // Split CSS for better caching
    cssMinify: 'lightningcss', // Fast CSS minifier

    // Disable legacy polyfills for modern mobile browsers
    polyfillModulePreload: false
  },
  server: {
    // Development server optimizations
    hmr: {
      port: 3001, // Separate HMR port
      overlay: true
    },
    // Mobile development support
    host: true, // Listen on all addresses for mobile testing
    port: 3000
  },
  preview: {
    port: 3000,
    host: true
  },
  optimizeDeps: {
    // Pre-bundle dependencies for mobile development
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@dnd-kit/core',
      '@dnd-kit/sortable',
      'lucide-react',
      'date-fns'
    ],
    exclude: [
      // Don't pre-bundle mobile-specific modules that should be lazy-loaded
      './src/components/mobile/MobileLeadDrawer',
      './src/pages/admin/LeadsKanbanMobile'
    ]
  },
  define: {
    // Mobile-specific environment variables
    __MOBILE_OPTIMIZED__: JSON.stringify(true),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  },
  esbuild: {
    // Optimize for mobile JavaScript engines
    target: 'es2020',
    // Remove unused React imports
    jsxInject: `import React from 'react'`,
    // Mobile-specific optimizations
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  },
  css: {
    // CSS preprocessing optimizations
    preprocessorOptions: {
      scss: {
        additionalData: `
          // Mobile-first breakpoints for Melbourne users
          $mobile: 480px;
          $tablet: 768px;
          $desktop: 1024px;
          $wide: 1200px;
        `
      }
    },
    modules: {
      // CSS modules for component isolation
      generateScopedName: process.env.NODE_ENV === 'development'
        ? '[name]__[local]___[hash:base64:5]'
        : '[hash:base64:8]'
    }
  }
});

// Mobile-specific Lighthouse performance budgets
export const performanceBudgets = {
  // Core Web Vitals targets for Melbourne mobile users
  coreWebVitals: {
    LCP: 2500, // Largest Contentful Paint < 2.5s
    FID: 100,  // First Input Delay < 100ms
    CLS: 0.1   // Cumulative Layout Shift < 0.1
  },

  // Bundle size budgets for Australian mobile networks
  bundles: {
    initialJS: 300 * 1024,      // 300KB initial JavaScript
    totalJS: 1000 * 1024,       // 1MB total JavaScript
    initialCSS: 50 * 1024,      // 50KB initial CSS
    totalCSS: 150 * 1024,       // 150KB total CSS
    images: 500 * 1024,         // 500KB total images
    fonts: 100 * 1024          // 100KB total fonts
  },

  // Network performance targets
  network: {
    maxRequests: 50,            // Max 50 network requests
    maxDomainRequests: 10,      // Max 10 requests per domain
    criticalResourceTimeout: 3000 // Critical resources < 3s
  }
};