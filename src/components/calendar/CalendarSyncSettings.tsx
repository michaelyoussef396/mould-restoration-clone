import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Calendar,
  Sync,
  Settings,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Unlink,
  Loader2,
  Clock,
  Activity,
  Shield,
  RefreshCw,
} from 'lucide-react';
import ExternalCalendarService, { CalendarProvider, SyncSettings } from '@/lib/services/externalCalendarService';
import { toast } from '@/hooks/use-toast';

interface CalendarSyncSettingsProps {
  onSettingsChange?: (settings: SyncSettings) => void;
}

export function CalendarSyncSettings({ onSettingsChange }: CalendarSyncSettingsProps) {
  const [providers, setProviders] = useState<CalendarProvider[]>([]);
  const [syncSettings, setSyncSettings] = useState<SyncSettings | null>(null);
  const [syncStatus, setSyncStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [showDisconnectDialog, setShowDisconnectDialog] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [providersData, settingsData, statusData] = await Promise.all([
        ExternalCalendarService.getConnectedProviders(),
        ExternalCalendarService.getSyncSettings(),
        ExternalCalendarService.getSyncStatus(),
      ]);

      setProviders(providersData);
      setSyncSettings(settingsData);
      setSyncStatus(statusData);
    } catch (error) {
      console.error('Error loading calendar sync data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load calendar sync settings.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Connect to external calendar
  const handleConnect = (providerType: 'google' | 'outlook') => {
    try {
      const authUrl = ExternalCalendarService.getOAuthUrl(providerType);
      window.open(authUrl, 'calendar-auth', 'width=600,height=700,scrollbars=yes,resizable=yes');

      // Listen for OAuth callback
      const handleMessage = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;

        if (event.data.type === 'CALENDAR_AUTH_SUCCESS') {
          window.removeEventListener('message', handleMessage);
          loadData(); // Refresh data after successful connection
          toast({
            title: 'Calendar Connected',
            description: `Successfully connected to ${providerType === 'google' ? 'Google' : 'Outlook'} Calendar.`,
          });
        } else if (event.data.type === 'CALENDAR_AUTH_ERROR') {
          window.removeEventListener('message', handleMessage);
          toast({
            title: 'Connection Failed',
            description: event.data.error || 'Failed to connect to calendar.',
            variant: 'destructive',
          });
        }
      };

      window.addEventListener('message', handleMessage);

      // Cleanup listener after 5 minutes
      setTimeout(() => {
        window.removeEventListener('message', handleMessage);
      }, 5 * 60 * 1000);

    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to initiate calendar connection.',
        variant: 'destructive',
      });
    }
  };

  // Disconnect calendar provider
  const handleDisconnect = async (providerType: string) => {
    try {
      await ExternalCalendarService.disconnectProvider(providerType);
      setProviders(prev => prev.filter(p => p.type !== providerType));
      setShowDisconnectDialog(null);

      toast({
        title: 'Calendar Disconnected',
        description: `Successfully disconnected from ${providerType} Calendar.`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to disconnect calendar.',
        variant: 'destructive',
      });
    }
  };

  // Update sync settings
  const updateSyncSettings = async (updates: Partial<SyncSettings>) => {
    if (!syncSettings) return;

    try {
      const updatedSettings = await ExternalCalendarService.updateSyncSettings(updates);
      setSyncSettings(updatedSettings);
      onSettingsChange?.(updatedSettings);

      toast({
        title: 'Settings Updated',
        description: 'Calendar sync settings have been saved.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update sync settings.',
        variant: 'destructive',
      });
    }
  };

  // Trigger manual sync
  const handleManualSync = async (providerType: 'google' | 'outlook') => {
    if (!syncSettings) return;

    try {
      setIsSyncing(true);
      const result = await ExternalCalendarService.performFullSync(providerType, syncSettings);

      toast({
        title: 'Sync Completed',
        description: `Imported: ${result.imported}, Exported: ${result.exported}, Conflicts: ${result.conflicts.length}`,
      });

      // Refresh sync status
      const statusData = await ExternalCalendarService.getSyncStatus();
      setSyncStatus(statusData);
    } catch (error) {
      toast({
        title: 'Sync Failed',
        description: 'Failed to sync with external calendar.',
        variant: 'destructive',
      });
    } finally {
      setIsSyncing(false);
    }
  };

  // Get provider status icon
  const getProviderStatusIcon = (provider: CalendarProvider) => {
    if (!provider.isConnected) {
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
    return <CheckCircle className="h-4 w-4 text-green-500" />;
  };

  // Get provider status badge
  const getProviderStatusBadge = (provider: CalendarProvider) => {
    if (!provider.isConnected) {
      return <Badge variant="destructive">Disconnected</Badge>;
    }

    const lastSync = provider.lastSync ? new Date(provider.lastSync) : null;
    const isRecent = lastSync && (new Date().getTime() - lastSync.getTime()) < 60 * 60 * 1000; // 1 hour

    return (
      <Badge variant={isRecent ? "default" : "secondary"}>
        {isRecent ? 'Recently Synced' : 'Connected'}
      </Badge>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
        <span className="ml-2 text-gray-600">Loading calendar settings...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Connected Providers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span>External Calendar Connections</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Google Calendar */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">G</span>
              </div>
              <div>
                <h3 className="font-medium">Google Calendar</h3>
                <p className="text-sm text-gray-600">Sync with Google Workspace</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {providers.find(p => p.type === 'google') ? (
                <>
                  {getProviderStatusIcon(providers.find(p => p.type === 'google')!)}
                  {getProviderStatusBadge(providers.find(p => p.type === 'google')!)}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleManualSync('google')}
                    disabled={isSyncing}
                  >
                    {isSyncing ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : (
                      <RefreshCw className="h-3 w-3" />
                    )}
                    <span className="ml-1">Sync</span>
                  </Button>
                  <AlertDialog open={showDisconnectDialog === 'google'} onOpenChange={() => setShowDisconnectDialog(null)}>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setShowDisconnectDialog('google')}>
                        <Unlink className="h-3 w-3 mr-1" />
                        Disconnect
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Disconnect Google Calendar?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will stop syncing your bookings with Google Calendar. You can reconnect at any time.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDisconnect('google')}>
                          Disconnect
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </>
              ) : (
                <Button onClick={() => handleConnect('google')}>
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Connect
                </Button>
              )}
            </div>
          </div>

          {/* Outlook Calendar */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">O</span>
              </div>
              <div>
                <h3 className="font-medium">Outlook Calendar</h3>
                <p className="text-sm text-gray-600">Sync with Microsoft 365</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {providers.find(p => p.type === 'outlook') ? (
                <>
                  {getProviderStatusIcon(providers.find(p => p.type === 'outlook')!)}
                  {getProviderStatusBadge(providers.find(p => p.type === 'outlook')!)}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleManualSync('outlook')}
                    disabled={isSyncing}
                  >
                    {isSyncing ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : (
                      <RefreshCw className="h-3 w-3" />
                    )}
                    <span className="ml-1">Sync</span>
                  </Button>
                  <AlertDialog open={showDisconnectDialog === 'outlook'} onOpenChange={() => setShowDisconnectDialog(null)}>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setShowDisconnectDialog('outlook')}>
                        <Unlink className="h-3 w-3 mr-1" />
                        Disconnect
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Disconnect Outlook Calendar?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will stop syncing your bookings with Outlook Calendar. You can reconnect at any time.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDisconnect('outlook')}>
                          Disconnect
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </>
              ) : (
                <Button onClick={() => handleConnect('outlook')}>
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Connect
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sync Settings */}
      {syncSettings && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-blue-600" />
              <span>Sync Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Auto Sync */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">Automatic Sync</h3>
                <p className="text-sm text-gray-600">Automatically sync bookings with external calendars</p>
              </div>
              <Switch
                checked={syncSettings.autoSync}
                onCheckedChange={(checked) => updateSyncSettings({ autoSync: checked })}
              />
            </div>

            <Separator />

            {/* Sync Direction */}
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Sync Direction</h3>
                <p className="text-sm text-gray-600">Choose how data flows between calendars</p>
              </div>
              <Select
                value={syncSettings.syncDirection}
                onValueChange={(value) => updateSyncSettings({ syncDirection: value as any })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="import">Import Only (External → CRM)</SelectItem>
                  <SelectItem value="export">Export Only (CRM → External)</SelectItem>
                  <SelectItem value="bidirectional">Bidirectional (Both Ways)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Conflict Resolution */}
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Conflict Resolution</h3>
                <p className="text-sm text-gray-600">How to handle scheduling conflicts</p>
              </div>
              <Select
                value={syncSettings.conflictResolution}
                onValueChange={(value) => updateSyncSettings({ conflictResolution: value as any })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Prefer CRM Data</SelectItem>
                  <SelectItem value="external">Prefer External Calendar</SelectItem>
                  <SelectItem value="manual">Manual Resolution</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Sync Frequency */}
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Sync Frequency</h3>
                <p className="text-sm text-gray-600">How often to perform automatic sync</p>
              </div>
              <Select
                value={syncSettings.syncFrequency.toString()}
                onValueChange={(value) => updateSyncSettings({ syncFrequency: parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">Every 15 minutes</SelectItem>
                  <SelectItem value="30">Every 30 minutes</SelectItem>
                  <SelectItem value="60">Every hour</SelectItem>
                  <SelectItem value="240">Every 4 hours</SelectItem>
                  <SelectItem value="1440">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Privacy Settings */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Include Private Events</span>
                </h3>
                <p className="text-sm text-gray-600">Import personal events from external calendars</p>
              </div>
              <Switch
                checked={syncSettings.includePrivateEvents}
                onCheckedChange={(checked) => updateSyncSettings({ includePrivateEvents: checked })}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sync Status */}
      {syncStatus && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-600" />
              <span>Sync Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{syncStatus.stats.totalBookings}</div>
                <div className="text-sm text-gray-600">Total Bookings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{syncStatus.stats.syncedBookings}</div>
                <div className="text-sm text-gray-600">Synced</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{syncStatus.stats.pendingSync}</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{syncStatus.stats.conflicts}</div>
                <div className="text-sm text-gray-600">Conflicts</div>
              </div>
            </div>

            {syncStatus.lastSync && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">
                    Last sync: {new Date(syncStatus.lastSync).toLocaleString()}
                  </span>
                </div>
                {syncStatus.nextSync && (
                  <div className="flex items-center space-x-2 text-sm mt-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">
                      Next sync: {new Date(syncStatus.nextSync).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            )}

            {syncStatus.errors && syncStatus.errors.length > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Recent Errors</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  {syncStatus.errors.slice(0, 3).map((error: string, index: number) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default CalendarSyncSettings;