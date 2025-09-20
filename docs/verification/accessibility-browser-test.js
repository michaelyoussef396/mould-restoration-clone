/**
 * Browser-based Accessibility Testing for Professional Health Service Color Palette
 * Tests the actual website implementation for WCAG compliance
 */

const { chromium } = require('playwright');
const path = require('path');

async function testWebsiteAccessibility() {
  console.log('🚀 Starting Browser-Based Accessibility Testing...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  try {
    // Navigate to the website
    console.log('📍 Navigating to website...');
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle' });

    // Inject accessibility testing utilities
    await page.addScriptTag({
      content: `
        // Color palette from CSS variables
        const colorPalette = {
          'primary-blue': '#3066be',
          'columbia-blue': '#cce6f4',
          'success-green': '#10b981',
          'professional-gray': '#64748b',
          'clean-white': '#ffffff',
          'charcoal': '#1f2937',
          'primary-hover': '#2563eb',
          'light-gray': '#f1f5f9',
          'border-gray': '#e2e8f0',
          'warning-yellow': '#f59e0b',
          'error-red': '#ef4444'
        };

        // Contrast ratio calculation
        function hexToRgb(hex) {
          const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
        }

        function getRelativeLuminance(rgb) {
          const { r, g, b } = rgb;
          const rsRGB = r / 255;
          const gsRGB = g / 255;
          const bsRGB = b / 255;
          const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
          const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
          const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
          return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
        }

        function getContrastRatio(color1, color2) {
          const rgb1 = hexToRgb(color1);
          const rgb2 = hexToRgb(color2);
          if (!rgb1 || !rgb2) return 0;
          const lum1 = getRelativeLuminance(rgb1);
          const lum2 = getRelativeLuminance(rgb2);
          const brightest = Math.max(lum1, lum2);
          const darkest = Math.min(lum1, lum2);
          return (brightest + 0.05) / (darkest + 0.05);
        }

        // Test accessibility of actual elements
        window.testElementAccessibility = function() {
          const results = [];

          // Get computed styles for key elements
          const elementsToTest = [
            { selector: 'nav.bg-primary', description: 'Navigation background' },
            { selector: 'nav a', description: 'Navigation links' },
            { selector: '.bg-primary', description: 'Primary buttons' },
            { selector: '.text-charcoal', description: 'Charcoal headings' },
            { selector: '.text-professional', description: 'Professional gray text' },
            { selector: '.text-success', description: 'Success indicators' },
            { selector: '.bg-columbia-blue', description: 'Columbia blue sections' }
          ];

          elementsToTest.forEach(test => {
            const elements = document.querySelectorAll(test.selector);
            elements.forEach((element, index) => {
              const styles = window.getComputedStyle(element);
              const bgColor = styles.backgroundColor;
              const textColor = styles.color;

              results.push({
                selector: test.selector + (index > 0 ? \`[\${index}]\` : ''),
                description: test.description,
                backgroundColor: bgColor,
                textColor: textColor,
                fontSize: styles.fontSize,
                fontWeight: styles.fontWeight
              });
            });
          });

          return results;
        };

        // Test focus indicators
        window.testFocusIndicators = function() {
          const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
          const results = [];

          focusableElements.forEach((element, index) => {
            if (index < 10) { // Test first 10 elements
              element.focus();
              const styles = window.getComputedStyle(element, ':focus');
              results.push({
                element: element.tagName.toLowerCase(),
                outline: styles.outline,
                outlineColor: styles.outlineColor,
                boxShadow: styles.boxShadow
              });
            }
          });

          return results;
        };

        // Color blindness simulation
        window.simulateColorBlindness = function(type = 'deuteranopia') {
          const filter = type === 'deuteranopia' ?
            'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'deuteranopia\\'%3E%3CfeColorMatrix values=\\'0.625 0.375 0   0 0 0.7   0.3   0   0 0 0     0.3   0.7 0 0 0     0     0   1 0\\'/%3E%3C/filter%3E%3C/svg%3E#deuteranopia")' :
            'none';
          document.documentElement.style.filter = filter;
          return filter !== 'none';
        };
      `
    });

    // Take baseline screenshots
    console.log('📸 Capturing baseline screenshots...');
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/accessibility-baseline-desktop.png',
      fullPage: true
    });

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/accessibility-baseline-mobile.png',
      fullPage: true
    });

    // Reset viewport
    await page.setViewportSize({ width: 1440, height: 900 });

    // Test actual element accessibility
    console.log('🔍 Testing element accessibility...');
    const elementResults = await page.evaluate(() => window.testElementAccessibility());

    console.log('\n📊 ELEMENT ACCESSIBILITY RESULTS');
    console.log('─────────────────────────────────');
    elementResults.forEach(result => {
      console.log(`${result.description}:`);
      console.log(`   Selector: ${result.selector}`);
      console.log(`   Background: ${result.backgroundColor}`);
      console.log(`   Text Color: ${result.textColor}`);
      console.log(`   Font Size: ${result.fontSize}\n`);
    });

    // Test focus indicators
    console.log('👆 Testing focus indicators...');
    const focusResults = await page.evaluate(() => window.testFocusIndicators());

    console.log('\n🎯 FOCUS INDICATOR RESULTS');
    console.log('──────────────────────────');
    focusResults.forEach((result, index) => {
      console.log(`${result.element} [${index}]:`);
      console.log(`   Outline: ${result.outline}`);
      console.log(`   Box Shadow: ${result.boxShadow}\n`);
    });

    // Test color blindness simulation
    console.log('🌈 Testing color blindness accessibility...');
    await page.evaluate(() => window.simulateColorBlindness('deuteranopia'));
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/accessibility-colorblind-simulation.png',
      fullPage: true
    });

    // Reset filter
    await page.evaluate(() => document.documentElement.style.filter = 'none');

    // Test key navigation patterns
    console.log('⌨️  Testing keyboard navigation...');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/accessibility-keyboard-focus.png',
      fullPage: false
    });

    // Test high contrast needs
    console.log('🔆 Testing high contrast mode...');
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.screenshot({
      path: '/Users/michaelyoussef/APP/mould-restoration-clone/accessibility-high-contrast.png',
      fullPage: true
    });

    // Performance testing for accessibility
    console.log('⚡ Testing performance impact...');
    const metrics = await page.metrics();
    console.log('\n📈 PERFORMANCE METRICS');
    console.log('─────────────────────');
    console.log(`Script duration: ${metrics.ScriptDuration}ms`);
    console.log(`Layout duration: ${metrics.LayoutDuration}ms`);
    console.log(`Paint duration: ${metrics.RecalcStyleDuration}ms\n`);

    console.log('✅ Browser testing completed successfully!');
    console.log('\n📁 Screenshots saved:');
    console.log('   - accessibility-baseline-desktop.png');
    console.log('   - accessibility-baseline-mobile.png');
    console.log('   - accessibility-colorblind-simulation.png');
    console.log('   - accessibility-keyboard-focus.png');
    console.log('   - accessibility-high-contrast.png');

  } catch (error) {
    console.error('❌ Error during testing:', error);
  } finally {
    await browser.close();
  }
}

// Manual contrast ratio verification
function manualContrastVerification() {
  console.log('\n🧮 MANUAL CONTRAST RATIO VERIFICATION');
  console.log('═════════════════════════════════════');

  const colorPalette = {
    'primary-blue': '#3066be',
    'columbia-blue': '#cce6f4',
    'success-green': '#10b981',
    'professional-gray': '#64748b',
    'clean-white': '#ffffff',
    'charcoal': '#1f2937'
  };

  // Key combinations to verify
  const keyTestCombinations = [
    { bg: '#3066be', fg: '#ffffff', name: 'Primary Blue → White (buttons)' },
    { bg: '#ffffff', fg: '#1f2937', name: 'White → Charcoal (headings)' },
    { bg: '#ffffff', fg: '#64748b', name: 'White → Professional Gray (body)' },
    { bg: '#ffffff', fg: '#3066be', name: 'White → Primary Blue (links)' },
    { bg: '#cce6f4', fg: '#1f2937', name: 'Columbia Blue → Charcoal' },
    { bg: '#10b981', fg: '#ffffff', name: 'Success Green → White' }
  ];

  keyTestCombinations.forEach(combo => {
    const ratio = calculateContrastRatio(combo.bg, combo.fg);
    const passes = ratio >= 4.5 ? '✅' : '❌';
    console.log(`${passes} ${ratio.toFixed(2)}:1 - ${combo.name}`);
  });
}

function calculateContrastRatio(hex1, hex2) {
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function luminance(r, g, b) {
    const rsRGB = r / 255;
    const gsRGB = g / 255;
    const bsRGB = b / 255;
    const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  }

  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// Run manual verification immediately
manualContrastVerification();

// Export for browser testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testWebsiteAccessibility };
}

// Auto-run if called directly
if (require.main === module) {
  testWebsiteAccessibility().catch(console.error);
}