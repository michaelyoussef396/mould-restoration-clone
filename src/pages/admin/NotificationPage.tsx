import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ProtectedRoute } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Bell,
  Check,
  Eye,
  Filter,
  Loader2,
  MoreHorizontal,
  RefreshCw,
  Search,
  Trash2,
} from 'lucide-react';
import { NotificationService, NotificationWithRelations } from '@/lib/services/notificationService';
import { toast } from '@/hooks/use-toast';

export function NotificationPage() {
  const [notifications, setNotifications] = useState<NotificationWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Fetch notifications
  const fetchNotifications = async (currentPage = 1, reset = false) => {
    try {
      if (reset) setIsLoading(true);

      const params: any = {
        page: currentPage,
        limit: 20
      };

      if (typeFilter !== 'all') {
        params.type = typeFilter;
      }

      if (statusFilter === 'unread') {
        params.unreadOnly = true;
      }

      const response = await NotificationService.getNotifications(params);

      if (Array.isArray(response)) {
        // Handle direct array response (no pagination)
        setNotifications(response);
        setTotal(response.length);
        setTotalPages(1);
      } else {
        // Handle paginated response
        setNotifications(response.data || response);
        setTotal(response.meta?.pagination?.total || 0);
        setTotalPages(response.meta?.pagination?.pages || 1);
      }

      setPage(currentPage);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
      toast({
        title: 'Error',
        description: 'Failed to load notifications. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchNotifications(1, true);
  }, [typeFilter, statusFilter]);

  // Filter notifications based on search
  const filteredNotifications = notifications.filter(notification =>
    searchTerm === '' ||
    notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mark notification as read
  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await NotificationService.markAsRead(notificationId);

      setNotifications(prev =>
        prev.map(n =>
          n.id === notificationId
            ? { ...n, isRead: true, readAt: new Date() }
            : n
        )
      );

      toast({
        title: 'Success',
        description: 'Notification marked as read.'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to mark notification as read.',
        variant: 'destructive'
      });
    }
  };

  // Mark all as read
  const handleMarkAllAsRead = async () => {
    try {
      await NotificationService.markAllAsRead();

      setNotifications(prev =>
        prev.map(n => ({ ...n, isRead: true, readAt: new Date() }))
      );

      toast({
        title: 'Success',
        description: 'All notifications marked as read.'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to mark all notifications as read.',
        variant: 'destructive'
      });
    }
  };

  // Delete notification
  const handleDelete = async (notificationId: string) => {
    try {
      await NotificationService.deleteNotification(notificationId);

      setNotifications(prev => prev.filter(n => n.id !== notificationId));

      toast({
        title: 'Success',
        description: 'Notification deleted successfully.'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete notification.',
        variant: 'destructive'
      });
    }
  };

  // Navigate to related entity
  const handleNavigate = (notification: NotificationWithRelations) => {
    if (notification.leadId) {
      navigate(`/admin/leads/${notification.leadId}`);
    } else if (notification.bookingId) {
      navigate(`/admin/calendar?booking=${notification.bookingId}`);
    }
  };

  // Get priority styles
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'URGENT':
        return 'border-l-red-500 bg-red-50';
      case 'HIGH':
        return 'border-l-orange-500 bg-orange-50';
      case 'NORMAL':
        return 'border-l-blue-500 bg-blue-50';
      case 'LOW':
        return 'border-l-gray-500 bg-gray-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
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

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Bell className="h-6 w-6 text-blue-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                  <p className="text-sm text-gray-600">
                    {total} total • {unreadCount} unread
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fetchNotifications(page, true)}
                  disabled={isLoading}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
                {unreadCount > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleMarkAllAsRead}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Mark all read
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="NEW_LEAD">New Lead</SelectItem>
                    <SelectItem value="BOOKING_CONFIRMED">Booking Confirmed</SelectItem>
                    <SelectItem value="SCHEDULE_CHANGE">Schedule Change</SelectItem>
                    <SelectItem value="URGENT_LEAD">Urgent Lead</SelectItem>
                    <SelectItem value="SYSTEM_ALERT">System Alert</SelectItem>
                    <SelectItem value="MESSAGE">Message</SelectItem>
                    <SelectItem value="PAYMENT">Payment</SelectItem>
                    <SelectItem value="REVIEW">Review</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="unread">Unread</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
              <span className="ml-2 text-gray-500">Loading notifications...</span>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm || typeFilter !== 'all' || statusFilter !== 'all'
                  ? 'No matching notifications'
                  : 'No notifications yet'
                }
              </h3>
              <p className="text-gray-500">
                {searchTerm || typeFilter !== 'all' || statusFilter !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Notifications will appear here when leads are assigned or bookings are updated'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white rounded-lg border-l-4 shadow-sm hover:shadow-md transition-shadow ${
                    !notification.isRead
                      ? getPriorityStyles(notification.priority)
                      : 'border-l-gray-300'
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">
                            {getNotificationIcon(notification.type)}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-sm font-semibold text-gray-900">
                                {notification.title}
                              </h3>
                              {!notification.isRead && (
                                <Badge variant="secondary" className="text-xs">
                                  New
                                </Badge>
                              )}
                              <div
                                className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`}
                                title={`${notification.priority} priority`}
                              />
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {notification.message}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{formatTime(notification.createdAt)}</span>
                            {notification.lead && (
                              <span>
                                Lead: {notification.lead.firstName} {notification.lead.lastName}
                              </span>
                            )}
                            {notification.booking && (
                              <span>
                                Booking: {notification.booking.melbourneSuburb}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center space-x-2">
                            {(notification.leadId || notification.bookingId) && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleNavigate(notification)}
                                className="text-xs"
                              >
                                View details
                              </Button>
                            )}

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => fetchNotifications(page - 1)}
                disabled={page <= 1 || isLoading}
              >
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fetchNotifications(page + 1)}
                disabled={page >= totalPages || isLoading}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default NotificationPage;