// React Performance Analyzer for Melbourne Lead Management System

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  mountTime: number;
  updateTime: number;
  memoryUsage?: number;
  bundleSize?: number;
  networkRequests?: number;
}

interface CoreWebVitals {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

class MobilePerformanceAnalyzer {
  private metrics: Map<string, PerformanceMetrics> = new Map();
  private coreWebVitals: Partial<CoreWebVitals> = {};
  private observer: PerformanceObserver | null = null;
  private memoryObserver: PerformanceObserver | null = null;

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    if (!('PerformanceObserver' in window)) return;

    // Core Web Vitals Observer
    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.processPerformanceEntry(entry);
        }
      });

      // Observe multiple entry types for comprehensive monitoring
      this.observer.observe({ entryTypes: ['navigation', 'measure', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Memory usage observer
      this.memoryObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure' && entry.name.includes('memory')) {
            this.trackMemoryUsage(entry);
          }
        }
      });

      this.memoryObserver.observe({ entryTypes: ['measure'] });

    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }

  private processPerformanceEntry(entry: PerformanceEntry) {
    switch (entry.entryType) {
      case 'navigation':
        this.trackNavigationTiming(entry as PerformanceNavigationTiming);
        break;
      case 'paint':
        this.trackPaintTiming(entry as PerformancePaintTiming);
        break;
      case 'largest-contentful-paint':
        this.coreWebVitals.lcp = entry.startTime;
        break;
      case 'first-input':
        const fidEntry = entry as PerformanceEventTiming;
        this.coreWebVitals.fid = fidEntry.processingStart - fidEntry.startTime;
        break;
      case 'layout-shift':
        const clsEntry = entry as any; // LayoutShift entry type
        if (!clsEntry.hadRecentInput) {
          this.coreWebVitals.cls = (this.coreWebVitals.cls || 0) + clsEntry.value;
        }
        break;
      case 'measure':
        this.trackCustomMeasure(entry as PerformanceMeasure);
        break;
    }
  }

  private trackNavigationTiming(entry: PerformanceNavigationTiming) {
    this.coreWebVitals.ttfb = entry.responseStart - entry.requestStart;

    // Log navigation performance for mobile optimization
    console.log('[PERF] Navigation Timing:', {
      ttfb: this.coreWebVitals.ttfb,
      domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
      loadComplete: entry.loadEventEnd - entry.loadEventStart,
      totalTime: entry.loadEventEnd - entry.fetchStart
    });
  }

  private trackPaintTiming(entry: PerformancePaintTiming) {
    if (entry.name === 'first-contentful-paint') {
      this.coreWebVitals.fcp = entry.startTime;
    }
  }

  private trackCustomMeasure(entry: PerformanceMeasure) {
    const componentName = this.extractComponentName(entry.name);
    if (!componentName) return;

    const existingMetrics = this.metrics.get(componentName) || {
      componentName,
      renderTime: 0,
      mountTime: 0,
      updateTime: 0
    };

    if (entry.name.includes('render')) {
      existingMetrics.renderTime = entry.duration;
    } else if (entry.name.includes('mount')) {
      existingMetrics.mountTime = entry.duration;
    } else if (entry.name.includes('update')) {
      existingMetrics.updateTime = entry.duration;
    }

    this.metrics.set(componentName, existingMetrics);
  }

  private trackMemoryUsage(entry: PerformanceMeasure) {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const componentName = this.extractComponentName(entry.name);

      if (componentName) {
        const metrics = this.metrics.get(componentName);
        if (metrics) {
          metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
          this.metrics.set(componentName, metrics);
        }
      }
    }
  }

  private extractComponentName(measureName: string): string | null {
    // Extract component name from measure names like "MobileLeadCard-render-1"
    const match = measureName.match(/^([A-Z][a-zA-Z]+)(?:-|_)/);
    return match ? match[1] : null;
  }

  // Public methods for React components to use

  public measureComponent(componentName: string, operation: 'render' | 'mount' | 'update', fn: () => void): void {
    const measureName = `${componentName}-${operation}-${Date.now()}`;

    performance.mark(`${measureName}-start`);
    fn();
    performance.mark(`${measureName}-end`);
    performance.measure(measureName, `${measureName}-start`, `${measureName}-end`);
  }

  public trackBundleSize(componentName: string, size: number): void {
    const metrics = this.metrics.get(componentName) || {
      componentName,
      renderTime: 0,
      mountTime: 0,
      updateTime: 0
    };

    metrics.bundleSize = size;
    this.metrics.set(componentName, metrics);
  }

  public trackNetworkRequests(componentName: string, count: number): void {
    const metrics = this.metrics.get(componentName) || {
      componentName,
      renderTime: 0,
      mountTime: 0,
      updateTime: 0
    };

    metrics.networkRequests = count;
    this.metrics.set(componentName, metrics);
  }

  public getMetrics(componentName?: string): PerformanceMetrics[] {
    if (componentName) {
      const metric = this.metrics.get(componentName);
      return metric ? [metric] : [];
    }
    return Array.from(this.metrics.values());
  }

  public getCoreWebVitals(): CoreWebVitals {
    return {
      lcp: this.coreWebVitals.lcp || 0,
      fid: this.coreWebVitals.fid || 0,
      cls: this.coreWebVitals.cls || 0,
      fcp: this.coreWebVitals.fcp || 0,
      ttfb: this.coreWebVitals.ttfb || 0
    };
  }

  public generateReport(): string {
    const vitals = this.getCoreWebVitals();
    const metrics = this.getMetrics();

    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      coreWebVitals: {
        lcp: `${vitals.lcp.toFixed(2)}ms ${vitals.lcp < 2500 ? '✅' : '❌'}`,
        fid: `${vitals.fid.toFixed(2)}ms ${vitals.fid < 100 ? '✅' : '❌'}`,
        cls: `${vitals.cls.toFixed(4)} ${vitals.cls < 0.1 ? '✅' : '❌'}`,
        fcp: `${vitals.fcp.toFixed(2)}ms ${vitals.fcp < 1800 ? '✅' : '❌'}`,
        ttfb: `${vitals.ttfb.toFixed(2)}ms ${vitals.ttfb < 600 ? '✅' : '❌'}`
      },
      componentMetrics: metrics.map(metric => ({
        component: metric.componentName,
        renderTime: `${metric.renderTime.toFixed(2)}ms`,
        mountTime: `${metric.mountTime.toFixed(2)}ms`,
        updateTime: `${metric.updateTime.toFixed(2)}ms`,
        memoryUsage: metric.memoryUsage ? `${metric.memoryUsage.toFixed(2)}MB` : 'N/A',
        bundleSize: metric.bundleSize ? `${(metric.bundleSize / 1024).toFixed(2)}KB` : 'N/A',
        networkRequests: metric.networkRequests || 0
      })),
      recommendations: this.generateRecommendations(vitals, metrics)
    };

    return JSON.stringify(report, null, 2);
  }

  private generateRecommendations(vitals: CoreWebVitals, metrics: PerformanceMetrics[]): string[] {
    const recommendations: string[] = [];

    // Core Web Vitals recommendations
    if (vitals.lcp > 2500) {
      recommendations.push('LCP > 2.5s: Optimize largest content elements, use lazy loading for images');
    }
    if (vitals.fid > 100) {
      recommendations.push('FID > 100ms: Reduce JavaScript execution time, use React.memo for heavy components');
    }
    if (vitals.cls > 0.1) {
      recommendations.push('CLS > 0.1: Reserve space for dynamic content, avoid inserting content above existing');
    }
    if (vitals.fcp > 1800) {
      recommendations.push('FCP > 1.8s: Inline critical CSS, reduce render-blocking resources');
    }
    if (vitals.ttfb > 600) {
      recommendations.push('TTFB > 600ms: Optimize server response time, use CDN for Australian users');
    }

    // Component-specific recommendations
    const slowComponents = metrics.filter(m => m.renderTime > 16.67); // > 60fps threshold
    if (slowComponents.length > 0) {
      recommendations.push(`Slow components detected: ${slowComponents.map(c => c.componentName).join(', ')} - Consider React.memo and useMemo`);
    }

    const memoryHeavyComponents = metrics.filter(m => m.memoryUsage && m.memoryUsage > 50);
    if (memoryHeavyComponents.length > 0) {
      recommendations.push(`High memory usage: ${memoryHeavyComponents.map(c => c.componentName).join(', ')} - Check for memory leaks`);
    }

    return recommendations;
  }

  public startContinuousMonitoring(intervalMs: number = 30000): void {
    setInterval(() => {
      const vitals = this.getCoreWebVitals();
      console.log('[PERF] Core Web Vitals Update:', vitals);

      // Send to analytics if vitals are concerning
      if (vitals.lcp > 2500 || vitals.fid > 100 || vitals.cls > 0.1) {
        this.sendToAnalytics(vitals);
      }
    }, intervalMs);
  }

  private sendToAnalytics(vitals: CoreWebVitals): void {
    // Integration point for analytics services
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        lcp: vitals.lcp,
        fid: vitals.fid,
        cls: vitals.cls
      });
    }

    // Could also send to other analytics services
    console.log('[ANALYTICS] Sending Core Web Vitals:', vitals);
  }

  public disconnect(): void {
    this.observer?.disconnect();
    this.memoryObserver?.disconnect();
  }
}

