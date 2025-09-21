import React, { useState, useEffect } from 'react';
import { AdminLayout } from './AdminLayout';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Plus,
  Edit,
  Trash2,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Navigation,
  Bell,
  Settings,
  Filter,
  Download,
  Upload
} from 'lucide-react';
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';
import { inspectionService, Inspection, Technician, TimeSlot, SchedulingConflict } from '@/lib/services/inspectionService';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { toast } from 'sonner';

interface CalendarView {
  type: 'day' | 'week' | 'month';
  date: Date;
}

interface InspectionFormData {
  leadId: string;
  technicianId: string;
  scheduledAt: string;
  estimatedCost?: number;
  notes?: string;
  duration: number;
  reminderSettings: {
    email24h: boolean;
    email2h: boolean;
    sms1h: boolean;
    customerReminders: boolean;
    technicianReminders: boolean;
  };
}

export function InspectionCalendar() {
  const [view, setView] = useState<CalendarView>({ type: 'week', date: new Date() });
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [leads, setLeads] = useState<LeadWithRelations[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [conflicts, setConflicts] = useState<SchedulingConflict[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedInspection, setSelectedInspection] = useState<Inspection | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [syncingCalendar, setSyncingCalendar] = useState(false);
  const [filterTechnician, setFilterTechnician] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const [formData, setFormData] = useState<InspectionFormData>({
    leadId: '',
    technicianId: '',
    scheduledAt: '',
    duration: 120,
    reminderSettings: {
      email24h: true,
      email2h: true,
      sms1h: true,
      customerReminders: true,
      technicianReminders: true,
    },
  });

  useEffect(() => {
    loadCalendarData();
    loadTechnicians();
    loadLeads();
  }, [view]);

  useEffect(() => {
    if (selectedDate) {
      loadAvailableSlots();
    }
  }, [selectedDate, formData.technicianId]);

  const loadCalendarData = async () => {
    setLoading(true);
    try {
      const startDate = view.type === 'month'
        ? format(new Date(view.date.getFullYear(), view.date.getMonth(), 1), 'yyyy-MM-dd')
        : view.type === 'week'
        ? format(startOfWeek(view.date), 'yyyy-MM-dd')
        : format(view.date, 'yyyy-MM-dd');

      const endDate = view.type === 'month'
        ? format(new Date(view.date.getFullYear(), view.date.getMonth() + 1, 0), 'yyyy-MM-dd')
        : view.type === 'week'
        ? format(endOfWeek(view.date), 'yyyy-MM-dd')
        : format(addDays(view.date, 1), 'yyyy-MM-dd');

      const calendarData = await inspectionService.getCalendarData(startDate, endDate);
      setInspections(calendarData.inspections);
      setConflicts(calendarData.conflicts);
    } catch (error) {
      toast.error('Failed to load calendar data');
      console.error('Calendar load error:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadTechnicians = async () => {
    try {
      const technicianList = await inspectionService.getTechnicians();
      setTechnicians(technicianList);
    } catch (error) {
      toast.error('Failed to load technicians');
    }
  };

  const loadLeads = async () => {
    try {
      const leadList = await LeadService.getLeads();
      setLeads(leadList.filter(lead => lead.status !== 'CONVERTED' && lead.status !== 'CLOSED_LOST'));
    } catch (error) {
      toast.error('Failed to load leads');
    }
  };

  const loadAvailableSlots = async () => {
    if (!selectedDate) return;

    try {
      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      const slots = await inspectionService.getAvailableTimeSlots(
        dateStr,
        'Melbourne', // Default suburb - should be dynamic
        formData.duration
      );
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Failed to load available slots:', error);
    }
  };

  const handleCreateInspection = async () => {
    try {
      setLoading(true);

      // Check for conflicts first
      const conflictCheck = await inspectionService.checkSchedulingConflicts(
        formData.technicianId,
        formData.scheduledAt,
        'Melbourne', // Should be dynamic based on lead
        formData.duration
      );

      if (conflictCheck.length > 0) {
        const hasBlockingConflicts = conflictCheck.some(c => c.type === 'DOUBLE_BOOKING');
        if (hasBlockingConflicts) {
          toast.error('Scheduling conflict detected. Please choose a different time.');
          setConflicts(conflictCheck);
          return;
        }
      }

      const newInspection = await inspectionService.createInspection({
        leadId: formData.leadId,
        technicianId: formData.technicianId,
        scheduledAt: formData.scheduledAt,
        estimatedCost: formData.estimatedCost,
        notes: formData.notes,
      });

      // Schedule reminders
      await inspectionService.scheduleReminders(newInspection.id, formData.reminderSettings);

      // Sync with Google Calendar if enabled
      try {
        await inspectionService.syncWithGoogleCalendar(newInspection.id);
        toast.success('Inspection scheduled and synced with Google Calendar');
      } catch (calendarError) {
        toast.success('Inspection scheduled (Calendar sync will retry)');
      }

      setShowCreateDialog(false);
      resetForm();
      loadCalendarData();
    } catch (error) {
      toast.error('Failed to create inspection');
      console.error('Create inspection error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateInspection = async () => {
    if (!selectedInspection) return;

    try {
      setLoading(true);

      await inspectionService.updateInspection(selectedInspection.id, {
        technicianId: formData.technicianId,
        scheduledAt: formData.scheduledAt,
        estimatedCost: formData.estimatedCost,
      });

      toast.success('Inspection updated successfully');
      setShowEditDialog(false);
      resetForm();
      loadCalendarData();
    } catch (error) {
      toast.error('Failed to update inspection');
      console.error('Update inspection error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteInspection = async (inspectionId: string) => {
    try {
      await inspectionService.deleteInspection(inspectionId);
      toast.success('Inspection cancelled');
      loadCalendarData();
    } catch (error) {
      toast.error('Failed to cancel inspection');
    }
  };

  const handleSyncWithGoogleCalendar = async () => {
    setSyncingCalendar(true);
    try {
      const syncPromises = inspections.map(inspection =>
        inspectionService.syncWithGoogleCalendar(inspection.id)
      );
      await Promise.allSettled(syncPromises);
      toast.success('Calendar sync completed');
    } catch (error) {
      toast.error('Calendar sync failed');
    } finally {
      setSyncingCalendar(false);
    }
  };

  const getOptimalTechnicianSuggestion = async (leadId: string, scheduledAt: string) => {
    const lead = leads.find(l => l.id === leadId);
    if (!lead) return;

    try {
      const suggestion = await inspectionService.getOptimalTechnicianAssignment(
        lead.suburb,
        scheduledAt,
        lead.serviceType
      );

      setFormData(prev => ({
        ...prev,
        technicianId: suggestion.recommended.id,
      }));

      toast.success(`Suggested: ${suggestion.recommended.name} - ${suggestion.reasoning}`);
    } catch (error) {
      console.error('Failed to get technician suggestion:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      leadId: '',
      technicianId: '',
      scheduledAt: '',
      duration: 120,
      reminderSettings: {
        email24h: true,
        email2h: true,
        sms1h: true,
        customerReminders: true,
        technicianReminders: true,
      },
    });
    setSelectedInspection(null);
    setConflicts([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SCHEDULED': return 'bg-blue-100 text-blue-800';
      case 'IN_PROGRESS': return 'bg-yellow-100 text-yellow-800';
      case 'COMPLETED': return 'bg-green-100 text-green-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      case 'RESCHEDULED': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInspections = inspections.filter(inspection => {
    if (filterTechnician !== 'all' && inspection.technicianId !== filterTechnician) return false;
    if (filterStatus !== 'all' && inspection.status !== filterStatus) return false;
    return true;
  });

  const renderDayView = () => {
    const dayInspections = filteredInspections.filter(
      inspection => format(new Date(inspection.scheduledAt), 'yyyy-MM-dd') === format(view.date, 'yyyy-MM-dd')
    );

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            {format(view.date, 'EEEE, MMMM d, yyyy')}
          </h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setView(prev => ({ ...prev, date: addDays(prev.date, -1) }))}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setView(prev => ({ ...prev, date: addDays(prev.date, 1) }))}
            >
              Next
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          {Array.from({ length: 12 }, (_, i) => i + 7).map(hour => {
            const hourInspections = dayInspections.filter(inspection => {
              const inspectionHour = new Date(inspection.scheduledAt).getHours();
              return inspectionHour === hour;
            });

            return (
              <div key={hour} className="flex border-b border-gray-100 py-2">
                <div className="w-20 text-sm text-gray-500 font-medium">
                  {hour}:00
                </div>
                <div className="flex-1">
                  {hourInspections.map(inspection => (
                    <div
                      key={inspection.id}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-2 cursor-pointer hover:bg-blue-100"
                      onClick={() => {
                        setSelectedInspection(inspection);
                        setShowEditDialog(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{inspection.customerName}</p>
                          <p className="text-xs text-gray-600">{inspection.address}</p>
                          <p className="text-xs text-gray-600">{inspection.serviceType}</p>
                        </div>
                        <Badge className={getStatusColor(inspection.status)}>
                          {inspection.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderWeekView = () => {
    const weekStart = startOfWeek(view.date);
    const weekEnd = endOfWeek(view.date);
    const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            {format(weekStart, 'MMM d')} - {format(weekEnd, 'MMM d, yyyy')}
          </h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setView(prev => ({ ...prev, date: addDays(prev.date, -7) }))}
            >
              Previous Week
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setView(prev => ({ ...prev, date: addDays(prev.date, 7) }))}
            >
              Next Week
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-2">
          <div className="p-2 text-sm font-medium text-gray-500">Time</div>
          {weekDays.map(day => (
            <div key={day.toISOString()} className="p-2 text-sm font-medium text-center border-b">
              <div>{format(day, 'EEE')}</div>
              <div className="text-lg">{format(day, 'd')}</div>
            </div>
          ))}

          {Array.from({ length: 12 }, (_, i) => i + 7).map(hour => (
            <React.Fragment key={hour}>
              <div className="p-2 text-xs text-gray-500 border-r">
                {hour}:00
              </div>
              {weekDays.map(day => {
                const dayInspections = filteredInspections.filter(inspection => {
                  const inspectionDate = new Date(inspection.scheduledAt);
                  return format(inspectionDate, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd') &&
                         inspectionDate.getHours() === hour;
                });

                return (
                  <div key={`${day.toISOString()}-${hour}`} className="p-1 border border-gray-100 min-h-[40px]">
                    {dayInspections.map(inspection => (
                      <div
                        key={inspection.id}
                        className="bg-blue-100 text-blue-800 text-xs p-1 rounded mb-1 cursor-pointer hover:bg-blue-200"
                        onClick={() => {
                          setSelectedInspection(inspection);
                          setShowEditDialog(true);
                        }}
                      >
                        <div className="font-medium truncate">{inspection.customerName}</div>
                        <div className="truncate">{inspection.suburb}</div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderMonthView = () => {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            {format(view.date, 'MMMM yyyy')}
          </h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setView(prev => ({
                ...prev,
                date: new Date(prev.date.getFullYear(), prev.date.getMonth() - 1, 1)
              }))}
            >
              Previous Month
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setView(prev => ({
                ...prev,
                date: new Date(prev.date.getFullYear(), prev.date.getMonth() + 1, 1)
              }))}
            >
              Next Month
            </Button>
          </div>
        </div>

        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(date) => date && setSelectedDate(date)}
          month={view.date}
          onMonthChange={(month) => setView(prev => ({ ...prev, date: month }))}
          className="rounded-md border"
          components={{
            Day: ({ date, ...props }) => {
              const dayInspections = filteredInspections.filter(
                inspection => format(new Date(inspection.scheduledAt), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
              );

              return (
                <div className="relative p-2 text-center">
                  <div {...props} />
                  {dayInspections.length > 0 && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {dayInspections.length}
                      </div>
                    </div>
                  )}
                </div>
              );
            },
          }}
        />
      </div>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Inspection Calendar</h1>
          <p className="text-gray-600">Schedule and manage mould inspections</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSyncWithGoogleCalendar}
            disabled={syncingCalendar}
          >
            {syncingCalendar ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Upload className="h-4 w-4 mr-2" />}
            Sync Calendar
          </Button>

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Schedule Inspection
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Schedule New Inspection</DialogTitle>
                <DialogDescription>
                  Create a new inspection appointment with automated scheduling optimization
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="lead">Customer/Lead</Label>
                    <Select value={formData.leadId} onValueChange={(value) => {
                      setFormData(prev => ({ ...prev, leadId: value }));
                      if (formData.scheduledAt) {
                        getOptimalTechnicianSuggestion(value, formData.scheduledAt);
                      }
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select customer" />
                      </SelectTrigger>
                      <SelectContent>
                        {leads.map(lead => (
                          <SelectItem key={lead.id} value={lead.id}>
                            {lead.firstName} {lead.lastName} - {lead.suburb}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="technician">Technician</Label>
                    <Select value={formData.technicianId} onValueChange={(value) =>
                      setFormData(prev => ({ ...prev, technicianId: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue placeholder="Select technician" />
                      </SelectTrigger>
                      <SelectContent>
                        {technicians.map(tech => (
                          <SelectItem key={tech.id} value={tech.id}>
                            {tech.name} {tech.territories.length > 0 && `(${tech.territories.join(', ')})`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="scheduledAt">Date & Time</Label>
                    <Input
                      type="datetime-local"
                      value={formData.scheduledAt}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, scheduledAt: e.target.value }));
                        if (formData.leadId) {
                          getOptimalTechnicianSuggestion(formData.leadId, e.target.value);
                        }
                      }}
                    />
                  </div>

                  <div>
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Select value={formData.duration.toString()} onValueChange={(value) =>
                      setFormData(prev => ({ ...prev, duration: parseInt(value) }))
                    }>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="90">1.5 hours</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="180">3 hours</SelectItem>
                        <SelectItem value="240">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="estimatedCost">Estimated Cost (optional)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.estimatedCost || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      estimatedCost: e.target.value ? parseFloat(e.target.value) : undefined
                    }))}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    placeholder="Additional notes for the inspection..."
                    value={formData.notes || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  />
                </div>

                {/* Reminder Settings */}
                <div className="space-y-3">
                  <Label>Automated Reminders</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.reminderSettings.email24h}
                        onCheckedChange={(checked) => setFormData(prev => ({
                          ...prev,
                          reminderSettings: { ...prev.reminderSettings, email24h: checked }
                        }))}
                      />
                      <Label className="text-sm">Email 24h before</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.reminderSettings.email2h}
                        onCheckedChange={(checked) => setFormData(prev => ({
                          ...prev,
                          reminderSettings: { ...prev.reminderSettings, email2h: checked }
                        }))}
                      />
                      <Label className="text-sm">Email 2h before</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.reminderSettings.sms1h}
                        onCheckedChange={(checked) => setFormData(prev => ({
                          ...prev,
                          reminderSettings: { ...prev.reminderSettings, sms1h: checked }
                        }))}
                      />
                      <Label className="text-sm">SMS 1h before</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.reminderSettings.customerReminders}
                        onCheckedChange={(checked) => setFormData(prev => ({
                          ...prev,
                          reminderSettings: { ...prev.reminderSettings, customerReminders: checked }
                        }))}
                      />
                      <Label className="text-sm">Customer reminders</Label>
                    </div>
                  </div>
                </div>

                {/* Conflicts Warning */}
                {conflicts.length > 0 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="font-medium text-yellow-800">Scheduling Conflicts Detected</span>
                    </div>
                    <div className="space-y-2">
                      {conflicts.map((conflict, index) => (
                        <div key={index} className="text-sm text-yellow-700">
                          <strong>{conflict.type}:</strong> {conflict.message}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateInspection} disabled={loading}>
                    {loading && <RefreshCw className="h-4 w-4 mr-2 animate-spin" />}
                    Schedule Inspection
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters and View Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Tabs value={view.type} onValueChange={(value) =>
            setView(prev => ({ ...prev, type: value as 'day' | 'week' | 'month' }))
          }>
            <TabsList>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setView(prev => ({ ...prev, date: new Date() }))}
          >
            Today
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <Select value={filterTechnician} onValueChange={setFilterTechnician}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Technicians" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Technicians</SelectItem>
              {technicians.map(tech => (
                <SelectItem key={tech.id} value={tech.id}>{tech.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="SCHEDULED">Scheduled</SelectItem>
              <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="CANCELLED">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Calendar Views */}
      <Card>
        <CardContent className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <RefreshCw className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          ) : (
            <>
              {view.type === 'day' && renderDayView()}
              {view.type === 'week' && renderWeekView()}
              {view.type === 'month' && renderMonthView()}
            </>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Today's Inspections</span>
            </div>
            <p className="text-2xl font-bold mt-2">
              {filteredInspections.filter(i =>
                format(new Date(i.scheduledAt), 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
              ).length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">This Week</span>
            </div>
            <p className="text-2xl font-bold mt-2">
              {filteredInspections.filter(i => {
                const inspectionDate = new Date(i.scheduledAt);
                const weekStart = startOfWeek(new Date());
                const weekEnd = endOfWeek(new Date());
                return inspectionDate >= weekStart && inspectionDate <= weekEnd;
              }).length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Completed</span>
            </div>
            <p className="text-2xl font-bold mt-2">
              {filteredInspections.filter(i => i.status === 'COMPLETED').length}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-medium">Conflicts</span>
            </div>
            <p className="text-2xl font-bold mt-2">{conflicts.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Edit Inspection Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Inspection</DialogTitle>
            <DialogDescription>
              Modify inspection details and scheduling
            </DialogDescription>
          </DialogHeader>

          {selectedInspection && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Customer</Label>
                  <p className="font-medium">{selectedInspection.customerName}</p>
                  <p className="text-sm text-gray-600">{selectedInspection.address}</p>
                </div>
                <div>
                  <Label>Service Type</Label>
                  <p className="font-medium">{selectedInspection.serviceType}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editTechnician">Technician</Label>
                  <Select
                    value={formData.technicianId || selectedInspection.technicianId}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, technicianId: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {technicians.map(tech => (
                        <SelectItem key={tech.id} value={tech.id}>{tech.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="editScheduledAt">Date & Time</Label>
                  <Input
                    type="datetime-local"
                    value={formData.scheduledAt || selectedInspection.scheduledAt.slice(0, 16)}
                    onChange={(e) => setFormData(prev => ({ ...prev, scheduledAt: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label>Current Status</Label>
                <Badge className={getStatusColor(selectedInspection.status)}>
                  {selectedInspection.status}
                </Badge>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteInspection(selectedInspection.id)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Cancel Inspection
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowEditDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleUpdateInspection} disabled={loading}>
                    {loading && <RefreshCw className="h-4 w-4 mr-2 animate-spin" />}
                    Update Inspection
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      </div>
    </AdminLayout>
  );
}