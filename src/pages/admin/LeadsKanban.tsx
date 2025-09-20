import React, { useEffect, useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, TouchSensor, useSensor, useSensors, useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Users,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Plus,
  Search,
  Filter,
  Grid,
  List,
  MoreHorizontal,
  MessageSquare,
  UserPlus,
  Archive,
  Star,
  User,
  Edit
} from 'lucide-react';
import { ProtectedRoute } from '@/contexts/AuthContext';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { ServiceType, LeadStatus, LeadSource, Urgency } from '@prisma/client';
import { useAuth } from '@/contexts/AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { CommunicationModal } from '@/components/CommunicationModal';
import { TechnicianAssignmentModal } from '@/components/TechnicianAssignmentModal';
import { DatePickerMultiple } from '@/components/ui/date-picker-multiple';
import { toast } from '@/hooks/use-toast';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';

// Helper functions - MUST be declared before usage
function formatEnumValue(value: string): string {
  return value
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

const formatServiceType = (serviceType: string) => {
  return serviceType
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'new': return 'bg-blue-100 text-blue-800';
    case 'qualified': return 'bg-green-100 text-green-800';
    case 'contacted': return 'bg-orange-100 text-orange-800';
    case 'quoted': return 'bg-purple-100 text-purple-800';
    case 'converted': return 'bg-emerald-100 text-emerald-800';
    case 'closed_lost': return 'bg-red-100 text-red-800';
    case 'follow_up': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getUrgencyColor = (urgency: string) => {
  switch (urgency.toLowerCase()) {
    case 'urgent': return 'bg-red-100 text-red-800';
    case 'high': return 'bg-orange-100 text-orange-800';
    case 'medium': return 'bg-yellow-100 text-yellow-800';
    case 'low': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

// Lead status columns configuration
const LEAD_COLUMNS = [
  { id: 'NEW', title: 'New Leads', color: 'bg-blue-50 border-blue-200' },
  { id: 'CONTACTED', title: 'Contacted', color: 'bg-orange-50 border-orange-200' },
  { id: 'QUALIFIED', title: 'Qualified', color: 'bg-green-50 border-green-200' },
  { id: 'QUOTED', title: 'Quoted', color: 'bg-purple-50 border-purple-200' },
  { id: 'CONVERTED', title: 'Converted', color: 'bg-emerald-50 border-emerald-200' },
  { id: 'FOLLOW_UP', title: 'Follow Up', color: 'bg-yellow-50 border-yellow-200' },
  { id: 'CLOSED_LOST', title: 'Closed Lost', color: 'bg-red-50 border-red-200' }
];

// Status change alternatives for mobile and backup
const STATUS_OPTIONS = Object.values(LeadStatus).map(status => ({
  value: status,
  label: formatEnumValue(status),
  color: (() => {
    switch (status) {
      case 'NEW': return 'bg-blue-100 text-blue-800';
      case 'CONTACTED': return 'bg-orange-100 text-orange-800';
      case 'QUALIFIED': return 'bg-green-100 text-green-800';
      case 'QUOTED': return 'bg-purple-100 text-purple-800';
      case 'CONVERTED': return 'bg-emerald-100 text-emerald-800';
      case 'FOLLOW_UP': return 'bg-yellow-100 text-yellow-800';
      case 'CLOSED_LOST': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  })()
}));

// Lead Card Component with drag and drop and mobile-first design
interface LeadCardProps {
  lead: LeadWithRelations;
  onLeadClick: (lead: LeadWithRelations) => void;
  onCommunicationClick: (lead: LeadWithRelations) => void;
  onEditClick: (lead: LeadWithRelations) => void;
  onStatusChange: (leadId: string, newStatus: LeadStatus) => void;
  isDragging?: boolean;
  isMobile?: boolean;
}

function LeadCard({ lead, onLeadClick, onCommunicationClick, onEditClick, onStatusChange, isDragging = false, isMobile = false }: LeadCardProps) {
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  // Swipe gesture support for mobile
  const swipeHandlers = useSwipeGesture({
    onSwipeRight: () => {
      if (isMobile) {
        onEditClick(lead);
      }
    },
    onSwipeLeft: () => {
      if (isMobile) {
        onCommunicationClick(lead);
      }
    },
    threshold: 80,
    restrained: 150
  });

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: lead.id,
    disabled: isMobile // Disable drag on mobile
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  };

  const handleStatusChange = (newStatus: LeadStatus) => {
    onStatusChange(lead.id, newStatus);
    setShowStatusMenu(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent card click when clicking on interactive elements
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('[data-status-trigger]')) {
      return;
    }
    onLeadClick(lead);
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(!isMobile ? listeners : {})}
      {...(isMobile ? swipeHandlers : {})}
      className={`lead-card cursor-pointer hover:shadow-md transition-all duration-200 touch-manipulation select-none ${
        isDragging ? 'shadow-lg scale-105' : ''
      } ${isSortableDragging ? 'z-50 rotate-3' : ''}`}
      onClick={handleCardClick}
    >
      <CardContent className="p-4 sm:p-4">
        <div className="space-y-3">
          {/* Header with name, status badge, and urgency */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-base leading-tight mb-1">
                {lead.firstName} {lead.lastName}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{formatServiceType(lead.serviceType)}</p>

              {/* Mobile-first status badge with dropdown */}
              <div className="flex items-center gap-2">
                <DropdownMenu open={showStatusMenu} onOpenChange={setShowStatusMenu}>
                  <DropdownMenuTrigger asChild>
                    <button
                      data-status-trigger="true"
                      className={`${getStatusColor(lead.status)} px-3 py-2 rounded-full text-xs font-medium hover:opacity-80 transition-opacity min-h-[48px] min-w-[100px] flex items-center justify-center touch-manipulation`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowStatusMenu(!showStatusMenu);
                      }}
                    >
                      {formatEnumValue(lead.status)}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {STATUS_OPTIONS.map((status) => (
                      <DropdownMenuItem
                        key={status.value}
                        onClick={() => handleStatusChange(status.value)}
                        className="flex items-center justify-between min-h-[48px] touch-manipulation py-3"
                      >
                        <span>{status.label}</span>
                        <div className={`w-3 h-3 rounded-full ${status.color.replace('text-', 'bg-').replace('100', '500')}`} />
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Badge className={`${getUrgencyColor(lead.urgency)} text-xs flex-shrink-0 min-h-[24px]`} variant="secondary">
              {formatEnumValue(lead.urgency)}
            </Badge>
          </div>

          {/* Contact information - Mobile optimized */}
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-700">
              <Mail className="h-4 w-4 mr-3 flex-shrink-0 text-gray-400" />
              <span className="truncate font-medium">{lead.email}</span>
            </div>
            <a
              href={`tel:${lead.phone}`}
              className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
              <span className="truncate font-medium">{lead.phone}</span>
            </a>
            <div className="flex items-center text-sm text-gray-700">
              <MapPin className="h-4 w-4 mr-3 flex-shrink-0 text-gray-400" />
              <span className="truncate">{lead.suburb}</span>
            </div>
          </div>

          {/* Booking dates if available */}
          {lead.bookingDates && (() => {
            try {
              const dates = JSON.parse(lead.bookingDates);
              if (Array.isArray(dates) && dates.length > 0) {
                return (
                  <div className="flex items-center text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                    <Calendar className="h-3 w-3 mr-2" />
                    {dates.length} available date{dates.length > 1 ? 's' : ''}
                  </div>
                );
              }
            } catch {
              return null;
            }
            return null;
          })()}

          {/* Assignment and source */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
            <span className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {lead.assignedTo ? `${lead.assignedTo.name}` : 'Unassigned'}
            </span>
            <span className="capitalize">{formatEnumValue(lead.source)}</span>
          </div>

          {/* Action buttons - Mobile optimized with 48px touch targets */}
          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-gray-400">
              {new Date(lead.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onEditClick(lead);
                }}
                className="h-12 w-12 p-0 touch-manipulation flex-shrink-0 hover:bg-green-50 hover:text-green-600"
                title="Edit Lead"
              >
                <Edit className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onCommunicationClick(lead);
                }}
                className="h-12 w-12 p-0 touch-manipulation flex-shrink-0 hover:bg-blue-50 hover:text-blue-600"
                title="Add Communication"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Swipe hint for mobile users */}
          {isMobile && (
            <div className="flex items-center justify-center pt-2 border-t border-gray-100">
              <div className="text-xs text-gray-400 flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span>←</span> Edit
                </span>
                <span className="flex items-center gap-1">
                  Communication <span>→</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Kanban Column Component - Mobile-first responsive design
interface KanbanColumnProps {
  column: typeof LEAD_COLUMNS[0];
  leads: LeadWithRelations[];
  onLeadClick: (lead: LeadWithRelations) => void;
  onCommunicationClick: (lead: LeadWithRelations) => void;
  onEditClick: (lead: LeadWithRelations) => void;
  onStatusChange: (leadId: string, newStatus: LeadStatus) => void;
  onAddLead?: () => void;
  isMobile?: boolean;
}

function KanbanColumn({ column, leads, onLeadClick, onCommunicationClick, onEditClick, onStatusChange, onAddLead, isMobile = false }: KanbanColumnProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
    disabled: isMobile // Disable drop zone on mobile
  });

  return (
    <div className={`kanban-column
      ${isMobile ? 'w-full mb-6' : 'flex-shrink-0 w-full sm:w-80 min-w-[300px]'}
      ${column.color} rounded-lg border-2
      ${isOver && !isMobile ? 'border-solid border-blue-500 bg-blue-50 scale-105' : 'border-dashed'}
      transition-all duration-200 shadow-sm
    `}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-bold text-gray-900 text-base sm:text-lg">{column.title}</h2>
            <p className="text-sm text-gray-600 font-medium">{leads.length} leads</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onAddLead}
            className="h-12 w-12 p-0 touch-manipulation hover:bg-white hover:shadow-md transition-all"
            title="Add Lead"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div ref={setNodeRef} className={`min-h-[200px] ${isMobile ? '' : 'max-h-[calc(100vh-300px)] overflow-y-auto'}`}>
          <SortableContext items={leads.map(lead => lead.id)} strategy={verticalListSortingStrategy}>
            <div className={`space-y-3 ${isMobile ? '' : 'overflow-y-auto pr-2'}`}>
              {leads.map((lead) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  onLeadClick={onLeadClick}
                  onCommunicationClick={onCommunicationClick}
                  onEditClick={onEditClick}
                  onStatusChange={onStatusChange}
                  isMobile={isMobile}
                />
              ))}
              {leads.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-6xl mb-4">📋</div>
                  <p className="text-sm font-medium">No leads in {column.title}</p>
                  <p className="text-xs mt-1">
                    {isMobile ? 'Tap + to add a lead' : 'Drop leads here or click + to add'}
                  </p>
                </div>
              )}
            </div>
          </SortableContext>
        </div>
      </div>
    </div>
  );
}

// Advanced Filters Sidebar
interface FilterSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: any;
  onFiltersChange: (filters: any) => void;
}

function FilterSidebar({ open, onOpenChange, filters, onFiltersChange }: FilterSidebarProps) {
  if (!open) return null;

  return (
    <>
      {/* Mobile overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden" onClick={() => onOpenChange(false)} />

      <div className={`${open ? 'translate-x-0' : '-translate-x-full'} fixed sm:relative z-50 sm:z-auto w-80 h-full sm:h-auto bg-white border-r border-gray-200 p-4 sm:p-6 space-y-4 sm:space-y-6 transition-transform sm:transition-none overflow-y-auto`}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Advanced Filters</h2>
          <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)} className="h-12 w-12 p-0 touch-manipulation">
            ×
          </Button>
        </div>

      {/* Service Type Filter */}
      <div>
        <label className="block text-sm font-medium mb-2">Service Type</label>
        <Select value={filters.serviceType || 'all'} onValueChange={(value) =>
          onFiltersChange({ ...filters, serviceType: value === 'all' ? null : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Services" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            {Object.values(ServiceType).map((type) => (
              <SelectItem key={type} value={type}>
                {formatServiceType(type)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Urgency Filter */}
      <div>
        <label className="block text-sm font-medium mb-2">Urgency</label>
        <Select value={filters.urgency || 'all'} onValueChange={(value) =>
          onFiltersChange({ ...filters, urgency: value === 'all' ? null : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Urgencies" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Urgencies</SelectItem>
            {Object.values(Urgency).map((urgency) => (
              <SelectItem key={urgency} value={urgency}>
                {formatEnumValue(urgency)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Source Filter */}
      <div>
        <label className="block text-sm font-medium mb-2">Lead Source</label>
        <Select value={filters.source || 'all'} onValueChange={(value) =>
          onFiltersChange({ ...filters, source: value === 'all' ? null : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Sources" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            {Object.values(LeadSource).map((source) => (
              <SelectItem key={source} value={source}>
                {formatEnumValue(source)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Assignment Filter */}
      <div>
        <label className="block text-sm font-medium mb-2">Assignment</label>
        <Select value={filters.assignment || 'all'} onValueChange={(value) =>
          onFiltersChange({ ...filters, assignment: value === 'all' ? null : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Assignments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Assignments</SelectItem>
            <SelectItem value="assigned">Assigned</SelectItem>
            <SelectItem value="unassigned">Unassigned</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Range */}
      <div>
        <label className="block text-sm font-medium mb-2">Date Created</label>
        <Select value={filters.dateRange || 'all'} onValueChange={(value) =>
          onFiltersChange({ ...filters, dateRange: value === 'all' ? null : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="yesterday">Yesterday</SelectItem>
            <SelectItem value="last7days">Last 7 Days</SelectItem>
            <SelectItem value="last30days">Last 30 Days</SelectItem>
            <SelectItem value="last90days">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full" onClick={() => onFiltersChange({})}>
        Clear All Filters
      </Button>
      </div>
    </>
  );
}

// Bulk Operations Toolbar
interface BulkOperationsProps {
  selectedLeads: string[];
  onClearSelection: () => void;
  onBulkAction: (action: string) => void;
}

function BulkOperations({ selectedLeads, onClearSelection, onBulkAction }: BulkOperationsProps) {
  if (selectedLeads.length === 0) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-blue-900">
            {selectedLeads.length} lead{selectedLeads.length > 1 ? 's' : ''} selected
          </span>
          <Button variant="ghost" size="sm" onClick={onClearSelection}>
            Clear Selection
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => onBulkAction('assign')}>
            <UserPlus className="h-4 w-4 mr-2" />
            Assign
          </Button>
          <Button size="sm" variant="outline" onClick={() => onBulkAction('status')}>
            <Star className="h-4 w-4 mr-2" />
            Change Status
          </Button>
          <Button size="sm" variant="outline" onClick={() => onBulkAction('archive')}>
            <Archive className="h-4 w-4 mr-2" />
            Archive
          </Button>
        </div>
      </div>
    </div>
  );
}

// Edit Lead Form Component
interface EditLeadFormProps {
  lead: LeadWithRelations;
  onLeadUpdated: () => void;
  onCancel: () => void;
}

function EditLeadForm({ lead, onLeadUpdated, onCancel }: EditLeadFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    suburb: lead.suburb,
    address: lead.address || '',
    postcode: lead.postcode || '',
    serviceType: lead.serviceType,
    urgency: lead.urgency,
    source: lead.source,
    status: lead.status,
    notes: lead.notes || '',
  });

  // Initialize booking dates
  useEffect(() => {
    if (lead.bookingDates) {
      try {
        const dates = JSON.parse(lead.bookingDates);
        setSelectedDates(Array.isArray(dates) ? dates : []);
      } catch {
        setSelectedDates([]);
      }
    } else {
      setSelectedDates([]);
    }
  }, [lead.bookingDates]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await LeadService.updateLead(lead.id, {
        ...formData,
        bookingDates: selectedDates,
      });

      toast({
        title: "Success",
        description: "Lead updated successfully",
      });

      onLeadUpdated();
    } catch (error) {
      console.error('Failed to update lead:', error);
      toast({
        title: "Error",
        description: "Failed to update lead. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="suburb">Suburb *</Label>
          <Input
            id="suburb"
            value={formData.suburb}
            onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="postcode">Postcode</Label>
          <Input
            id="postcode"
            value={formData.postcode}
            onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="serviceType">Service Type</Label>
          <Select
            value={formData.serviceType}
            onValueChange={(value) => setFormData({ ...formData, serviceType: value as ServiceType })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.values(ServiceType).map((type) => (
                <SelectItem key={type} value={type}>
                  {formatServiceType(type)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="urgency">Urgency</Label>
          <Select
            value={formData.urgency}
            onValueChange={(value) => setFormData({ ...formData, urgency: value as Urgency })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.values(Urgency).map((urgency) => (
                <SelectItem key={urgency} value={urgency}>
                  {formatEnumValue(urgency)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="status">Status</Label>
          <Select
            value={formData.status}
            onValueChange={(value) => setFormData({ ...formData, status: value as LeadStatus })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.values(LeadStatus).map((status) => (
                <SelectItem key={status} value={status}>
                  {formatEnumValue(status)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="source">Lead Source</Label>
          <Select
            value={formData.source}
            onValueChange={(value) => setFormData({ ...formData, source: value as LeadSource })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.values(LeadSource).map((source) => (
                <SelectItem key={source} value={source}>
                  {formatEnumValue(source)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={3}
        />
      </div>

      <DatePickerMultiple
        selectedDates={selectedDates}
        onDatesChange={setSelectedDates}
        label="Available Booking Dates"
        placeholder="Select dates when customer is available"
        maxDates={5}
      />

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Lead'}
        </Button>
      </DialogFooter>
    </form>
  );
}

// Main Kanban Board Component
export function LeadsKanban() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<LeadWithRelations[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<LeadWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<LeadWithRelations | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [filters, setFilters] = useState<any>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [communicationModalOpen, setCommunicationModalOpen] = useState(false);
  const [communicationLead, setCommunicationLead] = useState<LeadWithRelations | null>(null);
  const [technicianAssignmentOpen, setTechnicianAssignmentOpen] = useState(false);
  const [technicianAssignmentLeads, setTechnicianAssignmentLeads] = useState<LeadWithRelations[]>([]);
  const [addLeadModalOpen, setAddLeadModalOpen] = useState(false);
  const [addLeadStatus, setAddLeadStatus] = useState<LeadStatus | null>(null);
  const [dragError, setDragError] = useState<string | null>(null);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Improved sensors with better mobile support
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: isMobile ? 15 : 8, // Longer distance on mobile to prevent accidental drags
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: isMobile ? 500 : 250, // Longer delay on mobile
        tolerance: isMobile ? 10 : 5, // More tolerance on mobile
      },
    })
  );

  const loadLeads = async () => {
    try {
      const data = await LeadService.getAllLeads();
      setLeads(data);
      setFilteredLeads(data);
    } catch (error) {
      console.error('Failed to load leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  // Apply filters and search
  useEffect(() => {
    let filtered = leads;

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter((lead) =>
        `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        lead.suburb.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters
    if (filters.serviceType) {
      filtered = filtered.filter(lead => lead.serviceType === filters.serviceType);
    }
    if (filters.urgency) {
      filtered = filtered.filter(lead => lead.urgency === filters.urgency);
    }
    if (filters.source) {
      filtered = filtered.filter(lead => lead.source === filters.source);
    }
    if (filters.assignment) {
      if (filters.assignment === 'assigned') {
        filtered = filtered.filter(lead => lead.assignedToId);
      } else if (filters.assignment === 'unassigned') {
        filtered = filtered.filter(lead => !lead.assignedToId);
      }
    }

    setFilteredLeads(filtered);
  }, [leads, searchTerm, filters]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    setDragError(null);

    // Add haptic feedback on mobile
    if (isMobile && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) {
      setDragError('Drop cancelled');
      return;
    }

    const leadId = active.id as string;
    const newStatus = over.id as LeadStatus;

    // Find the lead being moved
    const lead = leads.find(l => l.id === leadId);
    if (!lead || lead.status === newStatus) return;

    try {
      // Show loading state
      setActiveId(`loading-${leadId}`);

      // Update lead status
      await LeadService.updateLead(leadId, { status: newStatus });

      // Add haptic feedback on success
      if (isMobile && 'vibrate' in navigator) {
        navigator.vibrate([50, 50, 50]);
      }

      // Refresh leads data
      await loadLeads();
    } catch (error) {
      console.error('Failed to update lead status:', error);
      setDragError('Failed to update lead status. Please try again.');

      // Error vibration
      if (isMobile && 'vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }
    } finally {
      setActiveId(null);
    }
  };

  // Alternative status change method for mobile/backup
  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    const lead = leads.find(l => l.id === leadId);
    if (!lead || lead.status === newStatus) return;

    try {
      await LeadService.updateLead(leadId, { status: newStatus });

      // Add haptic feedback on success
      if (isMobile && 'vibrate' in navigator) {
        navigator.vibrate(50);
      }

      await loadLeads();
    } catch (error) {
      console.error('Failed to update lead status:', error);
      setDragError('Failed to update lead status. Please try again.');
    }
  };

  const handleLeadClick = (lead: LeadWithRelations) => {
    setSelectedLead(lead);
    setViewDialogOpen(true);
  };

  const handleEditLead = (lead: LeadWithRelations) => {
    setSelectedLead(lead);
    setEditDialogOpen(true);
  };

  const handleCommunicationClick = (lead: LeadWithRelations) => {
    setCommunicationLead(lead);
    setCommunicationModalOpen(true);
  };

  const handleBulkAction = (action: string) => {
    const selectedLeadObjects = leads.filter(lead => selectedLeads.includes(lead.id));

    if (action === 'assign') {
      setTechnicianAssignmentLeads(selectedLeadObjects);
      setTechnicianAssignmentOpen(true);
    } else if (action === 'status') {
      // TODO: Implement bulk status change
      console.log('Bulk status change for leads:', selectedLeads);
    } else if (action === 'archive') {
      // TODO: Implement bulk archive
      console.log('Bulk archive for leads:', selectedLeads);
    }
  };

  const handleAddLead = (status: LeadStatus) => {
    setAddLeadStatus(status);
    setAddLeadModalOpen(true);
  };

  const handleAddLeadFromHeader = () => {
    setAddLeadStatus('NEW' as LeadStatus);
    setAddLeadModalOpen(true);
  };

  // Group leads by status
  const groupedLeads = LEAD_COLUMNS.reduce((acc, column) => {
    acc[column.id] = filteredLeads.filter(lead => lead.status === column.id);
    return acc;
  }, {} as Record<string, LeadWithRelations[]>);

  const activeLead = activeId ? leads.find(lead => lead.id === activeId) : null;

  if (isLoading) {
    return (
      <ProtectedRoute requireAdmin>
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading leads...</p>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requireAdmin>
      <div className={`min-h-screen bg-gray-50 ${isMobile ? 'flex flex-col' : 'flex overflow-x-hidden'}`}>
        {/* Filter Sidebar */}
        <FilterSidebar
          open={filterSidebarOpen}
          onOpenChange={setFilterSidebarOpen}
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">Lead Pipeline</h1>
                <p className="text-sm text-gray-600 hidden sm:block">
                  {isMobile ? 'Tap status badges to change' : 'Drag and drop or tap status badges to move leads'}
                </p>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilterSidebarOpen(!filterSidebarOpen)}
                  className={isMobile ? "h-12 w-12 p-0 touch-manipulation" : ""}
                  title="Toggle Filters"
                >
                  <Filter className="h-4 w-4" />
                  {!isMobile && <span className="ml-2">Filters</span>}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/admin/leads')}
                  className={isMobile ? "h-12 w-12 p-0 touch-manipulation" : ""}
                  title="List View"
                >
                  <List className="h-4 w-4" />
                  {!isMobile && <span className="ml-2">List View</span>}
                </Button>
                <Button
                  size="sm"
                  onClick={handleAddLeadFromHeader}
                  className={isMobile ? "h-12 w-12 p-0 touch-manipulation" : ""}
                  title="Add New Lead"
                >
                  <Plus className="h-4 w-4" />
                  {!isMobile && <span className="ml-2">Add Lead</span>}
                </Button>
              </div>
            </div>
          </div>

          {/* Search and Status */}
          <div className="p-4">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-10"
                />
              </div>
            </div>

            {/* Error Message */}
            {dragError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <div className="flex items-center">
                  <span className="font-medium">Error:</span>
                  <span className="ml-2">{dragError}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDragError(null)}
                    className="ml-auto h-8 w-8 p-0 touch-manipulation"
                    title="Dismiss Error"
                  >
                    ×
                  </Button>
                </div>
              </div>
            )}

            {/* Bulk Operations */}
            <BulkOperations
              selectedLeads={selectedLeads}
              onClearSelection={() => setSelectedLeads([])}
              onBulkAction={handleBulkAction}
            />

            {/* Kanban Board */}
            <DndContext
              sensors={sensors}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <div data-testid="kanban-board">
              {isMobile ? (
                // Mobile: Vertical stack layout
                <div className="space-y-4">
                  {LEAD_COLUMNS.map((column) => (
                    <KanbanColumn
                      key={column.id}
                      column={column}
                      leads={groupedLeads[column.id] || []}
                      onLeadClick={handleLeadClick}
                      onCommunicationClick={handleCommunicationClick}
                      onEditClick={handleEditLead}
                      onStatusChange={handleStatusChange}
                      onAddLead={() => handleAddLead(column.id as LeadStatus)}
                      isMobile={true}
                    />
                  ))}
                </div>
              ) : (
                // Desktop: Horizontal scrollable layout
                <div className="overflow-x-auto">
                  <div className="flex space-x-6 pb-6 min-w-max">
                    {LEAD_COLUMNS.map((column) => (
                      <KanbanColumn
                        key={column.id}
                        column={column}
                        leads={groupedLeads[column.id] || []}
                        onLeadClick={handleLeadClick}
                        onCommunicationClick={handleCommunicationClick}
                        onEditClick={handleEditLead}
                        onStatusChange={handleStatusChange}
                        onAddLead={() => handleAddLead(column.id as LeadStatus)}
                        isMobile={false}
                      />
                    ))}
                  </div>
                </div>
              )}

              <DragOverlay>
                {activeLead ? (
                  <LeadCard
                    lead={activeLead}
                    onLeadClick={() => {}}
                    onCommunicationClick={() => {}}
                    onEditClick={() => {}}
                    onStatusChange={() => {}}
                    isDragging
                    isMobile={isMobile}
                  />
                ) : null}
              </DragOverlay>
              </div>
            </DndContext>
          </div>
        </div>
      </div>

      {/* Lead Details Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedLead && `${selectedLead.firstName} ${selectedLead.lastName}`}
            </DialogTitle>
            <DialogDescription>Lead details and timeline</DialogDescription>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-6">
              {/* Quick summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Service</label>
                  <p className="text-sm">{formatServiceType(selectedLead.serviceType)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Status</label>
                  <Badge className={getStatusColor(selectedLead.status)}>
                    {formatEnumValue(selectedLead.status)}
                  </Badge>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Urgency</label>
                  <Badge className={getUrgencyColor(selectedLead.urgency)}>
                    {formatEnumValue(selectedLead.urgency)}
                  </Badge>
                </div>
              </div>
              {/* More details can be added here */}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => {
              setViewDialogOpen(false);
              if (selectedLead) {
                handleEditLead(selectedLead);
              }
            }}>
              Edit Lead
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Lead Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Lead - {selectedLead?.firstName} {selectedLead?.lastName}</DialogTitle>
            <DialogDescription>
              Update lead information and status
            </DialogDescription>
          </DialogHeader>
          {selectedLead && (
            <EditLeadForm
              lead={selectedLead}
              onLeadUpdated={() => {
                loadLeads();
                setEditDialogOpen(false);
              }}
              onCancel={() => setEditDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Communication Modal */}
      <CommunicationModal
        open={communicationModalOpen}
        onOpenChange={setCommunicationModalOpen}
        lead={communicationLead}
        onCommunicationAdded={loadLeads}
      />

      {/* Technician Assignment Modal */}
      <TechnicianAssignmentModal
        open={technicianAssignmentOpen}
        onOpenChange={setTechnicianAssignmentOpen}
        leads={technicianAssignmentLeads}
        onAssignmentUpdate={() => {
          loadLeads();
          setSelectedLeads([]);
        }}
      />

      {/* Add Lead Modal */}
      <Dialog open={addLeadModalOpen} onOpenChange={setAddLeadModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Lead</DialogTitle>
            <DialogDescription>
              Quick lead creation for {addLeadStatus ? LEAD_COLUMNS.find(c => c.id === addLeadStatus)?.title : 'New Leads'} column
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input placeholder="Smith" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input type="email" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone *</label>
              <Input placeholder="0412 345 678" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Suburb *</label>
              <Input placeholder="Melbourne" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Service Type</label>
              <Select defaultValue="MOULD_INSPECTION">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(ServiceType).map((type) => (
                    <SelectItem key={type} value={type}>
                      {formatServiceType(type)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddLeadModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              // TODO: Implement lead creation
              console.log('Creating new lead with status:', addLeadStatus);
              setAddLeadModalOpen(false);
              // In real implementation, call API and refresh leads
            }}>
              Create Lead
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ProtectedRoute>
  );
}