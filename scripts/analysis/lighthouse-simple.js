import fs from 'fs/promises';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

async function runLighthouseAudit(url, formFactor = 'desktop') {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless', '--no-sandbox']});

  const options = {
    logLevel: 'error',
    output: 'json',
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    formFactor: formFactor,
    screenEmulation: {
      mobile: formFactor === 'mobile',
      disabled: formFactor === 'desktop',
    },
  };

  if (formFactor === 'mobile') {
    options.throttling = {
      rttMs: 150,
      throughputKbps: 1638.4,
      cpuSlowdownMultiplier: 4,
    };
    options.emulatedUserAgent = 'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36';
  }

  try {
    const runnerResult = await lighthouse(url, options);
    await chrome.kill();

    const scores = {
      performance: Math.round(runnerResult.lhr.categories.performance.score * 100),
      accessibility: Math.round(runnerResult.lhr.categories.accessibility.score * 100),
      bestPractices: Math.round(runnerResult.lhr.categories['best-practices'].score * 100),
      seo: Math.round(runnerResult.lhr.categories.seo.score * 100),
    };

    // Get failing audits for sub-95 scores
    const issues = [];

    Object.entries(runnerResult.lhr.categories).forEach(([category, data]) => {
      const score = Math.round(data.score * 100);
      if (score < 95) {
        const failingAudits = data.auditRefs
          .filter(ref => {
            const audit = runnerResult.lhr.audits[ref.id];
            return audit && audit.score !== null && audit.score < 0.9;
          })
          .slice(0, 3)
          .map(ref => runnerResult.lhr.audits[ref.id].title);

        if (failingAudits.length > 0) {
          issues.push({
            category: category,
            score: score,
            audits: failingAudits
          });
        }
      }
    });

    return { scores, issues, success: true };
  } catch (error) {
    await chrome.kill();
    return { error: error.message, success: false };
  }
}

async function auditPage(url, pageName) {
  console.log(`\n📍 Auditing: ${pageName}`);
  console.log('=' .repeat(60));

  // Desktop audit
  console.log('💻 Desktop Audit...');
  const desktopResult = await runLighthouseAudit(url, 'desktop');

  if (desktopResult.success) {
    const { scores } = desktopResult;
    console.log(`   Performance: ${scores.performance}% ${scores.performance >= 95 ? '✅' : '❌'}`);
    console.log(`   Accessibility: ${scores.accessibility}% ${scores.accessibility >= 95 ? '✅' : '❌'}`);
    console.log(`   Best Practices: ${scores.bestPractices}% ${scores.bestPractices >= 95 ? '✅' : '❌'}`);
    console.log(`   SEO: ${scores.seo}% ${scores.seo >= 95 ? '✅' : '❌'}`);

    if (desktopResult.issues.length > 0) {
      console.log('\n   Issues to fix:');
      desktopResult.issues.forEach(issue => {
        console.log(`   - ${issue.category} (${issue.score}%):`);
        issue.audits.forEach(audit => {
          console.log(`     • ${audit}`);
        });
      });
    }
  } else {
    console.log(`   ❌ Error: ${desktopResult.error}`);
  }

  // Mobile audit
  console.log('\n📱 Mobile Audit...');
  const mobileResult = await runLighthouseAudit(url, 'mobile');

  if (mobileResult.success) {
    const { scores } = mobileResult;
    console.log(`   Performance: ${scores.performance}% ${scores.performance >= 95 ? '✅' : '❌'}`);
    console.log(`   Accessibility: ${scores.accessibility}% ${scores.accessibility >= 95 ? '✅' : '❌'}`);
    console.log(`   Best Practices: ${scores.bestPractices}% ${scores.bestPractices >= 95 ? '✅' : '❌'}`);
    console.log(`   SEO: ${scores.seo}% ${scores.seo >= 95 ? '✅' : '❌'}`);

    if (mobileResult.issues.length > 0) {
      console.log('\n   Issues to fix:');
      mobileResult.issues.forEach(issue => {
        console.log(`   - ${issue.category} (${issue.score}%):`);
        issue.audits.forEach(audit => {
          console.log(`     • ${audit}`);
        });
      });
    }
  } else {
    console.log(`   ❌ Error: ${mobileResult.error}`);
  }

  // Update markdown tracker
  return {
    desktop: desktopResult.success ? desktopResult.scores : null,
    mobile: mobileResult.success ? mobileResult.scores : null,
    desktopIssues: desktopResult.issues || [],
    mobileIssues: mobileResult.issues || []
  };
}

// Start with homepage
console.log('🚀 Mould & Restoration Co. - Lighthouse Audit System');
console.log('Target: 95%+ scores across all categories');

const baseUrl = 'http://localhost:8081';
const result = await auditPage(baseUrl + '/', 'Homepage (/)');

// Save results
await fs.writeFile(
  'lighthouse-homepage-results.json',
  JSON.stringify(result, null, 2)
);

console.log('\n✨ Homepage audit complete. Results saved to lighthouse-homepage-results.json');
console.log('\nNext step: Fix any issues found, then continue with other pages.');