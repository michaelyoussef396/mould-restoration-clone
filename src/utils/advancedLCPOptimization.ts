// Advanced LCP optimization utilities for breaking 2.5s barrier
// Targeting Australian mobile networks and Core Web Vitals excellence

export interface LCPOptimizationConfig {
  enableResourceHints: boolean;
  enableEarlyImageDecode: boolean;
  enableCriticalResourcePreload: boolean;
  enablePerformanceTracking: boolean;
  targetLCP: number; // milliseconds
}

export const ADVANCED_LCP_CONFIG: LCPOptimizationConfig = {
  enableResourceHints: true,
  enableEarlyImageDecode: true,
  enableCriticalResourcePreload: true,
  enablePerformanceTracking: true,
  targetLCP: 2500, // 2.5 seconds target
};

// Critical path resource loading for immediate LCP
export class LCPOptimizer {
  private config: LCPOptimizationConfig;
  private lcpObserver: PerformanceObserver | null = null;
  private resourceLoadTimes: Map<string, number> = new Map();

  constructor(config: LCPOptimizationConfig = ADVANCED_LCP_CONFIG) {
    this.config = config;
    this.initializeOptimizations();
  }

  private initializeOptimizations(): void {
    if (typeof window === 'undefined') return;

    // Early resource hints
    if (this.config.enableResourceHints) {
      this.addCriticalResourceHints();
    }

    // Early image decode
    if (this.config.enableEarlyImageDecode) {
      this.preDecodeHeroImage();
    }

    // Performance tracking
    if (this.config.enablePerformanceTracking) {
      this.setupLCPTracking();
    }

    // Critical resource preloading
    if (this.config.enableCriticalResourcePreload) {
      this.preloadCriticalResources();
    }
  }

  private addCriticalResourceHints(): void {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    ];

