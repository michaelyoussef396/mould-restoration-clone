import { NotificationWithRelations } from './notificationService';
import { BookingWithRelations } from './calendarService';

export interface WebSocketMessage {
  type: 'notification' | 'booking_update' | 'calendar_sync' | 'user_activity' | 'system_status';
  data: any;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
}

export interface NotificationMessage extends WebSocketMessage {
  type: 'notification';
  data: {
    notification: NotificationWithRelations;
    action: 'created' | 'updated' | 'deleted' | 'read';
  };
}

export interface BookingUpdateMessage extends WebSocketMessage {
  type: 'booking_update';
  data: {
    booking: BookingWithRelations;
    action: 'created' | 'updated' | 'cancelled' | 'confirmed';
    technicianId: string;
  };
}

export interface CalendarSyncMessage extends WebSocketMessage {
  type: 'calendar_sync';
  data: {
    provider: 'google' | 'outlook';
    status: 'started' | 'completed' | 'failed';
    stats?: {
      imported: number;
      exported: number;
      conflicts: number;
    };
    error?: string;
  };
}

export interface UserActivityMessage extends WebSocketMessage {
  type: 'user_activity';
  data: {
    userId: string;
    action: 'online' | 'offline' | 'viewing_page';
    page?: string;
    userInfo?: {
      name: string;
      role: string;
    };
  };
}

export interface SystemStatusMessage extends WebSocketMessage {
  type: 'system_status';
  data: {
    component: 'api' | 'database' | 'calendar_sync' | 'notifications';
    status: 'healthy' | 'degraded' | 'down';
    message?: string;
  };
}

export type WebSocketEventType =
  | NotificationMessage
  | BookingUpdateMessage
  | CalendarSyncMessage
  | UserActivityMessage
  | SystemStatusMessage;

export class WebSocketService {
  private static instance: WebSocketService;
  private socket: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000; // Start with 1 second
  private eventListeners: Map<string, Set<(message: WebSocketEventType) => void>> = new Map();
  private isConnected = false;
  private heartbeatInterval: NodeJS.Timeout | null = null;
  private lastHeartbeat = 0;
  private connectionState: 'connecting' | 'connected' | 'disconnected' | 'error' = 'disconnected';

  private constructor() {
    // Singleton pattern
  }

  public static getInstance(): WebSocketService {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  // Connect to WebSocket server
  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      // EMERGENCY FIX: Disable WebSocket until server is configured
      const WS_ENABLED = import.meta.env.VITE_WS_ENABLED === 'true';

      if (!WS_ENABLED) {
        console.log('[WebSocket] Connection disabled (set VITE_WS_ENABLED=true to enable)');
        this.connectionState = 'disconnected';
        resolve(); // Resolve without error to prevent refresh loops
        return;
      }

      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        resolve();
        return;
      }

