import { test } from '@playwright/test';

test('Analyze Call Now button colors in mobile menu', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  
  await page.goto('http://localhost:8085');
  
  // Wait for navigation
  await page.waitForSelector('nav', { state: 'visible' });
  
  // Open mobile menu
  await page.click('button[aria-label*="Open navigation menu"]');
  
  // Wait for menu to open
  await page.waitForTimeout(500);
  
  // Take full page screenshot
  await page.screenshot({
    path: 'mobile-menu-full.png',
    fullPage: true
  });
  
  // Get the Call Now button (the one in the mobile menu quick actions)
  const callNowButton = page.locator('a[href="tel:1800954117"]').filter({ hasText: 'Call Now: 1800 954 117' });
  
  // Get computed styles
  const styles = await callNowButton.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      backgroundColor: computed.backgroundColor,
      color: computed.color,
      borderColor: computed.borderColor,
      borderWidth: computed.borderWidth,
      borderStyle: computed.borderStyle,
      display: computed.display,
      classes: el.className
    };
  });
  
  console.log('=== Call Now Button Computed Styles ===');
  console.log(JSON.stringify(styles, null, 2));
});
