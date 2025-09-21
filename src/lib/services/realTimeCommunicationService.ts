import { z } from 'zod';

// Real-time communication interfaces
export interface ChatMessage {
  id: string;
  threadId: string;
  senderId: string;
  senderName: string;
  senderRole: 'admin' | 'technician' | 'customer';
  content: string;
  type: 'text' | 'image' | 'file' | 'location' | 'template' | 'system';
  timestamp: Date;
  read: boolean;
  reactions?: { emoji: string; users: string[] }[];
  attachments?: { id: string; name: string; url: string; type: string }[];
  metadata?: {
    leadId?: string;
    inspectionId?: string;
    templateId?: string;
    location?: {
      latitude: number;
      longitude: number;
      address: string;
    };
  };
}

export interface ChatThread {
  id: string;
  type: 'direct' | 'group' | 'customer' | 'emergency';
  name: string;
  description?: string;
  participants: Participant[];
  lastMessage?: ChatMessage;
  unreadCount: number;
  pinned: boolean;
  archived: boolean;
  muted: boolean;
  createdAt: Date;
  updatedAt: Date;
  metadata?: {
    leadId?: string;
    inspectionId?: string;
    propertyAddress?: string;
    priority?: 'low' | 'medium' | 'high' | 'emergency';
    suburb?: string;
    customerId?: string;
    technicianAssigned?: string;
    inspectionDate?: Date;
    urgentUntil?: Date;
  };
}

export interface Participant {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role: 'admin' | 'technician' | 'customer';
  avatar?: string;
  status: 'online' | 'offline' | 'busy' | 'in-field' | 'driving';
  lastSeen?: Date;
  location?: {
    latitude: number;
    longitude: number;
    address: string;
    timestamp: Date;
    accuracy?: number;
  };
  deviceInfo?: {
    type: 'mobile' | 'desktop' | 'tablet';
    platform: string;
    browser?: string;
  };
}

export interface MelbourneTemplate {
  id: string;
  name: string;
  category: 'pre-inspection' | 'during-inspection' | 'post-inspection' | 'emergency' | 'follow-up' | 'coordination';
  suburb?: string;
  content: string;
  variables: TemplateVariable[];
  useCount: number;
  lastUsed?: Date;
  createdBy: string;
  active: boolean;
  tags: string[];
}

export interface TemplateVariable {
  key: string;
  description: string;
  required: boolean;
  defaultValue?: string;
  type: 'TEXT' | 'DATE' | 'TIME' | 'NUMBER' | 'CURRENCY' | 'ADDRESS' | 'PHONE' | 'EMAIL';
  validation?: string; // regex pattern
}

export interface TypingIndicator {
  threadId: string;
  userId: string;
  userName: string;
  timestamp: Date;
  expiresAt: Date;
}

export interface NotificationSettings {
  userId: string;
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  quietHours: {
    enabled: boolean;
    start: string; // HH:mm
    end: string; // HH:mm
  };
  threadNotifications: {
    [threadId: string]: {
      muted: boolean;
      priority: 'all' | 'mentions' | 'none';
    };
  };
}

// Validation schemas
const SendMessageSchema = z.object({
  threadId: z.string(),
  content: z.string().min(1).max(5000),
  type: z.enum(['text', 'image', 'file', 'location', 'template']).default('text'),
  attachments: z.array(z.object({
    name: z.string(),
    url: z.string(),
    type: z.string(),
    size: z.number().optional()
  })).optional(),
  templateId: z.string().optional(),
  templateVariables: z.record(z.any()).optional(),
  metadata: z.record(z.any()).optional()
});

const CreateThreadSchema = z.object({
  type: z.enum(['direct', 'group', 'customer', 'emergency']),
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  participantIds: z.array(z.string()).min(1),
  metadata: z.object({
    leadId: z.string().optional(),
    inspectionId: z.string().optional(),
    propertyAddress: z.string().optional(),
    priority: z.enum(['low', 'medium', 'high', 'emergency']).optional(),
    suburb: z.string().optional()
  }).optional()
});

const UpdateLocationSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  address: z.string().optional(),
  accuracy: z.number().positive().optional()
});

class RealTimeCommunicationService {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  private wsUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:3001';
  private socket: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;
  private eventHandlers = new Map<string, Function[]>();

  // WebSocket Connection Management
  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const token = localStorage.getItem('auth_token');
        this.socket = new WebSocket(`${this.wsUrl}/communication?token=${token}`);

        this.socket.onopen = () => {
          console.log('WebSocket connected');
          this.reconnectAttempts = 0;
          resolve();
        };

