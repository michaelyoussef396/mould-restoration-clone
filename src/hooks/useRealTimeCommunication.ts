import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import {
  realTimeCommunicationService,
  ChatMessage,
  ChatThread,
  Participant,
  MelbourneTemplate,
  TypingIndicator
} from '@/lib/services/realTimeCommunicationService';

interface UseCommunicationOptions {
  autoConnect?: boolean;
  enableLocationSharing?: boolean;
  typingTimeout?: number;
}

export function useRealTimeCommunication(options: UseCommunicationOptions = {}) {
  const {
    autoConnect = true,
    enableLocationSharing = false,
    typingTimeout = 3000
  } = options;

  const { user, isAuthenticated } = useAuth();
  const [isConnected, setIsConnected] = useState(false);
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>({});
  const [typingIndicators, setTypingIndicators] = useState<TypingIndicator[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<Participant[]>([]);
  const [templates, setTemplates] = useState<MelbourneTemplate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const typingTimeoutRef = useRef<Record<string, NodeJS.Timeout>>({});
  const locationWatchRef = useRef<number | null>(null);

  // Connection management
  const connect = useCallback(async () => {
    if (!isAuthenticated || isConnected) return;

    try {
      setLoading(true);
      await realTimeCommunicationService.connect();
      setIsConnected(true);
      setError(null);
      toast.success('Connected to communication hub');
    } catch (error) {
      console.error('Failed to connect:', error);
      setError('Failed to connect to communication hub');
      toast.error('Connection failed');
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, isConnected]);

  const disconnect = useCallback(() => {
    realTimeCommunicationService.disconnect();
    setIsConnected(false);

    // Clear location watching
    if (locationWatchRef.current) {
      navigator.geolocation.clearWatch(locationWatchRef.current);
      locationWatchRef.current = null;
    }

    // Clear typing timeouts
    Object.values(typingTimeoutRef.current).forEach(clearTimeout);
    typingTimeoutRef.current = {};
  }, []);

  // Event handlers
  useEffect(() => {
    if (!isConnected) return;

    const handleNewMessage = (message: ChatMessage) => {
      setMessages(prev => ({
        ...prev,
        [message.threadId]: [...(prev[message.threadId] || []), message]
      }));

      // Update thread's last message
      setThreads(prev => prev.map(thread =>
        thread.id === message.threadId
          ? {
              ...thread,
              lastMessage: message,
              updatedAt: message.timestamp,
              unreadCount: thread.unreadCount + (message.senderId !== user?.id ? 1 : 0)
            }
          : thread
      ));

      // Show notification for mentions or direct messages
      if (message.senderId !== user?.id) {
        if (message.content.includes(`@${user?.name}`) || message.type === 'direct') {
          toast.info(`New message from ${message.senderName}`);
        }
      }
    };

    const handleTypingStart = (data: { threadId: string; userId: string; userName: string }) => {
      if (data.userId === user?.id) return;

      const indicator: TypingIndicator = {
        threadId: data.threadId,
        userId: data.userId,
        userName: data.userName,
        timestamp: new Date(),
        expiresAt: new Date(Date.now() + typingTimeout)
      };

      setTypingIndicators(prev => [
        ...prev.filter(ind => ind.userId !== data.userId || ind.threadId !== data.threadId),
        indicator
      ]);

      // Auto-remove after timeout
      setTimeout(() => {
        setTypingIndicators(prev =>
          prev.filter(ind => !(ind.userId === data.userId && ind.threadId === data.threadId))
        );
      }, typingTimeout);
    };

    const handleTypingStop = (data: { threadId: string; userId: string }) => {
      setTypingIndicators(prev =>
        prev.filter(ind => !(ind.userId === data.userId && ind.threadId === data.threadId))
      );
    };

    const handleUserStatusChange = (participant: Participant) => {
      setOnlineUsers(prev => {
        const existing = prev.find(u => u.id === participant.id);
        if (existing) {
          return prev.map(u => u.id === participant.id ? participant : u);
        } else {
          return [...prev, participant];
        }
      });

      // Update participant status in threads
      setThreads(prev => prev.map(thread => ({
        ...thread,
        participants: thread.participants.map(p =>
          p.id === participant.id ? { ...p, ...participant } : p
        )
      })));
    };

    const handleLocationUpdate = (data: { userId: string; location: any }) => {
      setOnlineUsers(prev => prev.map(user =>
        user.id === data.userId
          ? { ...user, location: data.location }
          : user
      ));
    };

    const handleThreadUpdate = (thread: ChatThread) => {
      setThreads(prev => {
        const existing = prev.find(t => t.id === thread.id);
        if (existing) {
          return prev.map(t => t.id === thread.id ? thread : t);
        } else {
          return [...prev, thread];
        }
      });
    };

    const handleEmergencyAlert = (data: { message: string; priority: string; affectedSuburbs: string[] }) => {
      toast.error(`EMERGENCY: ${data.message}`, {
        duration: 10000,
        action: {
          label: 'Acknowledge',
          onClick: () => console.log('Emergency acknowledged')
        }
      });
    };

    // Subscribe to events
    realTimeCommunicationService.on('message_received', handleNewMessage);
    realTimeCommunicationService.on('typing_start', handleTypingStart);
    realTimeCommunicationService.on('typing_stop', handleTypingStop);
    realTimeCommunicationService.on('user_status_changed', handleUserStatusChange);
    realTimeCommunicationService.on('location_update', handleLocationUpdate);
    realTimeCommunicationService.on('thread_updated', handleThreadUpdate);
    realTimeCommunicationService.on('emergency_alert', handleEmergencyAlert);

    return () => {
      realTimeCommunicationService.off('message_received', handleNewMessage);
      realTimeCommunicationService.off('typing_start', handleTypingStart);
      realTimeCommunicationService.off('typing_stop', handleTypingStop);
      realTimeCommunicationService.off('user_status_changed', handleUserStatusChange);
      realTimeCommunicationService.off('location_update', handleLocationUpdate);
      realTimeCommunicationService.off('thread_updated', handleThreadUpdate);
      realTimeCommunicationService.off('emergency_alert', handleEmergencyAlert);
    };
  }, [isConnected, user?.id, user?.name, typingTimeout]);

  // Auto-connect on mount
  useEffect(() => {
    if (autoConnect && isAuthenticated && !isConnected) {
      connect();
    }

    return () => {
      if (isConnected) {
        disconnect();
      }
    };
  }, [autoConnect, isAuthenticated, connect, disconnect, isConnected]);

  // Location sharing
  useEffect(() => {
    if (!enableLocationSharing || !isConnected) return;

    const startLocationSharing = () => {
      if (!navigator.geolocation) {
        console.warn('Geolocation not supported');
        return;
      }

      locationWatchRef.current = navigator.geolocation.watchPosition(
        async (position) => {
          try {
            await realTimeCommunicationService.updateLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy
            });
          } catch (error) {
            console.error('Failed to update location:', error);
          }
        },
        (error) => {
          console.error('Location error:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      );
    };

    startLocationSharing();

    return () => {
      if (locationWatchRef.current) {
        navigator.geolocation.clearWatch(locationWatchRef.current);
        locationWatchRef.current = null;
      }
    };
  }, [enableLocationSharing, isConnected]);

  // Load initial data
  const loadThreads = useCallback(async (filters?: any) => {
    try {
      setLoading(true);
      const threadsData = await realTimeCommunicationService.getThreads(filters);
      setThreads(threadsData);
    } catch (error) {
      console.error('Failed to load threads:', error);
      setError('Failed to load conversations');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMessages = useCallback(async (threadId: string, options?: any) => {
    try {
      const messagesData = await realTimeCommunicationService.getMessages(threadId, options);
      setMessages(prev => ({
        ...prev,
        [threadId]: messagesData
      }));
    } catch (error) {
      console.error('Failed to load messages:', error);
      setError('Failed to load messages');
    }
  }, []);

  const loadTemplates = useCallback(async (filters?: any) => {
    try {
      const templatesData = await realTimeCommunicationService.getMelbourneTemplates(filters);
      setTemplates(templatesData);
    } catch (error) {
      console.error('Failed to load templates:', error);
      setError('Failed to load templates');
    }
  }, []);

  // Message operations
  const sendMessage = useCallback(async (threadId: string, content: string, options?: any) => {
    try {
      const message = await realTimeCommunicationService.sendMessage({
        threadId,
        content,
        ...options
      });

      // Optimistically add to local state
      setMessages(prev => ({
        ...prev,
        [threadId]: [...(prev[threadId] || []), message]
      }));

      return message;
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message');
      throw error;
    }
  }, []);

  const sendTypingIndicator = useCallback((threadId: string) => {
    if (!isConnected) return;

    realTimeCommunicationService.sendTypingIndicator(threadId);

    // Clear existing timeout
    if (typingTimeoutRef.current[threadId]) {
      clearTimeout(typingTimeoutRef.current[threadId]);
    }

    // Set new timeout to stop typing
    typingTimeoutRef.current[threadId] = setTimeout(() => {
      realTimeCommunicationService.stopTypingIndicator(threadId);
      delete typingTimeoutRef.current[threadId];
    }, typingTimeout);
  }, [isConnected, typingTimeout]);

  const markAsRead = useCallback(async (messageId: string) => {
    try {
      await realTimeCommunicationService.markMessageAsRead(messageId);
    } catch (error) {
      console.error('Failed to mark message as read:', error);
    }
  }, []);

  // Thread operations
  const createThread = useCallback(async (data: any) => {
    try {
      const thread = await realTimeCommunicationService.createThread(data);
      setThreads(prev => [thread, ...prev]);
      return thread;
    } catch (error) {
      console.error('Failed to create thread:', error);
      toast.error('Failed to create conversation');
      throw error;
    }
  }, []);

  const updateThread = useCallback(async (threadId: string, updates: any) => {
    try {
      const updatedThread = await realTimeCommunicationService.updateThread(threadId, updates);
      setThreads(prev => prev.map(t => t.id === threadId ? updatedThread : t));
      return updatedThread;
    } catch (error) {
      console.error('Failed to update thread:', error);
      toast.error('Failed to update conversation');
      throw error;
    }
  }, []);

  // Template operations
  const useTemplate = useCallback(async (templateId: string, variables?: Record<string, any>) => {
    try {
      return await realTimeCommunicationService.useTemplate(templateId, variables);
    } catch (error) {
      console.error('Failed to use template:', error);
      toast.error('Failed to apply template');
      throw error;
    }
  }, []);

  // File upload
  const uploadFile = useCallback(async (file: File, threadId?: string) => {
    try {
      return await realTimeCommunicationService.uploadFile(file, threadId);
    } catch (error) {
      console.error('Failed to upload file:', error);
      toast.error('Failed to upload file');
      throw error;
    }
  }, []);

  // Quick actions for Melbourne operations
  const sendInspectionArrival = useCallback(async (inspectionId: string, eta: number) => {
    try {
      await realTimeCommunicationService.sendInspectionArrivalNotice(inspectionId, eta);
      toast.success('Arrival notice sent');
    } catch (error) {
      console.error('Failed to send arrival notice:', error);
      toast.error('Failed to send arrival notice');
    }
  }, []);

  const sendInspectionComplete = useCallback(async (inspectionId: string, summary: string) => {
    try {
      await realTimeCommunicationService.sendInspectionComplete(inspectionId, summary);
      toast.success('Completion notice sent');
    } catch (error) {
      console.error('Failed to send completion notice:', error);
      toast.error('Failed to send completion notice');
    }
  }, []);

  const broadcastEmergency = useCallback(async (message: string, affectedSuburbs: string[]) => {
    try {
      await realTimeCommunicationService.broadcastEmergency(message, affectedSuburbs);
      toast.success('Emergency broadcast sent');
    } catch (error) {
      console.error('Failed to broadcast emergency:', error);
      toast.error('Failed to broadcast emergency');
    }
  }, []);

  // Utility functions
  const getThreadMessages = useCallback((threadId: string) => {
    return messages[threadId] || [];
  }, [messages]);

  const getTypingUsers = useCallback((threadId: string) => {
    return typingIndicators
      .filter(indicator => indicator.threadId === threadId)
      .map(indicator => indicator.userName);
  }, [typingIndicators]);

  const getUnreadCount = useCallback(() => {
    return threads.reduce((total, thread) => total + thread.unreadCount, 0);
  }, [threads]);

  const getOnlineParticipants = useCallback((threadId: string) => {
    const thread = threads.find(t => t.id === threadId);
    if (!thread) return [];

    return thread.participants.filter(p =>
      onlineUsers.some(ou => ou.id === p.id && ou.status === 'online')
    );
  }, [threads, onlineUsers]);

  return {
    // Connection state
    isConnected,
    loading,
    error,

    // Data
    threads,
    messages,
    onlineUsers,
    templates,
    typingIndicators,

    // Connection management
    connect,
    disconnect,

    // Data loading
    loadThreads,
    loadMessages,
    loadTemplates,

    // Message operations
    sendMessage,
    sendTypingIndicator,
    markAsRead,

    // Thread operations
    createThread,
    updateThread,

    // Template operations
    useTemplate,

    // File operations
    uploadFile,

    // Melbourne-specific actions
    sendInspectionArrival,
    sendInspectionComplete,
    broadcastEmergency,

    // Utility functions
    getThreadMessages,
    getTypingUsers,
    getUnreadCount,
    getOnlineParticipants
  };
}