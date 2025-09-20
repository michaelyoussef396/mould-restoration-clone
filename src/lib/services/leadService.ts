import { ServiceType, LeadStatus, LeadSource, Urgency } from '@prisma/client';
import { AuthService } from '../auth';
import { MockApiService } from '../mockApiService';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = AuthService.getToken();
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

// Type definitions that match the backend
interface User {
  id: string;
  email: string;
  name: string;
  role: string;
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
  bookingDates?: string; // JSON string array of available booking dates
  createdAt: Date;
  updatedAt: Date;
  contactedAt?: Date;
  qualifiedAt?: Date;
  convertedAt?: Date;
  createdById: string;
  assignedToId?: string;
}

interface Inspection {
  id: string;
  scheduledAt: Date;
  completedAt?: Date;
  status: string;
  findings?: string;
  recommendations?: string;
  photos?: string;
  reportUrl?: string;
  estimatedCost?: number;
  finalCost?: number;
  createdAt: Date;
  updatedAt: Date;
  leadId: string;
  technicianId: string;
}

interface Activity {
  id: string;
  type: string;
  description: string;
  notes?: string;
  createdAt: Date;
  userId: string;
  leadId?: string;
  inspectionId?: string;
}

export interface LeadWithRelations extends Lead {
  createdBy: User;
  assignedTo?: User | null;
  inspections: Inspection[];
  activities: Activity[];
}

export interface CreateLeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  suburb: string;
  address?: string;
  postcode?: string;
  serviceType: ServiceType;
  urgency?: Urgency;
  source?: LeadSource;
  notes?: string;
  bookingDates?: string[] | string; // Array of dates or JSON string
  createdById: string;
  assignedToId?: string;
}

export interface UpdateLeadData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  suburb?: string;
  address?: string;
  postcode?: string;
  serviceType?: ServiceType;
  urgency?: Urgency;
  source?: LeadSource;
  status?: LeadStatus;
  notes?: string;
  bookingDates?: string[] | string; // Array of dates or JSON string
  assignedToId?: string;
}

export class LeadService {
  static async getAllLeads(): Promise<LeadWithRelations[]> {
    try {
      // Try real API first, fall back to mock API
      const isApiAvailable = await MockApiService.checkApiAvailability();

      if (isApiAvailable) {
        const response = await fetch(`${API_BASE_URL}/leads`, {
          headers: getAuthHeaders(),
        });

        if (response.ok) {
          return await response.json();
        }
      }

      // Fallback to mock API
      return await MockApiService.getAllLeads();

    } catch (error) {
      console.error('Error fetching leads:', error);
      // Return mock data as ultimate fallback
      return await MockApiService.getAllLeads();
    }
  }

  static async getLeadById(id: string): Promise<LeadWithRelations | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/${id}`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Failed to fetch lead');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching lead:', error);
      throw error;
    }
  }

  static async createLead(data: CreateLeadData): Promise<Lead> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create lead');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating lead:', error);
      throw error;
    }
  }

  static async updateLead(id: string, data: UpdateLeadData): Promise<Lead> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update lead');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating lead:', error);
      throw error;
    }
  }

  static async deleteLead(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to delete lead');
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
      throw error;
    }
  }

  static async getLeadsByStatus(status: LeadStatus): Promise<LeadWithRelations[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/status/${status}`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch leads by status');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching leads by status:', error);
      throw error;
    }
  }

  static async getLeadsByAssignee(userId: string): Promise<LeadWithRelations[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/assignee/${userId}`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch leads by assignee');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching leads by assignee:', error);
      throw error;
    }
  }

  static async addActivity(leadId: string, userId: string, type: string, description: string, notes?: string): Promise<Activity> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/${leadId}/activities`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          type,
          description,
          notes,
          userId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add activity');
      }

      return await response.json();
    } catch (error) {
      console.error('Error adding activity:', error);
      throw error;
    }
  }

  static async getDashboardStats() {
    try {
      // Try real API first, fall back to mock API
      const isApiAvailable = await MockApiService.checkApiAvailability();

      if (isApiAvailable) {
        const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
          headers: getAuthHeaders(),
        });

        if (response.ok) {
          return await response.json();
        }
      }

      // Fallback to mock API
      return await MockApiService.getDashboardStats();

    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      // Return mock data as ultimate fallback
      return await MockApiService.getDashboardStats();
    }
  }

  static async getRecentLeads(limit: number = 10): Promise<LeadWithRelations[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/leads/recent/${limit}`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recent leads');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching recent leads:', error);
      throw error;
    }
  }
}