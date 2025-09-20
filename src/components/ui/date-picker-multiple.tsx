import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { CalendarIcon, X } from 'lucide-react';
import { format, addDays, startOfToday } from 'date-fns';
import { cn } from '@/lib/utils';

interface DatePickerMultipleProps {
  selectedDates: string[];
  onDatesChange: (dates: string[]) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  maxDates?: number;
}

export function DatePickerMultiple({
  selectedDates,
  onDatesChange,
  placeholder = "Select available dates",
  label,
  className,
  disabled = false,
  maxDates = 5
}: DatePickerMultipleProps) {
  const [open, setOpen] = useState(false);
  const today = startOfToday();

  // Convert string dates to Date objects for display
  const selectedDateObjects = selectedDates.map(dateStr => new Date(dateStr));

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;

    const dateString = format(date, 'yyyy-MM-dd');

    if (selectedDates.includes(dateString)) {
      // Remove date if already selected
      onDatesChange(selectedDates.filter(d => d !== dateString));
    } else {
      // Add date if not selected and under limit
      if (selectedDates.length < maxDates) {
        onDatesChange([...selectedDates, dateString].sort());
      }
    }
  };

  const removeDate = (dateToRemove: string) => {
    onDatesChange(selectedDates.filter(d => d !== dateToRemove));
  };

  const formatDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return format(date, 'MMM dd');
  };

  const formatFullDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return format(date, 'EEEE, MMMM dd, yyyy');
  };

  // Add some suggested dates
  const addSuggestedDate = (daysFromToday: number) => {
    const suggestedDate = addDays(today, daysFromToday);
    const dateString = format(suggestedDate, 'yyyy-MM-dd');

    if (!selectedDates.includes(dateString) && selectedDates.length < maxDates) {
      onDatesChange([...selectedDates, dateString].sort());
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label>{label}</Label>}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              selectedDates.length === 0 && "text-muted-foreground"
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDates.length === 0
              ? placeholder
              : `${selectedDates.length} date${selectedDates.length > 1 ? 's' : ''} selected`
            }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 border-b">
            <h4 className="font-medium text-sm">Select Available Dates</h4>
            <p className="text-xs text-muted-foreground">
              Choose up to {maxDates} dates when you're available for inspection
            </p>
          </div>

          {/* Quick Add Buttons */}
          <div className="p-3 border-b">
            <p className="text-xs font-medium mb-2">Quick Add:</p>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant="outline"
                size="sm"
                onClick={() => addSuggestedDate(1)}
                disabled={selectedDates.length >= maxDates}
              >
                Tomorrow
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addSuggestedDate(2)}
                disabled={selectedDates.length >= maxDates}
              >
                Day After
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addSuggestedDate(7)}
                disabled={selectedDates.length >= maxDates}
              >
                Next Week
              </Button>
            </div>
          </div>

          <Calendar
            mode="single"
            selected={selectedDateObjects[0]}
            onSelect={handleDateSelect}
            disabled={(date) => date < today}
            initialFocus
            modifiers={{
              selected: selectedDateObjects,
            }}
            modifiersStyles={{
              selected: { backgroundColor: 'hsl(var(--primary))', color: 'white' }
            }}
          />

          {selectedDates.length > 0 && (
            <div className="p-3 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
                className="w-full"
              >
                Done ({selectedDates.length} selected)
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>

      {/* Selected Dates Display */}
      {selectedDates.length > 0 && (
        <div className="space-y-2">
          <Label className="text-sm font-medium">Selected Dates:</Label>
          <div className="flex flex-wrap gap-2">
            {selectedDates.map((dateStr) => (
              <Badge
                key={dateStr}
                variant="secondary"
                className="flex items-center gap-2 py-1 px-2"
              >
                <span className="text-xs" title={formatFullDate(dateStr)}>
                  {formatDisplayDate(dateStr)}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 w-4 h-4 hover:bg-transparent"
                  onClick={() => removeDate(dateStr)}
                  disabled={disabled}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          {selectedDates.length >= maxDates && (
            <p className="text-xs text-muted-foreground">
              Maximum {maxDates} dates selected
            </p>
          )}
        </div>
      )}
    </div>
  );
}