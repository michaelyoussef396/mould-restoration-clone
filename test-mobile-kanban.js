#!/usr/bin/env node

// Quick mobile testing script for Kanban fixes
const { chromium, devices } = require('playwright');

async function testMobileKanban() {
  console.log('🧪 Testing Mobile Kanban Fixes...\n');

  const browser = await chromium.launch({ headless: false });

  // Test on different mobile devices
  const testDevices = [
    { name: 'iPhone 12', device: devices['iPhone 12'] },
    { name: 'Galaxy S21', device: devices['Galaxy S21'] },
    { name: 'iPad Mini', device: devices['iPad Mini'] }
  ];

  for (const { name, device } of testDevices) {
    console.log(`📱 Testing on ${name}...`);

    const context = await browser.newContext(device);
    const page = await context.newPage();

    try {
      // Navigate to Kanban board
      await page.goto('http://localhost:3000/admin/leads/kanban', {
        waitUntil: 'networkidle',
        timeout: 10000
      });

      // Check for mobile layout
      const isMobileLayout = await page.evaluate(() => {
        const container = document.querySelector('[class*="space-y"]');
        return container !== null;
      });

      // Check touch target sizes
      const buttons = await page.locator('button').all();
      let validTouchTargets = 0;

      for (const button of buttons.slice(0, 5)) { // Test first 5 buttons
        const box = await button.boundingBox();
        if (box && box.height >= 44 && box.width >= 44) {
          validTouchTargets++;
        }
      }

      // Check text readability
      const hasReadableText = await page.evaluate(() => {
        const elements = document.querySelectorAll('h1, h2, h3, p, span');
        let readableCount = 0;

        for (const el of Array.from(elements).slice(0, 10)) {
          const styles = window.getComputedStyle(el);
          const fontSize = parseFloat(styles.fontSize);
          if (fontSize >= 14) readableCount++;
        }

        return readableCount > 5;
      });

      // Results
      console.log(`  ✅ Mobile layout: ${isMobileLayout ? 'PASS' : 'FAIL'}`);
      console.log(`  ✅ Touch targets: ${validTouchTargets}/5 valid`);
      console.log(`  ✅ Text readability: ${hasReadableText ? 'PASS' : 'FAIL'}`);

      // Take screenshot
      await page.screenshot({
        path: `./mobile-test-${name.toLowerCase().replace(' ', '-')}.png`,
        fullPage: true
      });

    } catch (error) {
      console.log(`  ❌ Error testing ${name}: ${error.message}`);
    }

    await context.close();
  }

  // Test desktop drag and drop
  console.log('\n🖥️  Testing Desktop Drag & Drop...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });

  const desktopPage = await desktopContext.newPage();

  try {
    await desktopPage.goto('http://localhost:3000/admin/leads/kanban', {
      waitUntil: 'networkidle',
      timeout: 10000
    });

    // Check for horizontal layout on desktop
    const isDesktopLayout = await desktopPage.evaluate(() => {
      const container = document.querySelector('[class*="flex"][class*="space-x"]');
      return container !== null;
    });

    console.log(`  ✅ Desktop layout: ${isDesktopLayout ? 'PASS' : 'FAIL'}`);

    await desktopPage.screenshot({
      path: './desktop-test.png',
      fullPage: true
    });

  } catch (error) {
    console.log(`  ❌ Error testing desktop: ${error.message}`);
  }

  await desktopContext.close();
  await browser.close();

  console.log('\n🎉 Mobile testing complete! Check the screenshots for visual verification.');
}

// Run the test
testMobileKanban().catch(console.error);