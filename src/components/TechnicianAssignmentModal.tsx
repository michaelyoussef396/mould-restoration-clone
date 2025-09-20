import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  User,
  UserCheck,
  UserX,
  Clock,
  MapPin,
  Star
} from 'lucide-react';
import { LeadWithRelations } from '@/lib/services/leadService';

interface TechnicianAssignmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  leads: LeadWithRelations[];
  onAssignmentUpdate: () => void;
}

interface Technician {
  id: string;
  name: string;
  email: string;
  role: string;
  activeLeads: number;
  completedThisWeek: number;
  rating: number;
  specialties: string[];
  availability: 'available' | 'busy' | 'unavailable';
}

// Mock technician data - in real app this would come from API
const MOCK_TECHNICIANS: Technician[] = [
  {
    id: 'tech1',
    name: 'John Thompson',
    email: 'john@mouldandrestoration.com.au',
    role: 'Senior Technician',
    activeLeads: 3,
    completedThisWeek: 8,
    rating: 4.9,
    specialties: ['Mould Inspection', 'Complete Removal', 'Subfloor'],
    availability: 'available'
  },
  {
    id: 'tech2',
    name: 'Sarah Mitchell',
    email: 'sarah@mouldandrestoration.com.au',
    role: 'Technician',
    activeLeads: 2,
    completedThisWeek: 5,
    rating: 4.8,
    specialties: ['Advanced Fogging', 'Comprehensive Removal'],
    availability: 'busy'
  },
  {
    id: 'tech3',
    name: 'Mike Chen',
    email: 'mike@mouldandrestoration.com.au',
    role: 'Junior Technician',
    activeLeads: 1,
    completedThisWeek: 3,
    rating: 4.6,
    specialties: ['Mould Inspection', 'Basic Removal'],
    availability: 'available'
  }
];

export function TechnicianAssignmentModal({
  open,
  onOpenChange,
  leads,
  onAssignmentUpdate
}: TechnicianAssignmentModalProps) {
  const [selectedTechnician, setSelectedTechnician] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [technicians] = useState<Technician[]>(MOCK_TECHNICIANS);

  const selectedLeadsCount = leads.length;

  const handleAssignment = async () => {
    if (!selectedTechnician) return;

    setIsLoading(true);
    try {
      // TODO: Implement bulk assignment API call
      console.log('Assigning leads to technician:', {
        technicianId: selectedTechnician,
        leadIds: leads.map(l => l.id)
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      onAssignmentUpdate();
      onOpenChange(false);
      setSelectedTechnician('');
    } catch (error) {
      console.error('Failed to assign leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'busy': return 'bg-yellow-100 text-yellow-800';
      case 'unavailable': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'available': return <UserCheck className="h-4 w-4" />;
      case 'busy': return <Clock className="h-4 w-4" />;
      case 'unavailable': return <UserX className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  const selectedTechnicianData = technicians.find(t => t.id === selectedTechnician);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Assign Technician to {selectedLeadsCount} Lead{selectedLeadsCount > 1 ? 's' : ''}</DialogTitle>
          <DialogDescription>
            Select a technician to assign these leads to based on availability and expertise
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Lead Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Leads to Assign:</h3>
            <div className="space-y-2">
              {leads.slice(0, 5).map((lead) => (
                <div key={lead.id} className="flex items-center justify-between text-sm">
                  <span>{lead.firstName} {lead.lastName}</span>
                  <Badge variant="outline">{lead.serviceType.replace('_', ' ')}</Badge>
                </div>
              ))}
              {leads.length > 5 && (
                <p className="text-sm text-gray-500">...and {leads.length - 5} more leads</p>
              )}
            </div>
          </div>

          {/* Technician Selection */}
          <div className="space-y-4">
            <h3 className="font-medium">Available Technicians:</h3>
            <div className="grid gap-4">
              {technicians.map((technician) => {
                const isSelected = selectedTechnician === technician.id;
                return (
                  <div
                    key={technician.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all touch-manipulation min-h-[48px] ${
                      isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTechnician(technician.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {technician.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{technician.name}</h4>
                            <Badge className={getAvailabilityColor(technician.availability)} variant="secondary">
                              {getAvailabilityIcon(technician.availability)}
                              <span className="ml-1 capitalize">{technician.availability}</span>
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{technician.role}</p>
                          <p className="text-xs text-gray-500">{technician.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{technician.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Active Leads:</span>
                        <span className="ml-2 font-medium">{technician.activeLeads}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Completed This Week:</span>
                        <span className="ml-2 font-medium">{technician.completedThisWeek}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm text-gray-600 mb-1">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {technician.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Workload indicator */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>Current Workload</span>
                        <span>{technician.activeLeads}/10</span>
                      </div>
                      <Progress value={(technician.activeLeads / 10) * 100} className="h-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Assignment Preview */}
          {selectedTechnicianData && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Assignment Preview</h4>
              <p className="text-sm text-blue-800">
                Assigning {selectedLeadsCount} lead{selectedLeadsCount > 1 ? 's' : ''} to{' '}
                <strong>{selectedTechnicianData.name}</strong>
              </p>
              <p className="text-xs text-blue-600 mt-1">
                New workload: {selectedTechnicianData.activeLeads + selectedLeadsCount}/10 leads
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="touch-manipulation min-h-[48px]">
            Cancel
          </Button>
          <Button
            onClick={handleAssignment}
            disabled={!selectedTechnician || isLoading}
            className="touch-manipulation min-h-[48px]"
          >
            {isLoading ? 'Assigning...' : `Assign to ${selectedTechnicianData?.name || 'Technician'}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}