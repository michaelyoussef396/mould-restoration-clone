import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  componentMountTime: number;
  renderTime: number;
  memoryUsage?: number;
}

export function usePerformanceMonitor(componentName: string) {
  const startTime = useRef<number>(performance.now());
  const mountTime = useRef<number | null>(null);

  useEffect(() => {
    // Component mounted
    mountTime.current = performance.now() - startTime.current;

    if (process.env.NODE_ENV === 'development') {
      console.log(`[PERF] ${componentName} mounted in ${mountTime.current.toFixed(2)}ms`);

      // Memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log(`[PERF] Memory usage: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
      }
    }

    return () => {
      if (process.env.NODE_ENV === 'development') {
        const unmountTime = performance.now() - startTime.current;
        console.log(`[PERF] ${componentName} unmounted after ${unmountTime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);

  const measureRender = () => {
    const renderTime = performance.now() - startTime.current;
    if (process.env.NODE_ENV === 'development') {
      console.log(`[PERF] ${componentName} render time: ${renderTime.toFixed(2)}ms`);
    }
    return renderTime;
  };

  return {
    measureRender,
    getMountTime: () => mountTime.current,
    getStartTime: () => startTime.current
  };
}

// Performance observer for Core Web Vitals - Updated for modern API
export function initPerformanceObserver() {
  if (typeof window === 'undefined' || import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING === 'false') return;

  // Observe Core Web Vitals with modern API
  try {
    // LCP Observer
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`[PERF] LCP: ${entry.startTime.toFixed(2)}ms`);
      }
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // FID/INP Observer
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`[PERF] FID: ${(entry.processingStart - entry.startTime).toFixed(2)}ms`);
      }
    });
    fidObserver.observe({ type: 'first-input', buffered: true });

    // CLS Observer
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          console.log(`[PERF] CLS: ${entry.value.toFixed(4)}`);
        }
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

    // Navigation Timing
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`[PERF] Navigation: ${entry.duration.toFixed(2)}ms`);
      }
    });
    navigationObserver.observe({ type: 'navigation', buffered: true });

  } catch (error) {
    console.warn('Performance Observer not supported:', error);
  }

  // Monitor long tasks with modern API
  try {
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn(`[PERF] Long task detected: ${entry.duration.toFixed(2)}ms`);
      }
    });

    longTaskObserver.observe({ type: 'longtask', buffered: true });
  } catch (error) {
    console.warn('Long Task Observer not supported:', error);
  }
}