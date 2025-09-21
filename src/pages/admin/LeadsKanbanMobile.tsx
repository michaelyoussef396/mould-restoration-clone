import React, { useEffect, useState, useMemo, memo, useCallback, Suspense, lazy } from 'react';
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
  sortableKeyboardCoordinates
} from '@dnd-kit/sortable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Plus, Search, Filter, List, ArrowLeft, RefreshCw, Settings,
  MoreVertical, Zap, Users, Clock, DollarSign, TrendingUp,
  Phone, Mail, Calendar, Eye
} from 'lucide-react';
import { ProtectedRoute } from '@/contexts/AuthContext';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { LeadStatus } from '@prisma/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

// Lazy load mobile components for better performance
const MobileLeadDrawer = lazy(() => import('@/components/mobile/MobileLeadDrawer').then(module => ({ default: module.MobileLeadDrawer })));
const MobileLeadCard = lazy(() => import('@/components/mobile/MobileLeadCard').then(module => ({ default: module.MobileLeadCard })));
const DetailedMobileLeadCard = lazy(() => import('@/components/mobile/MobileLeadCard').then(module => ({ default: module.DetailedMobileLeadCard })));

// Mobile-optimized lead columns
const MOBILE_LEAD_COLUMNS = [
  {
    id: 'NEW',
    title: 'New',
    icon: '🆕',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-900',
    description: 'Fresh leads'
  },
  {
    id: 'CONTACTED',
    title: 'Contacted',
    icon: '📞',
    color: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-900',
    description: 'First contact made'
  },
  {
    id: 'QUALIFIED',
    title: 'Qualified',
    icon: '✅',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-900',
    description: 'Ready for quote'
  },
  {
    id: 'QUOTED',
    title: 'Quoted',
    icon: '💰',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-900',
    description: 'Quote sent'
  },
  {
    id: 'CONVERTED',
    title: 'Won',
    icon: '🎉',
    color: 'bg-emerald-50 border-emerald-200',
    textColor: 'text-emerald-900',
    description: 'Converted to client'
  }
];

// Mobile Loading Skeleton
const MobileLoadingSkeleton = memo(() => (
  <div className="space-y-4 p-4">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="bg-white rounded-lg p-4 shadow animate-pulse">
        <div className="flex items-center space-x-3">
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded flex-1"></div>
          <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
));

