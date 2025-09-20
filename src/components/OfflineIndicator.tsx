import React from 'react';
import { Wifi, WifiOff, Clock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useServiceWorker } from '@/hooks/useServiceWorker';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface OfflineIndicatorProps {
  className?: string;
  showDetails?: boolean;
}

export function OfflineIndicator({ className = '', showDetails = true }: OfflineIndicatorProps) {
  const {
    isOnline,
    isOfflineMode,
    queuedRequests,
    syncOfflineQueue,
    clearOfflineCache
  } = useServiceWorker();

  if (isOnline && queuedRequests === 0 && !showDetails) {
    return null; // Hide when everything is normal
  }

  const getStatusColor = () => {
    if (!isOnline) return 'bg-red-500 text-white';
    if (queuedRequests > 0) return 'bg-yellow-500 text-black';
    return 'bg-green-500 text-white';
  };

  const getStatusText = () => {
    if (!isOnline) return 'Offline';
    if (queuedRequests > 0) return `${queuedRequests} pending`;
    return 'Online';
  };

  const getStatusIcon = () => {
    if (!isOnline) return <WifiOff className="h-4 w-4" />;
    if (queuedRequests > 0) return <Clock className="h-4 w-4" />;
    return <Wifi className="h-4 w-4" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`${className} flex items-center gap-2 hover:bg-gray-100`}
        >
          <Badge
            variant="secondary"
            className={`${getStatusColor()} flex items-center gap-1 px-2 py-1`}
          >
            {getStatusIcon()}
            <span className="text-xs font-medium">{getStatusText()}</span>
          </Badge>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        <div className="p-3">
          <div className="flex items-center gap-2 mb-2">
            {getStatusIcon()}
            <span className="font-semibold">
              Connection Status: {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>

          {!isOnline && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-red-800 mb-2">
                <strong>Working Offline</strong>
              </p>
              <p className="text-xs text-red-600">
                You can still view cached data and make changes. Everything will sync when your connection returns.
              </p>
            </div>
          )}

          {queuedRequests > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-yellow-800 mb-2">
                <strong>{queuedRequests} Changes Pending Sync</strong>
              </p>
              <p className="text-xs text-yellow-600">
                Your offline changes are queued and will be automatically synchronized when online.
              </p>
            </div>
          )}

          {isOnline && queuedRequests === 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-green-800">
                <strong>All Changes Synced</strong>
              </p>
              <p className="text-xs text-green-600">
                You're online and all data is up to date.
              </p>
            </div>
          )}
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={syncOfflineQueue} disabled={!isOnline || queuedRequests === 0}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Sync Now ({queuedRequests} pending)
        </DropdownMenuItem>

        <DropdownMenuItem onClick={clearOfflineCache}>
          <WifiOff className="h-4 w-4 mr-2" />
          Clear Offline Cache
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <div className="p-3 text-xs text-gray-500">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <strong>Offline Features:</strong>
              <ul className="mt-1 space-y-1">
                <li>• View cached leads</li>
                <li>• Edit lead data</li>
                <li>• Add communications</li>
                <li>• View dashboards</li>
              </ul>
            </div>
            <div>
              <strong>Auto-Sync:</strong>
              <ul className="mt-1 space-y-1">
                <li>• When connection returns</li>
                <li>• Background updates</li>
                <li>• Real-time notifications</li>
                <li>• Data consistency</li>
              </ul>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Compact version for mobile/small spaces
export function OfflineIndicatorCompact({ className = '' }: Pick<OfflineIndicatorProps, 'className'>) {
  const { isOnline, queuedRequests } = useServiceWorker();

  if (isOnline && queuedRequests === 0) {
    return null;
  }

  const getStatusColor = () => {
    if (!isOnline) return 'bg-red-500';
    if (queuedRequests > 0) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusIcon = () => {
    if (!isOnline) return <WifiOff className="h-3 w-3" />;
    if (queuedRequests > 0) return <Clock className="h-3 w-3" />;
    return <Wifi className="h-3 w-3" />;
  };

  return (
    <div className={`${className} flex items-center gap-1`}>
      <div className={`${getStatusColor()} rounded-full p-1 text-white`}>
        {getStatusIcon()}
      </div>
      {queuedRequests > 0 && (
        <span className="text-xs font-medium text-gray-600">
          {queuedRequests}
        </span>
      )}
    </div>
  );
}

// Hook for components that need to react to offline state
export function useOfflineStatus() {
  const { isOnline, isOfflineMode, queuedRequests } = useServiceWorker();

  return {
    isOnline,
    isOfflineMode,
    queuedRequests,
    isDataStale: queuedRequests > 0 || isOfflineMode,
    canSync: isOnline && queuedRequests > 0
  };
}