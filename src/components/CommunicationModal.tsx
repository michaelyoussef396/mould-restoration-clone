import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Clock,
  Send,
  User
} from 'lucide-react';
import { LeadWithRelations } from '@/lib/services/leadService';

interface CommunicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lead: LeadWithRelations | null;
  onCommunicationAdded: () => void;
}

interface CommunicationData {
  type: 'CALL' | 'EMAIL' | 'SMS' | 'MEETING' | 'NOTE_ADDED';
  description: string;
  notes?: string;
  scheduledAt?: string;
}

export function CommunicationModal({ open, onOpenChange, lead, onCommunicationAdded }: CommunicationModalProps) {
  const [activeTab, setActiveTab] = useState('quick');
  const [isLoading, setIsLoading] = useState(false);
  const [communicationData, setCommunicationData] = useState<CommunicationData>({
    type: 'CALL',
    description: '',
    notes: '',
  });

  const handleQuickAction = async (type: CommunicationData['type'], description: string) => {
    if (!lead) return;

    setIsLoading(true);
    try {
      // TODO: Implement API call to add activity
      console.log('Adding communication:', { type, description, leadId: lead.id });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      onCommunicationAdded();
      onOpenChange(false);
    } catch (error) {
      console.error('Failed to add communication:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDetailedSubmit = async () => {
    if (!lead || !communicationData.description.trim()) return;

    setIsLoading(true);
    try {
      // TODO: Implement API call to add activity
      console.log('Adding detailed communication:', { ...communicationData, leadId: lead.id });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      onCommunicationAdded();
      onOpenChange(false);
      setCommunicationData({
        type: 'CALL',
        description: '',
        notes: '',
      });
    } catch (error) {
      console.error('Failed to add communication:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Communication - {lead.firstName} {lead.lastName}</DialogTitle>
          <DialogDescription>
            Record communication activity for this lead
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quick">Quick Actions</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Entry</TabsTrigger>
          </TabsList>

          <TabsContent value="quick" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-20 flex-col space-y-2"
                onClick={() => handleQuickAction('CALL', `Called ${lead.firstName} ${lead.lastName}`)}
                disabled={isLoading}
              >
                <Phone className="h-6 w-6" />
                <span>Phone Call</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex-col space-y-2"
                onClick={() => handleQuickAction('EMAIL', `Sent email to ${lead.firstName} ${lead.lastName}`)}
                disabled={isLoading}
              >
                <Mail className="h-6 w-6" />
                <span>Send Email</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex-col space-y-2"
                onClick={() => handleQuickAction('SMS', `Sent SMS to ${lead.firstName} ${lead.lastName}`)}
                disabled={isLoading}
              >
                <MessageSquare className="h-6 w-6" />
                <span>Send SMS</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex-col space-y-2"
                onClick={() => handleQuickAction('MEETING', `Scheduled meeting with ${lead.firstName} ${lead.lastName}`)}
                disabled={isLoading}
              >
                <Calendar className="h-6 w-6" />
                <span>Schedule Meeting</span>
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Recent Communications</CardTitle>
              </CardHeader>
              <CardContent>
                {lead.activities && lead.activities.length > 0 ? (
                  <div className="space-y-2">
                    {lead.activities.slice(0, 3).map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3 text-sm">
                        <div className="h-2 w-2 bg-blue-600 rounded-full" />
                        <div className="flex-1">
                          <p className="font-medium">{activity.description}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(activity.createdAt).toLocaleDateString()} - {activity.user.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No previous communications</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="type">Communication Type</Label>
                <Select
                  value={communicationData.type}
                  onValueChange={(value: CommunicationData['type']) =>
                    setCommunicationData({ ...communicationData, type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CALL">Phone Call</SelectItem>
                    <SelectItem value="EMAIL">Email</SelectItem>
                    <SelectItem value="SMS">SMS</SelectItem>
                    <SelectItem value="MEETING">Meeting</SelectItem>
                    <SelectItem value="NOTE_ADDED">General Note</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Input
                  id="description"
                  value={communicationData.description}
                  onChange={(e) => setCommunicationData({ ...communicationData, description: e.target.value })}
                  placeholder="Brief description of the communication"
                />
              </div>

              <div>
                <Label htmlFor="notes">Detailed Notes</Label>
                <Textarea
                  id="notes"
                  value={communicationData.notes}
                  onChange={(e) => setCommunicationData({ ...communicationData, notes: e.target.value })}
                  rows={4}
                  placeholder="Add detailed notes about the communication..."
                />
              </div>

              {(communicationData.type === 'MEETING' || communicationData.type === 'CALL') && (
                <div>
                  <Label htmlFor="scheduledAt">Scheduled Date & Time</Label>
                  <Input
                    id="scheduledAt"
                    type="datetime-local"
                    value={communicationData.scheduledAt}
                    onChange={(e) => setCommunicationData({ ...communicationData, scheduledAt: e.target.value })}
                  />
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          {activeTab === 'detailed' && (
            <Button
              onClick={handleDetailedSubmit}
              disabled={isLoading || !communicationData.description.trim()}
            >
              {isLoading ? 'Adding...' : 'Add Communication'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}