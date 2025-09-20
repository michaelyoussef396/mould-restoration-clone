import { createRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.tsx";
import "./index.css";

// Initialize advanced LCP optimization asynchronously to avoid static import
let lcpOptimizer: any;

// Get the root element
const rootElement = document.getElementById("root")!;

// Create root with optimizations
const root = createRoot(rootElement);

// Render app with performance monitoring
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Initialize LCP optimization and track performance metrics
if (typeof window !== 'undefined') {
  (async () => {
    try {
      const { initializeAdvancedLCPOptimization, LCPPerformanceMonitor } = await import('./utils/advancedLCPOptimization');

      // Initialize advanced LCP optimization immediately for sub-2.5s performance
      lcpOptimizer = initializeAdvancedLCPOptimization({
        targetLCP: 2400, // Aggressive 2.4s target for 95%+ score
        enablePerformanceTracking: true,
        enableEarlyImageDecode: true,
        enableCriticalResourcePreload: true,
      });

      // Track performance metrics after initialization
      setTimeout(async () => {
        const metrics = lcpOptimizer.getPerformanceMetrics();
        console.log('🎯 LCP Optimization Metrics:', metrics);

        const allMetrics = await LCPPerformanceMonitor.getAllMetrics();
        console.log('📊 Complete Performance Metrics:', allMetrics);

        // Log performance achievement
        if (allMetrics.lcp <= 2500) {
          console.log('✅ LCP TARGET ACHIEVED: ' + allMetrics.lcp.toFixed(2) + 'ms');
          console.log('🚀 Performance Score: ' + allMetrics.performance_score + '%');
        } else {
          console.log('⚠️ LCP needs optimization: ' + allMetrics.lcp.toFixed(2) + 'ms');
        }
      }, 3000);
    } catch (error) {
      console.warn('Performance monitoring error:', error);
    }
  })();
}