    hints.forEach(hint => {
      if (!document.querySelector(`link[href="${hint.href}"]`)) {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin;
        }
        document.head.appendChild(link);
      }
    });
  }

  private preDecodeHeroImage(): void {
    const heroImagePath = '/src/assets/hero-background-optimized.webp';
    const startTime = performance.now();

    // Create and decode image immediately
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.fetchPriority = 'high';
    img.decoding = 'async';

    img.onload = () => {
      const loadTime = performance.now() - startTime;
      this.resourceLoadTimes.set('hero-image', loadTime);

      // Decode image for faster painting
      img.decode().then(() => {
        document.documentElement.classList.add('hero-image-decoded');
        console.log('🚀 Hero image decoded in:', loadTime.toFixed(2) + 'ms');
      }).catch(() => {
        // Fallback if decode fails
        document.documentElement.classList.add('hero-image-decoded');
      });
    };

    img.onerror = () => {
      console.warn('❌ Hero image failed to load');
      document.documentElement.classList.add('hero-image-error');
    };

    img.src = heroImagePath;
  }

  private preloadCriticalResources(): void {
    const criticalResources = [
      {
        href: '/src/assets/hero-background-optimized.webp',
        as: 'image',
        type: 'image/webp',
        fetchpriority: 'high',
        importance: 'high'
      },
      {
        href: '/src/main.tsx',
        as: 'script',
        fetchpriority: 'high'
      },
      {
        href: '/src/index.css',
        as: 'style',
        fetchpriority: 'high'
      }
    ];

    criticalResources.forEach(resource => {
      if (!document.querySelector(`link[href="${resource.href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;

        if (resource.type) link.type = resource.type;
        if (resource.fetchpriority) link.setAttribute('fetchpriority', resource.fetchpriority);
        if (resource.importance) link.setAttribute('importance', resource.importance);

        link.crossOrigin = 'anonymous';

        // Insert at beginning for highest priority
        document.head.insertBefore(link, document.head.firstChild);
      }
    });
  }

  private setupLCPTracking(): void {
    if (!('PerformanceObserver' in window)) return;

    this.lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;

      if (lastEntry) {
        const lcpTime = lastEntry.startTime;
        const isWithinTarget = lcpTime <= this.config.targetLCP;

        // Log performance results
        if (isWithinTarget) {
          console.log('✅ LCP Target Achieved:', lcpTime.toFixed(2) + 'ms');
        } else {
          console.log('⚠️ LCP Above Target:', lcpTime.toFixed(2) + 'ms');
          console.log('Target:', this.config.targetLCP + 'ms');
          console.log('Difference:', (lcpTime - this.config.targetLCP).toFixed(2) + 'ms over');
        }

        // Track in analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'lcp_measurement', {
            value: Math.round(lcpTime),
            within_target: isWithinTarget,
            page_path: window.location.pathname,
          });
        }

        // Store for debugging
        this.resourceLoadTimes.set('lcp', lcpTime);
      }
    });

    this.lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  // Get performance metrics for debugging
  public getPerformanceMetrics(): Record<string, number> {
    return Object.fromEntries(this.resourceLoadTimes);
  }

  // Cleanup observers
  public cleanup(): void {
    if (this.lcpObserver) {
      this.lcpObserver.disconnect();
      this.lcpObserver = null;
    }
  }
}

// Advanced image optimization for LCP
export class LCPImageOptimizer {
  static optimizeHeroImage(src: string, options: {
    priority?: boolean;
    decode?: 'sync' | 'async' | 'auto';
    loading?: 'eager' | 'lazy';
    fetchPriority?: 'high' | 'low' | 'auto';
  } = {}): HTMLImageElement {
    const img = document.createElement('img');

    // LCP optimization attributes
    img.src = src;
    img.loading = options.loading || 'eager';
    img.decoding = options.decode || 'sync';
    img.fetchPriority = options.fetchPriority || 'high';
    img.crossOrigin = 'anonymous';

    // Size hints for layout stability
    img.width = 1920;
    img.height = 1080;
    img.sizes = '100vw';

    // Accessibility
    img.alt = 'Professional mould removal services in Melbourne';

    // Performance optimizations
    img.style.willChange = 'auto';
    img.style.transform = 'translateZ(0)';
    img.style.imageRendering = 'crisp-edges';

    return img;
  }

  static createLCPPreloadLink(src: string): HTMLLinkElement {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.type = 'image/webp';
    link.setAttribute('fetchpriority', 'high');
    link.setAttribute('importance', 'high');
    link.crossOrigin = 'anonymous';

    return link;
  }
}

// Critical CSS injection for immediate render
export class CriticalCSSInjector {
  private static injected = false;

  static injectCriticalCSS(): void {
    if (this.injected || typeof document === 'undefined') return;

    const criticalCSS = `
      /* Ultra-critical LCP styles */
      .lcp-hero-critical {
        position: relative !important;
        min-height: 100vh !important;
        background-color: #1e40af !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        overflow: hidden !important;
        will-change: auto !important;
        transform: translateZ(0) !important;
        contain: layout style paint !important;
      }

      .lcp-hero-image {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        opacity: 1 !important;
        transition: none !important;
        will-change: auto !important;
        transform: translateZ(0) !important;
      }

      .lcp-hero-content {
        position: relative !important;
        z-index: 2 !important;
        color: white !important;
        text-align: center !important;
        padding: 0 1rem !important;
        contain: layout style !important;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical-css', 'lcp');
    document.head.insertBefore(style, document.head.firstChild);

    this.injected = true;
  }
}

// Main optimization function
export function initializeAdvancedLCPOptimization(
  config?: Partial<LCPOptimizationConfig>
): LCPOptimizer {
  const finalConfig = { ...ADVANCED_LCP_CONFIG, ...config };

  // Inject critical CSS immediately
  CriticalCSSInjector.injectCriticalCSS();

  // Initialize optimizer
  const optimizer = new LCPOptimizer(finalConfig);

  // Setup cleanup on page unload
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      optimizer.cleanup();
    });
  }

  return optimizer;
}

// Performance monitoring utilities
export const LCPPerformanceMonitor = {
  // Track cumulative layout shift
  trackCLS(): Promise<number> {
    return new Promise((resolve) => {
      if (!('PerformanceObserver' in window)) {
        resolve(0);
        return;
      }

      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });

      // Return CLS after 5 seconds
      setTimeout(() => {
        observer.disconnect();
        resolve(clsValue);
      }, 5000);
    });
  },

  // Track first input delay
  trackFID(): Promise<number> {
    return new Promise((resolve) => {
      if (!('PerformanceObserver' in window)) {
        resolve(0);
        return;
      }

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as any).processingStart - entry.startTime;
          observer.disconnect();
          resolve(fid);
          break;
        }
      });

      observer.observe({ entryTypes: ['first-input'] });

      // Timeout after 10 seconds if no interaction
      setTimeout(() => {
        observer.disconnect();
        resolve(0);
      }, 10000);
    });
  },

  // Track LCP using proper PerformanceObserver API
  trackLCP(): Promise<number> {
    return new Promise((resolve) => {
      if (!('PerformanceObserver' in window)) {
        resolve(0);
        return;
      }

      let lcpValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          lcpValue = lastEntry.startTime;
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Return LCP after 5 seconds or on page visibility change
      const finalize = () => {
        observer.disconnect();
        resolve(lcpValue);
      };

      setTimeout(finalize, 5000);

      // Also finalize on visibility change (user navigating away)
      if (document.visibilityState === 'hidden') {
        finalize();
      } else {
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            finalize();
          }
        }, { once: true });
      }
    });
  },

  // Get comprehensive performance metrics
  async getAllMetrics(): Promise<{
    lcp: number;
    cls: number;
    fid: number;
    performance_score: number;
  }> {
    const [lcp, cls, fid] = await Promise.all([
      this.trackLCP(),
      this.trackCLS(),
      this.trackFID(),
    ]);

    // Calculate performance score (simplified)
    const lcpScore = lcp <= 2500 ? 100 : Math.max(0, 100 - ((lcp - 2500) / 25));
    const clsScore = cls <= 0.1 ? 100 : Math.max(0, 100 - (cls * 1000));
    const fidScore = fid <= 100 ? 100 : Math.max(0, 100 - ((fid - 100) / 3));

    const performance_score = Math.round((lcpScore + clsScore + fidScore) / 3);

    return { lcp, cls, fid, performance_score };
  }
};

export default {
  LCPOptimizer,
  LCPImageOptimizer,
  CriticalCSSInjector,
  initializeAdvancedLCPOptimization,
  LCPPerformanceMonitor,
  ADVANCED_LCP_CONFIG,
};