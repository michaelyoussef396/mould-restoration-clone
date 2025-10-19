/**
 * Section 5: Outdoor Information
 *
 * Environmental readings (temp, humidity, dew point) and exterior photos
 * - 4 fixed photos: Front door, front house, mailbox, street
 * - Optional: Direction photos (unlimited when enabled)
 */

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { CloudSun, Camera, X, AlertCircle, RefreshCw } from 'lucide-react';

interface OutdoorSectionProps {
  inspectionData: any;
  updateData: (updates: any) => void;
  inspectionId: string;
}

export function OutdoorSection({ inspectionData, updateData, inspectionId }: OutdoorSectionProps) {
  const [dewPoint, setDewPoint] = useState<number | null>(null);
  const [isManualDewPoint, setIsManualDewPoint] = useState(false);

  // Calculate dew point whenever temp or humidity changes (only if not manually overridden)
  useEffect(() => {
    // Skip auto-calculation if user has manually set the dew point
    if (isManualDewPoint) return;

    const temp = inspectionData.outdoorTemperature;
    const humidity = inspectionData.outdoorHumidity;

    if (temp !== null && temp !== undefined && humidity !== null && humidity !== undefined) {
      const calculated = calculateDewPoint(temp, humidity);
      setDewPoint(calculated);

      // Auto-update dew point in parent data
      if (calculated !== inspectionData.outdoorDewPoint) {
        handleUpdate('outdoorDewPoint', calculated);
      }
    } else {
      setDewPoint(null);
    }
  }, [inspectionData.outdoorTemperature, inspectionData.outdoorHumidity, isManualDewPoint]);

  // Sync local dew point state with inspection data on mount or when data changes externally
  useEffect(() => {
    if (inspectionData.outdoorDewPoint !== null && inspectionData.outdoorDewPoint !== undefined) {
      setDewPoint(inspectionData.outdoorDewPoint);
    }
  }, []);

  const handleUpdate = async (field: string, value: any) => {
    updateData({ [field]: value });

    // API call to update outdoor info
    try {
      await fetch(`http://localhost:3001/api/inspections/${inspectionId}/outdoor`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });
    } catch (error) {
      console.error('Failed to update outdoor info:', error);
    }
  };

  const handlePhotoCapture = async (photoType: string, file: File) => {
    try {
      // Compress image before upload
      const compressed = await compressImage(file);

      // Upload photo
      const formData = new FormData();
      formData.append('photo', compressed);
      formData.append('section', 'outdoor');
      formData.append('photoType', photoType);

      const response = await fetch(`http://localhost:3001/api/inspections/${inspectionId}/photos`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        // Update photo URL in inspection data
        handleUpdate(photoType, result.data.url);
      }
    } catch (error) {
      console.error('Photo upload error:', error);
    }
  };

  const handleDirectionPhotoCapture = async (file: File) => {
    try {
      const compressed = await compressImage(file);

      const formData = new FormData();
      formData.append('photo', compressed);
      formData.append('section', 'outdoor');
      formData.append('photoType', 'direction');

      const response = await fetch(`http://localhost:3001/api/inspections/${inspectionId}/photos`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();

        // Add to direction photos array
        const currentPhotos = inspectionData.directionPhotos
          ? JSON.parse(inspectionData.directionPhotos)
          : [];
        currentPhotos.push(result.data.url);

        handleUpdate('directionPhotos', JSON.stringify(currentPhotos));
      }
    } catch (error) {
      console.error('Direction photo upload error:', error);
    }
  };

  const removeDirectionPhoto = (index: number) => {
    const currentPhotos = inspectionData.directionPhotos
      ? JSON.parse(inspectionData.directionPhotos)
      : [];
    currentPhotos.splice(index, 1);
    handleUpdate('directionPhotos', JSON.stringify(currentPhotos));
  };

  const directionPhotos = inspectionData.directionPhotos
    ? JSON.parse(inspectionData.directionPhotos)
    : [];

  return (
    <div className="space-y-4">
      {/* Environmental Readings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <CloudSun className="h-5 w-5 mr-2 text-blue-600" />
            Outdoor Conditions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Temperature */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Temperature (°C)</Label>
            <Input
              type="number"
              step="0.1"
              value={inspectionData.outdoorTemperature || ''}
              onChange={(e) => handleUpdate('outdoorTemperature', parseFloat(e.target.value) || null)}
              placeholder="e.g., 22.5"
              className="text-lg"
            />
          </div>

          {/* Humidity */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Humidity (%)</Label>
            <Input
              type="number"
              step="0.1"
              value={inspectionData.outdoorHumidity || ''}
              onChange={(e) => handleUpdate('outdoorHumidity', parseFloat(e.target.value) || null)}
              placeholder="e.g., 65.0"
              className="text-lg"
            />
          </div>

          {/* Dew Point (Auto-calculated, but editable) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">
                Dew Point (°C)
                <span className="ml-2 text-xs text-gray-500">
                  {isManualDewPoint ? 'Manual' : 'Auto-calculated'}
                </span>
              </Label>
              {isManualDewPoint && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsManualDewPoint(false);
                    // Trigger recalculation
                    const temp = inspectionData.outdoorTemperature;
                    const humidity = inspectionData.outdoorHumidity;
                    if (temp !== null && temp !== undefined && humidity !== null && humidity !== undefined) {
                      const calculated = calculateDewPoint(temp, humidity);
                      setDewPoint(calculated);
                      handleUpdate('outdoorDewPoint', calculated);
                    }
                  }}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Auto-calc
                </Button>
              )}
            </div>
            <Input
              type="number"
              step="0.1"
              value={dewPoint !== null ? dewPoint : ''}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setDewPoint(value);
                  setIsManualDewPoint(true);
                  handleUpdate('outdoorDewPoint', value);
                }
              }}
              placeholder="Auto-calculated"
              className={`text-lg font-semibold ${isManualDewPoint ? 'bg-blue-50 border-blue-300' : 'bg-gray-50'}`}
            />
            {dewPoint !== null && dewPoint > 15 && (
              <div className="flex items-start gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                High dew point indicates moisture-prone conditions
              </div>
            )}
          </div>

          {/* Comments */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Comments (Optional)</Label>
            <Textarea
              value={inspectionData.outdoorComments || ''}
              onChange={(e) => handleUpdate('outdoorComments', e.target.value)}
              placeholder="Any observations about outdoor conditions..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Fixed Exterior Photos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Exterior Photos (4 Required)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <PhotoCaptureField
            label="Front Door Photo"
            photoUrl={inspectionData.frontDoorPhoto}
            onCapture={(file) => handlePhotoCapture('frontDoorPhoto', file)}
            onRemove={() => handleUpdate('frontDoorPhoto', null)}
          />

          <PhotoCaptureField
            label="Front House Photo"
            photoUrl={inspectionData.frontHousePhoto}
            onCapture={(file) => handlePhotoCapture('frontHousePhoto', file)}
            onRemove={() => handleUpdate('frontHousePhoto', null)}
          />

          <PhotoCaptureField
            label="Mailbox Photo"
            photoUrl={inspectionData.mailboxPhoto}
            onCapture={(file) => handlePhotoCapture('mailboxPhoto', file)}
            onRemove={() => handleUpdate('mailboxPhoto', null)}
          />

          <PhotoCaptureField
            label="Street Photo"
            photoUrl={inspectionData.streetPhoto}
            onCapture={(file) => handlePhotoCapture('streetPhoto', file)}
            onRemove={() => handleUpdate('streetPhoto', null)}
          />
        </CardContent>
      </Card>

      {/* Direction Photos (Optional Section) */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Direction Photos (Optional)</CardTitle>
            <Switch
              checked={inspectionData.directionPhotosEnabled || false}
              onCheckedChange={(enabled) => handleUpdate('directionPhotosEnabled', enabled)}
            />
          </div>
        </CardHeader>
        {inspectionData.directionPhotosEnabled && (
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              Add photos from different directions around the property (unlimited)
            </p>

            {/* Photo Grid */}
            {directionPhotos.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {directionPhotos.map((url: string, idx: number) => (
                  <div key={idx} className="relative aspect-square">
                    <img
                      src={url}
                      alt={`Direction ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeDirectionPhoto(idx)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full shadow-lg"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Add Direction Photo */}
            <Button
              type="button"
              variant="outline"
              className="w-full min-h-[44px]"
            >
              <label className="flex items-center gap-2 cursor-pointer w-full justify-center">
                <Camera className="w-5 h-5" />
                <span>Add Direction Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleDirectionPhotoCapture(file);
                  }}
                  className="hidden"
                />
              </label>
            </Button>

            <p className="text-xs text-gray-500 text-center">
              {directionPhotos.length} photo{directionPhotos.length !== 1 ? 's' : ''} added
            </p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

// Photo Capture Field Component
function PhotoCaptureField({
  label,
  photoUrl,
  onCapture,
  onRemove,
}: {
  label: string;
  photoUrl?: string;
  onCapture: (file: File) => void;
  onRemove: () => void;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>

      {photoUrl ? (
        <div className="relative">
          <img
            src={photoUrl}
            alt={label}
            className="w-full h-48 object-cover rounded-lg border"
          />
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          className="w-full min-h-[100px] border-dashed"
        >
          <label className="flex flex-col items-center gap-2 cursor-pointer w-full">
            <Camera className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-600">Tap to capture</span>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onCapture(file);
              }}
              className="hidden"
            />
          </label>
        </Button>
      )}
    </div>
  );
}

// Dew Point Calculation (Magnus formula)
function calculateDewPoint(temperature: number, humidity: number): number {
  const a = 17.27;
  const b = 237.7;

  const alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100);
  const dewPoint = (b * alpha) / (a - alpha);

  return Math.round(dewPoint * 10) / 10; // Round to 1 decimal
}

// Image Compression Helper
async function compressImage(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        let { width, height } = img;
        const maxWidth = 1920;
        const maxHeight = 1080;

        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Compression failed'));
            }
          },
          'image/jpeg',
          0.8
        );
      };

      img.onerror = reject;
      img.src = e.target?.result as string;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