      try {
        this.connectionState = 'connecting';
        const wsUrl = this.getWebSocketUrl();
        const token = localStorage.getItem('token');

        this.socket = new WebSocket(`${wsUrl}?token=${encodeURIComponent(token || '')}`);

        this.socket.onopen = () => {
          console.log('[WebSocket] Connected to server');
          this.isConnected = true;
          this.connectionState = 'connected';
          this.reconnectAttempts = 0;
          this.reconnectDelay = 1000;
          this.startHeartbeat();
          this.notifyConnectionListeners('connected');
          resolve();
        };

        this.socket.onclose = (event) => {
          console.log('[WebSocket] Connection closed:', event.code, event.reason);
          this.isConnected = false;
          this.connectionState = 'disconnected';
          this.stopHeartbeat();
          this.notifyConnectionListeners('disconnected');

          // Attempt to reconnect if not closed intentionally
          if (event.code !== 1000 && this.reconnectAttempts < this.maxReconnectAttempts) {
            this.scheduleReconnect();
          }
        };

        this.socket.onerror = (error) => {
          console.error('[WebSocket] Connection error:', error);
          this.connectionState = 'error';
          this.notifyConnectionListeners('error');
          reject(new Error('WebSocket connection failed'));
        };

        this.socket.onmessage = (event) => {
          try {
            const message: WebSocketEventType = JSON.parse(event.data);
            message.timestamp = new Date(message.timestamp);
            this.handleMessage(message);
          } catch (error) {
            console.error('[WebSocket] Failed to parse message:', error);
          }
        };

      } catch (error) {
        this.connectionState = 'error';
        reject(error);
      }
    });
  }

  // Disconnect from WebSocket server
  public disconnect(): void {
    if (this.socket) {
      this.socket.close(1000, 'Client disconnecting');
      this.socket = null;
    }
    this.isConnected = false;
    this.connectionState = 'disconnected';
    this.stopHeartbeat();
  }

  // Subscribe to specific event types
  public subscribe<T extends WebSocketEventType>(
    eventType: T['type'],
    callback: (message: T) => void
  ): () => void {
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, new Set());
    }

    const listeners = this.eventListeners.get(eventType)!;
    listeners.add(callback as any);

    // Return unsubscribe function
    return () => {
      listeners.delete(callback as any);
      if (listeners.size === 0) {
        this.eventListeners.delete(eventType);
      }
    };
  }

  // Send message to server
  public send(message: Partial<WebSocketMessage>): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      console.warn('[WebSocket] Cannot send message: not connected');
      return;
    }

    try {
      const fullMessage: WebSocketMessage = {
        timestamp: new Date(),
        ...message
      } as WebSocketMessage;

      this.socket.send(JSON.stringify(fullMessage));
    } catch (error) {
      console.error('[WebSocket] Failed to send message:', error);
    }
  }

  // Get connection status
  public getConnectionState(): 'connecting' | 'connected' | 'disconnected' | 'error' {
    return this.connectionState;
  }

  public isWebSocketConnected(): boolean {
    return this.isConnected;
  }

  // Specific subscription methods for type safety
  public subscribeToNotifications(callback: (message: NotificationMessage) => void): () => void {
    return this.subscribe('notification', callback);
  }

  public subscribeToBookingUpdates(callback: (message: BookingUpdateMessage) => void): () => void {
    return this.subscribe('booking_update', callback);
  }

  public subscribeToCalendarSync(callback: (message: CalendarSyncMessage) => void): () => void {
    return this.subscribe('calendar_sync', callback);
  }

  public subscribeToUserActivity(callback: (message: UserActivityMessage) => void): () => void {
    return this.subscribe('user_activity', callback);
  }

  public subscribeToSystemStatus(callback: (message: SystemStatusMessage) => void): () => void {
    return this.subscribe('system_status', callback);
  }

  // Send user activity updates
  public sendUserActivity(action: UserActivityMessage['data']['action'], page?: string): void {
    this.send({
      type: 'user_activity',
      data: {
        userId: this.getCurrentUserId(),
        action,
        page,
      },
    });
  }

  // Mark notification as read via WebSocket
  public markNotificationAsRead(notificationId: string): void {
    this.send({
      type: 'notification',
      data: {
        action: 'read',
        notificationId,
      },
    });
  }

  // Request calendar sync via WebSocket
  public requestCalendarSync(provider: 'google' | 'outlook'): void {
    this.send({
      type: 'calendar_sync',
      data: {
        action: 'request',
        provider,
      },
    });
  }

  // Private methods
  private getWebSocketUrl(): string {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host;
    const port = import.meta.env.VITE_WS_PORT || '3002';

    // In development, use the API server port + 1 for WebSocket
    if (import.meta.env.DEV) {
      return `${protocol}//${window.location.hostname}:${port}`;
    }

    return `${protocol}//${host}/ws`;
  }

  private handleMessage(message: WebSocketEventType): void {
    // Handle heartbeat responses
    if (message.type === 'system_status' && message.data.component === 'heartbeat') {
      this.lastHeartbeat = Date.now();
      return;
    }

    // Emit to specific listeners
    const listeners = this.eventListeners.get(message.type);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(message);
        } catch (error) {
          console.error(`[WebSocket] Error in ${message.type} listener:`, error);
        }
      });
    }

    // Emit to global listeners (for debugging/logging)
    const globalListeners = this.eventListeners.get('*');
    if (globalListeners) {
      globalListeners.forEach(callback => {
        try {
          callback(message);
        } catch (error) {
          console.error('[WebSocket] Error in global listener:', error);
        }
      });
    }
  }

  private scheduleReconnect(): void {
    this.reconnectAttempts++;
    const delay = Math.min(this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1), 30000);

    console.log(`[WebSocket] Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`);

    setTimeout(() => {
      if (this.reconnectAttempts <= this.maxReconnectAttempts) {
        this.connect().catch(() => {
          // Connection failed, will trigger another reconnect attempt
        });
      } else {
        console.error('[WebSocket] Max reconnection attempts reached');
        this.connectionState = 'error';
        this.notifyConnectionListeners('error');
      }
    }, delay);
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.lastHeartbeat = Date.now();

    this.heartbeatInterval = setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.send({
          type: 'system_status',
          data: {
            component: 'heartbeat',
            status: 'healthy',
          },
        });

        // Check if we've received a recent heartbeat response
        if (Date.now() - this.lastHeartbeat > 30000) { // 30 seconds
          console.warn('[WebSocket] Heartbeat timeout, closing connection');
          this.socket.close();
        }
      }
    }, 15000); // Send heartbeat every 15 seconds
  }

  private stopHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  private notifyConnectionListeners(state: 'connected' | 'disconnected' | 'error'): void {
    const message: SystemStatusMessage = {
      type: 'system_status',
      data: {
        component: 'websocket',
        status: state === 'connected' ? 'healthy' : state === 'error' ? 'down' : 'degraded',
        message: `WebSocket ${state}`,
      },
      timestamp: new Date(),
    };

    this.handleMessage(message);
  }

  private getCurrentUserId(): string {
    // Get current user ID from auth context or localStorage
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        return user.id || 'anonymous';
      }
    } catch (error) {
      console.warn('[WebSocket] Failed to get user ID:', error);
    }
    return 'anonymous';
  }
}

