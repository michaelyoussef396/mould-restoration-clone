import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { NotificationService } from '@/lib/services/notificationService';
import { NotificationDropdown } from './NotificationDropdown';
import { useWebSocketContext } from '@/contexts/WebSocketContext';

interface NotificationBellProps {
  className?: string;
}

export function NotificationBell({ className }: NotificationBellProps) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get WebSocket context for real-time updates
  const { unreadNotifications, isConnected, markNotificationAsRead } = useWebSocketContext();

  // Fetch unread count
  const fetchUnreadCount = async () => {
    try {
      const count = await NotificationService.getUnreadCount();
      setUnreadCount(count);
    } catch (error) {
      console.error('Failed to fetch unread count:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchUnreadCount();
  }, []);

  // Use WebSocket unread count when connected, fallback to polling when disconnected
  useEffect(() => {
    if (isConnected) {
      setUnreadCount(unreadNotifications);
    }
  }, [isConnected, unreadNotifications]);

  // Refresh count every 30 seconds only when WebSocket is disconnected
  useEffect(() => {
    if (!isConnected) {
      const interval = setInterval(() => {
        if (!isOpen) {
          fetchUnreadCount();
        }
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [isOpen, isConnected]);

  // Handle notification read - use WebSocket when connected
  const handleNotificationRead = () => {
    if (!isConnected) {
      fetchUnreadCount();
    }
    // When WebSocket is connected, the context handles the unread count updates
  };

  // Handle mark all as read
  const handleMarkAllRead = () => {
    setUnreadCount(0);
    // The WebSocket context will sync this automatically
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`relative hover:bg-gray-100 ${className}`}
          disabled={isLoading}
        >
          <Bell className="h-5 w-5 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center min-w-[20px]">
              {unreadCount > 99 ? '99+' : unreadCount}
            </span>
          )}
          <span className="sr-only">
            {unreadCount > 0
              ? `${unreadCount} unread notifications`
              : 'No unread notifications'
            }
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-0"
        align="end"
        sideOffset={5}
      >
        <NotificationDropdown
          onNotificationRead={handleNotificationRead}
          onMarkAllRead={handleMarkAllRead}
          onClose={() => setIsOpen(false)}
        />
      </PopoverContent>
    </Popover>
  );
}

export default NotificationBell;