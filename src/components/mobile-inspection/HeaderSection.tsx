/**
 * Section 1: Auto-Generated Header
 *
 * Job details, inspector assignment, and inspection date
 * Most fields auto-populated from lead data
 */

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';

interface HeaderSectionProps {
  inspectionData: any;
  updateData: (updates: any) => void;
  inspectionId: string;
}

export function HeaderSection({ inspectionData, updateData, inspectionId }: HeaderSectionProps) {
  const [technicians, setTechnicians] = useState<any[]>([]);

  // Fetch available technicians on mount
  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/technicians', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setTechnicians(result.data || []);
        }
      } catch (error) {
        console.error('Failed to fetch technicians:', error);
      }
    };

    fetchTechnicians();
  }, []);

  const handleUpdate = async (field: string, value: any) => {
    updateData({ [field]: value });

    // API call to update header
    try {
      await fetch(`http://localhost:3001/api/inspections/${inspectionId}/header`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });
    } catch (error) {
      console.error('Failed to update header:', error);
    }
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      handleUpdate('inspectionDate', date.toISOString());
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
            Inspection Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Job Number (Auto-generated, read-only) */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Job Number</Label>
            <Input
              value={inspectionData.jobNumber || 'Generating...'}
              disabled
              className="bg-gray-50 text-lg font-mono"
            />
          </div>

          {/* Triage (Auto-populated, editable) */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Job Description</Label>
            <Input
              value={inspectionData.triage || ''}
              onChange={(e) => handleUpdate('triage', e.target.value)}
              placeholder="Brief description of the job"
            />
          </div>

          {/* Address (Auto-populated, editable) */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Property Address</Label>
            <Input
              value={inspectionData.address || ''}
              onChange={(e) => handleUpdate('address', e.target.value)}
              placeholder="Full property address"
            />
          </div>

          {/* Requested By (Auto-populated) */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Requested By</Label>
            <Input
              value={inspectionData.requestedBy || ''}
              onChange={(e) => handleUpdate('requestedBy', e.target.value)}
              placeholder="Client name"
            />
          </div>

          {/* Attention To (Optional) */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Attention To (Optional)</Label>
            <Input
              value={inspectionData.attentionTo || ''}
              onChange={(e) => handleUpdate('attentionTo', e.target.value)}
              placeholder="On-site contact or company"
            />
          </div>

          {/* Inspection Date */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Inspection Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {inspectionData.inspectionDate
                    ? format(new Date(inspectionData.inspectionDate), 'PPP')
                    : 'Select date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={inspectionData.inspectionDate ? new Date(inspectionData.inspectionDate) : undefined}
                  onSelect={handleDateChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Lead Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-500">Client</p>
              <p className="font-medium">
                {inspectionData.lead?.firstName} {inspectionData.lead?.lastName}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">{inspectionData.lead?.phone}</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium text-xs">{inspectionData.lead?.email}</p>
            </div>
            <div>
              <p className="text-gray-500">Service Type</p>
              <p className="font-medium text-xs">
                {inspectionData.lead?.serviceType?.replace('_', ' ')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Assign Technician</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Select Technician *</Label>
            <Select
              value={inspectionData.inspectorId || ''}
              onValueChange={(value) => handleUpdate('inspectorId', value)}
            >
              <SelectTrigger className="w-full min-h-[48px]">
                <SelectValue placeholder="Choose a technician..." />
              </SelectTrigger>
              <SelectContent>
                {technicians.map((tech) => (
                  <SelectItem key={tech.id} value={tech.id}>
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-semibold">
                        {tech.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{tech.name}</p>
                        <p className="text-xs text-gray-500">{tech.email}</p>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Show selected technician info */}
          {inspectionData.inspectorId && technicians.length > 0 && (
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Assigned To:</p>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold text-sm">
                  {technicians.find((t) => t.id === inspectionData.inspectorId)?.name?.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm">
                    {technicians.find((t) => t.id === inspectionData.inspectorId)?.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {technicians.find((t) => t.id === inspectionData.inspectorId)?.email}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
