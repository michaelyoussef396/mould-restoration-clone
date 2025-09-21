import { z } from 'zod';

// Types for reporting system
export interface InspectionReport {
  id: string;
  inspectionId: string;
  leadId: string;
  customerName: string;
  address: string;
  inspectionDate: string;
  technicianName: string;
  serviceType: string;
  findings: ReportFindings;
  recommendations: ReportRecommendation[];
  photos: ReportPhoto[];
  quotes: ReportQuote[];
  reportUrl?: string;
  pdfUrl?: string;
  status: 'DRAFT' | 'REVIEW' | 'APPROVED' | 'SENT';
  generatedAt: string;
  sentAt?: string;
}

export interface ReportFindings {
  mouldPresent: boolean;
  severityLevel: 'LOW' | 'MODERATE' | 'HIGH' | 'SEVERE';
  affectedAreas: string[];
  moistureReadings: MoistureReading[];
  airQualityResults: AirQualityReading[];
  structuralConcerns: string[];
  immediateActions: string[];
  summary: string;
}

export interface MoistureReading {
  location: string;
  reading: number;
  normal: boolean;
  unit: string;
  timestamp: string;
}

export interface AirQualityReading {
  parameter: string;
  value: number;
  unit: string;
  safe: boolean;
  benchmark: number;
}

export interface ReportRecommendation {
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  category: 'IMMEDIATE' | 'SHORT_TERM' | 'LONG_TERM' | 'PREVENTIVE';
  description: string;
  estimatedCost?: number;
  timeframe: string;
}

export interface ReportPhoto {
  id: string;
  url: string;
  caption: string;
  location: string;
  category: 'BEFORE' | 'DURING' | 'AFTER' | 'DAMAGE' | 'EQUIPMENT' | 'MOISTURE';
  timestamp: string;
}

export interface ReportQuote {
  id: string;
  serviceType: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  includedInTotal: boolean;
}

export interface BusinessAnalytics {
  period: {
    start: string;
    end: string;
  };
  revenue: {
    total: number;
    target: number;
    growth: number;
    breakdown: { month: string; amount: number }[];
  };
  leads: {
    total: number;
    conversion: number;
    sources: { source: string; count: number; conversion: number }[];
    pipeline: { status: string; count: number; value: number }[];
  };
  inspections: {
    completed: number;
    scheduled: number;
    cancelled: number;
    averageDuration: number;
    technicianPerformance: TechnicianPerformance[];
  };
  customers: {
    satisfaction: number;
    repeatCustomers: number;
    referrals: number;
    geography: { suburb: string; count: number }[];
  };
  operations: {
    averageResponseTime: number;
    scheduleEfficiency: number;
    travelOptimization: number;
    costPerInspection: number;
  };
}

export interface TechnicianPerformance {
  technicianId: string;
  name: string;
  inspectionsCompleted: number;
  averageRating: number;
  totalRevenue: number;
  efficiency: number;
  customerFeedback: number;
}

export interface PDFTemplate {
  id: string;
  name: string;
  type: 'INSPECTION_REPORT' | 'QUOTE' | 'INVOICE' | 'CERTIFICATE';
  layout: 'STANDARD' | 'DETAILED' | 'SUMMARY';
  branding: {
    logo: boolean;
    colors: string[];
    fonts: string[];
  };
  sections: PDFSection[];
  active: boolean;
}

export interface PDFSection {
  id: string;
  name: string;
  type: 'HEADER' | 'FINDINGS' | 'PHOTOS' | 'RECOMMENDATIONS' | 'QUOTE' | 'FOOTER';
  order: number;
  required: boolean;
  customizable: boolean;
  template: string;
}

// Validation schemas
const GenerateReportSchema = z.object({
  inspectionId: z.string(),
  templateId: z.string().optional(),
  includePhotos: z.boolean().default(true),
  includeQuote: z.boolean().default(true),
  customBranding: z.boolean().default(true),
  deliveryMethod: z.enum(['EMAIL', 'DOWNLOAD', 'BOTH']).default('EMAIL'),
});

const CreateQuoteSchema = z.object({
  leadId: z.string(),
  inspectionId: z.string().optional(),
  items: z.array(z.object({
    serviceType: z.string(),
    description: z.string(),
    quantity: z.number(),
    unitPrice: z.number(),
  })),
  validUntil: z.string(),
  terms: z.string().optional(),
  notes: z.string().optional(),
});

