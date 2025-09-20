#!/usr/bin/env node

import { spawn } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';

// COMPREHENSIVE LIGHTHOUSE AUDIT SYSTEM
// Target: 100% completion with 95%+ scores across ALL categories
// Total Pages: 160 (6 core + 5 service + 149 location pages)

const baseUrl = 'http://localhost:3000';
const outputDir = './lighthouse-results';

// CORE PAGES (6 pages) - PRIORITY 1
const corePages = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/mould-inspection',
  '/areas'
];

// SERVICE PAGES (5 pages) - PRIORITY 2
const servicePages = [
  '/comprehensive-mould-removal',
  '/professional-mould-inspections',
  '/complete-material-removal',
  '/subfloor-mould-remediation',
  '/advanced-fogging-sanitisation'
];

// LOCATION PAGES (149 pages) - PRIORITY 3
const locationPages = [
  '/locations/abbotsford', '/locations/albert-park', '/locations/alphington', '/locations/altona',
  '/locations/armadale', '/locations/ascot-vale', '/locations/ashwood', '/locations/aspendale',
  '/locations/balaclava', '/locations/balwyn', '/locations/bentleigh', '/locations/berwick',
  '/locations/blackburn', '/locations/blackburn-south', '/locations/blackburn-north', '/locations/bonbeach',
  '/locations/box-hill', '/locations/braybrook', '/locations/brighton', '/locations/brighton-east',
  '/locations/broadmeadows', '/locations/brunswick', '/locations/bulleen', '/locations/bundoora',
  '/locations/burnley', '/locations/burwood', '/locations/camberwell', '/locations/canterbury',
  '/locations/carlton', '/locations/carnegie', '/locations/carrum', '/locations/caulfield',
  '/locations/caulfield-east', '/locations/caulfield-north', '/locations/caulfield-south',
  '/locations/chadstone', '/locations/chatham', '/locations/cheltenham', '/locations/clayton',
  '/locations/clifton-hill', '/locations/coburg', '/locations/collingwood', '/locations/cranbourne',
  '/locations/cremorne', '/locations/croydon', '/locations/dandenong', '/locations/deer-park',
  '/locations/docklands', '/locations/doncaster', '/locations/east-melbourne', '/locations/edithvale',
  '/locations/elsternwick', '/locations/elwood', '/locations/epping', '/locations/essendon',
  '/locations/fairfield', '/locations/fitzroy', '/locations/flemington', '/locations/footscray',
  '/locations/forest-hill', '/locations/frankston', '/locations/frankston-south', '/locations/glen-iris',
  '/locations/glen-waverley', '/locations/hampton', '/locations/hawthorn', '/locations/heidelberg',
  '/locations/highett', '/locations/hoppers-crossing', '/locations/hughesdale', '/locations/huntingdale',
  '/locations/ivanhoe', '/locations/kensington', '/locations/kew', '/locations/keysborough',
  '/locations/kooyong', '/locations/lalor', '/locations/laverton', '/locations/lilydale',
  '/locations/malvern', '/locations/malvern-east', '/locations/manor-lakes', '/locations/maribyrnong',
  '/locations/mckinnon', '/locations/melbourne-cbd', '/locations/mentone', '/locations/middle-park',
  '/locations/mill-park', '/locations/mitcham', '/locations/mont-albert', '/locations/moonee-ponds',
  '/locations/mordialloc', '/locations/mount-waverley', '/locations/mulgrave', '/locations/murrumbeena',
  '/locations/narre-warren', '/locations/newport', '/locations/noble-park', '/locations/north-melbourne',
  '/locations/northcote', '/locations/notting-hill', '/locations/nunawading', '/locations/oakleigh',
  '/locations/ormond', '/locations/parkdale', '/locations/parkmore', '/locations/parkville',
  '/locations/point-cook', '/locations/port-melbourne', '/locations/prahran', '/locations/preston',
  '/locations/princes-hill', '/locations/reservoir', '/locations/richmond', '/locations/ringwood',
  '/locations/ripponlea', '/locations/sandringham', '/locations/seddon', '/locations/south-melbourne',
  '/locations/south-wharf', '/locations/south-yarra', '/locations/southbank', '/locations/spotswood',
  '/locations/springvale', '/locations/st-kilda', '/locations/st-kilda-east', '/locations/sunshine',
  '/locations/surrey-hills', '/locations/tarneit', '/locations/templestowe', '/locations/thomastown',
  '/locations/thornbury', '/locations/toorak', '/locations/tottenham', '/locations/truganina',
  '/locations/vermont', '/locations/werribee', '/locations/west-melbourne', '/locations/wheelers-hill',
  '/locations/wheelers-hill-se', '/locations/williams-landing', '/locations/williamstown',
  '/locations/windsor', '/locations/wyndham-vale', '/locations/yarraville'
];

