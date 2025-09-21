import React, { useState, useEffect } from 'react';
import { AdminLayout } from './AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  Plus,
  Edit,
  Trash2,
  Copy,
  Eye,
  Settings,
  Bell,
  Clock,
  Users,
  Target,
  Zap,
  Activity,
  CheckCircle,
  RefreshCw,
  Download,
  Filter,
  Search,
  AlertTriangle
} from 'lucide-react';
import {
  communicationService,
  EmailTemplate,
  SMSTemplate,
  CommunicationLog,
  AutomationRule,
  CommunicationSequence,
  CommunicationStats
} from '@/lib/services/communicationService';
import { LeadService, LeadWithRelations } from '@/lib/services/leadService';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface TemplateFormData {
  name: string;
  type: string;
  subject?: string;
  body?: string;
  message?: string;
  variables: { key: string; description: string; required: boolean; defaultValue?: string; type: string }[];
}

interface SendMessageFormData {
  recipients: string[];
  templateId?: string;
  subject?: string;
  body?: string;
  message?: string;
  scheduledAt?: string;
  leadId?: string;
}

export function CommunicationHub() {
  const [emailTemplates, setEmailTemplates] = useState<EmailTemplate[]>([]);
  const [smsTemplates, setSmsTemplates] = useState<SMSTemplate[]>([]);
  const [communicationLogs, setCommunicationLogs] = useState<CommunicationLog[]>([]);
  const [automationRules, setAutomationRules] = useState<AutomationRule[]>([]);
  const [communicationSequences, setCommunicationSequences] = useState<CommunicationSequence[]>([]);
  const [stats, setStats] = useState<CommunicationStats | null>(null);
  const [leads, setLeads] = useState<LeadWithRelations[]>([]);
  const [selectedTab, setSelectedTab] = useState('templates');
  const [loading, setLoading] = useState(false);
  const [showCreateTemplateDialog, setShowCreateTemplateDialog] = useState(false);
  const [showSendMessageDialog, setShowSendMessageDialog] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<EmailTemplate | SMSTemplate | null>(null);
  const [templateType, setTemplateType] = useState<'email' | 'sms'>('email');

  const [templateFormData, setTemplateFormData] = useState<TemplateFormData>({
    name: '',
    type: '',
    subject: '',
    body: '',
    message: '',
    variables: [],
  });

  const [sendMessageFormData, setSendMessageFormData] = useState<SendMessageFormData>({
    recipients: [],
    templateId: '',
    subject: '',
    body: '',
    message: '',
    scheduledAt: '',
    leadId: '',
  });

  useEffect(() => {
    loadCommunicationData();
    loadLeads();
  }, []);

  const loadCommunicationData = async () => {
    setLoading(true);
    try {
      const [
        emailTemplateList,
        smsTemplateList,
        logs,
        rules,
        sequences,
        communicationStats,
      ] = await Promise.all([
        communicationService.getEmailTemplates(),
        communicationService.getSMSTemplates(),
        communicationService.getCommunicationLogs({ limit: 50 }),
        communicationService.getAutomationRules(),
        communicationService.getCommunicationSequences(),
        communicationService.getCommunicationStats({
          start: format(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
          end: format(new Date(), 'yyyy-MM-dd'),
        }),
      ]);

      setEmailTemplates(emailTemplateList);
      setSmsTemplates(smsTemplateList);
      setCommunicationLogs(logs);
      setAutomationRules(rules);
      setCommunicationSequences(sequences);
      setStats(communicationStats);
    } catch (error) {
      toast.error('Failed to load communication data');
      console.error('Communication load error:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadLeads = async () => {
    try {
      const leadList = await LeadService.getLeads();
      setLeads(leadList);
    } catch (error) {
      toast.error('Failed to load leads');
    }
  };

  const handleCreateTemplate = async () => {
    try {
      setLoading(true);

      if (templateType === 'email') {
        await communicationService.createEmailTemplate(templateFormData);
        await loadCommunicationData();
        toast.success('Email template created successfully');
      } else {
        await communicationService.createSMSTemplate(templateFormData);
        await loadCommunicationData();
        toast.success('SMS template created successfully');
      }

      setShowCreateTemplateDialog(false);
      resetTemplateForm();
    } catch (error) {
      toast.error('Failed to create template');
      console.error('Create template error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    try {
      setLoading(true);

      if (templateType === 'email') {
        await communicationService.sendEmail(sendMessageFormData);
        toast.success('Email sent successfully');
      } else {
        await communicationService.sendSMS(sendMessageFormData);
        toast.success('SMS sent successfully');
      }

      setShowSendMessageDialog(false);
      resetSendMessageForm();
      loadCommunicationData();
    } catch (error) {
      toast.error('Failed to send message');
      console.error('Send message error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleAutomationRule = async (ruleId: string, active: boolean) => {
    try {
      await communicationService.toggleAutomationRule(ruleId, active);
      toast.success(`Automation rule ${active ? 'enabled' : 'disabled'}`);
      loadCommunicationData();
    } catch (error) {
      toast.error('Failed to toggle automation rule');
    }
  };

  const resetTemplateForm = () => {
    setTemplateFormData({
      name: '',
      type: '',
      subject: '',
      body: '',
      message: '',
      variables: [],
    });
    setEditingTemplate(null);
  };

  const resetSendMessageForm = () => {
    setSendMessageFormData({
      recipients: [],
      templateId: '',
      subject: '',
      body: '',
      message: '',
      scheduledAt: '',
      leadId: '',
    });
  };

  const addTemplateVariable = () => {
    setTemplateFormData(prev => ({
      ...prev,
      variables: [
        ...prev.variables,
        { key: '', description: '', required: false, defaultValue: '', type: 'TEXT' }
      ]
    }));
  };

  const updateTemplateVariable = (index: number, field: string, value: any) => {
    setTemplateFormData(prev => ({
      ...prev,
      variables: prev.variables.map((variable, i) =>
        i === index ? { ...variable, [field]: value } : variable
      )
    }));
  };

  const removeTemplateVariable = (index: number) => {
    setTemplateFormData(prev => ({
      ...prev,
      variables: prev.variables.filter((_, i) => i !== index)
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'read': return 'bg-emerald-100 text-emerald-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'bounced': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPercentage = (value: number) => `${value.toFixed(1)}%`;

  const renderTemplatesTab = () => (
    <div className="space-y-6">
      {/* Templates Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Communication Templates</h2>
          <p className="text-gray-600">Manage email and SMS templates for automated communication</p>
        </div>

        <Dialog open={showCreateTemplateDialog} onOpenChange={setShowCreateTemplateDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Template
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Template</DialogTitle>
              <DialogDescription>
                Create a reusable template for email or SMS communication
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Template Type</Label>
                  <Select value={templateType} onValueChange={(value: 'email' | 'sms') => setTemplateType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email Template</SelectItem>
                      <SelectItem value="sms">SMS Template</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Template Category</Label>
                  <Select value={templateFormData.type} onValueChange={(value) =>
                    setTemplateFormData(prev => ({ ...prev, type: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LEAD_CONFIRMATION">Lead Confirmation</SelectItem>
                      <SelectItem value="INSPECTION_SCHEDULED">Inspection Scheduled</SelectItem>
                      <SelectItem value="INSPECTION_REMINDER">Inspection Reminder</SelectItem>
                      <SelectItem value="REPORT_READY">Report Ready</SelectItem>
                      <SelectItem value="QUOTE_FOLLOW_UP">Quote Follow-up</SelectItem>
                      <SelectItem value="THANK_YOU">Thank You</SelectItem>
                      <SelectItem value="CUSTOM">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Template Name</Label>
                <Input
                  placeholder="Enter template name"
                  value={templateFormData.name}
                  onChange={(e) => setTemplateFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              {templateType === 'email' && (
                <div>
                  <Label>Subject Line</Label>
                  <Input
                    placeholder="Enter email subject"
                    value={templateFormData.subject || ''}
                    onChange={(e) => setTemplateFormData(prev => ({ ...prev, subject: e.target.value }))}
                  />
                </div>
              )}

              <div>
                <Label>{templateType === 'email' ? 'Email Body' : 'SMS Message'}</Label>
                <Textarea
                  placeholder={templateType === 'email' ? 'Enter email content...' : 'Enter SMS message...'}
                  rows={templateType === 'email' ? 8 : 4}
                  value={templateType === 'email' ? templateFormData.body || '' : templateFormData.message || ''}
                  onChange={(e) => {
                    const field = templateType === 'email' ? 'body' : 'message';
                    setTemplateFormData(prev => ({ ...prev, [field]: e.target.value }));
                  }}
                />
                {templateType === 'sms' && (
                  <p className="text-xs text-gray-500 mt-1">
                    Character count: {(templateFormData.message || '').length}/160
                  </p>
                )}
              </div>

              {/* Template Variables */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Label>Template Variables</Label>
                  <Button variant="outline" size="sm" onClick={addTemplateVariable}>
                    <Plus className="h-3 w-3 mr-1" />
                    Add Variable
                  </Button>
                </div>

                <div className="space-y-3">
                  {templateFormData.variables.map((variable, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 items-end">
                      <div>
                        <Label className="text-xs">Key</Label>
                        <Input
                          placeholder="{{variable_name}}"
                          value={variable.key}
                          onChange={(e) => updateTemplateVariable(index, 'key', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Description</Label>
                        <Input
                          placeholder="Description"
                          value={variable.description}
                          onChange={(e) => updateTemplateVariable(index, 'description', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Type</Label>
                        <Select
                          value={variable.type}
                          onValueChange={(value) => updateTemplateVariable(index, 'type', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="TEXT">Text</SelectItem>
                            <SelectItem value="DATE">Date</SelectItem>
                            <SelectItem value="NUMBER">Number</SelectItem>
                            <SelectItem value="CURRENCY">Currency</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeTemplateVariable(index)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowCreateTemplateDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateTemplate} disabled={loading}>
                  {loading && <RefreshCw className="h-4 w-4 mr-2 animate-spin" />}
                  Create Template
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Template Tabs */}
      <Tabs defaultValue="email">
        <TabsList>
          <TabsTrigger value="email">Email Templates</TabsTrigger>
          <TabsTrigger value="sms">SMS Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="email">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {emailTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium">{template.name}</h3>
                          <Badge className={template.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                            {template.active ? 'Active' : 'Inactive'}
                          </Badge>
                          <Badge variant="outline">{template.type.replace('_', ' ')}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{template.subject}</p>
                        <p className="text-xs text-gray-500">
                          Last updated: {format(new Date(template.updatedAt), 'MMM d, yyyy')}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="h-3 w-3 mr-1" />
                          Duplicate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sms">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {smsTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium">{template.name}</h3>
                          <Badge className={template.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                            {template.active ? 'Active' : 'Inactive'}
                          </Badge>
                          <Badge variant="outline">{template.type.replace('_', ' ')}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{template.message}</p>
                        <p className="text-xs text-gray-500">
                          Characters: {template.characterCount} |
                          Last updated: {format(new Date(template.updatedAt || ''), 'MMM d, yyyy')}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="h-3 w-3 mr-1" />
                          Duplicate
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderLogsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Communication Logs</h2>
          <p className="text-gray-600">View all communication history and delivery status</p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date/Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Subject/Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {communicationLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="text-sm">
                      {format(new Date(log.createdAt), 'MMM d, yyyy')}
                      <br />
                      <span className="text-gray-500">{format(new Date(log.createdAt), 'h:mm a')}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {log.type === 'EMAIL' ? <Mail className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                      <span className="text-sm">{log.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>{log.recipient}</TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate">
                      {log.subject ? (
                        <>
                          <div className="font-medium text-sm">{log.subject}</div>
                          <div className="text-xs text-gray-600 truncate">{log.content}</div>
                        </>
                      ) : (
                        <div className="text-sm">{log.content}</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(log.status)}>
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-3 w-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderAutomationTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Automation Rules</h2>
          <p className="text-gray-600">Set up automated communication workflows</p>
        </div>

        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Rule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {automationRules.map((rule) => (
          <Card key={rule.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium">{rule.name}</h3>
                  <p className="text-sm text-gray-600">
                    Trigger: {rule.trigger.type.replace('_', ' ')}
                  </p>
                </div>
                <Switch
                  checked={rule.active}
                  onCheckedChange={(checked) => handleToggleAutomationRule(rule.id, checked)}
                />
              </div>

              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Actions:</span>
                  <ul className="mt-1 space-y-1">
                    {rule.actions.map((action, index) => (
                      <li key={index} className="text-gray-600 text-xs">
                        • {action.type.replace('_', ' ')}
                        {action.delay && ` (${action.delay}min delay)`}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>Triggered: {rule.timesTriggered} times</span>
                  <span>Priority: {rule.priority}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStatsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Communication Statistics</h2>
        <p className="text-gray-600">Track performance and engagement metrics</p>
      </div>

      {stats && (
        <>
          {/* Email Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Emails Sent</p>
                    <p className="text-2xl font-bold mt-2">{stats.emails.sent}</p>
                  </div>
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Delivery Rate</p>
                    <p className="text-2xl font-bold mt-2">{formatPercentage(stats.emails.deliveryRate)}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Open Rate</p>
                    <p className="text-2xl font-bold mt-2">{formatPercentage(stats.emails.openRate)}</p>
                  </div>
                  <Eye className="h-5 w-5 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Click Rate</p>
                    <p className="text-2xl font-bold mt-2">{formatPercentage(stats.emails.clickRate)}</p>
                  </div>
                  <Target className="h-5 w-5 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SMS Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">SMS Sent</p>
                    <p className="text-2xl font-bold mt-2">{stats.sms.sent}</p>
                  </div>
                  <MessageSquare className="h-5 w-5 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">SMS Delivery Rate</p>
                    <p className="text-2xl font-bold mt-2">{formatPercentage(stats.sms.deliveryRate)}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Response Rate</p>
                    <p className="text-2xl font-bold mt-2">{formatPercentage(stats.sms.responseRate)}</p>
                  </div>
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Automation Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Automation Performance</CardTitle>
              <CardDescription>Efficiency gains from automated communication</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{stats.automation.rulesTriggered}</p>
                  <p className="text-sm text-gray-600">Rules Triggered</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{stats.automation.timesSaved}h</p>
                  <p className="text-sm text-gray-600">Time Saved</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">${stats.automation.costSaved}</p>
                  <p className="text-sm text-gray-600">Cost Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );

  if (loading && !stats) {
    return (
      <div className="flex items-center justify-center h-96">
        <RefreshCw className="h-8 w-8 animate-spin text-gray-400" />
        <span className="ml-2 text-gray-600">Loading communication hub...</span>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Communication Hub</h1>
          <p className="text-gray-600">Manage templates, automation, and communication workflows</p>
        </div>

        <div className="flex gap-2">
          <Dialog open={showSendMessageDialog} onOpenChange={setShowSendMessageDialog}>
            <DialogTrigger asChild>
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Send Message</DialogTitle>
                <DialogDescription>Send an email or SMS to customers</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <Label>Message Type</Label>
                  <Select value={templateType} onValueChange={(value: 'email' | 'sms') => setTemplateType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Recipients</Label>
                  <Select
                    value={sendMessageFormData.leadId}
                    onValueChange={(value) => {
                      const lead = leads.find(l => l.id === value);
                      if (lead) {
                        setSendMessageFormData(prev => ({
                          ...prev,
                          leadId: value,
                          recipients: [lead.email],
                        }));
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipient" />
                    </SelectTrigger>
                    <SelectContent>
                      {leads.map(lead => (
                        <SelectItem key={lead.id} value={lead.id}>
                          {lead.firstName} {lead.lastName} - {lead.email}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {templateType === 'email' && (
                  <div>
                    <Label>Subject</Label>
                    <Input
                      placeholder="Email subject"
                      value={sendMessageFormData.subject || ''}
                      onChange={(e) => setSendMessageFormData(prev => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>
                )}

                <div>
                  <Label>{templateType === 'email' ? 'Message Body' : 'SMS Message'}</Label>
                  <Textarea
                    placeholder={templateType === 'email' ? 'Email content...' : 'SMS message...'}
                    rows={templateType === 'email' ? 8 : 4}
                    value={templateType === 'email' ? sendMessageFormData.body || '' : sendMessageFormData.message || ''}
                    onChange={(e) => {
                      const field = templateType === 'email' ? 'body' : 'message';
                      setSendMessageFormData(prev => ({ ...prev, [field]: e.target.value }));
                    }}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowSendMessageDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSendMessage} disabled={loading}>
                    {loading && <RefreshCw className="h-4 w-4 mr-2 animate-spin" />}
                    Send Message
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Communication Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="templates">{renderTemplatesTab()}</TabsContent>
        <TabsContent value="logs">{renderLogsTab()}</TabsContent>
        <TabsContent value="automation">{renderAutomationTab()}</TabsContent>
        <TabsContent value="stats">{renderStatsTab()}</TabsContent>
      </Tabs>
      </div>
    </AdminLayout>
  );
}