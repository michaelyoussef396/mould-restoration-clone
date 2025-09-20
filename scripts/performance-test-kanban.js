import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';

async function runKanbanPerformanceTest() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set to mobile viewport for realistic testing
    await page.setViewport({ width: 375, height: 667 });

    console.log('🚀 Starting Kanban performance test...');

    // Navigate to the optimized Kanban page
    const startTime = Date.now();
    console.log('📍 Navigating to http://localhost:8084/admin/leads-kanban');

    try {
      await page.goto('http://localhost:8084/admin/leads-kanban', {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
    } catch (error) {
      console.error('❌ Navigation failed:', error.message);

      // Try the homepage instead
      console.log('📍 Trying homepage as fallback...');
      await page.goto('http://localhost:8084', {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
    }

    const loadTime = Date.now() - startTime;
    console.log(`✅ Page loaded in ${loadTime}ms`);

    // Measure Core Web Vitals
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        const metrics = {};

        // Get FCP (First Contentful Paint)
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metrics.fcp = fcpEntry.startTime;
        }

        // Get LCP (Largest Contentful Paint)
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.lcp = lastEntry.startTime;
            observer.disconnect();
            resolve(metrics);
          });

          try {
            observer.observe({ entryTypes: ['largest-contentful-paint'] });

            // Fallback timeout
            setTimeout(() => {
              observer.disconnect();
              resolve(metrics);
            }, 5000);
          } catch (e) {
            resolve(metrics);
          }
        } else {
          resolve(metrics);
        }
      });
    });

    // Memory usage
    const memoryMetrics = await page.evaluate(() => {
      if ('memory' in performance) {
        return {
          usedJSHeapSize: (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2),
          totalJSHeapSize: (performance.memory.totalJSHeapSize / 1024 / 1024).toFixed(2),
          jsHeapSizeLimit: (performance.memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)
        };
      }
      return null;
    });

    // Get bundle size estimates
    const resourceMetrics = await page.evaluate(() => {
      const resources = performance.getEntriesByType('resource');
      let totalSize = 0;
      let jsSize = 0;
      let cssSize = 0;

      resources.forEach(resource => {
        if (resource.transferSize) {
          totalSize += resource.transferSize;

          if (resource.name.includes('.js')) {
            jsSize += resource.transferSize;
          } else if (resource.name.includes('.css')) {
            cssSize += resource.transferSize;
          }
        }
      });

      return {
        totalSize: (totalSize / 1024).toFixed(2) + ' KB',
        jsSize: (jsSize / 1024).toFixed(2) + ' KB',
        cssSize: (cssSize / 1024).toFixed(2) + ' KB'
      };
    });

    // Performance Report
    console.log('\n📊 PERFORMANCE METRICS:');
    console.log('==========================================');
    console.log(`⏱️  Total Load Time: ${loadTime}ms`);

    if (metrics.fcp) {
      console.log(`🎨 First Contentful Paint: ${metrics.fcp.toFixed(2)}ms`);
    }

    if (metrics.lcp) {
      console.log(`🖼️  Largest Contentful Paint: ${metrics.lcp.toFixed(2)}ms`);
    }

    console.log('\n💾 MEMORY USAGE:');
    if (memoryMetrics) {
      console.log(`Used: ${memoryMetrics.usedJSHeapSize} MB`);
      console.log(`Total: ${memoryMetrics.totalJSHeapSize} MB`);
      console.log(`Limit: ${memoryMetrics.jsHeapSizeLimit} MB`);
    } else {
      console.log('Memory metrics not available');
    }

    console.log('\n📦 RESOURCE SIZES:');
    console.log(`Total: ${resourceMetrics.totalSize}`);
    console.log(`JavaScript: ${resourceMetrics.jsSize}`);
    console.log(`CSS: ${resourceMetrics.cssSize}`);

    // Performance grade
    let grade = 'F';
    let status = '❌ FAIL';

    if (loadTime < 3000) {
      grade = 'A';
      status = '✅ EXCELLENT';
    } else if (loadTime < 5000) {
      grade = 'B';
      status = '🟨 GOOD';
    } else if (loadTime < 10000) {
      grade = 'C';
      status = '🟧 NEEDS IMPROVEMENT';
    } else if (loadTime < 20000) {
      grade = 'D';
      status = '🔴 POOR';
    }

    console.log('\n🎯 PERFORMANCE GRADE:');
    console.log('==========================================');
    console.log(`Grade: ${grade} | Status: ${status}`);

    if (loadTime > 3000) {
      console.log('\n🔧 RECOMMENDATIONS:');
      console.log('- Implement code splitting');
      console.log('- Add lazy loading for components');
      console.log('- Optimize bundle size');
      console.log('- Use React.memo for heavy components');
      console.log('- Consider virtualization for large lists');
    }

    console.log('\n' + '='.repeat(50));

    return {
      loadTime,
      metrics,
      memoryMetrics,
      resourceMetrics,
      grade,
      status
    };

  } catch (error) {
    console.error('❌ Performance test failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the test
runKanbanPerformanceTest()
  .then((results) => {
    console.log('🎉 Performance test completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Performance test failed:', error);
    process.exit(1);
  });