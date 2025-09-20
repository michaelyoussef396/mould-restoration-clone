const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs').promises;

async function runUltraLCPAudit() {
  console.log('🚀 ULTRA LCP OPTIMIZATION LIGHTHOUSE AUDIT');
  console.log('==========================================');
  console.log('📍 Target: http://localhost:6001');
  console.log('📱 Device: Mobile');
  console.log('🎯 Goals: 95%+ performance, LCP <2.5s');
  console.log('');

  let chrome = null;

  try {
    // Launch Chrome
    console.log('🔧 Launching Chrome...');
    chrome = await chromeLauncher.launch({
      chromeFlags: [
        '--headless',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-first-run',
        '--disable-extensions',
        '--disable-default-apps'
      ]
    });

    console.log('✅ Chrome launched successfully');

    // Configure Lighthouse for mobile audit
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance'],
      port: chrome.port,
      formFactor: 'mobile',
      throttling: {
        rttMs: 150,           // 3G network simulation
        throughputKbps: 1638.4, // 3G network simulation
        cpuSlowdownMultiplier: 4
      },
      screenEmulation: {
        mobile: true,
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        disabled: false,
      },
      emulatedUserAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'
    };

    console.log('📊 Running Lighthouse audit...');
    const runnerResult = await lighthouse('http://localhost:6001', options);

    if (!runnerResult || !runnerResult.lhr) {
      throw new Error('Failed to generate Lighthouse report');
    }

    const lhr = runnerResult.lhr;

    // Check for runtime errors
    if (lhr.runtimeError) {
      console.error('❌ Runtime Error:', lhr.runtimeError.message);
      throw new Error(`Lighthouse runtime error: ${lhr.runtimeError.message}`);
    }

    // Extract performance score
    const performanceCategory = lhr.categories?.performance;
    if (!performanceCategory) {
      throw new Error('Performance category not found in results');
    }

    const performanceScore = Math.round(performanceCategory.score * 100);

    // Extract key metrics
    const audits = lhr.audits;
    const fcp = audits['first-contentful-paint'];
    const lcp = audits['largest-contentful-paint'];
    const cls = audits['cumulative-layout-shift'];
    const tbt = audits['total-blocking-time'];
    const si = audits['speed-index'];
    const inp = audits['interaction-to-next-paint'];

    console.log('\n🎯 ULTRA LCP OPTIMIZATION RESULTS:');
    console.log('==========================================');
    console.log(`📊 Performance Score: ${performanceScore}%`);
    console.log(`🎨 First Contentful Paint: ${fcp?.displayValue || 'N/A'}`);
    console.log(`🖼️  Largest Contentful Paint: ${lcp?.displayValue || 'N/A'}`);
    console.log(`📏 Cumulative Layout Shift: ${cls?.displayValue || 'N/A'}`);
    console.log(`⏱️  Total Blocking Time: ${tbt?.displayValue || 'N/A'}`);
    console.log(`🏃 Speed Index: ${si?.displayValue || 'N/A'}`);
    if (inp) {
      console.log(`🖱️  Interaction to Next Paint: ${inp.displayValue}`);
    }

    // Calculate key values
    const lcpSeconds = lcp?.numericValue ? parseFloat(lcp.numericValue / 1000) : null;
    const clsValue = cls?.numericValue ? parseFloat(cls.numericValue) : null;
    const fcpSeconds = fcp?.numericValue ? parseFloat(fcp.numericValue / 1000) : null;

    console.log('\n🎯 GOALS ACHIEVEMENT STATUS:');
    console.log('============================');

    const goals = {
      performance95: performanceScore >= 95,
      lcpUnder2_5: lcpSeconds ? lcpSeconds <= 2.5 : false,
      clsUnder0_1: clsValue ? clsValue <= 0.1 : false
    };

    console.log(`95%+ Performance Score: ${goals.performance95 ? '✅ ACHIEVED' : `❌ Current: ${performanceScore}%`}`);
    console.log(`LCP <2.5s Target: ${goals.lcpUnder2_5 ? '✅ ACHIEVED' : `❌ Current: ${lcpSeconds?.toFixed(2) || 'N/A'}s`}`);
    console.log(`CLS <0.1 Target: ${goals.clsUnder0_1 ? '✅ ACHIEVED' : `❌ Current: ${clsValue?.toFixed(3) || 'N/A'}`}`);

    // Analyze LCP barrier breakthrough
    console.log('\n🏆 LCP BARRIER ANALYSIS:');
    console.log('========================');
    if (lcpSeconds) {
      if (lcpSeconds <= 2.5) {
        console.log('🎉 LCP BARRIER BROKEN! Excellent performance achieved!');
        console.log(`🚀 Your ultra-optimized implementation achieved ${lcpSeconds.toFixed(2)}s LCP`);
      } else if (lcpSeconds <= 4.0) {
        console.log('⚠️  LCP needs improvement - close to breaking the barrier');
        console.log(`🔧 Current LCP: ${lcpSeconds.toFixed(2)}s (target: <2.5s)`);
      } else {
        console.log('❌ LCP requires significant optimization');
        console.log(`🔧 Current LCP: ${lcpSeconds.toFixed(2)}s (target: <2.5s)`);
      }
    }

    // Extract optimization opportunities
    console.log('\n🔧 OPTIMIZATION OPPORTUNITIES:');
    console.log('==============================');

    const opportunities = [];
    const opportunityAudits = [
      'unused-css-rules',
      'unused-javascript',
      'render-blocking-resources',
      'unminified-css',
      'unminified-javascript',
      'modern-image-formats',
      'uses-optimized-images',
      'uses-text-compression',
      'prioritize-lcp-image',
      'largest-contentful-paint-element',
      'preload-lcp-image'
    ];

    let totalPotentialSavings = 0;

    opportunityAudits.forEach(auditName => {
      const audit = audits[auditName];
      if (audit && audit.score !== null && audit.score < 1) {
        const savings = audit.details?.overallSavingsMs || 0;
        totalPotentialSavings += savings;
        opportunities.push({
          audit: auditName,
          title: audit.title,
          savings: `${savings}ms`,
          score: Math.round(audit.score * 100),
          description: audit.description
        });
        console.log(`⚠️  ${audit.title}: ${savings}ms potential savings (Score: ${Math.round(audit.score * 100)}%)`);
      }
    });

    if (opportunities.length === 0) {
      console.log('✅ No major optimization opportunities found - excellent work!');
    } else {
      console.log(`\n📊 Total potential savings: ${totalPotentialSavings}ms`);
    }

    // Prepare results object
    const results = {
      timestamp: new Date().toISOString(),
      url: 'http://localhost:6001',
      device: 'mobile',
      optimizationType: 'ultra-lcp-optimization',
      summary: {
        performanceScore,
        lcpSeconds,
        fcpSeconds,
        clsValue,
        goals,
        lcpBarrierBroken: goals.lcpUnder2_5,
        overallSuccess: goals.performance95 && goals.lcpUnder2_5,
        totalPotentialSavings: `${totalPotentialSavings}ms`
      },
      coreWebVitals: {
        fcp: { score: fcp?.score || 0, value: fcp?.displayValue || 'N/A', numeric: fcp?.numericValue || 0 },
        lcp: { score: lcp?.score || 0, value: lcp?.displayValue || 'N/A', numeric: lcp?.numericValue || 0 },
        cls: { score: cls?.score || 0, value: cls?.displayValue || 'N/A', numeric: cls?.numericValue || 0 },
        tbt: { score: tbt?.score || 0, value: tbt?.displayValue || 'N/A', numeric: tbt?.numericValue || 0 },
        si: { score: si?.score || 0, value: si?.displayValue || 'N/A', numeric: si?.numericValue || 0 }
      },
      opportunities,
      optimizations: {
        heroImageSize: '14kB (optimized from 133kB)',
        criticalCSSInlined: true,
        progressiveImageLoading: true,
        aggressiveAssetInlining: true,
        reducedFontWeights: true
      },
      fullLighthouseReport: lhr
    };

    // Save results
    const outputPath = '/Users/michaelyoussef/APP/mould-restoration-clone/lighthouse-ultra-lcp-optimization.json';
    await fs.writeFile(outputPath, JSON.stringify(results, null, 2));

    console.log(`\n💾 Full results saved to: lighthouse-ultra-lcp-optimization.json`);

    // Final assessment
    console.log('\n🏁 FINAL ASSESSMENT:');
    console.log('====================');

    if (results.summary.overallSuccess) {
      console.log('🎉 CONGRATULATIONS! ULTRA LCP OPTIMIZATION SUCCESSFUL!');
      console.log('✨ You have successfully broken the LCP barrier!');
      console.log('🏆 Achieved both 95%+ performance score AND LCP <2.5s');
      console.log('🚀 Your optimizations are working perfectly!');
    } else if (goals.lcpUnder2_5) {
      console.log('🎯 LCP BARRIER BROKEN! (Performance score needs improvement)');
      console.log('✅ LCP target achieved - excellent work on image optimization!');
      console.log('🔧 Focus on remaining performance opportunities to reach 95%+');
    } else if (goals.performance95) {
      console.log('📊 HIGH PERFORMANCE SCORE! (LCP needs optimization)');
      console.log('✅ 95%+ performance achieved');
      console.log('🔧 Focus on LCP optimization to break the 2.5s barrier');
    } else {
      console.log('🔧 FURTHER OPTIMIZATION NEEDED');
      console.log('📈 Continue optimizing both performance score and LCP');
      console.log('💡 Review opportunities listed above for next steps');
    }

    return results;

  } catch (error) {
    console.error('\n❌ AUDIT FAILED:', error.message);
    console.error('Stack:', error.stack);

    // Save error details
    const errorResults = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      url: 'http://localhost:6001',
      device: 'mobile'
    };

    const outputPath = '/Users/michaelyoussef/APP/mould-restoration-clone/lighthouse-ultra-lcp-optimization.json';
    await fs.writeFile(outputPath, JSON.stringify(errorResults, null, 2));

    console.log('\n💾 Error details saved to: lighthouse-ultra-lcp-optimization.json');

    return errorResults;

  } finally {
    if (chrome) {
      await chrome.kill();
      console.log('🔧 Chrome browser closed');
    }
  }
}

// Run the audit
runUltraLCPAudit()
  .then(results => {
    if (results.summary?.overallSuccess) {
      process.exit(0); // Success
    } else {
      process.exit(1); // Needs improvement
    }
  })
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });