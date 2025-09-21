#!/usr/bin/env node

/**
 * Mobile Performance Testing Script for Melbourne Lead Management System
 *
 * Tests Core Web Vitals, bundle sizes, and mobile-specific performance metrics
 * for the React-based lead management system optimized for Australian mobile networks.
 */

const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const { chromeLauncher } = require('chrome-launcher');
const fs = require('fs').promises;
const path = require('path');

// Mobile device configurations for testing
const MOBILE_DEVICES = {
  'iPhone 12': {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
    viewport: { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true }
  },
  'Samsung Galaxy S21': {
    userAgent: 'Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',
    viewport: { width: 360, height: 800, deviceScaleFactor: 3, isMobile: true, hasTouch: true }
  },
  'iPad': {
    userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
    viewport: { width: 768, height: 1024, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
  }
};

// Australian mobile network conditions for testing
const NETWORK_CONDITIONS = {
  'Fast 4G': { downloadThroughput: 1.6 * 1024, uploadThroughput: 0.768 * 1024, latency: 150 },
  'Slow 4G': { downloadThroughput: 0.4 * 1024, uploadThroughput: 0.1 * 1024, latency: 300 },
  '3G': { downloadThroughput: 0.2 * 1024, uploadThroughput: 0.05 * 1024, latency: 500 }
};

// Test URLs for different components
const TEST_URLS = {
  'Lead Management Desktop': 'http://localhost:3000/admin/leads-kanban',
  'Lead Management Mobile': 'http://localhost:3000/admin/leads-mobile',
  'Admin Dashboard': 'http://localhost:3000/admin/dashboard',
  'Lead Creation': 'http://localhost:3000/admin/leads/new'
};

class MobilePerformanceTester {
  constructor() {
    this.results = {};
    this.browser = null;
  }

  async init() {
    console.log('🚀 Initializing Mobile Performance Testing for Melbourne Lead Management...\n');

    this.browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--remote-debugging-port=9222'
      ]
    });
  }

  async testCoreWebVitals(url, deviceName, networkCondition) {
    const page = await this.browser.newPage();
    const device = MOBILE_DEVICES[deviceName];
    const network = NETWORK_CONDITIONS[networkCondition];

    try {
      // Configure mobile device
      await page.setUserAgent(device.userAgent);
      await page.setViewport(device.viewport);

      // Configure network
      const client = await page.target().createCDPSession();
      await client.send('Network.emulateNetworkConditions', {
        offline: false,
        downloadThroughput: network.downloadThroughput * 1024,
        uploadThroughput: network.uploadThroughput * 1024,
        latency: network.latency
      });

      // Collect Core Web Vitals
      const vitals = {};

      // Performance observer for Core Web Vitals
      await page.evaluateOnNewDocument(() => {
        window.webVitalsData = {};

        // LCP Observer
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            window.webVitalsData.lcp = entries[entries.length - 1].startTime;
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            window.webVitalsData.fid = entry.processingStart - entry.startTime;
          }
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // CLS Observer
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              window.webVitalsData.cls = clsValue;
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // Navigation timing
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0];
          window.webVitalsData.ttfb = navigation.responseStart - navigation.requestStart;
          window.webVitalsData.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          window.webVitalsData.loadComplete = navigation.loadEventEnd - navigation.loadEventStart;
        });
      });

      // Navigate and wait for load
      const startTime = Date.now();
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      const loadTime = Date.now() - startTime;

      // Wait for vitals to be collected
      await page.waitForTimeout(3000);

      // Extract vitals data
      const webVitalsData = await page.evaluate(() => window.webVitalsData || {});

      // Test lead management interactions
      const interactionMetrics = await this.testLeadInteractions(page);

      // Bundle size analysis
      const bundleMetrics = await this.analyzeBundleSize(page);

      vitals = {
        loadTime,
        ...webVitalsData,
        ...interactionMetrics,
        ...bundleMetrics,
        device: deviceName,
        network: networkCondition,
        url: url,
        timestamp: new Date().toISOString()
      };

      console.log(`📱 ${deviceName} on ${networkCondition}:`);
      console.log(`   LCP: ${vitals.lcp?.toFixed(2) || 'N/A'}ms ${this.getVitalScore('lcp', vitals.lcp)}`);
      console.log(`   FID: ${vitals.fid?.toFixed(2) || 'N/A'}ms ${this.getVitalScore('fid', vitals.fid)}`);
      console.log(`   CLS: ${vitals.cls?.toFixed(4) || 'N/A'} ${this.getVitalScore('cls', vitals.cls)}`);
      console.log(`   TTFB: ${vitals.ttfb?.toFixed(2) || 'N/A'}ms ${this.getVitalScore('ttfb', vitals.ttfb)}`);
      console.log(`   Load Time: ${loadTime}ms`);

    } catch (error) {
      console.error(`❌ Error testing ${deviceName} on ${networkCondition}:`, error.message);
      vitals = { error: error.message, device: deviceName, network: networkCondition };
    } finally {
      await page.close();
    }

    return vitals;
  }

  async testLeadInteractions(page) {
    try {
      const metrics = {};

      // Test lead card rendering performance
      const leadCardStart = Date.now();
      await page.waitForSelector('[data-testid="lead-card"], .lead-card, [class*="lead"], [class*="card"]', { timeout: 10000 });
      metrics.leadCardRenderTime = Date.now() - leadCardStart;

      // Test search functionality
      const searchStart = Date.now();
      const searchInput = await page.$('input[placeholder*="search"], input[placeholder*="Search"]');
      if (searchInput) {
        await searchInput.type('Melbourne', { delay: 50 });
        await page.waitForTimeout(500); // Wait for search debounce
        metrics.searchResponseTime = Date.now() - searchStart;
      }

      // Test mobile drawer/form opening (if mobile)
      if (page.viewport().width < 768) {
        try {
          const addButton = await page.$('button:has-text("Add"), button:has-text("Quick"), button[aria-label*="add"]');
          if (addButton) {
            const drawerStart = Date.now();
            await addButton.click();
            await page.waitForSelector('[role="dialog"], .drawer, [class*="drawer"]', { timeout: 5000 });
            metrics.mobileDrawerOpenTime = Date.now() - drawerStart;
          }
        } catch (error) {
          console.log('   Note: Mobile drawer test skipped -', error.message);
        }
      }

      // Test drag and drop performance (if desktop)
      if (page.viewport().width >= 768) {
        try {
          const dragElement = await page.$('[draggable="true"], [data-handler-id]');
          if (dragElement) {
            const dragStart = Date.now();
            const box = await dragElement.boundingBox();
            await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
            await page.mouse.down();
            await page.mouse.move(box.x + 200, box.y);
            await page.mouse.up();
            metrics.dragDropResponseTime = Date.now() - dragStart;
          }
        } catch (error) {
          console.log('   Note: Drag and drop test skipped -', error.message);
        }
      }

      return metrics;
    } catch (error) {
      console.log('   Note: Interaction tests encountered issues -', error.message);
      return {};
    }
  }

  async analyzeBundleSize(page) {
    try {
      const resources = await page.evaluate(() => {
        const resources = performance.getEntriesByType('resource');
        return resources.map(resource => ({
          name: resource.name,
          type: resource.initiatorType,
          size: resource.transferSize || resource.decodedBodySize || 0,
          duration: resource.duration
        }));
      });

      const bundleMetrics = {
        totalJSSize: 0,
        totalCSSSize: 0,
        totalImageSize: 0,
        totalResources: resources.length,
        jsFiles: 0,
        cssFiles: 0,
        imageFiles: 0
      };

      resources.forEach(resource => {
        if (resource.name.includes('.js')) {
          bundleMetrics.totalJSSize += resource.size;
          bundleMetrics.jsFiles++;
        } else if (resource.name.includes('.css')) {
          bundleMetrics.totalCSSSize += resource.size;
          bundleMetrics.cssFiles++;
        } else if (resource.type === 'img' || /\.(png|jpg|jpeg|gif|svg|webp)/.test(resource.name)) {
          bundleMetrics.totalImageSize += resource.size;
          bundleMetrics.imageFiles++;
        }
      });

      // Log bundle analysis
      console.log(`   Bundle Analysis:`);
      console.log(`     JS: ${(bundleMetrics.totalJSSize / 1024).toFixed(1)}KB (${bundleMetrics.jsFiles} files)`);
      console.log(`     CSS: ${(bundleMetrics.totalCSSSize / 1024).toFixed(1)}KB (${bundleMetrics.cssFiles} files)`);
      console.log(`     Images: ${(bundleMetrics.totalImageSize / 1024).toFixed(1)}KB (${bundleMetrics.imageFiles} files)`);

      return bundleMetrics;
    } catch (error) {
      console.log('   Note: Bundle analysis failed -', error.message);
      return {};
    }
  }

  getVitalScore(metric, value) {
    if (value === undefined || value === null) return '';

    const thresholds = {
      lcp: { good: 2500, needs: 4000 },
      fid: { good: 100, needs: 300 },
      cls: { good: 0.1, needs: 0.25 },
      ttfb: { good: 600, needs: 1500 }
    };

    const threshold = thresholds[metric];
    if (!threshold) return '';

    if (value <= threshold.good) return '✅';
    if (value <= threshold.needs) return '⚠️';
    return '❌';
  }

  async runLighthouseAudit(url, deviceName) {
    console.log(`🔍 Running Lighthouse audit for ${deviceName}...`);

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const flags = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices'],
      port: chrome.port,
      emulatedFormFactor: deviceName.includes('iPad') ? 'desktop' : 'mobile',
      throttling: {
        rttMs: 150,
        throughputKbps: 1600,
        cpuSlowdownMultiplier: 4
      }
    };

    try {
      const runnerResult = await lighthouse(url, flags);
      await chrome.kill();

      const { lhr } = runnerResult;
      return {
        performanceScore: lhr.categories.performance.score * 100,
        firstContentfulPaint: lhr.audits['first-contentful-paint'].numericValue,
        largestContentfulPaint: lhr.audits['largest-contentful-paint'].numericValue,
        totalBlockingTime: lhr.audits['total-blocking-time'].numericValue,
        cumulativeLayoutShift: lhr.audits['cumulative-layout-shift'].numericValue,
        speedIndex: lhr.audits['speed-index'].numericValue
      };
    } catch (error) {
      await chrome.kill();
      console.error(`❌ Lighthouse audit failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async runAllTests() {
    console.log('🧪 Running comprehensive mobile performance tests...\n');

    for (const [urlName, url] of Object.entries(TEST_URLS)) {
      console.log(`\n📊 Testing: ${urlName}`);
      console.log(`🔗 URL: ${url}\n`);

      this.results[urlName] = {};

      // Test each device and network combination
      for (const deviceName of Object.keys(MOBILE_DEVICES)) {
        for (const networkCondition of Object.keys(NETWORK_CONDITIONS)) {
          const vitals = await this.testCoreWebVitals(url, deviceName, networkCondition);

          if (!this.results[urlName][deviceName]) {
            this.results[urlName][deviceName] = {};
          }
          this.results[urlName][deviceName][networkCondition] = vitals;
        }

        // Run Lighthouse audit for primary device configurations
        if (deviceName === 'iPhone 12' || deviceName === 'Samsung Galaxy S21') {
          const lighthouseResults = await this.runLighthouseAudit(url, deviceName);
          this.results[urlName][deviceName].lighthouse = lighthouseResults;
        }

        console.log(''); // Add spacing between devices
      }
    }
  }

  async generateReport() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(__dirname, '..', 'reports', `mobile-performance-${timestamp}.json`);

    // Ensure reports directory exists
    try {
      await fs.mkdir(path.dirname(reportPath), { recursive: true });
    } catch (error) {
      // Directory already exists
    }

    // Generate summary
    const summary = this.generateSummary();

    const report = {
      timestamp: new Date().toISOString(),
      summary,
      results: this.results,
      recommendations: this.generateRecommendations()
    };

    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

    console.log('\n📈 Performance Test Summary:');
    console.log(`📱 Devices tested: ${Object.keys(MOBILE_DEVICES).length}`);
    console.log(`🌐 Network conditions: ${Object.keys(NETWORK_CONDITIONS).length}`);
    console.log(`📄 URLs tested: ${Object.keys(TEST_URLS).length}`);
    console.log(`📊 Total test scenarios: ${Object.keys(MOBILE_DEVICES).length * Object.keys(NETWORK_CONDITIONS).length * Object.keys(TEST_URLS).length}`);

    console.log('\n🎯 Core Web Vitals Summary:');
    for (const [metric, data] of Object.entries(summary.coreWebVitals)) {
      console.log(`   ${metric.toUpperCase()}: ${data.average.toFixed(2)}${data.unit} (${data.passing}/${data.total} passing)`);
    }

    console.log(`\n💾 Full report saved to: ${reportPath}`);

    return report;
  }

  generateSummary() {
    const vitalsData = { lcp: [], fid: [], cls: [], ttfb: [] };
    let totalTests = 0;

    // Collect all vitals data
    for (const urlResults of Object.values(this.results)) {
      for (const deviceResults of Object.values(urlResults)) {
        for (const [condition, results] of Object.entries(deviceResults)) {
          if (condition === 'lighthouse' || results.error) continue;

          totalTests++;
          if (results.lcp) vitalsData.lcp.push(results.lcp);
          if (results.fid) vitalsData.fid.push(results.fid);
          if (results.cls) vitalsData.cls.push(results.cls);
          if (results.ttfb) vitalsData.ttfb.push(results.ttfb);
        }
      }
    }

    // Calculate summary statistics
    const summary = {
      totalTests,
      coreWebVitals: {}
    };

    const thresholds = {
      lcp: { good: 2500, unit: 'ms' },
      fid: { good: 100, unit: 'ms' },
      cls: { good: 0.1, unit: '' },
      ttfb: { good: 600, unit: 'ms' }
    };

    for (const [metric, values] of Object.entries(vitalsData)) {
      if (values.length > 0) {
        const average = values.reduce((a, b) => a + b, 0) / values.length;
        const passing = values.filter(v => v <= thresholds[metric].good).length;

        summary.coreWebVitals[metric] = {
          average,
          passing,
          total: values.length,
          unit: thresholds[metric].unit
        };
      }
    }

    return summary;
  }

  generateRecommendations() {
    const recommendations = [];
    const summary = this.generateSummary();

    // Core Web Vitals recommendations
    if (summary.coreWebVitals.lcp && summary.coreWebVitals.lcp.average > 2500) {
      recommendations.push({
        priority: 'high',
        category: 'LCP',
        issue: `Average LCP of ${summary.coreWebVitals.lcp.average.toFixed(0)}ms exceeds 2.5s target`,
        solutions: [
          'Implement lazy loading for non-critical lead card images',
          'Optimize MobileLeadDrawer component with React.memo',
          'Consider server-side rendering for initial lead data',
          'Use Intersection Observer for lead card virtualization'
        ]
      });
    }

    if (summary.coreWebVitals.fid && summary.coreWebVitals.fid.average > 100) {
      recommendations.push({
        priority: 'high',
        category: 'FID',
        issue: `Average FID of ${summary.coreWebVitals.fid.average.toFixed(0)}ms exceeds 100ms target`,
        solutions: [
          'Implement useMemo for expensive lead filtering operations',
          'Split large lead management bundles with dynamic imports',
          'Use React.startTransition for non-urgent lead updates',
          'Debounce search input in mobile lead management'
        ]
      });
    }

    if (summary.coreWebVitals.cls && summary.coreWebVitals.cls.average > 0.1) {
      recommendations.push({
        priority: 'medium',
        category: 'CLS',
        issue: `Average CLS of ${summary.coreWebVitals.cls.average.toFixed(3)} exceeds 0.1 target`,
        solutions: [
          'Reserve space for lead cards before data loads',
          'Use skeleton components for MobileLeadCard loading states',
          'Avoid inserting new leads above existing content',
          'Set explicit dimensions for lead status badges'
        ]
      });
    }

    // Bundle size recommendations
    const bundleIssues = this.analyzeBundleSizes();
    recommendations.push(...bundleIssues);

    return recommendations;
  }

  analyzeBundleSizes() {
    const recommendations = [];

    // Check if any tests collected bundle data
    let maxJSSize = 0;
    let maxCSSSize = 0;

    for (const urlResults of Object.values(this.results)) {
      for (const deviceResults of Object.values(urlResults)) {
        for (const [condition, results] of Object.entries(deviceResults)) {
          if (condition === 'lighthouse' || results.error) continue;

          if (results.totalJSSize > maxJSSize) maxJSSize = results.totalJSSize;
          if (results.totalCSSSize > maxCSSSize) maxCSSSize = results.totalCSSSize;
        }
      }
    }

    if (maxJSSize > 500 * 1024) { // 500KB threshold
      recommendations.push({
        priority: 'medium',
        category: 'Bundle Size',
        issue: `JavaScript bundle size of ${(maxJSSize / 1024).toFixed(0)}KB exceeds mobile-friendly limit`,
        solutions: [
          'Implement code splitting for admin routes',
          'Lazy load MobileLeadDrawer and LeadsKanbanMobile components',
          'Tree-shake unused dependencies in lead management',
          'Use dynamic imports for large utility libraries'
        ]
      });
    }

    return recommendations;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// CLI execution
async function main() {
  const tester = new MobilePerformanceTester();

  try {
    await tester.init();
    await tester.runAllTests();
    await tester.generateReport();
  } catch (error) {
    console.error('❌ Performance testing failed:', error);
    process.exit(1);
  } finally {
    await tester.cleanup();
  }

  console.log('\n✅ Mobile performance testing completed successfully!');
  console.log('📖 Check the generated report for detailed recommendations.');
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { MobilePerformanceTester };