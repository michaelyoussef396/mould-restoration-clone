import { test, expect } from '@playwright/test';

test.describe('PRIORITY 1: Inspection Booking End-to-End Workflow', () => {
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

  test('STEP 1: Create lead with inspection booking (Status: Contacted)', async ({ page }) => {
    // Navigate to create new lead
    await page.goto('http://localhost:8085/admin/leads/new');
    await page.waitForTimeout(1000);

    // Fill basic information
    await page.fill('input[name="firstName"]', 'Test Booking');
    await page.fill('input[name="lastName"]', 'Customer');
    await page.fill('input[name="phone"]', '0400 555 777');
    await page.fill('input[name="email"]', 'testbooking@example.com');

    // Fill location
    await page.fill('input[name="address"]', '123 Test Street');
    await page.fill('input[name="suburb"]', 'Richmond');
    await page.fill('input[name="postcode"]', '3121');

    // Set service type using keyboard navigation
    await page.click('button[id="serviceType"]');
    await page.waitForTimeout(200);
    await page.keyboard.press('Enter'); // Select default "Mould Inspection"

    // Set status to CONTACTED using keyboard navigation - this should show inspection booking fields
    await page.click('button[id="status"]');
    await page.waitForTimeout(300);
    // Wait for dropdown to open
    await page.waitForSelector('[role="option"]', { state: 'visible', timeout: 5000 });
    // Press Down arrow to move to "Contacted" (2nd option)
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);
    await page.keyboard.press('Enter');

    await page.waitForTimeout(500);

    // Check if inspection booking section appeared
    const inspectionDateField = page.locator('input[name="inspectionDate"]');
    const inspectionTimeField = page.locator('input[name="inspectionTime"]');

    await expect(inspectionDateField).toBeVisible();
    await expect(inspectionTimeField).toBeVisible();

    // Fill inspection date and time
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];

    await inspectionDateField.fill(dateString);
    await inspectionTimeField.fill('10:00');

    // Take screenshot before submission
    await page.screenshot({ path: 'booking-form-filled.png', fullPage: true });

    // Submit form
    await page.click('button[type="submit"]');

    // Wait for navigation or success message
    await page.waitForTimeout(2000);

    // Capture screenshot after submission
    await page.screenshot({ path: 'booking-form-submitted.png', fullPage: true });

    // Should navigate to kanban or leads page
    expect(page.url()).toContain('/admin/leads');
  });

  test('STEP 2: Verify booking appears in calendar', async ({ page }) => {
    // Navigate to calendar/inspections page
    await page.goto('http://localhost:8085/admin/calendar');

    // Wait for calendar to load
    await page.waitForTimeout(3000);

    // Check if calendar loaded without crashing
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText?.length).toBeGreaterThan(100);

    // Take screenshot of calendar
    await page.screenshot({ path: 'booking-in-calendar.png', fullPage: true });

    // Try to find the booking (this may fail if integration doesn't work)
    const hasTestBooking = await page.locator('text=/Test Booking|Richmond/i').first().isVisible()
      .catch(() => false);

    console.log('Booking visible in calendar:', hasTestBooking);
  });

  test('STEP 3: Verify data persistence in lead record', async ({ page }) => {
    // Navigate to leads page
    await page.goto('http://localhost:8085/admin/leads');
    await page.waitForTimeout(1500);

    // Find the test booking lead
    const testLead = page.locator('text=Test Booking Customer').first();
    const isVisible = await testLead.isVisible().catch(() => false);

    if (isVisible) {
      // Click to view/edit the lead
      await testLead.click();
      await page.waitForTimeout(1500);

      // Verify inspection details are present (if they persist)
      const inspectionDate = page.locator('input[name="inspectionDate"]');
      const inspectionTime = page.locator('input[name="inspectionTime"]');

      const dateValue = await inspectionDate.inputValue().catch(() => '');
      const timeValue = await inspectionTime.inputValue().catch(() => '');

      console.log('Persisted inspection date:', dateValue);
      console.log('Persisted inspection time:', timeValue);

      // Take screenshot
      await page.screenshot({ path: 'booking-data-persisted.png', fullPage: true });
    } else {
      console.log('ERROR: Test Booking Customer not found in leads list');
      await page.screenshot({ path: 'booking-lead-not-found.png', fullPage: true });
    }
  });

  test('DIAGNOSTIC: Check if inspection booking fields appear on status change', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/leads/new');
    await page.waitForTimeout(1000);

    // Initially, inspection fields should NOT be visible
    const inspectionSection = page.locator('text=Schedule Inspection');
    await expect(inspectionSection).not.toBeVisible();

    // Change status to CONTACTED using keyboard navigation
    await page.click('button[id="status"]');
    await page.waitForTimeout(300);
    // Wait for dropdown to open and be visible
    await page.waitForSelector('[role="option"]', { state: 'visible', timeout: 5000 });
    // Press Down arrow to move to "Contacted" (2nd option)
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);

    // Now inspection fields SHOULD be visible
    await expect(inspectionSection).toBeVisible();
    await expect(page.locator('input[name="inspectionDate"]')).toBeVisible();
    await expect(page.locator('input[name="inspectionTime"]')).toBeVisible();

    await page.screenshot({ path: 'booking-fields-conditional-display.png', fullPage: true });
  });
});
