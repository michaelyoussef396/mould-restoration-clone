/**
 * Section 4: Subfloor Assessment (Optional)
 *
 * Toggle-able section for subfloor inspections
 * Includes observations, AI comments, landscape type, photos (max 20),
 * sanitation/racking flags, treatment time, and moisture readings
 */

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Camera,
  X,
  Plus,
  Trash2,
  Sparkles,
  Loader2,
  AlertCircle,
  Home,
} from 'lucide-react';

interface SubfloorSectionProps {
  inspectionData: any;
  updateData: (updates: any) => void;
  inspectionId: string;
}

interface SubfloorReading {
  id?: string;
  title: string;
  photos: string[];
  orderIndex: number;
}

const LANDSCAPE_OPTIONS = [
  { value: 'EVEN', label: 'Level/Even' },
  { value: 'SLOPING', label: 'Sloping' },
];

export function SubfloorSection({
  inspectionData,
  updateData,
  inspectionId,
}: SubfloorSectionProps) {
  const [isGeneratingComments, setIsGeneratingComments] = useState(false);
  const [commentError, setCommentError] = useState<string | null>(null);
  const [uploadingPhotoIndex, setUploadingPhotoIndex] = useState<number | null>(null);

  const handleUpdate = async (field: string, value: any) => {
    updateData({ [field]: value });

    try {
      await fetch(`http://localhost:3001/api/inspections/${inspectionId}/subfloor`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });
    } catch (error) {
      console.error('Failed to update subfloor:', error);
    }
  };

  const handleToggle = (enabled: boolean) => {
    handleUpdate('subfloorEnabled', enabled);
    if (!enabled) {
      // Reset all subfloor fields
      updateData({
        subfloorObservations: '',
        subfloorLandscape: '',
        subfloorCommentsGenerated: '',
        subfloorCommentsEdited: '',
        subfloorPhotos: [],
        subfloorSanitationRequired: false,
        subfloorRackingRequired: false,
        subfloorTreatmentTime: 0,
        subfloorReadings: [],
      });
    }
  };

  const handleGenerateComments = async () => {
    setIsGeneratingComments(true);
    setCommentError(null);

    try {
      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/subfloor/generate-comments`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            observations: inspectionData.subfloorObservations,
            landscape: inspectionData.subfloorLandscape,
            sanitationRequired: inspectionData.subfloorSanitationRequired,
            rackingRequired: inspectionData.subfloorRackingRequired,
          }),
        }
      );

      if (!response.ok) throw new Error('Generation failed');

      const result = await response.json();
      handleUpdate('subfloorCommentsGenerated', result.data.comments);
      handleUpdate('subfloorCommentsEdited', result.data.comments);
    } catch (err) {
      setCommentError('Failed to generate comments. Try again or write manually.');
    } finally {
      setIsGeneratingComments(false);
    }
  };

  const handlePhotoUpload = async (file: File) => {
    if ((inspectionData.subfloorPhotos?.length || 0) >= 20) {
      alert('Maximum 20 photos allowed');
      return;
    }

    const photoIndex = (inspectionData.subfloorPhotos?.length || 0);
    setUploadingPhotoIndex(photoIndex);

    try {
      const compressed = await compressImage(file);

      const formData = new FormData();
      formData.append('photo', compressed, 'subfloor-photo.jpg');
      formData.append('photoType', 'subfloor');

      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/subfloor/photos`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        const updatedPhotos = [...(inspectionData.subfloorPhotos || []), result.data.url];
        handleUpdate('subfloorPhotos', updatedPhotos);
      }
    } catch (error) {
      console.error('Photo upload failed:', error);
      alert('Failed to upload photo');
    } finally {
      setUploadingPhotoIndex(null);
    }
  };

  const handlePhotoRemove = (index: number) => {
    const updatedPhotos = (inspectionData.subfloorPhotos || []).filter((_: any, i: number) => i !== index);
    handleUpdate('subfloorPhotos', updatedPhotos);
  };

  const handleAddReading = () => {
    const readings = inspectionData.subfloorReadings || [];
    const newReading: SubfloorReading = {
      title: '',
      photos: [],
      orderIndex: readings.length,
    };
    handleUpdate('subfloorReadings', [...readings, newReading]);
  };

  const handleUpdateReading = (index: number, updates: Partial<SubfloorReading>) => {
    const readings = [...(inspectionData.subfloorReadings || [])];
    readings[index] = { ...readings[index], ...updates };
    handleUpdate('subfloorReadings', readings);
  };

  const handleRemoveReading = (index: number) => {
    const readings = (inspectionData.subfloorReadings || []).filter((_: any, i: number) => i !== index);
    handleUpdate('subfloorReadings', readings);
  };

  const handleReadingPhotoUpload = async (readingIndex: number, file: File) => {
    try {
      const compressed = await compressImage(file);

      const formData = new FormData();
      formData.append('photo', compressed, 'subfloor-reading.jpg');
      formData.append('readingIndex', readingIndex.toString());

      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/subfloor/reading-photos`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        const reading = inspectionData.subfloorReadings[readingIndex];
        handleUpdateReading(readingIndex, {
          photos: [...(reading.photos || []), result.data.url],
        });
      }
    } catch (error) {
      console.error('Photo upload failed:', error);
      alert('Failed to upload photo');
    }
  };

  const handleReadingPhotoRemove = (readingIndex: number, photoIndex: number) => {
    const reading = inspectionData.subfloorReadings[readingIndex];
    const updatedPhotos = reading.photos.filter((_: any, i: number) => i !== photoIndex);
    handleUpdateReading(readingIndex, { photos: updatedPhotos });
  };

  if (!inspectionData.subfloorEnabled) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Home className="h-5 w-5 mr-2 text-gray-600" />
              Subfloor Assessment
            </CardTitle>
            <Switch checked={false} onCheckedChange={handleToggle} />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Enable this section if subfloor inspection is required
          </p>
        </CardContent>
      </Card>
    );
  }

  const displayComments = inspectionData.subfloorCommentsEdited || inspectionData.subfloorCommentsGenerated || '';

  return (
    <div className="space-y-4">
      {/* Toggle Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Home className="h-5 w-5 mr-2 text-blue-600" />
              Subfloor Assessment
            </CardTitle>
            <Switch checked={true} onCheckedChange={handleToggle} />
          </div>
        </CardHeader>
      </Card>

      {/* Observations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Technician Observations</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={inspectionData.subfloorObservations || ''}
            onChange={(e) => handleUpdate('subfloorObservations', e.target.value)}
            placeholder="Describe what you observe in the subfloor (moisture, mould, ventilation, drainage, etc.)"
            rows={4}
            className="text-sm"
          />
        </CardContent>
      </Card>

      {/* Landscape Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Landscape Type</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={inspectionData.subfloorLandscape || ''}
            onValueChange={(val) => handleUpdate('subfloorLandscape', val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select landscape type" />
            </SelectTrigger>
            <SelectContent>
              {LANDSCAPE_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* AI-Generated Comments */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Professional Comments</CardTitle>
            {displayComments && (
              <Button
                size="sm"
                variant="ghost"
                onClick={handleGenerateComments}
                disabled={isGeneratingComments}
              >
                <Sparkles className="h-4 w-4 mr-1" />
                Regenerate
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {!displayComments ? (
            <Button
              onClick={handleGenerateComments}
              disabled={isGeneratingComments || !inspectionData.subfloorObservations}
              className="w-full min-h-[44px]"
              variant="outline"
            >
              {isGeneratingComments ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating professional comments...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate AI Comments
                </>
              )}
            </Button>
          ) : (
            <div className="space-y-2">
              <Textarea
                value={displayComments}
                onChange={(e) => handleUpdate('subfloorCommentsEdited', e.target.value)}
                rows={5}
                className="text-sm"
              />
              {inspectionData.subfloorCommentsEdited !== inspectionData.subfloorCommentsGenerated && (
                <p className="text-xs text-blue-600">✏️ You've edited the AI-generated text</p>
              )}
            </div>
          )}

          {commentError && (
            <div className="p-2 bg-red-50 border border-red-200 rounded text-xs text-red-800">
              {commentError}
            </div>
          )}

          {!inspectionData.subfloorObservations && !displayComments && (
            <p className="text-xs text-gray-600">
              Add observations above to enable AI comment generation
            </p>
          )}
        </CardContent>
      </Card>

      {/* Photos (Max 20) */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Subfloor Photos
            <Badge variant="outline" className="ml-2">
              {inspectionData.subfloorPhotos?.length || 0}/20
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {inspectionData.subfloorPhotos?.map((photoUrl: string, index: number) => (
              <div key={index} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src={photoUrl} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                <button
                  onClick={() => handlePhotoRemove(index)}
                  className="absolute top-1 right-1 p-1.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}

            {/* Add Photo Button */}
            {(inspectionData.subfloorPhotos?.length || 0) < 20 && (
              <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
                <Camera className="h-8 w-8 text-gray-400 mb-1" />
                <span className="text-xs text-gray-600">
                  {uploadingPhotoIndex !== null ? 'Uploading...' : 'Add Photo'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handlePhotoUpload(file);
                  }}
                  className="hidden"
                  disabled={uploadingPhotoIndex !== null}
                />
              </label>
            )}
          </div>

          {(inspectionData.subfloorPhotos?.length || 0) === 0 && (
            <div className="flex items-start gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
              <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              Add photos to document subfloor conditions
            </div>
          )}
        </CardContent>
      </Card>

      {/* Flags & Treatment Time */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Treatment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Sanitation Required */}
          <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <Label className="text-sm font-medium cursor-pointer">
              Sanitation Required
            </Label>
            <Checkbox
              checked={inspectionData.subfloorSanitationRequired || false}
              onCheckedChange={(checked) => handleUpdate('subfloorSanitationRequired', checked)}
            />
          </div>

          {/* Racking Required */}
          <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <Label className="text-sm font-medium cursor-pointer">
              Racking Required
            </Label>
            <Checkbox
              checked={inspectionData.subfloorRackingRequired || false}
              onCheckedChange={(checked) => handleUpdate('subfloorRackingRequired', checked)}
            />
          </div>

          {/* Treatment Time */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Treatment Time (minutes)</Label>
            <Input
              type="number"
              min="0"
              step="1"
              value={inspectionData.subfloorTreatmentTime || ''}
              onChange={(e) => handleUpdate('subfloorTreatmentTime', parseInt(e.target.value) || 0)}
              placeholder="90"
              className="text-lg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Subfloor Moisture Readings */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Moisture Readings</CardTitle>
            <Button onClick={handleAddReading} size="sm" className="min-h-[44px]">
              <Plus className="h-4 w-4 mr-1" />
              Add Reading
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {inspectionData.subfloorReadings?.length === 0 ? (
            <p className="text-sm text-gray-600 text-center py-4">
              No moisture readings added yet
            </p>
          ) : (
            inspectionData.subfloorReadings?.map((reading: SubfloorReading, index: number) => (
              <div key={index} className="p-4 border-2 border-gray-200 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Reading {index + 1}</Label>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleRemoveReading(index)}
                    className="text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <Input
                  value={reading.title}
                  onChange={(e) => handleUpdateReading(index, { title: e.target.value })}
                  placeholder="e.g., Moisture reading at front left corner"
                />

                {/* Photos */}
                <div className="space-y-2">
                  <Label className="text-xs text-gray-600">Photos</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {reading.photos?.map((photoUrl: string, photoIdx: number) => (
                      <div key={photoIdx} className="relative aspect-square bg-gray-100 rounded overflow-hidden">
                        <img src={photoUrl} alt={`Photo ${photoIdx + 1}`} className="w-full h-full object-cover" />
                        <button
                          onClick={() => handleReadingPhotoRemove(index, photoIdx)}
                          className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}

                    {/* Add Photo Button */}
                    <label className="aspect-square border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
                      <Camera className="h-6 w-6 text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleReadingPhotoUpload(index, file);
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Helper: Compress image
async function compressImage(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context not available'));
          return;
        }

        // Max dimensions
        const maxWidth = 1920;
        const maxHeight = 1080;
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

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
      img.onerror = () => reject(new Error('Image load failed'));
    };
    reader.onerror = () => reject(new Error('File read failed'));
  });
}
