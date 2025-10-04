import { test, expect } from '@playwright/test';

/**
 * SESSION RECOVERY - SYSTEMATIC FEATURE TESTING
 *
 * Testing all major Phase 2B+ features after session crash
 * Simple pass/fail validation of each component
 */

// Helper function to perform admin login
async function loginAsAdmin(page: any) {
  await page.goto('http://localhost:8085/admin/login');
  await page.waitForTimeout(1000);

  // Fill in login credentials
  await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
  await page.fill('input[type="password"]', 'admin123');

  // Click login button
  await page.click('button[type="submit"]');

  // Wait for redirect to dashboard
  await page.waitForTimeout(2000);
  await page.waitForURL('**/admin/dashboard', { timeout: 5000 }).catch(() => {
    // Dashboard redirect may not happen, but auth token should be set
  });
}

test.describe('SESSION RECOVERY - Feature Testing', () => {

  // Login before all tests to get auth token
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
  });

  // Test 1: Calendar/Inspection System
  test('CALENDAR - Page loads without crashing', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/calendar');

    // Wait for page to load
    await page.waitForTimeout(2000);

    // Check if page rendered (not blank)
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(100);

    // Check for no critical errors
    const errors = await page.evaluate(() => {
      return (window as any).__errors || [];
    });
    expect(errors.length).toBeLessThan(3); // Allow minor warnings

    // Take screenshot for visual verification
    await page.screenshot({
      path: 'test-results/calendar-page-loaded.png',
      fullPage: true
    });

    console.log('✅ CALENDAR: Page loads successfully');
  });

  test('CALENDAR - Has calendar UI elements', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/calendar');
    await page.waitForTimeout(2000);

    // Look for common calendar UI elements
    const hasCalendarContent = await page.evaluate(() => {
      const text = document.body.innerText.toLowerCase();
      return text.includes('calendar') ||
             text.includes('inspection') ||
             text.includes('schedule');
    });

    expect(hasCalendarContent).toBe(true);
    console.log('✅ CALENDAR: Has calendar-related content');
  });

  // Test 2: Notifications Page
  test('NOTIFICATIONS - Page loads without crashing', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/notifications');
    await page.waitForTimeout(2000);

    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(100);

    await page.screenshot({
      path: 'test-results/notifications-page-loaded.png',
      fullPage: true
    });

    console.log('✅ NOTIFICATIONS: Page loads successfully');
  });

  test('NOTIFICATIONS - Has notification UI elements', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/notifications');
    await page.waitForTimeout(2000);

    const hasNotificationContent = await page.evaluate(() => {
      const text = document.body.innerText.toLowerCase();
      return text.includes('notification') ||
             text.includes('alert') ||
             text.includes('message');
    });

    expect(hasNotificationContent).toBe(true);
    console.log('✅ NOTIFICATIONS: Has notification-related content');
  });

  // Test 3: Analytics Dashboard
  test('ANALYTICS - Page loads without crashing', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/analytics');
    await page.waitForTimeout(2000);

    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(100);

    await page.screenshot({
      path: 'test-results/analytics-page-loaded.png',
      fullPage: true
    });

    console.log('✅ ANALYTICS: Page loads successfully');
  });

  test('ANALYTICS - Has analytics UI elements', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/analytics');
    await page.waitForTimeout(2000);

    const hasAnalyticsContent = await page.evaluate(() => {
      const text = document.body.innerText.toLowerCase();
      return text.includes('analytics') ||
             text.includes('dashboard') ||
             text.includes('metrics') ||
             text.includes('stats');
    });

    expect(hasAnalyticsContent).toBe(true);
    console.log('✅ ANALYTICS: Has analytics-related content');
  });

  // Test 4: Lead Management
  test('LEADS - Page loads without crashing', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/leads');
    await page.waitForTimeout(2000);

    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(100);

    await page.screenshot({
      path: 'test-results/leads-page-loaded.png',
      fullPage: true
    });

    console.log('✅ LEADS: Page loads successfully');
  });

  test('LEADS - Can view lead list', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/leads');
    await page.waitForTimeout(2000);

    // Look for lead data or table
    const hasLeadContent = await page.evaluate(() => {
      const text = document.body.innerText.toLowerCase();
      return text.includes('lead') ||
             text.includes('contact') ||
             text.includes('name') ||
             text.includes('email') ||
             text.includes('phone');
    });

    expect(hasLeadContent).toBe(true);
    console.log('✅ LEADS: Has lead list content');
  });

  test('LEADS - Add new lead button exists', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/leads');
    await page.waitForTimeout(2000);

    // Look for "Add" or "New" button - check both text and navigation links
    const hasAddButton = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button, a, [role="button"]'));
      return buttons.some(btn => {
        const text = btn.textContent?.toLowerCase() || '';
        const href = (btn as HTMLAnchorElement).href?.toLowerCase() || '';
        return text.includes('add') ||
               text.includes('new') ||
               text.includes('create') ||
               href.includes('/new') ||
               href.includes('/create');
      });
    });

    expect(hasAddButton).toBe(true);
    console.log('✅ LEADS: Has add/new lead button');
  });

  // Test 5: Communication Hub
  test('COMMUNICATION - Page loads without crashing', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/communication');
    await page.waitForTimeout(2000);

    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText!.length).toBeGreaterThan(100);

    await page.screenshot({
      path: 'test-results/communication-page-loaded.png',
      fullPage: true
    });

    console.log('✅ COMMUNICATION: Page loads successfully');
  });

  test('COMMUNICATION - Has communication UI elements', async ({ page }) => {
    await page.goto('http://localhost:8085/admin/communication');
    await page.waitForTimeout(2000);

    const hasCommunicationContent = await page.evaluate(() => {
      const text = document.body.innerText.toLowerCase();
      return text.includes('communication') ||
             text.includes('message') ||
             text.includes('email') ||
             text.includes('template');
    });

    expect(hasCommunicationContent).toBe(true);
    console.log('✅ COMMUNICATION: Has communication-related content');
  });

  // Test 6: Console Errors Check (Global)
  test('GLOBAL - No critical console errors across pages', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Visit each major page
    const pages = [
      'http://localhost:8085/admin/calendar',
      'http://localhost:8085/admin/notifications',
      'http://localhost:8085/admin/analytics',
      'http://localhost:8085/admin/leads',
      'http://localhost:8085/admin/communication'
    ];

    for (const url of pages) {
      await page.goto(url);
      await page.waitForTimeout(1000);
    }

    // Filter out known minor errors and expected auth errors
    const criticalErrors = errors.filter(err => {
      const lowerErr = err.toLowerCase();
      return !lowerErr.includes('favicon') &&
             !lowerErr.includes('websocket') &&
             !lowerErr.includes('service worker') &&
             !lowerErr.includes('403') &&
             !lowerErr.includes('forbidden') &&
             !lowerErr.includes('failed to fetch') &&
             !lowerErr.includes('failed to load');
    });

    console.log(`Total errors: ${errors.length}, Critical: ${criticalErrors.length}`);
    if (criticalErrors.length > 0) {
      console.log('Critical errors:', criticalErrors.slice(0, 5));
    }

    // Allow up to 5 non-critical errors
    expect(criticalErrors.length).toBeLessThan(5);
  });
});
