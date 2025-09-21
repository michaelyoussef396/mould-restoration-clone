import { z } from 'zod';

// Types for communication system
export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  type: 'LEAD_CONFIRMATION' | 'INSPECTION_SCHEDULED' | 'INSPECTION_REMINDER' | 'REPORT_READY' | 'QUOTE_FOLLOW_UP' | 'PAYMENT_REMINDER' | 'THANK_YOU' | 'CUSTOM';
  variables: TemplateVariable[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TemplateVariable {
  key: string;
  description: string;
  required: boolean;
  defaultValue?: string;
  type: 'TEXT' | 'DATE' | 'NUMBER' | 'CURRENCY';
}

export interface SMSTemplate {
  id: string;
  name: string;
  message: string;
  type: 'APPOINTMENT_REMINDER' | 'CONFIRMATION' | 'ARRIVAL_NOTIFICATION' | 'COMPLETION_NOTIFICATION' | 'FOLLOW_UP' | 'CUSTOM';
  variables: TemplateVariable[];
  active: boolean;
  characterCount: number;
}

export interface CommunicationLog {
  id: string;
  leadId?: string;
  inspectionId?: string;
  type: 'EMAIL' | 'SMS' | 'PHONE' | 'IN_PERSON' | 'SYSTEM';
  direction: 'INBOUND' | 'OUTBOUND';
  subject?: string;
  content: string;
  recipient?: string;
  sender?: string;
  status: 'SENT' | 'DELIVERED' | 'READ' | 'FAILED' | 'BOUNCED';
  scheduledAt?: string;
  sentAt?: string;
  deliveredAt?: string;
  readAt?: string;
  metadata?: any;
  createdAt: string;
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: {
    type: 'LEAD_CREATED' | 'STATUS_CHANGED' | 'INSPECTION_SCHEDULED' | 'INSPECTION_COMPLETED' | 'TIME_DELAY' | 'DATE_REACHED';
    conditions: any;
  };
  actions: AutomationAction[];
  active: boolean;
  priority: number;
  createdAt: string;
  lastTriggered?: string;
  timesTriggered: number;
}

export interface AutomationAction {
  type: 'SEND_EMAIL' | 'SEND_SMS' | 'CREATE_TASK' | 'UPDATE_STATUS' | 'ASSIGN_TECHNICIAN' | 'SCHEDULE_FOLLOW_UP';
  delay?: number; // minutes
  templateId?: string;
  recipient?: string;
  data?: any;
}

export interface CommunicationSequence {
  id: string;
  name: string;
  type: 'LEAD_NURTURING' | 'POST_INSPECTION' | 'QUOTE_FOLLOW_UP' | 'CUSTOMER_ONBOARDING';
  steps: SequenceStep[];
  enrollmentConditions: any;
  active: boolean;
  enrolledCount: number;
  completionRate: number;
}

export interface SequenceStep {
  id: string;
  order: number;
  delay: number; // minutes from previous step
  type: 'EMAIL' | 'SMS';
  templateId: string;
  conditions?: any;
  stopConditions?: any;
}

export interface CommunicationStats {
  period: { start: string; end: string };
  emails: {
    sent: number;
    delivered: number;
    opened: number;
    clicked: number;
    bounced: number;
    unsubscribed: number;
    deliveryRate: number;
    openRate: number;
    clickRate: number;
  };
  sms: {
    sent: number;
    delivered: number;
    failed: number;
    replies: number;
    deliveryRate: number;
    responseRate: number;
  };
  automation: {
    rulesTriggered: number;
    sequencesCompleted: number;
    timesSaved: number; // hours
    costSaved: number; // dollars
  };
}

// Validation schemas
const SendEmailSchema = z.object({
  recipients: z.array(z.string().email()),
  templateId: z.string().optional(),
  subject: z.string().optional(),
  body: z.string().optional(),
  variables: z.record(z.any()).optional(),
  scheduledAt: z.string().optional(),
  leadId: z.string().optional(),
  inspectionId: z.string().optional(),
});

const SendSMSSchema = z.object({
  recipients: z.array(z.string()),
  templateId: z.string().optional(),
  message: z.string().optional(),
  variables: z.record(z.any()).optional(),
  scheduledAt: z.string().optional(),
  leadId: z.string().optional(),
  inspectionId: z.string().optional(),
});

const CreateTemplateSchema = z.object({
  name: z.string(),
  type: z.string(),
  subject: z.string().optional(),
  body: z.string().optional(),
  message: z.string().optional(),
  variables: z.array(z.object({
    key: z.string(),
    description: z.string(),
    required: z.boolean(),
    defaultValue: z.string().optional(),
    type: z.string(),
  })),
});

class CommunicationService {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  // Email Management
  async sendEmail(data: z.infer<typeof SendEmailSchema>): Promise<{
    messageId: string;
    status: string;
    scheduledFor?: string;
  }> {
    const validated = SendEmailSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/email/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send email');
    }

    return response.json();
  }

  async getEmailTemplates(type?: string): Promise<EmailTemplate[]> {
    const token = localStorage.getItem('auth_token');
    const url = type
      ? `${this.baseUrl}/api/communication/email/templates?type=${type}`
      : `${this.baseUrl}/api/communication/email/templates`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch email templates');
    }

    return response.json();
  }

  async createEmailTemplate(data: z.infer<typeof CreateTemplateSchema>): Promise<EmailTemplate> {
    const validated = CreateTemplateSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/email/templates`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create email template');
    }

    return response.json();
  }

  async updateEmailTemplate(id: string, data: Partial<EmailTemplate>): Promise<EmailTemplate> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/email/templates/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update email template');
    }

    return response.json();
  }

  // SMS Management
  async sendSMS(data: z.infer<typeof SendSMSSchema>): Promise<{
    messageId: string;
    status: string;
    cost: number;
    scheduledFor?: string;
  }> {
    const validated = SendSMSSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/sms/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send SMS');
    }

    return response.json();
  }

  async getSMSTemplates(type?: string): Promise<SMSTemplate[]> {
    const token = localStorage.getItem('auth_token');
    const url = type
      ? `${this.baseUrl}/api/communication/sms/templates?type=${type}`
      : `${this.baseUrl}/api/communication/sms/templates`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch SMS templates');
    }

    return response.json();
  }

  async createSMSTemplate(data: z.infer<typeof CreateTemplateSchema>): Promise<SMSTemplate> {
    const validated = CreateTemplateSchema.parse(data);
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/sms/templates`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validated),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create SMS template');
    }

    return response.json();
  }

  // Communication Logs
  async getCommunicationLogs(filters?: {
    leadId?: string;
    inspectionId?: string;
    type?: string;
    dateFrom?: string;
    dateTo?: string;
    limit?: number;
  }): Promise<CommunicationLog[]> {
    const token = localStorage.getItem('auth_token');
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value.toString());
      });
    }

    const response = await fetch(`${this.baseUrl}/api/communication/logs?${params}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch communication logs');
    }

    return response.json();
  }

  async createCommunicationLog(data: {
    leadId?: string;
    inspectionId?: string;
    type: string;
    direction: string;
    subject?: string;
    content: string;
    recipient?: string;
    metadata?: any;
  }): Promise<CommunicationLog> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/logs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create communication log');
    }

    return response.json();
  }

  // Automation Rules
  async getAutomationRules(): Promise<AutomationRule[]> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/automation/rules`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch automation rules');
    }

    return response.json();
  }

  async createAutomationRule(data: Omit<AutomationRule, 'id' | 'createdAt' | 'timesTriggered'>): Promise<AutomationRule> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/automation/rules`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create automation rule');
    }

    return response.json();
  }

  async updateAutomationRule(id: string, data: Partial<AutomationRule>): Promise<AutomationRule> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/automation/rules/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update automation rule');
    }

    return response.json();
  }

  async toggleAutomationRule(id: string, active: boolean): Promise<AutomationRule> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/automation/rules/${id}/toggle`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ active }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to toggle automation rule');
    }

    return response.json();
  }

  // Communication Sequences
  async getCommunicationSequences(): Promise<CommunicationSequence[]> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/sequences`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch communication sequences');
    }

    return response.json();
  }

  async createCommunicationSequence(data: Omit<CommunicationSequence, 'id' | 'enrolledCount' | 'completionRate'>): Promise<CommunicationSequence> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/sequences`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create communication sequence');
    }

    return response.json();
  }

  async enrollInSequence(sequenceId: string, leadId: string): Promise<{ enrolled: boolean; nextStep?: string }> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/sequences/${sequenceId}/enroll`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ leadId }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to enroll in sequence');
    }

    return response.json();
  }

  // Communication Statistics
  async getCommunicationStats(period: { start: string; end: string }): Promise<CommunicationStats> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(
      `${this.baseUrl}/api/communication/stats?start=${period.start}&end=${period.end}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch communication stats');
    }

    return response.json();
  }

  // Quick Actions
  async sendQuickConfirmation(leadId: string, type: 'INSPECTION_SCHEDULED' | 'QUOTE_SENT' | 'PAYMENT_RECEIVED'): Promise<{
    emailSent: boolean;
    smsSent: boolean;
    messageIds: string[];
  }> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/quick-confirm`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ leadId, type }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send confirmation');
    }

    return response.json();
  }

  async sendInspectionReminder(inspectionId: string, hours: number = 24): Promise<{
    remindersSent: number;
    details: { recipient: string; type: 'EMAIL' | 'SMS'; status: string }[];
  }> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/inspection-reminder`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inspectionId, hours }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send inspection reminder');
    }

    return response.json();
  }

  // Bulk Operations
  async sendBulkEmail(data: {
    leadIds: string[];
    templateId: string;
    variables?: Record<string, any>;
    scheduledAt?: string;
  }): Promise<{
    queued: number;
    failed: number;
    details: { leadId: string; status: 'QUEUED' | 'FAILED'; reason?: string }[];
  }> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/bulk-email`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send bulk email');
    }

    return response.json();
  }

  async sendBulkSMS(data: {
    leadIds: string[];
    templateId: string;
    variables?: Record<string, any>;
    scheduledAt?: string;
  }): Promise<{
    queued: number;
    failed: number;
    totalCost: number;
    details: { leadId: string; status: 'QUEUED' | 'FAILED'; reason?: string; cost?: number }[];
  }> {
    const token = localStorage.getItem('auth_token');

    const response = await fetch(`${this.baseUrl}/api/communication/bulk-sms`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send bulk SMS');
    }

    return response.json();
  }
}

export const communicationService = new CommunicationService();
export default communicationService;