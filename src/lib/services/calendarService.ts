import { BookingStatus, type Booking } from '@prisma/client';

export interface TimeSlot {
  startTime: Date;
  endTime: Date;
  isAvailable: boolean;
  technicianId?: string;
  conflictReason?: string;
}

export interface BookingWithRelations extends Booking {
  lead: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  technician: {
    id: string;
    name: string;
    email: string;
  };
}

export interface CreateBookingData {
  leadId: string;
  technicianId: string;
  scheduledDate: Date;
  scheduledTime: string;
  durationMinutes?: number;
  propertyAddress: string;
  melbourneSuburb: string;
  notes?: string;
  customerPreferredDates?: string[];
}

// Melbourne business hours configuration
const BUSINESS_HOURS = {
  start: 7,  // 7 AM
  end: 19,   // 7 PM
  defaultDuration: 60, // 60 minutes default inspection
  bufferTime: 15, // 15 minutes buffer between appointments
};

// Comprehensive Melbourne suburbs distance matrix (travel time in minutes)
const SUBURB_DISTANCES: Record<string, Record<string, number>> = {
  // Central Melbourne
  'Melbourne': {
    'Carlton': 8, 'Richmond': 12, 'Fitzroy': 10, 'South Yarra': 15, 'St Kilda': 18,
    'Brighton': 25, 'Toorak': 18, 'Hawthorn': 15, 'Camberwell': 20, 'Brunswick': 12,
    'Collingwood': 10, 'Prahran': 16, 'Windsor': 14, 'Southbank': 5, 'Docklands': 8
  },

  // Inner North
  'Carlton': {
    'Melbourne': 8, 'Fitzroy': 8, 'Collingwood': 10, 'Brunswick': 12, 'Richmond': 15,
    'Hawthorn': 20, 'Camberwell': 22, 'South Yarra': 18, 'Toorak': 22, 'Brighton': 30,
    'St Kilda': 25, 'Prahran': 20, 'Windsor': 18, 'Parkville': 5, 'North Melbourne': 10
  },

  'Fitzroy': {
    'Melbourne': 10, 'Carlton': 8, 'Collingwood': 5, 'Richmond': 8, 'Brunswick': 15,
    'Hawthorn': 18, 'Camberwell': 20, 'South Yarra': 20, 'Toorak': 25, 'Brighton': 35,
    'St Kilda': 30, 'Prahran': 25, 'Windsor': 22, 'Abbotsford': 8, 'Northcote': 10
  },

  'Brunswick': {
    'Melbourne': 12, 'Carlton': 12, 'Fitzroy': 15, 'Collingwood': 18, 'Richmond': 25,
    'Hawthorn': 30, 'Camberwell': 35, 'South Yarra': 30, 'Toorak': 35, 'Brighton': 45,
    'St Kilda': 40, 'Prahran': 35, 'Windsor': 32, 'Northcote': 8, 'Coburg': 12
  },

  'Collingwood': {
    'Melbourne': 10, 'Carlton': 10, 'Fitzroy': 5, 'Richmond': 10, 'Brunswick': 18,
    'Hawthorn': 20, 'Camberwell': 22, 'South Yarra': 18, 'Toorak': 22, 'Brighton': 32,
    'St Kilda': 28, 'Prahran': 22, 'Windsor': 20, 'Abbotsford': 5, 'Northcote': 12
  },

  // Inner East
  'Richmond': {
    'Melbourne': 12, 'Carlton': 15, 'Fitzroy': 8, 'Collingwood': 10, 'Brunswick': 25,
    'Hawthorn': 15, 'Camberwell': 18, 'South Yarra': 12, 'Toorak': 18, 'Brighton': 25,
    'St Kilda': 20, 'Prahran': 15, 'Windsor': 12, 'Abbotsford': 8, 'Burnley': 5
  },

  'Hawthorn': {
    'Melbourne': 15, 'Carlton': 20, 'Fitzroy': 18, 'Collingwood': 20, 'Richmond': 15,
    'Camberwell': 12, 'South Yarra': 15, 'Toorak': 12, 'Brighton': 25, 'St Kilda': 22,
    'Prahran': 18, 'Windsor': 15, 'Burnley': 10, 'Kew': 10, 'Auburn': 8
  },

  'Camberwell': {
    'Melbourne': 20, 'Carlton': 22, 'Fitzroy': 20, 'Collingwood': 22, 'Richmond': 18,
    'Hawthorn': 12, 'South Yarra': 18, 'Toorak': 15, 'Brighton': 22, 'St Kilda': 25,
    'Prahran': 20, 'Windsor': 18, 'Kew': 15, 'Auburn': 10, 'Glen Iris': 12
  },

  // Inner South
  'South Yarra': {
    'Melbourne': 15, 'Carlton': 18, 'Fitzroy': 20, 'Collingwood': 18, 'Richmond': 12,
    'Hawthorn': 15, 'Camberwell': 18, 'Toorak': 8, 'Brighton': 20, 'St Kilda': 15,
    'Prahran': 5, 'Windsor': 8, 'Southbank': 12, 'Albert Park': 12, 'Port Melbourne': 18
  },

  'Toorak': {
    'Melbourne': 18, 'Carlton': 22, 'Fitzroy': 25, 'Collingwood': 22, 'Richmond': 18,
    'Hawthorn': 12, 'Camberwell': 15, 'South Yarra': 8, 'Brighton': 18, 'St Kilda': 20,
    'Prahran': 10, 'Windsor': 12, 'Armadale': 8, 'Malvern': 10, 'Glen Iris': 15
  },

  'Prahran': {
    'Melbourne': 16, 'Carlton': 20, 'Fitzroy': 25, 'Collingwood': 22, 'Richmond': 15,
    'Hawthorn': 18, 'Camberwell': 20, 'South Yarra': 5, 'Toorak': 10, 'Brighton': 20,
    'St Kilda': 12, 'Windsor': 5, 'Albert Park': 10, 'Armadale': 12, 'Malvern': 15
  },

  'Windsor': {
    'Melbourne': 14, 'Carlton': 18, 'Fitzroy': 22, 'Collingwood': 20, 'Richmond': 12,
    'Hawthorn': 15, 'Camberwell': 18, 'South Yarra': 8, 'Toorak': 12, 'Brighton': 18,
    'St Kilda': 10, 'Prahran': 5, 'Albert Park': 8, 'Port Melbourne': 15, 'Balaclava': 12
  },

  'St Kilda': {
    'Melbourne': 18, 'Carlton': 25, 'Fitzroy': 30, 'Collingwood': 28, 'Richmond': 20,
    'Hawthorn': 22, 'Camberwell': 25, 'South Yarra': 15, 'Toorak': 20, 'Brighton': 15,
    'Prahran': 12, 'Windsor': 10, 'Albert Park': 8, 'Port Melbourne': 12, 'Elwood': 8
  },

  'Brighton': {
    'Melbourne': 25, 'Carlton': 30, 'Fitzroy': 35, 'Collingwood': 32, 'Richmond': 25,
    'Hawthorn': 25, 'Camberwell': 22, 'South Yarra': 20, 'Toorak': 18, 'St Kilda': 15,
    'Prahran': 20, 'Windsor': 18, 'Elsternwick': 8, 'Bentleigh': 12, 'Sandringham': 10
  },

  // Outer suburbs (sample)
  'Malvern': {
    'Melbourne': 22, 'Toorak': 10, 'Camberwell': 12, 'Hawthorn': 15, 'South Yarra': 15,
    'Prahran': 15, 'Brighton': 20, 'Armadale': 5, 'Glen Iris': 8, 'Caulfield': 12
  },

  'Northcote': {
    'Melbourne': 15, 'Carlton': 18, 'Fitzroy': 10, 'Brunswick': 8, 'Collingwood': 12,
    'Richmond': 20, 'Thornbury': 8, 'Preston': 12, 'Fairfield': 10, 'Alphington': 12
  },

  // Add more suburbs as the business expands...
};

