import React, { useState, useEffect } from 'react';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, parseISO } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Phone,
  User,
  Plus,
  AlertCircle,
} from 'lucide-react';
import { CalendarService } from '@/lib/services/calendarService';
import { toast } from '@/hooks/use-toast';

interface Booking {
  id: string;
  scheduledDate: Date;
  scheduledTime: string;
  durationMinutes: number;
  status: string;
  melbourneSuburb: string;
  propertyAddress: string;
  notes?: string;
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

interface CalendarViewProps {
  technicianId?: string;
  onBookingClick?: (booking: Booking) => void;
  onTimeSlotClick?: (date: Date, time: string) => void;
}

export function CalendarView({
  technicianId,
  onBookingClick,
  onTimeSlotClick
}: CalendarViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTechnician, setSelectedTechnician] = useState(technicianId || '');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [technicians, setTechnicians] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conflicts, setConflicts] = useState<any[]>([]);

  // Melbourne business hours
  const businessHours = Array.from({ length: 24 }, (_, i) => {
    const hour = i + 7; // Start at 7 AM
    if (hour >= 19) return null; // End at 7 PM
    return `${hour.toString().padStart(2, '0')}:00`;
  }).filter(Boolean);

  // Get week dates
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  // Fetch technicians
  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const response = await fetch('/api/technicians', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setTechnicians(data);

          // Auto-select first technician if none selected
          if (!selectedTechnician && data.length > 0) {
            setSelectedTechnician(data[0].id);
          }
        }
      } catch (error) {
        console.error('Failed to fetch technicians:', error);
      }
    };

    fetchTechnicians();
  }, [selectedTechnician]);

  // Fetch bookings for selected technician and week
  useEffect(() => {
    const fetchBookings = async () => {
      if (!selectedTechnician) return;

      try {
        setIsLoading(true);

        const bookingsData = await CalendarService.getBookings({
          technicianId: selectedTechnician,
          startDate: weekStart,
          endDate: weekEnd
        });

        setBookings(bookingsData.map(booking => ({
          ...booking,
          scheduledDate: new Date(booking.scheduledDate)
        })));

        // Check for conflicts
        const conflictsData = await CalendarService.detectConflicts(
          selectedTechnician,
          weekStart,
          weekEnd
        );
        setConflicts(conflictsData);

        if (conflictsData.length > 0) {
          toast({
            title: 'Schedule Conflicts Detected',
            description: `Found ${conflictsData.length} scheduling conflicts.`,
            variant: 'destructive'
          });
        }

      } catch (error) {
        console.error('Failed to fetch bookings:', error);
        toast({
          title: 'Error',
          description: 'Failed to load calendar data.',
          variant: 'destructive'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, [selectedTechnician, weekStart, weekEnd]);

  // Get bookings for a specific date and time
  const getBookingsForSlot = (date: Date, time: string) => {
    return bookings.filter(booking => {
      if (!isSameDay(booking.scheduledDate, date)) return false;

      const bookingStart = parseISO(`${format(date, 'yyyy-MM-dd')}T${booking.scheduledTime}:00`);
      const bookingEnd = new Date(bookingStart.getTime() + booking.durationMinutes * 60 * 1000);
      const slotTime = parseISO(`${format(date, 'yyyy-MM-dd')}T${time}:00`);

      return slotTime >= bookingStart && slotTime < bookingEnd;
    });
  };

  // Check if a time slot has conflicts
  const hasConflict = (date: Date, time: string) => {
    return conflicts.some(conflict => {
      const booking1Date = new Date(conflict.booking1.scheduledDate);
      const booking2Date = new Date(conflict.booking2.scheduledDate);

      return (isSameDay(booking1Date, date) || isSameDay(booking2Date, date)) &&
             (conflict.booking1.scheduledTime === time || conflict.booking2.scheduledTime === time);
    });
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONFIRMED':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'COMPLETED':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Navigate weeks
  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  // Handle time slot click
  const handleTimeSlotClick = (date: Date, time: string) => {
    const slotBookings = getBookingsForSlot(date, time);

    if (slotBookings.length > 0) {
      // If there are bookings, show the first one
      onBookingClick?.(slotBookings[0]);
    } else {
      // If empty slot, allow creating new booking
      onTimeSlotClick?.(date, time);
    }
  };

  const selectedTechnicianData = technicians.find(t => t.id === selectedTechnician);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-900">Calendar View</h2>
          {selectedTechnicianData && (
            <Badge variant="outline" className="text-sm">
              {selectedTechnicianData.name}
            </Badge>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Select value={selectedTechnician} onValueChange={setSelectedTechnician}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select technician" />
            </SelectTrigger>
            <SelectContent>
              {technicians.map((tech) => (
                <SelectItem key={tech.id} value={tech.id}>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{tech.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-1">
            <Button variant="outline" size="sm" onClick={() => navigateWeek('prev')}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
              Today
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigateWeek('next')}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {format(weekStart, 'MMM d')} - {format(weekEnd, 'MMM d, yyyy')}
        </h3>

        {conflicts.length > 0 && (
          <div className="flex items-center space-x-2 text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm font-medium">{conflicts.length} conflicts detected</span>
          </div>
        )}
      </div>

      {/* Calendar Grid */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-1">
            {/* Time column header */}
            <div className="font-medium text-xs text-gray-500 p-2">Time</div>

            {/* Day headers */}
            {weekDays.map((day) => (
              <div key={day.toISOString()} className="font-medium text-xs text-center p-2">
                <div>{format(day, 'EEE')}</div>
                <div className="text-gray-500">{format(day, 'd')}</div>
              </div>
            ))}

            {/* Time slots */}
            {businessHours.map((time) => (
              <React.Fragment key={time}>
                {/* Time label */}
                <div className="text-xs text-gray-500 p-2 border-r">
                  {format(parseISO(`2000-01-01T${time}:00`), 'h:mm a')}
                </div>

                {/* Day columns */}
                {weekDays.map((day) => {
                  const slotBookings = getBookingsForSlot(day, time);
                  const isConflicted = hasConflict(day, time);
                  const isEmpty = slotBookings.length === 0;

                  return (
                    <div
                      key={`${day.toISOString()}-${time}`}
                      className={`
                        min-h-[60px] p-1 border border-gray-200 cursor-pointer transition-colors
                        ${isEmpty ? 'hover:bg-blue-50' : 'hover:bg-gray-50'}
                        ${isConflicted ? 'bg-red-50 border-red-300' : ''}
                      `}
                      onClick={() => handleTimeSlotClick(day, time)}
                    >
                      {slotBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className={`
                            text-xs p-1 rounded border mb-1 truncate
                            ${getStatusColor(booking.status)}
                            ${isConflicted ? 'ring-2 ring-red-500' : ''}
                          `}
                          title={`${booking.lead.firstName} ${booking.lead.lastName} - ${booking.melbourneSuburb}`}
                        >
                          <div className="font-medium truncate">
                            {booking.lead.firstName} {booking.lead.lastName}
                          </div>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <MapPin className="h-3 w-3" />
                            <span className="truncate">{booking.melbourneSuburb}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Clock className="h-3 w-3" />
                            <span>{booking.durationMinutes}m</span>
                          </div>
                        </div>
                      ))}

                      {isEmpty && (
                        <div className="flex items-center justify-center h-full text-gray-400">
                          <Plus className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="flex items-center space-x-4 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-100 border border-green-200 rounded"></div>
          <span>Confirmed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-100 border border-yellow-200 rounded"></div>
          <span>Pending</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-100 border border-blue-200 rounded"></div>
          <span>In Progress</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-50 border border-red-300 rounded"></div>
          <span>Conflict</span>
        </div>
        <div className="flex items-center space-x-2">
          <Plus className="h-3 w-3 text-gray-400" />
          <span>Available</span>
        </div>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-sm text-gray-600">Loading schedule...</span>
        </div>
      )}
    </div>
  );
}

export default CalendarView;