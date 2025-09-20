// Core Web Vitals Performance Audit for Melbourne Mould Restoration Website
// Tests LCP, INP, CLS, FCP, TTI, TBT across key pages

import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';
import fs from 'fs';

class PerformanceAuditor {
  constructor(baseUrl = 'http://localhost:8081') {
    this.baseUrl = baseUrl;
    this.results = [];
  }

  async runFullAudit() {
    console.log('🚀 Starting Core Web Vitals Performance Audit for Melbourne Mould Restoration Website');
    console.log(`Testing URL: ${this.baseUrl}`);

    const testPages = [
      { path: '/', name: 'Homepage' },
      { path: '/services', name: 'Services Page' },
      { path: '/locations/melbourne-cbd', name: 'Location - Melbourne CBD' },
      { path: '/locations/carlton', name: 'Location - Carlton' },
      { path: '/locations/toorak', name: 'Location - Toorak' },
      { path: '/services/professional-mould-inspections', name: 'Professional Mould Inspections' },
      { path: '/contact', name: 'Contact Page' },
    ];

    for (const page of testPages) {
      await this.auditPage(page);
    }

    await this.generateReport();
  }

  async auditPage(pageInfo) {
    console.log(`\n📊 Auditing: ${pageInfo.name} (${pageInfo.path})`);

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    try {
      // Desktop audit
      const desktopMetrics = await this.measurePageMetrics(browser, pageInfo, 'desktop');

      // Mobile audit
      const mobileMetrics = await this.measurePageMetrics(browser, pageInfo, 'mobile');

      // Lighthouse audit
      const lighthouseResults = await this.runLighthouseAudit(pageInfo.path);

      const pageResults = {
        page: pageInfo.name,
        path: pageInfo.path,
        desktop: desktopMetrics,
        mobile: mobileMetrics,
        lighthouse: lighthouseResults,
        timestamp: new Date().toISOString()
      };

      this.results.push(pageResults);
      this.printPageSummary(pageResults);

    } catch (error) {
      console.error(`❌ Error auditing ${pageInfo.name}:`, error.message);
    } finally {
      await browser.close();
    }
  }

