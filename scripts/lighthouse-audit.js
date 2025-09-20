#!/usr/bin/env node

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const AUDIT_CONFIG = {
  // Core Web Vitals and Mobile Performance Focus
  settings: {
    formFactor: 'mobile',
    throttling: {
      cpuSlowdownMultiplier: 4,
      requestLatencyMs: 150,
      downloadThroughputKbps: 1638.4,
      uploadThroughputKbps: 675,
    },
    screenEmulation: {
      mobile: true,
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
    },
  },
  onlyCategories: ['performance', 'best-practices', 'accessibility'],
};

const PAGES_TO_AUDIT = [
  {
    name: 'Homepage',
    url: 'http://localhost:8084/',
    critical: true
  },
  {
    name: 'Admin Dashboard',
    url: 'http://localhost:8084/admin/dashboard',
    critical: true,
    requiresAuth: true
  },
  {
    name: 'Leads Kanban',
    url: 'http://localhost:8084/admin/leads/kanban',
    critical: true,
    requiresAuth: true
  },
  {
    name: 'Contact Page',
    url: 'http://localhost:8084/contact',
    critical: false
  },
  {
    name: 'Services Page',
    url: 'http://localhost:8084/services',
    critical: false
  }
];

async function runLighthouseAudit() {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
  });

  const results = [];

  console.log('🚀 Starting Lighthouse Performance Audit...\n');

  for (const page of PAGES_TO_AUDIT) {
    console.log(`📊 Auditing: ${page.name} (${page.url})`);

    try {
      const runnerResult = await lighthouse(page.url, {
        ...AUDIT_CONFIG,
        port: chrome.port,
      });

      const { lhr } = runnerResult;

      const result = {
        name: page.name,
        url: page.url,
        critical: page.critical,
        scores: {
          performance: Math.round(lhr.categories.performance.score * 100),
          accessibility: Math.round(lhr.categories.accessibility.score * 100),
          bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
        },
        metrics: {
          fcp: Math.round(lhr.audits['first-contentful-paint'].numericValue),
          lcp: Math.round(lhr.audits['largest-contentful-paint'].numericValue),
          cls: parseFloat(lhr.audits['cumulative-layout-shift'].numericValue.toFixed(3)),
          fid: lhr.audits['max-potential-fid'] ? Math.round(lhr.audits['max-potential-fid'].numericValue) : 'N/A',
          tti: Math.round(lhr.audits['interactive'].numericValue),
          tbt: Math.round(lhr.audits['total-blocking-time'].numericValue),
          speed: Math.round(lhr.audits['speed-index'].numericValue),
        },
        opportunities: lhr.audits['unused-javascript'] ? {
          unusedJS: Math.round(lhr.audits['unused-javascript'].details?.overallSavingsBytes / 1024) || 0,
          unusedCSS: Math.round(lhr.audits['unused-css-rules'].details?.overallSavingsBytes / 1024) || 0,
          offscreen: Math.round(lhr.audits['offscreen-images'].details?.overallSavingsBytes / 1024) || 0,
          unoptimized: Math.round(lhr.audits['uses-optimized-images'].details?.overallSavingsBytes / 1024) || 0,
        } : null,
        passed: lhr.categories.performance.score >= 0.9,
      };

      results.push(result);

      // Display immediate results
      console.log(`  ✅ Performance: ${result.scores.performance}/100`);
      console.log(`  🎯 Core Web Vitals:`);
      console.log(`     LCP: ${result.metrics.lcp}ms`);
      console.log(`     CLS: ${result.metrics.cls}`);
      console.log(`     FID: ${result.metrics.fid}ms`);
      console.log(`  📱 Mobile Metrics:`);
      console.log(`     FCP: ${result.metrics.fcp}ms`);
      console.log(`     TTI: ${result.metrics.tti}ms`);
      console.log(`     TBT: ${result.metrics.tbt}ms\n`);

    } catch (error) {
      console.error(`❌ Failed to audit ${page.name}:`, error.message);
      results.push({
        name: page.name,
        url: page.url,
        error: error.message,
        passed: false,
      });
    }
  }

  await chrome.kill();

  // Generate comprehensive report
  generateReport(results);

  // Check if critical pages pass requirements
  const criticalPagesFailed = results.filter(r => r.critical && !r.passed);

  if (criticalPagesFailed.length > 0) {
    console.log('🚨 CRITICAL PERFORMANCE ISSUES DETECTED:');
    criticalPagesFailed.forEach(page => {
      console.log(`   - ${page.name}: ${page.scores?.performance || 'FAILED'}/100`);
    });
    process.exit(1);
  }

  console.log('✅ All critical pages meet performance requirements!');
  return results;
}

