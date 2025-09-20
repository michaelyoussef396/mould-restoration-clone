// Mock API Service for Production Deployment without Backend
// Provides fallback functionality when API server is not available

import { ServiceType, LeadStatus, LeadSource, Urgency } from '@prisma/client';
import { toast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'technician' | 'client';
  createdAt: Date;
}

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  suburb: string;
  address?: string;
  postcode?: string;
  serviceType: ServiceType;
  urgency: Urgency;
  source: LeadSource;
  status: LeadStatus;
  notes?: string;
  estimatedValue?: number;
  bookingDates?: string;
  createdAt: Date;
  updatedAt: Date;
  contactedAt?: Date;
  qualifiedAt?: Date;
  convertedAt?: Date;
  createdById: string;
  assignedToId?: string;
}

// Mock data for development and fallback
const MOCK_USER: User = {
  id: 'admin-001',
  email: 'admin@mouldrestoration.com.au',
  name: 'Admin User',
  role: 'admin',
  createdAt: new Date('2024-01-01')
};

const MOCK_LEADS: Lead[] = [
  {
    id: 'lead-001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@example.com',
    phone: '0423 456 789',
    suburb: 'Carlton',
    address: '123 Smith Street',
    postcode: '3053',
    serviceType: 'MOULD_INSPECTION' as ServiceType,
    urgency: 'HIGH' as Urgency,
    source: 'WEBSITE' as LeadSource,
    status: 'NEW' as LeadStatus,
    notes: 'Visible mould in bathroom, concerns about health impact',
    estimatedValue: 850,
    bookingDates: JSON.stringify(['2025-01-22T09:00:00Z', '2025-01-23T14:00:00Z']),
    createdAt: new Date('2025-01-21T10:30:00Z'),
    updatedAt: new Date('2025-01-21T10:30:00Z'),
    createdById: 'admin-001',
    assignedToId: 'tech-001'
  },
  {
    id: 'lead-002',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@example.com',
    phone: '0412 789 123',
    suburb: 'Richmond',
    address: '456 Bridge Road',
    postcode: '3121',
    serviceType: 'MOULD_REMOVAL' as ServiceType,
    urgency: 'MEDIUM' as Urgency,
    source: 'REFERRAL' as LeadSource,
    status: 'CONTACTED' as LeadStatus,
    notes: 'Follow-up from previous inspection, ready to proceed',
    estimatedValue: 2400,
    bookingDates: JSON.stringify(['2025-01-24T08:00:00Z']),
    createdAt: new Date('2025-01-20T14:15:00Z'),
    updatedAt: new Date('2025-01-21T09:00:00Z'),
    contactedAt: new Date('2025-01-21T09:00:00Z'),
    createdById: 'admin-001',
    assignedToId: 'tech-002'
  }
];

export class MockApiService {
  private static isApiAvailable = false;
  private static lastApiCheck = 0;
  private static readonly API_CHECK_INTERVAL = 30000; // 30 seconds

