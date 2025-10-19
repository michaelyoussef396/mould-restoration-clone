/**
 * Section 8: Job Summary & Cost
 *
 * Final section with dehumidifier recommendation, cause of mould (AI),
 * additional notes, parking options, and cost calculation display
 */

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FileText, Sparkles, Car, Loader2 } from 'lucide-react';
import { CostSummaryDisplay } from './CostSummaryDisplay';

interface SummarySectionProps {
  inspectionData: any;
  updateData: (updates: any) => void;
  inspectionId: string;
  costBreakdown: any;
}

const DEHUMIDIFIER_SIZE_OPTIONS = [
  {
    value: 'SMALL',
    label: 'Small',
    description: '1 dehumidifier recommended',
  },
  {
    value: 'MEDIUM',
    label: 'Medium',
    description: '2 dehumidifiers recommended',
  },
  {
    value: 'LARGE',
    label: 'Large',
    description: 'Home built-in dehumidifier recommended',
  },
];

const PARKING_OPTIONS = [
  { value: 'DRIVEWAY', label: 'Driveway' },
  { value: 'STREET', label: 'Street Parking' },
  { value: 'CARPARK', label: 'Carpark' },
  { value: 'VISITOR_CAR_PARK', label: 'Visitor Car Park' },
  { value: 'NO_NEARBY_PARKING', label: 'No Nearby Parking' },
];

export function SummarySection({
  inspectionData,
  updateData,
  inspectionId,
  costBreakdown,
}: SummarySectionProps) {
  const [isGeneratingCause, setIsGeneratingCause] = useState(false);
  const [causeError, setCauseError] = useState<string | null>(null);

  const handleUpdate = async (field: string, value: any) => {
    updateData({ [field]: value });

    // API call to update summary
    try {
      await fetch(`http://localhost:3001/api/inspections/${inspectionId}/summary`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });
    } catch (error) {
      console.error('Failed to update summary:', error);
    }
  };

  const handleGenerateCauseOfMould = async () => {
    setIsGeneratingCause(true);
    setCauseError(null);

    try {
      const response = await fetch(
        `http://localhost:3001/api/inspections/${inspectionId}/generate-cause-of-mould`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            areas: inspectionData.areas || [],
            outdoorTemp: inspectionData.outdoorTemperature,
            outdoorHumidity: inspectionData.outdoorHumidity,
            subfloorObservations: inspectionData.subfloorObservations,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to generate cause of mould');
      }

      const result = await response.json();

      // Save both original (generated) and edited (same initially)
      handleUpdate('causeOfMouldOriginal', result.data.causeOfMould);
      handleUpdate('causeOfMould', result.data.causeOfMould);
    } catch (error) {
      console.error('AI generation error:', error);
      setCauseError('Failed to generate analysis. Please try again or write manually.');
    } finally {
      setIsGeneratingCause(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Dehumidifier Recommendation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Dehumidifier Recommendation</CardTitle>
            <Switch
              checked={inspectionData.recommendDehumidifier || false}
              onCheckedChange={(enabled) => handleUpdate('recommendDehumidifier', enabled)}
            />
          </div>
        </CardHeader>
        {inspectionData.recommendDehumidifier && (
          <CardContent>
            <RadioGroup
              value={inspectionData.dehumidifierSize || ''}
              onValueChange={(value) => handleUpdate('dehumidifierSize', value)}
              className="space-y-3"
            >
              {DEHUMIDIFIER_SIZE_OPTIONS.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
                    inspectionData.dehumidifierSize === option.value
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                >
                  <RadioGroupItem value={option.value} id={`dehumidifier-${option.value}`} />
                  <Label
                    htmlFor={`dehumidifier-${option.value}`}
                    className="flex-1 cursor-pointer"
                  >
                    <p className="font-medium">{option.label}</p>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        )}
      </Card>

      {/* Cause of Mould (AI-Generated) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <FileText className="h-5 w-5 mr-2 text-purple-600" />
            Cause of Mould Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Generate Button */}
          {!inspectionData.causeOfMould && (
            <Button
              onClick={handleGenerateCauseOfMould}
              disabled={isGeneratingCause}
              className="w-full min-h-[44px]"
              variant="outline"
            >
              {isGeneratingCause ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing inspection data...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate AI Analysis
                </>
              )}
            </Button>
          )}

          {/* Error Message */}
          {causeError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
              {causeError}
            </div>
          )}

          {/* Editable Textarea */}
          {inspectionData.causeOfMould && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Analysis</Label>
                {inspectionData.causeOfMouldOriginal && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleGenerateCauseOfMould}
                    disabled={isGeneratingCause}
                  >
                    <Sparkles className="h-4 w-4 mr-1" />
                    Regenerate
                  </Button>
                )}
              </div>

              <Textarea
                value={inspectionData.causeOfMould || ''}
                onChange={(e) => handleUpdate('causeOfMould', e.target.value)}
                placeholder="AI-generated cause of mould analysis..."
                rows={6}
                className="text-sm"
              />

              {inspectionData.causeOfMouldOriginal &&
                inspectionData.causeOfMould !== inspectionData.causeOfMouldOriginal && (
                <p className="text-xs text-blue-600">
                  ✏️ You've edited the AI-generated text
                </p>
              )}
            </div>
          )}

          {!inspectionData.causeOfMould && !isGeneratingCause && (
            <p className="text-sm text-gray-600">
              Generate an AI-powered analysis of the mould causes based on your inspection findings,
              or write your own analysis manually.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Additional Info for Technician */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Notes for Technician (Optional)
            </Label>
            <Textarea
              value={inspectionData.additionalInfoTechnician || ''}
              onChange={(e) => handleUpdate('additionalInfoTechnician', e.target.value)}
              placeholder="Internal notes, special considerations, follow-up required..."
              rows={3}
            />
          </div>

          {/* Additional Equipment Comments */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Equipment Comments (Optional)
            </Label>
            <Textarea
              value={inspectionData.additionalEquipmentComments || ''}
              onChange={(e) => handleUpdate('additionalEquipmentComments', e.target.value)}
              placeholder="Special equipment notes, delivery instructions..."
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Parking Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Car className="h-5 w-5 mr-2 text-gray-600" />
            Parking Availability
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={inspectionData.parkingOptions || ''}
            onValueChange={(value) => handleUpdate('parkingOptions', value)}
            className="space-y-2"
          >
            {PARKING_OPTIONS.map((option) => (
              <div
                key={option.value}
                className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                  inspectionData.parkingOptions === option.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value={option.value} id={`parking-${option.value}`} />
                <Label
                  htmlFor={`parking-${option.value}`}
                  className="flex-1 cursor-pointer text-sm"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Cost Calculation Display */}
      <CostSummaryDisplay breakdown={costBreakdown} />
    </div>
  );
}
