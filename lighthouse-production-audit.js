const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runProductionAudit() {
  console.log('🚀 Starting Production Lighthouse Mobile Audit...');
  console.log('📱 Target: http://localhost:6001 (Production Server)');
  console.log('🎯 Goals: 95%+ Performance, LCP < 2.5s, All Core Web Vitals Green');

  const chrome = await chromeLauncher.launch({
    chromeFlags: [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-web-security',
      '--disable-features=TranslateUI',
      '--disable-ipc-flooding-protection'
    ]
  });

  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
    formFactor: 'mobile',
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      cpuSlowdownMultiplier: 4,
      requestLatencyMs: 150,
      downloadThroughputKbps: 1638.4,
      uploadThroughputKbps: 675
    },
    screenEmulation: {
      mobile: true,
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      disabled: false,
    },
    emulatedUserAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
  };

  try {
    console.log('🔍 Running comprehensive mobile audit...');
    const runnerResult = await lighthouse('http://localhost:6001', options);

    if (!runnerResult || !runnerResult.lhr) {
      throw new Error('Lighthouse failed to generate results');
    }

    const results = runnerResult.lhr;

    // Extract key metrics
    const performance = Math.round(results.categories.performance.score * 100);
    const accessibility = Math.round(results.categories.accessibility.score * 100);
    const bestPractices = Math.round(results.categories['best-practices'].score * 100);
    const seo = Math.round(results.categories.seo.score * 100);

    // Core Web Vitals
    const lcp = results.audits['largest-contentful-paint'];
    const inp = results.audits['interaction-to-next-paint'] || results.audits['max-potential-fid'];
    const cls = results.audits['cumulative-layout-shift'];

    console.log('\n🎯 LIGHTHOUSE PRODUCTION AUDIT RESULTS');
    console.log('==========================================');
    console.log(`📊 Performance Score: ${performance}% ${performance >= 95 ? '✅' : '❌'}`);
    console.log(`♿ Accessibility Score: ${accessibility}% ${accessibility >= 90 ? '✅' : '⚠️'}`);
    console.log(`⭐ Best Practices Score: ${bestPractices}% ${bestPractices >= 90 ? '✅' : '⚠️'}`);
    console.log(`🔍 SEO Score: ${seo}% ${seo >= 90 ? '✅' : '⚠️'}`);

    console.log('\n🚀 CORE WEB VITALS');
    console.log('==================');
    const lcpValue = lcp.numericValue / 1000;
    const clsValue = cls.numericValue;
    const inpValue = inp ? inp.numericValue : 'N/A';

    console.log(`🎨 LCP: ${lcpValue.toFixed(2)}s ${lcpValue <= 2.5 ? '✅' : '❌'} (Target: ≤2.5s)`);
    console.log(`📱 INP: ${inpValue !== 'N/A' ? inpValue + 'ms' : 'N/A'} ${inpValue !== 'N/A' && inpValue <= 200 ? '✅' : inpValue === 'N/A' ? '⚠️' : '❌'} (Target: ≤200ms)`);
    console.log(`🎭 CLS: ${clsValue.toFixed(3)} ${clsValue <= 0.1 ? '✅' : '❌'} (Target: ≤0.1)`);

    // Detailed performance analysis
    console.log('\n📈 PERFORMANCE BREAKDOWN');
    console.log('========================');

    const metrics = {
      'first-contentful-paint': 'First Contentful Paint',
      'largest-contentful-paint': 'Largest Contentful Paint',
      'first-meaningful-paint': 'First Meaningful Paint',
      'speed-index': 'Speed Index',
      'interactive': 'Time to Interactive',
      'total-blocking-time': 'Total Blocking Time'
    };

    Object.entries(metrics).forEach(([key, label]) => {
      const audit = results.audits[key];
      if (audit) {
        const value = key === 'cumulative-layout-shift' ?
          audit.numericValue.toFixed(3) :
          (audit.numericValue / 1000).toFixed(2) + 's';
        const score = audit.score ? Math.round(audit.score * 100) + '%' : 'N/A';
        console.log(`${label}: ${value} (${score})`);
      }
    });

    // Opportunities analysis
    console.log('\n🔧 OPTIMIZATION OPPORTUNITIES');
    console.log('==============================');

    const opportunities = Object.entries(results.audits)
      .filter(([key, audit]) => audit.details && audit.details.type === 'opportunity' && audit.numericValue > 100)
      .sort((a, b) => b[1].numericValue - a[1].numericValue)
      .slice(0, 10);

    if (opportunities.length === 0) {
      console.log('🎉 No significant optimization opportunities found!');
    } else {
      opportunities.forEach(([key, audit]) => {
        const savings = (audit.numericValue / 1000).toFixed(2);
        console.log(`📉 ${audit.title}: ${savings}s potential savings`);
        if (audit.description) {
          console.log(`   💡 ${audit.description}`);
        }
      });
    }

    // Warnings and errors
    console.log('\n⚠️  WARNINGS & ISSUES');
    console.log('=====================');

    const issues = Object.entries(results.audits)
      .filter(([key, audit]) => audit.score !== null && audit.score < 1)
      .sort((a, b) => a[1].score - b[1].score)
      .slice(0, 10);

    if (issues.length === 0) {
      console.log('🎉 No critical issues found!');
    } else {
      issues.forEach(([key, audit]) => {
        const score = Math.round(audit.score * 100);
        console.log(`🔴 ${audit.title}: ${score}%`);
        if (audit.description) {
          console.log(`   📝 ${audit.description}`);
        }
      });
    }

    // Save detailed results
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `/Users/michaelyoussef/APP/mould-restoration-clone/lighthouse-final-production-audit.json`;

    fs.writeFileSync(filename, JSON.stringify(results, null, 2));
    console.log(`\n💾 Full audit results saved to: ${filename}`);

    // Generate summary report
    const summaryReport = {
      timestamp: new Date().toISOString(),
      url: 'http://localhost:6001',
      environment: 'production',
      device: 'mobile',
      scores: {
        performance,
        accessibility,
        bestPractices,
        seo
      },
      coreWebVitals: {
        lcp: {
          value: lcpValue,
          passing: lcpValue <= 2.5,
          unit: 'seconds'
        },
        inp: {
          value: inpValue,
          passing: inpValue !== 'N/A' ? inpValue <= 200 : null,
          unit: 'milliseconds'
        },
        cls: {
          value: clsValue,
          passing: clsValue <= 0.1,
          unit: 'score'
        }
      },
      goalsMet: {
        performance95Plus: performance >= 95,
        lcpUnder2_5: lcpValue <= 2.5,
        allCoreWebVitalsGreen: lcpValue <= 2.5 && clsValue <= 0.1 && (inpValue === 'N/A' || inpValue <= 200)
      },
      topOpportunities: opportunities.slice(0, 5).map(([key, audit]) => ({
        audit: audit.title,
        potentialSavings: (audit.numericValue / 1000).toFixed(2) + 's'
      })),
      criticalIssues: issues.slice(0, 5).map(([key, audit]) => ({
        audit: audit.title,
        score: Math.round(audit.score * 100) + '%'
      }))
    };

    const summaryFilename = `/Users/michaelyoussef/APP/mould-restoration-clone/lighthouse-production-summary.json`;
    fs.writeFileSync(summaryFilename, JSON.stringify(summaryReport, null, 2));

    console.log('\n🎯 GOALS ASSESSMENT');
    console.log('===================');
    console.log(`✅ Performance 95%+: ${summaryReport.goalsMet.performance95Plus ? 'ACHIEVED' : 'NOT MET'} (${performance}%)`);
    console.log(`✅ LCP < 2.5s: ${summaryReport.goalsMet.lcpUnder2_5 ? 'ACHIEVED' : 'NOT MET'} (${lcpValue.toFixed(2)}s)`);
    console.log(`✅ All Core Web Vitals Green: ${summaryReport.goalsMet.allCoreWebVitalsGreen ? 'ACHIEVED' : 'NOT MET'}`);

    if (summaryReport.goalsMet.performance95Plus && summaryReport.goalsMet.lcpUnder2_5 && summaryReport.goalsMet.allCoreWebVitalsGreen) {
      console.log('\n🏆 SUCCESS! All performance goals achieved!');
    } else {
      console.log('\n📋 Next steps needed to meet remaining goals');
    }

    console.log(`\n📊 Summary report saved to: ${summaryFilename}`);

  } catch (error) {
    console.error('❌ Lighthouse audit failed:', error.message);
    process.exit(1);
  } finally {
    await chrome.kill();
  }
}

runProductionAudit().catch(console.error);