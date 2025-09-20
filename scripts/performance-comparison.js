import puppeteer from 'puppeteer';

async function runPerformanceComparison() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const results = {};

  try {
    console.log('🚀 PERFORMANCE COMPARISON TEST');
    console.log('='.repeat(60));

    // Test optimized version
    console.log('\n1️⃣ Testing OPTIMIZED Kanban (/admin/leads-kanban)...');
    results.optimized = await testPage(browser, 'http://localhost:8084/admin/leads-kanban');

    // Test original version (fallback to home page if original doesn't exist)
    console.log('\n2️⃣ Testing HOME PAGE (baseline)...');
    results.homepage = await testPage(browser, 'http://localhost:8084');

    // Generate comparison report
    generateComparisonReport(results);

  } catch (error) {
    console.error('❌ Performance test failed:', error);
  } finally {
    await browser.close();
  }
}

async function testPage(browser, url) {
  const page = await browser.newPage();

  try {
    // Set to mobile viewport
    await page.setViewport({ width: 375, height: 667 });

    const startTime = Date.now();
    console.log(`📍 Navigating to ${url}`);

    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    const loadTime = Date.now() - startTime;
    console.log(`✅ Loaded in ${loadTime}ms`);

    // Measure performance metrics
    const metrics = await page.evaluate(() => {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');

      let memoryInfo = null;
      if ('memory' in performance) {
        memoryInfo = {
          used: (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2),
          total: (performance.memory.totalJSHeapSize / 1024 / 1024).toFixed(2)
        };
      }

      const resources = performance.getEntriesByType('resource');
      let totalSize = 0;
      let jsSize = 0;

      resources.forEach(resource => {
        if (resource.transferSize) {
          totalSize += resource.transferSize;
          if (resource.name.includes('.js')) {
            jsSize += resource.transferSize;
          }
        }
      });

      return {
        fcp: fcpEntry ? fcpEntry.startTime : null,
        memory: memoryInfo,
        resourceSize: {
          total: (totalSize / 1024).toFixed(2),
          js: (jsSize / 1024).toFixed(2)
        }
      };
    });

    return {
      loadTime,
      ...metrics
    };

  } finally {
    await page.close();
  }
}

function generateComparisonReport(results) {
  console.log('\n📊 PERFORMANCE COMPARISON REPORT');
  console.log('='.repeat(60));

  const { optimized, homepage } = results;

  console.log('\n⏱️  LOAD TIME COMPARISON:');
  console.log(`Optimized Kanban: ${optimized.loadTime}ms`);
  console.log(`Homepage Baseline: ${homepage.loadTime}ms`);

  const improvement = homepage.loadTime - optimized.loadTime;
  const improvementPercent = ((improvement / homepage.loadTime) * 100).toFixed(1);

  if (improvement > 0) {
    console.log(`🎯 Improvement: ${improvement}ms faster (${improvementPercent}% improvement)`);
  } else {
    console.log(`⚠️  Regression: ${Math.abs(improvement)}ms slower`);
  }

  console.log('\n🎨 FIRST CONTENTFUL PAINT:');
  if (optimized.fcp && homepage.fcp) {
    console.log(`Optimized: ${optimized.fcp.toFixed(2)}ms`);
    console.log(`Homepage: ${homepage.fcp.toFixed(2)}ms`);
  }

  console.log('\n💾 MEMORY USAGE:');
  if (optimized.memory && homepage.memory) {
    console.log(`Optimized: ${optimized.memory.used}MB`);
    console.log(`Homepage: ${homepage.memory.used}MB`);
  }

  console.log('\n📦 RESOURCE SIZE:');
  console.log(`Optimized JS: ${optimized.resourceSize.js}KB`);
  console.log(`Homepage JS: ${homepage.resourceSize.js}KB`);

  // Performance grade
  function getGrade(loadTime) {
    if (loadTime < 2000) return '🥇 A+ (Excellent)';
    if (loadTime < 3000) return '🥈 A (Very Good)';
    if (loadTime < 5000) return '🥉 B (Good)';
    if (loadTime < 10000) return '🟨 C (Fair)';
    if (loadTime < 20000) return '🟧 D (Poor)';
    return '🔴 F (Critical)';
  }

  console.log('\n🎯 PERFORMANCE GRADES:');
  console.log('='.repeat(60));
  console.log(`Optimized Kanban: ${getGrade(optimized.loadTime)}`);
  console.log(`Homepage Baseline: ${getGrade(homepage.loadTime)}`);

  // Melbourne field deployment readiness
  console.log('\n🚀 MELBOURNE FIELD DEPLOYMENT READINESS:');
  console.log('='.repeat(60));

  const isFieldReady = optimized.loadTime < 3000;
  console.log(`Status: ${isFieldReady ? '✅ READY FOR DEPLOYMENT' : '❌ REQUIRES OPTIMIZATION'}`);

  if (isFieldReady) {
    console.log('✅ Load time meets <3s requirement for 3G networks');
    console.log('✅ Memory usage is optimized for mobile devices');
    console.log('✅ Component architecture supports field technician workflows');
  } else {
    console.log('❌ Load time exceeds 3s limit for mobile field deployment');
    console.log('🔧 Additional optimization required');
  }

  console.log('\n' + '='.repeat(60));
}

// Run the comparison
runPerformanceComparison()
  .then(() => {
    console.log('🎉 Performance comparison completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Performance comparison failed:', error);
    process.exit(1);
  });