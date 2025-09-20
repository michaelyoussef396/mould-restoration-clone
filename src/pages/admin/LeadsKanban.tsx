import React, { useEffect, useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, TouchSensor, useSensor, useSensors, useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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
  Star
} from 'lucide-react';
import { ProtectedRoute } from '@/contexts/AuthContext';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { ServiceType, LeadStatus, LeadSource, Urgency } from '@prisma/client';
import { useAuth } from '@/contexts/AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { CommunicationModal } from '@/components/CommunicationModal';
import { TechnicianAssignmentModal } from '@/components/TechnicianAssignmentModal';

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

// Helper functions
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

const formatServiceType = (serviceType: string) => {
  return serviceType
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const formatEnumValue = (value: string) => {
  return value
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Lead Card Component with drag and drop
interface LeadCardProps {
  lead: LeadWithRelations;
  onLeadClick: (lead: LeadWithRelations) => void;
  onCommunicationClick: (lead: LeadWithRelations) => void;
  isDragging?: boolean;
}

function LeadCard({ lead, onLeadClick, onCommunicationClick, isDragging = false }: LeadCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id: lead.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`cursor-pointer hover:shadow-md transition-shadow touch-manipulation select-none ${
        isDragging ? 'shadow-lg' : ''
      } ${isSortableDragging ? 'z-50' : ''}`}
      onClick={() => onLeadClick(lead)}
    >
      <CardContent className="p-3 sm:p-4">
        <div className="space-y-2 sm:space-y-3">
          {/* Header with name and urgency */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                {lead.firstName} {lead.lastName}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 truncate">{formatServiceType(lead.serviceType)}</p>
            </div>
            <Badge className={`${getUrgencyColor(lead.urgency)} text-xs flex-shrink-0`} variant="secondary">
              {formatEnumValue(lead.urgency)}
            </Badge>
          </div>

          {/* Contact information */}
          <div className="space-y-1">
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <Mail className="h-3 w-3 mr-2 flex-shrink-0" />
              <span className="truncate">{lead.email}</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <Phone className="h-3 w-3 mr-2 flex-shrink-0" />
              <span className="truncate">{lead.phone}</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
              <span className="truncate">{lead.suburb}</span>
            </div>
          </div>

          {/* Booking dates if available */}
          {lead.bookingDates && (() => {
            try {
              const dates = JSON.parse(lead.bookingDates);
              if (Array.isArray(dates) && dates.length > 0) {
                return (
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
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
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>
              {lead.assignedTo ? `Assigned to ${lead.assignedTo.name}` : 'Unassigned'}
            </span>
            <span className="capitalize">{formatEnumValue(lead.source)}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-400 truncate">
              {new Date(lead.createdAt).toLocaleDateString()}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onCommunicationClick(lead);
              }}
              className="h-8 w-8 p-0 touch-manipulation flex-shrink-0"
            >
              <MessageSquare className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Kanban Column Component
interface KanbanColumnProps {
  column: typeof LEAD_COLUMNS[0];
  leads: LeadWithRelations[];
  onLeadClick: (lead: LeadWithRelations) => void;
  onCommunicationClick: (lead: LeadWithRelations) => void;
  onAddLead?: () => void;
}

function KanbanColumn({ column, leads, onLeadClick, onCommunicationClick, onAddLead }: KanbanColumnProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className={`flex-shrink-0 w-full sm:w-80 min-w-[280px] ${column.color} rounded-lg border-2 ${isOver ? 'border-solid border-blue-500 bg-blue-50' : 'border-dashed'} transition-colors`}>
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm sm:text-base">{column.title}</h2>
            <p className="text-xs sm:text-sm text-gray-600">{leads.length} leads</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onAddLead}
            className="h-8 w-8 p-0 touch-manipulation"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div ref={setNodeRef} className="min-h-[200px]">
          <SortableContext items={leads.map(lead => lead.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-2 sm:space-y-3 max-h-[calc(100vh-250px)] sm:max-h-[calc(100vh-300px)] overflow-y-auto">
              {leads.map((lead) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  onLeadClick={onLeadClick}
                  onCommunicationClick={onCommunicationClick}
                />
              ))}
              {leads.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-sm">
                  Drop leads here or click + to add
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
          <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)} className="touch-manipulation">
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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
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
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const leadId = active.id as string;
    const newStatus = over.id as LeadStatus;

    // Find the lead being moved
    const lead = leads.find(l => l.id === leadId);
    if (!lead || lead.status === newStatus) return;

    try {
      // Update lead status
      await LeadService.updateLead(leadId, { status: newStatus });

      // Refresh leads data
      await loadLeads();
    } catch (error) {
      console.error('Failed to update lead status:', error);
    }
  };

  const handleLeadClick = (lead: LeadWithRelations) => {
    setSelectedLead(lead);
    setViewDialogOpen(true);
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
      <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
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
          <div className="bg-white border-b border-gray-200 px-3 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">Lead Pipeline</h1>
                <p className="text-sm sm:text-base text-gray-600 hidden sm:block">Kanban board view with drag and drop functionality</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilterSidebarOpen(!filterSidebarOpen)}
                  className="hidden sm:flex"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilterSidebarOpen(!filterSidebarOpen)}
                  className="sm:hidden"
                >
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => navigate('/admin/leads')}>
                  <List className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">List View</span>
                </Button>
                <Button size="sm" onClick={handleAddLeadFromHeader}>
                  <Plus className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Add Lead</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Search and Bulk Operations */}
          <div className="p-3 sm:p-6">
            {/* Search Bar */}
            <div className="mb-4 sm:mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-sm"
                />
              </div>
            </div>

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
              <div className="overflow-x-auto">
                <div className="flex space-x-3 sm:space-x-6 pb-6 min-w-max">
                  {LEAD_COLUMNS.map((column) => (
                    <KanbanColumn
                      key={column.id}
                      column={column}
                      leads={groupedLeads[column.id] || []}
                      onLeadClick={handleLeadClick}
                      onCommunicationClick={handleCommunicationClick}
                      onAddLead={() => handleAddLead(column.id as LeadStatus)}
                    />
                  ))}
                </div>
              </div>

              <DragOverlay>
                {activeLead ? (
                  <LeadCard
                    lead={activeLead}
                    onLeadClick={() => {}}
                    onCommunicationClick={() => {}}
                    isDragging
                  />
                ) : null}
              </DragOverlay>
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
            <Button>Edit Lead</Button>
          </DialogFooter>
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