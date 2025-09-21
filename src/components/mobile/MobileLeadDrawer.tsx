import React, { useState, useCallback, useMemo } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import {
  Phone, User, Mail, MapPin, FileText, Calendar, Clock,
  Plus, X, Check, AlertCircle, Sparkles
} from 'lucide-react';
import { CreateLeadData, LeadService, LeadWithRelations, UpdateLeadData } from '@/lib/services/leadService';
import { ServiceType, Urgency, LeadStatus } from '@prisma/client';
import { useAuth } from '@/contexts/AuthContext';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';

// Optimized Melbourne suburbs for mobile quick-select
const PRIORITY_MELBOURNE_SUBURBS = [
  'Melbourne CBD', 'South Yarra', 'Toorak', 'Richmond', 'Collingwood', 'Fitzroy',
  'Carlton', 'Prahran', 'St Kilda', 'Brighton', 'Caulfield', 'Malvern',
  'Hawthorn', 'Camberwell', 'Glen Waverley', 'Oakleigh', 'Bentleigh'
];

// Service type options optimized for mobile display
const SERVICE_OPTIONS = [
  { value: ServiceType.MOULD_INSPECTION, label: 'Mould Inspection', icon: '🔍', priority: 1 },
  { value: ServiceType.EMERGENCY_RESPONSE, label: 'Emergency Response', icon: '🚨', priority: 2 },
  { value: ServiceType.COMPLETE_REMOVAL, label: 'Complete Removal', icon: '🧹', priority: 3 },
  { value: ServiceType.ADVANCED_FOGGING, label: 'Advanced Fogging', icon: '💨', priority: 4 },
  { value: ServiceType.COMPREHENSIVE_REMOVAL, label: 'Comprehensive Removal', icon: '🏠', priority: 5 },
  { value: ServiceType.SUBFLOOR_REMEDIATION, label: 'Subfloor Remediation', icon: '🔨', priority: 6 }
];

// Urgency options with color coding for mobile
const URGENCY_OPTIONS = [
  { value: Urgency.LOW, label: 'Low Priority', color: 'bg-blue-100 text-blue-800', icon: '📅' },
  { value: Urgency.MEDIUM, label: 'Medium Priority', color: 'bg-yellow-100 text-yellow-800', icon: '⏰' },
  { value: Urgency.HIGH, label: 'High Priority', color: 'bg-orange-100 text-orange-800', icon: '⚡' },
  { value: Urgency.URGENT, label: 'URGENT', color: 'bg-red-100 text-red-800', icon: '🚨' }
];

interface MobileLeadDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadCreated?: () => void;
  onLeadUpdated?: () => void;
  editingLead?: LeadWithRelations | null;
  mode?: 'create' | 'edit' | 'quick-add';
  defaultSource?: 'PHONE' | 'WEBSITE' | 'REFERRAL' | 'GOOGLE' | 'FACEBOOK';
}

