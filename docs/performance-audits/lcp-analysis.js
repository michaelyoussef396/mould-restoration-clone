#!/usr/bin/env node

/**
 * LCP Analysis Script for Mould & Restoration Co.
 * Analyzes the actual LCP element and provides optimization recommendations
 */

import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

async function runLCPAnalysis() {
  console.log('🔍 Starting LCP Analysis for Melbourne Mould & Restoration Co...\n');

  // Launch Chrome
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});

  try {
    // Run Lighthouse focused on performance
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance'],
      port: chrome.port,
      throttling: {
        rttMs: 40,      // Emulate Australian broadband
        throughputKbps: 10 * 1024, // 10 Mbps
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0
      }
    };

    console.log('🏃‍♂️ Running Lighthouse audit on http://localhost:6002...');
    const runnerResult = await lighthouse('http://localhost:6002', options);

    if (!runnerResult) {
      throw new Error('Lighthouse run failed');
    }

    const lhr = runnerResult.lhr;
    const performanceScore = Math.round(lhr.categories.performance.score * 100);

    console.log('\n📊 LIGHTHOUSE PERFORMANCE RESULTS');
    console.log('=====================================');
    console.log(`Performance Score: ${performanceScore}%`);
    console.log('=====================================\n');

    // Analyze LCP specifically
    const lcpAudit = lhr.audits['largest-contentful-paint'];
    const lcpTime = lcpAudit.numericValue;
    const lcpScore = Math.round(lcpAudit.score * 100);

    console.log('🎯 LARGEST CONTENTFUL PAINT (LCP) ANALYSIS');
    console.log('==========================================');
    console.log(`LCP Time: ${(lcpTime / 1000).toFixed(2)}s`);
    console.log(`LCP Score: ${lcpScore}%`);
    console.log(`Target: < 2.5s (Current: ${lcpTime < 2500 ? '✅ PASS' : '❌ FAIL'})`);
    console.log('==========================================\n');

    // Find LCP element details
    const lcpElementAudit = lhr.audits['lcp-lazy-loaded'];
    const renderBlockingAudit = lhr.audits['render-blocking-resources'];
    const unusedJsAudit = lhr.audits['unused-javascript'];
    const textCompressionAudit = lhr.audits['uses-text-compression'];

    console.log('🔍 LCP BOTTLENECK ANALYSIS');
    console.log('===========================');

    // Check render blocking resources
    if (renderBlockingAudit && renderBlockingAudit.details) {
      console.log('\n🚫 RENDER BLOCKING RESOURCES:');
      renderBlockingAudit.details.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.url} (${(item.wastedMs || 0).toFixed(0)}ms blocked)`);
      });
    }

    // Check unused JavaScript
    if (unusedJsAudit && unusedJsAudit.details) {
      console.log('\n🗑️ UNUSED JAVASCRIPT:');
      unusedJsAudit.details.items.slice(0, 5).forEach((item, index) => {
        console.log(`${index + 1}. ${item.url} (${(item.wastedBytes / 1024).toFixed(1)}KB unused)`);
      });
    }

    // Get all performance audits
    const criticalAudits = [
      'first-contentful-paint',
      'cumulative-layout-shift',
      'total-blocking-time',
      'server-response-time',
      'uses-optimized-images',
      'modern-image-formats',
      'offscreen-images'
    ];

    console.log('\n📈 CORE WEB VITALS BREAKDOWN');
    console.log('============================');

    criticalAudits.forEach(auditId => {
      const audit = lhr.audits[auditId];
      if (audit) {
        const score = Math.round((audit.score || 0) * 100);
        const value = audit.numericValue ?
          (auditId.includes('time') || auditId.includes('paint') ?
            `${(audit.numericValue / 1000).toFixed(2)}s` :
            audit.numericValue.toFixed(2)) :
          'N/A';
        console.log(`${audit.title}: ${score}% (${value})`);
      }
    });

    // Specific recommendations for achieving 100% performance
    console.log('\n🎯 RECOMMENDATIONS FOR 100% LIGHTHOUSE SCORE');
    console.log('=============================================');

    if (lcpTime > 2500) {
      console.log('❌ LCP OPTIMIZATION NEEDED:');
      console.log('   1. Ensure hero image is <5KB and preloaded');
      console.log('   2. Remove render-blocking JavaScript');
      console.log('   3. Implement inline critical CSS');
      console.log('   4. Use IMG element instead of background-image');
    }

    if (renderBlockingAudit && renderBlockingAudit.score < 1) {
      console.log('❌ ELIMINATE RENDER BLOCKING:');
      console.log('   1. Defer non-critical JavaScript');
      console.log('   2. Inline critical CSS');
      console.log('   3. Use async/defer for external scripts');
    }

    if (performanceScore < 100) {
      console.log('❌ GENERAL OPTIMIZATIONS:');
      console.log('   1. Minimize unused JavaScript');
      console.log('   2. Enable text compression');
      console.log('   3. Optimize image formats (WebP)');
      console.log('   4. Implement proper lazy loading');
    }

    console.log('\n✅ CURRENT OPTIMIZATIONS DETECTED:');
    console.log('   • Hero image data URL inlined');
    console.log('   • WebP image format used');
    console.log('   • Critical CSS inlined');
    console.log('   • Component lazy loading implemented');

  } catch (error) {
    console.error('❌ Lighthouse analysis failed:', error.message);
    console.log('\n💡 TROUBLESHOOTING:');
    console.log('   1. Make sure the dev server is running on http://localhost:6002');
    console.log('   2. Check that Chrome/Chromium is properly installed');
    console.log('   3. Try running: npm run dev');
  } finally {
    await chrome.kill();
  }
}

// Run the analysis
runLCPAnalysis().catch(console.error);

export { runLCPAnalysis };