// Melbourne zones for pricing and scheduling
const MELBOURNE_ZONES = {
  INNER_CITY: ['Melbourne', 'Southbank', 'Docklands', 'Carlton', 'Fitzroy', 'Collingwood', 'Richmond'],
  INNER_NORTH: ['Brunswick', 'Northcote', 'Thornbury', 'Preston', 'Coburg', 'Parkville'],
  INNER_EAST: ['Hawthorn', 'Camberwell', 'Kew', 'Auburn', 'Burnley', 'Abbotsford'],
  INNER_SOUTH: ['South Yarra', 'Toorak', 'Prahran', 'Windsor', 'St Kilda', 'Albert Park'],
  BAYSIDE: ['Brighton', 'Elwood', 'Sandringham', 'Bentleigh', 'Elsternwick', 'Balaclava'],
  EASTERN: ['Malvern', 'Armadale', 'Glen Iris', 'Caulfield', 'Oakleigh', 'Cheltenham'],
} as const;

export class CalendarService {
  private static API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

  // Get available time slots for a given date and technician
  static async getAvailableSlots(
    date: Date,
    technicianId: string,
    duration: number = 60
  ): Promise<TimeSlot[]> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${this.API_BASE}/calendar/availability?date=${date.toISOString().split('T')[0]}&technicianId=${technicianId}&duration=${duration}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch available slots');
      }

      const data = await response.json();
      return data.availableSlots.map((slot: any) => ({
        ...slot,
        startTime: new Date(slot.startTime),
        endTime: new Date(slot.endTime),
      }));
    } catch (error) {
      console.error('Error fetching available slots:', error);
      throw error;
    }
  }

  // Get availability for date range (used by AvailabilityPicker)
  static async getAvailability(params: {
    technicianId: string;
    startDate: Date;
    endDate: Date;
    duration?: number;
    melbourneSuburb?: string;
  }): Promise<Array<{
    date: string;
    slots: Array<{
      time: string;
      available: boolean;
      reason?: string;
    }>;
  }>> {
    try {
      const token = localStorage.getItem('token');
      const queryParams = new URLSearchParams({
        technicianId: params.technicianId,
        startDate: params.startDate.toISOString().split('T')[0],
        endDate: params.endDate.toISOString().split('T')[0],
        duration: (params.duration || 120).toString(),
      });

      if (params.melbourneSuburb) {
        queryParams.append('melbourneSuburb', params.melbourneSuburb);
      }

      const response = await fetch(
        `${this.API_BASE}/calendar/availability?${queryParams}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch availability');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching availability:', error);
      throw error;
    }
  }

  // Check if a specific time slot is available
  static async checkAvailability(
    datetime: Date,
    technicianId: string,
    duration: number = 60
  ): Promise<boolean> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${this.API_BASE}/calendar/check-availability`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            datetime: datetime.toISOString(),
            technicianId,
            duration,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to check availability');
      }

      const data = await response.json();
      return data.isAvailable;
    } catch (error) {
      console.error('Error checking availability:', error);
      return false;
    }
  }

  // Get all bookings with optional filters
  static async getBookings(params?: {
    technicianId?: string;
    date?: Date;
    startDate?: Date;
    endDate?: Date;
    status?: BookingStatus;
  }): Promise<BookingWithRelations[]> {
    try {
      const token = localStorage.getItem('token');
      const queryParams = new URLSearchParams();

      if (params?.technicianId) queryParams.append('technicianId', params.technicianId);
      if (params?.date) queryParams.append('date', params.date.toISOString().split('T')[0]);
      if (params?.startDate) queryParams.append('startDate', params.startDate.toISOString().split('T')[0]);
      if (params?.endDate) queryParams.append('endDate', params.endDate.toISOString().split('T')[0]);
      if (params?.status) queryParams.append('status', params.status);

      const response = await fetch(
        `${this.API_BASE}/calendar/bookings?${queryParams}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      const data = await response.json();
      return data.map((booking: any) => ({
        ...booking,
        scheduledDate: new Date(booking.scheduledDate),
      }));
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  }

  // Create a new booking
  static async createBooking(data: CreateBookingData): Promise<Booking> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${this.API_BASE}/calendar/bookings`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            scheduledDate: data.scheduledDate.toISOString(),
            customerPreferredDates: data.customerPreferredDates?.map(d => new Date(d).toISOString()),
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create booking');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  }

  // Update booking (reschedule)
  static async updateBooking(
    bookingId: string,
    updates: Partial<CreateBookingData>
  ): Promise<Booking> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${this.API_BASE}/calendar/bookings/${bookingId}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...updates,
            scheduledDate: updates.scheduledDate?.toISOString(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update booking');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error;
    }
  }

  // Cancel booking
  static async cancelBooking(bookingId: string): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${this.API_BASE}/calendar/bookings/${bookingId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }
    } catch (error) {
      console.error('Error canceling booking:', error);
      throw error;
    }
  }

  // Confirm booking from customer preferences
  static async confirmBooking(
    leadId: string,
    technicianId: string,
    confirmedDatetime: Date,
    durationMinutes: number = 60
  ): Promise<{ success: boolean; message: string; bookingId?: string }> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${this.API_BASE}/calendar/bookings/confirm`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            leadId,
            technicianId,
            datetime: confirmedDatetime.toISOString(),
            durationMinutes,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to confirm booking');
      }

      return data;
    } catch (error) {
      console.error('Error confirming booking:', error);
      throw error;
    }
  }

  // Calculate travel time between suburbs with advanced routing
  static calculateTravelTime(fromSuburb: string, toSuburb: string, datetime?: Date): number {
    // Same suburb = no travel time
    if (fromSuburb === toSuburb) return 0;

    // Check if we have the distance in our matrix
    let baseTime = SUBURB_DISTANCES[fromSuburb]?.[toSuburb] ||
                   SUBURB_DISTANCES[toSuburb]?.[fromSuburb];

    // If not found, estimate based on zone distance
    if (!baseTime) {
      baseTime = this.estimateTravelTimeByZone(fromSuburb, toSuburb);
    }

    // Add time-based adjustments
    const adjustedTime = this.applyTrafficAdjustments(baseTime, datetime);

    return Math.ceil(adjustedTime);
  }

  // Estimate travel time based on Melbourne zones
  private static estimateTravelTimeByZone(fromSuburb: string, toSuburb: string): number {
    const getSuburbZone = (suburb: string) => {
      for (const [zone, suburbs] of Object.entries(MELBOURNE_ZONES)) {
        if (suburbs.includes(suburb)) return zone;
      }
      return 'OUTER'; // Default for unknown suburbs
    };

    const fromZone = getSuburbZone(fromSuburb);
    const toZone = getSuburbZone(toSuburb);

    // Zone-based travel time matrix (minutes)
    const zoneDistances: Record<string, Record<string, number>> = {
      'INNER_CITY': { 'INNER_CITY': 12, 'INNER_NORTH': 15, 'INNER_EAST': 18, 'INNER_SOUTH': 16, 'BAYSIDE': 25, 'EASTERN': 22, 'OUTER': 35 },
      'INNER_NORTH': { 'INNER_CITY': 15, 'INNER_NORTH': 12, 'INNER_EAST': 25, 'INNER_SOUTH': 30, 'BAYSIDE': 40, 'EASTERN': 35, 'OUTER': 30 },
      'INNER_EAST': { 'INNER_CITY': 18, 'INNER_NORTH': 25, 'INNER_EAST': 12, 'INNER_SOUTH': 20, 'BAYSIDE': 25, 'EASTERN': 15, 'OUTER': 25 },
      'INNER_SOUTH': { 'INNER_CITY': 16, 'INNER_NORTH': 30, 'INNER_EAST': 20, 'INNER_SOUTH': 12, 'BAYSIDE': 18, 'EASTERN': 20, 'OUTER': 30 },
      'BAYSIDE': { 'INNER_CITY': 25, 'INNER_NORTH': 40, 'INNER_EAST': 25, 'INNER_SOUTH': 18, 'BAYSIDE': 12, 'EASTERN': 22, 'OUTER': 35 },
      'EASTERN': { 'INNER_CITY': 22, 'INNER_NORTH': 35, 'INNER_EAST': 15, 'INNER_SOUTH': 20, 'BAYSIDE': 22, 'EASTERN': 12, 'OUTER': 20 },
      'OUTER': { 'INNER_CITY': 35, 'INNER_NORTH': 30, 'INNER_EAST': 25, 'INNER_SOUTH': 30, 'BAYSIDE': 35, 'EASTERN': 20, 'OUTER': 25 }
    };

    return zoneDistances[fromZone]?.[toZone] || 30; // Default 30 minutes
  }

  // Apply traffic and time-based adjustments
  private static applyTrafficAdjustments(baseTime: number, datetime?: Date): number {
    const targetTime = datetime || new Date();
    const hour = targetTime.getHours();
    const dayOfWeek = targetTime.getDay(); // 0 = Sunday, 6 = Saturday

    let multiplier = 1.0;

    // Peak hour adjustments (Melbourne traffic patterns)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Weekdays
      if ((hour >= 7 && hour < 9) || (hour >= 16 && hour < 19)) {
        multiplier = 1.4; // 40% longer during peak hours
      } else if ((hour >= 6 && hour < 7) || (hour >= 9 && hour < 16) || (hour >= 19 && hour < 20)) {
        multiplier = 1.15; // 15% longer during semi-peak
      }
    } else if (dayOfWeek === 6) { // Saturday
      if (hour >= 9 && hour < 17) {
        multiplier = 1.2; // 20% longer during weekend shopping hours
      }
    }
    // Sunday typically has minimal traffic impact

    // School holiday adjustments (reduce weekday peak impact)
    const isSchoolHolidays = this.isSchoolHolidays(targetTime);
    if (isSchoolHolidays && dayOfWeek >= 1 && dayOfWeek <= 5) {
      multiplier = Math.max(1.0, multiplier * 0.8); // 20% reduction in peak impact
    }

    // Weather impact (basic - in production would integrate with weather API)
    const isRainyMonth = [5, 6, 7, 8].includes(targetTime.getMonth()); // Jun-Sep
    if (isRainyMonth) {
      multiplier *= 1.1; // 10% longer in winter/rainy months
    }

    return baseTime * multiplier;
  }

  // Check if date falls within Melbourne school holidays (simplified)
  private static isSchoolHolidays(date: Date): boolean {
    const month = date.getMonth() + 1; // 1-12
    const day = date.getDate();

    // Simplified Melbourne school holiday periods
    const holidays = [
      { start: { month: 12, day: 20 }, end: { month: 1, day: 31 } }, // Summer
      { start: { month: 4, day: 1 }, end: { month: 4, day: 15 } },    // Autumn
      { start: { month: 7, day: 1 }, end: { month: 7, day: 15 } },    // Winter
      { start: { month: 9, day: 20 }, end: { month: 10, day: 5 } },   // Spring
    ];

    return holidays.some(holiday => {
      if (holiday.start.month === holiday.end.month) {
        return month === holiday.start.month && day >= holiday.start.day && day <= holiday.end.day;
      } else {
        return (month === holiday.start.month && day >= holiday.start.day) ||
               (month === holiday.end.month && day <= holiday.end.day);
      }
    });
  }

  // Get travel distance in kilometers (approximate)
  static getTravelDistance(fromSuburb: string, toSuburb: string): number {
    const travelTime = this.calculateTravelTime(fromSuburb, toSuburb);
    // Estimate: average 25km/h in Melbourne traffic
    return Math.round((travelTime / 60) * 25);
  }

  // Get suburb zone for pricing and scheduling
  static getSuburbZone(suburb: string): string {
    for (const [zone, suburbs] of Object.entries(MELBOURNE_ZONES)) {
      if (suburbs.includes(suburb)) return zone;
    }
    return 'OUTER';
  }

  // Calculate fuel cost for travel (basic estimate)
  static calculateTravelCost(fromSuburb: string, toSuburb: string): number {
    const distance = this.getTravelDistance(fromSuburb, toSuburb);
    const fuelCostPerKm = 0.15; // $0.15 per km (fuel + vehicle costs)
    return Math.round(distance * fuelCostPerKm * 100) / 100; // Round to cents
  }

  // Generate available dates for customer selection (next 14 days)
  static generateAvailableDates(): Date[] {
    const dates: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);

      // Skip Sundays (if needed - currently we work 7 days)
      // if (date.getDay() === 0) continue;

      dates.push(date);
    }

    return dates;
  }

  // Generate time slots for a given date
  static generateTimeSlots(date: Date): string[] {
    const slots: string[] = [];
    const startHour = BUSINESS_HOURS.start;
    const endHour = BUSINESS_HOURS.end;

    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      if (hour < endHour - 1) {
        slots.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    }

    return slots;
  }

  // Format booking time for display
  static formatBookingTime(date: Date | string, time?: string): string {
    const bookingDate = new Date(date);

    if (time) {
      const [hours, minutes] = time.split(':');
      bookingDate.setHours(parseInt(hours), parseInt(minutes));
    }

    return bookingDate.toLocaleString('en-AU', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }

  // Check for scheduling conflicts
  static async detectConflicts(
    technicianId: string,
    startDate: Date,
    endDate: Date
  ): Promise<any[]> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${this.API_BASE}/calendar/conflicts?technicianId=${technicianId}&dateFrom=${startDate.toISOString().split('T')[0]}&dateTo=${endDate.toISOString().split('T')[0]}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to detect conflicts');
      }

      return await response.json();
    } catch (error) {
      console.error('Error detecting conflicts:', error);
      return [];
    }
  }

  // Get technician schedule for a specific date
  static async getTechnicianSchedule(
    technicianId: string,
    date: Date
  ): Promise<BookingWithRelations[]> {
    return this.getBookings({
      technicianId,
      date,
      status: 'CONFIRMED' as BookingStatus,
    });
  }

  // Calculate optimal route for multiple inspections using advanced routing
  static calculateOptimalRoute(bookings: BookingWithRelations[], startLocation = 'Melbourne'): {
    optimizedBookings: BookingWithRelations[];
    totalTravelTime: number;
    totalDistance: number;
    routingSuggestions: string[];
  } {
    if (bookings.length <= 1) {
      return {
        optimizedBookings: bookings,
        totalTravelTime: 0,
        totalDistance: 0,
        routingSuggestions: []
      };
    }

    // Group bookings by time slots and apply nearest neighbor algorithm
    const sortedBookings = [...bookings].sort((a, b) => {
      const timeA = new Date(`${a.scheduledDate} ${a.scheduledTime}`).getTime();
      const timeB = new Date(`${b.scheduledDate} ${b.scheduledTime}`).getTime();
      return timeA - timeB;
    });

    const optimizedRoute: BookingWithRelations[] = [];
    const unvisited = [...sortedBookings];
    let currentLocation = startLocation;
    let totalTravelTime = 0;
    let totalDistance = 0;
    const suggestions: string[] = [];

    // Start with the earliest appointment
    const firstBooking = unvisited.shift()!;
    optimizedRoute.push(firstBooking);

    // Calculate travel to first location
    const initialTravelTime = this.calculateTravelTime(currentLocation, firstBooking.melbourneSuburb, new Date(firstBooking.scheduledDate));
    totalTravelTime += initialTravelTime;
    totalDistance += this.getTravelDistance(currentLocation, firstBooking.melbourneSuburb);

    currentLocation = firstBooking.melbourneSuburb;

    // Apply nearest neighbor algorithm with time constraints
    while (unvisited.length > 0) {
      let nextBooking: BookingWithRelations | null = null;
      let minTravelTime = Infinity;
      let nextIndex = -1;

      // Find the nearest unvisited location considering time constraints
      for (let i = 0; i < unvisited.length; i++) {
        const booking = unvisited[i];
        const travelTime = this.calculateTravelTime(currentLocation, booking.melbourneSuburb, new Date(booking.scheduledDate));
        const timeScore = this.calculateTimeConstraintScore(optimizedRoute[optimizedRoute.length - 1], booking, travelTime);

        if (timeScore < minTravelTime) {
          minTravelTime = timeScore;
          nextBooking = booking;
          nextIndex = i;
        }
      }

      if (nextBooking) {
        const actualTravelTime = this.calculateTravelTime(currentLocation, nextBooking.melbourneSuburb, new Date(nextBooking.scheduledDate));

        // Check for potential scheduling conflicts
        const lastBooking = optimizedRoute[optimizedRoute.length - 1];
        const timeBetween = this.getTimeBetweenBookings(lastBooking, nextBooking);

        if (timeBetween < actualTravelTime + 15) { // 15 min buffer
          suggestions.push(`Tight schedule: Only ${timeBetween} minutes between ${lastBooking.melbourneSuburb} and ${nextBooking.melbourneSuburb} (need ${actualTravelTime + 15} minutes)`);
        }

        optimizedRoute.push(nextBooking);
        totalTravelTime += actualTravelTime;
        totalDistance += this.getTravelDistance(currentLocation, nextBooking.melbourneSuburb);
        currentLocation = nextBooking.melbourneSuburb;
        unvisited.splice(nextIndex, 1);
      } else {
        // If no suitable next booking found, just add the first remaining one
        const booking = unvisited.shift()!;
        optimizedRoute.push(booking);
        const travelTime = this.calculateTravelTime(currentLocation, booking.melbourneSuburb, new Date(booking.scheduledDate));
        totalTravelTime += travelTime;
        totalDistance += this.getTravelDistance(currentLocation, booking.melbourneSuburb);
        currentLocation = booking.melbourneSuburb;
      }
    }

    // Add route optimization suggestions
    if (optimizedRoute.length > 2) {
      const zones = optimizedRoute.map(b => this.getSuburbZone(b.melbourneSuburb));
      const uniqueZones = [...new Set(zones)];

      if (uniqueZones.length > 2) {
        suggestions.push(`Route crosses ${uniqueZones.length} zones: consider grouping appointments by area for efficiency`);
      }

      // Check for zigzag patterns
      for (let i = 1; i < optimizedRoute.length - 1; i++) {
        const prev = optimizedRoute[i - 1];
        const current = optimizedRoute[i];
        const next = optimizedRoute[i + 1];

        const zone1 = this.getSuburbZone(prev.melbourneSuburb);
        const zone2 = this.getSuburbZone(current.melbourneSuburb);
        const zone3 = this.getSuburbZone(next.melbourneSuburb);

        if (zone1 === zone3 && zone2 !== zone1) {
          suggestions.push(`Potential zigzag detected: ${prev.melbourneSuburb} → ${current.melbourneSuburb} → ${next.melbourneSuburb}`);
        }
      }
    }

    return {
      optimizedBookings: optimizedRoute,
      totalTravelTime,
      totalDistance,
      routingSuggestions: suggestions
    };
  }

  // Calculate time constraint score for route optimization
  private static calculateTimeConstraintScore(fromBooking: BookingWithRelations, toBooking: BookingWithRelations, travelTime: number): number {
    const timeBetween = this.getTimeBetweenBookings(fromBooking, toBooking);
    const requiredTime = travelTime + 15; // 15 min buffer

    // Penalty for time violations
    if (timeBetween < requiredTime) {
      return 1000 + (requiredTime - timeBetween); // High penalty
    }

    // Prefer routes with appropriate time spacing
    const excess = timeBetween - requiredTime;
    return travelTime + (excess > 60 ? excess * 0.5 : 0); // Small penalty for too much time
  }

  // Get time between two bookings in minutes
  private static getTimeBetweenBookings(booking1: BookingWithRelations, booking2: BookingWithRelations): number {
    const end1 = new Date(`${booking1.scheduledDate} ${booking1.scheduledTime}`);
    end1.setMinutes(end1.getMinutes() + (booking1.durationMinutes || 120));

    const start2 = new Date(`${booking2.scheduledDate} ${booking2.scheduledTime}`);

    return (start2.getTime() - end1.getTime()) / (1000 * 60);
  }

  // Generate daily route summary for technicians
  static generateDailyRouteSummary(technicianId: string, date: Date): Promise<{
    bookings: BookingWithRelations[];
    optimizedRoute: BookingWithRelations[];
    summary: {
      totalAppointments: number;
      totalTravelTime: number;
      totalDistance: number;
      workingHours: string;
      suggestions: string[];
    };
  }> {
    return this.getTechnicianSchedule(technicianId, date).then(bookings => {
      const routeData = this.calculateOptimalRoute(bookings);

      const workStart = bookings.length > 0 ? bookings[0].scheduledTime : '08:00';
      const lastBooking = bookings[bookings.length - 1];
      const workEnd = lastBooking ?
        this.addMinutesToTime(lastBooking.scheduledTime, lastBooking.durationMinutes || 120) : '17:00';

      return {
        bookings,
        optimizedRoute: routeData.optimizedBookings,
        summary: {
          totalAppointments: bookings.length,
          totalTravelTime: routeData.totalTravelTime,
          totalDistance: routeData.totalDistance,
          workingHours: `${workStart} - ${workEnd}`,
          suggestions: routeData.routingSuggestions
        }
      };
    });
  }

  // Helper: Add minutes to time string
  private static addMinutesToTime(timeString: string, minutes: number): string {
    const [hours, mins] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, mins + minutes);
    return date.toTimeString().substring(0, 5);
  }
}