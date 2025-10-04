# Mould & Restoration Co. - Testing Documentation

## 🎯 Testing Overview

This document outlines the comprehensive testing strategy implemented for the Mould & Restoration Co. CRM system, including unit tests, E2E tests, stability tests, and performance monitoring.

## ✅ Test Coverage Summary

- **Unit Tests**: 9/9 passing (100%)
- **E2E Tests**: 2/2 passing (Dashboard Stability, Console Monitoring)
- **Performance Tests**: Lighthouse integration configured
- **Code Coverage**: Available via `npm run test:coverage`

---

## 🧪 Unit Testing

### Framework: Vitest + React Testing Library

**Location**: `src/**/*.{test,spec}.{ts,tsx}`

### Running Unit Tests

```bash
# Run all unit tests
npm run test:unit

# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test Files

#### 1. `src/contexts/AuthContext.test.tsx` (5 tests)
Tests for authentication context and state management:

- ✅ Should provide initial unauthenticated state
- ✅ Should handle stored auth token correctly
- ✅ Should throw error when useAuth is used outside provider
- ✅ Should handle invalid stored user data gracefully
- ✅ Should not cause re-renders after initial load

**Key Coverage**:
- Authentication flow
- LocalStorage integration
- Error handling
- State stability

#### 2. `src/contexts/WebSocketContext.test.tsx` (4 tests)
Tests for WebSocket context with feature flag support:

- ✅ Should provide initial state when WebSocket is disabled
- ✅ Should not attempt connection when VITE_WS_ENABLED is false
- ✅ Should throw error when useWebSocketContext is used outside provider
- ✅ Should maintain stable connection state

**Key Coverage**:
- Feature flag implementation
- Connection state management
- Provider error handling
- React re-render prevention

---

## 🎭 End-to-End Testing

### Framework: Playwright

**Location**: `tests/*.spec.ts`

### Running E2E Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run specific stability test
npm run test:stability

# Run console monitoring test
npm run test:console
```

### Test Files

#### 1. `tests/dashboard-stability.spec.ts`
**Purpose**: Verify dashboard remains stable without auto-refresh loops

**Duration**: 60 seconds of continuous monitoring

**Validation**:
- ✅ Only 1 page load (initial navigation)
- ✅ NO auto-refresh loops
- ✅ Stable connection state
- ✅ NO console errors

**Test Results** (Latest Run):
```
✅ SUCCESS: Dashboard remained stable for 60 seconds with NO auto-refreshes
- Load count: 1 (initial only)
- Console errors: 0
- WebSocket errors: 0
```

#### 2. `tests/console-monitoring.spec.ts`
**Purpose**: Monitor browser console for errors and warnings

**Duration**: 30 seconds of monitoring

**Validation**:
- ✅ ZERO console errors
- ✅ ZERO console warnings
- ✅ Clean application state

**Test Results** (Latest Run):
```
📊 Console Message Summary:
- Total Messages: 15
- Errors: 0
- Warnings: 0

✅ No console errors detected during 30-second monitoring period
```

---

## 🚀 Performance Testing

### Lighthouse Integration

**Framework**: Google Lighthouse via MCP

### Running Performance Tests

```bash
# Run Lighthouse audit
npm run audit:lighthouse

# Run full performance audit (includes build)
npm run audit:performance

# Run mobile performance test
npm run test:mobile
```

### Performance Targets

- **Performance Score**: 90+ (desktop), 85+ (mobile)
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1

---

## 🔧 Test Configuration

### Vitest Configuration (`vitest.config.ts`)

```typescript
{
  globals: true,
  environment: 'jsdom',
  setupFiles: ['./src/test/setup.ts'],
  include: ['src/**/*.{test,spec}.{ts,tsx}'],
  exclude: ['tests/**', 'node_modules/**', '**/*.spec.ts'],
  coverage: {
    provider: 'v8',
    reporter: ['text', 'json', 'html'],
  }
}
```

### Playwright Configuration (`playwright.config.ts`)

```typescript
{
  testDir: './tests',
  baseURL: 'http://localhost:8085',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium' },
    { name: 'firefox' },
    { name: 'webkit' },
    { name: 'Mobile Chrome' },
    { name: 'Mobile Safari' },
  ]
}
```

---

## 📝 Writing Tests

### Unit Test Template

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

describe('ComponentName', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interaction', async () => {
    render(<ComponentName />);
    // Test user interactions
  });
});
```

### E2E Test Template