class ReportingService {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  // Inspection Reports
  async generateInspectionReport(data: z.infer<typeof GenerateReportSchema>): Promise<{
    reportId: string;
    pdfUrl: string;
    status: string;
  }> {
    const validated = GenerateReportSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/reports/inspection`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to generate inspection report');
    }

    return response.json();
  }

  async getInspectionReport(reportId: string): Promise<InspectionReport> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/inspection/${reportId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch inspection report');
    }

    return response.json();
  }

  async updateInspectionReport(reportId: string, data: Partial<InspectionReport>): Promise<InspectionReport> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/inspection/${reportId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update inspection report');
    }

    return response.json();
  }

  async sendReportToCustomer(reportId: string, emailOptions: {
    recipients: string[];
    subject?: string;
    message?: string;
    copyTechnician: boolean;
    copyAdmin: boolean;
  }): Promise<{ sent: boolean; messageId: string }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/inspection/${reportId}/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailOptions),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send report');
    }

    return response.json();
  }

  // Quote Generation
  async generateQuote(data: z.infer<typeof CreateQuoteSchema>): Promise<{
    quoteId: string;
    pdfUrl: string;
    totalAmount: number;
  }> {
    const validated = CreateQuoteSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/reports/quote`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to generate quote');
    }

    return response.json();
  }

  async getQuote(quoteId: string): Promise<any> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/quote/${quoteId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    return response.json();
  }

  // Business Analytics
  async getBusinessAnalytics(period: { start: string; end: string }): Promise<BusinessAnalytics> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(
      `${this.baseUrl}/api/analytics/business?start=${period.start}&end=${period.end}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch business analytics');
    }

    return response.json();
  }

  async getRevenueForecasting(months: number = 6): Promise<{
    forecast: { month: string; predicted: number; confidence: number }[];
    trends: { metric: string; trend: 'UP' | 'DOWN' | 'STABLE'; percentage: number }[];
    recommendations: string[];
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/analytics/revenue-forecast?months=${months}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch revenue forecasting');
    }

    return response.json();
  }

  async getLeadConversionAnalysis(): Promise<{
    conversionFunnel: { stage: string; count: number; percentage: number }[];
    dropoffPoints: { stage: string; dropoffRate: number; improvement: string }[];
    topSources: { source: string; conversion: number; cost: number; roi: number }[];
    recommendations: string[];
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/analytics/conversion-analysis`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch lead conversion analysis');
    }

    return response.json();
  }

  async getTechnicianPerformanceReport(): Promise<{
    technicians: TechnicianPerformance[];
    averages: {
      inspectionsPerWeek: number;
      customerRating: number;
      revenuePerInspection: number;
      efficiency: number;
    };
    recommendations: { technicianId: string; improvements: string[] }[];
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/analytics/technician-performance`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch technician performance report');
    }

    return response.json();
  }

  // PDF Templates
  async getPDFTemplates(): Promise<PDFTemplate[]> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/templates`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch PDF templates');
    }

    return response.json();
  }

  async createPDFTemplate(template: Omit<PDFTemplate, 'id'>): Promise<PDFTemplate> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/templates`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(template),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create PDF template');
    }

    return response.json();
  }

  // Bulk Export Operations
  async exportLeadsToCSV(filters?: any): Promise<{ downloadUrl: string }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/export/leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filters }),
    });

    if (!response.ok) {
      throw new Error('Failed to export leads to CSV');
    }

    return response.json();
  }

  async exportInspectionsToCSV(filters?: any): Promise<{ downloadUrl: string }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/export/inspections`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filters }),
    });

    if (!response.ok) {
      throw new Error('Failed to export inspections to CSV');
    }

    return response.json();
  }

  // Dashboard Reports
  async generateExecutiveDashboard(): Promise<{
    kpis: { name: string; value: number; change: number; trend: 'UP' | 'DOWN' | 'STABLE' }[];
    charts: { type: string; data: any; title: string }[];
    alerts: { type: 'WARNING' | 'INFO' | 'SUCCESS'; message: string }[];
    recommendations: string[];
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/analytics/executive-dashboard`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to generate executive dashboard');
    }

    return response.json();
  }

  // AI-Powered Report Content
  async generateAIFindings(inspectionData: {
    photos: string[];
    moistureReadings: MoistureReading[];
    visualObservations: string[];
    customerConcerns: string[];
  }): Promise<{
    findings: string;
    recommendations: string[];
    severity: 'LOW' | 'MODERATE' | 'HIGH' | 'SEVERE';
    confidence: number;
  }> {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(`${this.baseUrl}/api/reports/ai-findings`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inspectionData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to generate AI findings');
    }

    return response.json();
  }
}

export const reportingService = new ReportingService();
export default reportingService;