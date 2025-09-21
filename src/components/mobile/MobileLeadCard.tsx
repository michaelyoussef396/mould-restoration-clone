import React, { memo, useCallback, useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Phone, Mail, MapPin, Clock, DollarSign, User, FileText,
  MoreVertical, Edit, MessageSquare, Calendar, ChevronRight,
  GripVertical, Zap, AlertCircle, CheckCircle, Star
} from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { LeadWithRelations } from '@/lib/services/leadService';
import { LeadStatus } from '@prisma/client';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import { formatDistanceToNow } from 'date-fns';

// Helper functions for mobile display
const formatEnumValue = (value: string): string =>
  value.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

const getStatusColor = (status: string) => {
  const colors = {
    new: 'bg-blue-100 text-blue-800 border-blue-300',
    qualified: 'bg-green-100 text-green-800 border-green-300',
    contacted: 'bg-orange-100 text-orange-800 border-orange-300',
    quoted: 'bg-purple-100 text-purple-800 border-purple-300',
    converted: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    closed_lost: 'bg-red-100 text-red-800 border-red-300',
    follow_up: 'bg-yellow-100 text-yellow-800 border-yellow-300'
  };
  return colors[status.toLowerCase()] || 'bg-gray-100 text-gray-800 border-gray-300';
};

const getUrgencyIcon = (urgency: string) => {
  const icons = {
    LOW: '📅',
    MEDIUM: '⏰',
    HIGH: '⚡',
    URGENT: '🚨'
  };
  return icons[urgency] || '📅';
};

const getServiceIcon = (serviceType: string) => {
  const icons = {
    MOULD_INSPECTION: '🔍',
    EMERGENCY_RESPONSE: '🚨',
    COMPLETE_REMOVAL: '🧹',
    ADVANCED_FOGGING: '💨',
    COMPREHENSIVE_REMOVAL: '🏠',
    SUBFLOOR_REMEDIATION: '🔨'
  };
  return icons[serviceType] || '🔍';
};

interface MobileLeadCardProps {
  lead: LeadWithRelations;
  onStatusChange?: (leadId: string, status: LeadStatus) => void;
  onEdit?: (lead: LeadWithRelations) => void;
  onContact?: (lead: LeadWithRelations, method: 'phone' | 'email') => void;
  isDragging?: boolean;
  isOverlay?: boolean;
  viewMode?: 'compact' | 'detailed';
  showDragHandle?: boolean;
}