// Singleton instance
export const performanceAnalyzer = new MobilePerformanceAnalyzer();

// React Hook for component performance monitoring
export function usePerformanceAnalyzer(componentName: string) {
  const measureRender = (fn: () => void) => {
    performanceAnalyzer.measureComponent(componentName, 'render', fn);
  };

  const measureMount = (fn: () => void) => {
    performanceAnalyzer.measureComponent(componentName, 'mount', fn);
  };

  const measureUpdate = (fn: () => void) => {
    performanceAnalyzer.measureComponent(componentName, 'update', fn);
  };

  return { measureRender, measureMount, measureUpdate };
}

// Bundle size tracking utility
export function trackBundleSize(componentName: string): Promise<number> {
  return new Promise((resolve) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Estimate bundle contribution (simplified)
        const size = document.documentElement.innerHTML.length;
        performanceAnalyzer.trackBundleSize(componentName, size);
        resolve(size);
      });
    } else {
      setTimeout(() => {
        const size = document.documentElement.innerHTML.length;
        performanceAnalyzer.trackBundleSize(componentName, size);
        resolve(size);
      }, 0);
    }
  });
}

// Network request tracking
export function trackNetworkRequests(componentName: string, requestCount: number): void {
  performanceAnalyzer.trackNetworkRequests(componentName, requestCount);
}

// Export for global access
declare global {
  interface Window {
    mobilePerformanceAnalyzer: MobilePerformanceAnalyzer;
  }
}

if (typeof window !== 'undefined') {
  window.mobilePerformanceAnalyzer = performanceAnalyzer;
}