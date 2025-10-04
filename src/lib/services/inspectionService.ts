import { z } from 'zod';

// Types for inspection scheduling
export interface Inspection {
  id: string;
  leadId: string;
  technicianId: string;
  scheduledAt: string;
  completedAt?: string;
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'RESCHEDULED';
  findings?: string;
  recommendations?: string;
  photos?: string[];
  reportUrl?: string;
  estimatedCost?: number;
  finalCost?: number;
  address: string;
  suburb: string;
  customerName: string;
  customerPhone: string;
  serviceType: string;
  createdAt: string;
  updatedAt: string;
}

export interface Technician {
  id: string;
  name: string;
  email: string;
  phone?: string;
  territories: string[];
  workingHours: {
    monday: { start: string; end: string; available: boolean };
    tuesday: { start: string; end: string; available: boolean };
    wednesday: { start: string; end: string; available: boolean };
    thursday: { start: string; end: string; available: boolean };
    friday: { start: string; end: string; available: boolean };
    saturday: { start: string; end: string; available: boolean };
    sunday: { start: string; end: string; available: boolean };
  };
}

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
  technicianId?: string;
  technicianName?: string;
  conflictReason?: string;
}

export interface SchedulingConflict {
  type: 'DOUBLE_BOOKING' | 'TRAVEL_TIME' | 'UNAVAILABLE' | 'OUTSIDE_HOURS';
  message: string;
  suggestedAlternatives: TimeSlot[];
}

// Validation schemas
const CreateInspectionSchema = z.object({
  leadId: z.string(),
  technicianId: z.string(),
  scheduledAt: z.string(),
  estimatedCost: z.number().optional(),
  notes: z.string().optional(),
});