// Compact Lead Card for mobile list view
export const CompactMobileLeadCard = memo(({
  lead,
  onStatusChange,
  onEdit,
  onContact,
  isDragging,
  isOverlay = false,
  showDragHandle = true
}: MobileLeadCardProps) => {
  const { measureRender } = usePerformanceMonitor('CompactMobileLeadCard');
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging
  } = useSortable({
    id: lead.id,
    disabled: isOverlay
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging && !isOverlay ? 0.5 : 1,
    touchAction: 'none',
  };

  // Haptic feedback for mobile interactions
  const triggerHapticFeedback = useCallback((type: 'light' | 'medium' = 'light') => {
    if ('vibrate' in navigator) {
      const patterns = { light: [10], medium: [10, 5, 10] };
      navigator.vibrate(patterns[type]);
    }
  }, []);

  const handleQuickAction = useCallback((action: string, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHapticFeedback('light');

    switch (action) {
      case 'call':
        onContact?.(lead, 'phone');
        break;
      case 'email':
        onContact?.(lead, 'email');
        break;
      case 'edit':
        onEdit?.(lead);
        break;
    }
  }, [lead, onContact, onEdit, triggerHapticFeedback]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
    triggerHapticFeedback('light');
  }, [triggerHapticFeedback]);

  // Memoized lead data for performance
  const leadDisplayData = useMemo(() => ({
    fullName: `${lead.firstName} ${lead.lastName}`,
    timeAgo: formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true }),
    estimatedValue: lead.estimatedValue ? `$${lead.estimatedValue.toLocaleString()}` : null,
    urgencyIcon: getUrgencyIcon(lead.urgency),
    serviceIcon: getServiceIcon(lead.serviceType),
    statusColor: getStatusColor(lead.status)
  }), [lead]);

  React.useEffect(() => {
    measureRender();
  }, [measureRender]);

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`
        ${isOverlay ? 'shadow-2xl rotate-1 scale-105' : 'hover:shadow-md'}
        transition-all duration-200 mb-3 cursor-pointer
        ${isDragging ? 'z-50' : ''}
        ${isExpanded ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
        select-none touch-manipulation
      `}
      onClick={toggleExpanded}
      {...attributes}
    >
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Header Row - Name, Status, Drag Handle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              {showDragHandle && !isOverlay && (
                <div
                  {...listeners}
                  className="cursor-move touch-none p-1 -ml-1 rounded hover:bg-gray-100 active:bg-gray-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GripVertical className="h-5 w-5 text-gray-400" />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-base truncate text-gray-900">
                    {leadDisplayData.fullName}
                  </h3>
                  {lead.urgency === 'URGENT' && (
                    <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                      🚨 URGENT
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate">{lead.suburb}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge className={`${leadDisplayData.statusColor} text-xs px-2 py-1`}>
                {formatEnumValue(lead.status)}
              </Badge>
              <ChevronRight
                className={`h-4 w-4 text-gray-400 transition-transform ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              />
            </div>
          </div>

          {/* Quick Info Row */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-600">
                <span className="text-base">{leadDisplayData.serviceIcon}</span>
                <span className="truncate max-w-24">
                  {formatEnumValue(lead.serviceType)}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="h-3 w-3" />
                <span className="text-xs">{leadDisplayData.timeAgo}</span>
              </div>
            </div>

            {leadDisplayData.estimatedValue && (
              <div className="flex items-center gap-1 text-green-700 font-medium">
                <DollarSign className="h-3 w-3" />
                <span className="text-sm">{leadDisplayData.estimatedValue}</span>
              </div>
            )}
          </div>

          {/* Expanded Details */}
          {isExpanded && (
            <>
              <Separator />
              <div className="space-y-3">
                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {lead.phone && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{lead.phone}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => handleQuickAction('call', e)}
                        className="h-8 px-2"
                      >
                        <Phone className="h-3 w-3" />
                      </Button>
                    </div>
                  )}

                  {lead.email && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{lead.email}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => handleQuickAction('email', e)}
                        className="h-8 px-2"
                      >
                        <Mail className="h-3 w-3" />
                      </Button>
                    </div>
                  )}

                  {lead.address && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="text-xs">{lead.address}</span>
                    </div>
                  )}
                </div>

                {/* Notes Preview */}
                {lead.notes && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Notes</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {lead.notes}
                    </p>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => handleQuickAction('edit', e)}
                    className="flex-1 h-9"
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>

                  {lead.phone && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => handleQuickAction('call', e)}
                      className="flex-1 h-9"
                    >
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 px-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreVertical className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={(e) => handleQuickAction('email', e)}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Inspection
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Add Note
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
});

// Detailed Lead Card for sheet/modal view
export const DetailedMobileLeadCard = memo(({ lead, onEdit, onContact }: MobileLeadCardProps) => {
  const { measureRender } = usePerformanceMonitor('DetailedMobileLeadCard');

  const leadDetails = useMemo(() => ({
    fullName: `${lead.firstName} ${lead.lastName}`,
    createdDate: new Date(lead.createdAt).toLocaleDateString('en-AU'),
    timeAgo: formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true }),
    estimatedValue: lead.estimatedValue ? `$${lead.estimatedValue.toLocaleString()}` : 'Not specified',
    urgencyIcon: getUrgencyIcon(lead.urgency),
    serviceIcon: getServiceIcon(lead.serviceType),
    statusColor: getStatusColor(lead.status)
  }), [lead]);

  React.useEffect(() => {
    measureRender();
  }, [measureRender]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center pb-4 border-b">
        <h2 className="text-2xl font-bold text-gray-900">{leadDetails.fullName}</h2>
        <p className="text-gray-600 mt-1">{lead.suburb}</p>
        <div className="flex justify-center mt-3">
          <Badge className={`${leadDetails.statusColor} px-3 py-1`}>
            {formatEnumValue(lead.status)}
          </Badge>
        </div>
      </div>

      {/* Service & Priority */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{leadDetails.serviceIcon}</span>
            <span className="font-semibold text-blue-900">Service</span>
          </div>
          <p className="text-blue-800 text-sm">{formatEnumValue(lead.serviceType)}</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{leadDetails.urgencyIcon}</span>
            <span className="font-semibold text-orange-900">Priority</span>
          </div>
          <p className="text-orange-800 text-sm">{formatEnumValue(lead.urgency)}</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
          <User className="h-5 w-5" />
          Contact Information
        </h3>

        <div className="space-y-3">
          {lead.phone && (
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="font-medium">{lead.phone}</span>
              </div>
              <Button
                size="sm"
                onClick={() => onContact?.(lead, 'phone')}
                className="bg-green-600 hover:bg-green-700"
              >
                Call Now
              </Button>
            </div>
          )}

          {lead.email && (
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="font-medium truncate">{lead.email}</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onContact?.(lead, 'email')}
              >
                Email
              </Button>
            </div>
          )}

          {lead.address && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="h-5 w-5 text-gray-600 flex-shrink-0" />
              <span className="font-medium">{lead.address}</span>
            </div>
          )}
        </div>
      </div>

      {/* Lead Details */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Lead Details
        </h3>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Created:</span>
            <p className="font-medium">{leadDetails.createdDate}</p>
            <p className="text-xs text-gray-500">{leadDetails.timeAgo}</p>
          </div>
          <div>
            <span className="text-gray-600">Estimated Value:</span>
            <p className="font-medium">{leadDetails.estimatedValue}</p>
          </div>
          <div>
            <span className="text-gray-600">Source:</span>
            <p className="font-medium">{formatEnumValue(lead.source)}</p>
          </div>
          <div>
            <span className="text-gray-600">Assigned To:</span>
            <p className="font-medium">{lead.assignedTo?.name || 'Unassigned'}</p>
          </div>
        </div>
      </div>

      {/* Notes */}
      {lead.notes && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-900">Notes</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 whitespace-pre-wrap">{lead.notes}</p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          onClick={() => onEdit?.(lead)}
          className="flex-1 h-12"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Lead
        </Button>
        <Button
          variant="outline"
          className="flex-1 h-12"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Schedule
        </Button>
      </div>
    </div>
  );
});

// Main export
export const MobileLeadCard = memo((props: MobileLeadCardProps) => {
  if (props.viewMode === 'detailed') {
    return <DetailedMobileLeadCard {...props} />;
  }
  return <CompactMobileLeadCard {...props} />;
});

MobileLeadCard.displayName = 'MobileLeadCard';
CompactMobileLeadCard.displayName = 'CompactMobileLeadCard';
DetailedMobileLeadCard.displayName = 'DetailedMobileLeadCard';