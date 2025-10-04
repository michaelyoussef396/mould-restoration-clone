import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation Design Review', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport - iPhone SE dimensions
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('Capture mobile navbar closed state', async ({ page }) => {
    await page.goto('http://localhost:8085');

    // Wait for navigation to be visible
    await page.waitForSelector('nav', { state: 'visible' });

    // Take screenshot of navbar in closed state
    await page.screenshot({
      path: 'mobile-navbar-closed.png',
      fullPage: false
    });
  });

  test('Capture mobile navbar open state with Call Now button', async ({ page }) => {
    await page.goto('http://localhost:8085');

    // Wait for navigation to be visible
    await page.waitForSelector('nav', { state: 'visible' });

    // Click the mobile menu button
    await page.click('button[aria-label*="Open navigation menu"]');

    // Wait for mobile menu to open
    await page.waitForSelector('text=Call Now: 1800 954 117', { state: 'visible' });

    // Take screenshot of open mobile menu
    await page.screenshot({
      path: 'mobile-navbar-open.png',
      fullPage: true
    });
  });

  test('Capture Call Now button close-up', async ({ page }) => {
    await page.goto('http://localhost:8085');

    // Wait for navigation to be visible
    await page.waitForSelector('nav', { state: 'visible' });

    // Click the mobile menu button
    await page.click('button[aria-label*="Open navigation menu"]');

    // Wait for mobile menu to open
    await page.waitForSelector('text=Call Now: 1800 954 117', { state: 'visible' });

    // Locate the Call Now button
    const callNowButton = page.locator('a[href="tel:1800954117"]');

    // Take screenshot of the Call Now button area
    await callNowButton.screenshot({
      path: 'call-now-button-closeup.png'
    });

    // Get computed styles
    const styles = await callNowButton.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        borderColor: computed.borderColor,
        borderWidth: computed.borderWidth,
        padding: computed.padding,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight
      };
    });

    console.log('Call Now Button Styles:', styles);
  });

  test('Capture hover state of Call Now button', async ({ page }) => {
    await page.goto('http://localhost:8085');

    // Wait for navigation to be visible
    await page.waitForSelector('nav', { state: 'visible' });

    // Click the mobile menu button
    await page.click('button[aria-label*="Open navigation menu"]');

    // Wait for mobile menu to open
    await page.waitForSelector('text=Call Now: 1800 954 117', { state: 'visible' });

    // Locate the Call Now button
    const callNowButton = page.locator('a[href="tel:1800954117"]');

    // Hover over the button
    await callNowButton.hover();

    // Take screenshot of hover state
    await callNowButton.screenshot({
      path: 'call-now-button-hover.png'
    });
  });

  test('Inspect all mobile navbar button colors', async ({ page }) => {
    await page.goto('http://localhost:8085');

    // Wait for navigation to be visible
    await page.waitForSelector('nav', { state: 'visible' });

    // Click the mobile menu button
    await page.click('button[aria-label*="Open navigation menu"]');

    // Wait for mobile menu to open
    await page.waitForSelector('text=Call Now: 1800 954 117', { state: 'visible' });

    // Get all buttons in the mobile menu
    const contactButton = page.locator('a[href="/contact"]').first();
    const callNowButton = page.locator('a[href="tel:1800954117"]');

    // Get computed styles for Contact Us button
    const contactStyles = await contactButton.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        text: el.textContent
      };
    });

    // Get computed styles for Call Now button
    const callNowStyles = await callNowButton.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        backgroundColor: computed.backgroundColor,
        color: computed.color,
        borderColor: computed.borderColor,
        text: el.textContent
      };
    });

    console.log('Contact Us Button:', contactStyles);
    console.log('Call Now Button:', callNowStyles);
  });
});