const UpdateInspectionSchema = z.object({
  technicianId: z.string().optional(),
  scheduledAt: z.string().optional(),
  status: z.enum(['SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'RESCHEDULED']).optional(),
  findings: z.string().optional(),
  recommendations: z.string().optional(),
  estimatedCost: z.number().optional(),
  finalCost: z.number().optional(),
});

// Melbourne suburbs with travel time estimates (minutes from CBD)
const MELBOURNE_TRAVEL_TIMES: Record<string, number> = {
  'Melbourne': 0,
  'Carlton': 5,
  'Fitzroy': 8,
  'South Yarra': 10,
  'Richmond': 12,
  'St Kilda': 15,
  'Prahran': 12,
  'Windsor': 15,
  'Brighton': 20,
  'Camberwell': 18,
  'Hawthorn': 15,
  'Kew': 20,
  'Malvern': 18,
  'Armadale': 22,
  'Toorak': 15,
  'Glen Iris': 25,
  'Caulfield': 20,
  'Bentleigh': 25,
  'Moorabbin': 30,
  'Cheltenham': 35,
  'Frankston': 45,
  'Dandenong': 40,
  'Box Hill': 30,
  'Ringwood': 35,
  'Blackburn': 28,
  'Doncaster': 25,
  'Templestowe': 30,
  'Eltham': 35,
  'Diamond Creek': 40,
  'Heidelberg': 20,
  'Ivanhoe': 18,
  'Preston': 15,
  'Northcote': 10,
  'Thornbury': 12,
  'Brunswick': 8,
  'Coburg': 15,
  'Reservoir': 20,
  'Bundoora': 25,
  'Mill Park': 30,
  'Epping': 35,
  'Craigieburn': 40,
  'Sunbury': 45,
  'Werribee': 35,
  'Hoppers Crossing': 30,
  'Point Cook': 32,
  'Williams Landing': 28,
  'Newport': 15,
  'Footscray': 12,
  'Yarraville': 15,
  'Seddon': 18,
  'Altona': 20,
  'Essendon': 18,
  'Moonee Ponds': 12,
  'Ascot Vale': 10,
  'Niddrie': 20,
  'Airport West': 22,
  'Keilor': 25,
  'Tullamarine': 25,
};

class InspectionService {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  async getInspections(): Promise<Inspection[]> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/inspections`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch inspections');
    }

    return response.json();
  }

  async getInspectionById(id: string): Promise<Inspection> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/inspections/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch inspection');
    }

    return response.json();
  }

  async createInspection(data: z.infer<typeof CreateInspectionSchema>): Promise<Inspection> {
    const validated = CreateInspectionSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/inspections`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create inspection');
    }

    const result = await response.json();
    return result.data || result;
  }

  async updateInspection(id: string, data: z.infer<typeof UpdateInspectionSchema>): Promise<Inspection> {
    const validated = UpdateInspectionSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/inspections/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update inspection');
    }

    return response.json();
  }

  async deleteInspection(id: string): Promise<void> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/inspections/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete inspection');
    }
  }

  async getTechnicians(): Promise<Technician[]> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/technicians`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch technicians');
    }

    const result = await response.json();
    // Handle API response format (data.data for success responses)
    return result.data || result;
  }

  async getAvailableTimeSlots(
    date: string,
    suburb: string,
    duration: number = 120 // Default 2 hours for inspection
  ): Promise<TimeSlot[]> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(
      `${this.baseUrl}/api/inspections/available-slots?date=${date}&suburb=${suburb}&duration=${duration}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch available time slots');
    }

    const result = await response.json();
    return result.data || result;
  }

  async checkSchedulingConflicts(
    technicianId: string,
    scheduledAt: string,
    suburb: string,
    duration: number = 120
  ): Promise<SchedulingConflict[]> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/inspections/check-conflicts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        technicianId,
        scheduledAt,
        suburb,
        duration,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to check scheduling conflicts');
    }

    const result = await response.json();
    return result.data?.conflicts || result.conflicts || [];
  }

  // Travel time optimization for Melbourne suburbs
  calculateTravelTime(fromSuburb: string, toSuburb: string): number {
    const fromTime = MELBOURNE_TRAVEL_TIMES[fromSuburb] || 30;
    const toTime = MELBOURNE_TRAVEL_TIMES[toSuburb] || 30;
    return Math.abs(fromTime - toTime) + 15; // Add 15 minutes buffer
  }

  // Get optimal technician assignment based on location and availability
  async getOptimalTechnicianAssignment(
    suburb: string,
    scheduledAt: string,
    serviceType: string
  ): Promise<{
    recommended: Technician;
    alternatives: Technician[];
    reasoning: string;
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/inspections/optimal-assignment`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        suburb,
        scheduledAt,
        serviceType,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get optimal technician assignment');
    }

    const result = await response.json();
    return result.data || result;
  }

  // Google Calendar integration
  async syncWithGoogleCalendar(inspectionId: string): Promise<{ calendarEventId: string }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/inspections/${inspectionId}/sync-calendar`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to sync with Google Calendar');
    }

    return response.json();
  }

  // Automated reminder system
  async scheduleReminders(inspectionId: string, reminderSettings: {
    email24h: boolean;
    email2h: boolean;
    sms1h: boolean;
    customerReminders: boolean;
    technicianReminders: boolean;
  }): Promise<void> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/inspections/${inspectionId}/schedule-reminders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reminderSettings),
    });

    if (!response.ok) {
      throw new Error('Failed to schedule reminders');
    }
  }

  // Bulk operations for scheduling
  async bulkReschedule(inspectionIds: string[], newDate: string): Promise<{
    successful: string[];
    failed: { id: string; reason: string }[];
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/inspections/bulk-reschedule`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inspectionIds,
        newDate,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to bulk reschedule inspections');
    }

    return response.json();
  }

  // Calendar view data for scheduling interface
  async getCalendarData(startDate: string, endDate: string): Promise<{
    inspections: Inspection[];
    technicians: Technician[];
    conflicts: SchedulingConflict[];
    workload: { technicianId: string; date: string; inspections: number; hoursBooked: number }[];
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(
      `${this.baseUrl}/api/inspections/calendar?start=${startDate}&end=${endDate}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch calendar data');
    }

    const result = await response.json();
    // Transform API calendar events to inspection format
    const calendarEvents = result.data || result;
    const inspections = Array.isArray(calendarEvents) ? calendarEvents.map((event: any) => ({
      id: event.id,
      leadId: event.lead?.id || '',
      technicianId: event.technician?.id || '',
      scheduledAt: event.start,
      status: event.status?.toUpperCase() || 'SCHEDULED',
      customerName: `${event.lead?.firstName || ''} ${event.lead?.lastName || ''}`.trim(),
      customerPhone: event.lead?.phone || '',
      address: event.lead?.address || '',
      suburb: event.lead?.suburb || '',
      serviceType: event.lead?.serviceType || 'Mould Inspection',
      estimatedCost: event.inspection?.estimatedCost || 0,
      finalCost: event.inspection?.finalCost || 0,
      findings: event.inspection?.findings || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })) : [];

    return {
      inspections,
      technicians: [],
      conflicts: [],
      workload: []
    };
  }

  // Generate inspection schedule optimization report
  async generateScheduleOptimizationReport(date: string): Promise<{
    totalInspections: number;
    totalTravelTime: number;
    averageTravelTime: number;
    optimizationSuggestions: string[];
    efficiencyScore: number;
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(
      `${this.baseUrl}/api/inspections/optimization-report?date=${date}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to generate optimization report');
    }

    return response.json();
  }
}

export const inspectionService = new InspectionService();
export default inspectionService;