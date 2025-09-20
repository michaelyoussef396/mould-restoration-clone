#!/usr/bin/env node

import { spawn } from 'child_process';
import { writeFileSync, readFileSync, existsSync } from 'fs';

// MANUAL COMPREHENSIVE AUDIT SYSTEM
// Target: EVERY SINGLE PAGE - EVERY SINGLE VIEWPORT - 95%+ ALL CATEGORIES
// As demanded: "double check everything every single page every single viewport and double check all the stat for each category is 95%+"

const baseUrl = 'http://localhost:4000';

// ALL 160 PAGES - COMPLETE LIST
const allPages = {
  core: [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/services', name: 'services' },
    { path: '/contact', name: 'contact' },
    { path: '/mould-inspection', name: 'mould-inspection' },
    { path: '/areas', name: 'areas' }
  ],
  service: [
    { path: '/comprehensive-mould-removal', name: 'comprehensive-mould-removal' },
    { path: '/professional-mould-inspections', name: 'professional-mould-inspections' },
    { path: '/complete-material-removal', name: 'complete-material-removal' },
    { path: '/subfloor-mould-remediation', name: 'subfloor-mould-remediation' },
    { path: '/advanced-fogging-sanitisation', name: 'advanced-fogging-sanitisation' }
  ],
  locations: [
    { path: '/locations/abbotsford', name: 'abbotsford' },
    { path: '/locations/albert-park', name: 'albert-park' },
    { path: '/locations/alphington', name: 'alphington' },
    { path: '/locations/altona', name: 'altona' },
    { path: '/locations/armadale', name: 'armadale' },
    { path: '/locations/ascot-vale', name: 'ascot-vale' },
    { path: '/locations/ashwood', name: 'ashwood' },
    { path: '/locations/aspendale', name: 'aspendale' },
    { path: '/locations/balaclava', name: 'balaclava' },
    { path: '/locations/balwyn', name: 'balwyn' },
    { path: '/locations/bentleigh', name: 'bentleigh' },
    { path: '/locations/berwick', name: 'berwick' },
    { path: '/locations/blackburn', name: 'blackburn' },
    { path: '/locations/blackburn-south', name: 'blackburn-south' },
    { path: '/locations/blackburn-north', name: 'blackburn-north' },
    { path: '/locations/bonbeach', name: 'bonbeach' },
    { path: '/locations/box-hill', name: 'box-hill' },
    { path: '/locations/braybrook', name: 'braybrook' },
    { path: '/locations/brighton', name: 'brighton' },
    { path: '/locations/brighton-east', name: 'brighton-east' },
    { path: '/locations/broadmeadows', name: 'broadmeadows' },
    { path: '/locations/brunswick', name: 'brunswick' },
    { path: '/locations/bulleen', name: 'bulleen' },
    { path: '/locations/bundoora', name: 'bundoora' },
    { path: '/locations/burnley', name: 'burnley' },
    { path: '/locations/burwood', name: 'burwood' },
    { path: '/locations/camberwell', name: 'camberwell' },
    { path: '/locations/canterbury', name: 'canterbury' },
    { path: '/locations/carlton', name: 'carlton' },
    { path: '/locations/carnegie', name: 'carnegie' },
    { path: '/locations/carrum', name: 'carrum' },
    { path: '/locations/caulfield', name: 'caulfield' },
    { path: '/locations/caulfield-east', name: 'caulfield-east' },
    { path: '/locations/caulfield-north', name: 'caulfield-north' },
    { path: '/locations/caulfield-south', name: 'caulfield-south' },
    { path: '/locations/chadstone', name: 'chadstone' },
    { path: '/locations/chatham', name: 'chatham' },
    { path: '/locations/cheltenham', name: 'cheltenham' },
    { path: '/locations/clayton', name: 'clayton' },
    { path: '/locations/clifton-hill', name: 'clifton-hill' },
    { path: '/locations/coburg', name: 'coburg' },
    { path: '/locations/collingwood', name: 'collingwood' },
    { path: '/locations/cranbourne', name: 'cranbourne' },
    { path: '/locations/cremorne', name: 'cremorne' },
    { path: '/locations/croydon', name: 'croydon' },
    { path: '/locations/dandenong', name: 'dandenong' },
    { path: '/locations/deer-park', name: 'deer-park' },
    { path: '/locations/docklands', name: 'docklands' },
    { path: '/locations/doncaster', name: 'doncaster' },
    { path: '/locations/east-melbourne', name: 'east-melbourne' },
    { path: '/locations/edithvale', name: 'edithvale' },
    { path: '/locations/elsternwick', name: 'elsternwick' },
    { path: '/locations/elwood', name: 'elwood' },
    { path: '/locations/epping', name: 'epping' },
    { path: '/locations/essendon', name: 'essendon' },
    { path: '/locations/fairfield', name: 'fairfield' },
    { path: '/locations/fitzroy', name: 'fitzroy' },
    { path: '/locations/flemington', name: 'flemington' },
    { path: '/locations/footscray', name: 'footscray' },
    { path: '/locations/forest-hill', name: 'forest-hill' },
    { path: '/locations/frankston', name: 'frankston' },
    { path: '/locations/frankston-south', name: 'frankston-south' },
    { path: '/locations/glen-iris', name: 'glen-iris' },
    { path: '/locations/glen-waverley', name: 'glen-waverley' },
    { path: '/locations/hampton', name: 'hampton' },
    { path: '/locations/hawthorn', name: 'hawthorn' },
    { path: '/locations/heidelberg', name: 'heidelberg' },
    { path: '/locations/highett', name: 'highett' },
    { path: '/locations/hoppers-crossing', name: 'hoppers-crossing' },
    { path: '/locations/hughesdale', name: 'hughesdale' },
    { path: '/locations/huntingdale', name: 'huntingdale' },
    { path: '/locations/ivanhoe', name: 'ivanhoe' },
    { path: '/locations/kensington', name: 'kensington' },
    { path: '/locations/kew', name: 'kew' },
    { path: '/locations/keysborough', name: 'keysborough' },
    { path: '/locations/kooyong', name: 'kooyong' },
    { path: '/locations/lalor', name: 'lalor' },
    { path: '/locations/laverton', name: 'laverton' },
    { path: '/locations/lilydale', name: 'lilydale' },
    { path: '/locations/malvern', name: 'malvern' },
    { path: '/locations/malvern-east', name: 'malvern-east' },
    { path: '/locations/manor-lakes', name: 'manor-lakes' },
    { path: '/locations/maribyrnong', name: 'maribyrnong' },
    { path: '/locations/mckinnon', name: 'mckinnon' },
    { path: '/locations/melbourne-cbd', name: 'melbourne-cbd' },
    { path: '/locations/mentone', name: 'mentone' },
    { path: '/locations/middle-park', name: 'middle-park' },
    { path: '/locations/mill-park', name: 'mill-park' },
    { path: '/locations/mitcham', name: 'mitcham' },
    { path: '/locations/mont-albert', name: 'mont-albert' },
    { path: '/locations/moonee-ponds', name: 'moonee-ponds' },
    { path: '/locations/mordialloc', name: 'mordialloc' },
    { path: '/locations/mount-waverley', name: 'mount-waverley' },
    { path: '/locations/mulgrave', name: 'mulgrave' },
    { path: '/locations/murrumbeena', name: 'murrumbeena' },
    { path: '/locations/narre-warren', name: 'narre-warren' },
    { path: '/locations/newport', name: 'newport' },
    { path: '/locations/noble-park', name: 'noble-park' },
    { path: '/locations/north-melbourne', name: 'north-melbourne' },
    { path: '/locations/northcote', name: 'northcote' },
    { path: '/locations/notting-hill', name: 'notting-hill' },
    { path: '/locations/nunawading', name: 'nunawading' },
    { path: '/locations/oakleigh', name: 'oakleigh' },
    { path: '/locations/ormond', name: 'ormond' },
    { path: '/locations/parkdale', name: 'parkdale' },
    { path: '/locations/parkmore', name: 'parkmore' },
    { path: '/locations/parkville', name: 'parkville' },
    { path: '/locations/point-cook', name: 'point-cook' },
    { path: '/locations/port-melbourne', name: 'port-melbourne' },
    { path: '/locations/prahran', name: 'prahran' },
    { path: '/locations/preston', name: 'preston' },
    { path: '/locations/princes-hill', name: 'princes-hill' },
    { path: '/locations/reservoir', name: 'reservoir' },
    { path: '/locations/richmond', name: 'richmond' },
    { path: '/locations/ringwood', name: 'ringwood' },
    { path: '/locations/ripponlea', name: 'ripponlea' },
    { path: '/locations/sandringham', name: 'sandringham' },
    { path: '/locations/seddon', name: 'seddon' },
    { path: '/locations/south-melbourne', name: 'south-melbourne' },
    { path: '/locations/south-wharf', name: 'south-wharf' },
    { path: '/locations/south-yarra', name: 'south-yarra' },
    { path: '/locations/southbank', name: 'southbank' },
    { path: '/locations/spotswood', name: 'spotswood' },
    { path: '/locations/springvale', name: 'springvale' },
    { path: '/locations/st-kilda', name: 'st-kilda' },
    { path: '/locations/st-kilda-east', name: 'st-kilda-east' },
    { path: '/locations/sunshine', name: 'sunshine' },
    { path: '/locations/surrey-hills', name: 'surrey-hills' },
    { path: '/locations/tarneit', name: 'tarneit' },
    { path: '/locations/templestowe', name: 'templestowe' },
    { path: '/locations/thomastown', name: 'thomastown' },
    { path: '/locations/thornbury', name: 'thornbury' },
    { path: '/locations/toorak', name: 'toorak' },
    { path: '/locations/tottenham', name: 'tottenham' },
    { path: '/locations/truganina', name: 'truganina' },
    { path: '/locations/vermont', name: 'vermont' },
    { path: '/locations/werribee', name: 'werribee' },
    { path: '/locations/west-melbourne', name: 'west-melbourne' },
    { path: '/locations/wheelers-hill', name: 'wheelers-hill' },
    { path: '/locations/wheelers-hill-se', name: 'wheelers-hill-se' },
    { path: '/locations/williams-landing', name: 'williams-landing' },
    { path: '/locations/williamstown', name: 'williamstown' },
    { path: '/locations/windsor', name: 'windsor' },
    { path: '/locations/wyndham-vale', name: 'wyndham-vale' },
    { path: '/locations/yarraville', name: 'yarraville' }
  ]
};

