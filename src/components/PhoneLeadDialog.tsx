import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, User, Mail, MapPin, Clock, FileText, Calendar } from 'lucide-react';
import { CreateLeadData, LeadService } from '@/lib/services/leadService';
import { ServiceType, Urgency } from '@prisma/client';
import { useAuth } from '@/contexts/AuthContext';

interface PhoneLeadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadCreated: () => void;
}

const MELBOURNE_SUBURBS = [
  'Melbourne CBD', 'South Yarra', 'Toorak', 'Richmond', 'Collingwood', 'Fitzroy',
  'Carlton', 'Parkville', 'North Melbourne', 'West Melbourne', 'East Melbourne',
  'Southbank', 'Docklands', 'Port Melbourne', 'Albert Park', 'Middle Park',
  'South Melbourne', 'Prahran', 'Windsor', 'St Kilda', 'Elwood', 'Balaclava',
  'Caulfield', 'Brighton', 'Sandringham', 'Hampton', 'Bentleigh', 'Ormond',
  'Glen Huntly', 'Elsternwick', 'Carnegie', 'Murrumbeena', 'Hughesdale',
  'Oakleigh', 'Huntingdale', 'Clayton', 'Notting Hill', 'Mount Waverley',
  'Glen Waverley', 'Springvale', 'Noble Park', 'Dandenong', 'Keysborough',
  'Mordialloc', 'Chelsea', 'Bonbeach', 'Carrum', 'Seaford', 'Frankston'
];

export function PhoneLeadDialog({ open, onOpenChange, onLeadCreated }: PhoneLeadDialogProps) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<CreateLeadData>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    suburb: '',
    address: '',
    serviceType: ServiceType.MOULD_INSPECTION,
    urgency: Urgency.MEDIUM,
    notes: '',
    inspectionDate: '',
    inspectionTime: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    try {
      // If inspection date and time are set, mark as QUALIFIED (inspection confirmed)
      const hasBooking = formData.inspectionDate && formData.inspectionTime;

      await LeadService.createLead({
        ...formData,
        source: 'PHONE', // Force source to PHONE
        status: hasBooking ? 'QUALIFIED' : 'CONTACTED', // Auto-confirm if booking set
        createdById: user.id,
      } as CreateLeadData);

      onLeadCreated();
      onOpenChange(false);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        suburb: '',
        address: '',
        serviceType: ServiceType.MOULD_INSPECTION,
        urgency: Urgency.MEDIUM,
        notes: '',
        inspectionDate: '',
        inspectionTime: '',
      });
    } catch (error) {
      console.error('Failed to create phone lead:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: keyof CreateLeadData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-green-600" />
            Quick Phone Lead Entry
          </DialogTitle>
          <DialogDescription>
            Quickly capture lead information from phone call
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <User className="h-4 w-4 text-gray-500" />
              <Label className="text-base font-medium">Contact Information</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName || ''}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="John"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName || ''}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Smith"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone || ''}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="0412 345 678"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="john@example.com"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-4 w-4 text-gray-500" />
              <Label className="text-base font-medium">Property Location</Label>
            </div>

            <div>
              <Label htmlFor="suburb">Suburb *</Label>
              <Select value={formData.suburb || ''} onValueChange={(value) => updateFormData('suburb', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Melbourne suburb" />
                </SelectTrigger>
                <SelectContent className="max-h-48">
                  {MELBOURNE_SUBURBS.map((suburb) => (
                    <SelectItem key={suburb} value={suburb}>
                      {suburb}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="address">Street Address</Label>
              <Input
                id="address"
                value={formData.address || ''}
                onChange={(e) => updateFormData('address', e.target.value)}
                placeholder="123 Collins Street"
                className="mt-1"
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-gray-500" />
              <Label className="text-base font-medium">Service Details</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select
                  value={formData.serviceType || ServiceType.MOULD_INSPECTION}
                  onValueChange={(value) => updateFormData('serviceType', value as ServiceType)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ServiceType.MOULD_INSPECTION}>Mould Inspection</SelectItem>
                    <SelectItem value={ServiceType.COMPLETE_REMOVAL}>Complete Removal</SelectItem>
                    <SelectItem value={ServiceType.ADVANCED_FOGGING}>Advanced Fogging</SelectItem>
                    <SelectItem value={ServiceType.COMPREHENSIVE_REMOVAL}>Comprehensive Removal</SelectItem>
                    <SelectItem value={ServiceType.SUBFLOOR_REMEDIATION}>Subfloor Remediation</SelectItem>
                    <SelectItem value={ServiceType.EMERGENCY_RESPONSE}>Emergency Response</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="urgency">Urgency Level</Label>
                <Select
                  value={formData.urgency || Urgency.MEDIUM}
                  onValueChange={(value) => updateFormData('urgency', value as Urgency)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={Urgency.LOW}>Low</SelectItem>
                    <SelectItem value={Urgency.MEDIUM}>Medium</SelectItem>
                    <SelectItem value={Urgency.HIGH}>High</SelectItem>
                    <SelectItem value={Urgency.URGENT}>Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Inspection Booking */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4 text-blue-600" />
              <Label className="text-base font-medium">Schedule Inspection</Label>
            </div>
            <p className="text-sm text-gray-500 mb-3">
              Book the inspection while on the phone - lead will be automatically marked as confirmed
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="inspectionDate">
                  <Calendar className="h-3 w-3 inline mr-1" />
                  Inspection Date
                </Label>
                <Input
                  id="inspectionDate"
                  type="date"
                  value={formData.inspectionDate || ''}
                  onChange={(e) => updateFormData('inspectionDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="inspectionTime">
                  <Clock className="h-3 w-3 inline mr-1" />
                  Inspection Time
                </Label>
                <Input
                  id="inspectionTime"
                  type="time"
                  value={formData.inspectionTime || ''}
                  onChange={(e) => updateFormData('inspectionTime', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            {formData.inspectionDate && formData.inspectionTime && (
              <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                  ✓ Inspection Confirmed
                </Badge>
                <span className="text-sm text-blue-700">
                  Lead will be marked as QUALIFIED with inspection booked
                </span>
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-gray-500" />
              <Label className="text-base font-medium">Call Notes</Label>
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes || ''}
                onChange={(e) => updateFormData('notes', e.target.value)}
                placeholder="Customer mentioned visible mould in bathroom, concerned about health effects..."
                rows={3}
                className="mt-1"
              />
            </div>
          </div>

          {/* Source Badge */}
          <div className="flex items-center gap-2">
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <Phone className="h-3 w-3 mr-1" />
              Phone Lead
            </Badge>
            <span className="text-sm text-gray-500">
              This lead will be marked as coming from a phone call
            </span>
          </div>
        </form>

        <DialogFooter className="gap-2">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading || !formData.firstName || !formData.lastName || !formData.phone || !formData.suburb}
            className="bg-green-600 hover:bg-green-700"
          >
            {isLoading ? 'Creating Lead...' : 'Create Phone Lead'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}