// React hook for WebSocket integration
export function useWebSocket() {
  const ws = WebSocketService.getInstance();

  const connect = () => ws.connect();
  const disconnect = () => ws.disconnect();
  const send = (message: Partial<WebSocketMessage>) => ws.send(message);
  const isConnected = () => ws.isWebSocketConnected();
  const getState = () => ws.getConnectionState();

  // Subscription hooks
  const subscribeToNotifications = (callback: (message: NotificationMessage) => void) =>
    ws.subscribeToNotifications(callback);

  const subscribeToBookingUpdates = (callback: (message: BookingUpdateMessage) => void) =>
    ws.subscribeToBookingUpdates(callback);

  const subscribeToCalendarSync = (callback: (message: CalendarSyncMessage) => void) =>
    ws.subscribeToCalendarSync(callback);

  const subscribeToUserActivity = (callback: (message: UserActivityMessage) => void) =>
    ws.subscribeToUserActivity(callback);

  const subscribeToSystemStatus = (callback: (message: SystemStatusMessage) => void) =>
    ws.subscribeToSystemStatus(callback);

  // Activity tracking
  const sendUserActivity = (action: UserActivityMessage['data']['action'], page?: string) =>
    ws.sendUserActivity(action, page);

  // Actions
  const markNotificationAsRead = (notificationId: string) =>
    ws.markNotificationAsRead(notificationId);

  const requestCalendarSync = (provider: 'google' | 'outlook') =>
    ws.requestCalendarSync(provider);

  return {
    connect,
    disconnect,
    send,
    isConnected,
    getState,
    subscribeToNotifications,
    subscribeToBookingUpdates,
    subscribeToCalendarSync,
    subscribeToUserActivity,
    subscribeToSystemStatus,
    sendUserActivity,
    markNotificationAsRead,
    requestCalendarSync,
  };
}

export default WebSocketService;