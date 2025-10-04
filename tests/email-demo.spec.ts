import { test, expect } from '@playwright/test';

test('Email Automation Demo - Create lead with booking and trigger email', async ({ page }) => {
  test.setTimeout(120000); // 2 minute timeout

  console.log('🚀 Starting email automation demo...');

  // Step 1: Login as admin
  await page.goto('http://localhost:8087/admin/login');
  await page.fill('input[name="email"]', 'admin@mouldandrestoration.com.au');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.waitForURL('**/admin/dashboard', { timeout: 10000 });

  console.log('✅ Logged in successfully');

  // Step 2: Navigate to create new lead
  await page.goto('http://localhost:8087/admin/leads/new');
  await page.waitForSelector('h1:has-text("Create New Lead")', { timeout: 10000 });

  console.log('✅ Navigated to Create New Lead page');

  // Step 3: Fill in customer details with test email
  await page.fill('input[name="firstName"]', 'Demo');
  await page.fill('input[name="lastName"]', 'Customer');
  await page.fill('input[name="email"]', 'demo@mouldandrestoration.com.au');
  await page.fill('input[name="phone"]', '0411222333');
  await page.fill('input[name="suburb"]', 'Melbourne CBD');
  await page.fill('input[name="address"]', '100 Collins Street');
  await page.fill('input[name="postcode"]', '3000');

  console.log('✅ Filled in customer details');

  // Step 4: Set status to CONTACTED (to show booking fields)
  await page.click('button[id="status"]');
  await page.waitForTimeout(500);
  await page.waitForSelector('[role="option"]', { state: 'visible' });
  await page.keyboard.press('ArrowDown'); // Move to CONTACTED
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  console.log('✅ Status set to CONTACTED - booking fields should appear');

  // Step 5: Verify booking fields appeared
  await expect(page.locator('text=Schedule Inspection')).toBeVisible();

  // Step 6: Set booking date and time
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateString = tomorrow.toISOString().split('T')[0];

  await page.fill('input[name="inspectionDate"]', dateString);
  await page.fill('input[name="inspectionTime"]', '10:00');

  console.log(`✅ Booking details entered: ${dateString} at 10:00`);

  // Step 7: Take screenshot before creation
  await page.screenshot({ path: 'email-demo-before-creation.png', fullPage: true });

  // Step 8: Submit the form
  await page.click('button:has-text("Create Lead")');
  await page.waitForTimeout(3000);

  console.log('✅ Lead created');

  // Step 9: Navigate to leads list
  await page.goto('http://localhost:8087/admin/leads');
  await page.waitForTimeout(2000);

  // Step 10: Find and click the new lead
  const leadRow = page.locator('tr:has-text("Demo Customer")').first();
  await expect(leadRow).toBeVisible({ timeout: 10000 });
  await leadRow.click();
  await page.waitForTimeout(2000);

  console.log('✅ Opened lead for editing');

  // Step 11: Change status to QUALIFIED to trigger email automation
  await page.click('button[id="status"]');
  await page.waitForTimeout(500);
  await page.waitForSelector('[role="option"]', { state: 'visible' });

  // Navigate to QUALIFIED (3rd option)
  await page.keyboard.press('ArrowDown'); // Skip NEW
  await page.keyboard.press('ArrowDown'); // Skip CONTACTED
  await page.keyboard.press('ArrowDown'); // Select QUALIFIED
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  console.log('🔄 Status changed to QUALIFIED - this should trigger email automation!');

  // Step 12: Save changes (this triggers the email)
  await page.click('button:has-text("Save Changes")');

  console.log('📧 Waiting for email automation to complete...');
  await page.waitForTimeout(5000); // Wait for email to send

  // Step 13: Take final screenshot
  await page.screenshot({ path: 'email-demo-final-state.png', fullPage: true });

  console.log('✅ Email automation test completed!');
  console.log('📧 Check the API server console for [EMAIL] logs');
  console.log('📸 Screenshots saved:');
  console.log('   - email-demo-before-creation.png');
  console.log('   - email-demo-final-state.png');
});