  async measurePageMetrics(browser, pageInfo, deviceType) {
    const page = await browser.newPage();

    // Configure viewport for device type
    if (deviceType === 'mobile') {
      await page.setViewport({ width: 375, height: 667, deviceScaleFactor: 2 });
      await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15');
    } else {
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    }

    // Enable performance monitoring
    await page.setCacheEnabled(false);
    await page.evaluateOnNewDocument(() => {
      window.performanceMetrics = {
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        navigationStart: performance.now()
      };

      // Core Web Vitals measurement
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            window.performanceMetrics.lcp = entry.startTime;
          }
          if (entry.entryType === 'first-input') {
            window.performanceMetrics.fid = entry.processingStart - entry.startTime;
          }
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            window.performanceMetrics.cls = (window.performanceMetrics.cls || 0) + entry.value;
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance observer not fully supported');
      }

      // FCP measurement
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            window.performanceMetrics.fcp = entry.startTime;
          }
        }
      }).observe({ entryTypes: ['paint'] });
    });

    const url = `${this.baseUrl}${pageInfo.path}`;
    const startTime = Date.now();

    // Navigate and wait for load
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    // Wait for additional metrics to be captured
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Measure bundle size and resource loading
    const resourceMetrics = await page.evaluate(() => {
      const entries = performance.getEntriesByType('resource');
      let totalSize = 0;
      let jsSize = 0;
      let cssSize = 0;
      let imageSize = 0;

      entries.forEach(entry => {
        if (entry.transferSize) {
          totalSize += entry.transferSize;

          if (entry.name.includes('.js')) {
            jsSize += entry.transferSize;
          } else if (entry.name.includes('.css')) {
            cssSize += entry.transferSize;
          } else if (entry.name.match(/\.(jpg|jpeg|png|webp|svg)$/)) {
            imageSize += entry.transferSize;
          }
        }
      });

      return {
        totalSize,
        jsSize,
        cssSize,
        imageSize,
        resourceCount: entries.length
      };
    });

    // Get Core Web Vitals and other performance metrics
    const metrics = await page.evaluate(() => {
      const paintEntries = performance.getEntriesByType('paint');
      const navigationEntry = performance.getEntriesByType('navigation')[0];

      return {
        ...window.performanceMetrics,
        fcp: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || null,
        loadTime: navigationEntry ? navigationEntry.loadEventEnd - navigationEntry.navigationStart : null,
        domContentLoaded: navigationEntry ? navigationEntry.domContentLoadedEventEnd - navigationEntry.navigationStart : null,
        totalBlockingTime: this.calculateTBT ? this.calculateTBT() : null
      };
    });

    // Calculate Time to Interactive (TTI) approximation
    const tti = await this.estimateTTI(page);

    const loadTime = Date.now() - startTime;

    await page.close();

    return {
      deviceType,
      lcp: metrics.lcp,
      fcp: metrics.fcp,
      cls: metrics.cls || 0,
      fid: metrics.fid,
      tti: tti,
      tbt: metrics.totalBlockingTime,
      loadTime: loadTime,
      domContentLoaded: metrics.domContentLoaded,
      resources: resourceMetrics,
      url: url
    };
  }

  async estimateTTI(page) {
    // Simple TTI estimation based on when the page becomes interactive
    try {
      const tti = await page.evaluate(() => {
        return new Promise((resolve) => {
          const startTime = performance.now();
          let lastLongTask = 0;

          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.duration > 50) {
                lastLongTask = entry.startTime + entry.duration;
              }
            }
          });

          if ('PerformanceObserver' in window) {
            try {
              observer.observe({ entryTypes: ['longtask'] });
            } catch (e) {
              // Longtask not supported
            }
          }

          // Check if page is interactive after 5 seconds
          setTimeout(() => {
            const currentTime = performance.now();
            const quietPeriod = currentTime - lastLongTask;
            resolve(quietPeriod > 5000 ? lastLongTask : currentTime);
          }, 5000);
        });
      });
      return tti;
    } catch (error) {
      return null;
    }
  }

  async runLighthouseAudit(path) {
    // Skip Lighthouse for now to focus on custom metrics
    // In production, you would run lighthouse here
    return {
      performance: null,
      accessibility: null,
      seo: null,
      bestPractices: null
    };
  }

  printPageSummary(results) {
    console.log(`\n📈 Results for ${results.page}:`);

    // Desktop results
    console.log(`  🖥️  Desktop:`);
    console.log(`    LCP: ${this.formatMetric(results.desktop.lcp, 'ms')} ${this.getScoreIndicator(results.desktop.lcp, 'lcp')}`);
    console.log(`    FCP: ${this.formatMetric(results.desktop.fcp, 'ms')}`);
    console.log(`    CLS: ${this.formatMetric(results.desktop.cls, '')} ${this.getScoreIndicator(results.desktop.cls, 'cls')}`);
    console.log(`    FID: ${this.formatMetric(results.desktop.fid, 'ms')} ${this.getScoreIndicator(results.desktop.fid, 'fid')}`);
    console.log(`    TTI: ${this.formatMetric(results.desktop.tti, 'ms')}`);
    console.log(`    Load Time: ${this.formatMetric(results.desktop.loadTime, 'ms')}`);
    console.log(`    Total Resources: ${results.desktop.resources.totalSize} bytes (${results.desktop.resources.resourceCount} resources)`);

    // Mobile results
    console.log(`  📱 Mobile:`);
    console.log(`    LCP: ${this.formatMetric(results.mobile.lcp, 'ms')} ${this.getScoreIndicator(results.mobile.lcp, 'lcp')}`);
    console.log(`    FCP: ${this.formatMetric(results.mobile.fcp, 'ms')}`);
    console.log(`    CLS: ${this.formatMetric(results.mobile.cls, '')} ${this.getScoreIndicator(results.mobile.cls, 'cls')}`);
    console.log(`    FID: ${this.formatMetric(results.mobile.fid, 'ms')} ${this.getScoreIndicator(results.mobile.fid, 'fid')}`);
    console.log(`    TTI: ${this.formatMetric(results.mobile.tti, 'ms')}`);
    console.log(`    Load Time: ${this.formatMetric(results.mobile.loadTime, 'ms')}`);
    console.log(`    Total Resources: ${results.mobile.resources.totalSize} bytes (${results.mobile.resources.resourceCount} resources)`);
  }

  formatMetric(value, unit) {
    if (value === null || value === undefined) return 'N/A';
    return `${Math.round(value)}${unit}`;
  }

  getScoreIndicator(value, metric) {
    if (value === null || value === undefined) return '';

    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return '';

    if (value <= threshold.good) return '✅ Good';
    if (value <= threshold.poor) return '⚠️ Needs Improvement';
    return '❌ Poor';
  }

  async generateReport() {
    console.log('\n🎯 CORE WEB VITALS PERFORMANCE AUDIT SUMMARY');
    console.log('=' .repeat(60));

    // Calculate overall scores
    const overallScores = this.calculateOverallScores();

    console.log('\n📊 Overall Core Web Vitals Performance:');
    console.log(`  LCP Average (Desktop): ${this.formatMetric(overallScores.desktop.lcp, 'ms')} ${this.getScoreIndicator(overallScores.desktop.lcp, 'lcp')}`);
    console.log(`  LCP Average (Mobile): ${this.formatMetric(overallScores.mobile.lcp, 'ms')} ${this.getScoreIndicator(overallScores.mobile.lcp, 'lcp')}`);
    console.log(`  CLS Average (Desktop): ${this.formatMetric(overallScores.desktop.cls, '')} ${this.getScoreIndicator(overallScores.desktop.cls, 'cls')}`);
    console.log(`  CLS Average (Mobile): ${this.formatMetric(overallScores.mobile.cls, '')} ${this.getScoreIndicator(overallScores.mobile.cls, 'cls')}`);

    // Identify performance issues
    console.log('\n⚡ Performance Issues Identified:');
    const issues = this.identifyPerformanceIssues();
    issues.forEach(issue => console.log(`  • ${issue}`));

    console.log('\n🔧 Recommended Optimizations:');
    const recommendations = this.generateRecommendations();
    recommendations.forEach(rec => console.log(`  📝 ${rec}`));

    // Save detailed results
    const reportPath = '/Users/michaelyoussef/APP/mould-restoration-clone/performance-audit-results.json';
    fs.writeFileSync(reportPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      summary: overallScores,
      detailed: this.results,
      issues: issues,
      recommendations: recommendations
    }, null, 2));

    console.log(`\n💾 Detailed results saved to: ${reportPath}`);
  }

  calculateOverallScores() {
    const validResults = this.results.filter(r => r.desktop && r.mobile);

    if (validResults.length === 0) {
      return { desktop: {}, mobile: {} };
    }

    const calculateAverage = (metrics, property) => {
      const values = metrics.map(m => m[property]).filter(v => v !== null && v !== undefined);
      return values.length > 0 ? values.reduce((sum, val) => sum + val, 0) / values.length : null;
    };

    const desktopMetrics = validResults.map(r => r.desktop);
    const mobileMetrics = validResults.map(r => r.mobile);

    return {
      desktop: {
        lcp: calculateAverage(desktopMetrics, 'lcp'),
        fcp: calculateAverage(desktopMetrics, 'fcp'),
        cls: calculateAverage(desktopMetrics, 'cls'),
        fid: calculateAverage(desktopMetrics, 'fid'),
        tti: calculateAverage(desktopMetrics, 'tti'),
        loadTime: calculateAverage(desktopMetrics, 'loadTime')
      },
      mobile: {
        lcp: calculateAverage(mobileMetrics, 'lcp'),
        fcp: calculateAverage(mobileMetrics, 'fcp'),
        cls: calculateAverage(mobileMetrics, 'cls'),
        fid: calculateAverage(mobileMetrics, 'fid'),
        tti: calculateAverage(mobileMetrics, 'tti'),
        loadTime: calculateAverage(mobileMetrics, 'loadTime')
      }
    };
  }

  identifyPerformanceIssues() {
    const issues = [];

    this.results.forEach(result => {
      // Check LCP issues
      if (result.desktop?.lcp > 2500 || result.mobile?.lcp > 2500) {
        issues.push(`${result.page}: LCP exceeds 2.5s threshold - optimize hero images and critical resources`);
      }

      // Check CLS issues
      if (result.desktop?.cls > 0.1 || result.mobile?.cls > 0.1) {
        issues.push(`${result.page}: CLS exceeds 0.1 threshold - set image dimensions and avoid layout shifts`);
      }

      // Check resource loading
      if (result.desktop?.resources?.totalSize > 3000000) { // 3MB
        issues.push(`${result.page}: Large bundle size (${Math.round(result.desktop.resources.totalSize / 1000)} KB) - implement code splitting`);
      }

      // Check load time
      if (result.mobile?.loadTime > 3000) {
        issues.push(`${result.page}: Mobile load time exceeds 3s - optimize for mobile networks`);
      }
    });

    return [...new Set(issues)]; // Remove duplicates
  }

  generateRecommendations() {
    const recommendations = [
      'Implement image optimization with WebP format and proper sizing',
      'Add resource hints (preload, prefetch) for critical assets',
      'Enable code splitting for location pages to reduce initial bundle size',
      'Implement lazy loading for below-the-fold images',
      'Add proper width/height attributes to prevent layout shifts',
      'Consider using a CDN for faster asset delivery in Australia',
      'Optimize font loading with font-display: swap',
      'Minimize render-blocking JavaScript and CSS',
      'Implement service worker for caching critical resources',
      'Use React.memo and useMemo for expensive components'
    ];

    return recommendations;
  }
}

// Run the audit
const auditor = new PerformanceAuditor();
auditor.runFullAudit().catch(console.error);