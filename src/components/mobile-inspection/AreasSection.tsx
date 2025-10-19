/**
 * Section 3: Area Assessments (Repeatable)
 *
 * Most complex component - repeatable room/area assessments
 * Each area has: mould visibility, environmental readings, photos,
 * AI comments, moisture readings, infrared, time tracking, demolition
 */

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Trash2,
  GripVertical,
  Camera,
  X,
  Sparkles,
  Loader2,
  AlertCircle,
  ThermometerSun,
  Clock,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface AreasSectionProps {
  inspectionData: any;
  updateData: (updates: any) => void;
  inspectionId: string;
}

interface AreaData {
  id?: string;
  areaName: string;
  orderIndex: number;
  mouldVisibility: string[];
  temperature?: number;
  humidity?: number;
  dewPoint?: number;
  commentsGenerated?: string;
  commentsEdited?: string;
  commentsApproved: boolean;
  moistureReadingEnabled: boolean;
  moistureReadings: MoistureReading[];
  internalNotes?: string;
  roomPhoto1?: string;
  roomPhoto2?: string;
  roomPhoto3?: string;
  infraredEnabled: boolean;
  infraredPhoto?: string;
  infraredNaturalPhoto?: string;
  infraredObservation?: string;
  jobTime: number;
  demolitionRequired: boolean;
  demolitionTime?: number;
  demolitionDescGenerated?: string;
  demolitionDescEdited?: string;
  demolitionDescApproved: boolean;
}

interface MoistureReading {
  id?: string;
  title: string;
  photos: string[];
  orderIndex: number;
}

const MOULD_VISIBILITY_OPTIONS = [
  'Ceiling',
  'Cornice',
  'Windows',
  'Window furnishings',
  'Walls',
  'Skirting',
  'Flooring',
  'Wardrobe',
  'Cupboard',
  'Contents',
  'Grout/silicone',
  'No mould visible',
];

const INFRARED_OBSERVATIONS = [
  { value: 'NO_ACTIVE_WATER_INFILTRATION', label: 'No active water infiltration' },
  { value: 'EVIDENCE_WATER_INFILTRATION', label: 'Evidence of water infiltration' },
  { value: 'INDICATIONS_PAST_WATER_INGRESS', label: 'Indications of past water ingress' },
  { value: 'POSSIBLE_CONDENSATION_VARIATIONS', label: 'Possible condensation variations' },
  { value: 'SUSPECTED_MISSING_INSULATION', label: 'Suspected missing insulation' },
];

