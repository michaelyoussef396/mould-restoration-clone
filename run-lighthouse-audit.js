import fs from 'fs/promises';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

// Pages to audit
const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Services', path: '/services' },
  { name: 'Areas', path: '/areas' },
];

async function runLighthouse(url, device = 'desktop') {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});

  const options = {
    logLevel: 'error',
    output: 'json',
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  };

  // Configure for mobile or desktop
  if (device === 'mobile') {
    options.formFactor = 'mobile';
    options.throttling = {
      rttMs: 150,
      throughputKbps: 1638.4,
      cpuSlowdownMultiplier: 4,
    };
  } else {
    options.formFactor = 'desktop';
    options.throttling = {
      rttMs: 0,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
    };
  }

  const runnerResult = await lighthouse(url, options);

  await chrome.kill();

  // Extract scores
  const scores = {
    performance: Math.round(runnerResult.lhr.categories.performance.score * 100),
    accessibility: Math.round(runnerResult.lhr.categories.accessibility.score * 100),
    bestPractices: Math.round(runnerResult.lhr.categories['best-practices'].score * 100),
    seo: Math.round(runnerResult.lhr.categories.seo.score * 100),
  };

  // Extract metrics
  const metrics = {
    FCP: runnerResult.lhr.audits['first-contentful-paint'].displayValue,
    LCP: runnerResult.lhr.audits['largest-contentful-paint'].displayValue,
    TBT: runnerResult.lhr.audits['total-blocking-time'].displayValue,
    CLS: runnerResult.lhr.audits['cumulative-layout-shift'].displayValue,
    SI: runnerResult.lhr.audits['speed-index'].displayValue,
  };

  // Extract issues
  const issues = [];

  // Performance issues
  if (scores.performance < 95) {
    const perfAudits = runnerResult.lhr.audits;
    if (perfAudits['largest-contentful-paint'].score < 0.9) {
      issues.push(`LCP issue: ${perfAudits['largest-contentful-paint'].displayValue}`);
    }
    if (perfAudits['total-blocking-time'].score < 0.9) {
      issues.push(`TBT issue: ${perfAudits['total-blocking-time'].displayValue}`);
    }
  }

  // Accessibility issues
  if (scores.accessibility < 95) {
    const a11yAudits = runnerResult.lhr.categories.accessibility.auditRefs
      .filter(ref => {
        const audit = runnerResult.lhr.audits[ref.id];
        return audit && audit.score !== null && audit.score < 1;
      })
      .map(ref => runnerResult.lhr.audits[ref.id].title);

    if (a11yAudits.length > 0) {
      issues.push(`Accessibility: ${a11yAudits.slice(0, 3).join(', ')}`);
    }
  }

  // Best Practices issues
  if (scores.bestPractices < 95) {
    const bpAudits = runnerResult.lhr.categories['best-practices'].auditRefs
      .filter(ref => {
        const audit = runnerResult.lhr.audits[ref.id];
        return audit && audit.score !== null && audit.score < 1;
      })
      .map(ref => runnerResult.lhr.audits[ref.id].title);

    if (bpAudits.length > 0) {
      issues.push(`Best Practices: ${bpAudits.slice(0, 3).join(', ')}`);
    }
  }

  // SEO issues
  if (scores.seo < 95) {
    const seoAudits = runnerResult.lhr.categories.seo.auditRefs
      .filter(ref => {
        const audit = runnerResult.lhr.audits[ref.id];
        return audit && audit.score !== null && audit.score < 1;
      })
      .map(ref => runnerResult.lhr.audits[ref.id].title);

    if (seoAudits.length > 0) {
      issues.push(`SEO: ${seoAudits.slice(0, 3).join(', ')}`);
    }
  }

  return { scores, metrics, issues };
}

async function auditAllPages() {
  const results = {
    timestamp: new Date().toISOString(),
    pages: {}
  };

  console.log('🚀 Starting Lighthouse Audit for Mould & Restoration Co.\n');
  console.log('Target: 95%+ scores across all categories\n');
  console.log('='.repeat(80));

  for (const page of pages) {
    const url = `http://localhost:8081${page.path}`;
    console.log(`\n📍 Auditing: ${page.name} (${page.path})`);
    console.log('-'.repeat(40));

    try {
      // Desktop audit
      console.log('  💻 Desktop audit...');
      const desktopResults = await runLighthouse(url, 'desktop');

      // Mobile audit
      console.log('  📱 Mobile audit...');
      const mobileResults = await runLighthouse(url, 'mobile');

      // Display results
      console.log('\n  Results:');
      console.log('  --------');
      console.log(`  Desktop: P:${desktopResults.scores.performance} A:${desktopResults.scores.accessibility} BP:${desktopResults.scores.bestPractices} SEO:${desktopResults.scores.seo}`);
      console.log(`  Mobile:  P:${mobileResults.scores.performance} A:${mobileResults.scores.accessibility} BP:${mobileResults.scores.bestPractices} SEO:${mobileResults.scores.seo}`);

      // Check if passes
      const desktopPasses = Object.values(desktopResults.scores).every(score => score >= 95);
      const mobilePasses = Object.values(mobileResults.scores).every(score => score >= 95);

      if (desktopPasses && mobilePasses) {
        console.log('  ✅ PASSES all requirements!');
      } else {
        console.log('  ❌ FAILS requirements');

        if (!desktopPasses && desktopResults.issues.length > 0) {
          console.log('\n  Desktop Issues:');
          desktopResults.issues.forEach(issue => {
            console.log(`    - ${issue}`);
          });
        }

        if (!mobilePasses && mobileResults.issues.length > 0) {
          console.log('\n  Mobile Issues:');
          mobileResults.issues.forEach(issue => {
            console.log(`    - ${issue}`);
          });
        }
      }

      // Store results
      results.pages[page.name] = {
        path: page.path,
        desktop: desktopResults,
        mobile: mobileResults,
        passes: desktopPasses && mobilePasses
      };

    } catch (error) {
      console.error(`  ❌ Error auditing ${page.name}:`, error.message);
      results.pages[page.name] = {
        path: page.path,
        error: error.message
      };
    }
  }

  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('\n📊 AUDIT SUMMARY\n');

  const totalPages = Object.keys(results.pages).length;
  const passingPages = Object.values(results.pages).filter(p => p.passes).length;

  console.log(`Total Pages Audited: ${totalPages}`);
  console.log(`Pages Meeting Requirements: ${passingPages}/${totalPages}`);
  console.log(`Success Rate: ${Math.round(passingPages / totalPages * 100)}%`);

  if (passingPages < totalPages) {
    console.log('\n⚠️  Action Required: Fix failing pages before proceeding');
  } else {
    console.log('\n✅ All pages meet requirements! Ready to proceed with location pages.');
  }

  // Save results to file
  await fs.writeFile(
    'lighthouse-audit-results.json',
    JSON.stringify(results, null, 2)
  );

  console.log('\nDetailed results saved to: lighthouse-audit-results.json');

  return results;
}

// Run the audit
auditAllPages().catch(console.error);