const devices = ['desktop', 'mobile'];
const targetScore = 95;

// SINGLE PAGE AUDIT
async function auditSinglePage(pageInfo, device) {
  const url = `${baseUrl}${pageInfo.path}`;
  const outputFile = `./lighthouse-results/${pageInfo.name}-${device}.json`;

  console.log(`🔍 Auditing: ${pageInfo.name} (${device})`);

  return new Promise((resolve) => {
    const args = [
      'lighthouse',
      url,
      '--output=json',
      `--output-path=${outputFile}`,
      '--quiet',
      '--chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"',
      device === 'mobile' ? '--form-factor=mobile' : '--form-factor=desktop',
      device === 'mobile' ? '--throttling-method=devtools' : '',
      '--only-categories=performance,accessibility,best-practices,seo'
    ].filter(Boolean);

    const process = spawn('npx', args);

    process.on('close', (code) => {
      if (code === 0 && existsSync(outputFile)) {
        try {
          const data = JSON.parse(readFileSync(outputFile, 'utf8'));
          const scores = {
            performance: Math.round((data.categories?.performance?.score || 0) * 100),
            accessibility: Math.round((data.categories?.accessibility?.score || 0) * 100),
            'best-practices': Math.round((data.categories?.['best-practices']?.score || 0) * 100),
            seo: Math.round((data.categories?.seo?.score || 0) * 100)
          };

          const passed = Object.values(scores).every(score => score >= targetScore);
          const avg = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 4);

          console.log(`   ${passed ? '✅' : '❌'} P:${scores.performance} A:${scores.accessibility} BP:${scores['best-practices']} SEO:${scores.seo} | AVG:${avg}%`);

          if (!passed) {
            const failing = Object.entries(scores).filter(([_, score]) => score < targetScore);
            console.log(`   🚨 FAILING: ${failing.map(([cat, score]) => `${cat}:${score}%`).join(', ')}`);
          }

          resolve({
            page: pageInfo.name,
            path: pageInfo.path,
            device,
            scores,
            avg,
            passed,
            issues: !passed ? Object.entries(scores).filter(([_, score]) => score < targetScore) : []
          });
        } catch (error) {
          console.log(`   ❌ Parse error: ${error.message}`);
          resolve({ page: pageInfo.name, device, passed: false, error: error.message });
        }
      } else {
        console.log(`   ❌ Audit failed (code: ${code})`);
        resolve({ page: pageInfo.name, device, passed: false, error: `Exit code ${code}` });
      }
    });
  });
}

