import { test, expect } from '@playwright/test';

test('Dashboard should remain stable for 60+ seconds without auto-refresh', async ({ page }) => {
  test.setTimeout(90000); // 90 second timeout for 60 second stability test
  console.log('🔍 Starting dashboard stability test...');

  // Track page reloads
  let reloadCount = 0;
  page.on('load', () => {
    reloadCount++;
    console.log(`📄 Page load detected. Total loads: ${reloadCount}`);
  });

  // Track console errors
  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.log(`❌ Console error: ${msg.text()}`);
    }
  });

  // Navigate to login
  console.log('🔐 Navigating to login page...');
  await page.goto('http://localhost:8085/admin/login');
  await page.waitForLoadState('networkidle');

  // Login
  console.log('📝 Logging in...');
  await page.fill('input[placeholder="admin@mouldandrestoration.com.au"]', 'admin@mouldandrestoration.com.au');
  await page.fill('input[placeholder="Enter your password"]', 'admin123');
  await page.click('button:has-text("Sign In")');

  // Wait for dashboard to load
  console.log('⏳ Waiting for dashboard to load...');
  await page.waitForURL('**/admin/dashboard', { timeout: 10000 });
  await page.waitForLoadState('networkidle');

  const initialLoadCount = reloadCount;
  console.log(`✅ Dashboard loaded. Initial load count: ${initialLoadCount}`);

  // Wait 60 seconds and monitor for refreshes
  console.log('⏰ Monitoring dashboard for 60 seconds...');
  const startTime = Date.now();

  for (let i = 0; i < 12; i++) {
    await page.waitForTimeout(5000); // Wait 5 seconds
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    console.log(`⏱️  ${elapsed}s elapsed. Load count: ${reloadCount}`);

    // Check if page reloaded
    if (reloadCount > initialLoadCount) {
      console.log(`❌ FAILURE: Page auto-refreshed after ${elapsed}s!`);
      throw new Error(`Dashboard auto-refreshed after ${elapsed} seconds. Total loads: ${reloadCount}`);
    }
  }

  const totalTime = Math.floor((Date.now() - startTime) / 1000);
  console.log(`✅ SUCCESS: Dashboard remained stable for ${totalTime} seconds with NO auto-refreshes`);

  // Verify no page reloads occurred
  expect(reloadCount).toBe(initialLoadCount);

  // Verify no console errors
  if (consoleErrors.length > 0) {
    console.log(`⚠️  Found ${consoleErrors.length} console errors:`);
    consoleErrors.forEach(err => console.log(`  - ${err}`));
  }

  // Take screenshot of stable state
  await page.screenshot({ path: 'final-state.png', fullPage: true });
  console.log('📸 Screenshot saved: final-state.png');
});