export function AreasSection({ inspectionData, updateData, inspectionId }: AreasSectionProps) {
  const [areas, setAreas] = useState<AreaData[]>([]);
  const [activeAreaIndex, setActiveAreaIndex] = useState<number>(0);

  // Load areas from inspectionData
  useEffect(() => {
    if (inspectionData.areas && Array.isArray(inspectionData.areas)) {
      setAreas(inspectionData.areas);
    }
  }, [inspectionData.areas]);

  const handleAddArea = async () => {
    const newArea: AreaData = {
      areaName: '',
      orderIndex: areas.length,
      mouldVisibility: [],
      commentsApproved: false,
      moistureReadingEnabled: false,
      moistureReadings: [],
      infraredEnabled: false,
      jobTime: 0,
      demolitionRequired: false,
      demolitionDescApproved: false,
    };

    const updatedAreas = [...areas, newArea];
    setAreas(updatedAreas);
    setActiveAreaIndex(updatedAreas.length - 1);

    // Save to API
    try {
      const response = await fetch(`http://localhost:3001/api/inspections/${inspectionId}/areas`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newArea,
          mouldVisibility: JSON.stringify(newArea.mouldVisibility),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // Update with server-generated ID
        updatedAreas[updatedAreas.length - 1] = { ...newArea, id: result.data.id };
        setAreas(updatedAreas);
        updateData({ areas: updatedAreas });
      }
    } catch (error) {
      console.error('Failed to add area:', error);
    }
  };

  const handleRemoveArea = async (index: number) => {
    const areaToRemove = areas[index];

    if (areaToRemove.id) {
      try {
        await fetch(`http://localhost:3001/api/inspections/${inspectionId}/areas/${areaToRemove.id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          },
        });
      } catch (error) {
        console.error('Failed to delete area:', error);
      }
    }

    const updatedAreas = areas.filter((_, i) => i !== index);
    setAreas(updatedAreas);
    updateData({ areas: updatedAreas });

    if (activeAreaIndex >= updatedAreas.length) {
      setActiveAreaIndex(Math.max(0, updatedAreas.length - 1));
    }
  };

  const handleUpdateArea = async (index: number, updates: Partial<AreaData>) => {
    const updatedAreas = [...areas];
    updatedAreas[index] = { ...updatedAreas[index], ...updates };
    setAreas(updatedAreas);
    updateData({ areas: updatedAreas });

    // Save to API
    const area = updatedAreas[index];
    if (area.id) {
      try {
        await fetch(`http://localhost:3001/api/inspections/${inspectionId}/areas/${area.id}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...updates,
            mouldVisibility: updates.mouldVisibility
              ? JSON.stringify(updates.mouldVisibility)
              : undefined,
          }),
        });
      } catch (error) {
        console.error('Failed to update area:', error);
      }
    }
  };

  if (areas.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="mb-4 text-gray-400">
              <Plus className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No Areas Added</h3>
            <p className="text-sm text-gray-600 mb-4">
              Add your first area to begin the inspection assessment
            </p>
            <Button onClick={handleAddArea} className="min-h-[44px]">
              <Plus className="h-5 w-5 mr-2" />
              Add First Area
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentArea = areas[activeAreaIndex];

  return (
    <div className="space-y-4">
      {/* Area Navigation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              Area Assessments ({areas.length})
            </CardTitle>
            <Button onClick={handleAddArea} size="sm" className="min-h-[44px]">
              <Plus className="h-4 w-4 mr-1" />
              Add Area
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {areas.map((area, index) => (
              <button
                key={index}
                onClick={() => setActiveAreaIndex(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg border-2 transition-all min-w-[120px] ${
                  activeAreaIndex === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-sm font-medium truncate">
                  {area.areaName || `Area ${index + 1}`}
                </div>
                <div className="text-xs text-gray-500">
                  {area.jobTime > 0 ? `${area.jobTime} min` : 'Not set'}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Area Form */}
      {currentArea && (
        <>
          {/* Area Name */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Area Details</CardTitle>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveArea(activeAreaIndex)}
                  className="min-h-[44px]"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Area Name</Label>
                <Input
                  value={currentArea.areaName}
                  onChange={(e) =>
                    handleUpdateArea(activeAreaIndex, { areaName: e.target.value })
                  }
                  placeholder="e.g., Master Bedroom, Bathroom, Living Room"
                  className="text-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Mould Visibility Multi-Select */}
          <MouldVisibilitySelector
            selected={currentArea.mouldVisibility}
            onChange={(visibility) =>
              handleUpdateArea(activeAreaIndex, { mouldVisibility: visibility })
            }
          />

          {/* Environmental Readings */}
          <EnvironmentalReadings
            temperature={currentArea.temperature}
            humidity={currentArea.humidity}
            dewPoint={currentArea.dewPoint}
            onUpdate={(updates) => handleUpdateArea(activeAreaIndex, updates)}
          />

          {/* AI Comments Section */}
          <AICommentSection
            areaId={currentArea.id}
            inspectionId={inspectionId}
            generated={currentArea.commentsGenerated}
            edited={currentArea.commentsEdited}
            approved={currentArea.commentsApproved}
            mouldVisibility={currentArea.mouldVisibility}
            temperature={currentArea.temperature}
            humidity={currentArea.humidity}
            dewPoint={currentArea.dewPoint}
            onUpdate={(updates) => handleUpdateArea(activeAreaIndex, updates)}
          />

          {/* Room Photos (3 required) */}
          <RoomPhotoCapture
            inspectionId={inspectionId}
            areaId={currentArea.id}
            photo1={currentArea.roomPhoto1}
            photo2={currentArea.roomPhoto2}
            photo3={currentArea.roomPhoto3}
            onUpdate={(updates) => handleUpdateArea(activeAreaIndex, updates)}
          />

          {/* Moisture Readings (Optional) */}
          <MoistureReadingSection
            inspectionId={inspectionId}
            areaId={currentArea.id}
            enabled={currentArea.moistureReadingEnabled}
            readings={currentArea.moistureReadings}
            onUpdate={(updates) => handleUpdateArea(activeAreaIndex, updates)}
          />

          {/* Infrared Section (Optional) */}
          <InfraredSection
            inspectionId={inspectionId}
            areaId={currentArea.id}
            enabled={currentArea.infraredEnabled}
            photo={currentArea.infraredPhoto}
            naturalPhoto={currentArea.infraredNaturalPhoto}
            observation={currentArea.infraredObservation}
            onUpdate={(updates) => handleUpdateArea(activeAreaIndex, updates)}
          />

          {/* Internal Notes */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-lg">Internal Notes (Admin Only)</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={currentArea.internalNotes || ''}
                onChange={(e) =>
                  handleUpdateArea(activeAreaIndex, { internalNotes: e.target.value })
                }
                placeholder="Private notes not visible in customer report..."
                rows={2}
              />
            </CardContent>
          </Card>

          {/* Time Tracking */}
          <TimeTracking
            jobTime={currentArea.jobTime}
            demolitionRequired={currentArea.demolitionRequired}
            demolitionTime={currentArea.demolitionTime}
            onUpdate={(updates) => handleUpdateArea(activeAreaIndex, updates)}
          />

          {/* Demolition Description (if enabled) */}
          {currentArea.demolitionRequired && (
            <DemolitionDescriptionSection
              areaId={currentArea.id}
              inspectionId={inspectionId}
              areaName={currentArea.areaName}
              mouldVisibility={currentArea.mouldVisibility}
              demolitionTime={currentArea.demolitionTime || 0}
              generated={currentArea.demolitionDescGenerated}
              edited={currentArea.demolitionDescEdited}
              approved={currentArea.demolitionDescApproved}
              onUpdate={(updates) => handleUpdateArea(activeAreaIndex, updates)}
            />
          )}
        </>
      )}

      {/* Summary Card */}
      {areas.length > 0 && (
        <Card className="bg-gray-50">
          <CardContent className="pt-4">
            <div className="text-sm space-y-1">
              <p>
                <strong>Total Areas:</strong> {areas.length}
              </p>
              <p>
                <strong>Total Time:</strong>{' '}
                {areas.reduce((sum, a) => sum + (a.jobTime || 0) + (a.demolitionTime || 0), 0)} minutes
              </p>
              <p>
                <strong>Areas with Demolition:</strong>{' '}
                {areas.filter(a => a.demolitionRequired).length}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Sub-component: Mould Visibility Selector
function MouldVisibilitySelector({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (visibility: string[]) => void;
}) {
  const handleToggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(v => v !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Mould Visibility</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {MOULD_VISIBILITY_OPTIONS.map((option) => {
            const isSelected = selected.includes(option);
            const isNoMould = option === 'No mould visible';

            return (
              <button
                key={option}
                onClick={() => handleToggle(option)}
                className={`p-3 rounded-lg border-2 text-sm transition-all ${
                  isSelected
                    ? isNoMould
                      ? 'border-green-600 bg-green-50'
                      : 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Checkbox checked={isSelected} readOnly />
                  <span className={isSelected ? 'font-medium' : ''}>{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {selected.length === 0 && (
          <div className="mt-3 flex items-start gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            Select at least one option (or "No mould visible")
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Sub-component: Environmental Readings
function EnvironmentalReadings({
  temperature,
  humidity,
  dewPoint,
  onUpdate,
}: {
  temperature?: number;
  humidity?: number;
  dewPoint?: number;
  onUpdate: (updates: any) => void;
}) {
  const [calculatedDewPoint, setCalculatedDewPoint] = useState<number | null>(null);
  const [isManualDewPoint, setIsManualDewPoint] = useState(false);

  // Auto-calculate dew point when temperature or humidity changes (only if not manually overridden)
  useEffect(() => {
    // Skip auto-calculation if user has manually set the dew point
    if (isManualDewPoint) return;

    if (temperature !== undefined && humidity !== undefined) {
      const dp = calculateDewPoint(temperature, humidity);
      setCalculatedDewPoint(dp);
      onUpdate({ dewPoint: dp });
    } else {
      setCalculatedDewPoint(null);
    }
  }, [temperature, humidity, isManualDewPoint]);

  // Sync local state with prop on mount
  useEffect(() => {
    if (dewPoint !== undefined && dewPoint !== null) {
      setCalculatedDewPoint(dewPoint);
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <ThermometerSun className="h-5 w-5 mr-2 text-orange-600" />
          Environmental Readings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Temperature (°C)</Label>
            <Input
              type="number"
              step="0.1"
              value={temperature || ''}
              onChange={(e) => onUpdate({ temperature: parseFloat(e.target.value) || undefined })}
              placeholder="22.5"
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Humidity (%)</Label>
            <Input
              type="number"
              step="0.1"
              value={humidity || ''}
              onChange={(e) => onUpdate({ humidity: parseFloat(e.target.value) || undefined })}
              placeholder="65.0"
              className="text-lg"
            />
          </div>
        </div>

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
                  if (temperature !== undefined && humidity !== undefined) {
                    const dp = calculateDewPoint(temperature, humidity);
                    setCalculatedDewPoint(dp);
                    onUpdate({ dewPoint: dp });
                  }
                }}
                className="text-xs text-blue-600 hover:text-blue-700 h-6 px-2"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                Auto-calc
              </Button>
            )}
          </div>
          <Input
            type="number"
            step="0.1"
            value={calculatedDewPoint !== null ? calculatedDewPoint : ''}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (!isNaN(value)) {
                setCalculatedDewPoint(value);
                setIsManualDewPoint(true);
                onUpdate({ dewPoint: value });
              }
            }}
            placeholder="Auto-calculated"
            className={`text-lg font-semibold ${isManualDewPoint ? 'bg-blue-50 border-blue-300' : 'bg-gray-50'}`}
          />
        </div>
      </CardContent>
    </Card>
  );
}

// Helper: Calculate dew point
function calculateDewPoint(temperature: number, humidity: number): number {
  const a = 17.27;
  const b = 237.7;

  const alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100);
  const dewPoint = (b * alpha) / (a - alpha);

  return Math.round(dewPoint * 10) / 10;
}

// Sub-component: AI Comment Section
function AICommentSection({
  areaId,
  inspectionId,
  generated,
  edited,
  approved,
  mouldVisibility,
  temperature,
  humidity,
  dewPoint,
  onUpdate,
}: {
  areaId?: string;
  inspectionId: string;
  generated?: string;
  edited?: string;
  approved: boolean;
  mouldVisibility: string[];
  temperature?: number;
  humidity?: number;
  dewPoint?: number;
  onUpdate: (updates: any) => void;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!areaId) {
      setError('Save area before generating comments');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/areas/${areaId}/generate-comments`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mouldVisibility,
            temperature,
            humidity,
            dewPoint,
          }),
        }
      );

      if (!response.ok) throw new Error('Generation failed');

      const result = await response.json();
      onUpdate({
        commentsGenerated: result.data.comments,
        commentsEdited: result.data.comments,
      });
    } catch (err) {
      setError('Failed to generate comments. Try again or write manually.');
    } finally {
      setIsGenerating(false);
    }
  };

  const displayText = edited || generated || '';

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Area Comments</CardTitle>
          {displayText && (
            <Button
              size="sm"
              variant="ghost"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              <Sparkles className="h-4 w-4 mr-1" />
              Regenerate
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {!displayText ? (
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || mouldVisibility.length === 0}
            className="w-full min-h-[44px]"
            variant="outline"
          >
            {isGenerating ? (
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
              value={displayText}
              onChange={(e) => onUpdate({ commentsEdited: e.target.value })}
              rows={5}
              className="text-sm"
            />
            {edited !== generated && (
              <p className="text-xs text-blue-600">✏️ You've edited the AI-generated text</p>
            )}
          </div>
        )}

        {error && (
          <div className="p-2 bg-red-50 border border-red-200 rounded text-xs text-red-800">
            {error}
          </div>
        )}

        {mouldVisibility.length === 0 && !displayText && (
          <p className="text-xs text-gray-600">
            Select mould visibility options to enable AI generation
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// Sub-component: Room Photo Capture (3 required)
function RoomPhotoCapture({
  inspectionId,
  areaId,
  photo1,
  photo2,
  photo3,
  onUpdate,
}: {
  inspectionId: string;
  areaId?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
  onUpdate: (updates: any) => void;
}) {
  const [uploading, setUploading] = useState<number | null>(null);

  const handlePhotoCapture = async (photoNumber: 1 | 2 | 3, file: File) => {
    if (!areaId) {
      alert('Save area before uploading photos');
      return;
    }

    setUploading(photoNumber);

    try {
      // Compress image
      const compressed = await compressImage(file);

      // Upload to API
      const formData = new FormData();
      formData.append('photo', compressed, 'room-photo.jpg');
      formData.append('photoType', `roomPhoto${photoNumber}`);

      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/areas/${areaId}/photos`,
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
        onUpdate({ [`roomPhoto${photoNumber}`]: result.data.url });
      }
    } catch (error) {
      console.error('Photo upload failed:', error);
      alert('Failed to upload photo. Please try again.');
    } finally {
      setUploading(null);
    }
  };

  const handlePhotoRemove = (photoNumber: 1 | 2 | 3) => {
    onUpdate({ [`roomPhoto${photoNumber}`]: undefined });
  };

  const photos = [
    { number: 1 as const, url: photo1, label: 'Photo 1' },
    { number: 2 as const, url: photo2, label: 'Photo 2' },
    { number: 3 as const, url: photo3, label: 'Photo 3' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          Room Photos <Badge variant="outline" className="ml-2">3 Required</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {photos.map(({ number, url, label }) => (
            <div key={number} className="space-y-2">
              <Label className="text-sm font-medium">{label}</Label>
              {url ? (
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img src={url} alt={label} className="w-full h-full object-cover" />
                  <button
                    onClick={() => handlePhotoRemove(number)}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors min-h-[100px]">
                    <Camera className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Camera</span>
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handlePhotoCapture(number, file);
                      }}
                      className="hidden"
                      disabled={uploading === number}
                    />
                  </label>

                  <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors min-h-[100px]">
                    <Camera className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-600">Library</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handlePhotoCapture(number, file);
                      }}
                      className="hidden"
                      disabled={uploading === number}
                    />
                  </label>
                </div>
              )}

              {uploading === number && (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Uploading...
                </div>
              )}
            </div>
          ))}
        </div>

        {!photo1 || !photo2 || !photo3 ? (
          <div className="mt-4 flex items-start gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            3 room photos required before completing area
          </div>
        ) : null}
      </CardContent>
    </Card>
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

// Sub-component: Moisture Reading Section
function MoistureReadingSection({
  inspectionId,
  areaId,
  enabled,
  readings,
  onUpdate,
}: {
  inspectionId: string;
  areaId?: string;
  enabled: boolean;
  readings: MoistureReading[];
  onUpdate: (updates: any) => void;
}) {
  const handleToggle = (isEnabled: boolean) => {
    onUpdate({ moistureReadingEnabled: isEnabled });
    if (!isEnabled) {
      onUpdate({ moistureReadings: [] });
    }
  };

  const handleAddReading = () => {
    const newReading: MoistureReading = {
      title: '',
      photos: [],
      orderIndex: readings.length,
    };
    onUpdate({ moistureReadings: [...readings, newReading] });
  };

  const handleUpdateReading = (index: number, updates: Partial<MoistureReading>) => {
    const updated = [...readings];
    updated[index] = { ...updated[index], ...updates };
    onUpdate({ moistureReadings: updated });
  };

  const handleRemoveReading = (index: number) => {
    const updated = readings.filter((_, i) => i !== index);
    onUpdate({ moistureReadings: updated });
  };

  const handlePhotoUpload = async (readingIndex: number, file: File) => {
    if (!areaId) {
      alert('Save area before uploading photos');
      return;
    }

    try {
      const compressed = await compressImage(file);

      const formData = new FormData();
      formData.append('photo', compressed, 'moisture-reading.jpg');
      formData.append('readingIndex', readingIndex.toString());

      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/areas/${areaId}/moisture-photos`,
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
        const reading = readings[readingIndex];
        handleUpdateReading(readingIndex, {
          photos: [...(reading.photos || []), result.data.url],
        });
      }
    } catch (error) {
      console.error('Photo upload failed:', error);
      alert('Failed to upload photo');
    }
  };

  const handlePhotoRemove = (readingIndex: number, photoIndex: number) => {
    const reading = readings[readingIndex];
    const updated = reading.photos.filter((_, i) => i !== photoIndex);
    handleUpdateReading(readingIndex, { photos: updated });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Moisture Readings</CardTitle>
          <Switch checked={enabled} onCheckedChange={handleToggle} />
        </div>
      </CardHeader>
      {enabled && (
        <CardContent className="space-y-4">
          {readings.map((reading, index) => (
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
                placeholder="e.g., Wall cavity behind wardrobe"
              />

              {/* Photos */}
              <div className="space-y-2">
                <Label className="text-xs text-gray-600">Photos</Label>
                <div className="grid grid-cols-3 gap-2">
                  {reading.photos?.map((photoUrl, photoIdx) => (
                    <div key={photoIdx} className="relative aspect-square bg-gray-100 rounded overflow-hidden">
                      <img src={photoUrl} alt={`Photo ${photoIdx + 1}`} className="w-full h-full object-cover" />
                      <button
                        onClick={() => handlePhotoRemove(index, photoIdx)}
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
                        if (file) handlePhotoUpload(index, file);
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}

          <Button onClick={handleAddReading} variant="outline" className="w-full min-h-[44px]">
            <Plus className="h-4 w-4 mr-2" />
            Add Moisture Reading
          </Button>
        </CardContent>
      )}
    </Card>
  );
}

// Sub-component: Infrared Section
function InfraredSection({
  inspectionId,
  areaId,
  enabled,
  photo,
  naturalPhoto,
  observation,
  onUpdate,
}: {
  inspectionId: string;
  areaId?: string;
  enabled: boolean;
  photo?: string;
  naturalPhoto?: string;
  observation?: string;
  onUpdate: (updates: any) => void;
}) {
  const [uploading, setUploading] = useState<'infrared' | 'natural' | null>(null);

  const handleToggle = (isEnabled: boolean) => {
    onUpdate({ infraredEnabled: isEnabled });
    if (!isEnabled) {
      onUpdate({
        infraredPhoto: undefined,
        infraredNaturalPhoto: undefined,
        infraredObservation: undefined,
      });
    }
  };

  const handlePhotoUpload = async (photoType: 'infrared' | 'natural', file: File) => {
    if (!areaId) {
      alert('Save area before uploading photos');
      return;
    }

    setUploading(photoType);

    try {
      const compressed = await compressImage(file);

      const formData = new FormData();
      formData.append('photo', compressed, `${photoType}.jpg`);
      formData.append('photoType', photoType === 'infrared' ? 'infraredPhoto' : 'infraredNaturalPhoto');

      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/areas/${areaId}/photos`,
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
        onUpdate({
          [photoType === 'infrared' ? 'infraredPhoto' : 'infraredNaturalPhoto']: result.data.url,
        });
      }
    } catch (error) {
      console.error('Photo upload failed:', error);
      alert('Failed to upload photo');
    } finally {
      setUploading(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Infrared Imaging</CardTitle>
          <Switch checked={enabled} onCheckedChange={handleToggle} />
        </div>
      </CardHeader>
      {enabled && (
        <CardContent className="space-y-4">
          {/* Infrared Photo */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Infrared Photo</Label>
            {photo ? (
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img src={photo} alt="Infrared" className="w-full h-full object-cover" />
                <button
                  onClick={() => onUpdate({ infraredPhoto: undefined })}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <Camera className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">
                  {uploading === 'infrared' ? 'Uploading...' : 'Add Infrared Photo'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handlePhotoUpload('infrared', file);
                  }}
                  className="hidden"
                  disabled={uploading === 'infrared'}
                />
              </label>
            )}
          </div>

          {/* Natural Light Photo */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Natural Light Photo</Label>
            {naturalPhoto ? (
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img src={naturalPhoto} alt="Natural light" className="w-full h-full object-cover" />
                <button
                  onClick={() => onUpdate({ infraredNaturalPhoto: undefined })}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <Camera className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">
                  {uploading === 'natural' ? 'Uploading...' : 'Add Natural Light Photo'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handlePhotoUpload('natural', file);
                  }}
                  className="hidden"
                  disabled={uploading === 'natural'}
                />
              </label>
            )}
          </div>

          {/* Observation Dropdown */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Observation</Label>
            <Select value={observation || ''} onValueChange={(val) => onUpdate({ infraredObservation: val })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select observation" />
              </SelectTrigger>
              <SelectContent>
                {INFRARED_OBSERVATIONS.map((obs) => (
                  <SelectItem key={obs.value} value={obs.value}>
                    {obs.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

// Sub-component: Time Tracking
function TimeTracking({
  jobTime,
  demolitionRequired,
  demolitionTime,
  onUpdate,
}: {
  jobTime: number;
  demolitionRequired: boolean;
  demolitionTime?: number;
  onUpdate: (updates: any) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Clock className="h-5 w-5 mr-2 text-blue-600" />
          Time Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Job Time */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">
            Job Time (minutes)
            <span className="ml-2 text-xs text-red-600">Required</span>
          </Label>
          <Input
            type="number"
            min="0"
            step="1"
            value={jobTime || ''}
            onChange={(e) => onUpdate({ jobTime: parseInt(e.target.value) || 0 })}
            placeholder="60"
            className="text-lg"
          />
        </div>

        {/* Demolition Toggle */}
        <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <Label className="text-sm font-medium cursor-pointer">
            Demolition Required
          </Label>
          <Switch
            checked={demolitionRequired}
            onCheckedChange={(checked) => {
              onUpdate({ demolitionRequired: checked });
              if (!checked) {
                onUpdate({ demolitionTime: 0 });
              }
            }}
          />
        </div>

        {/* Demolition Time */}
        {demolitionRequired && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Demolition Time (minutes)
            </Label>
            <Input
              type="number"
              min="0"
              step="1"
              value={demolitionTime || ''}
              onChange={(e) => onUpdate({ demolitionTime: parseInt(e.target.value) || 0 })}
              placeholder="30"
              className="text-lg"
            />
          </div>
        )}

        {/* Total Time Display */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-900">Total Time</span>
            <span className="text-lg font-bold text-blue-600">
              {(jobTime || 0) + (demolitionTime || 0)} min
            </span>
          </div>
          <p className="text-xs text-blue-700 mt-1">
            {((jobTime || 0) + (demolitionTime || 0)) / 60} hours
          </p>
        </div>

        {jobTime === 0 && (
          <div className="flex items-start gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            Job time is required for cost calculation
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Sub-component: Demolition Description Section
function DemolitionDescriptionSection({
  areaId,
  inspectionId,
  areaName,
  mouldVisibility,
  demolitionTime,
  generated,
  edited,
  approved,
  onUpdate,
}: {
  areaId?: string;
  inspectionId: string;
  areaName: string;
  mouldVisibility: string[];
  demolitionTime: number;
  generated?: string;
  edited?: string;
  approved: boolean;
  onUpdate: (updates: any) => void;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!areaId) {
      setError('Save area before generating demolition description');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/areas/${areaId}/generate-demolition`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            areaName,
            mouldVisibility,
            demolitionTime,
          }),
        }
      );

      if (!response.ok) throw new Error('Generation failed');

      const result = await response.json();
      onUpdate({
        demolitionDescGenerated: result.data.description,
        demolitionDescEdited: result.data.description,
      });
    } catch (err) {
      setError('Failed to generate demolition description. Try again or write manually.');
    } finally {
      setIsGenerating(false);
    }
  };

  const displayText = edited || generated || '';

  return (
    <Card className="bg-orange-50 border-orange-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Demolition Work Order</CardTitle>
          {displayText && (
            <Button
              size="sm"
              variant="ghost"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              <Sparkles className="h-4 w-4 mr-1" />
              Regenerate
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {!displayText ? (
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || mouldVisibility.length === 0}
            className="w-full min-h-[44px]"
            variant="outline"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating work order...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate AI Work Order
              </>
            )}
          </Button>
        ) : (
          <div className="space-y-2">
            <Textarea
              value={displayText}
              onChange={(e) => onUpdate({ demolitionDescEdited: e.target.value })}
              rows={6}
              className="text-sm bg-white"
              placeholder="AI-generated demolition work order..."
            />
            {edited !== generated && (
              <p className="text-xs text-orange-600">✏️ You've edited the AI-generated text</p>
            )}
          </div>
        )}

        {error && (
          <div className="p-2 bg-red-50 border border-red-200 rounded text-xs text-red-800">
            {error}
          </div>
        )}

        {mouldVisibility.length === 0 && !displayText && (
          <p className="text-xs text-gray-600">
            Select mould visibility options to enable AI generation
          </p>
        )}
      </CardContent>
    </Card>
  );
}
