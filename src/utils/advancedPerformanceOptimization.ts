// Advanced Performance Optimization for Melbourne Mould Restoration Website
// Targeting Australian mobile networks and Core Web Vitals excellence

import { lazy, ComponentType } from 'react';

// Australian Network Performance Constants
export const AUSTRALIAN_PERFORMANCE_TARGETS = {
  lcp: {
    good: 2500,      // 2.5s for Australian 4G
    needsWork: 4000, // 4.0s threshold
    poor: 6000       // 6.0s+ is poor
  },
  inp: {
    good: 200,       // 200ms for mobile interactions
    needsWork: 500,  // 500ms threshold
    poor: 1000       // 1s+ is poor
  },
  cls: {
    good: 0.1,       // 0.1 layout shift score
    needsWork: 0.25, // 0.25 threshold
    poor: 0.5        // 0.5+ is poor
  },
  // Australian mobile device sizes
  deviceBreakpoints: {
    mobile: { min: 320, max: 768 },    // Australian mobile devices
    tablet: { min: 768, max: 1024 },   // iPad and Android tablets
    desktop: { min: 1024, max: 1920 }  // Desktop screens
  }
} as const;

// Advanced Route-Based Code Splitting
export interface LazyRouteConfig {
  location: string;
  priority: 'high' | 'medium' | 'low';
  preload?: boolean;
  adjacentLocations?: string[];
}

export class AdvancedRouteSplitter {
  private loadedRoutes = new Set<string>();
  private preloadingRoutes = new Set<string>();
  private routeCache = new Map<string, ComponentType<any>>();

  // Create optimized lazy-loaded location component
  createLazyLocationRoute = (config: LazyRouteConfig) => {
    const { location, priority, preload = false } = config;

    return lazy(() => {
      // Mark as loading
      this.loadedRoutes.add(location);

      return import(`../pages/locations/${location}.tsx`)
        .then(module => {
          // Cache the component
          const Component = module[location] || module.default;
          this.routeCache.set(location, Component);

          // Preload adjacent locations if high priority
          if (priority === 'high' && config.adjacentLocations) {
            this.preloadAdjacentLocations(config.adjacentLocations);
          }

          return { default: Component };
        })
        .catch(error => {
          console.error(`Failed to load location: ${location}`, error);
          // Fallback to generic location component
          return import('../components/LocationNotFound').then(fallback => ({
            default: fallback.LocationNotFound || fallback.default
          }));
        });
    });
  };

  // Intelligent preloading based on user behavior
  preloadAdjacentLocations = (locations: string[]) => {
    const networkInfo = this.getNetworkInfo();
    const maxPreloads = networkInfo.effectiveType === '4g' ? 3 : 1;

    locations.slice(0, maxPreloads).forEach(location => {
      if (!this.loadedRoutes.has(location) && !this.preloadingRoutes.has(location)) {
        this.preloadingRoutes.add(location);

        // Use requestIdleCallback for non-blocking preload
        this.schedulePreload(() => {
          import(`../pages/locations/${location}.tsx`).catch(() => {
            // Silently fail for preloads
            this.preloadingRoutes.delete(location);
          });
        });
      }
    });
  };

  private schedulePreload = (callback: () => void) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback, { timeout: 2000 });
    } else {
      setTimeout(callback, 100);
    }
  };

  private getNetworkInfo = () => {
    const connection = (navigator as any).connection || (navigator as any).mozConnection;
    return connection || { effectiveType: '4g', downlink: 10 };
  };

  // Get route loading status
  getRouteStatus = () => ({
    loaded: Array.from(this.loadedRoutes),
    preloading: Array.from(this.preloadingRoutes),
    cached: Array.from(this.routeCache.keys())
  });
}

// Advanced Image Optimization for Australian Networks
export interface AustralianImageConfig {
  src: string;
  alt: string;
  location?: string;
  service?: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  mobileOptimized?: boolean;
}

export class AustralianImageOptimizer {
  private loadedImages = new Set<string>();
  private preloadQueue: string[] = [];

  // Generate optimized srcSet for Australian devices
  generateAustralianSrcSet = (baseSrc: string): string => {
    const sizes = [375, 414, 768, 1024, 1440, 1920]; // Australian device sizes
    const ext = baseSrc.split('.').pop()?.toLowerCase();
    const baseName = baseSrc.replace(`.${ext}`, '');

    return sizes.map(size => {
      // Prefer AVIF, fallback to WebP, then original
      const avifSrc = `${baseName}_${size}w.avif`;
      const webpSrc = `${baseName}_${size}w.webp`;
      return `${webpSrc} ${size}w`; // Start with WebP for broader support
    }).join(', ');
  };

