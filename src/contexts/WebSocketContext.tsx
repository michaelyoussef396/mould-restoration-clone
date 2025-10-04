import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { WebSocketService, useWebSocket, WebSocketEventType, NotificationMessage, BookingUpdateMessage } from '@/lib/services/websocketService';
import { toast } from '@/hooks/use-toast';

interface WebSocketContextType {
  isConnected: boolean;
  connectionState: 'connecting' | 'connected' | 'disconnected' | 'error';
  onlineUsers: Array<{ userId: string; name: string; role: string; page?: string }>;
  unreadNotifications: number;
  connect: () => Promise<void>;
  disconnect: () => void;
  sendUserActivity: (action: 'online' | 'offline' | 'viewing_page', page?: string) => void;
  markNotificationAsRead: (notificationId: string) => void;
  requestCalendarSync: (provider: 'google' | 'outlook') => void;
}

const WebSocketContext = createContext<WebSocketContextType | null>(null);

interface WebSocketProviderProps {
  children: ReactNode;
}

export function WebSocketProvider({ children }: WebSocketProviderProps) {
  const { user, isAuthenticated } = useAuth();
  const ws = useWebSocket();

  const [isConnected, setIsConnected] = useState(false);
  const [connectionState, setConnectionState] = useState<'connecting' | 'connected' | 'disconnected' | 'error'>('disconnected');
  const [onlineUsers, setOnlineUsers] = useState<Array<{ userId: string; name: string; role: string; page?: string }>>([]);
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  // Connection management - DECLARE BEFORE USING IN USEEFFECT
  const connect = useCallback(async () => {
    try {
      setConnectionState('connecting');
      await ws.connect();
      setIsConnected(true);
      setConnectionState('connected');

      // Send user online status
      ws.sendUserActivity('online', window.location.pathname);

      toast({
        title: 'Real-time Updates Connected',
        description: 'You will receive live notifications and updates.',
      });
    } catch (error) {
      console.warn('[WebSocket] Connection failed (optional feature):', error);
      // Don't show error toast - WebSocket is optional
      setIsConnected(false);
      setConnectionState('error');
    }
  }, [ws]);

  const disconnect = useCallback(() => {
    if (isConnected) {
      ws.sendUserActivity('offline');
    }
    ws.disconnect();
    setIsConnected(false);
    setConnectionState('disconnected');
    setOnlineUsers([]);
  }, [ws, isConnected]);

  // Connect when user is authenticated
  useEffect(() => {
    // CRITICAL FIX: Check if WebSocket is enabled before attempting connection
    const WS_ENABLED = import.meta.env.VITE_WS_ENABLED === 'true';

    if (!WS_ENABLED) {
      console.log('[WebSocketContext] WebSocket disabled via VITE_WS_ENABLED environment variable');
      setConnectionState('disconnected');
      setIsConnected(false);
      return;
    }

    if (isAuthenticated && user) {
      connect();
    } else {
      disconnect();
    }

    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user]); // Only depend on auth state, not connect/disconnect functions

  // Activity tracking
  const sendUserActivity = useCallback((action: 'online' | 'offline' | 'viewing_page', page?: string) => {
    ws.sendUserActivity(action, page);
  }, [ws]);

  // Notification actions
  const markNotificationAsRead = useCallback((notificationId: string) => {
    ws.markNotificationAsRead(notificationId);
  }, [ws]);

  // Calendar sync
  const requestCalendarSync = useCallback((provider: 'google' | 'outlook') => {
    ws.requestCalendarSync(provider);
  }, [ws]);

  // Track page changes for user activity
  useEffect(() => {
    if (!isConnected) return;

    // Send initial page view
    sendUserActivity('viewing_page', window.location.pathname);

    // Note: pathname changes are handled by router navigation
    // This effect only runs when connection state changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]); // Only depend on connection state, sendUserActivity is stable

  // Subscribe to WebSocket events
  useEffect(() => {
    // Notification events
    const unsubscribeNotifications = ws.subscribeToNotifications((message: NotificationMessage) => {
      const { notification, action } = message.data;

      if (action === 'created') {
        // Show toast for new notifications
        toast({
          title: notification.title,
          description: notification.message,
          variant: notification.priority === 'URGENT' ? 'destructive' : 'default',
        });

        // Update unread count
        setUnreadNotifications(prev => prev + 1);

        // Play notification sound (optional)
        if (notification.priority === 'URGENT') {
          playNotificationSound();
        }
      } else if (action === 'read') {
        // Decrease unread count
        setUnreadNotifications(prev => Math.max(0, prev - 1));
      }
    });

    // Booking update events
    const unsubscribeBookings = ws.subscribeToBookingUpdates((message: BookingUpdateMessage) => {
      const { booking, action } = message.data;

      // Show toast for booking updates
      const titles = {
        created: 'New Booking Created',
        updated: 'Booking Updated',
        cancelled: 'Booking Cancelled',
        confirmed: 'Booking Confirmed',
      };

      toast({
        title: titles[action],
        description: `${booking.lead.firstName} ${booking.lead.lastName} - ${booking.melbourneSuburb}`,
      });
    });

    // User activity events
    const unsubscribeActivity = ws.subscribeToUserActivity((message) => {
      const { userId, action, page, userInfo } = message.data;

      // Don't track own activity
      if (userId === user?.id) return;

      setOnlineUsers(prev => {
        const filtered = prev.filter(u => u.userId !== userId);

        if (action === 'online' || (action === 'viewing_page' && userInfo)) {
          return [...filtered, {
            userId,
            name: userInfo?.name || 'Unknown User',
            role: userInfo?.role || 'User',
            page,
          }];
        } else if (action === 'offline') {
          return filtered;
        }

        return prev;
      });
    });

    // Calendar sync events
    const unsubscribeCalendarSync = ws.subscribeToCalendarSync((message) => {
      const { provider, status, stats, error } = message.data;

      if (status === 'completed' && stats) {
        toast({
          title: 'Calendar Sync Completed',
          description: `${provider}: Imported ${stats.imported}, Exported ${stats.exported}, Conflicts ${stats.conflicts}`,
        });
      } else if (status === 'failed' && error) {
        toast({
          title: 'Calendar Sync Failed',
          description: `${provider}: ${error}`,
          variant: 'destructive',
        });
      }
    });

    // System status events
    const unsubscribeSystemStatus = ws.subscribeToSystemStatus((message) => {
      const { component, status, message: statusMessage } = message.data;

      // Update connection state based on WebSocket status
      if (component === 'websocket') {
        setIsConnected(status === 'healthy');
        if (status === 'healthy') {
          setConnectionState('connected');
        } else if (status === 'down') {
          setConnectionState('error');
        } else {
          setConnectionState('disconnected');
        }
      }

      // Show system alerts for critical issues
      if (status === 'down' && component !== 'websocket') {
        toast({
          title: 'System Alert',
          description: `${component} is currently down: ${statusMessage}`,
          variant: 'destructive',
        });
      }
    });

    return () => {
      unsubscribeNotifications();
      unsubscribeBookings();
      unsubscribeActivity();
      unsubscribeCalendarSync();
      unsubscribeSystemStatus();
    };
  }, [ws, user?.id]);

  // Visibility change handling
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (isConnected) {
        if (document.hidden) {
          sendUserActivity('offline');
        } else {
          sendUserActivity('online', window.location.pathname);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]); // Only depend on connection state

  // Beforeunload handling
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isConnected) {
        sendUserActivity('offline');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]); // Only depend on connection state

  // Auto-reconnection on network recovery
  useEffect(() => {
    const handleOnline = () => {
      if (!isConnected && isAuthenticated) {
        console.log('Network recovered, attempting to reconnect WebSocket');
        connect();
      }
    };

    const handleOffline = () => {
      if (isConnected) {
        setConnectionState('disconnected');
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, isAuthenticated]); // Only depend on state, not connect function

  // Helper function to play notification sound
  const playNotificationSound = useCallback(() => {
    try {
      // Create a simple notification beep
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      // Notification sound failed (probably permissions), continue silently
      console.debug('Notification sound failed:', error);
    }
  }, []);

  const contextValue: WebSocketContextType = {
    isConnected,
    connectionState,
    onlineUsers,
    unreadNotifications,
    connect,
    disconnect,
    sendUserActivity,
    markNotificationAsRead,
    requestCalendarSync,
  };

  return (
    <WebSocketContext.Provider value={contextValue}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext(): WebSocketContextType {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
}

export default WebSocketContext;