import { test, expect } from '@playwright/test';

test('Monitor console for errors during normal dashboard usage', async ({ page }) => {
  test.setTimeout(90000);

  const consoleMessages: Array<{
    type: string;
    text: string;
    timestamp: number;
  }> = [];

  // Capture all console messages
  page.on('console', msg => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text(),
      timestamp: Date.now(),
    });

    if (msg.type() === 'error') {
      console.log(`❌ [ERROR] ${msg.text()}`);
    } else if (msg.type() === 'warning') {
      console.log(`⚠️  [WARN] ${msg.text()}`);
    }
  });

  // Navigate to login
  console.log('🔐 Navigating to login page...');
  await page.goto('http://localhost:8085/admin/login');
  await page.waitForLoadState('networkidle');

  console.log('📝 Logging in...');
  await page.fill('input[placeholder="admin@mouldandrestoration.com.au"]', 'admin@mouldandrestoration.com.au');
  await page.fill('input[placeholder="Enter your password"]', 'admin123');
  await page.click('button:has-text("Sign In")');

  // Wait for dashboard
  console.log('⏳ Waiting for dashboard...');
  await page.waitForURL('**/admin/dashboard', { timeout: 10000 });
  await page.waitForLoadState('networkidle');

  // Monitor for 30 seconds
  console.log('👀 Monitoring console for 30 seconds...');
  await page.waitForTimeout(30000);

  // Analyze results
  const errors = consoleMessages.filter(m => m.type === 'error');
  const warnings = consoleMessages.filter(m => m.type === 'warning');

  console.log('\n📊 Console Message Summary:');
  console.log(`Total Messages: ${consoleMessages.length}`);
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (errors.length > 0) {
    console.log('\n❌ Console Errors:');
    errors.forEach((err, i) => {
      console.log(`  ${i + 1}. ${err.text}`);
    });
  }

  if (warnings.length > 0) {
    console.log('\n⚠️  Console Warnings:');
    warnings.forEach((warn, i) => {
      console.log(`  ${i + 1}. ${warn.text}`);
    });
  }

  // Take screenshot of final state
  await page.screenshot({
    path: 'test-results/console-monitoring-final.png',
    fullPage: true
  });

  // Assert no console errors
  expect(errors.length).toBe(0);

  console.log('\n✅ No console errors detected during 30-second monitoring period');
});