  // Generate responsive sizes for Australian mobile-first approach
  generateResponsiveSizes = (priority: string): string => {
    switch (priority) {
      case 'critical':
        return '100vw'; // Full viewport for hero images
      case 'high':
        return '(max-width: 375px) 100vw, (max-width: 768px) 75vw, 50vw';
      case 'medium':
        return '(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw';
      default:
        return '(max-width: 375px) 50vw, (max-width: 768px) 33vw, 25vw';
    }
  };

  // Smart preloading based on Australian network conditions
  preloadCriticalImages = (images: AustralianImageConfig[]) => {
    const networkInfo = this.getNetworkInfo();
    const criticalImages = images.filter(img => img.priority === 'critical');

    // Adjust preload count based on network speed
    const preloadCount = networkInfo.downlink > 1.5 ?
      Math.min(criticalImages.length, 3) : 1;

    criticalImages.slice(0, preloadCount).forEach(config => {
      this.preloadImage(config);
    });
  };

  private preloadImage = (config: AustralianImageConfig) => {
    const { src, priority } = config;

    if (this.loadedImages.has(src)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = this.convertToWebP(src);

    // Set fetch priority for critical images
    if (priority === 'critical') {
      link.setAttribute('fetchpriority', 'high');
    }

    // Add CORS for CDN images
    if (src.includes('cdn-au.') || src.includes('cloudfront.')) {
      link.crossOrigin = 'anonymous';
    }

    document.head.appendChild(link);
    this.loadedImages.add(src);
  };

  private convertToWebP = (src: string): string => {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  private getNetworkInfo = () => {
    const connection = (navigator as any).connection;
    return connection || { effectiveType: '4g', downlink: 10 };
  };

  // Track image loading performance
  trackImagePerformance = (src: string, startTime: number) => {
    const loadTime = performance.now() - startTime;
    const networkInfo = this.getNetworkInfo();

    // Log performance data for analysis
      loadTime: Math.round(loadTime),
      networkType: networkInfo.effectiveType,
      downlink: networkInfo.downlink
    });

    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'image_performance', {
        load_time: Math.round(loadTime),
        network_type: networkInfo.effectiveType,
        image_src: src
      });
    }
  };
}

// Advanced React Performance Hooks
export const useAustralianPerformanceOptimization = (location?: string) => {
  const [performanceMetrics, setPerformanceMetrics] = React.useState({
    lcp: 0,
    inp: 0,
    cls: 0,
    networkType: 'unknown'
  });

  React.useEffect(() => {
    const monitor = new AustralianPerformanceMonitor();

    // Start monitoring
    monitor.startMonitoring((metrics) => {
      setPerformanceMetrics(metrics);
    });

    // Track location-specific performance
    if (location) {
      monitor.trackLocationPerformance(location);
    }

    return () => monitor.stopMonitoring();
  }, [location]);

  return performanceMetrics;
};

// Memory Optimization for Large Location Pages
export const useMemoryOptimization = () => {
  const observers = React.useRef(new Map<string, IntersectionObserver>());
  const timers = React.useRef(new Map<string, NodeJS.Timeout>());
  const listeners = React.useRef(new Map<string, EventListener>());

  const addObserver = React.useCallback((key: string, observer: IntersectionObserver) => {
    // Clean up existing observer if present
    const existing = observers.current.get(key);
    if (existing) {
      existing.disconnect();
    }
    observers.current.set(key, observer);
  }, []);

  const addTimer = React.useCallback((key: string, timer: NodeJS.Timeout) => {
    // Clear existing timer if present
    const existing = timers.current.get(key);
    if (existing) {
      clearTimeout(existing);
    }
    timers.current.set(key, timer);
  }, []);

  const addListener = React.useCallback((key: string, element: Element, event: string, listener: EventListener) => {
    // Remove existing listener if present
    const existing = listeners.current.get(key);
    if (existing) {
      element.removeEventListener(event, existing);
    }
    element.addEventListener(event, listener);
    listeners.current.set(key, listener);
  }, []);

  // Cleanup all resources
  React.useEffect(() => {
    return () => {
      // Disconnect all observers
      observers.current.forEach(observer => observer.disconnect());
      observers.current.clear();

      // Clear all timers
      timers.current.forEach(timer => clearTimeout(timer));
      timers.current.clear();

      // Remove all listeners (requires element reference - handled by individual components)
      listeners.current.clear();
    };
  }, []);

  return { addObserver, addTimer, addListener };
};

