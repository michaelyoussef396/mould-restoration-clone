/**
 * Inspection Detail View
 *
 * Displays completed inspection form data in a read-only format
 * Accessible from Kanban board and Calendar view
 */

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  MapPin,
  User,
  Calendar,
  DollarSign,
  ThermometerSun,
  Droplets,
  Home,
  FileText,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function InspectionDetail() {
  const { inspectionId } = useParams<{ inspectionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [inspection, setInspection] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadInspection();
  }, [inspectionId]);

  const loadInspection = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3001/api/inspections/${inspectionId}/full`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        },
      });

      if (!response.ok) throw new Error('Failed to load inspection');

      const result = await response.json();
      setInspection(result.data);
    } catch (error) {
      console.error('Load inspection error:', error);
      toast({
        title: 'Error',
        description: 'Failed to load inspection details',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  if (!inspection) {
    return (
      <AdminLayout>
        <div className="max-w-2xl mx-auto py-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">Inspection Not Found</p>
              <p className="text-gray-600 mb-4">The inspection you're looking for doesn't exist or has been deleted.</p>
              <Button onClick={() => navigate('/admin/inspections')}>
                Back to Inspections
              </Button>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    );
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-AU', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { color: string; label: string }> = {
      SCHEDULED: { color: 'bg-blue-100 text-blue-700', label: 'Scheduled' },
      IN_PROGRESS: { color: 'bg-yellow-100 text-yellow-700', label: 'In Progress' },
      COMPLETED: { color: 'bg-green-100 text-green-700', label: 'Completed' },
      CANCELLED: { color: 'bg-red-100 text-red-700', label: 'Cancelled' },
    };
    const variant = variants[status] || variants.SCHEDULED;
    return <Badge className={variant.color}>{variant.label}</Badge>;
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/admin/inspections')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Inspections
          </Button>
          <div className="flex items-center gap-2">
            {getStatusBadge(inspection.status)}
            {inspection.jobNumber && (
              <Badge variant="outline">{inspection.jobNumber}</Badge>
            )}
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Inspection Details</h1>
          <p className="text-gray-600">
            {inspection.lead?.firstName} {inspection.lead?.lastName} • {formatDate(inspection.scheduledAt)}
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">{inspection.address || 'Not specified'}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Inspector</p>
                  <p className="font-medium">{inspection.inspector?.name || 'Not assigned'}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Total Cost</p>
                  <p className="font-medium text-lg">
                    ${inspection.totalCost?.toFixed(2) || '0.00'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Property Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Property Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Property Occupation</p>
                <p className="font-medium">{inspection.propertyOccupation || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dwelling Type</p>
                <p className="font-medium">{inspection.dwellingType || 'Not specified'}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Area Assessments */}
        {inspection.areas && inspection.areas.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Area Assessments ({inspection.areas.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {inspection.areas.map((area: any, index: number) => (
                <div key={area.id} className="space-y-3">
                  {index > 0 && <Separator />}
                  <h3 className="font-semibold text-lg">{area.areaName}</h3>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <ThermometerSun className="h-4 w-4 text-orange-500" />
                      <div>
                        <p className="text-sm text-gray-500">Temperature</p>
                        <p className="font-medium">{area.temperature}°C</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <div>
                        <p className="text-sm text-gray-500">Humidity</p>
                        <p className="font-medium">{area.humidity}%</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-cyan-500" />
                      <div>
                        <p className="text-sm text-gray-500">Dew Point</p>
                        <p className="font-medium">{area.dewPoint?.toFixed(1)}°C</p>
                      </div>
                    </div>
                  </div>

                  {area.mouldVisibility && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Mould Visibility</p>
                      <div className="flex flex-wrap gap-2">
                        {JSON.parse(area.mouldVisibility).map((location: string) => (
                          <Badge key={location} variant="outline">{location}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {area.commentsEdited && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Comments</p>
                      <p className="text-sm bg-gray-50 p-3 rounded-md">{area.commentsEdited}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <p className="text-sm text-gray-500">Job Time</p>
                      <p className="font-medium">{area.jobTime} minutes</p>
                    </div>
                    {area.demolitionRequired && (
                      <div>
                        <p className="text-sm text-gray-500">Demolition Time</p>
                        <p className="font-medium">{area.demolitionTime} minutes</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Outdoor Conditions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ThermometerSun className="h-5 w-5 mr-2" />
              Outdoor Conditions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Temperature</p>
                <p className="font-medium text-lg">{inspection.outdoorTemperature}°C</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="font-medium text-lg">{inspection.outdoorHumidity}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dew Point</p>
                <p className="font-medium text-lg">{inspection.outdoorDewPoint?.toFixed(1)}°C</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost Breakdown */}
        {inspection.status === 'COMPLETED' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Cost Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Labour Cost</span>
                <span className="font-medium">${inspection.labourCost?.toFixed(2) || '0.00'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Equipment Cost</span>
                <span className="font-medium">${inspection.equipmentCost?.toFixed(2) || '0.00'}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${inspection.subtotal?.toFixed(2) || '0.00'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GST (10%)</span>
                <span className="font-medium">${inspection.gst?.toFixed(2) || '0.00'}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Total Cost</span>
                <span className="font-bold text-blue-600">${inspection.totalCost?.toFixed(2) || '0.00'}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={() => navigate(`/mobile/inspection/${inspectionId}`)}>
            <FileText className="h-4 w-4 mr-2" />
            Edit Inspection
          </Button>
          <Button onClick={() => window.print()}>
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Print Report
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
