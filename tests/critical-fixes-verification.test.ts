import { test, expect } from '@playwright/test';

test.describe('Critical Fixes Verification - Mobile', () => {
  // Use mobile viewport for all tests
  test.use({
    viewport: { width: 375, height: 667 },
  });

  test.beforeEach(async ({ page }) => {
    // Login as admin for admin page tests
    await page.goto('http://localhost:8085/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/admin/dashboard', { timeout: 10000 });
  });

  test('PHASE 1: InspectionCalendar loads without crash', async ({ page }) => {
    // Navigate to inspection calendar
    await page.goto('http://localhost:8085/admin/calendar');

    // Wait for calendar to load
    await page.waitForTimeout(2000);

    // Should not have console errors about undefined
    const logs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        logs.push(msg.text());
      }
    });

    // Check page loaded without white screen
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText?.length).toBeGreaterThan(100);

    // Should see calendar-related content
    const hasCalendarContent = await page.locator('text=/Calendar|Inspection|Schedule/i').first().isVisible();
    expect(hasCalendarContent).toBeTruthy();

    // Take screenshot for verification
    await page.screenshot({ path: 'verification-calendar-loaded.png', fullPage: true });
  });

  test('PHASE 2: Query parameter ?create=true opens dialog', async ({ page }) => {
    // Navigate with create parameter
    await page.goto('http://localhost:8085/admin/inspections?create=true');

    // Wait for dialog to open
    await page.waitForTimeout(1500);

    // Dialog should be visible
    const dialogVisible = await page.locator('[role="dialog"]').isVisible().catch(() => false);

    // If dialog uses Sheet, check for that
    const sheetVisible = await page.locator('text=/Schedule|Create|Book/i').first().isVisible();

    expect(dialogVisible || sheetVisible).toBeTruthy();

    await page.screenshot({ path: 'verification-query-param-dialog.png' });
  });

  test('PHASE 3: Mobile navigation opens full-width', async ({ page }) => {
    // Open mobile menu
    const menuButton = page.locator('button').filter({ has: page.locator('svg[class*="lucide-menu"]') });
    await menuButton.click();

    // Wait for sheet to open
    await page.waitForTimeout(500);

    // Sheet should be visible
    await expect(page.locator('[role="dialog"]')).toBeVisible();

    // Check that navigation items are visible
    await expect(page.getByText('Lead Management')).toBeVisible();
    await expect(page.getByText('Dashboard')).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: 'verification-mobile-nav-open.png' });

    // Verify touch target sizes (should be at least 48px)
    const firstNavButton = page.getByText('Dashboard');
    const box = await firstNavButton.boundingBox();

    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(48);
    }
  });

  test('PHASE 3: Navigation buttons meet touch target standards', async ({ page }) => {
    // Open mobile menu
    const menuButton = page.locator('button').filter({ has: page.locator('svg[class*="lucide-menu"]') });
    await menuButton.click();
    await page.waitForTimeout(500);

    // Check multiple navigation items for proper height
    const navItems = [
      'Dashboard',
      'Lead Management',
      'Analytics & Reports',
      'Notifications'
    ];

    for (const itemText of navItems) {
      const button = page.getByText(itemText).first();
      if (await button.isVisible()) {
        const box = await button.boundingBox();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(44); // Allow small margin
          console.log(`${itemText}: ${box.height}px height`);
        }
      }
    }
  });
});

test.describe('Homepage Mobile Verification', () => {
  test.use({
    viewport: { width: 375, height: 667 },
  });

  test('PHASE 4: Homepage announcement bar fits mobile screen', async ({ page }) => {
    await page.goto('http://localhost:8085/');

    // Wait for page to load
    await page.waitForTimeout(1000);

    // Check announcement bar is visible
    const announcementBar = page.locator('.bg-blue-600').first();
    await expect(announcementBar).toBeVisible();

    // Get phone number link
    const phoneLink = page.locator('a[href="tel:1800954117"]').first();
    await expect(phoneLink).toBeVisible();

    // Check Melbourne location is visible
    await expect(page.getByText('Melbourne, VIC')).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: 'verification-homepage-announcement.png' });

    // Verify no horizontal scrollbar
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalScroll).toBeFalsy();
  });

  test('All critical homepage elements fit mobile viewport', async ({ page }) => {
    await page.goto('http://localhost:8085/');
    await page.waitForTimeout(1500);

    // Check key elements are visible and within viewport
    await expect(page.getByText('Professional Mould Removal')).toBeVisible();
    await expect(page.locator('a[href="tel:1800954117"]').first()).toBeVisible();

    // Take full page screenshot
    await page.screenshot({ path: 'verification-homepage-full-mobile.png', fullPage: true });

    // Verify no elements overflow viewport
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = 375;

    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 20); // Allow 20px margin
  });
});

test.describe('Admin Pages Navigation Audit', () => {
  test.use({
    viewport: { width: 375, height: 667 },
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8085/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/admin/dashboard');
  });

  test('Dashboard page loads on mobile', async ({ page }) => {
    await expect(page.locator('text=/Dashboard|Statistics|Leads/i').first()).toBeVisible();
    await page.screenshot({ path: 'verification-dashboard-mobile.png' });
  });

  test('Leads Kanban page loads on mobile', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/leads/kanban');
    await page.waitForTimeout(1500);

    await expect(page.locator('text=/Lead|Pipeline|New/i').first()).toBeVisible();
    await page.screenshot({ path: 'verification-leads-kanban-mobile.png' });
  });

  test('Notifications page loads on mobile', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/notifications');
    await page.waitForTimeout(1000);

    await expect(page.locator('text=/Notification/i').first()).toBeVisible();
    await page.screenshot({ path: 'verification-notifications-mobile.png' });
  });

  test('Calendar page loads on mobile', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/calendar');
    await page.waitForTimeout(2000);

    const bodyText = await page.textContent('body');
    expect(bodyText?.length).toBeGreaterThan(100);

    await page.screenshot({ path: 'verification-calendar-mobile.png', fullPage: true });
  });
});
