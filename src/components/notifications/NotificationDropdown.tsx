import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  CheckCheck,
  Eye,
  ExternalLink,
  Loader2,
  MoreHorizontal,
  Trash2,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NotificationService, NotificationWithRelations } from '@/lib/services/notificationService';

interface NotificationDropdownProps {
  onNotificationRead: () => void;
  onMarkAllRead: () => void;
  onClose: () => void;
}

export function NotificationDropdown({
  onNotificationRead,
  onMarkAllRead,
  onClose
}: NotificationDropdownProps) {
  const [notifications, setNotifications] = useState<NotificationWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMarkingAllRead, setIsMarkingAllRead] = useState(false);
  const navigate = useNavigate();

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      setIsLoading(true);
      const data = await NotificationService.getNotifications({ limit: 10 });
      setNotifications(data);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Mark notification as read
  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await NotificationService.markAsRead(notificationId);

      // Update local state
      setNotifications(prev =>
        prev.map(n =>
          n.id === notificationId
            ? { ...n, isRead: true, readAt: new Date() }
            : n
        )
      );

      onNotificationRead();
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  // Mark all as read
  const handleMarkAllAsRead = async () => {
    try {
      setIsMarkingAllRead(true);
      await NotificationService.markAllAsRead();

      // Update local state
      setNotifications(prev =>
        prev.map(n => ({ ...n, isRead: true, readAt: new Date() }))
      );

      onMarkAllRead();
    } catch (error) {
      console.error('Failed to mark all as read:', error);
    } finally {
      setIsMarkingAllRead(false);
    }
  };

  // Delete notification
  const handleDelete = async (notificationId: string) => {
    try {
      await NotificationService.deleteNotification(notificationId);

      // Update local state
      setNotifications(prev => prev.filter(n => n.id !== notificationId));

      onNotificationRead();
    } catch (error) {
      console.error('Failed to delete notification:', error);
    }
  };

  // Navigate to related entity
  const handleNavigate = (notification: NotificationWithRelations) => {
    if (notification.leadId) {
      navigate(`/admin/leads/${notification.leadId}`);
      onClose();
    } else if (notification.bookingId) {
      navigate(`/admin/calendar?booking=${notification.bookingId}`);
      onClose();
    }
  };

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'URGENT':
        return 'bg-red-500';
      case 'HIGH':
        return 'bg-orange-500';
      case 'NORMAL':
        return 'bg-blue-500';
      case 'LOW':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Format notification time
  const formatTime = (date: Date | string) => {
    return NotificationService.formatNotificationTime(date);
  };

  // Get notification icon
  const getNotificationIcon = (type: string) => {
    return NotificationService.getNotificationIcon(type);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  if (isLoading) {
    return (
      <div className="p-4 flex items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
        <span className="ml-2 text-sm text-gray-500">Loading notifications...</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold text-gray-900">Notifications</h3>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {unreadCount} new
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-1">
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMarkAllAsRead}
              disabled={isMarkingAllRead}
              className="text-xs"
            >
              {isMarkingAllRead ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <CheckCheck className="h-3 w-3" />
              )}
              <span className="ml-1">Mark all read</span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              navigate('/admin/notifications');
              onClose();
            }}
            className="text-xs"
          >
            <ExternalLink className="h-3 w-3" />
            <span className="ml-1">View all</span>
          </Button>
        </div>
      </div>

      {/* Notifications List */}
      <ScrollArea className="h-[400px]">
        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-4xl mb-2">🔔</div>
            <p className="text-sm text-gray-500 mb-1">No notifications yet</p>
            <p className="text-xs text-gray-400">
              You'll see notifications here when leads are assigned or bookings are updated
            </p>
          </div>
        ) : (
          <div className="divide-y">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`relative p-4 hover:bg-gray-50 transition-colors ${
                  !notification.isRead ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-lg">
                        {getNotificationIcon(notification.type)}
                      </span>
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {notification.title}
                      </h4>
                      <div
                        className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`}
                        title={`${notification.priority} priority`}
                      />
                    </div>

                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      {notification.message}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {formatTime(notification.createdAt)}
                      </span>

                      {(notification.leadId || notification.bookingId) && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleNavigate(notification)}
                          className="text-xs h-auto p-1"
                        >
                          View details
                        </Button>
                      )}
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-auto p-1">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {!notification.isRead && (
                        <DropdownMenuItem
                          onClick={() => handleMarkAsRead(notification.id)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Mark as read
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        onClick={() => handleDelete(notification.id)}
                        className="text-red-600"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="p-3 border-t bg-gray-50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              navigate('/admin/notifications');
              onClose();
            }}
            className="w-full text-xs"
          >
            View all notifications
          </Button>
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;