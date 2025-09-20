// Performance monitoring and Core Web Vitals tracking for Melbourne mould restoration website

export interface PerformanceMetrics {
  page: string;
  location?: string;
  lcp: number;
  fid: number;
  cls: number;
  totalImages: number;
  imagesLoaded: number;
  totalLoadTime: number;
  timestamp: number;
}

export interface ImageLoadMetrics {
  src: string;
  alt: string;
  loadTime: number;
  size: number;
  format: string;
  location?: string;
  service?: string;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private imageMetrics: ImageLoadMetrics[] = [];
  private observer?: PerformanceObserver;

  constructor() {
    this.initializeObserver();
  }

  private initializeObserver(): void {
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.processPerformanceEntry(entry);
        }
      });

      // Observe various performance entry types
      try {
        this.observer.observe({
          entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'navigation', 'resource']
        });
      } catch (e) {
        console.warn('Some performance entry types not supported:', e);
      }
    }
  }

  private processPerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        this.handleLCP(entry as PerformanceEntry & { startTime: number });
        break;
      case 'first-input':
        this.handleFID(entry as PerformanceEntry & { processingStart: number; startTime: number });
        break;
      case 'layout-shift':
        this.handleCLS(entry as PerformanceEntry & { value: number });
        break;
      case 'resource':
        this.handleResourceLoad(entry as PerformanceResourceTiming);
        break;
    }
  }

  private handleLCP(entry: PerformanceEntry & { startTime: number }): void {
    const currentPage = this.getCurrentPage();

    // Track LCP for Melbourne pages
    if (this.isMelbournePage()) {
      this.recordMetric('lcp', entry.startTime);
    }
  }

  private handleFID(entry: PerformanceEntry & { processingStart: number; startTime: number }): void {
    const delay = entry.processingStart - entry.startTime;
    const currentPage = this.getCurrentPage();

    if (this.isMelbournePage()) {
      this.recordMetric('fid', delay);
    }
  }

  private handleCLS(entry: PerformanceEntry & { value: number }): void {
    const currentPage = this.getCurrentPage();

    if (this.isMelbournePage()) {
      this.recordMetric('cls', entry.value);
    }
  }

  private handleResourceLoad(entry: PerformanceResourceTiming): void {
    // Track image resource loading
    if (this.isImageResource(entry.name)) {
      const loadTime = entry.responseEnd - entry.startTime;
      const size = entry.transferSize || 0;
      const format = this.getImageFormat(entry.name);

      const imageMetric: ImageLoadMetrics = {
        src: entry.name,
        alt: this.extractAltFromDOM(entry.name) || 'Image',
        loadTime,
        size,
        format,
        location: this.extractLocationFromPath(),
        service: this.extractServiceFromAlt(entry.name)
      };

      this.imageMetrics.push(imageMetric);
    }
  }

  private isImageResource(url: string): boolean {
    return /\.(jpg|jpeg|png|webp|svg)(\?|$)/i.test(url);
  }

  private getImageFormat(url: string): string {
    const match = url.match(/\.([a-z]+)(\?|$)/i);
    return match ? match[1].toLowerCase() : 'unknown';
  }

  private extractAltFromDOM(src: string): string | null {
    const img = document.querySelector(`img[src*="${src.split('/').pop()}"]`);
    return img?.getAttribute('alt') || null;
  }

  private extractLocationFromPath(): string | undefined {
    const path = window.location.pathname;
    const locationMatch = path.match(/\/locations\/([^\/]+)/);
    return locationMatch ? locationMatch[1] : undefined;
  }

  private extractServiceFromAlt(src: string): string | undefined {
    const alt = this.extractAltFromDOM(src);
    if (!alt) return undefined;

    const services = ['inspection', 'removal', 'remediation', 'fogging', 'subfloor'];
    return services.find(service => alt.toLowerCase().includes(service));
  }

  private getCurrentPage(): string {
    return window.location.pathname;
  }

  private isMelbournePage(): boolean {
    const path = window.location.pathname;
    return path.includes('/locations/') || path.includes('melbourne') || path.includes('mould');
  }

  private recordMetric(type: 'lcp' | 'fid' | 'cls', value: number): void {
    const currentPage = this.getCurrentPage();
    const location = this.extractLocationFromPath();

    // Update or create metrics record
    let pageMetrics = this.metrics.find(m => m.page === currentPage);
    if (!pageMetrics) {
      pageMetrics = {
        page: currentPage,
        location,
        lcp: 0,
        fid: 0,
        cls: 0,
        totalImages: 0,
        imagesLoaded: 0,
        totalLoadTime: 0,
        timestamp: Date.now()
      };
      this.metrics.push(pageMetrics);
    }

    pageMetrics[type] = value;
    pageMetrics.timestamp = Date.now();
  }

  // Public methods for tracking
  public trackImageLoad(src: string, loadTime: number, location?: string): void {
    const size = 0; // Would need to be passed in or calculated
    const format = this.getImageFormat(src);

    const metric: ImageLoadMetrics = {
      src,
      alt: this.extractAltFromDOM(src) || 'Melbourne mould service image',
      loadTime,
      size,
      format,
      location,
      service: this.extractServiceFromAlt(src)
    };

    this.imageMetrics.push(metric);
  }

  public getPerformanceReport(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getImageReport(): ImageLoadMetrics[] {
    return [...this.imageMetrics];
  }

  public getCoreWebVitalsScore(): { lcp: string; fid: string; cls: string; overall: string } {
    const latest = this.metrics[this.metrics.length - 1];
    if (!latest) {
      return { lcp: 'N/A', fid: 'N/A', cls: 'N/A', overall: 'N/A' };
    }

    const lcpScore = latest.lcp < 2500 ? 'Good' : latest.lcp < 4000 ? 'Needs Improvement' : 'Poor';
    const fidScore = latest.fid < 100 ? 'Good' : latest.fid < 300 ? 'Needs Improvement' : 'Poor';
    const clsScore = latest.cls < 0.1 ? 'Good' : latest.cls < 0.25 ? 'Needs Improvement' : 'Poor';

    const scores = [lcpScore, fidScore, clsScore];
    const goodCount = scores.filter(s => s === 'Good').length;
    const overall = goodCount === 3 ? 'Good' : goodCount >= 2 ? 'Needs Improvement' : 'Poor';

    return { lcp: lcpScore, fid: fidScore, cls: clsScore, overall };
  }

  public generateLocationReport(location: string): any {
    const locationMetrics = this.metrics.filter(m => m.location === location);
    const locationImages = this.imageMetrics.filter(m => m.location === location);

    if (locationMetrics.length === 0) {
      return { error: `No metrics found for ${location}` };
    }

    const latest = locationMetrics[locationMetrics.length - 1];
    const avgImageLoadTime = locationImages.length > 0
      ? locationImages.reduce((sum, img) => sum + img.loadTime, 0) / locationImages.length
      : 0;

    return {
      location,
      coreWebVitals: {
        lcp: latest.lcp,
        fid: latest.fid,
        cls: latest.cls
      },
      images: {
        total: locationImages.length,
        averageLoadTime: avgImageLoadTime,
        formats: this.getFormatBreakdown(locationImages),
        totalSize: locationImages.reduce((sum, img) => sum + img.size, 0)
      },
      score: this.getCoreWebVitalsScore(),
      recommendations: this.generateRecommendations(latest, locationImages)
    };
  }

  private getFormatBreakdown(images: ImageLoadMetrics[]): Record<string, number> {
    return images.reduce((acc, img) => {
      acc[img.format] = (acc[img.format] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  private generateRecommendations(metrics: PerformanceMetrics, images: ImageLoadMetrics[]): string[] {
    const recommendations: string[] = [];

    if (metrics.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint by prioritizing hero image loading');
    }

    if (metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay by optimizing JavaScript execution');
    }

    if (metrics.cls > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift by setting image dimensions');
    }

    const avgImageLoad = images.reduce((sum, img) => sum + img.loadTime, 0) / images.length;
    if (avgImageLoad > 500) {
      recommendations.push('Optimize image loading times - consider WebP format and compression');
    }

    const webpCount = images.filter(img => img.format === 'webp').length;
    const totalImages = images.length;
    if (webpCount / totalImages < 0.8) {
      recommendations.push('Convert more images to WebP format for better compression');
    }

    return recommendations;
  }

  // Analytics integration
  public sendToAnalytics(): void {
    const report = this.getCoreWebVitalsScore();
    const latest = this.metrics[this.metrics.length - 1];

    if (latest && window.gtag) {
      // Send to Google Analytics
      window.gtag('event', 'core_web_vitals', {
        lcp: latest.lcp,
        fid: latest.fid,
        cls: latest.cls,
        page: latest.page,
        location: latest.location
      });
    }

    // Send to console for development
  }
}

// Singleton instance
let performanceMonitor: PerformanceMonitor | null = null;

export function getPerformanceMonitor(): PerformanceMonitor {
  if (!performanceMonitor) {
    performanceMonitor = new PerformanceMonitor();
  }
  return performanceMonitor;
}

// Convenience functions
export function trackImageLoad(src: string, loadTime: number, location?: string): void {
  getPerformanceMonitor().trackImageLoad(src, loadTime, location);
}

export function getLocationReport(location: string): any {
  return getPerformanceMonitor().generateLocationReport(location);
}

export function getCoreWebVitals(): { lcp: string; fid: string; cls: string; overall: string } {
  return getPerformanceMonitor().getCoreWebVitalsScore();
}

// Auto-start monitoring on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    getPerformanceMonitor();
  });
}

export default PerformanceMonitor;