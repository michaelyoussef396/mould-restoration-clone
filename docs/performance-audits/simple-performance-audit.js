// Simple Core Web Vitals Performance Audit for Melbourne Mould Restoration Website
import puppeteer from 'puppeteer';
import fs from 'fs';

class SimplePerformanceAuditor {
  constructor(baseUrl = 'http://localhost:8081') {
    this.baseUrl = baseUrl;
    this.results = [];
  }

  async runAudit() {
    console.log('🚀 Starting Core Web Vitals Performance Audit');
    console.log(`Testing URL: ${this.baseUrl}`);

    const testPages = [
      { path: '/', name: 'Homepage' },
      { path: '/services', name: 'Services Page' },
      { path: '/locations/carlton', name: 'Location - Carlton' },
      { path: '/services/professional-mould-inspections', name: 'Professional Mould Inspections' },
      { path: '/contact', name: 'Contact Page' },
    ];

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-web-security']
    });

    for (const pageInfo of testPages) {
      await this.auditPage(browser, pageInfo);
    }

    await browser.close();
    await this.generateReport();
  }

  async auditPage(browser, pageInfo) {
    console.log(`\n📊 Auditing: ${pageInfo.name} (${pageInfo.path})`);

    try {
      // Desktop test
      const desktopResult = await this.testPagePerformance(browser, pageInfo, 'desktop');

      // Mobile test
      const mobileResult = await this.testPagePerformance(browser, pageInfo, 'mobile');

      const pageResult = {
        page: pageInfo.name,
        path: pageInfo.path,
        desktop: desktopResult,
        mobile: mobileResult,
        timestamp: new Date().toISOString()
      };

      this.results.push(pageResult);
      this.printPageResults(pageResult);

    } catch (error) {
      console.error(`❌ Error auditing ${pageInfo.name}:`, error.message);
    }
  }

  async testPagePerformance(browser, pageInfo, deviceType) {
    const page = await browser.newPage();

    try {
      // Configure viewport
      if (deviceType === 'mobile') {
        await page.setViewport({ width: 375, height: 667, deviceScaleFactor: 2 });
        await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15');
      } else {
        await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
      }

      // Disable cache for accurate testing
      await page.setCacheEnabled(false);

      // Track performance metrics
      await page.evaluateOnNewDocument(() => {
        window.performanceMetrics = {
          navigationStart: performance.now(),
          lcp: null,
          fcp: null,
          cls: 0,
          fid: null,
          resources: []
        };

        // LCP Observer
        if ('PerformanceObserver' in window) {
          try {
            new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry) {
                window.performanceMetrics.lcp = lastEntry.startTime;
              }
            }).observe({ entryTypes: ['largest-contentful-paint'] });

            // CLS Observer
            new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                  window.performanceMetrics.cls += entry.value;
                }
              }
            }).observe({ entryTypes: ['layout-shift'] });

            // FCP Observer
            new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.name === 'first-contentful-paint') {
                  window.performanceMetrics.fcp = entry.startTime;
                }
              }
            }).observe({ entryTypes: ['paint'] });

            // FID Observer
            new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                window.performanceMetrics.fid = entry.processingStart - entry.startTime;
              }
            }).observe({ entryTypes: ['first-input'] });

          } catch (e) {
            console.warn('Some observers not supported');
          }
        }
      });

      const startTime = Date.now();
      const url = `${this.baseUrl}${pageInfo.path}`;

      // Navigate to page
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });

      // Wait for page to stabilize
      await page.waitForLoadState?.('networkidle') ||
            await new Promise(resolve => setTimeout(resolve, 3000));

      const loadTime = Date.now() - startTime;

      // Collect performance metrics
      const metrics = await page.evaluate(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const resources = performance.getEntriesByType('resource');

        // Calculate resource sizes and counts
        let totalSize = 0;
        let jsSize = 0;
        let cssSize = 0;
        let imageSize = 0;
        let imageCount = 0;

        resources.forEach(resource => {
          const size = resource.transferSize || resource.encodedBodySize || 0;
          totalSize += size;

          const url = resource.name.toLowerCase();
          if (url.includes('.js')) {
            jsSize += size;
          } else if (url.includes('.css')) {
            cssSize += size;
          } else if (url.match(/\.(jpg|jpeg|png|webp|svg|gif)/)) {
            imageSize += size;
            imageCount++;
          }
        });

        return {
          ...window.performanceMetrics,
          navigation: {
            domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.navigationStart : null,
            loadComplete: navigation ? navigation.loadEventEnd - navigation.navigationStart : null,
            firstByte: navigation ? navigation.responseStart - navigation.navigationStart : null
          },
          resources: {
            total: resources.length,
            totalSize,
            jsSize,
            cssSize,
            imageSize,
            imageCount
          }
        };
      });

      await page.close();

      return {
        deviceType,
        url,
        loadTime,
        lcp: metrics.lcp,
        fcp: metrics.fcp,
        cls: metrics.cls,
        fid: metrics.fid,
        navigation: metrics.navigation,
        resources: metrics.resources
      };

    } catch (error) {
      await page.close();
      throw error;
    }
  }

  printPageResults(result) {
    console.log(`\n📈 Results for ${result.page}:`);

    // Desktop results
    const desktop = result.desktop;
    console.log(`  🖥️  Desktop:`);
    console.log(`    LCP: ${this.formatTime(desktop.lcp)} ${this.getLCPScore(desktop.lcp)}`);
    console.log(`    FCP: ${this.formatTime(desktop.fcp)}`);
    console.log(`    CLS: ${this.formatCLS(desktop.cls)} ${this.getCLSScore(desktop.cls)}`);
    console.log(`    FID: ${this.formatTime(desktop.fid)} ${this.getFIDScore(desktop.fid)}`);
    console.log(`    Load Time: ${desktop.loadTime}ms`);
    console.log(`    Bundle Size: ${this.formatBytes(desktop.resources.totalSize)}`);
    console.log(`    Images: ${desktop.resources.imageCount} (${this.formatBytes(desktop.resources.imageSize)})`);
    console.log(`    JS Size: ${this.formatBytes(desktop.resources.jsSize)}`);

    // Mobile results
    const mobile = result.mobile;
    console.log(`  📱 Mobile:`);
    console.log(`    LCP: ${this.formatTime(mobile.lcp)} ${this.getLCPScore(mobile.lcp)}`);
    console.log(`    FCP: ${this.formatTime(mobile.fcp)}`);
    console.log(`    CLS: ${this.formatCLS(mobile.cls)} ${this.getCLSScore(mobile.cls)}`);
    console.log(`    FID: ${this.formatTime(mobile.fid)} ${this.getFIDScore(mobile.fid)}`);
    console.log(`    Load Time: ${mobile.loadTime}ms`);
    console.log(`    Bundle Size: ${this.formatBytes(mobile.resources.totalSize)}`);
    console.log(`    Images: ${mobile.resources.imageCount} (${this.formatBytes(mobile.resources.imageSize)})`);
  }

  formatTime(ms) {
    return ms !== null ? `${Math.round(ms)}ms` : 'N/A';
  }

  formatCLS(cls) {
    return cls !== null ? cls.toFixed(3) : 'N/A';
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  getLCPScore(lcp) {
    if (lcp === null) return '';
    if (lcp <= 2500) return '✅ Good';
    if (lcp <= 4000) return '⚠️ Needs Improvement';
    return '❌ Poor';
  }

  getCLSScore(cls) {
    if (cls === null) return '';
    if (cls <= 0.1) return '✅ Good';
    if (cls <= 0.25) return '⚠️ Needs Improvement';
    return '❌ Poor';
  }

  getFIDScore(fid) {
    if (fid === null) return '';
    if (fid <= 100) return '✅ Good';
    if (fid <= 300) return '⚠️ Needs Improvement';
    return '❌ Poor';
  }

  async generateReport() {
    console.log('\n🎯 PERFORMANCE AUDIT SUMMARY');
    console.log('='.repeat(50));

    // Calculate averages
    const avgDesktop = this.calculateAverages('desktop');
    const avgMobile = this.calculateAverages('mobile');

    console.log('\n📊 Average Core Web Vitals:');
    console.log(`Desktop - LCP: ${this.formatTime(avgDesktop.lcp)} ${this.getLCPScore(avgDesktop.lcp)}`);
    console.log(`Desktop - CLS: ${this.formatCLS(avgDesktop.cls)} ${this.getCLSScore(avgDesktop.cls)}`);
    console.log(`Mobile - LCP: ${this.formatTime(avgMobile.lcp)} ${this.getLCPScore(avgMobile.lcp)}`);
    console.log(`Mobile - CLS: ${this.formatCLS(avgMobile.cls)} ${this.getCLSScore(avgMobile.cls)}`);

    // Identify issues
    const issues = this.identifyIssues();
    console.log('\n⚡ Performance Issues:');
    issues.forEach(issue => console.log(`  • ${issue}`));

    // Generate recommendations
    const recommendations = this.generateRecommendations();
    console.log('\n🔧 Recommendations:');
    recommendations.forEach(rec => console.log(`  📝 ${rec}`));

    // Save results
    const report = {
      timestamp: new Date().toISOString(),
      summary: { desktop: avgDesktop, mobile: avgMobile },
      detailed: this.results,
      issues,
      recommendations
    };

    fs.writeFileSync('/Users/michaelyoussef/APP/mould-restoration-clone/performance-report.json',
                     JSON.stringify(report, null, 2));

    console.log('\n💾 Detailed report saved to performance-report.json');
  }

  calculateAverages(deviceType) {
    const metrics = this.results.map(r => r[deviceType]).filter(Boolean);
    if (metrics.length === 0) return {};

    const sum = (arr) => arr.reduce((a, b) => a + b, 0);
    const avg = (arr) => arr.length > 0 ? sum(arr) / arr.length : null;

    return {
      lcp: avg(metrics.map(m => m.lcp).filter(v => v !== null)),
      fcp: avg(metrics.map(m => m.fcp).filter(v => v !== null)),
      cls: avg(metrics.map(m => m.cls).filter(v => v !== null)),
      fid: avg(metrics.map(m => m.fid).filter(v => v !== null)),
      loadTime: avg(metrics.map(m => m.loadTime)),
      bundleSize: avg(metrics.map(m => m.resources.totalSize))
    };
  }

  identifyIssues() {
    const issues = [];

    this.results.forEach(result => {
      // LCP issues
      if (result.desktop?.lcp > 2500 || result.mobile?.lcp > 2500) {
        issues.push(`${result.page}: LCP exceeds 2.5s - optimize hero images and critical resources`);
      }

      // CLS issues
      if (result.desktop?.cls > 0.1 || result.mobile?.cls > 0.1) {
        issues.push(`${result.page}: CLS exceeds 0.1 - set image dimensions and prevent layout shifts`);
      }

      // Large bundle size
      if (result.desktop?.resources?.totalSize > 2000000) { // 2MB
        issues.push(`${result.page}: Large bundle size (${this.formatBytes(result.desktop.resources.totalSize)}) - implement code splitting`);
      }

      // Too many images
      if (result.desktop?.resources?.imageCount > 20) {
        issues.push(`${result.page}: Many images (${result.desktop.resources.imageCount}) - implement lazy loading`);
      }

      // Large JavaScript
      if (result.desktop?.resources?.jsSize > 1000000) { // 1MB
        issues.push(`${result.page}: Large JavaScript bundle (${this.formatBytes(result.desktop.resources.jsSize)}) - optimize code splitting`);
      }
    });

    return [...new Set(issues)];
  }

  generateRecommendations() {
    return [
      'Optimize images with WebP format and proper sizing',
      'Implement lazy loading for below-the-fold images',
      'Add width/height attributes to images to prevent CLS',
      'Enable code splitting for location pages',
      'Preload critical CSS and fonts',
      'Use React.memo for expensive components',
      'Implement service worker for caching',
      'Optimize font loading with font-display: swap',
      'Consider using a CDN for Australian users',
      'Minimize render-blocking resources'
    ];
  }
}

// Run the audit
const auditor = new SimplePerformanceAuditor();
auditor.runAudit().catch(console.error);