import React, { useState, useEffect } from 'react';
import { format, addDays, startOfDay, isSameDay, parseISO, addMinutes } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { CalendarService } from '@/lib/services/calendarService';
import { toast } from '@/hooks/use-toast';

interface TimeSlot {
  time: string;
  available: boolean;
  reason?: string;
  duration: number;
}

interface AvailableDay {
  date: Date;
  slots: TimeSlot[];
}

interface AvailabilityPickerProps {
  leadId?: string;
  melbourneSuburb: string;
  preferredTechnician?: string;
  onSlotSelected: (date: Date, time: string, technicianId: string, duration: number) => void;
  onCancel: () => void;
}

export function AvailabilityPicker({
  leadId,
  melbourneSuburb,
  preferredTechnician,
  onSlotSelected,
  onCancel
}: AvailabilityPickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedTechnician, setSelectedTechnician] = useState(preferredTechnician || '');
  const [selectedDuration, setSelectedDuration] = useState(120);
  const [availability, setAvailability] = useState<AvailableDay[]>([]);
  const [technicians, setTechnicians] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(0);

  // Service durations for Melbourne inspections
  const serviceDurations = [
    { value: 90, label: '90 minutes - Basic Inspection', description: 'Standard residential property' },
    { value: 120, label: '2 hours - Standard Inspection', description: 'Most common service' },
    { value: 180, label: '3 hours - Comprehensive Inspection', description: 'Large property or complex issues' },
    { value: 240, label: '4 hours - Extended Inspection', description: 'Commercial or multi-story property' },
  ];

  // Get next 14 days from today
  const getDisplayDays = () => {
    const startDate = addDays(new Date(), currentWeek * 7);
    return Array.from({ length: 7 }, (_, i) => addDays(startDate, i));
  };

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

  // Fetch availability when dependencies change
  useEffect(() => {
    if (selectedTechnician && melbourneSuburb) {
      fetchAvailability();
    }
  }, [selectedTechnician, melbourneSuburb, selectedDuration, currentWeek]);

  const fetchAvailability = async () => {
    if (!selectedTechnician) return;

    try {
      setIsLoading(true);
      const days = getDisplayDays();
      const startDate = days[0];
      const endDate = days[days.length - 1];

      const response = await CalendarService.getAvailability({
        technicianId: selectedTechnician,
        startDate,
        endDate,
        duration: selectedDuration,
        melbourneSuburb
      });

      // Transform response into AvailableDay format
      const availableDays: AvailableDay[] = days.map(day => {
        const dayAvailability = response.find(a => isSameDay(new Date(a.date), day));

        if (!dayAvailability) {
          return {
            date: day,
            slots: []
          };
        }

        return {
          date: day,
          slots: dayAvailability.slots.map(slot => ({
            time: slot.time,
            available: slot.available,
            reason: slot.reason,
            duration: selectedDuration
          }))
        };
      });

      setAvailability(availableDays);
    } catch (error) {
      console.error('Failed to fetch availability:', error);
      toast({
        title: 'Error',
        description: 'Failed to load availability. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle slot selection
  const handleSlotSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  // Confirm booking
  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime && selectedTechnician) {
      onSlotSelected(selectedDate, selectedTime, selectedTechnician, selectedDuration);
    }
  };

  // Navigate weeks
  const navigateWeek = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
    } else if (direction === 'next' && currentWeek < 2) { // Limit to 3 weeks ahead
      setCurrentWeek(currentWeek + 1);
    }
    setSelectedDate(null);
    setSelectedTime('');
  };

  // Get available slots count for a day
  const getAvailableSlotsCount = (day: AvailableDay) => {
    return day.slots.filter(slot => slot.available).length;
  };

  // Check if date is in the past
  const isPastDate = (date: Date) => {
    return date < startOfDay(new Date());
  };

  const selectedTechnicianData = technicians.find(t => t.id === selectedTechnician);
  const selectedSlot = selectedDate && selectedTime ?
    availability.find(day => isSameDay(day.date, selectedDate))?.slots.find(slot => slot.time === selectedTime) : null;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          <span>Book Your Mould Inspection</span>
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{melbourneSuburb}</span>
          </div>
          {selectedTechnicianData && (
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{selectedTechnicianData.name}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Service Duration & Technician Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Service Duration
            </label>
            <Select value={selectedDuration.toString()} onValueChange={(value) => setSelectedDuration(parseInt(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {serviceDurations.map((duration) => (
                  <SelectItem key={duration.value} value={duration.value.toString()}>
                    <div>
                      <div className="font-medium">{duration.label}</div>
                      <div className="text-xs text-gray-500">{duration.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Preferred Technician
            </label>
            <Select value={selectedTechnician} onValueChange={setSelectedTechnician}>
              <SelectTrigger>
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
          </div>
        </div>

        <Separator />

        {/* Week Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek('prev')}
            disabled={currentWeek <= 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous Week
          </Button>

          <h3 className="font-semibold">
            {currentWeek === 0 ? 'This Week' :
             currentWeek === 1 ? 'Next Week' :
             `${currentWeek + 1} Weeks Ahead`}
          </h3>

          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek('next')}
            disabled={currentWeek >= 2}
          >
            Next Week
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Calendar Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading availability...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
            {availability.map((day) => {
              const availableCount = getAvailableSlotsCount(day);
              const isToday = isSameDay(day.date, new Date());
              const isPast = isPastDate(day.date);
              const isSelected = selectedDate && isSameDay(day.date, selectedDate);

              return (
                <div
                  key={day.date.toISOString()}
                  className={`border rounded-lg p-3 ${
                    isPast ? 'bg-gray-100 text-gray-400' :
                    isSelected ? 'border-blue-500 bg-blue-50' :
                    availableCount > 0 ? 'border-green-300 bg-green-50 hover:bg-green-100 cursor-pointer' :
                    'border-gray-200 bg-gray-50'
                  }`}
                  onClick={() => !isPast && availableCount > 0 && setSelectedDate(day.date)}
                >
                  <div className="text-center mb-2">
                    <div className={`text-xs font-medium ${isToday ? 'text-blue-600' : 'text-gray-600'}`}>
                      {format(day.date, 'EEE')}
                    </div>
                    <div className={`text-lg font-bold ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
                      {format(day.date, 'd')}
                    </div>
                    <div className="text-xs text-gray-500">
                      {format(day.date, 'MMM')}
                    </div>
                  </div>

                  {isPast ? (
                    <div className="text-xs text-center text-gray-400">Past</div>
                  ) : availableCount > 0 ? (
                    <Badge variant="secondary" className="w-full text-xs justify-center">
                      {availableCount} slot{availableCount !== 1 ? 's' : ''}
                    </Badge>
                  ) : (
                    <div className="text-xs text-center text-gray-500">No slots</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Time Slots */}
        {selectedDate && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">
              Available times for {format(selectedDate, 'EEEE, MMMM d')}
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {availability
                .find(day => selectedDate && isSameDay(day.date, selectedDate))
                ?.slots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    size="sm"
                    disabled={!slot.available}
                    onClick={() => handleSlotSelect(selectedDate, slot.time)}
                    className={`flex items-center space-x-1 ${
                      !slot.available ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">
                      {format(parseISO(`2000-01-01T${slot.time}:00`), 'h:mm a')}
                    </span>
                    {!slot.available && (
                      <AlertTriangle className="h-3 w-3 text-orange-500" />
                    )}
                  </Button>
                ))}
            </div>

            {selectedSlot && !selectedSlot.available && selectedSlot.reason && (
              <div className="mt-2 p-2 bg-orange-50 border border-orange-200 rounded text-sm text-orange-700">
                <AlertTriangle className="h-4 w-4 inline mr-1" />
                {selectedSlot.reason}
              </div>
            )}
          </div>
        )}

        {/* Selected Booking Summary */}
        {selectedDate && selectedTime && selectedSlot?.available && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h4 className="font-medium text-gray-900">Booking Summary</h4>
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <div><strong>Date:</strong> {format(selectedDate, 'EEEE, MMMM d, yyyy')}</div>
              <div><strong>Time:</strong> {format(parseISO(`2000-01-01T${selectedTime}:00`), 'h:mm a')} - {format(addMinutes(parseISO(`2000-01-01T${selectedTime}:00`), selectedDuration), 'h:mm a')}</div>
              <div><strong>Duration:</strong> {selectedDuration} minutes</div>
              <div><strong>Location:</strong> {melbourneSuburb}</div>
              {selectedTechnicianData && (
                <div><strong>Technician:</strong> {selectedTechnicianData.name}</div>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end space-x-3 pt-4 border-t">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirmBooking}
            disabled={!selectedDate || !selectedTime || !selectedSlot?.available}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Continue to Booking Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AvailabilityPicker;