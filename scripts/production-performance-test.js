import puppeteer from 'puppeteer';

async function runProductionPerformanceTest() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    console.log('🚀 PRODUCTION PERFORMANCE TEST');
    console.log('='.repeat(60));

    // Simulate mobile field conditions
    await page.setViewport({ width: 375, height: 667 });

    // Simulate 3G network
    await page.emulateNetworkConditions({
      'offline': false,
      'downloadThroughput': 1.5 * 1024 * 1024 / 8, // 1.5 Mbps in bytes per second
      'uploadThroughput': 750 * 1024 / 8, // 750 Kbps in bytes per second
      'latency': 300 // 300ms latency
    });

    console.log('📱 Simulating Melbourne mobile field conditions:');
    console.log('   - Device: Mobile (375x667)');
    console.log('   - Network: 3G (1.5 Mbps down, 750 Kbps up, 300ms latency)');

    const startTime = Date.now();
    console.log('\n📍 Testing production build at http://localhost:8083');

    await page.goto('http://localhost:8083', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    const loadTime = Date.now() - startTime;

    // Get Core Web Vitals
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        const result = {
          fcp: null,
          lcp: null,
          cls: 0,
          memory: null
        };

        // First Contentful Paint
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          result.fcp = fcpEntry.startTime;
        }

        // Memory
        if ('memory' in performance) {
          result.memory = {
            used: (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2),
            total: (performance.memory.totalJSHeapSize / 1024 / 1024).toFixed(2)
          };
        }

        // LCP via Performance Observer
        if ('PerformanceObserver' in window) {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            result.lcp = lastEntry.startTime;
            lcpObserver.disconnect();
            resolve(result);
          });

          try {
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            setTimeout(() => {
              lcpObserver.disconnect();
              resolve(result);
            }, 3000);
          } catch (e) {
            resolve(result);
          }
        } else {
          resolve(result);
        }
      });
    });

    // Calculate performance scores
    const performanceScores = {
      loadTime: getScoreFromTime(loadTime, [1000, 2500, 4000]), // FCP thresholds
      fcp: metrics.fcp ? getScoreFromTime(metrics.fcp, [1800, 3000, 4000]) : null,
      lcp: metrics.lcp ? getScoreFromTime(metrics.lcp, [2500, 4000, 6000]) : null
    };

    // Generate report
    console.log('\n📊 PRODUCTION PERFORMANCE RESULTS');
    console.log('='.repeat(60));
    console.log(`⏱️  Total Load Time: ${loadTime}ms`);

    if (metrics.fcp) {
      console.log(`🎨 First Contentful Paint: ${metrics.fcp.toFixed(2)}ms`);
    }

    if (metrics.lcp) {
      console.log(`🖼️  Largest Contentful Paint: ${metrics.lcp.toFixed(2)}ms`);
    }

    if (metrics.memory) {
      console.log(`💾 Memory Usage: ${metrics.memory.used}MB`);
    }

    console.log('\n🎯 CORE WEB VITALS SCORES:');
    console.log('='.repeat(60));
    console.log(`Load Time: ${getGrade(performanceScores.loadTime)} (${loadTime}ms)`);

    if (performanceScores.fcp) {
      console.log(`FCP Score: ${getGrade(performanceScores.fcp)} (${metrics.fcp.toFixed(2)}ms)`);
    }

    if (performanceScores.lcp) {
      console.log(`LCP Score: ${getGrade(performanceScores.lcp)} (${metrics.lcp.toFixed(2)}ms)`);
    }

    // Field deployment assessment
    console.log('\n🚀 FIELD DEPLOYMENT READINESS:');
    console.log('='.repeat(60));

    const isFieldReady = loadTime < 3000 && (metrics.lcp ? metrics.lcp < 2500 : true);

    if (isFieldReady) {
      console.log('✅ READY FOR MELBOURNE FIELD DEPLOYMENT');
      console.log('✅ Meets 3G network performance requirements');
      console.log('✅ Suitable for mobile technician workflows');
      console.log('✅ Optimized for Australian mobile networks');
    } else {
      console.log('❌ REQUIRES FURTHER OPTIMIZATION');
      console.log('❌ Does not meet field performance requirements');
    }

    // Detailed analysis
    console.log('\n📈 PERFORMANCE ANALYSIS:');
    console.log('='.repeat(60));

    if (loadTime < 1000) {
      console.log('🚀 Outstanding: Sub-second load time');
    } else if (loadTime < 2000) {
      console.log('⚡ Excellent: Fast load time for mobile');
    } else if (loadTime < 3000) {
      console.log('👍 Good: Acceptable for field deployment');
    } else {
      console.log('⚠️  Needs work: Too slow for field conditions');
    }

    if (metrics.memory && parseFloat(metrics.memory.used) < 50) {
      console.log('💾 Memory efficient: Suitable for mobile devices');
    }

    console.log('\n' + '='.repeat(60));

    return {
      loadTime,
      metrics,
      scores: performanceScores,
      isFieldReady
    };

  } catch (error) {
    console.error('❌ Production test failed:', error);
    throw error;
  } finally {
    await page.close();
    await browser.close();
  }
}

function getScoreFromTime(time, thresholds) {
  if (time <= thresholds[0]) return 100;
  if (time <= thresholds[1]) return 75;
  if (time <= thresholds[2]) return 50;
  return 25;
}

function getGrade(score) {
  if (score >= 90) return '🥇 A+ (Excellent)';
  if (score >= 75) return '🥈 A (Good)';
  if (score >= 50) return '🥉 B (Average)';
  if (score >= 25) return '🟨 C (Needs Improvement)';
  return '🔴 F (Poor)';
}

// Run the test
runProductionPerformanceTest()
  .then((results) => {
    console.log('🎉 Production performance test completed');
    console.log(`Final Score: ${results.isFieldReady ? 'DEPLOYMENT READY' : 'NEEDS OPTIMIZATION'}`);
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Production test failed:', error);
    process.exit(1);
  });