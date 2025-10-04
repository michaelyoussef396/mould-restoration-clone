const { chromium } = require('playwright');

async function verifyMimeTypes() {
  console.log('🚀 Starting fresh browser session MIME type verification...\n');

  // Start browser with fresh context (equivalent to clearing cache)
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    // Fresh context with no cache
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  // Collect console messages and network requests
  const consoleMessages = [];
  const networkRequests = [];
  const errors = [];

  page.on('console', msg => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text(),
      timestamp: new Date().toISOString()
    });
    if (msg.type() === 'error') {
      console.log('❌ Console Error:', msg.text());
      errors.push(msg.text());
    }
  });

  page.on('response', response => {
    networkRequests.push({
      url: response.url(),
      status: response.status(),
      contentType: response.headers()['content-type'] || 'unknown',
      timestamp: new Date().toISOString()
    });
  });

  page.on('pageerror', error => {
    console.log('❌ Page Error:', error.message);
    errors.push(error.message);
  });

  try {
    console.log('📝 Test 1: Loading home page...');
    await page.goto('http://localhost:8085/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000); // Wait for any async loading

    // Take screenshot of home page
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/screenshots/home-page-fresh.png',
      fullPage: true
    });
    console.log('✅ Home page loaded successfully\n');

    console.log('📝 Test 2: Testing admin login navigation...');
    await page.goto('http://localhost:8085/admin/login', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Take screenshot of login page
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/screenshots/login-page-fresh.png',
      fullPage: true
    });
    console.log('✅ Admin login page loaded successfully\n');

    console.log('📝 Test 3: Testing admin login functionality...');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Wait for redirect to dashboard
    await page.waitForURL('**/admin/dashboard', { timeout: 10000 });
    await page.waitForTimeout(3000);

    // Take screenshot of dashboard
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/screenshots/dashboard-fresh.png',
      fullPage: true
    });
    console.log('✅ Admin dashboard loaded successfully\n');

    console.log('📝 Test 4: Testing CRM leads page...');
    await page.goto('http://localhost:8085/admin/leads', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    // Take screenshot of leads page
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/screenshots/leads-page-fresh.png',
      fullPage: true
    });
    console.log('✅ CRM leads page loaded successfully\n');

    // Analyze results
    console.log('🔍 ANALYSIS RESULTS:');
    console.log('==================');

    // Check for MIME type errors specifically
    const mimeErrors = errors.filter(error =>
      error.toLowerCase().includes('mime type') ||
      error.toLowerCase().includes('expected a javascript') ||
      error.toLowerCase().includes('text/css')
    );

    if (mimeErrors.length === 0) {
      console.log('✅ SUCCESS: No MIME type errors detected!');
    } else {
      console.log('❌ MIME TYPE ERRORS FOUND:');
      mimeErrors.forEach(error => console.log('  -', error));
    }

    // Check for any other errors
    const otherErrors = errors.filter(error =>
      !error.toLowerCase().includes('mime type') &&
      !error.toLowerCase().includes('expected a javascript') &&
      !error.toLowerCase().includes('text/css')
    );

    if (otherErrors.length === 0) {
      console.log('✅ SUCCESS: No other console errors detected!');
    } else {
      console.log('⚠️  OTHER ERRORS FOUND:');
      otherErrors.forEach(error => console.log('  -', error));
    }

    // Check critical resource loading
    const cssRequests = networkRequests.filter(req => req.url.includes('.css'));
    const jsRequests = networkRequests.filter(req => req.url.includes('.js') || req.url.includes('.ts'));

    console.log(`\n📊 RESOURCE LOADING SUMMARY:`);
    console.log(`CSS files loaded: ${cssRequests.length}`);
    console.log(`JS/TS files loaded: ${jsRequests.length}`);

    // Check for failed requests
    const failedRequests = networkRequests.filter(req => req.status >= 400);
    if (failedRequests.length === 0) {
      console.log('✅ SUCCESS: All resources loaded with 2xx/3xx status codes!');
    } else {
      console.log('❌ FAILED REQUESTS:');
      failedRequests.forEach(req => console.log(`  - ${req.url} (${req.status})`));
    }

    console.log('\n📸 Screenshots saved to screenshots/ directory');
    console.log('\n🎉 MIME TYPE VERIFICATION TEST COMPLETE!');

    if (mimeErrors.length === 0 && failedRequests.length === 0) {
      console.log('\n🎊 ALL TESTS PASSED - MIME TYPE ISSUE IS RESOLVED! 🎊');
    } else {
      console.log('\n⚠️  SOME ISSUES DETECTED - CHECK LOGS ABOVE');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

verifyMimeTypes();