// Optimized Mobile Kanban Column
const MobileKanbanColumn = memo(({
  column,
  leads,
  onStatusChange,
  onEdit,
  onContact,
  isCompactView
}: {
  column: typeof MOBILE_LEAD_COLUMNS[0];
  leads: LeadWithRelations[];
  onStatusChange: (leadId: string, status: LeadStatus) => void;
  onEdit: (lead: LeadWithRelations) => void;
  onContact: (lead: LeadWithRelations, method: 'phone' | 'email') => void;
  isCompactView: boolean;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
    data: { type: 'column', column }
  });

  const columnValue = useMemo(() =>
    leads.reduce((sum, l) => sum + (l.estimatedValue || 0), 0),
    [leads]
  );

  return (
    <div
      className={`
        ${column.color}
        rounded-lg border-2 transition-all duration-200
        ${isOver ? 'border-solid border-blue-500 bg-blue-50/50 scale-105' : 'border-dashed'}
        ${isCompactView ? 'min-w-[280px]' : 'w-full'}
        flex-shrink-0 touch-manipulation
      `}
    >
      <div className="p-3">
        {/* Column Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{column.icon}</span>
              <h2 className={`font-bold text-lg ${column.textColor}`}>
                {column.title}
              </h2>
              <Badge variant="secondary" className="text-xs">
                {leads.length}
              </Badge>
            </div>
            <p className="text-xs text-gray-600">{column.description}</p>
          </div>

          {columnValue > 0 && (
            <div className="text-right">
              <div className={`text-sm font-semibold ${column.textColor}`}>
                ${columnValue.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">potential</div>
            </div>
          )}
        </div>

        {/* Lead Cards Container */}
        <div
          ref={setNodeRef}
          className="min-h-[120px] max-h-[calc(100vh-320px)] overflow-y-auto"
          style={{ touchAction: 'pan-y' }}
        >
          <SortableContext
            items={leads.map(lead => lead.id)}
            strategy={verticalListSortingStrategy}
          >
            <Suspense fallback={<MobileLoadingSkeleton />}>
              {leads.map((lead) => (
                <MobileLeadCard
                  key={lead.id}
                  lead={lead}
                  onStatusChange={onStatusChange}
                  onEdit={onEdit}
                  onContact={onContact}
                  viewMode="compact"
                  showDragHandle={!isCompactView}
                />
              ))}
            </Suspense>
          </SortableContext>

          {/* Empty State */}
          {leads.length === 0 && (
            <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="text-2xl mb-2">{column.icon}</div>
              <p className="text-sm font-medium">No {column.title.toLowerCase()} leads</p>
              <p className="text-xs mt-1">Drag leads here or add new ones</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Mobile Stats Header
const MobileStatsHeader = memo(({
  leads,
  searchTerm,
  onSearchChange,
  onAddLead,
  onRefresh,
  isLoading
}: {
  leads: LeadWithRelations[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onAddLead: () => void;
  onRefresh: () => void;
  isLoading: boolean;
}) => {
  const stats = useMemo(() => {
    const totalValue = leads.reduce((sum, lead) => sum + (lead.estimatedValue || 0), 0);
    const urgentCount = leads.filter(lead => lead.urgency === 'URGENT').length;
    const todaysLeads = leads.filter(lead => {
      const today = new Date().toDateString();
      return new Date(lead.createdAt).toDateString() === today;
    }).length;

    return { totalValue, urgentCount, todaysLeads };
  }, [leads]);

  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="p-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{leads.length}</div>
            <div className="text-xs text-gray-600">Total Leads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              ${stats.totalValue.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">Pipeline Value</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.urgentCount}</div>
            <div className="text-xs text-gray-600">Urgent</div>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 h-10 text-base"
            />
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={onRefresh}
            disabled={isLoading}
            className="h-10 px-3"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>

          <Button
            size="sm"
            onClick={onAddLead}
            className="h-10 px-3 bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
});

// Main Mobile Kanban Component
export function LeadsKanbanMobile() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<LeadWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [isCompactView, setIsCompactView] = useState(false);
  const [showAddDrawer, setShowAddDrawer] = useState(false);
  const [editingLead, setEditingLead] = useState<LeadWithRelations | null>(null);
  const [selectedLead, setSelectedLead] = useState<LeadWithRelations | null>(null);

  // Performance monitoring
  const { measureRender } = usePerformanceMonitor('LeadsKanbanMobile');

  // Enhanced sensors for mobile touch
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 8,
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  // Haptic feedback for mobile
  const triggerHapticFeedback = useCallback((type: 'light' | 'medium' | 'heavy' = 'light') => {
    if ('vibrate' in navigator) {
      const patterns = {
        light: [10],
        medium: [10, 5, 10],
        heavy: [20, 10, 20]
      };
      navigator.vibrate(patterns[type]);
    }
  }, []);

  // Load leads with error handling and caching
  const loadLeads = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await LeadService.getAllLeads();
      setLeads(data);
    } catch (error) {
      console.error('Failed to load leads:', error);
      toast({
        title: "Connection Error",
        description: "Failed to load leads. Please check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial load and polling
  useEffect(() => {
    loadLeads();

    // Poll for updates every 60 seconds on mobile to save battery
    const interval = setInterval(loadLeads, 60000);
    return () => clearInterval(interval);
  }, [loadLeads]);

  // Optimized filtering with debouncing
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
    return MOBILE_LEAD_COLUMNS.reduce((acc, column) => {
      acc[column.id] = filteredLeads.filter(lead => lead.status === column.id);
      return acc;
    }, {} as Record<string, LeadWithRelations[]>);
  }, [filteredLeads]);

  // Get active lead for drag overlay
  const activeLead = useMemo(() =>
    activeId ? leads.find(l => l.id === activeId) : null,
    [activeId, leads]
  );

  // Drag handlers with haptic feedback
  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    triggerHapticFeedback('medium');
  }, [triggerHapticFeedback]);

  const handleDragEnd = useCallback(async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const leadId = active.id as string;
    const targetId = over.id as string;

    const targetColumn = MOBILE_LEAD_COLUMNS.find(col => col.id === targetId);
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
        title: "Lead Updated! 🎉",
        description: `Lead moved to ${targetColumn.title}`,
      });
      triggerHapticFeedback('heavy');
    } catch (error) {
      console.error('Failed to update lead status:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update lead status. Please try again.",
        variant: "destructive"
      });
      await loadLeads(); // Revert on error
    }
  }, [leads, loadLeads, triggerHapticFeedback]);

  // Handle status change from dropdown
  const handleStatusChange = useCallback(async (leadId: string, newStatus: LeadStatus) => {
    const lead = leads.find(l => l.id === leadId);
    if (!lead || lead.status === newStatus) return;

    setLeads(prev => prev.map(l =>
      l.id === leadId ? { ...l, status: newStatus } : l
    ));

    try {
      await LeadService.updateLead(leadId, { status: newStatus });
      const column = MOBILE_LEAD_COLUMNS.find(col => col.id === newStatus);
      toast({
        title: "Status Updated! ✅",
        description: `Lead moved to ${column?.title}`,
      });
      triggerHapticFeedback('light');
    } catch (error) {
      console.error('Failed to update lead status:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update status. Please try again.",
        variant: "destructive"
      });
      await loadLeads();
    }
  }, [leads, loadLeads, triggerHapticFeedback]);

  // Handle lead editing
  const handleEdit = useCallback((lead: LeadWithRelations) => {
    setEditingLead(lead);
    triggerHapticFeedback('light');
  }, [triggerHapticFeedback]);

  // Handle contact actions
  const handleContact = useCallback((lead: LeadWithRelations, method: 'phone' | 'email') => {
    triggerHapticFeedback('light');

    if (method === 'phone' && lead.phone) {
      window.open(`tel:${lead.phone}`, '_self');
    } else if (method === 'email' && lead.email) {
      const subject = encodeURIComponent('Re: Your Mould Inspection Request');
      const body = encodeURIComponent(
        `Hi ${lead.firstName},\n\nThank you for your inquiry about mould inspection services in ${lead.suburb}.\n\nBest regards,\nMould & Restoration Co.`
      );
      window.open(`mailto:${lead.email}?subject=${subject}&body=${body}`, '_blank');
    }
  }, [triggerHapticFeedback]);

  // Performance measurement
  useEffect(() => {
    measureRender();
  }, [measureRender, filteredLeads]);

  // Auto-detect mobile view mode
  useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading && leads.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your leads...</p>
          <p className="text-sm text-gray-500 mt-1">Optimizing for mobile</p>
        </div>
      </div>
    );
  }

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-50 touch-manipulation">
        {/* Mobile Header */}
        <MobileStatsHeader
          leads={filteredLeads}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onAddLead={() => setShowAddDrawer(true)}
          onRefresh={loadLeads}
          isLoading={isLoading}
        />

        {/* Navigation Bar */}
        <div className="bg-white border-b px-4 py-2 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/admin/dashboard')}
            className="text-gray-600"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Dashboard
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'kanban' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('kanban')}
            >
              Kanban
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            measuring={{
              droppable: { strategy: MeasuringStrategy.Always }
            }}
          >
            {viewMode === 'kanban' ? (
              <div className={`
                ${isCompactView
                  ? 'flex gap-4 overflow-x-auto pb-4'
                  : 'grid grid-cols-1 gap-4'
                }
              `}>
                {MOBILE_LEAD_COLUMNS.map((column) => (
                  <MobileKanbanColumn
                    key={column.id}
                    column={column}
                    leads={groupedLeads[column.id] || []}
                    onStatusChange={handleStatusChange}
                    onEdit={handleEdit}
                    onContact={handleContact}
                    isCompactView={isCompactView}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <Suspense fallback={<MobileLoadingSkeleton />}>
                  {filteredLeads.map((lead) => (
                    <MobileLeadCard
                      key={lead.id}
                      lead={lead}
                      onStatusChange={handleStatusChange}
                      onEdit={handleEdit}
                      onContact={handleContact}
                      viewMode="compact"
                      showDragHandle={false}
                    />
                  ))}
                </Suspense>
              </div>
            )}

            {/* Drag Overlay */}
            <DragOverlay>
              {activeLead && (
                <Suspense fallback={null}>
                  <MobileLeadCard
                    lead={activeLead}
                    isDragging
                    isOverlay
                    viewMode="compact"
                  />
                </Suspense>
              )}
            </DragOverlay>
          </DndContext>
        </div>

        {/* Add Lead Drawer */}
        <Suspense fallback={null}>
          <MobileLeadDrawer
            open={showAddDrawer}
            onOpenChange={setShowAddDrawer}
            onLeadCreated={() => {
              loadLeads();
              setShowAddDrawer(false);
            }}
            mode="quick-add"
          />
        </Suspense>

        {/* Edit Lead Drawer */}
        <Suspense fallback={null}>
          <MobileLeadDrawer
            open={!!editingLead}
            onOpenChange={(open) => !open && setEditingLead(null)}
            onLeadUpdated={() => {
              loadLeads();
              setEditingLead(null);
            }}
            editingLead={editingLead}
            mode="edit"
          />
        </Suspense>

        {/* Detailed Lead Sheet */}
        <Sheet open={!!selectedLead} onOpenChange={(open) => !open && setSelectedLead(null)}>
          <SheetContent side="bottom" className="h-[90vh]">
            <SheetHeader>
              <SheetTitle>Lead Details</SheetTitle>
              <SheetDescription>
                Comprehensive lead information and actions
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-y-auto h-full pb-20">
              {selectedLead && (
                <Suspense fallback={<MobileLoadingSkeleton />}>
                  <DetailedMobileLeadCard
                    lead={selectedLead}
                    onEdit={handleEdit}
                    onContact={handleContact}
                    viewMode="detailed"
                  />
                </Suspense>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </ProtectedRoute>
  );
}

export default LeadsKanbanMobile;