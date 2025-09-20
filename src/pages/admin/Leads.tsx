import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Users,
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Edit,
  Eye,
  Trash2,
  MoreHorizontal
} from 'lucide-react';
import { ProtectedRoute } from '@/contexts/AuthContext';
import { LeadService, LeadWithRelations, CreateLeadData, UpdateLeadData } from '@/lib/services/leadService';
import { ServiceType, LeadStatus, LeadSource, Urgency } from '@prisma/client';
import { useAuth } from '@/contexts/AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { PhoneLeadDialog } from '@/components/PhoneLeadDialog';
import { useLocation, useNavigate } from 'react-router-dom';
import { DatePickerMultiple } from '@/components/ui/date-picker-multiple';

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

interface CreateLeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadCreated: () => void;
}

interface ViewLeadDialogProps {
  lead: LeadWithRelations | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface EditLeadDialogProps {
  lead: LeadWithRelations | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadUpdated: () => void;
}

function CreateLeadDialog({ open, onOpenChange, onLeadCreated }: CreateLeadDialogProps) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [formData, setFormData] = useState<Partial<CreateLeadData>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    suburb: '',
    address: '',
    postcode: '',
    serviceType: ServiceType.MOULD_INSPECTION,
    urgency: Urgency.MEDIUM,
    source: LeadSource.WEBSITE,
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    try {
      await LeadService.createLead({
        ...formData,
        createdById: user.id,
        bookingDates: selectedDates,
      } as CreateLeadData);
      onLeadCreated();
      onOpenChange(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        suburb: '',
        address: '',
        postcode: '',
        serviceType: ServiceType.MOULD_INSPECTION,
        urgency: Urgency.MEDIUM,
        source: LeadSource.WEBSITE,
        notes: '',
      });
      setSelectedDates([]);
    } catch (error) {
      console.error('Failed to create lead:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Lead</DialogTitle>
          <DialogDescription>
            Add a new lead to the CRM system
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName || ''}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName || ''}
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
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                value={formData.phone || ''}
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
                value={formData.suburb || ''}
                onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="postcode">Postcode</Label>
              <Input
                id="postcode"
                value={formData.postcode || ''}
                onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address || ''}
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

          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes || ''}
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
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create Lead'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function ViewLeadDialog({ lead, open, onOpenChange }: ViewLeadDialogProps) {
  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Lead Details - {lead.firstName} {lead.lastName}</DialogTitle>
          <DialogDescription>
            Complete information for this lead
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="text-sm font-medium text-gray-600">Full Name</Label>
                <p className="text-sm">{lead.firstName} {lead.lastName}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Email</Label>
                <p className="text-sm">{lead.email}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Phone</Label>
                <p className="text-sm">{lead.phone}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Address</Label>
                <p className="text-sm">
                  {lead.address && `${lead.address}, `}
                  {lead.suburb}
                  {lead.postcode && ` ${lead.postcode}`}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Service Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="text-sm font-medium text-gray-600">Service Type</Label>
                <p className="text-sm">{formatServiceType(lead.serviceType)}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Status</Label>
                <Badge className={getStatusColor(lead.status)}>
                  {formatEnumValue(lead.status)}
                </Badge>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Urgency</Label>
                <Badge className={getUrgencyColor(lead.urgency)}>
                  {formatEnumValue(lead.urgency)}
                </Badge>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Source</Label>
                <p className="text-sm">{formatEnumValue(lead.source)}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-600">Assigned To</Label>
                <p className="text-sm">{lead.assignedTo ? lead.assignedTo.name : 'Unassigned'}</p>
              </div>
            </CardContent>
          </Card>

          {/* Notes and Timeline */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Notes & Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {lead.notes && (
                <div>
                  <Label className="text-sm font-medium text-gray-600">Notes</Label>
                  <p className="text-sm bg-gray-50 p-3 rounded">{lead.notes}</p>
                </div>
              )}

              {/* Booking Dates */}
              {lead.bookingDates && (() => {
                try {
                  const dates = JSON.parse(lead.bookingDates);
                  if (Array.isArray(dates) && dates.length > 0) {
                    return (
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Available Booking Dates</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {dates.map((dateStr, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(dateStr).toLocaleDateString('en-AU', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    );
                  }
                } catch {
                  return null;
                }
                return null;
              })()}

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Created</Label>
                  <p>{new Date(lead.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Last Updated</Label>
                  <p>{new Date(lead.updatedAt).toLocaleString()}</p>
                </div>
                {lead.contactedAt && (
                  <div>
                    <Label className="text-sm font-medium text-gray-600">First Contacted</Label>
                    <p>{new Date(lead.contactedAt).toLocaleString()}</p>
                  </div>
                )}
                {lead.qualifiedAt && (
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Qualified</Label>
                    <p>{new Date(lead.qualifiedAt).toLocaleString()}</p>
                  </div>
                )}
              </div>

              {/* Activities */}
              {lead.activities && lead.activities.length > 0 && (
                <div>
                  <Label className="text-sm font-medium text-gray-600">Recent Activities</Label>
                  <div className="mt-2 space-y-2">
                    {lead.activities.slice(0, 5).map((activity) => (
                      <div key={activity.id} className="text-sm bg-gray-50 p-2 rounded">
                        <div className="font-medium">{formatEnumValue(activity.type)}</div>
                        <div className="text-gray-600">{activity.description}</div>
                        <div className="text-xs text-gray-500">
                          {new Date(activity.createdAt).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EditLeadDialog({ lead, open, onOpenChange, onLeadUpdated }: EditLeadDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [formData, setFormData] = useState<Partial<UpdateLeadData>>({});

  // Initialize form data when lead changes
  React.useEffect(() => {
    if (lead) {
      setFormData({
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
        assignedToId: lead.assignedToId || '',
      });

      // Initialize booking dates
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
    }
  }, [lead]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead) return;

    setIsLoading(true);
    try {
      await LeadService.updateLead(lead.id, {
        ...formData,
        bookingDates: selectedDates,
      });
      onLeadUpdated();
      onOpenChange(false);
    } catch (error) {
      console.error('Failed to update lead:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Lead - {lead.firstName} {lead.lastName}</DialogTitle>
          <DialogDescription>
            Update lead information
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName || ''}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName || ''}
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
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                value={formData.phone || ''}
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
                value={formData.suburb || ''}
                onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="postcode">Postcode</Label>
              <Input
                id="postcode"
                value={formData.postcode || ''}
                onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address || ''}
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
              value={formData.notes || ''}
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
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Update Lead'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function LeadsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<LeadWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [phoneDialogOpen, setPhoneDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<LeadWithRelations | null>(null);

  const loadLeads = async () => {
    try {
      const data = await LeadService.getAllLeads();
      setLeads(data);
    } catch (error) {
      console.error('Failed to load leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  // Handle phone entry URL parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('phoneEntry') === 'true') {
      setPhoneDialogOpen(true);
      // Clean up URL parameter
      navigate('/admin/leads', { replace: true });
    }
  }, [location.search, navigate]);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.suburb.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleDeleteLead = async (leadId: string) => {
    if (confirm('Are you sure you want to delete this lead?')) {
      try {
        await LeadService.deleteLead(leadId);
        loadLeads();
      } catch (error) {
        console.error('Failed to delete lead:', error);
      }
    }
  };

  const handleViewLead = (lead: LeadWithRelations) => {
    setSelectedLead(lead);
    setViewDialogOpen(true);
  };

  const handleEditLead = (lead: LeadWithRelations) => {
    setSelectedLead(lead);
    setEditDialogOpen(true);
  };

  if (isLoading) {
    return (
      <ProtectedRoute requireAdmin>
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-16 bg-gray-200 rounded animate-pulse" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requireAdmin>
      <div className="min-h-screen bg-gray-50">
        <div className="border-b border-gray-200 bg-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
              <p className="text-gray-600">Manage and track all your customer inquiries</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="default" onClick={() => setPhoneDialogOpen(true)} className="bg-green-600 hover:bg-green-700">
                <Phone className="h-4 w-4 mr-2" />
                Phone Lead
              </Button>
              <Button onClick={() => setCreateDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Lead
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search leads by name, email, phone, or suburb..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-48">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        {Object.values(LeadStatus).map((status) => (
                          <SelectItem key={status} value={status}>
                            {formatEnumValue(status)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Leads</p>
                      <p className="text-2xl font-bold">{leads.length}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">New Leads</p>
                      <p className="text-2xl font-bold">
                        {leads.filter(lead => lead.status === LeadStatus.NEW).length}
                      </p>
                    </div>
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="h-4 w-4 bg-blue-600 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Converted</p>
                      <p className="text-2xl font-bold">
                        {leads.filter(lead => lead.status === LeadStatus.CONVERTED).length}
                      </p>
                    </div>
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-4 w-4 bg-green-600 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Follow Up</p>
                      <p className="text-2xl font-bold">
                        {leads.filter(lead => lead.status === LeadStatus.FOLLOW_UP).length}
                      </p>
                    </div>
                    <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <div className="h-4 w-4 bg-yellow-600 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Leads Table */}
            <Card>
              <CardHeader>
                <CardTitle>Leads ({filteredLeads.length})</CardTitle>
                <CardDescription>
                  {filteredLeads.length === leads.length
                    ? 'All leads in the system'
                    : `Filtered from ${leads.length} total leads`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {filteredLeads.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No leads found</h3>
                    <p className="text-gray-600 mb-4">
                      {searchTerm || statusFilter !== 'all'
                        ? 'Try adjusting your search or filters'
                        : 'Get started by creating your first lead'}
                    </p>
                    {!searchTerm && statusFilter === 'all' && (
                      <Button onClick={() => setCreateDialogOpen(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Lead
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Urgency</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredLeads.map((lead) => (
                          <TableRow key={lead.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium text-gray-900 flex items-center gap-2">
                                  {lead.firstName} {lead.lastName}
                                  {lead.bookingDates && (() => {
                                    try {
                                      const dates = JSON.parse(lead.bookingDates);
                                      if (Array.isArray(dates) && dates.length > 0) {
                                        return (
                                          <Badge variant="outline" className="text-xs">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {dates.length} date{dates.length > 1 ? 's' : ''}
                                          </Badge>
                                        );
                                      }
                                    } catch {
                                      return null;
                                    }
                                    return null;
                                  })()}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {lead.assignedTo ? `Assigned to ${lead.assignedTo.name}` : 'Unassigned'}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center text-sm">
                                  <Mail className="h-3 w-3 mr-1 text-gray-400" />
                                  {lead.email}
                                </div>
                                <div className="flex items-center text-sm">
                                  <Phone className="h-3 w-3 mr-1 text-gray-400" />
                                  {lead.phone}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center text-sm">
                                <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                                {lead.suburb}
                                {lead.postcode && ` ${lead.postcode}`}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="text-sm">
                                {formatServiceType(lead.serviceType)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(lead.status)}>
                                {formatEnumValue(lead.status)}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={getUrgencyColor(lead.urgency)}>
                                {formatEnumValue(lead.urgency)}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="text-sm text-gray-600">
                                {new Date(lead.createdAt).toLocaleDateString()}
                              </div>
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => handleViewLead(lead)}>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleEditLead(lead)}>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Lead
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem
                                    className="text-red-600"
                                    onClick={() => handleDeleteLead(lead.id)}
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete Lead
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <CreateLeadDialog
          open={createDialogOpen}
          onOpenChange={setCreateDialogOpen}
          onLeadCreated={loadLeads}
        />

        <PhoneLeadDialog
          open={phoneDialogOpen}
          onOpenChange={setPhoneDialogOpen}
          onLeadCreated={loadLeads}
        />

        <ViewLeadDialog
          lead={selectedLead}
          open={viewDialogOpen}
          onOpenChange={setViewDialogOpen}
        />

        <EditLeadDialog
          lead={selectedLead}
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
          onLeadUpdated={loadLeads}
        />
      </div>
    </ProtectedRoute>
  );
}