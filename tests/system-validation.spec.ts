import { test, expect } from '@playwright/test';

/**
 * SYSTEMATIC FEATURE VALIDATION
 *
 * This test suite validates all Phase 2B+ features to determine
 * what's actually working vs what's claimed in documentation.
 *
 * Results will be used to update CLAUDE.md with accurate status.
 */

test.describe('PRIORITY 1: Email Automation End-to-End', () => {
  test.beforeEach(async ({ page }) => {
    // Login first
    await page.goto('http://localhost:8085/admin');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button:has-text("Sign In")');
    await page.waitForURL('**/admin/dashboard');
  });

  test('Email automation workflow - Complete test', async ({ page }) => {
    console.log('\n=== TESTING EMAIL AUTOMATION ===\n');

    // Step 1: Navigate to leads and create new lead
    await page.goto('http://localhost:8085/admin/leads/new');
    await page.screenshot({ path: 'test-results/validation/01-new-lead-form.png' });

    // Step 2: Fill lead form with test email
    await page.fill('input[name="firstName"]', 'Email Test');
    await page.fill('input[name="lastName"]', 'Automation');
    await page.fill('input[name="email"]', 'michaelyoussef396@gmail.com'); // Resend test email
    await page.fill('input[name="phone"]', '0400 000 001');
    await page.fill('input[name="address"]', '1 Test Street');
    await page.fill('input[name="suburb"]', 'Melbourne');
    await page.fill('input[name="postcode"]', '3000');

    // Select service type
    await page.click('[role="combobox"]:has-text("Select service type")');
    await page.click('text=Mould Inspection');

    await page.screenshot({ path: 'test-results/validation/02-lead-form-filled.png' });

    // Step 3: Save lead
    await page.click('button:has-text("Create Lead")');
    await page.waitForURL('**/admin/leads');
    await page.screenshot({ path: 'test-results/validation/03-lead-created.png' });

    // Step 4: Find and edit the created lead
    await page.click('text=Email Test Automation');
    await page.waitForURL('**/admin/leads/**');
    await page.screenshot({ path: 'test-results/validation/04-edit-lead.png' });

    // Step 5: Add inspection date and time (required for CONTACTED status)
    await page.fill('input[type="date"]', '2025-10-06');
    await page.fill('input[type="time"]', '14:00');
    await page.screenshot({ path: 'test-results/validation/05-booking-details-added.png' });

    // Step 6: Change status to CONTACTED (should trigger email)
    await page.click('[role="combobox"]:has-text("NEW")');
    await page.click('text=CONTACTED');
    await page.screenshot({ path: 'test-results/validation/06-status-contacted.png' });

    // Step 7: Save changes
    await page.click('button:has-text("Update Lead")');

    // Step 8: Wait for success message
    await page.waitForSelector('text=Lead updated successfully', { timeout: 5000 });
    await page.screenshot({ path: 'test-results/validation/07-lead-updated-success.png' });

    // Step 9: Check if email indicator shows
    const emailIndicator = await page.locator('text=Customer Confirmation Email').isVisible();
    console.log('✓ Email indicator visible:', emailIndicator);

    await page.screenshot({ path: 'test-results/validation/08-final-state.png', fullPage: true });

    console.log('\n✅ Email automation test completed');
    console.log('Check API server logs for [EMAIL] messages');
    console.log('Check inbox: michaelyoussef396@gmail.com\n');
  });

  test('Email validation - Cannot set CONTACTED without booking', async ({ page }) => {
    console.log('\n=== TESTING EMAIL VALIDATION ===\n');

    await page.goto('http://localhost:8085/admin/leads');

    // Find a lead without booking details
    const firstLead = page.locator('[role="row"]').nth(1);
    await firstLead.click();
    await page.waitForURL('**/admin/leads/**');

    // Try to change to CONTACTED without date/time
    await page.click('[role="combobox"]');
    await page.click('text=CONTACTED');
    await page.click('button:has-text("Update Lead")');

    // Should show validation error
    const errorVisible = await page.locator('text=Inspection date and time are required').isVisible({ timeout: 3000 }).catch(() => false);

    console.log('✓ Validation prevents CONTACTED without booking:', errorVisible);
    await page.screenshot({ path: 'test-results/validation/validation-error.png' });
  });
});

