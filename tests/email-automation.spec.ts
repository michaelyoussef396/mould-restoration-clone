import { test, expect } from '@playwright/test';

test.describe('Email Automation Workflow', () => {
  test('should send booking confirmation email when lead moved to CONTACTED', async ({ page }) => {
    // Step 1: Login as admin
    await page.goto('http://localhost:8085/admin/login');
    await page.fill('input[name="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Wait for dashboard to load
    await page.waitForURL('**/admin/dashboard');
    await expect(page.locator('text=Dashboard')).toBeVisible();

    console.log('✅ Step 1: Admin logged in successfully');

    // Step 2: Navigate to leads management
    await page.click('text=Leads');
    await page.waitForURL('**/admin/leads');
    await expect(page.locator('text=Lead Management')).toBeVisible();

    console.log('✅ Step 2: Navigated to leads page');

    // Step 3: Find a NEW lead with email and edit it
    const leadRow = page.locator('tr:has(td:has-text("NEW"))').first();
    await leadRow.click();

    // Wait for edit page to load
    await page.waitForURL('**/admin/leads/edit/**');
    await expect(page.locator('text=Edit Lead')).toBeVisible();

    console.log('✅ Step 3: Opened lead edit page');

    // Step 4: Verify email exists and add booking details
    const emailField = page.locator('input[name="email"]');
    const emailValue = await emailField.inputValue();
    console.log(`📧 Lead email: ${emailValue}`);

    expect(emailValue).toContain('@');

    // Set inspection date and time
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];

    await page.fill('input[name="inspectionDate"]', dateString);
    await page.fill('input[name="inspectionTime"]', '10:00');

    console.log(`📅 Set inspection date: ${dateString} at 10:00`);

    // Step 5: Verify "Customer Confirmation Email Ready" badge appears
    await expect(page.locator('text=Customer Confirmation Email Ready')).toBeVisible();
    await expect(page.locator(`text=will be automatically sent to ${emailValue}`)).toBeVisible();

    console.log('✅ Step 4: Email ready badge is visible');

    // Step 6: Change status to CONTACTED
    await page.click('select[name="status"]');
    await page.selectOption('select[name="status"]', 'CONTACTED');

    console.log('✅ Step 5: Changed status to CONTACTED');

    // Step 7: Save the lead
    await page.click('button:has-text("Save Lead")');

    // Wait for success toast
    await expect(page.locator('text=Lead updated successfully')).toBeVisible({ timeout: 5000 });

    console.log('✅ Step 6: Lead saved successfully');

    // Step 8: Wait for API server to process email
    await page.waitForTimeout(3000);

    console.log('✅ Step 7: Waiting for email to be sent...');

    // Step 9: Return to lead and verify emailSent flag
    await page.reload();

    // The "Customer Confirmation Email Ready" badge should no longer appear
    await expect(page.locator('text=Customer Confirmation Email Ready')).not.toBeVisible();

    console.log('✅ Step 8: Email sent flag verified');

    console.log('\n📬 Email Automation Test Complete!');
    console.log(`📧 Email should have been sent to: ${emailValue}`);
    console.log('⚠️ Check your inbox (and spam folder) for email from: onboarding@resend.dev');
  });
});
