const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runUltraLCPAudit() {
  console.log('🚀 Starting Ultra LCP Optimization Lighthouse Audit...');

  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
  });

  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
    formFactor: 'mobile',
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      cpuSlowdownMultiplier: 4
    },
    screenEmulation: {
      mobile: true,
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      disabled: false,
    }
  };

  try {
    console.log('📱 Running mobile performance audit on http://localhost:6001');
    const runnerResult = await lighthouse('http://localhost:6001', options);

    // Extract key metrics
    const lhr = runnerResult.lhr;
    const performanceScore = Math.round(lhr.categories.performance.score * 100);

    const metrics = {
      performanceScore,
      firstContentfulPaint: lhr.audits['first-contentful-paint'],
      largestContentfulPaint: lhr.audits['largest-contentful-paint'],
      cumulativeLayoutShift: lhr.audits['cumulative-layout-shift'],
      totalBlockingTime: lhr.audits['total-blocking-time'],
      speedIndex: lhr.audits['speed-index'],
      interactionToNextPaint: lhr.audits['interaction-to-next-paint'] || null
    };

    console.log('\n🎯 ULTRA LCP OPTIMIZATION RESULTS:');
    console.log('==========================================');
    console.log(`📊 Performance Score: ${performanceScore}%`);
    console.log(`🎨 First Contentful Paint: ${metrics.firstContentfulPaint.displayValue}`);
    console.log(`🖼️  Largest Contentful Paint: ${metrics.largestContentfulPaint.displayValue}`);
    console.log(`📏 Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.displayValue}`);
    console.log(`⏱️  Total Blocking Time: ${metrics.totalBlockingTime.displayValue}`);
    console.log(`🏃 Speed Index: ${metrics.speedIndex.displayValue}`);
    if (metrics.interactionToNextPaint) {
      console.log(`🖱️  Interaction to Next Paint: ${metrics.interactionToNextPaint.displayValue}`);
    }

    // LCP Analysis
    const lcpValue = parseFloat(metrics.largestContentfulPaint.numericValue / 1000);
    console.log('\n🔍 LCP OPTIMIZATION ANALYSIS:');
    console.log('============================');
    console.log(`LCP Time: ${lcpValue.toFixed(2)}s`);

    if (lcpValue <= 2.5) {
      console.log('✅ LCP BARRIER BROKEN! Excellent performance under 2.5s');
    } else if (lcpValue <= 4.0) {
      console.log('⚠️  LCP needs improvement (2.5-4.0s range)');
    } else {
      console.log('❌ LCP requires significant optimization (>4.0s)');
    }

    // Performance Goals Check
    console.log('\n🎯 PERFORMANCE GOALS STATUS:');
    console.log('============================');
    console.log(`95%+ Score Target: ${performanceScore >= 95 ? '✅ ACHIEVED' : `❌ Current: ${performanceScore}%`}`);
    console.log(`LCP <2.5s Target: ${lcpValue <= 2.5 ? '✅ ACHIEVED' : `❌ Current: ${lcpValue.toFixed(2)}s`}`);

    const clsValue = parseFloat(metrics.cumulativeLayoutShift.numericValue);
    console.log(`CLS <0.1 Target: ${clsValue <= 0.1 ? '✅ ACHIEVED' : `❌ Current: ${clsValue.toFixed(3)}`}`);

    // Opportunities Analysis
    console.log('\n🔧 OPTIMIZATION OPPORTUNITIES:');
    console.log('==============================');

    const opportunities = [
      'unused-css-rules',
      'unused-javascript',
      'render-blocking-resources',
      'unminified-css',
      'unminified-javascript',
      'efficient-animated-content',
      'modern-image-formats',
      'uses-optimized-images',
      'uses-text-compression',
      'uses-rel-preconnect',
      'uses-rel-preload',
      'font-display',
      'prioritize-lcp-image'
    ];

    opportunities.forEach(audit => {
      if (lhr.audits[audit] && lhr.audits[audit].score < 1) {
        const savings = lhr.audits[audit].details?.overallSavingsMs || 0;
        console.log(`⚠️  ${lhr.audits[audit].title}: ${savings}ms potential savings`);
      }
    });

    // Save detailed results
    const auditResults = {
      timestamp: new Date().toISOString(),
      url: 'http://localhost:6001',
      device: 'mobile',
      optimizationType: 'ultra-lcp-optimization',
      summary: {
        performanceScore,
        lcpSeconds: lcpValue,
        goalsAchieved: {
          performanceScore95Plus: performanceScore >= 95,
          lcpUnder2_5s: lcpValue <= 2.5,
          clsUnder0_1: clsValue <= 0.1
        }
      },
      metrics,
      fullReport: lhr
    };

    // Write results to file
    fs.writeFileSync('/Users/michaelyoussef/APP/mould-restoration-clone/lighthouse-ultra-lcp-optimization.json',
      JSON.stringify(auditResults, null, 2));

    console.log('\n💾 Results saved to: lighthouse-ultra-lcp-optimization.json');

    // Recommendations
    console.log('\n💡 NEXT STEPS:');
    console.log('==============');
    if (performanceScore >= 95 && lcpValue <= 2.5) {
      console.log('🎉 CONGRATULATIONS! Ultra LCP optimization successful!');
      console.log('📈 Consider testing on different pages and network conditions');
      console.log('🔄 Monitor real-world Core Web Vitals in production');
    } else {
      console.log('🔧 Further optimizations needed:');
      if (performanceScore < 95) {
        console.log('   - Focus on remaining performance opportunities');
      }
      if (lcpValue > 2.5) {
        console.log('   - Investigate LCP element optimization');
        console.log('   - Consider server-side rendering improvements');
        console.log('   - Optimize critical resource loading');
      }
    }

  } catch (error) {
    console.error('❌ Audit failed:', error.message);

    // Save error details
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack
    };

    fs.writeFileSync('/Users/michaelyoussef/APP/mould-restoration-clone/lighthouse-ultra-lcp-optimization.json',
      JSON.stringify(errorReport, null, 2));
  } finally {
    await chrome.kill();
  }
}

runUltraLCPAudit().catch(console.error);