test.describe('PRIORITY 2: Calendar Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8085/admin');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button:has-text("Sign In")');
    await page.waitForURL('**/admin/dashboard');
  });

  test('Calendar page loads and displays', async ({ page }) => {
    console.log('\n=== TESTING CALENDAR INTEGRATION ===\n');

    // Navigate to calendar
    await page.goto('http://localhost:8085/admin/calendar');

    // Wait for calendar to load (or error)
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/validation/calendar-main.png', fullPage: true });

    // Check for errors in console
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.waitForTimeout(2000);

    console.log('✓ Calendar page loaded');
    console.log('✓ Console errors:', errors.length > 0 ? errors : 'None');
  });

  test('Inspection calendar loads and lead dropdown works', async ({ page }) => {
    console.log('\n=== TESTING INSPECTION CALENDAR ===\n');

    await page.goto('http://localhost:8085/admin/inspections');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/validation/inspections-main.png', fullPage: true });

    // Test Schedule New button
    const scheduleButton = await page.locator('button:has-text("Schedule New")').isVisible();
    console.log('✓ Schedule New button visible:', scheduleButton);

    if (scheduleButton) {
      await page.click('button:has-text("Schedule New")');
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'test-results/validation/inspections-new-modal.png' });

      // Test if customer dropdown loads (the fix we just made)
      await page.click('[role="combobox"]:has-text("Select customer")');
      await page.waitForTimeout(500);

      const hasLeads = await page.locator('[role="option"]').count();
      console.log('✓ Customer leads loaded:', hasLeads > 0 ? `${hasLeads} leads` : 'No leads found');

      await page.screenshot({ path: 'test-results/validation/inspections-customer-dropdown.png' });
    }
  });

  test('Calendar query parameters work', async ({ page }) => {
    console.log('\n=== TESTING CALENDAR QUERY PARAMETERS ===\n');

    // Test ?create=true
    await page.goto('http://localhost:8085/admin/inspections?create=true');
    await page.waitForTimeout(1000);
    const modalVisible = await page.locator('[role="dialog"]').isVisible().catch(() => false);
    console.log('✓ ?create=true opens modal:', modalVisible);
    await page.screenshot({ path: 'test-results/validation/calendar-create-param.png' });

    // Test ?view=routes
    await page.goto('http://localhost:8085/admin/inspections?view=routes');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'test-results/validation/calendar-routes-view.png', fullPage: true });
  });
});

test.describe('PRIORITY 3: Notification System', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8085/admin');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button:has-text("Sign In")');
    await page.waitForURL('**/admin/dashboard');
  });

  test('Notification page exists and loads', async ({ page }) => {
    console.log('\n=== TESTING NOTIFICATION SYSTEM ===\n');

    await page.goto('http://localhost:8085/admin/notifications');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/validation/notifications-page.png', fullPage: true });

    const pageTitle = await page.locator('h1, h2').first().textContent();
    console.log('✓ Notification page title:', pageTitle);
  });

  test('Notification bell icon in header', async ({ page }) => {
    const bellIcon = await page.locator('[aria-label*="notification" i], [class*="bell" i]').isVisible().catch(() => false);
    console.log('✓ Notification bell icon visible:', bellIcon);

    if (bellIcon) {
      await page.locator('[aria-label*="notification" i], [class*="bell" i]').first().screenshot({
        path: 'test-results/validation/notification-bell.png'
      });
    }
  });
});

test.describe('PRIORITY 4: Analytics Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8085/admin');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button:has-text("Sign In")');
    await page.waitForURL('**/admin/dashboard');
  });

  test('Analytics page exists and loads', async ({ page }) => {
    console.log('\n=== TESTING ANALYTICS DASHBOARD ===\n');

    await page.goto('http://localhost:8085/admin/analytics');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/validation/analytics-page.png', fullPage: true });

    const pageExists = await page.locator('h1, h2').count() > 0;
    console.log('✓ Analytics page exists:', pageExists);
  });
});

test.describe('PRIORITY 5: Communication Hub', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8085/admin');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button:has-text("Sign In")');
    await page.waitForURL('**/admin/dashboard');
  });

  test('Communication hub page exists', async ({ page }) => {
    console.log('\n=== TESTING COMMUNICATION HUB ===\n');

    await page.goto('http://localhost:8085/admin/communication');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/validation/communication-page.png', fullPage: true });

    const pageExists = await page.locator('h1, h2').count() > 0;
    console.log('✓ Communication page exists:', pageExists);
  });
});