  static async checkApiAvailability(): Promise<boolean> {
    const now = Date.now();

    // Rate limit API checks
    if (now - this.lastApiCheck < this.API_CHECK_INTERVAL) {
      return this.isApiAvailable;
    }

    this.lastApiCheck = now;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/health`, {
        method: 'GET',
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      this.isApiAvailable = response.ok;
      return this.isApiAvailable;
    } catch (error) {
      console.log('[MockAPI] Real API not available, using mock data');
      this.isApiAvailable = false;
      return false;
    }
  }

  static async login(credentials: { email: string; password: string }) {
    const isApiAvailable = await this.checkApiAvailability();

    if (isApiAvailable) {
      // Try real API first
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });

        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.log('[MockAPI] Real API login failed, using mock auth');
      }
    }

    // Mock authentication for demo purposes
    if (credentials.email === 'admin@mouldrestoration.com.au' && credentials.password === 'demo123') {
      const token = 'mock-jwt-token-' + Date.now();

      // Store mock auth
      localStorage.setItem('auth_token', token);
      localStorage.setItem('auth_user', JSON.stringify(MOCK_USER));

      toast({
        title: "Demo Mode",
        description: "Using mock data - API server not available",
        duration: 3000,
      });

      return { user: MOCK_USER, token };
    }

    throw new Error('Invalid credentials. Use admin@mouldrestoration.com.au / demo123 for demo');
  }

  static async getAllLeads() {
    const isApiAvailable = await this.checkApiAvailability();

    if (isApiAvailable) {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.log('[MockAPI] Real API leads failed, using mock data');
      }
    }

    // Return mock leads with enhanced data
    return MOCK_LEADS.map(lead => ({
      ...lead,
      createdBy: MOCK_USER,
      assignedTo: lead.assignedToId ? {
        id: lead.assignedToId,
        name: lead.assignedToId === 'tech-001' ? 'James Wilson' : 'Emma Davis',
        email: lead.assignedToId === 'tech-001' ? 'james@mouldrestoration.com.au' : 'emma@mouldrestoration.com.au',
        role: 'technician'
      } : null,
      inspections: [],
      activities: []
    }));
  }

  static async getDashboardStats() {
    const isApiAvailable = await this.checkApiAvailability();

    if (isApiAvailable) {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/dashboard/stats`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.log('[MockAPI] Real API stats failed, using mock data');
      }
    }

    // Mock dashboard statistics
    return {
      totalLeads: MOCK_LEADS.length,
      newLeads: MOCK_LEADS.filter(l => l.status === 'NEW').length,
      activeInspections: 1,
      completedJobs: 15,
      monthlyRevenue: 12500,
      conversionRate: 68,
      averageJobValue: 1850,
      recentLeads: MOCK_LEADS.slice(0, 5)
    };
  }

  static async createLead(leadData: any) {
    const isApiAvailable = await this.checkApiAvailability();

    if (isApiAvailable) {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        });

        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.log('[MockAPI] Real API create failed, using mock response');
      }
    }

    // Mock lead creation
    const newLead = {
      id: 'lead-' + Date.now(),
      ...leadData,
      status: 'NEW' as LeadStatus,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdById: MOCK_USER.id
    };

    MOCK_LEADS.push(newLead);

    toast({
      title: "Demo Mode",
      description: "Lead created in demo mode - changes won't persist",
      duration: 3000,
    });

    return newLead;
  }

  static async updateLead(id: string, updateData: any) {
    const isApiAvailable = await this.checkApiAvailability();

    if (isApiAvailable) {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/leads/${id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        });

        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.log('[MockAPI] Real API update failed, using mock response');
      }
    }

    // Mock lead update
    const leadIndex = MOCK_LEADS.findIndex(l => l.id === id);
    if (leadIndex !== -1) {
      MOCK_LEADS[leadIndex] = {
        ...MOCK_LEADS[leadIndex],
        ...updateData,
        updatedAt: new Date()
      };

      toast({
        title: "Demo Mode",
        description: "Lead updated in demo mode - changes won't persist",
        duration: 3000,
      });

      return MOCK_LEADS[leadIndex];
    }

    throw new Error('Lead not found');
  }

  static getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem('auth_user');
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }

  static getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  static isAuthenticated(): boolean {
    return !!this.getToken() && !!this.getCurrentUser();
  }

  static logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }
}

// Enhanced fetch with fallback to mock API
export async function enhancedFetchWithFallback(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const isApiAvailable = await MockApiService.checkApiAvailability();

  if (!isApiAvailable) {
    // Return mock response for common endpoints
    if (url.includes('/api/auth/login')) {
      return new Response(JSON.stringify({ error: 'Use MockApiService.login() for demo' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (url.includes('/api/leads')) {
      const leads = await MockApiService.getAllLeads();
      return new Response(JSON.stringify(leads), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Default offline response
    return new Response(JSON.stringify({
      error: 'API not available',
      message: 'Using mock data for demo'
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Try real API
  return fetch(url, options);
}