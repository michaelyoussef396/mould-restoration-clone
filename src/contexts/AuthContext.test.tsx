import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';
import { BrowserRouter } from 'react-router-dom';

// Mock the authService
vi.mock('@/lib/services/authService', () => ({
  AuthService: {
    login: vi.fn(),
    logout: vi.fn(),
    getCurrentUser: vi.fn(),
  },
}));

// Test component that uses the Auth context
function TestComponent() {
  const { user, isAuthenticated, loading } = useAuth();

  return (
    <div>
      <div data-testid="auth-status">{isAuthenticated ? 'authenticated' : 'not-authenticated'}</div>
      <div data-testid="loading-status">{loading ? 'loading' : 'ready'}</div>
      <div data-testid="user-email">{user?.email || 'no-user'}</div>
    </div>
  );
}

describe('AuthContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should provide initial unauthenticated state', async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading-status')).toHaveTextContent('ready');
    });

    expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
    expect(screen.getByTestId('user-email')).toHaveTextContent('no-user');
  });

  it('should handle stored auth token correctly', async () => {
    const mockUser = { id: '1', email: 'admin@test.com', role: 'ADMIN' as const };
    const mockToken = 'test-token';

    // Set up localStorage with auth data
    localStorage.setItem('auth_token', mockToken);
    localStorage.setItem('auth_user', JSON.stringify(mockUser));

    render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading-status')).toHaveTextContent('ready');
    });

    expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
    expect(screen.getByTestId('user-email')).toHaveTextContent('admin@test.com');
  });

  it('should throw error when useAuth is used outside provider', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(
        <BrowserRouter>
          <TestComponent />
        </BrowserRouter>
      );
    }).toThrow('useAuth must be used within an AuthProvider');

    consoleSpy.mockRestore();
  });

  it('should handle invalid stored user data gracefully', async () => {
    localStorage.setItem('auth_token', 'test-token');
    localStorage.setItem('auth_user', 'invalid-json');

    render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading-status')).toHaveTextContent('ready');
    });

    expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
  });

  it('should not cause re-renders after initial load', async () => {
    const mockUser = { id: '1', email: 'admin@test.com', role: 'ADMIN' as const };
    localStorage.setItem('auth_token', 'test-token');
    localStorage.setItem('auth_user', JSON.stringify(mockUser));

    const { rerender } = render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading-status')).toHaveTextContent('ready');
    });

    const initialEmail = screen.getByTestId('user-email').textContent;

    // Re-render multiple times
    for (let i = 0; i < 3; i++) {
      rerender(
        <BrowserRouter>
          <AuthProvider>
            <TestComponent />
          </AuthProvider>
        </BrowserRouter>
      );
    }

    // State should remain stable
    expect(screen.getByTestId('user-email').textContent).toBe(initialEmail);
    expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
  });
});
