const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runAudit() {
  let chrome;

  try {
    console.log('🚀 Launching Chrome for Ultra LCP Audit...');

    chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
    });

    console.log('📱 Running mobile Lighthouse audit on localhost:6001...');

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
      }
    };

    const runnerResult = await lighthouse('http://localhost:6001', options);

    if (!runnerResult || !runnerResult.lhr) {
      throw new Error('Failed to get lighthouse results');
    }

    const lhr = runnerResult.lhr;
    const performanceScore = Math.round(lhr.categories.performance.score * 100);

    // Extract key metrics
    const fcp = lhr.audits['first-contentful-paint'];
    const lcp = lhr.audits['largest-contentful-paint'];
    const cls = lhr.audits['cumulative-layout-shift'];
    const tbt = lhr.audits['total-blocking-time'];
    const si = lhr.audits['speed-index'];

    console.log('\n🎯 ULTRA LCP OPTIMIZATION RESULTS:');
    console.log('==========================================');
    console.log(`📊 Performance Score: ${performanceScore}%`);
    console.log(`🎨 First Contentful Paint: ${fcp.displayValue}`);
    console.log(`🖼️  Largest Contentful Paint: ${lcp.displayValue}`);
    console.log(`📏 Cumulative Layout Shift: ${cls.displayValue}`);
    console.log(`⏱️  Total Blocking Time: ${tbt.displayValue}`);
    console.log(`🏃 Speed Index: ${si.displayValue}`);

    const lcpSeconds = parseFloat(lcp.numericValue / 1000);
    const clsValue = parseFloat(cls.numericValue);

    console.log('\n🎯 GOALS ACHIEVEMENT:');
    console.log('====================');
    console.log(`95%+ Score: ${performanceScore >= 95 ? '✅ ACHIEVED' : `❌ ${performanceScore}%`}`);
    console.log(`LCP <2.5s: ${lcpSeconds <= 2.5 ? '✅ ACHIEVED' : `❌ ${lcpSeconds.toFixed(2)}s`}`);
    console.log(`CLS <0.1: ${clsValue <= 0.1 ? '✅ ACHIEVED' : `❌ ${clsValue.toFixed(3)}`}`);

    // Save results
    const results = {
      timestamp: new Date().toISOString(),
      url: 'http://localhost:6001',
      device: 'mobile',
      summary: {
        performanceScore,
        lcpSeconds,
        clsValue,
        goals: {
          performance95: performanceScore >= 95,
          lcpUnder2_5: lcpSeconds <= 2.5,
          clsUnder0_1: clsValue <= 0.1
        }
      },
      metrics: {
        fcp: { score: fcp.score, value: fcp.displayValue, numeric: fcp.numericValue },
        lcp: { score: lcp.score, value: lcp.displayValue, numeric: lcp.numericValue },
        cls: { score: cls.score, value: cls.displayValue, numeric: cls.numericValue },
        tbt: { score: tbt.score, value: tbt.displayValue, numeric: tbt.numericValue },
        si: { score: si.score, value: si.displayValue, numeric: si.numericValue }
      },
      opportunities: [],
      fullReport: lhr
    };

    // Extract opportunities
    const opportunityAudits = [
      'unused-css-rules',
      'unused-javascript',
      'render-blocking-resources',
      'unminified-css',
      'modern-image-formats',
      'uses-optimized-images',
      'prioritize-lcp-image'
    ];

    opportunityAudits.forEach(auditName => {
      const audit = lhr.audits[auditName];
      if (audit && audit.score < 1) {
        const savings = audit.details?.overallSavingsMs || 0;
        results.opportunities.push({
          audit: auditName,
          title: audit.title,
          savings: `${savings}ms`,
          description: audit.description
        });
        console.log(`🔧 ${audit.title}: ${savings}ms potential savings`);
      }
    });

    fs.writeFileSync(
      '/Users/michaelyoussef/APP/mould-restoration-clone/lighthouse-ultra-lcp-optimization.json',
      JSON.stringify(results, null, 2)
    );

    console.log('\n💾 Full results saved to: lighthouse-ultra-lcp-optimization.json');

    if (performanceScore >= 95 && lcpSeconds <= 2.5) {
      console.log('\n🎉 CONGRATULATIONS! Ultra LCP optimization is SUCCESSFUL!');
      console.log('✨ You have broken the LCP barrier and achieved 95%+ performance!');
    } else {
      console.log('\n🔧 Further optimization needed to reach targets');
    }

  } catch (error) {
    console.error('❌ Audit failed:', error.message);

    // Save error info
    fs.writeFileSync(
      '/Users/michaelyoussef/APP/mould-restoration-clone/lighthouse-ultra-lcp-optimization.json',
      JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      }, null, 2)
    );
  } finally {
    if (chrome) {
      await chrome.kill();
    }
  }
}

runAudit();