function generateReport(results) {
  const timestamp = new Date().toISOString();

  console.log('\n📋 PERFORMANCE AUDIT SUMMARY');
  console.log('=====================================');

  const totalPages = results.length;
  const passedPages = results.filter(r => r.passed).length;
  const avgPerformance = results
    .filter(r => r.scores)
    .reduce((sum, r) => sum + r.scores.performance, 0) / results.filter(r => r.scores).length;

  console.log(`📊 Overall Results:`);
  console.log(`   Pages Audited: ${totalPages}`);
  console.log(`   Pages Passed: ${passedPages}/${totalPages}`);
  console.log(`   Average Performance Score: ${Math.round(avgPerformance)}/100`);
  console.log('');

  // Detailed results
  results.forEach(result => {
    if (result.error) {
      console.log(`❌ ${result.name}: ERROR - ${result.error}`);
      return;
    }

    const status = result.passed ? '✅' : '⚠️';
    console.log(`${status} ${result.name}:`);
    console.log(`   Performance: ${result.scores.performance}/100`);
    console.log(`   Core Web Vitals: LCP(${result.metrics.lcp}ms) CLS(${result.metrics.cls}) FID(${result.metrics.fid}ms)`);

    if (result.opportunities) {
      const totalSavings = result.opportunities.unusedJS + result.opportunities.unusedCSS +
                          result.opportunities.offscreen + result.opportunities.unoptimized;
      if (totalSavings > 100) {
        console.log(`   🎯 Optimization Potential: ${totalSavings}KB savings available`);
      }
    }
    console.log('');
  });

  // Generate recommendations
  console.log('🔧 OPTIMIZATION RECOMMENDATIONS:');
  console.log('=====================================');

  const lowPerformance = results.filter(r => r.scores && r.scores.performance < 90);
  if (lowPerformance.length > 0) {
    console.log('📉 Performance Issues:');
    lowPerformance.forEach(page => {
      console.log(`   - ${page.name}: ${page.scores.performance}/100`);
      if (page.metrics.lcp > 2500) console.log(`     • LCP too high (${page.metrics.lcp}ms) - target <2500ms`);
      if (page.metrics.cls > 0.1) console.log(`     • CLS too high (${page.metrics.cls}) - target <0.1`);
      if (page.metrics.fid !== 'N/A' && page.metrics.fid > 100) console.log(`     • FID too high (${page.metrics.fid}ms) - target <100ms`);
      if (page.metrics.tbt > 300) console.log(`     • TBT too high (${page.metrics.tbt}ms) - target <300ms`);
    });
  }

  const highSavings = results.filter(r => r.opportunities &&
    (r.opportunities.unusedJS + r.opportunities.unusedCSS) > 500);
  if (highSavings.length > 0) {
    console.log('\n📦 Bundle Optimization Opportunities:');
    highSavings.forEach(page => {
      const savings = page.opportunities;
      console.log(`   - ${page.name}:`);
      if (savings.unusedJS > 100) console.log(`     • Remove ${savings.unusedJS}KB unused JavaScript`);
      if (savings.unusedCSS > 50) console.log(`     • Remove ${savings.unusedCSS}KB unused CSS`);
      if (savings.offscreen > 200) console.log(`     • Lazy load ${savings.offscreen}KB offscreen images`);
    });
  }

  // Save detailed report
  const report = {
    timestamp,
    summary: {
      totalPages,
      passedPages,
      avgPerformance: Math.round(avgPerformance),
    },
    results,
    recommendations: generateRecommendations(results),
  };

  const reportPath = resolve('./lighthouse-report.json');
  writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

function generateRecommendations(results) {
  const recommendations = [];

  // Bundle size recommendations
  const avgUnusedJS = results
    .filter(r => r.opportunities?.unusedJS)
    .reduce((sum, r) => sum + r.opportunities.unusedJS, 0) / results.length;

  if (avgUnusedJS > 200) {
    recommendations.push({
      priority: 'high',
      category: 'bundle',
      issue: 'Large unused JavaScript bundles',
      solution: 'Implement code splitting and tree shaking',
      impact: `${Math.round(avgUnusedJS)}KB average savings`
    });
  }

  // Core Web Vitals recommendations
  const poorLCP = results.filter(r => r.metrics?.lcp > 2500);
  if (poorLCP.length > 0) {
    recommendations.push({
      priority: 'critical',
      category: 'lcp',
      issue: 'Poor Largest Contentful Paint',
      solution: 'Optimize images, implement preloading, reduce server response times',
      impact: 'Critical for user experience and SEO'
    });
  }

  const poorCLS = results.filter(r => r.metrics?.cls > 0.1);
  if (poorCLS.length > 0) {
    recommendations.push({
      priority: 'high',
      category: 'cls',
      issue: 'Layout shifts detected',
      solution: 'Reserve space for dynamic content, size images properly',
      impact: 'Prevents user frustration and improves usability'
    });
  }

  return recommendations;
}

// Run the audit
runLighthouseAudit().catch(console.error);