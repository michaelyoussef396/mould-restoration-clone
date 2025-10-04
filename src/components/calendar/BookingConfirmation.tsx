import React, { useState } from 'react';
import { format, addMinutes, parseISO } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Home,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { CalendarService } from '@/lib/services/calendarService';
import { toast } from '@/hooks/use-toast';

interface BookingDetails {
  date: Date;
  time: string;
  duration: number;
  technicianId: string;
  melbourneSuburb: string;
  leadId?: string;
}

interface BookingFormData {
  propertyAddress: string;
  contactNotes: string;
  accessInstructions: string;
  urgencyLevel: 'STANDARD' | 'URGENT' | 'EMERGENCY';
  propertyType: 'RESIDENTIAL' | 'COMMERCIAL' | 'INDUSTRIAL';
  estimatedValue: number;
  confirmationMethod: 'EMAIL' | 'SMS' | 'PHONE';
  reminderPreferences: {
    email24h: boolean;
    sms2h: boolean;
    phone30m: boolean;
  };
}

interface BookingConfirmationProps {
  bookingDetails: BookingDetails;
  leadData?: any;
  technicianData?: any;
  onConfirm: (bookingId: string) => void;
  onBack: () => void;
  onCancel: () => void;
}

export function BookingConfirmation({
  bookingDetails,
  leadData,
  technicianData,
  onConfirm,
  onBack,
  onCancel
}: BookingConfirmationProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    propertyAddress: leadData?.address || '',
    contactNotes: leadData?.notes || '',
    accessInstructions: '',
    urgencyLevel: 'STANDARD',
    propertyType: leadData?.propertyType || 'RESIDENTIAL',
    estimatedValue: leadData?.estimatedValue || 0,
    confirmationMethod: 'EMAIL',
    reminderPreferences: {
      email24h: true,
      sms2h: true,
      phone30m: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Melbourne suburb pricing estimates
  const getEstimatedCost = () => {
    const baseCost = 250;
    const durationMultiplier = bookingDetails.duration / 120; // Based on 2-hour standard
    const urgencyMultiplier = formData.urgencyLevel === 'EMERGENCY' ? 1.5 :
                             formData.urgencyLevel === 'URGENT' ? 1.25 : 1;
    const propertyMultiplier = formData.propertyType === 'COMMERCIAL' ? 1.5 :
                              formData.propertyType === 'INDUSTRIAL' ? 2 : 1;

    return Math.round(baseCost * durationMultiplier * urgencyMultiplier * propertyMultiplier);
  };

  // Update form data
  const updateFormData = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear related errors
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Update reminder preferences
  const updateReminderPreference = (preference: keyof BookingFormData['reminderPreferences'], checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      reminderPreferences: {
        ...prev.reminderPreferences,
        [preference]: checked
      }
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = 'Property address is required';
    }

    if (formData.estimatedValue <= 0) {
      newErrors.estimatedValue = 'Please provide an estimated service value';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit booking
  const handleConfirmBooking = async () => {
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please correct the highlighted fields.',
        variant: 'destructive'
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const bookingData = {
        leadId: bookingDetails.leadId,
        technicianId: bookingDetails.technicianId,
        scheduledDate: bookingDetails.date,
        scheduledTime: bookingDetails.time,
        durationMinutes: bookingDetails.duration,
        melbourneSuburb: bookingDetails.melbourneSuburb,
        propertyAddress: formData.propertyAddress,
        notes: formData.contactNotes,
        accessInstructions: formData.accessInstructions,
        urgencyLevel: formData.urgencyLevel,
        propertyType: formData.propertyType,
        estimatedValue: formData.estimatedValue,
        status: 'CONFIRMED',
        confirmationMethod: formData.confirmationMethod,
        reminderPreferences: formData.reminderPreferences,
      };

      const booking = await CalendarService.createBooking(bookingData);

      toast({
        title: 'Booking Confirmed',
        description: `Your mould inspection has been scheduled for ${format(bookingDetails.date, 'MMMM d, yyyy')} at ${format(parseISO(`2000-01-01T${bookingDetails.time}:00`), 'h:mm a')}.`,
      });

      onConfirm(booking.id);

    } catch (error) {
      console.error('Failed to create booking:', error);
      toast({
        title: 'Booking Failed',
        description: 'Unable to confirm your booking. Please try again or contact support.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const startTime = parseISO(`2000-01-01T${bookingDetails.time}:00`);
  const endTime = addMinutes(startTime, bookingDetails.duration);
  const estimatedCost = getEstimatedCost();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Booking Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Confirm Your Mould Inspection</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Appointment Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Appointment Details</h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <div>
                    <div className="font-medium">{format(bookingDetails.date, 'EEEE, MMMM d, yyyy')}</div>
                    <div className="text-sm text-gray-600">
                      {format(startTime, 'h:mm a')} - {format(endTime, 'h:mm a')}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <div>
                    <div className="font-medium">{bookingDetails.duration} minutes</div>
                    <div className="text-sm text-gray-600">
                      {bookingDetails.duration === 90 ? 'Basic' :
                       bookingDetails.duration === 120 ? 'Standard' :
                       bookingDetails.duration === 180 ? 'Comprehensive' : 'Extended'} Inspection
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <div>
                    <div className="font-medium">{bookingDetails.melbourneSuburb}</div>
                    <div className="text-sm text-gray-600">Melbourne, Victoria</div>
                  </div>
                </div>

                {technicianData && (
                  <div className="flex items-center space-x-3">
                    <User className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="font-medium">{technicianData.name}</div>
                      <div className="text-sm text-gray-600">Certified Technician</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pricing Estimate */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Service Estimate</h3>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">${estimatedCost}</div>
                <div className="text-sm text-blue-700">Estimated cost</div>
                <div className="text-xs text-blue-600 mt-1">
                  *Final cost determined after inspection
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Base Service ({bookingDetails.duration}min)</span>
                  <span>${Math.round(250 * (bookingDetails.duration / 120))}</span>
                </div>
                {formData.urgencyLevel !== 'STANDARD' && (
                  <div className="flex justify-between text-orange-600">
                    <span>{formData.urgencyLevel} surcharge</span>
                    <span>+{formData.urgencyLevel === 'EMERGENCY' ? '50%' : '25%'}</span>
                  </div>
                )}
                {formData.propertyType !== 'RESIDENTIAL' && (
                  <div className="flex justify-between text-orange-600">
                    <span>{formData.propertyType} property</span>
                    <span>+{formData.propertyType === 'COMMERCIAL' ? '50%' : '100%'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booking Details Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span>Property & Contact Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Property Address */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Property Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Enter full property address in Melbourne"
                value={formData.propertyAddress}
                onChange={(e) => updateFormData('propertyAddress', e.target.value)}
                className={`pl-10 ${errors.propertyAddress ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.propertyAddress && (
              <p className="text-sm text-red-600 mt-1">{errors.propertyAddress}</p>
            )}
          </div>

          {/* Property Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Property Type
              </label>
              <Select value={formData.propertyType} onValueChange={(value) => updateFormData('propertyType', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="RESIDENTIAL">Residential</SelectItem>
                  <SelectItem value="COMMERCIAL">Commercial</SelectItem>
                  <SelectItem value="INDUSTRIAL">Industrial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Urgency Level
              </label>
              <Select value={formData.urgencyLevel} onValueChange={(value) => updateFormData('urgencyLevel', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="STANDARD">Standard (within 1 week)</SelectItem>
                  <SelectItem value="URGENT">Urgent (within 2 days)</SelectItem>
                  <SelectItem value="EMERGENCY">Emergency (same day)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Estimated Value <span className="text-red-500">*</span>
              </label>
              <Input
                type="number"
                placeholder="0"
                value={formData.estimatedValue}
                onChange={(e) => updateFormData('estimatedValue', parseInt(e.target.value) || 0)}
                className={errors.estimatedValue ? 'border-red-500' : ''}
              />
              {errors.estimatedValue && (
                <p className="text-sm text-red-600 mt-1">{errors.estimatedValue}</p>
              )}
            </div>
          </div>

          {/* Contact Notes */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Additional Notes
            </label>
            <Textarea
              placeholder="Any specific concerns, areas of interest, or additional information about the mould problem..."
              value={formData.contactNotes}
              onChange={(e) => updateFormData('contactNotes', e.target.value)}
              rows={3}
            />
          </div>

          {/* Access Instructions */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Access Instructions
            </label>
            <Textarea
              placeholder="Parking information, entry codes, key location, contact person on-site, etc."
              value={formData.accessInstructions}
              onChange={(e) => updateFormData('accessInstructions', e.target.value)}
              rows={2}
            />
          </div>

          <Separator />

          {/* Communication Preferences */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Communication Preferences</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Confirmation Method
                </label>
                <Select value={formData.confirmationMethod} onValueChange={(value) => updateFormData('confirmationMethod', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EMAIL">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email confirmation</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="SMS">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>SMS confirmation</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="PHONE">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone call confirmation</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Appointment Reminders
                </label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="email24h"
                      checked={formData.reminderPreferences.email24h}
                      onCheckedChange={(checked) => updateReminderPreference('email24h', checked as boolean)}
                    />
                    <label htmlFor="email24h" className="text-sm">Email reminder (24 hours before)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sms2h"
                      checked={formData.reminderPreferences.sms2h}
                      onCheckedChange={(checked) => updateReminderPreference('sms2h', checked as boolean)}
                    />
                    <label htmlFor="sms2h" className="text-sm">SMS reminder (2 hours before)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="phone30m"
                      checked={formData.reminderPreferences.phone30m}
                      onCheckedChange={(checked) => updateReminderPreference('phone30m', checked as boolean)}
                    />
                    <label htmlFor="phone30m" className="text-sm">Phone reminder (30 minutes before)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div className="text-sm text-orange-800">
              <div className="font-medium mb-1">Important Information</div>
              <ul className="space-y-1 text-orange-700">
                <li>• A qualified technician will contact you 24 hours before the appointment to confirm details</li>
                <li>• Please ensure someone over 18 is present during the inspection</li>
                <li>• The inspection includes areas such as basements, crawl spaces, and attics if accessible</li>
                <li>• Payment is due upon completion of the inspection</li>
                <li>• Detailed report will be provided within 2 business days</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t">
        <Button variant="outline" onClick={onCancel}>
          Cancel Booking
        </Button>

        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={onBack}>
            Back to Time Selection
          </Button>
          <Button
            onClick={handleConfirmBooking}
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Confirming...
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Confirm Booking
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;