export function MobileLeadDrawer({
  open,
  onOpenChange,
  onLeadCreated,
  onLeadUpdated,
  editingLead,
  mode = 'create',
  defaultSource = 'PHONE'
}: MobileLeadDrawerProps) {
  const { user } = useAuth();
  const { measureRender } = usePerformanceMonitor('MobileLeadDrawer');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = mode === 'quick-add' ? 2 : 3;

  // Optimized form state with performance in mind
  const [formData, setFormData] = useState<Partial<CreateLeadData | UpdateLeadData>>(() => ({
    firstName: editingLead?.firstName || '',
    lastName: editingLead?.lastName || '',
    email: editingLead?.email || '',
    phone: editingLead?.phone || '',
    suburb: editingLead?.suburb || '',
    address: editingLead?.address || '',
    serviceType: editingLead?.serviceType || ServiceType.MOULD_INSPECTION,
    urgency: editingLead?.urgency || Urgency.MEDIUM,
    notes: editingLead?.notes || '',
    status: editingLead?.status || 'NEW' as LeadStatus
  }));

  // Memoized validation for performance
  const validation = useMemo(() => {
    const isStep1Valid = formData.firstName && formData.lastName && formData.phone;
    const isStep2Valid = formData.suburb && formData.serviceType;
    const isFormValid = isStep1Valid && isStep2Valid;

    return { isStep1Valid, isStep2Valid, isFormValid };
  }, [formData]);

  // Optimized form update with shallow merge
  const updateFormData = useCallback((field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // Haptic feedback for mobile interactions
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

  // Handle form submission with performance optimization
  const handleSubmit = useCallback(async () => {
    if (!user || !validation.isFormValid) return;

    setIsLoading(true);
    triggerHapticFeedback('medium');

    try {
      const submitData = {
        ...formData,
        source: defaultSource,
        createdById: user.id
      };

      if (mode === 'edit' && editingLead) {
        await LeadService.updateLead(editingLead.id, submitData as UpdateLeadData);
        toast({
          title: "Lead Updated! 🎉",
          description: `${formData.firstName} ${formData.lastName} has been updated successfully.`,
        });
        onLeadUpdated?.();
      } else {
        await LeadService.createLead(submitData as CreateLeadData);
        toast({
          title: "New Lead Created! 🎉",
          description: `${formData.firstName} ${formData.lastName} from ${formData.suburb} has been added to your pipeline.`,
        });
        onLeadCreated?.();
      }

      triggerHapticFeedback('heavy');
      onOpenChange(false);

      // Reset form for create mode
      if (mode !== 'edit') {
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', suburb: '', address: '',
          serviceType: ServiceType.MOULD_INSPECTION, urgency: Urgency.MEDIUM, notes: ''
        });
        setCurrentStep(1);
      }
    } catch (error) {
      console.error('Failed to save lead:', error);
      toast({
        title: "Error",
        description: "Failed to save lead. Please try again.",
        variant: "destructive"
      });
      triggerHapticFeedback('heavy');
    } finally {
      setIsLoading(false);
    }
  }, [user, formData, validation.isFormValid, mode, editingLead, defaultSource, onLeadCreated, onLeadUpdated, onOpenChange, triggerHapticFeedback]);

  // Handle step navigation
  const handleNext = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      triggerHapticFeedback('light');
    }
  }, [currentStep, totalSteps, triggerHapticFeedback]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      triggerHapticFeedback('light');
    }
  }, [currentStep, triggerHapticFeedback]);

  // Performance measurement
  React.useEffect(() => {
    measureRender();
  }, [measureRender]);

  const drawerTitle = mode === 'edit' ? '✏️ Edit Lead' : mode === 'quick-add' ? '⚡ Quick Add Lead' : '➕ New Lead';
  const submitText = mode === 'edit' ? 'Update Lead' : 'Create Lead';

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[95vh] focus:outline-none">
        <DrawerHeader className="text-center pb-4">
          <DrawerTitle className="text-xl font-bold text-gray-900">
            {drawerTitle}
          </DrawerTitle>
          <DrawerDescription className="text-sm text-gray-600">
            {mode === 'quick-add'
              ? 'Capture essential lead information quickly'
              : mode === 'edit'
              ? 'Update lead information and status'
              : 'Create a new lead for Melbourne mould inspection'
            }
          </DrawerDescription>

          {/* Progress indicator for multi-step flow */}
          {totalSteps > 1 && (
            <div className="flex justify-center mt-3">
              <div className="flex space-x-2">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-8 rounded-full transition-colors ${
                      i + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-3 text-xs text-gray-500">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
          )}
        </DrawerHeader>

        <div className="px-4 pb-4 overflow-y-auto flex-1">
          {/* Step 1: Contact Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <Label className="text-lg font-semibold">Contact Information</Label>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName || ''}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      placeholder="John"
                      className="mt-1 h-12 text-base" // Larger touch target
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName || ''}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      placeholder="Smith"
                      className="mt-1 h-12 text-base"
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="0412 345 678"
                      className="pl-10 h-12 text-base"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="john@example.com"
                      className="pl-10 h-12 text-base"
                      autoComplete="email"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location & Service */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <Label className="text-lg font-semibold">Location & Service</Label>
                </div>

                <div>
                  <Label htmlFor="suburb" className="text-sm font-medium">
                    Melbourne Suburb *
                  </Label>
                  <Select value={formData.suburb || ''} onValueChange={(value) => updateFormData('suburb', value)}>
                    <SelectTrigger className="mt-1 h-12 text-base">
                      <SelectValue placeholder="Select suburb" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {PRIORITY_MELBOURNE_SUBURBS.map((suburb) => (
                        <SelectItem key={suburb} value={suburb} className="text-base py-3">
                          {suburb}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm font-medium">
                    Street Address
                  </Label>
                  <Input
                    id="address"
                    value={formData.address || ''}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    placeholder="123 Collins Street"
                    className="mt-1 h-12 text-base"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium">Service Type *</Label>
                  <div className="mt-2 grid grid-cols-1 gap-2">
                    {SERVICE_OPTIONS.map((service) => (
                      <Button
                        key={service.value}
                        variant={formData.serviceType === service.value ? "default" : "outline"}
                        onClick={() => {
                          updateFormData('serviceType', service.value);
                          triggerHapticFeedback('light');
                        }}
                        className="h-14 justify-start text-left"
                      >
                        <span className="text-lg mr-3">{service.icon}</span>
                        <span className="text-base">{service.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Priority Level</Label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {URGENCY_OPTIONS.map((urgency) => (
                      <Button
                        key={urgency.value}
                        variant={formData.urgency === urgency.value ? "default" : "outline"}
                        onClick={() => {
                          updateFormData('urgency', urgency.value);
                          triggerHapticFeedback('light');
                        }}
                        className="h-12 justify-start text-left"
                      >
                        <span className="mr-2">{urgency.icon}</span>
                        <span className="text-sm">{urgency.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Additional Details (only for full create/edit mode) */}
          {currentStep === 3 && mode !== 'quick-add' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <Label className="text-lg font-semibold">Additional Details</Label>
                </div>

                {mode === 'edit' && (
                  <div>
                    <Label className="text-sm font-medium">Lead Status</Label>
                    <Select
                      value={formData.status || 'NEW'}
                      onValueChange={(value) => updateFormData('status', value as LeadStatus)}
                    >
                      <SelectTrigger className="mt-1 h-12 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NEW">New</SelectItem>
                        <SelectItem value="CONTACTED">Contacted</SelectItem>
                        <SelectItem value="QUALIFIED">Qualified</SelectItem>
                        <SelectItem value="QUOTED">Quoted</SelectItem>
                        <SelectItem value="CONVERTED">Converted</SelectItem>
                        <SelectItem value="CLOSED_LOST">Closed Lost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <Label htmlFor="notes" className="text-sm font-medium">
                    Notes & Requirements
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes || ''}
                    onChange={(e) => updateFormData('notes', e.target.value)}
                    placeholder="Describe the mould issue, customer concerns, or specific requirements..."
                    rows={4}
                    className="mt-1 text-base resize-none"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">Lead Source</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    {defaultSource === 'PHONE' && '📞 Phone Call'}
                    {defaultSource === 'WEBSITE' && '🌐 Website'}
                    {defaultSource === 'REFERRAL' && '👥 Referral'}
                    {defaultSource === 'GOOGLE' && '🔍 Google'}
                    {defaultSource === 'FACEBOOK' && '📘 Facebook'}
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </div>

        <Separator />

        <DrawerFooter className="pt-4">
          <div className="flex gap-3">
            {/* Back/Cancel Button */}
            {currentStep > 1 ? (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="flex-1 h-12 text-base"
              >
                ← Previous
              </Button>
            ) : (
              <DrawerClose asChild>
                <Button variant="outline" className="flex-1 h-12 text-base">
                  Cancel
                </Button>
              </DrawerClose>
            )}

            {/* Next/Submit Button */}
            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={currentStep === 1 ? !validation.isStep1Valid : !validation.isStep2Valid}
                className="flex-1 h-12 text-base bg-blue-600 hover:bg-blue-700"
              >
                Next →
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isLoading || !validation.isFormValid}
                className="flex-1 h-12 text-base bg-green-600 hover:bg-green-700"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    {submitText}
                  </div>
                )}
              </Button>
            )}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}