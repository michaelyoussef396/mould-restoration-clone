import { test, expect } from '@playwright/test';

test.describe('Admin Authentication', () => {
  test.beforeEach(async ({ page }) => {
    // Clear any existing authentication
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.clear();
    });
  });

  test('should display login page correctly', async ({ page }) => {
    await page.goto('/admin/login');

    // Check page elements
    await expect(page.locator('h1')).toContainText('Mould & Restoration Co.');
    await expect(page.locator('text=Admin Portal')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();

    // Check form elements
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();

    // Check demo credentials are shown
    await expect(page.locator('text=Demo Credentials')).toBeVisible();
    await expect(page.locator('text=admin@mouldandrestoration.com.au')).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/admin/login');

    // Fill in invalid credentials
    await page.fill('input[type="email"]', 'invalid@example.com');
    await page.fill('input[type="password"]', 'wrongpassword');

    // Submit form
    await page.click('button[type="submit"]');

    // Check for error message
    await expect(page.locator('text=Invalid email or password')).toBeVisible();
  });

  test('should successfully login with valid credentials', async ({ page }) => {
    await page.goto('/admin/login');

    // Fill in valid credentials
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');

    // Submit form
    await page.click('button[type="submit"]');

    // Should redirect to dashboard
    await expect(page).toHaveURL('/admin/dashboard');
    await expect(page.locator('text=CRM Dashboard')).toBeVisible();
    await expect(page.locator('text=Welcome back, Admin User')).toBeVisible();
  });

  test('should display dashboard correctly after login', async ({ page }) => {
    // Login first
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Check dashboard elements
    await expect(page.locator('text=CRM Dashboard')).toBeVisible();
    await expect(page.locator('text=Total Leads')).toBeVisible();
    await expect(page.locator('text=New Leads')).toBeVisible();
    await expect(page.locator('text=Scheduled')).toBeVisible();
    await expect(page.locator('text=Completed')).toBeVisible();

    // Check recent leads section
    await expect(page.locator('text=Recent Leads')).toBeVisible();
    await expect(page.locator('text=Sarah Johnson')).toBeVisible();
    await expect(page.locator('text=Carlton')).toBeVisible();
  });

  test('should logout successfully', async ({ page }) => {
    // Login first
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Click logout button
    await page.click('text=Logout');

    // Should redirect to login page
    await expect(page).toHaveURL('/admin/login');
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
  });

  test('should protect admin routes when not authenticated', async ({ page }) => {
    // Try to access dashboard without authentication
    await page.goto('/admin/dashboard');

    // Should redirect to login page
    await expect(page).toHaveURL('/admin/login');
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
  });

  test('should be mobile responsive', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/admin/login');

    // Check mobile layout
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toHaveCSS('min-height', '44px'); // Touch-friendly button

    // Test login on mobile
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Check dashboard on mobile
    await expect(page).toHaveURL('/admin/dashboard');
    await expect(page.locator('text=CRM Dashboard')).toBeVisible();
  });

  test('should handle form validation', async ({ page }) => {
    await page.goto('/admin/login');

    // Try to submit empty form
    await page.click('button[type="submit"]');

    // HTML5 validation should prevent submission
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toHaveAttribute('required');

    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toHaveAttribute('required');
  });
});