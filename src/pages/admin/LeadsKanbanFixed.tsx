import React, { useEffect, useState, useMemo, memo, useCallback } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  useDroppable,
  closestCenter,
  MeasuringStrategy
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Phone,
  Mail,
  MapPin,
  Plus,
  Search,
  Filter,
  List,
  MessageSquare,
  Edit,
  GripVertical,
  MoreVertical
} from 'lucide-react';
import { ProtectedRoute } from '@/contexts/AuthContext';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { LeadStatus } from '@prisma/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

// Helper functions
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

// Lead columns configuration
const LEAD_COLUMNS = [
  { id: 'NEW', title: 'New', color: 'bg-blue-50 border-blue-200' },
  { id: 'CONTACTED', title: 'Contacted', color: 'bg-orange-50 border-orange-200' },
  { id: 'QUALIFIED', title: 'Qualified', color: 'bg-green-50 border-green-200' },
  { id: 'QUOTED', title: 'Quoted', color: 'bg-purple-50 border-purple-200' },
  { id: 'CONVERTED', title: 'Converted', color: 'bg-emerald-50 border-emerald-200' }
];

// Enhanced Lead Card Component with better touch areas
const LeadCard = memo(({
  lead,
  onStatusChange,
  onEdit,
  isDragging,
  isOverlay = false
}: {
  lead: LeadWithRelations;
  onStatusChange?: (leadId: string, status: LeadStatus) => void;
  onEdit?: (lead: LeadWithRelations) => void;
  isDragging?: boolean;
  isOverlay?: boolean;
}) => {
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
    touchAction: 'none', // Prevent scrolling while dragging on mobile
  };

  const handleStatusClick = useCallback((e: React.MouseEvent, newStatus: LeadStatus) => {
    e.stopPropagation();
    e.preventDefault();
    if (onStatusChange) {
      onStatusChange(lead.id, newStatus);
    }
  }, [lead.id, onStatusChange]);

  const handleActionClick = useCallback((e: React.MouseEvent, action: 'edit') => {
    e.stopPropagation();
    e.preventDefault();
    if (action === 'edit' && onEdit) {
      onEdit(lead);
    }
  }, [lead, onEdit]);

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={`
        ${isOverlay ? 'shadow-2xl rotate-3' : 'hover:shadow-md'}
        transition-all duration-200 mb-3 cursor-move
        ${isDragging ? 'z-50' : ''}
        select-none
      `}
      {...attributes}
    >
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Drag Handle for mobile - larger touch target */}
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-2 flex-1">
              <div
                {...listeners}
                className="mt-1 cursor-move touch-none p-1 -ml-1 rounded hover:bg-gray-100"
              >
                <GripVertical className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">
                  {lead.firstName} {lead.lastName}
                </h3>
                <p className="text-xs text-gray-600 truncate">{lead.email}</p>
              </div>
            </div>

            {/* Actions Menu */}
            {!isOverlay && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {LEAD_COLUMNS.map(col => (
                    <DropdownMenuItem
                      key={col.id}
                      onClick={(e) => handleStatusClick(e, col.id as LeadStatus)}
                      className={lead.status === col.id ? 'bg-accent' : ''}
                    >
                      Move to {col.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Lead Details */}
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-1 text-gray-600">
              <Phone className="h-3 w-3" />
              <span className="truncate">{lead.phone}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <MapPin className="h-3 w-3" />
              <span className="truncate">{lead.suburb}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge className={`${getStatusColor(lead.status)} text-xs px-2 py-0.5`}>
                {formatEnumValue(lead.status)}
              </Badge>
              {lead.urgency === 'HIGH' && (
                <Badge variant="destructive" className="text-xs px-2 py-0.5">
                  Urgent
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons - Larger touch targets for mobile */}
          {!isOverlay && (
            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                variant="outline"
                onClick={(e) => handleActionClick(e, 'edit')}
                className="flex-1 h-9"
              >
                <Edit className="h-3 w-3 mr-1" />
                Edit
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 h-9"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  {lead.phone && (
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`tel:${lead.phone}`, '_self');
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call {lead.phone}
                    </DropdownMenuItem>
                  )}
                  {lead.email && (
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`mailto:${lead.email}?subject=Re: Your Mould Inspection Request&body=Hi ${lead.firstName},%0D%0A%0D%0AThank you for your inquiry about mould inspection services...`, '_blank');
                      }}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email {lead.email}
                    </DropdownMenuItem>
                  )}
                  {!lead.phone && !lead.email && (
                    <DropdownMenuItem disabled>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      No contact info available
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
});

// Optimized Kanban Column
const KanbanColumn = memo(({
  column,
  leads,
  onStatusChange,
  onEdit
}: {
  column: typeof LEAD_COLUMNS[0];
  leads: LeadWithRelations[];
  onStatusChange: (leadId: string, status: LeadStatus) => void;
  onEdit: (lead: LeadWithRelations) => void;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
    data: {
      type: 'column',
      column
    }
  });

  return (
    <div
      className={`
        ${column.color}
        rounded-lg border-2
        ${isOver ? 'border-solid border-blue-500 bg-blue-50/50' : 'border-dashed'}
        w-full sm:w-80 flex-shrink-0 transition-all duration-200
      `}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-bold text-lg">{column.title}</h2>
            <p className="text-sm text-gray-600">{leads.length} leads</p>
          </div>
          {leads.length > 0 && (
            <Badge variant="secondary" className="text-xs">
              ${leads.reduce((sum, l) => sum + (l.estimatedValue || 0), 0).toLocaleString()}
            </Badge>
          )}
        </div>

        <div
          ref={setNodeRef}
          className="min-h-[200px] max-h-[calc(100vh-300px)] overflow-y-auto overflow-x-hidden"
          style={{ touchAction: 'pan-y' }}
        >
          <SortableContext
            items={leads.map(lead => lead.id)}
            strategy={verticalListSortingStrategy}
          >
            {leads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                onStatusChange={onStatusChange}
                onEdit={onEdit}
              />
            ))}
          </SortableContext>

          {leads.length === 0 && (
            <div
              className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-lg"
            >
              <p className="text-sm">Drop leads here</p>
              <p className="text-xs mt-1">or change status from menu</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Main Kanban Component with Enhanced Drag and Drop
export function LeadsKanbanFixed() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<LeadWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');

  // Performance monitoring
  const { measureRender } = usePerformanceMonitor('LeadsKanbanFixed');

  // Enhanced sensors for better touch and mouse support
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Minimum distance before drag starts
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200, // Delay before touch drag starts (prevents scroll conflicts)
        tolerance: 5, // Movement tolerance
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  // Load leads with error handling
  const loadLeads = useCallback(async () => {
    try {
      const data = await LeadService.getAllLeads();
      setLeads(data);
    } catch (error) {
      console.error('Failed to load leads:', error);
      toast({
        title: "Error",
        description: "Failed to load leads. Please refresh the page.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLeads();
    // Poll for updates every 30 seconds
    const interval = setInterval(loadLeads, 30000);
    return () => clearInterval(interval);
  }, [loadLeads]);

  // Optimized filtering
  const filteredLeads = useMemo(() => {
    if (!searchTerm) return leads;

    const term = searchTerm.toLowerCase();
    return leads.filter((lead) =>
      `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(term) ||
      lead.email.toLowerCase().includes(term) ||
      lead.phone.includes(term) ||
      lead.suburb.toLowerCase().includes(term)
    );
  }, [leads, searchTerm]);

  // Group leads by status
  const groupedLeads = useMemo(() => {
    return LEAD_COLUMNS.reduce((acc, column) => {
      acc[column.id] = filteredLeads.filter(lead => lead.status === column.id);
      return acc;
    }, {} as Record<string, LeadWithRelations[]>);
  }, [filteredLeads]);

  // Get the active lead being dragged
  const activeLead = useMemo(() =>
    activeId ? leads.find(l => l.id === activeId) : null,
    [activeId, leads]
  );

  // Drag handlers
  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    // Haptic feedback for mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  }, []);

  const handleDragEnd = useCallback(async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const leadId = active.id as string;
    const targetId = over.id as string;

    // Check if dropped on a column
    const targetColumn = LEAD_COLUMNS.find(col => col.id === targetId);
    if (!targetColumn) return;

    const newStatus = targetColumn.id as LeadStatus;
    const lead = leads.find(l => l.id === leadId);

    if (!lead || lead.status === newStatus) return;

    // Optimistic update
    setLeads(prev => prev.map(l =>
      l.id === leadId ? { ...l, status: newStatus } : l
    ));

    try {
      await LeadService.updateLead(leadId, { status: newStatus });
      toast({
        title: "Status Updated",
        description: `Lead moved to ${targetColumn.title}`,
      });
      // Haptic feedback for success
      if ('vibrate' in navigator) {
        navigator.vibrate([10, 5, 10]);
      }
    } catch (error) {
      console.error('Failed to update lead status:', error);
      toast({
        title: "Error",
        description: "Failed to update lead status. Please try again.",
        variant: "destructive"
      });
      // Revert on error
      await loadLeads();
    }
  }, [leads, loadLeads]);

  const handleStatusChange = useCallback(async (leadId: string, newStatus: LeadStatus) => {
    const lead = leads.find(l => l.id === leadId);
    if (!lead || lead.status === newStatus) return;

    // Optimistic update
    setLeads(prev => prev.map(l =>
      l.id === leadId ? { ...l, status: newStatus } : l
    ));

    try {
      await LeadService.updateLead(leadId, { status: newStatus });
      const column = LEAD_COLUMNS.find(col => col.id === newStatus);
      toast({
        title: "Status Updated",
        description: `Lead moved to ${column?.title}`,
      });
    } catch (error) {
      console.error('Failed to update lead status:', error);
      toast({
        title: "Error",
        description: "Failed to update lead status. Please try again.",
        variant: "destructive"
      });
      await loadLeads();
    }
  }, [leads, loadLeads]);

  const handleEdit = useCallback((lead: LeadWithRelations) => {
    navigate(`/admin/leads/edit/${lead.id}`);
  }, [navigate]);

  const handleCommunicate = useCallback((lead: LeadWithRelations) => {
    // Contact options are now handled directly in the dropdown menu
    console.log('Contact lead:', lead.id);
  }, []);

  useEffect(() => {
    measureRender();
  }, [measureRender, filteredLeads]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading leads...</p>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Lead Pipeline</h1>
                <p className="text-sm text-gray-600 mt-1">
                  {filteredLeads.length} total leads • ${filteredLeads.reduce((sum, l) => sum + (l.estimatedValue || 0), 0).toLocaleString()} potential value
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search leads..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 w-full sm:w-64"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode(viewMode === 'kanban' ? 'list' : 'kanban')}
                  className="sm:hidden"
                >
                  {viewMode === 'kanban' ? <List className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
                </Button>
                <Button
                  onClick={() => navigate('/admin/leads/new')}
                  size="sm"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Lead
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="container mx-auto px-4 py-6">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            measuring={{
              droppable: {
                strategy: MeasuringStrategy.Always
              }
            }}
          >
            <div className="flex gap-4 overflow-x-auto pb-4">
              {LEAD_COLUMNS.map((column) => (
                <KanbanColumn
                  key={column.id}
                  column={column}
                  leads={groupedLeads[column.id] || []}
                  onStatusChange={handleStatusChange}
                  onEdit={handleEdit}
                />
              ))}
            </div>

            {/* Drag Overlay for better visual feedback */}
            <DragOverlay>
              {activeLead && (
                <LeadCard
                  lead={activeLead}
                  isDragging
                  isOverlay
                />
              )}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </ProtectedRoute>
  );
}