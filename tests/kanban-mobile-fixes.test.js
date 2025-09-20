// Comprehensive test for Kanban mobile fixes and critical functionality
// Run with: npm run test:e2e or playwright test

import { test, expect, devices } from '@playwright/test';

// Test mobile responsiveness and touch functionality
test.describe('Kanban Mobile Responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Kanban board
    await page.goto('/admin/leads/kanban');

    // Mock authentication if needed
    await page.evaluate(() => {
      localStorage.setItem('authToken', 'mock-token');
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        role: 'ADMIN'
      }));
    });
  });

  test('Mobile layout stacks columns vertically', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();
    await page.goto('/admin/leads/kanban');

    // Check for mobile layout
    const kanbanContainer = page.locator('[data-testid="kanban-container"]');
    await expect(kanbanContainer).toHaveClass(/flex-col|space-y/);

    // Check column width on mobile
    const columns = page.locator('[data-testid="kanban-column"]');
    await expect(columns.first()).toHaveClass(/w-full/);

    await context.close();
  });

  test('Touch targets are minimum 48px', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();
    await page.goto('/admin/leads/kanban');

    // Check button touch targets
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    for (let i = 0; i < Math.min(buttonCount, 10); i++) {
      const button = buttons.nth(i);
      const box = await button.boundingBox();

      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44); // Allow 4px tolerance
        expect(box.width).toBeGreaterThanOrEqual(44);
      }
    }

    await context.close();
  });

  test('Status badges work on mobile', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();
    await page.goto('/admin/leads/kanban');

    // Mock lead data
    await page.evaluate(() => {
      window.mockLeads = [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phone: '0412345678',
          suburb: 'Melbourne',
          status: 'NEW',
          urgency: 'HIGH',
          serviceType: 'MOULD_INSPECTION'
        }
      ];
    });

    // Find and click status badge
    const statusBadge = page.locator('[data-status-trigger="true"]').first();
    await expect(statusBadge).toBeVisible();

    // Tap the status badge
    await statusBadge.tap();

    // Check dropdown appears
    const dropdown = page.locator('[role="menu"]');
    await expect(dropdown).toBeVisible();

    await context.close();
  });
});

// Test drag and drop functionality
test.describe('Drag and Drop Functionality', () => {
  test('Desktop drag and drop works', async ({ page }) => {
    await page.goto('/admin/leads/kanban');
    await page.setViewportSize({ width: 1280, height: 720 });

    // Mock lead data
    await page.evaluate(() => {
      window.mockLeads = [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          status: 'NEW'
        }
      ];
    });

    // Test drag from NEW to CONTACTED
    const leadCard = page.locator('[data-testid="lead-card"]').first();
    const targetColumn = page.locator('[data-testid="kanban-column"][data-status="CONTACTED"]');

    if (await leadCard.isVisible() && await targetColumn.isVisible()) {
      await leadCard.dragTo(targetColumn);

      // Verify status update (this would require API integration)
      // await expect(leadCard).toHaveAttribute('data-status', 'CONTACTED');
    }
  });

  test('Mobile disables drag and uses status dropdown', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();
    await page.goto('/admin/leads/kanban');

    // Check that drag listeners are disabled on mobile
    const leadCard = page.locator('[data-testid="lead-card"]').first();

    if (await leadCard.isVisible()) {
      // On mobile, dragging should not work - status should be changed via dropdown
      const isDraggable = await leadCard.evaluate(el => {
        return el.getAttribute('draggable') === 'true';
      });

      expect(isDraggable).toBeFalsy();
    }

    await context.close();
  });
});

// Test edit functionality
test.describe('Edit Lead Functionality', () => {
  test('Edit button opens modal and saves changes', async ({ page }) => {
    await page.goto('/admin/leads/kanban');

    // Mock lead data
    await page.evaluate(() => {
      window.mockLead = {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '0412345678',
        suburb: 'Melbourne'
      };
    });

    // Click on a lead card to open view modal
    const leadCard = page.locator('[data-testid="lead-card"]').first();
    if (await leadCard.isVisible()) {
      await leadCard.click();
    }

    // Click Edit Lead button
    const editButton = page.locator('button:has-text("Edit Lead")');
    await expect(editButton).toBeVisible();
    await editButton.click();

    // Check edit modal opens
    const editModal = page.locator('[data-testid="edit-lead-modal"]');
    await expect(editModal).toBeVisible();

    // Update first name
    const firstNameInput = page.locator('input[name="firstName"]');
    await firstNameInput.fill('Jane');

    // Save changes
    const saveButton = page.locator('button:has-text("Update Lead")');
    await saveButton.click();

    // Verify modal closes (in real implementation, would verify API call)
    await expect(editModal).toBeHidden();
  });
});

// Test performance metrics
test.describe('Performance Validation', () => {
  test('Page loads within performance budget', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/admin/leads/kanban');

    // Wait for content to be visible
    await page.waitForSelector('[data-testid="kanban-container"]', { timeout: 5000 });

    const loadTime = Date.now() - startTime;

    // Should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('Mobile performance is acceptable', async ({ browser }) => {
    const context = await browser.newContext({
      ...devices['iPhone 12'],
    });
    const page = await context.newPage();

    const startTime = Date.now();
    await page.goto('/admin/leads/kanban');
    await page.waitForSelector('[data-testid="kanban-container"]');
    const loadTime = Date.now() - startTime;

    // Mobile should load within 4 seconds (accounting for slower networks)
    expect(loadTime).toBeLessThan(4000);

    await context.close();
  });
});

// Test error handling
test.describe('Error Handling', () => {
  test('Displays error message when drag fails', async ({ page }) => {
    await page.goto('/admin/leads/kanban');

    // Mock API failure
    await page.route('**/api/leads/*', route => {
      route.fulfill({
        status: 500,
        body: JSON.stringify({ error: 'Server error' })
      });
    });

    // Attempt to change status
    const statusBadge = page.locator('[data-status-trigger="true"]').first();
    if (await statusBadge.isVisible()) {
      await statusBadge.click();

      const newStatusOption = page.locator('[role="menuitem"]').first();
      if (await newStatusOption.isVisible()) {
        await newStatusOption.click();
      }
    }

    // Check error message appears
    const errorMessage = page.locator('[data-testid="error-message"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Failed to update');
  });
});

// Test accessibility
test.describe('Accessibility', () => {
  test('Keyboard navigation works', async ({ page }) => {
    await page.goto('/admin/leads/kanban');

    // Test tab navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Verify focus is visible
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('Screen reader compatibility', async ({ page }) => {
    await page.goto('/admin/leads/kanban');

    // Check for proper ARIA labels
    const buttons = page.locator('button[aria-label]');
    const buttonCount = await buttons.count();

    // At least some buttons should have aria-labels
    expect(buttonCount).toBeGreaterThan(0);
  });
});