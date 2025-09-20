import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerMultiple } from '@/components/ui/date-picker-multiple';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { ServiceType, Urgency } from '@prisma/client';

const API_BASE_URL = 'http://localhost:3001/api';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  suburb: string;
  serviceType: ServiceType;
  urgency: Urgency;
  description: string;
  propertyType?: string;
  bookingDates: string[];
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    suburb: '',
    serviceType: ServiceType.MOULD_INSPECTION,
    urgency: Urgency.MEDIUM,
    description: '',
    propertyType: '',
    bookingDates: [],
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Split full name into first and last name
      const nameParts = formData.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const submitData = {
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        suburb: formData.suburb,
        serviceType: formData.serviceType,
        urgency: formData.urgency,
        source: 'WEBSITE', // Automatically set source as Website
        bookingDates: formData.bookingDates,
        notes: `Property Type: ${formData.propertyType || 'Not specified'}\n\nDescription: ${formData.description}`,
      };

      const response = await fetch(`${API_BASE_URL}/leads/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        suburb: '',
        serviceType: ServiceType.MOULD_INSPECTION,
        urgency: Urgency.MEDIUM,
        description: '',
        propertyType: '',
        bookingDates: [],
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">
          Your message has been received. Our team will contact you within 1 hour during business hours.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          For immediate assistance, call us at <a href="tel:1800954117" className="font-bold text-primary">1800 954 117</a>
        </p>
        <Button
          onClick={() => setSubmitStatus('idle')}
          variant="outline"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div>
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-red-700">
              There was an error submitting your form. Please try again or call us directly at{' '}
              <a href="tel:1800954117" className="font-bold underline">1800 954 117</a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Type Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">What service do you need? *</Label>
          <div className="grid md:grid-cols-2 gap-3">
            <label className="flex items-center space-x-3 cursor-pointer p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
              <input
                type="radio"
                name="serviceType"
                value={ServiceType.MOULD_INSPECTION}
                checked={formData.serviceType === ServiceType.MOULD_INSPECTION}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as ServiceType })}
                className="text-accent-teal"
              />
              <div>
                <div className="font-medium">Professional Inspection</div>
                <div className="text-sm text-muted-foreground">Comprehensive assessment</div>
              </div>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
              <input
                type="radio"
                name="serviceType"
                value={ServiceType.EMERGENCY_RESPONSE}
                checked={formData.serviceType === ServiceType.EMERGENCY_RESPONSE}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as ServiceType })}
                className="text-orange-500"
              />
              <div>
                <div className="font-medium text-orange-500">Emergency Service</div>
                <div className="text-sm text-muted-foreground">Same-day response</div>
              </div>
            </label>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-12"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="suburb">Melbourne Suburb *</Label>
            <Input
              id="suburb"
              placeholder="Enter your suburb"
              value={formData.suburb}
              onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="propertyType">Property Type</Label>
            <Select
              value={formData.propertyType}
              onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
                <SelectItem value="commercial">Commercial Property</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="urgency">Urgency Level *</Label>
          <Select
            value={formData.urgency}
            onValueChange={(value) => setFormData({ ...formData, urgency: value as Urgency })}
          >
            <SelectTrigger className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={Urgency.URGENT}>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  {formatEnumValue(Urgency.URGENT)} - Same day needed
                </div>
              </SelectItem>
              <SelectItem value={Urgency.HIGH}>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  {formatEnumValue(Urgency.HIGH)} - Within 2-3 days
                </div>
              </SelectItem>
              <SelectItem value={Urgency.MEDIUM}>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  {formatEnumValue(Urgency.MEDIUM)} - Within a week
                </div>
              </SelectItem>
              <SelectItem value={Urgency.LOW}>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  {formatEnumValue(Urgency.LOW)} - No rush
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Booking Date Selection */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold">When are you available for a free inspection?</Label>
              <span className="text-sm text-muted-foreground">(Optional)</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Select all dates that work for you. We'll contact you to confirm the best time.
            </p>
          </div>

          <DatePickerMultiple
            selectedDates={formData.bookingDates}
            onDatesChange={(dates) => setFormData({ ...formData, bookingDates: dates })}
            placeholder="Select your available dates"
            maxDates={5}
            className="w-full"
          />

          {formData.bookingDates.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900">
                    Great! We'll contact you to schedule your free inspection.
                  </p>
                  <p className="text-xs text-blue-700">
                    Our team operates 7am-7pm every day across Melbourne.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Describe Your Mould Issue *</Label>
          <Textarea
            id="description"
            placeholder="Please describe your mould issue or restoration needs in detail. Include location of the problem, when you first noticed it, and any concerns about health or property damage..."
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary-600 text-white w-full text-lg px-8 py-4 h-auto"
          size="lg"
        >
          {isSubmitting ? 'Submitting...' : 'Get My Professional Quote Now'}
          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>

        <div className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our terms and privacy policy.
          We'll never share your information. Response within 1 hour during business hours.
        </div>
      </form>
    </div>
  );
};