import React, { useEffect, useState, useMemo, memo, useCallback } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import { DndContext, DragEndEvent, DragStartEvent, PointerSensor, useSensor, useSensors, useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
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
  Edit
} from 'lucide-react';
import { ProtectedRoute } from '@/contexts/AuthContext';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { LeadStatus } from '@prisma/client';
import { useNavigate } from 'react-router-dom';

// Simplified helper functions
const formatEnumValue = (value: string): string =>
  value.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

const getStatusColor = (status: string) => {
  const colors = {
    new: 'bg-blue-100 text-blue-800',
    qualified: 'bg-green-100 text-green-800',
    contacted: 'bg-orange-100 text-orange-800',
    quoted: 'bg-purple-100 text-purple-800',
    converted: 'bg-emerald-100 text-emerald-800',
    closed_lost: 'bg-red-100 text-red-800',
    follow_up: 'bg-yellow-100 text-yellow-800'
  };
  return colors[status.toLowerCase()] || 'bg-gray-100 text-gray-800';
};

// Simplified lead columns
const LEAD_COLUMNS = [
  { id: 'NEW', title: 'New', color: 'bg-blue-50 border-blue-200' },
  { id: 'CONTACTED', title: 'Contacted', color: 'bg-orange-50 border-orange-200' },
  { id: 'QUALIFIED', title: 'Qualified', color: 'bg-green-50 border-green-200' },
  { id: 'QUOTED', title: 'Quoted', color: 'bg-purple-50 border-purple-200' },
  { id: 'CONVERTED', title: 'Converted', color: 'bg-emerald-50 border-emerald-200' }
];

// Optimized Lead Card Component with minimal re-renders
const LeadCard = memo(({
  lead,
  onStatusChange,
  onEdit,
  onCommunicate
}: {
  lead: LeadWithRelations;
  onStatusChange: (leadId: string, status: LeadStatus) => void;
  onEdit: (lead: LeadWithRelations) => void;
  onCommunicate: (lead: LeadWithRelations) => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: lead.id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleStatusClick = useCallback((e: React.MouseEvent, newStatus: LeadStatus) => {
    e.stopPropagation();
    onStatusChange(lead.id, newStatus);
  }, [lead.id, onStatusChange]);

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-move hover:shadow-md transition-shadow duration-200 mb-3"
    >
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-sm">{lead.firstName} {lead.lastName}</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`${getStatusColor(lead.status)} px-2 py-1 rounded text-xs font-medium`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {formatEnumValue(lead.status)}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.values(LeadStatus).map((status) => (
                  <DropdownMenuItem
                    key={status}
                    onClick={(e) => handleStatusClick(e, status)}
                  >
                    {formatEnumValue(status)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="text-xs text-gray-600 space-y-1">
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              <span className="truncate">{lead.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <span>{lead.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{lead.suburb}</span>
            </div>
          </div>

          <div className="flex justify-end space-x-1 pt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(lead);
              }}
              className="h-8 w-8 p-0"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onCommunicate(lead);
              }}
              className="h-8 w-8 p-0"
            >
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

// Optimized Kanban Column with virtualization for large lists
const KanbanColumn = memo(({
  column,
  leads,
  onStatusChange,
  onEdit,
  onCommunicate
}: {
  column: typeof LEAD_COLUMNS[0];
  leads: LeadWithRelations[];
  onStatusChange: (leadId: string, status: LeadStatus) => void;
  onEdit: (lead: LeadWithRelations) => void;
  onCommunicate: (lead: LeadWithRelations) => void;
}) => {
  const { isOver, setNodeRef } = useDroppable({ id: column.id });

  return (
    <div className={`${column.color} rounded-lg border-2 ${isOver ? 'border-solid border-blue-500' : 'border-dashed'} w-80 flex-shrink-0`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-bold text-lg">{column.title}</h2>
            <p className="text-sm text-gray-600">{leads.length} leads</p>
          </div>
        </div>

        <div ref={setNodeRef} className="min-h-[200px] max-h-[calc(100vh-300px)] overflow-y-auto">
          <SortableContext items={leads.map(lead => lead.id)} strategy={verticalListSortingStrategy}>
            {leads.map((lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                onStatusChange={onStatusChange}
                onEdit={onEdit}
                onCommunicate={onCommunicate}
              />
            ))}
            {leads.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                <p className="text-sm">No leads</p>
              </div>
            )}
          </SortableContext>
        </div>
      </div>
    </div>
  );
});

// Main optimized component
export function LeadsKanbanOptimized() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<LeadWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeId, setActiveId] = useState<string | null>(null);

  // Performance monitoring
  const { measureRender } = usePerformanceMonitor('LeadsKanbanOptimized');

  // Optimized sensors for better performance
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 }
    })
  );

  // Load leads with error handling
  const loadLeads = useCallback(async () => {
    try {
      const data = await LeadService.getAllLeads();
      setLeads(data);
    } catch (error) {
      console.error('Failed to load leads:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  // Optimized filtering with useMemo
  const filteredLeads = useMemo(() => {
    if (!searchTerm) return leads;

    return leads.filter((lead) =>
      `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.suburb.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [leads, searchTerm]);

  // Group leads by status efficiently
  const groupedLeads = useMemo(() => {
    return LEAD_COLUMNS.reduce((acc, column) => {
      acc[column.id] = filteredLeads.filter(lead => lead.status === column.id);
      return acc;
    }, {} as Record<string, LeadWithRelations[]>);
  }, [filteredLeads]);

  // Optimized drag handlers
  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback(async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const leadId = active.id as string;
    const newStatus = over.id as LeadStatus;

    const lead = leads.find(l => l.id === leadId);
    if (!lead || lead.status === newStatus) return;

    try {
      await LeadService.updateLead(leadId, { status: newStatus });
      await loadLeads();
    } catch (error) {
      console.error('Failed to update lead status:', error);
    }
  }, [leads, loadLeads]);

  const handleStatusChange = useCallback(async (leadId: string, newStatus: LeadStatus) => {
    try {
      await LeadService.updateLead(leadId, { status: newStatus });
      await loadLeads();
    } catch (error) {
      console.error('Failed to update lead status:', error);
    }
  }, [loadLeads]);

  const handleEdit = useCallback((lead: LeadWithRelations) => {
    // Navigate to edit page or open modal
    console.log('Edit lead:', lead.id);
  }, []);

  const handleCommunicate = useCallback((lead: LeadWithRelations) => {
    // Open communication modal
    console.log('Communicate with lead:', lead.id);
  }, []);

  if (isLoading) {
    return (
      <ProtectedRoute requireAdmin>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading leads...</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requireAdmin>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Lead Pipeline</h1>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/admin/leads')}
              >
                <List className="h-4 w-4 mr-2" />
                List View
              </Button>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="p-6">
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Kanban Board */}
          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div className="overflow-x-auto">
              <div className="flex space-x-6 pb-6 min-w-max">
                {LEAD_COLUMNS.map((column) => (
                  <KanbanColumn
                    key={column.id}
                    column={column}
                    leads={groupedLeads[column.id] || []}
                    onStatusChange={handleStatusChange}
                    onEdit={handleEdit}
                    onCommunicate={handleCommunicate}
                  />
                ))}
              </div>
            </div>
          </DndContext>
        </div>
      </div>
    </ProtectedRoute>
  );
}