        this.socket.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            this.handleMessage(data);
          } catch (error) {
            console.error('Failed to parse WebSocket message:', error);
          }
        };

        this.socket.onclose = () => {
          console.log('WebSocket disconnected');
          this.handleReconnect();
        };

        this.socket.onerror = (error) => {
          console.error('WebSocket error:', error);
          reject(error);
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  private handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        this.connect().catch(console.error);
      }, this.reconnectDelay * Math.pow(2, this.reconnectAttempts));
    }
  }

  private handleMessage(data: any) {
    const { type, payload } = data;
    const handlers = this.eventHandlers.get(type) || [];
    handlers.forEach(handler => handler(payload));
  }

  // Event subscription
  on(event: string, handler: Function) {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event)!.push(handler);
  }

  off(event: string, handler: Function) {
    const handlers = this.eventHandlers.get(event) || [];
    const index = handlers.indexOf(handler);
    if (index > -1) {
      handlers.splice(index, 1);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  // Message Operations
  async sendMessage(data: z.infer<typeof SendMessageSchema>): Promise<ChatMessage> {
    const validated = SendMessageSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send message');
    }

    const message = await response.json();

    // Send via WebSocket for real-time delivery
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({
        type: 'message_sent',
        payload: message
      }));
    }

    return message;
  }

  async getMessages(threadId: string, options?: {
    limit?: number;
    before?: string;
    after?: string;
  }): Promise<ChatMessage[]> {
    const token = localStorage.getItem('auth_token');
    const params = new URLSearchParams();

    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.before) params.append('before', options.before);
    if (options?.after) params.append('after', options.after);

    const response = await fetch(
      `${this.baseUrl}/api/communication/threads/${threadId}/messages?${params}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }

    return response.json();
  }

  async markMessageAsRead(messageId: string): Promise<void> {
    const token = localStorage.getItem('auth_token');

    await fetch(`${this.baseUrl}/api/communication/messages/${messageId}/read`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // Notify via WebSocket
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({
        type: 'message_read',
        payload: { messageId }
      }));
    }
  }

  // Thread Operations
  async getThreads(filters?: {
    type?: string;
    archived?: boolean;
    search?: string;
  }): Promise<ChatThread[]> {
    const token = localStorage.getItem('auth_token');
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) params.append(key, value.toString());
      });
    }

    const response = await fetch(`${this.baseUrl}/api/communication/threads?${params}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch threads');
    }

    return response.json();
  }

  async createThread(data: z.infer<typeof CreateThreadSchema>): Promise<ChatThread> {
    const validated = CreateThreadSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/threads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create thread');
    }

    return response.json();
  }

  async updateThread(threadId: string, updates: Partial<ChatThread>): Promise<ChatThread> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/threads/${threadId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error('Failed to update thread');
    }

    return response.json();
  }

  // Typing Indicators
  sendTypingIndicator(threadId: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({
        type: 'typing_start',
        payload: { threadId }
      }));
    }
  }

  stopTypingIndicator(threadId: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({
        type: 'typing_stop',
        payload: { threadId }
      }));
    }
  }

  // Location Services
  async updateLocation(data: z.infer<typeof UpdateLocationSchema>): Promise<void> {
    const validated = UpdateLocationSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    await fetch(`${this.baseUrl}/api/communication/location`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    // Broadcast location update via WebSocket
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({
        type: 'location_update',
        payload: validated
      }));
    }
  }

  async getParticipantLocations(threadId: string): Promise<Participant[]> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(
      `${this.baseUrl}/api/communication/threads/${threadId}/locations`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch participant locations');
    }

    return response.json();
  }

  // Template Operations
  async getMelbourneTemplates(filters?: {
    category?: string;
    suburb?: string;
    search?: string;
  }): Promise<MelbourneTemplate[]> {
    const token = localStorage.getItem('auth_token');
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
    }

    const response = await fetch(
      `${this.baseUrl}/api/communication/templates/melbourne?${params}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Melbourne templates');
    }

    return response.json();
  }

  async useTemplate(templateId: string, variables?: Record<string, any>): Promise<string> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(
      `${this.baseUrl}/api/communication/templates/${templateId}/render`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ variables }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to render template');
    }

    const result = await response.json();
    return result.renderedContent;
  }

  // Quick Actions for Melbourne Operations
  async sendInspectionArrivalNotice(inspectionId: string, eta: number): Promise<void> {
    const token = localStorage.getItem('auth_token');

    await fetch(`${this.baseUrl}/api/communication/quick-actions/arrival-notice`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inspectionId, eta }),
    });
  }

  async sendInspectionComplete(inspectionId: string, summary: string): Promise<void> {
    const token = localStorage.getItem('auth_token');

    await fetch(`${this.baseUrl}/api/communication/quick-actions/inspection-complete`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inspectionId, summary }),
    });
  }

  async broadcastEmergency(message: string, affectedSuburbs: string[]): Promise<void> {
    const token = localStorage.getItem('auth_token');

    await fetch(`${this.baseUrl}/api/communication/emergency/broadcast`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, affectedSuburbs }),
    });
  }

  // File Upload
  async uploadFile(file: File, threadId?: string): Promise<{
    id: string;
    name: string;
    url: string;
    type: string;
    size: number;
  }> {
    const token = localStorage.getItem('auth_token');
    const formData = new FormData();
    formData.append('file', file);
    if (threadId) formData.append('threadId', threadId);

    const response = await fetch(`${this.baseUrl}/api/communication/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    return response.json();
  }

  // Notification Settings
  async getNotificationSettings(): Promise<NotificationSettings> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/notifications/settings`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch notification settings');
    }

    return response.json();
  }

  async updateNotificationSettings(settings: Partial<NotificationSettings>): Promise<NotificationSettings> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/notifications/settings`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    });

    if (!response.ok) {
      throw new Error('Failed to update notification settings');
    }

    return response.json();
  }

  // Analytics for Melbourne Operations
  async getCommunicationAnalytics(period: { start: string; end: string }): Promise<{
    messagesSent: number;
    averageResponseTime: number;
    templateUsage: { templateId: string; count: number }[];
    suburbActivity: { suburb: string; messageCount: number }[];
    emergencyResponses: number;
    technicianCoordination: {
      threadCount: number;
      averageParticipants: number;
      locationShares: number;
    };
  }> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(
      `${this.baseUrl}/api/communication/analytics?start=${period.start}&end=${period.end}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch communication analytics');
    }

    return response.json();
  }
}

// Singleton instance
export const realTimeCommunicationService = new RealTimeCommunicationService();
export default realTimeCommunicationService;