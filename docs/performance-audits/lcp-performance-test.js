#!/usr/bin/env node

// LCP Performance Test for Advanced Optimizations
// Tests if we've achieved sub-2.5s LCP and 95%+ performance score

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runLCPTest() {
  console.log('🚀 Starting Advanced LCP Performance Test...');
  console.log('🎯 Target: LCP < 2.5s, Performance Score > 95%');
  console.log('');

  // Launch Chrome
  const chrome = await chromeLauncher.launch({
    chromeFlags: [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-extensions',
      '--disable-dev-shm-usage'
    ]
  });

  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
    settings: {
      // Throttling settings for more accurate mobile simulation
      throttlingMethod: 'simulate',
      throttling: {
        rttMs: 150,
        throughputKbps: 1638.4,
        cpuSlowdownMultiplier: 4,
        requestLatencyMs: 0,
        downloadThroughputKbps: 1638.4,
        uploadThroughputKbps: 750,
      },
      // Mobile emulation
      emulatedFormFactor: 'mobile',

      // Advanced LCP settings
      skipAudits: [
        'screenshot-thumbnails',
        'final-screenshot',
        'metrics'
      ],

      // Focus on Core Web Vitals
      onlyAudits: [
        'largest-contentful-paint',
        'cumulative-layout-shift',
        'speed-index',
        'interactive',
        'first-contentful-paint',
        'total-blocking-time'
      ]
    }
  };

  const urls = [
    'http://localhost:8080', // Development server
    // Add production URL when available
  ];

  const results = [];

  for (const url of urls) {
    try {
      console.log(`📊 Testing: ${url}`);

      const runResult = await lighthouse(url, options);
      const report = runResult.lhr;

      // Extract key metrics
      const metrics = {
        url,
        performanceScore: Math.round(report.categories.performance.score * 100),
        lcp: report.audits['largest-contentful-paint'].numericValue,
        cls: report.audits['cumulative-layout-shift'].numericValue,
        fcp: report.audits['first-contentful-paint'].numericValue,
        speedIndex: report.audits['speed-index'].numericValue,
        tbt: report.audits['total-blocking-time'].numericValue,
        interactive: report.audits['interactive'].numericValue,
      };

      results.push(metrics);

      // Performance analysis
      console.log('');
      console.log('📈 Performance Results:');
      console.log(`   Performance Score: ${metrics.performanceScore}%`);
      console.log(`   LCP: ${(metrics.lcp / 1000).toFixed(2)}s`);
      console.log(`   CLS: ${metrics.cls.toFixed(3)}`);
      console.log(`   FCP: ${(metrics.fcp / 1000).toFixed(2)}s`);
      console.log(`   Speed Index: ${(metrics.speedIndex / 1000).toFixed(2)}s`);
      console.log(`   TBT: ${metrics.tbt.toFixed(0)}ms`);
      console.log(`   TTI: ${(metrics.interactive / 1000).toFixed(2)}s`);
      console.log('');

      // Check if targets achieved
      const lcpAchieved = metrics.lcp <= 2500;
      const performanceAchieved = metrics.performanceScore >= 95;
      const clsAchieved = metrics.cls <= 0.1;

      console.log('🎯 Target Achievement:');
      console.log(`   LCP < 2.5s: ${lcpAchieved ? '✅ ACHIEVED' : '❌ FAILED'} (${(metrics.lcp / 1000).toFixed(2)}s)`);
      console.log(`   Score > 95%: ${performanceAchieved ? '✅ ACHIEVED' : '❌ FAILED'} (${metrics.performanceScore}%)`);
      console.log(`   CLS < 0.1: ${clsAchieved ? '✅ ACHIEVED' : '❌ FAILED'} (${metrics.cls.toFixed(3)})`);
      console.log('');

      if (lcpAchieved && performanceAchieved && clsAchieved) {
        console.log('🏆 ALL TARGETS ACHIEVED! LCP optimization successful!');
      } else {
        console.log('⚠️  Some targets not met. Review optimization strategies.');

        // Specific recommendations
        if (!lcpAchieved) {
          console.log('   📋 LCP Optimization needed:');
          console.log('      - Further image compression');
          console.log('      - Additional preload resources');
          console.log('      - Critical path optimization');
        }

        if (!performanceAchieved) {
          console.log('   📋 Performance Score improvement needed:');
          console.log('      - Reduce bundle size');
          console.log('      - Optimize unused JavaScript');
          console.log('      - Improve resource caching');
        }

        if (!clsAchieved) {
          console.log('   📋 CLS improvement needed:');
          console.log('      - Set explicit image dimensions');
          console.log('      - Reserve space for dynamic content');
          console.log('      - Optimize font loading');
        }
      }

      console.log('');
      console.log('=' .repeat(60));
      console.log('');

    } catch (error) {
      console.error(`❌ Error testing ${url}:`, error.message);
    }
  }

  // Save detailed results
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportFile = `lcp-performance-results-${timestamp}.json`;

  fs.writeFileSync(reportFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    testConfig: {
      target_lcp: 2500,
      target_performance_score: 95,
      target_cls: 0.1
    },
    results
  }, null, 2));

  console.log(`📄 Detailed results saved to: ${reportFile}`);

  await chrome.kill();

  // Exit with appropriate code
  const allTargetsAchieved = results.every(r =>
    r.lcp <= 2500 && r.performanceScore >= 95 && r.cls <= 0.1
  );

  process.exit(allTargetsAchieved ? 0 : 1);
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run the test
runLCPTest().catch((error) => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});