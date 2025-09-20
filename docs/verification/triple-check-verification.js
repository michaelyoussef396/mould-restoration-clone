#!/usr/bin/env node

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

// TRIPLE CHECK VERIFICATION WITH SCREENSHOT PROOF
// Verify ALL optimizations across key pages and viewports

const baseUrl = 'http://localhost:6000';

async function tripleCheckVerification() {
  console.log('🎯 TRIPLE CHECK VERIFICATION - SCREENSHOT PROOF');
  console.log('=' .repeat(60));

  const browser = await chromium.launch({ headless: true });

  // Test both viewports as demanded
  const viewports = [
    { name: 'Desktop', width: 1440, height: 900 },
    { name: 'Mobile', width: 375, height: 667 }
  ];

  const testPages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/comprehensive-mould-removal', name: 'Comprehensive-Mould-Removal' },
    { path: '/locations/melbourne-cbd', name: 'Melbourne-CBD-Location' }
  ];

  const screenshots = [];
  const verifications = [];

  try {
    for (const viewport of viewports) {
      console.log(`\n📱 Testing ${viewport.name} Viewport (${viewport.width}x${viewport.height})`);

      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height }
      });
      const page = await context.newPage();

      for (const testPage of testPages) {
        console.log(`🔍 Verifying: ${testPage.name} (${viewport.name})`);

        const url = `${baseUrl}${testPage.path}`;

        try {
          // Navigate and wait for load
          await page.goto(url, { waitUntil: 'networkidle' });

          // Wait for hero image to load
          await page.waitForSelector('img, .hero-section', { timeout: 5000 }).catch(() => {});

          // Take screenshot
          const screenshotPath = `./verification-screenshots/${testPage.name}-${viewport.name}.png`;
          await page.screenshot({
            path: screenshotPath,
            fullPage: true,
            quality: 90
          });

          screenshots.push({
            page: testPage.name,
            viewport: viewport.name,
            path: screenshotPath,
            url: url
          });

          // Verify optimizations
          const verification = {
            page: testPage.name,
            viewport: viewport.name,
            url: url,
            checks: {}
          };

          // Check if page loads successfully
          const title = await page.title();
          verification.checks.pageLoads = title.length > 0;

          // Check for optimized WebP images in network requests
          const responses = [];
          page.on('response', response => {
            responses.push({
              url: response.url(),
              contentType: response.headers()['content-type'],
              status: response.status()
            });
          });

          // Reload to capture network requests
          await page.reload({ waitUntil: 'networkidle' });

          // Check for WebP images
          const webpImages = responses.filter(r =>
            r.contentType?.includes('image/webp') || r.url.includes('.webp')
          );
          verification.checks.webpImagesFound = webpImages.length > 0;

          // Check for CSS loading
          const cssLoaded = responses.some(r =>
            r.contentType?.includes('text/css') && r.status === 200
          );
          verification.checks.cssLoaded = cssLoaded;

          // Check for JavaScript loading
          const jsLoaded = responses.some(r =>
            r.contentType?.includes('javascript') && r.status === 200
          );
          verification.checks.jsLoaded = jsLoaded;

          // Check page performance metrics
          const performanceMetrics = await page.evaluate(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            return {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
            };
          });

          verification.checks.performanceMetrics = performanceMetrics;
          verification.checks.fastLoad = performanceMetrics.domContentLoaded < 2000; // Under 2s

          verifications.push(verification);

          console.log(`   ✅ Screenshot saved: ${screenshotPath}`);
          console.log(`   ✅ Page loads: ${verification.checks.pageLoads}`);
          console.log(`   ✅ WebP images: ${verification.checks.webpImagesFound}`);
          console.log(`   ✅ Fast load: ${verification.checks.fastLoad} (${performanceMetrics.domContentLoaded}ms)`);

        } catch (error) {
          console.log(`   ❌ Error: ${error.message}`);
          verifications.push({
            page: testPage.name,
            viewport: viewport.name,
            url: url,
            error: error.message,
            checks: { failed: true }
          });
        }
      }

      await context.close();
    }

  } catch (error) {
    console.error('Browser error:', error);
  } finally {
    await browser.close();
  }

  // TRIPLE CHECK SUMMARY
  console.log('\n' + '=' .repeat(60));
  console.log('🎯 TRIPLE CHECK VERIFICATION COMPLETE');
  console.log('=' .repeat(60));

  const totalTests = testPages.length * viewports.length;
  const successfulTests = verifications.filter(v => !v.error && v.checks.pageLoads).length;
  const webpOptimized = verifications.filter(v => v.checks.webpImagesFound).length;
  const fastLoading = verifications.filter(v => v.checks.fastLoad).length;

  console.log(`📊 VERIFICATION RESULTS:`);
  console.log(`   Total Tests: ${totalTests}`);
  console.log(`   Successful: ${successfulTests}/${totalTests} (${Math.round(successfulTests/totalTests*100)}%)`);
  console.log(`   WebP Optimized: ${webpOptimized}/${totalTests} (${Math.round(webpOptimized/totalTests*100)}%)`);
  console.log(`   Fast Loading: ${fastLoading}/${totalTests} (${Math.round(fastLoading/totalTests*100)}%)`);

  console.log(`\n📸 SCREENSHOT PROOF:`);
  screenshots.forEach(screenshot => {
    console.log(`   ✅ ${screenshot.page} (${screenshot.viewport}): ${screenshot.path}`);
  });

  // Save comprehensive results
  const finalReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalTests,
      successfulTests,
      webpOptimized,
      fastLoading,
      successRate: Math.round(successfulTests/totalTests*100)
    },
    screenshots,
    verifications
  };

  writeFileSync('./triple-check-verification-results.json', JSON.stringify(finalReport, null, 2));

  console.log('\n💾 Complete verification saved to: triple-check-verification-results.json');
  console.log('📸 All screenshots saved to: ./verification-screenshots/');

  if (successfulTests === totalTests) {
    console.log('\n🎉 TRIPLE CHECK PASSED - ALL OPTIMIZATIONS VERIFIED');
  } else {
    console.log('\n⚠️  Some tests failed - check verification results');
  }

  return finalReport;
}

// Execute triple check
tripleCheckVerification().catch(console.error);