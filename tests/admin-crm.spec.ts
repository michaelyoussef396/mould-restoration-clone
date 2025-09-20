import { test, expect } from '@playwright/test';

test.describe('Admin CRM System', () => {
  test.beforeEach(async ({ page }) => {
    // Clear any existing authentication
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.clear();
    });
  });

  test('should display CRM dashboard with real data after login', async ({ page }) => {
    await page.goto('/admin/login');

    // Login with admin credentials
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Should redirect to dashboard
    await expect(page).toHaveURL('/admin/dashboard');
    await expect(page.locator('text=CRM Dashboard')).toBeVisible();

    // Check if real dashboard stats are loaded (not the mock data)
    await expect(page.locator('text=Total Leads')).toBeVisible();
    await expect(page.locator('text=New Leads')).toBeVisible();
    await expect(page.locator('text=Scheduled')).toBeVisible();
    await expect(page.locator('text=Completed')).toBeVisible();

    // Check if real leads are displayed
    await expect(page.locator('text=Recent Leads')).toBeVisible();
    await expect(page.locator('text=Sarah Johnson')).toBeVisible();
    await expect(page.locator('text=Carlton')).toBeVisible();

    // Check navigation buttons
    await expect(page.locator('text=Manage Leads')).toBeVisible();
    await expect(page.locator('text=View All')).toBeVisible();
  });

  test('should navigate to leads page and display lead management interface', async ({ page }) => {
    // Login first
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Navigate to leads page
    await page.click('text=Manage Leads');
    await expect(page).toHaveURL('/admin/leads');

    // Check leads page elements
    await expect(page.locator('text=Lead Management')).toBeVisible();
    await expect(page.locator('text=Manage and track all your customer inquiries')).toBeVisible();
    await expect(page.locator('text=Add Lead')).toBeVisible();

    // Check if search and filter elements are present
    await expect(page.locator('input[placeholder*="Search leads"]')).toBeVisible();
    await expect(page.locator('text=All Status')).toBeVisible();

    // Check if stats cards are displayed
    await expect(page.locator('text=Total Leads')).toBeVisible();
    await expect(page.locator('text=New Leads')).toBeVisible();
    await expect(page.locator('text=Converted')).toBeVisible();
    await expect(page.locator('text=Total Value')).toBeVisible();

    // Check if leads table is displayed with actual data
    await expect(page.locator('text=Name')).toBeVisible();
    await expect(page.locator('text=Contact')).toBeVisible();
    await expect(page.locator('text=Location')).toBeVisible();
    await expect(page.locator('text=Service')).toBeVisible();
    await expect(page.locator('text=Status')).toBeVisible();

    // Check for actual lead data from seeded database
    await expect(page.locator('text=Sarah Johnson')).toBeVisible();
    await expect(page.locator('text=Michael Chen')).toBeVisible();
    await expect(page.locator('text=Emma Wilson')).toBeVisible();
  });

  test('should open create lead dialog and handle form submission', async ({ page }) => {
    // Login and navigate to leads page
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.click('text=Manage Leads');

    // Click Add Lead button
    await page.click('text=Add Lead');

    // Check if dialog opens
    await expect(page.locator('text=Create New Lead')).toBeVisible();
    await expect(page.locator('text=Add a new lead to the CRM system')).toBeVisible();

    // Fill in the form
    await page.fill('#firstName', 'Test');
    await page.fill('#lastName', 'Customer');
    await page.fill('#email', 'test@example.com');
    await page.fill('#phone', '0400 123 456');
    await page.fill('#suburb', 'Melbourne');
    await page.fill('#postcode', '3000');
    await page.fill('#address', '123 Test Street');

    // Select service type
    await page.click('select[name="serviceType"] + button');
    await page.click('text=Complete Removal');

    // Select urgency
    await page.click('select[name="urgency"] + button');
    await page.click('text=High');

    // Add notes
    await page.fill('#notes', 'Test lead created from Playwright test');

    // Add estimated value
    await page.fill('#estimatedValue', '1500');

    // Submit the form
    await page.click('button[type="submit"]');

    // Dialog should close and new lead should appear in the list
    await expect(page.locator('text=Create New Lead')).not.toBeVisible();
    await expect(page.locator('text=Test Customer')).toBeVisible();
  });

  test('should filter leads by status', async ({ page }) => {
    // Login and navigate to leads page
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.click('text=Manage Leads');

    // Get initial count of leads
    const initialLeads = await page.locator('tbody tr').count();
    expect(initialLeads).toBeGreaterThan(0);

    // Filter by "New" status
    await page.click('text=All Status');
    await page.click('text=New');

    // Check that filtering works
    await expect(page.locator('text=new')).toBeVisible();

    // Filter by "Qualified" status
    await page.click('text=New');
    await page.click('text=Qualified');

    // Should show different results
    await expect(page.locator('text=qualified')).toBeVisible();
  });

  test('should search leads by name and email', async ({ page }) => {
    // Login and navigate to leads page
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.click('text=Manage Leads');

    // Search for Sarah Johnson
    await page.fill('input[placeholder*="Search leads"]', 'Sarah');
    await expect(page.locator('text=Sarah Johnson')).toBeVisible();

    // Clear search and search by email
    await page.fill('input[placeholder*="Search leads"]', '');
    await page.fill('input[placeholder*="Search leads"]', 'chen.michael');
    await expect(page.locator('text=Michael Chen')).toBeVisible();
    await expect(page.locator('text=Sarah Johnson')).not.toBeVisible();
  });

  test('should handle lead actions dropdown', async ({ page }) => {
    // Login and navigate to leads page
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.click('text=Manage Leads');

    // Wait for leads to load
    await expect(page.locator('text=Sarah Johnson')).toBeVisible();

    // Click on the first actions dropdown (More Horizontal icon)
    const firstActionsButton = page.locator('tbody tr').first().locator('button').last();
    await firstActionsButton.click();

    // Check dropdown options
    await expect(page.locator('text=View Details')).toBeVisible();
    await expect(page.locator('text=Edit Lead')).toBeVisible();
    await expect(page.locator('text=Delete Lead')).toBeVisible();
  });

  test('should handle delete lead functionality', async ({ page }) => {
    // Login and navigate to leads page
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await page.click('text=Manage Leads');

    // First create a test lead to delete
    await page.click('text=Add Lead');
    await page.fill('#firstName', 'Delete');
    await page.fill('#lastName', 'Test');
    await page.fill('#email', 'delete@test.com');
    await page.fill('#phone', '0400 999 888');
    await page.fill('#suburb', 'TestSuburb');
    await page.click('button[type="submit"]');

    // Wait for the new lead to appear
    await expect(page.locator('text=Delete Test')).toBeVisible();

    // Find the row with the test lead and click delete
    const testLeadRow = page.locator('tbody tr').filter({ hasText: 'Delete Test' });
    await testLeadRow.locator('button').last().click();
    await page.click('text=Delete Lead');

    // Handle the confirmation dialog
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toContain('Are you sure you want to delete this lead?');
      await dialog.accept();
    });

    // Verify lead is removed
    await expect(page.locator('text=Delete Test')).not.toBeVisible();
  });

  test('should be mobile responsive', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Login and test mobile layout
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Check dashboard mobile layout
    await expect(page.locator('text=CRM Dashboard')).toBeVisible();
    await expect(page.locator('text=Manage Leads')).toBeVisible();

    // Navigate to leads page
    await page.click('text=Manage Leads');
    await expect(page.locator('text=Lead Management')).toBeVisible();

    // Test create lead dialog on mobile
    await page.click('text=Add Lead');
    await expect(page.locator('text=Create New Lead')).toBeVisible();

    // Form should be scrollable on mobile
    await page.fill('#firstName', 'Mobile');
    await page.fill('#lastName', 'Test');
    await page.fill('#email', 'mobile@test.com');
    await page.fill('#phone', '0400 111 222');
    await page.fill('#suburb', 'MobileSuburb');

    // Dialog should have proper mobile layout
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
  });

  test('should persist authentication across page reloads', async ({ page }) => {
    // Login
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/admin/dashboard');

    // Reload the page
    await page.reload();

    // Should still be on dashboard (authentication persisted)
    await expect(page).toHaveURL('/admin/dashboard');
    await expect(page.locator('text=CRM Dashboard')).toBeVisible();

    // Navigate to leads page
    await page.goto('/admin/leads');
    await expect(page.locator('text=Lead Management')).toBeVisible();

    // Reload leads page
    await page.reload();
    await expect(page.locator('text=Lead Management')).toBeVisible();
  });

  test('should protect admin routes when not authenticated', async ({ page }) => {
    // Try to access dashboard without authentication
    await page.goto('/admin/dashboard');

    // Should redirect to login page
    await expect(page).toHaveURL('/admin/login');
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();

    // Try to access leads page without authentication
    await page.goto('/admin/leads');

    // Should redirect to login page
    await expect(page).toHaveURL('/admin/login');
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
  });

  test('should logout successfully from dashboard', async ({ page }) => {
    // Login first
    await page.goto('/admin/login');
    await page.fill('input[type="email"]', 'admin@mouldandrestoration.com.au');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/admin/dashboard');

    // Click logout
    await page.click('text=Logout');

    // Should redirect to login page
    await expect(page).toHaveURL('/admin/login');
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();

    // Try to access protected route - should stay on login
    await page.goto('/admin/dashboard');
    await expect(page).toHaveURL('/admin/login');
  });
});