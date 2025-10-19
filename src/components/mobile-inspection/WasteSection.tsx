/**
 * Section 6: Waste Disposal
 *
 * Toggle-able section for waste disposal requirements
 * Options: Small, Medium, Large, Extra large
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Trash2, AlertCircle } from 'lucide-react';

interface WasteSectionProps {
  inspectionData: any;
  updateData: (updates: any) => void;
  inspectionId: string;
}

const WASTE_AMOUNT_OPTIONS = [
  {
    value: 'SMALL',
    label: 'Small',
    description: 'Disposal bags',
    icon: '🗑️',
  },
  {
    value: 'MEDIUM',
    label: 'Medium',
    description: 'Fill van',
    icon: '🚐',
  },
  {
    value: 'LARGE',
    label: 'Large',
    description: 'Fill 2 vans',
    icon: '🚐🚐',
  },
  {
    value: 'EXTRA_LARGE',
    label: 'Extra Large',
    description: 'Fill skip',
    icon: '🗑️➕',
  },
];

export function WasteSection({ inspectionData, updateData, inspectionId }: WasteSectionProps) {
  const handleUpdate = async (field: string, value: any) => {
    updateData({ [field]: value });

    // API call to update waste disposal
    try {
      await fetch(`http://localhost:3001/api/inspections/${inspectionId}/waste`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });
    } catch (error) {
      console.error('Failed to update waste disposal:', error);
    }
  };

  const handleToggle = (enabled: boolean) => {
    handleUpdate('wasteDisposalEnabled', enabled);
    if (!enabled) {
      // Clear waste amount when disabled
      handleUpdate('wasteDisposalAmount', null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Enable/Disable Toggle */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Trash2 className="h-5 w-5 mr-2 text-gray-600" />
              Waste Disposal
            </CardTitle>
            <Switch
              checked={inspectionData.wasteDisposalEnabled || false}
              onCheckedChange={handleToggle}
            />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Enable if contaminated materials need to be disposed of
          </p>
        </CardContent>
      </Card>

      {/* Waste Amount Selection (only when enabled) */}
      {inspectionData.wasteDisposalEnabled && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Waste Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={inspectionData.wasteDisposalAmount || ''}
              onValueChange={(value) => handleUpdate('wasteDisposalAmount', value)}
              className="space-y-3"
            >
              {WASTE_AMOUNT_OPTIONS.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                    inspectionData.wasteDisposalAmount === option.value
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-base">{option.label}</p>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                      <span className="text-2xl">{option.icon}</span>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Validation Warning */}
            {!inspectionData.wasteDisposalAmount && (
              <div className="mt-4 flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <strong>Required:</strong> Please select a waste amount to continue.
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
