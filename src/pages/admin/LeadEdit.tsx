import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Save, Loader2, Phone, Mail, MapPin, Calendar, DollarSign, AlertCircle, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ServiceType, LeadStatus, LeadSource, Urgency } from '@prisma/client';

export function LeadEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lead, setLead] = useState<LeadWithRelations | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    postcode: '',
    serviceType: 'MOULD_INSPECTION' as ServiceType,
    urgency: 'MEDIUM' as Urgency,
    source: 'WEBSITE' as LeadSource,
    status: 'NEW' as LeadStatus,
    notes: '',
    inspectionDate: '',
    inspectionTime: '',
  });

  // Load lead data with retry logic
  useEffect(() => {
    const loadLead = async (retryCount = 0) => {
      if (!id) {
        navigate('/admin/leads');
        return;
      }

      try {
        setIsLoading(true);
        const data = await LeadService.getLeadById(id);
        if (data) {
          setLead(data);
          setFormData({
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            email: data.email || '',
            phone: data.phone || '',
            address: data.address || '',
            suburb: data.suburb || '',
            postcode: data.postcode || '',
            serviceType: data.serviceType || 'MOULD_INSPECTION',
            urgency: data.urgency || 'MEDIUM',
            source: data.source || 'WEBSITE',
            status: data.status || 'NEW',
            notes: data.notes || '',
            inspectionDate: data.inspectionDate || '',
            inspectionTime: data.inspectionTime || '',
          });
        } else {
          toast({
            title: "Lead not found",
            description: "The lead you're looking for doesn't exist.",
            variant: "destructive"
          });
          navigate('/admin/leads');
        }
      } catch (error: any) {
        console.error('Failed to load lead:', error);

        // Check if it's a network/server error and retry
        if (retryCount < 3 && (error.message?.includes('503') || error.message?.includes('Failed to fetch'))) {
          toast({
            title: "Connection Error",
            description: `Backend server not responding. Retrying... (${retryCount + 1}/3)`,
          });
          // Retry after 2 seconds
          setTimeout(() => loadLead(retryCount + 1), 2000);
        } else {
          // Show specific error message based on error type
          let errorMessage = "Failed to load lead data.";
          if (error.message?.includes('503')) {
            errorMessage = "Backend server is not running. Please ensure the API server is running on port 3001.";
          } else if (error.message?.includes('404')) {
            errorMessage = "Lead not found. It may have been deleted.";
          } else if (error.message?.includes('network')) {
            errorMessage = "Network error. Please check your connection.";
          }

          toast({
            title: "Error",
            description: errorMessage,
            variant: "destructive",
            action: (
              <Button
                variant="outline"
                size="sm"
                onClick={() => loadLead(0)}
              >
                Retry
              </Button>
            )
          });
        }
        setIsLoading(false);
      } finally {
        if (retryCount === 0) {
          setIsLoading(false);
        }
      }
    };

    loadLead();
  }, [id, navigate]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    // Basic validation
    if (!formData.firstName || !formData.lastName) {
      toast({
        title: "Validation Error",
        description: "First name and last name are required.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email && !formData.phone) {
      toast({
        title: "Validation Error",
        description: "At least one contact method (email or phone) is required.",
        variant: "destructive"
      });
      return;
    }

    // Require booking details before CONTACTED status
    if (formData.status === 'CONTACTED' && (!formData.inspectionDate || !formData.inspectionTime)) {
      toast({
        title: "Validation Error",
        description: "Inspection date and time are required before changing status to CONTACTED.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSaving(true);
      await LeadService.updateLead(id, formData);
      toast({
        title: "Success",
        description: "Lead updated successfully.",
      });
      navigate('/admin/leads/kanban');
    } catch (error) {
      console.error('Failed to update lead:', error);
      toast({
        title: "Error",
        description: "Failed to update lead. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Format enum values for display
  const formatEnumValue = (value: string): string => {
    return value.split('_').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading lead...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (!lead) {
    return null;
  }

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/admin/leads/kanban')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Leads
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Edit Lead</h1>
                <p className="text-sm text-gray-600 mt-1">
                  ID: {id} • Created {new Date(lead.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Primary contact details for this lead</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">
                    <Mail className="h-3 w-3 inline mr-1" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">
                    <Phone className="h-3 w-3 inline mr-1" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Location Information */}
            <Card>
              <CardHeader>
                <CardTitle>Location Information</CardTitle>
                <CardDescription>Service address and location details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">
                    <MapPin className="h-3 w-3 inline mr-1" />
                    Street Address
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="suburb">Suburb *</Label>
                    <Input
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      placeholder="3000"
                      maxLength={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Information */}
            <Card>
              <CardHeader>
                <CardTitle>Service Information</CardTitle>
                <CardDescription>Service type and urgency details</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleSelectChange('serviceType', value)}
                  >
                    <SelectTrigger id="serviceType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(ServiceType).map(type => (
                        <SelectItem key={type} value={type}>
                          {formatEnumValue(type)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="urgency">
                    <AlertCircle className="h-3 w-3 inline mr-1" />
                    Urgency
                  </Label>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => handleSelectChange('urgency', value)}
                  >
                    <SelectTrigger id="urgency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(Urgency).map(urgency => (
                        <SelectItem key={urgency} value={urgency}>
                          {formatEnumValue(urgency)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Lead Management */}
            <Card>
              <CardHeader>
                <CardTitle>Lead Management</CardTitle>
                <CardDescription>Lead status and source information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => handleSelectChange('status', value)}
                    >
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(LeadStatus).map(status => (
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
                      onValueChange={(value) => handleSelectChange('source', value)}
                    >
                      <SelectTrigger id="source">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(LeadSource).map(source => (
                          <SelectItem key={source} value={source}>
                            {formatEnumValue(source)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Inspection Booking - Shown when status is CONTACTED */}
                {formData.status === 'CONTACTED' && (
                  <div className="border-t pt-4 mt-4">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        Schedule Inspection
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Book the inspection date and time for this lead
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="inspectionDate">
                          <Calendar className="h-3 w-3 inline mr-1" />
                          Inspection Date
                        </Label>
                        <Input
                          id="inspectionDate"
                          name="inspectionDate"
                          type="date"
                          value={formData.inspectionDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="inspectionTime">
                          <Clock className="h-3 w-3 inline mr-1" />
                          Inspection Time
                        </Label>
                        <Input
                          id="inspectionTime"
                          name="inspectionTime"
                          type="time"
                          value={formData.inspectionTime}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Email Status Indicator */}
                    {lead?.emailSent && (
                      <div className="mt-4 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800 border-green-300">
                              Confirmation Sent
                            </Badge>
                            <span className="text-sm text-green-700">
                              {lead.emailSentAt && new Date(lead.emailSentAt).toLocaleString('en-AU', {
                                timeZone: 'Australia/Melbourne',
                                dateStyle: 'medium',
                                timeStyle: 'short'
                              })}
                            </span>
                          </div>
                          {lead.emailStatus === 'failed' && (
                            <p className="text-xs text-red-600 mt-1">Email delivery failed - may need to resend</p>
                          )}
                        </div>
                      </div>
                    )}

                    {!lead?.emailSent && formData.inspectionDate && formData.inspectionTime && formData.email && (
                      <div className="mt-4 flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <AlertCircle className="h-4 w-4 text-blue-600" />
                        <div className="flex-1">
                          <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                            Customer Confirmation Email Ready
                          </Badge>
                          <p className="text-xs text-blue-600 mt-1">
                            Booking confirmation email will be automatically sent to {formData.email}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
                <CardDescription>Additional information about this lead</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Add any relevant notes about this lead..."
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/leads/kanban')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default LeadEdit;