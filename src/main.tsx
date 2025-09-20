import { createRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.tsx";
import "./index.css";
import { initializeAdvancedLCPOptimization } from './utils/advancedLCPOptimization';

// Initialize advanced LCP optimization immediately for sub-2.5s performance
const lcpOptimizer = initializeAdvancedLCPOptimization({
  targetLCP: 2400, // Aggressive 2.4s target for 95%+ score
  enablePerformanceTracking: true,
  enableEarlyImageDecode: true,
  enableCriticalResourcePreload: true,
});

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

// Track performance metrics in development and production
if (typeof window !== 'undefined') {
  setTimeout(async () => {
    const metrics = lcpOptimizer.getPerformanceMetrics();
    console.log('🎯 LCP Optimization Metrics:', metrics);

    try {
      const { LCPPerformanceMonitor } = await import('./utils/advancedLCPOptimization');
      const allMetrics = await LCPPerformanceMonitor.getAllMetrics();
      console.log('📊 Complete Performance Metrics:', allMetrics);

      // Log performance achievement
      if (allMetrics.lcp <= 2500) {
        console.log('✅ LCP TARGET ACHIEVED: ' + allMetrics.lcp.toFixed(2) + 'ms');
        console.log('🚀 Performance Score: ' + allMetrics.performance_score + '%');
      } else {
        console.log('⚠️ LCP needs optimization: ' + allMetrics.lcp.toFixed(2) + 'ms');
      }
    } catch (error) {
      console.warn('Performance monitoring error:', error);
    }
  }, 3000);
}