// AUDIT CONFIGURATION
const devices = ['desktop', 'mobile'];
const categories = ['performance', 'accessibility', 'best-practices', 'seo'];
const requiredScore = 95; // 95% minimum as specified

// COMPREHENSIVE AUDIT FUNCTION
async function auditPage(url, device, pageName) {
  return new Promise((resolve, reject) => {
    const fullUrl = `${baseUrl}${url}`;
    const outputFile = `${outputDir}/${pageName}-${device}.json`;

    const args = [
      'lighthouse',
      fullUrl,
      '--chrome-flags="--headless"',
      '--output=json',
      `--output-path=${outputFile}`,
      '--quiet',
      device === 'mobile' ? '--preset=perf' : '--form-factor=desktop',
      device === 'mobile' ? '--throttling.cpuSlowdownMultiplier=4' : '',
      '--only-categories=performance,accessibility,best-practices,seo'
    ].filter(Boolean);

    console.log(`🔍 Auditing ${pageName} (${device}): ${fullUrl}`);

    const lighthouse = spawn('npx', args, {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let stdout = '';
    let stderr = '';

    lighthouse.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    lighthouse.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    lighthouse.on('close', (code) => {
      if (code === 0) {
        try {
          const results = JSON.parse(readFileSync(outputFile, 'utf8'));
          const scores = {
            performance: Math.round((results.categories.performance?.score || 0) * 100),
            accessibility: Math.round((results.categories.accessibility?.score || 0) * 100),
            'best-practices': Math.round((results.categories['best-practices']?.score || 0) * 100),
            seo: Math.round((results.categories.seo?.score || 0) * 100)
          };

          const passed = Object.values(scores).every(score => score >= requiredScore);
          const avgScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 4);

          console.log(`✅ ${pageName} (${device}): P:${scores.performance} A:${scores.accessibility} BP:${scores['best-practices']} SEO:${scores.seo} | AVG: ${avgScore}% | ${passed ? '✅ PASS' : '❌ FAIL'}`);

          resolve({
            page: pageName,
            device,
            url: fullUrl,
            scores,
            avgScore,
            passed,
            issues: passed ? [] : Object.entries(scores).filter(([_, score]) => score < requiredScore).map(([cat, score]) => `${cat}: ${score}%`)
          });
        } catch (error) {
          console.error(`❌ Error parsing results for ${pageName} (${device}):`, error.message);
          reject(error);
        }
      } else {
        console.error(`❌ Lighthouse failed for ${pageName} (${device}). Code: ${code}`);
        console.error('STDERR:', stderr);
        reject(new Error(`Lighthouse audit failed with code ${code}`));
      }
    });
  });
}

// BATCH AUDIT FUNCTION
async function auditBatch(pages, batchName, batchNumber, totalBatches) {
  console.log(`\n🚀 Starting ${batchName} Audit (Batch ${batchNumber}/${totalBatches})`);
  console.log(`📊 Target: 95%+ in ALL categories | Pages: ${pages.length}`);
  console.log('=' .repeat(80));

  const results = [];
  let passCount = 0;
  let failCount = 0;

  for (const page of pages) {
    const pageName = page === '/' ? 'home' : page.replace(/^\//, '').replace(/\//g, '-');

    for (const device of devices) {
      try {
        const result = await auditPage(page, device, pageName);
        results.push(result);

        if (result.passed) {
          passCount++;
        } else {
          failCount++;
          console.log(`   🚨 ISSUES: ${result.issues.join(', ')}`);
        }

        // Brief pause between audits
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error) {
        console.error(`❌ Failed to audit ${pageName} (${device}):`, error.message);
        failCount++;
        results.push({
          page: pageName,
          device,
          url: `${baseUrl}${page}`,
          scores: { performance: 0, accessibility: 0, 'best-practices': 0, seo: 0 },
          avgScore: 0,
          passed: false,
          issues: ['Audit failed']
        });
      }
    }
  }

  // BATCH SUMMARY
  console.log('\n' + '=' .repeat(80));
  console.log(`📈 ${batchName} BATCH COMPLETE`);
  console.log(`✅ Passed: ${passCount}/${passCount + failCount} (${Math.round(passCount / (passCount + failCount) * 100)}%)`);
  console.log(`❌ Failed: ${failCount}/${passCount + failCount}`);

  if (failCount > 0) {
    console.log('\n🚨 FAILED AUDITS:');
    results.filter(r => !r.passed).forEach(r => {
      console.log(`   ${r.page} (${r.device}): ${r.issues.join(', ')}`);
    });
  }

  return results;
}

// MAIN AUDIT EXECUTION
async function runComprehensiveAudit() {
  console.log('🎯 LIGHTHOUSE COMPREHENSIVE AUDIT - 100% PERFORMANCE TARGET');
  console.log('📋 Total Pages: 160 (6 core + 5 service + 149 location)');
  console.log('🎯 Target: 95%+ in ALL 4 categories (Performance, Accessibility, Best Practices, SEO)');
  console.log('📱 Testing: Desktop AND Mobile viewports');
  console.log('=' .repeat(80));

  // Create output directory
  try {
    await import('fs').then(fs => fs.mkdirSync(outputDir, { recursive: true }));
  } catch (error) {
    console.log('Output directory already exists or created');
  }

  const allResults = [];

  try {
    // PHASE 1: CORE PAGES (Highest Priority)
    const coreResults = await auditBatch(corePages, 'CORE PAGES', 1, 3);
    allResults.push(...coreResults);

    // PHASE 2: SERVICE PAGES (Medium Priority)
    const serviceResults = await auditBatch(servicePages, 'SERVICE PAGES', 2, 3);
    allResults.push(...serviceResults);

    // PHASE 3: LOCATION PAGES (Large Batch)
    const locationResults = await auditBatch(locationPages, 'LOCATION PAGES', 3, 3);
    allResults.push(...locationResults);

  } catch (error) {
    console.error('❌ Audit process failed:', error);
  }

  // FINAL COMPREHENSIVE SUMMARY
  console.log('\n' + '=' .repeat(80));
  console.log('🎯 COMPREHENSIVE AUDIT COMPLETE - FINAL RESULTS');
  console.log('=' .repeat(80));

  const totalAudits = allResults.length;
  const totalPassed = allResults.filter(r => r.passed).length;
  const totalFailed = totalAudits - totalPassed;
  const passRate = Math.round((totalPassed / totalAudits) * 100);

  console.log(`📊 TOTAL AUDITS: ${totalAudits}/320 (160 pages × 2 devices)`);
  console.log(`✅ PASSED (95%+): ${totalPassed} (${passRate}%)`);
  console.log(`❌ FAILED (<95%): ${totalFailed}`);

  // Category breakdown
  const categoryStats = {
    performance: { total: 0, passed: 0 },
    accessibility: { total: 0, passed: 0 },
    'best-practices': { total: 0, passed: 0 },
    seo: { total: 0, passed: 0 }
  };

  allResults.forEach(result => {
    Object.entries(result.scores).forEach(([category, score]) => {
      categoryStats[category].total++;
      if (score >= requiredScore) categoryStats[category].passed++;
    });
  });

  console.log('\n📈 CATEGORY BREAKDOWN:');
  Object.entries(categoryStats).forEach(([category, stats]) => {
    const rate = Math.round((stats.passed / stats.total) * 100);
    console.log(`   ${category.toUpperCase()}: ${stats.passed}/${stats.total} (${rate}%)`);
  });

  // CRITICAL FAILURES
  if (totalFailed > 0) {
    console.log('\n🚨 CRITICAL FAILURES - REQUIRE IMMEDIATE ATTENTION:');
    const failures = allResults.filter(r => !r.passed);
    failures.forEach(failure => {
      console.log(`   ${failure.page} (${failure.device}): ${failure.issues.join(', ')}`);
    });
  }

  // SUCCESS VERIFICATION
  if (passRate >= 100) {
    console.log('\n🎉 SUCCESS! 100% OF PAGES ACHIEVE 95%+ SCORES');
    console.log('✅ COMPREHENSIVE AUDIT TARGET ACHIEVED');
  } else {
    console.log(`\n⚠️  TARGET NOT MET: ${100 - passRate}% of audits below 95% threshold`);
    console.log('🔧 OPTIMIZATION REQUIRED FOR FAILED PAGES');
  }

  // Save comprehensive results
  const finalReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalAudits,
      totalPassed,
      totalFailed,
      passRate,
      targetMet: passRate >= 100
    },
    categoryStats,
    allResults
  };

  writeFileSync('./lighthouse-comprehensive-results.json', JSON.stringify(finalReport, null, 2));
  console.log('\n💾 Complete results saved to: lighthouse-comprehensive-results.json');

  return finalReport;
}

// Execute the comprehensive audit
runComprehensiveAudit().catch(console.error);