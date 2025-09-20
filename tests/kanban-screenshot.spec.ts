import { test, expect } from '@playwright/test';

test('Take screenshot of Kanban board implementation', async ({ page }) => {
  // Navigate to login page
  await page.goto('http://localhost:8080/admin/login');

  // Login with admin credentials
  await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
  await page.fill('input[type="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Wait for redirect to dashboard
  await page.waitForURL('**/admin/dashboard');

  // Navigate to Kanban board
  await page.goto('http://localhost:8080/admin/leads/kanban');
  await page.waitForLoadState('networkidle');

  // Take full page screenshot
  await page.screenshot({
    path: 'kanban-board-implementation.png',
    fullPage: true
  });

  // Take desktop screenshot focused on the board
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({
    path: 'kanban-board-desktop.png',
    fullPage: false
  });

  // Take mobile screenshot
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({
    path: 'kanban-board-mobile.png',
    fullPage: true
  });
});