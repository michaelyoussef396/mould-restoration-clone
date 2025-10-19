/**
 * Section 2: Property Information
 *
 * Property occupation type and dwelling type selection
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Home, Building, Building2 } from 'lucide-react';

interface PropertySectionProps {
  inspectionData: any;
  updateData: (updates: any) => void;
  inspectionId: string;
}

const PROPERTY_OCCUPATION_OPTIONS = [
  { value: 'TENANTED', label: 'Tenanted', icon: Building },
  { value: 'VACANT', label: 'Vacant', icon: Building2 },
  { value: 'OWNER_OCCUPIED', label: 'Owner Occupied', icon: Home },
  { value: 'TENANTS_VACATING', label: 'Tenants Vacating', icon: Building },
];

const DWELLING_TYPE_OPTIONS = [
  { value: 'HOUSE', label: 'House' },
  { value: 'UNITS', label: 'Units' },
  { value: 'APARTMENT', label: 'Apartment' },
  { value: 'DUPLEX', label: 'Duplex' },
  { value: 'TOWNHOUSE', label: 'Townhouse' },
  { value: 'COMMERCIAL', label: 'Commercial' },
  { value: 'CONSTRUCTION', label: 'Construction' },
  { value: 'INDUSTRIAL', label: 'Industrial' },
];

export function PropertySection({ inspectionData, updateData, inspectionId }: PropertySectionProps) {
  const handleUpdate = async (field: string, value: any) => {
    updateData({ [field]: value });

    // API call to update property info
    try {
      await fetch(`http://localhost:3001/api/inspections/${inspectionId}/property`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });
    } catch (error) {
      console.error('Failed to update property:', error);
    }
  };

  return (
    <div className="space-y-4">
      {/* Property Occupation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Property Occupation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {PROPERTY_OCCUPATION_OPTIONS.map((option) => {
              const Icon = option.icon;
              const isSelected = inspectionData.propertyOccupation === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => handleUpdate('propertyOccupation', option.value)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${isSelected ? 'text-blue-600' : 'text-gray-400'}`} />
                  <p className={`text-sm font-medium text-center ${isSelected ? 'text-blue-600' : 'text-gray-700'}`}>
                    {option.label}
                  </p>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Dwelling Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Dwelling Type</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={inspectionData.dwellingType || ''}
            onValueChange={(value) => handleUpdate('dwellingType', value)}
            className="space-y-3"
          >
            {DWELLING_TYPE_OPTIONS.map((option) => (
              <div
                key={option.value}
                className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                  inspectionData.dwellingType === option.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label
                  htmlFor={option.value}
                  className="flex-1 cursor-pointer text-base"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Info Card - Construction Special Pricing */}
      {inspectionData.dwellingType === 'CONSTRUCTION' && (
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="pt-4">
            <p className="text-sm text-yellow-800">
              <strong>Construction Site:</strong> Type 3 pricing will apply. Ensure safety protocols are followed.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
