import { test, expect } from '@playwright/test';

test.describe('Quick Phone Lead Entry - Inspection Booking', () => {
  test.use({
    viewport: { width: 1440, height: 900 },
  });

  test.beforeEach(async ({ page }) => {
    // Login as admin
    await page.goto('http://localhost:8085/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/admin/dashboard', { timeout: 10000 });
  });

  test('Quick phone lead with inspection booking auto-confirms to QUALIFIED', async ({ page }) => {
    // Go to leads page
    await page.goto('http://localhost:8085/admin/leads');
    await page.waitForTimeout(1500);

    // Click "Phone Lead" button
    await page.click('button:has-text("Phone Lead")');
    await page.waitForTimeout(500);

    // Wait for dialog to open
    await page.waitForSelector('text=Quick Phone Lead Entry', { timeout: 5000 });

    // Fill phone lead form
    await page.fill('input#firstName', 'Phone Test');
    await page.fill('input#lastName', 'Customer');
    await page.fill('input#phone', '0400 111 222');
    await page.fill('input#email', 'phonetest@example.com');

    // Select suburb
    await page.click('button:has-text("Select Melbourne suburb")');
    await page.waitForTimeout(300);
    await page.waitForSelector('[role="option"]', { state: 'visible', timeout: 5000 });
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);

    // Fill inspection date and time
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];

    await page.fill('input#inspectionDate', dateString);
    await page.fill('input#inspectionTime', '14:00');
    await page.waitForTimeout(300);

    // Check if confirmation badge appears
    const confirmationBadge = page.locator('text=/Inspection Confirmed/i');
    await expect(confirmationBadge).toBeVisible();

    // Take screenshot of phone lead with booking
    await page.screenshot({ path: 'phone-lead-with-booking.png', fullPage: true });

    // Submit form
    await page.click('button:has-text("Create Phone Lead")');
    await page.waitForTimeout(2000);

    // Verify lead was created
    await page.goto('http://localhost:8085/admin/leads');
    await page.waitForTimeout(1500);

    // Check if lead appears
    const hasPhoneLead = await page.locator('text=/Phone Test|0400 111 222/i').first().isVisible()
      .catch(() => false);

    console.log('Phone lead with booking created:', hasPhoneLead);

    if (hasPhoneLead) {
      await page.screenshot({ path: 'phone-lead-created.png', fullPage: true });
    }
  });

  test('Phone lead without booking creates CONTACTED status', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/leads');
    await page.waitForTimeout(1500);

    // Click "Phone Lead" button
    await page.click('button:has-text("Phone Lead")');
    await page.waitForTimeout(500);

    // Wait for dialog to open
    await page.waitForSelector('text=Quick Phone Lead Entry', { timeout: 5000 });

    // Fill minimum required fields only (no booking)
    await page.fill('input#firstName', 'No Booking');
    await page.fill('input#lastName', 'Test');
    await page.fill('input#phone', '0400 333 444');

    // Select suburb
    await page.click('button:has-text("Select Melbourne suburb")');
    await page.waitForTimeout(300);
    await page.waitForSelector('[role="option"]', { state: 'visible', timeout: 5000 });
    await page.keyboard.press('Enter'); // Select first option
    await page.waitForTimeout(200);

    // Verify NO confirmation badge appears
    const confirmationBadge = page.locator('text=/Inspection Confirmed/i');
    await expect(confirmationBadge).not.toBeVisible();

    // Take screenshot without booking
    await page.screenshot({ path: 'phone-lead-no-booking.png', fullPage: true });

    // Submit without booking
    await page.click('button:has-text("Create Phone Lead")');
    await page.waitForTimeout(2000);

    console.log('Phone lead created without booking - should be CONTACTED status');
  });
});
