import { CalendarService, BookingWithRelations } from './calendarService';

export interface ExternalCalendarEvent {
  id: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  attendees?: string[];
  calendarId?: string;
}

export interface CalendarProvider {
  name: string;
  type: 'google' | 'outlook' | 'apple';
  accessToken?: string;
  refreshToken?: string;
  isConnected: boolean;
  lastSync?: Date;
}

export interface SyncSettings {
  autoSync: boolean;
  syncDirection: 'import' | 'export' | 'bidirectional';
  conflictResolution: 'local' | 'external' | 'manual';
  syncFrequency: number; // minutes
  includePrivateEvents: boolean;
}

export class ExternalCalendarService {
  private static API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

  // Google Calendar Integration
  static async connectGoogleCalendar(authCode: string): Promise<CalendarProvider> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/connect/google`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authCode }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect Google Calendar');
      }

      const provider = await response.json();
      this.saveProviderSettings(provider);
      return provider;
    } catch (error) {
      console.error('Error connecting Google Calendar:', error);
      throw error;
    }
  }

  // Outlook Calendar Integration
  static async connectOutlookCalendar(authCode: string): Promise<CalendarProvider> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/connect/outlook`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authCode }),
      });

      if (!response.ok) {
        throw new Error('Failed to connect Outlook Calendar');
      }

      const provider = await response.json();
      this.saveProviderSettings(provider);
      return provider;
    } catch (error) {
      console.error('Error connecting Outlook Calendar:', error);
      throw error;
    }
  }

  // Get connected calendar providers
  static async getConnectedProviders(): Promise<CalendarProvider[]> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/providers`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch calendar providers');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching calendar providers:', error);
      // Return cached providers as fallback
      return this.getCachedProviders();
    }
  }

  // Disconnect calendar provider
  static async disconnectProvider(providerType: string): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/disconnect/${providerType}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to disconnect calendar provider');
      }

      this.removeProviderFromCache(providerType);
    } catch (error) {
      console.error('Error disconnecting calendar provider:', error);
      throw error;
    }
  }

  // Sync bookings to external calendar
  static async syncBookingToExternal(
    booking: BookingWithRelations,
    providerType: 'google' | 'outlook'
  ): Promise<{ success: boolean; eventId?: string; error?: string }> {
    try {
      const token = localStorage.getItem('token');
      const calendarEvent = this.convertBookingToCalendarEvent(booking);

      const response = await fetch(`${this.API_BASE}/calendar/sync/${providerType}/export`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: calendarEvent,
          bookingId: booking.id,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to sync booking to external calendar');
      }

      return await response.json();
    } catch (error) {
      console.error('Error syncing booking to external calendar:', error);
      return { success: false, error: error.message };
    }
  }

  // Import events from external calendar
  static async importFromExternal(
    providerType: 'google' | 'outlook',
    startDate: Date,
    endDate: Date
  ): Promise<ExternalCalendarEvent[]> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${this.API_BASE}/calendar/sync/${providerType}/import?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to import events from external calendar');
      }

      const events = await response.json();
      return events.map((event: any) => ({
        ...event,
        startTime: new Date(event.startTime),
        endTime: new Date(event.endTime),
      }));
    } catch (error) {
      console.error('Error importing from external calendar:', error);
      throw error;
    }
  }

  // Full bidirectional sync
  static async performFullSync(
    providerType: 'google' | 'outlook',
    settings: SyncSettings
  ): Promise<{
    imported: number;
    exported: number;
    conflicts: Array<{ local: BookingWithRelations; external: ExternalCalendarEvent; resolution: string }>;
    errors: string[];
  }> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/sync/${providerType}/full`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (!response.ok) {
        throw new Error('Failed to perform full sync');
      }

      return await response.json();
    } catch (error) {
      console.error('Error performing full sync:', error);
      throw error;
    }
  }

  // Get sync settings
  static async getSyncSettings(): Promise<SyncSettings> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/sync/settings`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch sync settings');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching sync settings:', error);
      // Return default settings
      return this.getDefaultSyncSettings();
    }
  }

  // Update sync settings
  static async updateSyncSettings(settings: Partial<SyncSettings>): Promise<SyncSettings> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/sync/settings`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (!response.ok) {
        throw new Error('Failed to update sync settings');
      }

      const updatedSettings = await response.json();
      this.cacheSyncSettings(updatedSettings);
      return updatedSettings;
    } catch (error) {
      console.error('Error updating sync settings:', error);
      throw error;
    }
  }

  // Get OAuth authorization URL
  static getOAuthUrl(provider: 'google' | 'outlook'): string {
    const baseUrl = this.API_BASE.replace('/api', '');
    const redirectUri = `${window.location.origin}/admin/calendar?oauth=callback`;

    if (provider === 'google') {
      const scopes = 'https://www.googleapis.com/auth/calendar.events';
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

      return `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${clientId}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${encodeURIComponent(scopes)}&` +
        `response_type=code&` +
        `access_type=offline&` +
        `prompt=consent&` +
        `state=${provider}`;
    } else if (provider === 'outlook') {
      const scopes = 'https://graph.microsoft.com/calendars.readwrite';
      const clientId = import.meta.env.VITE_OUTLOOK_CLIENT_ID;

      return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?` +
        `client_id=${clientId}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${encodeURIComponent(scopes)}&` +
        `response_type=code&` +
        `state=${provider}`;
    }

    throw new Error(`Unsupported provider: ${provider}`);
  }

  // Convert booking to calendar event format
  private static convertBookingToCalendarEvent(booking: BookingWithRelations): ExternalCalendarEvent {
    const startTime = new Date(`${booking.scheduledDate} ${booking.scheduledTime}`);
    const endTime = new Date(startTime.getTime() + (booking.durationMinutes || 120) * 60 * 1000);

    return {
      id: booking.id,
      title: `Mould Inspection - ${booking.lead.firstName} ${booking.lead.lastName}`,
      description: [
        `Property Address: ${booking.propertyAddress}`,
        `Suburb: ${booking.melbourneSuburb}`,
        `Customer: ${booking.lead.firstName} ${booking.lead.lastName}`,
        `Phone: ${booking.lead.phone}`,
        `Email: ${booking.lead.email}`,
        booking.notes ? `Notes: ${booking.notes}` : '',
        `Duration: ${booking.durationMinutes || 120} minutes`,
        `Status: ${booking.status}`,
      ].filter(Boolean).join('\n'),
      startTime,
      endTime,
      location: `${booking.propertyAddress}, ${booking.melbourneSuburb}, VIC`,
      attendees: [booking.lead.email, booking.technician.email],
    };
  }

  // Cache management for offline support
  private static saveProviderSettings(provider: CalendarProvider): void {
    const cached = this.getCachedProviders();
    const updated = cached.filter(p => p.type !== provider.type);
    updated.push(provider);
    localStorage.setItem('calendarProviders', JSON.stringify(updated));
  }

  private static getCachedProviders(): CalendarProvider[] {
    try {
      const cached = localStorage.getItem('calendarProviders');
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  }

  private static removeProviderFromCache(providerType: string): void {
    const cached = this.getCachedProviders();
    const updated = cached.filter(p => p.type !== providerType);
    localStorage.setItem('calendarProviders', JSON.stringify(updated));
  }

  private static cacheSyncSettings(settings: SyncSettings): void {
    localStorage.setItem('calendarSyncSettings', JSON.stringify(settings));
  }

  private static getCachedSyncSettings(): SyncSettings | null {
    try {
      const cached = localStorage.getItem('calendarSyncSettings');
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  }

  private static getDefaultSyncSettings(): SyncSettings {
    return {
      autoSync: false,
      syncDirection: 'export',
      conflictResolution: 'manual',
      syncFrequency: 30, // 30 minutes
      includePrivateEvents: false,
    };
  }

  // Utility methods for scheduling optimization
  static async findOptimalSlots(
    preferredTimes: Date[],
    duration: number,
    technicianId: string,
    includeExternalCalendar = true
  ): Promise<Array<{ time: Date; score: number; conflicts: string[] }>> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/optimize`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preferredTimes: preferredTimes.map(t => t.toISOString()),
          duration,
          technicianId,
          includeExternalCalendar,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to find optimal slots');
      }

      const slots = await response.json();
      return slots.map((slot: any) => ({
        ...slot,
        time: new Date(slot.time),
      }));
    } catch (error) {
      console.error('Error finding optimal slots:', error);
      throw error;
    }
  }

  // Batch operations for efficiency
  static async batchSyncBookings(
    bookings: BookingWithRelations[],
    providerType: 'google' | 'outlook'
  ): Promise<Array<{ bookingId: string; success: boolean; eventId?: string; error?: string }>> {
    try {
      const token = localStorage.getItem('token');
      const events = bookings.map(booking => ({
        bookingId: booking.id,
        event: this.convertBookingToCalendarEvent(booking),
      }));

      const response = await fetch(`${this.API_BASE}/calendar/sync/${providerType}/batch`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ events }),
      });

      if (!response.ok) {
        throw new Error('Failed to batch sync bookings');
      }

      return await response.json();
    } catch (error) {
      console.error('Error batch syncing bookings:', error);
      throw error;
    }
  }

  // Monitor sync status
  static async getSyncStatus(): Promise<{
    lastSync: Date | null;
    nextSync: Date | null;
    isRunning: boolean;
    errors: string[];
    stats: {
      totalBookings: number;
      syncedBookings: number;
      pendingSync: number;
      conflicts: number;
    };
  }> {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${this.API_BASE}/calendar/sync/status`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch sync status');
      }

      const status = await response.json();
      return {
        ...status,
        lastSync: status.lastSync ? new Date(status.lastSync) : null,
        nextSync: status.nextSync ? new Date(status.nextSync) : null,
      };
    } catch (error) {
      console.error('Error fetching sync status:', error);
      throw error;
    }
  }
}

export default ExternalCalendarService;