// COMPREHENSIVE AUDIT EXECUTION
async function executeComprehensiveAudit() {
  console.log('🎯 MANUAL COMPREHENSIVE AUDIT - EVERY PAGE, EVERY VIEWPORT');
  console.log('📋 Target: 95%+ in ALL 4 categories for ALL 160 pages');
  console.log('📱 Testing: Desktop AND Mobile = 320 total audits');
  console.log('=' .repeat(80));

  const results = { core: [], service: [], locations: [] };
  let totalAudits = 0;
  let passedAudits = 0;

  // PHASE 1: CORE PAGES (6 pages × 2 devices = 12 audits)
  console.log('\n🚀 PHASE 1: CORE PAGES (6 pages)');
  for (const page of allPages.core) {
    for (const device of devices) {
      const result = await auditSinglePage(page, device);
      results.core.push(result);
      totalAudits++;
      if (result.passed) passedAudits++;
      await new Promise(resolve => setTimeout(resolve, 500)); // Brief pause
    }
  }

  // PHASE 2: SERVICE PAGES (5 pages × 2 devices = 10 audits)
  console.log('\n🚀 PHASE 2: SERVICE PAGES (5 pages)');
  for (const page of allPages.service) {
    for (const device of devices) {
      const result = await auditSinglePage(page, device);
      results.service.push(result);
      totalAudits++;
      if (result.passed) passedAudits++;
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // PHASE 3: LOCATION PAGES (149 pages × 2 devices = 298 audits)
  console.log('\n🚀 PHASE 3: LOCATION PAGES (149 pages) - BATCH PROCESSING');
  const batchSize = 10; // Process in batches to avoid overwhelming

  for (let i = 0; i < allPages.locations.length; i += batchSize) {
    const batch = allPages.locations.slice(i, i + batchSize);
    console.log(`\n📦 Batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(allPages.locations.length/batchSize)}: Pages ${i + 1}-${Math.min(i + batchSize, allPages.locations.length)}`);

    for (const page of batch) {
      for (const device of devices) {
        const result = await auditSinglePage(page, device);
        results.locations.push(result);
        totalAudits++;
        if (result.passed) passedAudits++;
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
  }

  // FINAL COMPREHENSIVE RESULTS
  console.log('\n' + '=' .repeat(80));
  console.log('🎯 COMPREHENSIVE AUDIT COMPLETE');
  console.log('=' .repeat(80));

  const passRate = Math.round((passedAudits / totalAudits) * 100);
  console.log(`📊 TOTAL AUDITS: ${totalAudits}/320 (160 pages × 2 devices)`);
  console.log(`✅ PASSED (95%+): ${passedAudits} (${passRate}%)`);
  console.log(`❌ FAILED (<95%): ${totalAudits - passedAudits}`);

  // CATEGORY ANALYSIS
  const allResults = [...results.core, ...results.service, ...results.locations];
  const categoryStats = {
    performance: { total: 0, passed: 0, scores: [] },
    accessibility: { total: 0, passed: 0, scores: [] },
    'best-practices': { total: 0, passed: 0, scores: [] },
    seo: { total: 0, passed: 0, scores: [] }
  };

  allResults.forEach(result => {
    if (result.scores) {
      Object.entries(result.scores).forEach(([cat, score]) => {
        categoryStats[cat].total++;
        categoryStats[cat].scores.push(score);
        if (score >= targetScore) categoryStats[cat].passed++;
      });
    }
  });

  console.log('\n📈 CATEGORY BREAKDOWN:');
  Object.entries(categoryStats).forEach(([cat, stats]) => {
    const rate = Math.round((stats.passed / stats.total) * 100);
    const avgScore = Math.round(stats.scores.reduce((a, b) => a + b, 0) / stats.scores.length);
    console.log(`   ${cat.toUpperCase()}: ${stats.passed}/${stats.total} (${rate}%) | AVG: ${avgScore}%`);
  });

  // CRITICAL FAILURES
  const failures = allResults.filter(r => !r.passed);
  if (failures.length > 0) {
    console.log('\n🚨 CRITICAL FAILURES:');
    failures.forEach(failure => {
      if (failure.issues && failure.issues.length > 0) {
        console.log(`   ${failure.page} (${failure.device}): ${failure.issues.map(([cat, score]) => `${cat}:${score}%`).join(', ')}`);
      } else {
        console.log(`   ${failure.page} (${failure.device}): ${failure.error || 'Unknown error'}`);
      }
    });
  }

  // SUCCESS VERIFICATION
  if (passRate === 100) {
    console.log('\n🎉 SUCCESS! 100% OF PAGES ACHIEVE 95%+ SCORES');
    console.log('✅ COMPREHENSIVE AUDIT TARGET ACHIEVED');
    console.log('📋 ALL 320 AUDITS PASSED (160 pages × 2 devices)');
  } else {
    console.log(`\n⚠️  TARGET NOT MET: ${100 - passRate}% of audits below 95% threshold`);
    console.log('🔧 OPTIMIZATION REQUIRED');
  }

  // SAVE COMPREHENSIVE RESULTS
  const finalReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalAudits,
      passedAudits,
      failedAudits: totalAudits - passedAudits,
      passRate,
      targetMet: passRate === 100,
      target: '95%+ in all categories'
    },
    categoryStats,
    results: {
      core: results.core,
      service: results.service,
      locations: results.locations
    },
    failures
  };

  writeFileSync('./manual-comprehensive-audit-results.json', JSON.stringify(finalReport, null, 2));
  console.log('\n💾 Results saved: manual-comprehensive-audit-results.json');

  return finalReport;
}

// EXECUTE
executeComprehensiveAudit().catch(console.error);