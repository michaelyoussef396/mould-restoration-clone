import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { WebSocketProvider, useWebSocketContext } from './WebSocketContext';
import { ReactNode } from 'react';

// Mock the websocketService
vi.mock('@/lib/services/websocketService', () => ({
  WebSocketService: {
    getInstance: vi.fn(() => ({
      connect: vi.fn(),
      disconnect: vi.fn(),
      sendUserActivity: vi.fn(),
      markNotificationAsRead: vi.fn(),
      requestCalendarSync: vi.fn(),
      subscribeToNotifications: vi.fn(() => vi.fn()),
      subscribeToBookingUpdates: vi.fn(() => vi.fn()),
      subscribeToUserActivity: vi.fn(() => vi.fn()),
      subscribeToCalendarSync: vi.fn(() => vi.fn()),
      subscribeToSystemStatus: vi.fn(() => vi.fn()),
    })),
  },
  useWebSocket: vi.fn(() => ({
    connect: vi.fn(),
    disconnect: vi.fn(),
    sendUserActivity: vi.fn(),
    markNotificationAsRead: vi.fn(),
    requestCalendarSync: vi.fn(),
    subscribeToNotifications: vi.fn(() => vi.fn()),
    subscribeToBookingUpdates: vi.fn(() => vi.fn()),
    subscribeToUserActivity: vi.fn(() => vi.fn()),
    subscribeToCalendarSync: vi.fn(() => vi.fn()),
    subscribeToSystemStatus: vi.fn(() => vi.fn()),
  })),
}));

// Mock useAuth hook
const mockUser = { id: 'test-user', email: 'test@example.com', role: 'ADMIN' as const };
vi.mock('./AuthContext', () => ({
  useAuth: vi.fn(() => ({
    user: mockUser,
    isAuthenticated: true,
    login: vi.fn(),
    logout: vi.fn(),
    isLoading: false,
    isAdmin: true,
    isTechnician: false,
  })),
}));

// Test component that uses the WebSocket context
function TestComponent() {
  const { isConnected, connectionState, onlineUsers, unreadNotifications } = useWebSocketContext();

  return (
    <div>
      <div data-testid="connection-status">{isConnected ? 'connected' : 'disconnected'}</div>
      <div data-testid="connection-state">{connectionState}</div>
      <div data-testid="online-users-count">{onlineUsers.length}</div>
      <div data-testid="unread-notifications">{unreadNotifications}</div>
    </div>
  );
}

describe('WebSocketContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Set environment variable to disable WebSocket
    import.meta.env.VITE_WS_ENABLED = 'false';
  });

  it('should provide initial state when WebSocket is disabled', () => {
    render(
      <WebSocketProvider>
        <TestComponent />
      </WebSocketProvider>
    );

    expect(screen.getByTestId('connection-status')).toHaveTextContent('disconnected');
    expect(screen.getByTestId('connection-state')).toHaveTextContent('disconnected');
    expect(screen.getByTestId('online-users-count')).toHaveTextContent('0');
    expect(screen.getByTestId('unread-notifications')).toHaveTextContent('0');
  });

  it('should not attempt connection when VITE_WS_ENABLED is false', async () => {
    import.meta.env.VITE_WS_ENABLED = 'false';

    render(
      <WebSocketProvider>
        <TestComponent />
      </WebSocketProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('connection-state')).toHaveTextContent('disconnected');
    });
  });

  it('should throw error when useWebSocketContext is used outside provider', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useWebSocketContext must be used within a WebSocketProvider');

    consoleSpy.mockRestore();
  });

  it('should maintain stable connection state', async () => {
    import.meta.env.VITE_WS_ENABLED = 'false';

    const { rerender } = render(
      <WebSocketProvider>
        <TestComponent />
      </WebSocketProvider>
    );

    // Initial state
    expect(screen.getByTestId('connection-state')).toHaveTextContent('disconnected');

    // Re-render to simulate React updates
    rerender(
      <WebSocketProvider>
        <TestComponent />
      </WebSocketProvider>
    );

    // State should remain stable
    expect(screen.getByTestId('connection-state')).toHaveTextContent('disconnected');
  });
});
