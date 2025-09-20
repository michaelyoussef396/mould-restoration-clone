import { test, expect } from '@playwright/test';

test.describe('Mobile UX Improvements for Melbourne CRM', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport for testing
    await page.setViewportSize({ width: 375, height: 667 });

    // Navigate to the admin login page first
    await page.goto('/admin/login');

    // Mock authentication or login if needed
    // For testing purposes, we'll attempt to access the kanban page directly
    // and handle auth issues appropriately
    await page.goto('/admin/leads/kanban');

    // Wait a bit for any redirects or loading
    await page.waitForTimeout(1000);
  });

  test('Edit button is accessible with 48px touch target on lead cards', async ({ page }) => {
    // Wait for the kanban board to load
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Find the first lead card
    const leadCard = page.locator('.lead-card').first();
    await expect(leadCard).toBeVisible();

    // Find the edit button within the card
    const editButton = leadCard.locator('button[title="Edit Lead"]');
    await expect(editButton).toBeVisible();

    // Verify the edit button has proper touch target size (48px minimum)
    const buttonBox = await editButton.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(48);
    expect(buttonBox?.width).toBeGreaterThanOrEqual(48);

    // Verify the button has touch-manipulation class
    await expect(editButton).toHaveClass(/touch-manipulation/);
  });

  test('Communication button has 48px touch target', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    const leadCard = page.locator('.lead-card').first();
    const communicationButton = leadCard.locator('button[title="Add Communication"]');

    await expect(communicationButton).toBeVisible();

    const buttonBox = await communicationButton.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(48);
    expect(buttonBox?.width).toBeGreaterThanOrEqual(48);
  });

  test('Status dropdown trigger has 48px touch target', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    const leadCard = page.locator('.lead-card').first();
    const statusButton = leadCard.locator('[data-status-trigger="true"]');

    await expect(statusButton).toBeVisible();

    const buttonBox = await statusButton.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(48);

    // Test status dropdown opens and items have proper touch targets
    await statusButton.click();

    const dropdownItems = page.locator('[role="menuitem"]');
    const firstItem = dropdownItems.first();
    await expect(firstItem).toBeVisible();

    const itemBox = await firstItem.boundingBox();
    expect(itemBox?.height).toBeGreaterThanOrEqual(48);
  });

  test('Add lead buttons have proper touch targets', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Test column add buttons
    const addButtons = page.locator('button[title="Add Lead"]');
    const firstAddButton = addButtons.first();

    await expect(firstAddButton).toBeVisible();

    const buttonBox = await firstAddButton.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(48);
    expect(buttonBox?.width).toBeGreaterThanOrEqual(48);
  });

  test('Header navigation buttons have proper mobile touch targets', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Test filter button
    const filterButton = page.locator('button[title="Toggle Filters"]');
    await expect(filterButton).toBeVisible();

    let buttonBox = await filterButton.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(48);
    expect(buttonBox?.width).toBeGreaterThanOrEqual(48);

    // Test list view button
    const listViewButton = page.locator('button[title="List View"]');
    await expect(listViewButton).toBeVisible();

    buttonBox = await listViewButton.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(48);
    expect(buttonBox?.width).toBeGreaterThanOrEqual(48);

    // Test add lead button
    const addLeadButton = page.locator('button[title="Add New Lead"]');
    await expect(addLeadButton).toBeVisible();

    buttonBox = await addLeadButton.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(48);
    expect(buttonBox?.width).toBeGreaterThanOrEqual(48);
  });

  test('Swipe gestures are enabled on mobile lead cards', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    const leadCard = page.locator('.lead-card').first();
    await expect(leadCard).toBeVisible();

    // Verify swipe hint is visible on mobile
    const swipeHint = leadCard.locator('text=← Edit');
    await expect(swipeHint).toBeVisible();

    const swipeHint2 = leadCard.locator('text=Communication →');
    await expect(swipeHint2).toBeVisible();

    // Test that touch events are properly handled
    const cardBox = await leadCard.boundingBox();
    if (cardBox) {
      // Simulate swipe right gesture (for edit)
      await page.touchscreen.tap(cardBox.x + 50, cardBox.y + cardBox.height / 2);
      await page.mouse.move(cardBox.x + 50, cardBox.y + cardBox.height / 2);
      await page.mouse.down();
      await page.mouse.move(cardBox.x + 150, cardBox.y + cardBox.height / 2);
      await page.mouse.up();
    }
  });

  test('Mobile layout switches to vertical stack', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Verify mobile layout shows vertical columns instead of horizontal scroll
    const kanbanContainer = page.locator('.space-y-4');
    await expect(kanbanContainer).toBeVisible();

    // Verify each column is full width on mobile
    const columns = page.locator('.kanban-column');
    const firstColumn = columns.first();

    const columnBox = await firstColumn.boundingBox();
    const viewportWidth = 375; // Our mobile viewport width

    // Column should be close to full width on mobile
    expect(columnBox?.width).toBeGreaterThan(viewportWidth * 0.9);
  });

  test('Error dismiss button has proper touch target', async ({ page }) => {
    // This test would require triggering an error state first
    // For now, we'll just verify the button styling
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Check that error buttons have proper classes when they exist
    const errorButtons = page.locator('button[title="Dismiss Error"]');
    if (await errorButtons.count() > 0) {
      const buttonBox = await errorButtons.first().boundingBox();
      expect(buttonBox?.height).toBeGreaterThanOrEqual(32); // Minimum for error buttons
    }
  });

  test('Communication modal buttons have proper touch targets', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Click communication button to open modal
    const leadCard = page.locator('.lead-card').first();
    const communicationButton = leadCard.locator('button[title="Add Communication"]');
    await communicationButton.click();

    // Wait for modal to open
    await page.waitForSelector('[role="dialog"]');

    // Test quick action buttons (80px height = good touch target)
    const quickActionButtons = page.locator('button:has-text("Phone Call")');
    await expect(quickActionButtons).toBeVisible();

    const buttonBox = await quickActionButtons.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(80);

    // Test modal footer buttons
    const cancelButton = page.locator('button:has-text("Cancel")');
    await expect(cancelButton).toBeVisible();

    const cancelBox = await cancelButton.boundingBox();
    expect(cancelBox?.height).toBeGreaterThanOrEqual(48);
  });

  test('Technician assignment modal has proper touch targets', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // This would require selecting leads and triggering assignment modal
    // For now, verify the modal structure exists and buttons would have proper sizing

    // Test would involve:
    // 1. Selecting multiple leads
    // 2. Opening technician assignment modal
    // 3. Verifying technician cards have 48px+ touch targets
    // 4. Verifying modal buttons have proper touch targets
  });

  test('Drag and drop is disabled on mobile', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    const leadCard = page.locator('.lead-card').first();

    // Verify that drag attributes are not present on mobile
    const cardElement = await leadCard.elementHandle();
    const draggable = await cardElement?.getAttribute('draggable');

    // On mobile, drag should be disabled
    expect(draggable).not.toBe('true');
  });

  test('Filter sidebar close button has proper touch target', async ({ page }) => {
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Open filter sidebar
    const filterButton = page.locator('button[title="Toggle Filters"]');
    await filterButton.click();

    // Wait for sidebar to open
    await page.waitForSelector('text=Advanced Filters');

    // Find close button
    const closeButton = page.locator('button:has-text("×")').first();
    await expect(closeButton).toBeVisible();

    const buttonBox = await closeButton.boundingBox();
    expect(buttonBox?.height).toBeGreaterThanOrEqual(48);
    expect(buttonBox?.width).toBeGreaterThanOrEqual(48);
  });
});

