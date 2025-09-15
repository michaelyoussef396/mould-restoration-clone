import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Image optimization for Core Web Vitals
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Organize assets by type for better caching
          let extType = assetInfo.name?.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType ?? '')) {
            extType = 'images';
          }
          if (/woff2?|ttf|eot/i.test(extType ?? '')) {
            extType = 'fonts';
          }
          return `${extType}/[name]-[hash][extname]`;
        },
      },
    },
    // Optimize for Australian mobile networks
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
  },
  // Optimize image loading for Melbourne local SEO
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.svg'],
}));