// Australian Network-Aware Performance Monitor
class AustralianPerformanceMonitor {
  private observer?: PerformanceObserver;
  private metricsCallback?: (metrics: any) => void;
  private currentMetrics = {
    lcp: 0,
    inp: 0,
    cls: 0,
    networkType: 'unknown',
    location: '',
    timestamp: 0
  };

  startMonitoring = (callback: (metrics: any) => void) => {
    this.metricsCallback = callback;
    this.initializeObserver();
    this.detectNetworkType();
  };

  stopMonitoring = () => {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  };

  private initializeObserver = () => {
    if (!('PerformanceObserver' in window)) return;

    this.observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.processEntry(entry);
      }
    });

    try {
      this.observer.observe({
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']
      });
    } catch (error) {
      console.warn('Performance observer not fully supported:', error);
    }
  };

  private processEntry = (entry: PerformanceEntry) => {
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        this.currentMetrics.lcp = (entry as any).startTime;
        break;
      case 'first-input':
        this.currentMetrics.inp = (entry as any).processingStart - (entry as any).startTime;
        break;
      case 'layout-shift':
        this.currentMetrics.cls += (entry as any).value;
        break;
    }

    this.currentMetrics.timestamp = Date.now();
    this.metricsCallback?.(this.currentMetrics);
  };

  private detectNetworkType = () => {
    const connection = (navigator as any).connection;
    if (connection) {
      this.currentMetrics.networkType = connection.effectiveType;

      // Listen for network changes
      connection.addEventListener('change', () => {
        this.currentMetrics.networkType = connection.effectiveType;
        this.metricsCallback?.(this.currentMetrics);
      });
    }
  };

  trackLocationPerformance = (location: string) => {
    this.currentMetrics.location = location;

    // Track location-specific metrics
    const startTime = performance.now();

    // Use requestIdleCallback to avoid blocking
    requestIdleCallback(() => {
      const processingTime = performance.now() - startTime;

        processingTime: Math.round(processingTime),
        networkType: this.currentMetrics.networkType
      });
    });
  };
}

// Bundle Analysis and Optimization
export const analyzeBundleSize = () => {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const jsEntries = entries.filter(entry =>
      entry.name.includes('.js') || entry.name.includes('.tsx')
    );

    const totalJSSize = jsEntries.reduce((total, entry) => {
      return total + ((entry as any).transferSize || 0);
    }, 0);

      totalJSFiles: jsEntries.length,
      totalSizeKB: Math.round(totalJSSize / 1024),
      largestFile: jsEntries.reduce((largest, current) =>
        ((current as any).transferSize || 0) > ((largest as any).transferSize || 0)
          ? current
          : largest
      )
    });
  });

  observer.observe({ entryTypes: ['resource'] });

  // Stop observing after 10 seconds
  setTimeout(() => observer.disconnect(), 10000);
};

// Export main optimization classes
export const routeSplitter = new AdvancedRouteSplitter();
export const imageOptimizer = new AustralianImageOptimizer();

// Convenience functions
export const optimizeForAustralianMobile = {
  preloadCriticalResources: (location: string) => {
    const criticalImages = [
      { src: `/images/${location.toLowerCase()}-hero.jpg`, priority: 'critical' as const },
      { src: '/images/professional-mould-inspection.jpg', priority: 'high' as const },
      { src: '/images/mould-removal-process.jpg', priority: 'medium' as const }
    ];

    imageOptimizer.preloadCriticalImages(criticalImages.map(img => ({
      ...img,
      alt: `Professional mould service ${location} Melbourne`,
      location
    })));
  },

  createOptimizedLocationRoute: (location: string, adjacentLocations: string[]) => {
    return routeSplitter.createLazyLocationRoute({
      location,
      priority: 'high',
      preload: true,
      adjacentLocations
    });
  },

  trackPerformance: (location: string) => {
    // Initialize performance tracking for the location
    const monitor = new AustralianPerformanceMonitor();
    monitor.startMonitoring((metrics) => {
    });
    monitor.trackLocationPerformance(location);
  }
};

export default {
  routeSplitter,
  imageOptimizer,
  useAustralianPerformanceOptimization,
  useMemoryOptimization,
  optimizeForAustralianMobile,
  analyzeBundleSize,
  AUSTRALIAN_PERFORMANCE_TARGETS
};