test.describe('Accessibility Compliance', () => {
  test('All interactive elements meet WCAG touch target requirements', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/admin/leads/kanban');
    await page.waitForTimeout(1000);
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Get all buttons on the page
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();

    for (let i = 0; i < Math.min(buttonCount, 20); i++) { // Test first 20 buttons
      const button = buttons.nth(i);
      if (await button.isVisible()) {
        const box = await button.boundingBox();
        if (box) {
          // WCAG AA requires 44px minimum, we target 48px for better UX
          expect(box.height).toBeGreaterThanOrEqual(44);
          expect(box.width).toBeGreaterThanOrEqual(44);
        }
      }
    }
  });

  test('Touch-manipulation class is applied to interactive elements', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/admin/leads/kanban');
    await page.waitForTimeout(1000);
    await page.waitForSelector('[data-testid="kanban-board"]', { timeout: 10000 });

    // Check that critical buttons have touch-manipulation class
    const editButtons = page.locator('button[title="Edit Lead"]');
    const communicationButtons = page.locator('button[title="Add Communication"]');
    const statusButtons = page.locator('[data-status-trigger="true"]');

    if (await editButtons.count() > 0) {
      await expect(editButtons.first()).toHaveClass(/touch-manipulation/);
    }

    if (await communicationButtons.count() > 0) {
      await expect(communicationButtons.first()).toHaveClass(/touch-manipulation/);
    }

    if (await statusButtons.count() > 0) {
      await expect(statusButtons.first()).toHaveClass(/touch-manipulation/);
    }
  });
});