```typescript
import { test, expect } from '@playwright/test';

test('Feature description', async ({ page }) => {
  test.setTimeout(60000); // 60 second timeout

  // Navigate to page
  await page.goto('http://localhost:8085/page');
  await page.waitForLoadState('networkidle');

  // Perform actions
  await page.click('button:has-text("Click Me")');

  // Assert results
  await expect(page.locator('.result')).toBeVisible();
});
```

---

## 🐛 Debugging Tests

### Unit Test Debugging

```bash
# Run tests in watch mode with UI
npm run test:ui

# Run specific test file
npm test -- src/contexts/AuthContext.test.tsx

# Run tests with verbose output
npm test -- --reporter=verbose
```

### E2E Test Debugging

```bash
# Run tests with Playwright UI
npm run test:e2e:ui

# Run tests with headed browser
npx playwright test --headed

# Run tests with debug mode
npx playwright test --debug

# View test report
npx playwright show-report
```

---

## 🏆 Test Best Practices

### 1. **Test Organization**
- Unit tests co-located with source files: `ComponentName.test.tsx`
- E2E tests in `/tests` directory
- Test utilities in `/src/test`

### 2. **Naming Conventions**
- Descriptive test names: `should handle X when Y`
- Group related tests using `describe` blocks
- Use `it` for individual test cases

### 3. **Mocking Strategy**
- Mock external dependencies (API, WebSocket)
- Use Vitest's `vi.mock()` for module mocking
- Keep mocks simple and focused

### 4. **Assertions**
- Use specific assertions: `toHaveTextContent` vs `toBeTruthy`
- Test user-visible behavior, not implementation details
- Avoid brittle selectors (use `data-testid` attributes)

### 5. **Async Testing**
- Use `waitFor` for async state changes
- Set appropriate timeouts for E2E tests
- Avoid `waitForTimeout` except in stability tests

---

## 🔍 Critical Bug Fixes Validated by Tests

### Auto-Refresh Loop Fix (Validated by `dashboard-stability.spec.ts`)

**Problem**: Application was refreshing every 3 seconds due to WebSocket connection failures

**Root Causes**:
1. Invalid `useEffect` dependencies in `WebSocketContext.tsx`
2. WebSocket attempting connections when feature disabled
3. `window.location.href` causing hard refreshes in `AuthContext.tsx`

**Fixes Applied**:
1. Added feature flag check in `WebSocketContext.tsx` (line 68-76)
2. Fixed `useEffect` dependency arrays (5 instances)
3. Replaced `window.location.href` with React Router `<Navigate>`
4. Changed localStorage key from `token` to `auth_token` in `notificationService.ts`

**Test Validation**:
- ✅ 60 seconds of stability with 0 refreshes
- ✅ 0 console errors
- ✅ Stable connection state
- ✅ Proper feature flag handling

---

## 📊 Test Metrics

### Current Status (Latest Run)

| Category | Tests | Passed | Failed | Coverage |
|----------|-------|--------|--------|----------|
| Unit Tests | 9 | 9 | 0 | TBD |
| E2E Tests | 2 | 2 | 0 | N/A |
| Stability | 1 | 1 | 0 | 100% |
| Console | 1 | 1 | 0 | 100% |

### Performance Benchmarks

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Dashboard Stability | 60s no refresh | 60s ✅ | ✅ PASS |
| Console Errors | 0 errors | 0 errors | ✅ PASS |
| Page Loads | 1 (initial) | 1 | ✅ PASS |
| Unit Test Speed | < 2s | 0.9s | ✅ PASS |

---

## 🚦 CI/CD Integration

### Running Tests in CI

```bash
# Full test suite for CI
npm run test:all

# Performance verification
npm run production:verify

# Mobile verification
npm run production:verify:mobile
```

### Environment Variables for Testing

```env
# .env.local
VITE_WS_ENABLED=false
VITE_API_URL=http://localhost:3001
VITE_ENABLE_PERFORMANCE_MONITORING=true
```

---

## 📚 Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)

---

## 🎯 Future Testing Roadmap

### Planned Enhancements

1. **Visual Regression Testing**
   - Percy or Chromatic integration
   - Screenshot comparison for UI components

2. **Integration Tests**
   - API endpoint testing
   - Database integration tests
   - WebSocket integration tests

3. **Load Testing**
   - Artillery or k6 for load testing
   - WebSocket concurrent connection testing

4. **Accessibility Testing**
   - axe-core integration
   - WCAG 2.2 AA compliance validation

5. **Mobile Testing**
   - Real device testing via BrowserStack
   - Melbourne network condition simulation

---

**Last Updated**: October 4, 2025
**Test Suite Version**: 1.0
**Maintainer**: Mould & Restoration Co. Development Team
