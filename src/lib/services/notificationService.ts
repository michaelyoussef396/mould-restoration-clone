import {
  NotificationType,
  NotificationPriority,
  type Notification
} from '@prisma/client';
import { toast } from '@/hooks/use-toast';

export interface NotificationWithRelations extends Notification {
  lead?: {
    id: string;
    firstName: string;
    lastName: string;
  };
  booking?: {
    id: string;
    scheduledDate: Date;
    melbourneSuburb: string;
  };
}

export interface CreateNotificationData {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  relatedEntityType?: string;
  relatedEntityId?: string;
  leadId?: string;
  bookingId?: string;
  priority?: NotificationPriority;
}

export class NotificationService {
  private static API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

  // Get all notifications for the current user
  static async getNotifications(params?: {
    unreadOnly?: boolean;
    page?: number;
    limit?: number;
    type?: NotificationType;
  }): Promise<NotificationWithRelations[]> {
    try {
      const token = localStorage.getItem('auth_token');
      const queryParams = new URLSearchParams();

      if (params?.unreadOnly) queryParams.append('unread', 'true');
      if (params?.page) queryParams.append('page', params.page.toString());
      if (params?.limit) queryParams.append('limit', params.limit.toString());
      if (params?.type) queryParams.append('type', params.type);

      const response = await fetch(
        `${this.API_BASE}/notifications?${queryParams}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  }

  // Get unread notification count
  static async getUnreadCount(): Promise<number> {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${this.API_BASE}/notifications/unread-count`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch unread count');
      }

      const data = await response.json();
      return data.count;
    } catch (error) {
      console.error('Error fetching unread count:', error);
      return 0;
    }
  }

  // Mark notification as read
  static async markAsRead(notificationId: string): Promise<void> {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${this.API_BASE}/notifications/${notificationId}/read`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to mark notification as read');
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  }

  // Mark all notifications as read
  static async markAllAsRead(): Promise<void> {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${this.API_BASE}/notifications/read-all`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to mark all as read');
      }
    } catch (error) {
      console.error('Error marking all as read:', error);
      throw error;
    }
  }

  // Delete notification
  static async deleteNotification(notificationId: string): Promise<void> {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${this.API_BASE}/notifications/${notificationId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete notification');
      }
    } catch (error) {
      console.error('Error deleting notification:', error);
      throw error;
    }
  }

  // Create notification (admin only)
  static async createNotification(data: CreateNotificationData): Promise<Notification> {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${this.API_BASE}/notifications`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create notification');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating notification:', error);
      throw error;
    }
  }

  // Helper function to get notification icon based on type
  static getNotificationIcon(type: NotificationType): string {
    const icons: Record<NotificationType, string> = {
      NEW_LEAD: '🔵',
      BOOKING_CONFIRMED: '🟢',
      SCHEDULE_CHANGE: '🟡',
      URGENT_LEAD: '🔴',
      SYSTEM_ALERT: '⚪',
      MESSAGE: '💬',
      PAYMENT: '💰',
      REVIEW: '⭐',
    };
    return icons[type] || '📌';
  }

  // Helper function to get notification color based on priority
  static getNotificationColor(priority: NotificationPriority): string {
    const colors: Record<NotificationPriority, string> = {
      LOW: 'text-gray-600',
      NORMAL: 'text-blue-600',
      HIGH: 'text-yellow-600',
      URGENT: 'text-red-600',
    };
    return colors[priority] || 'text-gray-600';
  }

  // Show toast notification for real-time updates
  static showToast(notification: NotificationWithRelations) {
    const icon = this.getNotificationIcon(notification.type);

    toast({
      title: `${icon} ${notification.title}`,
      description: notification.message,
      variant: notification.priority === 'URGENT' ? 'destructive' : 'default',
    });

    // Play notification sound for urgent notifications
    if (notification.priority === 'URGENT') {
      this.playNotificationSound();
    }
  }

  // Play notification sound (optional)
  private static playNotificationSound() {
    try {
      const audio = new Audio('/notification-sound.mp3');
      audio.volume = 0.5;
      audio.play().catch(console.error);
    } catch (error) {
      console.error('Error playing notification sound:', error);
    }
  }

  // Format notification time
  static formatNotificationTime(date: Date | string): string {
    const now = new Date();
    const notificationDate = new Date(date);
    const diff = now.getTime() - notificationDate.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;

    return notificationDate.toLocaleDateString('en-AU');
  }
}