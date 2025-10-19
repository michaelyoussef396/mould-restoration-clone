/**
 * Section 7: Work Procedure
 *
 * Work procedure checkboxes and drying equipment quantities
 * Impacts cost calculation (equipment hire rates)
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { ClipboardList, Droplets, AlertCircle } from 'lucide-react';

interface ProcedureSectionProps {
  inspectionData: any;
  updateData: (updates: any) => void;
  inspectionId: string;
}

const WORK_PROCEDURES = [
  {
    id: 'hepaVac',
    label: 'HEPA Vacuum',
    description: 'High-efficiency particulate air vacuuming',
  },
  {
    id: 'antimicrobial',
    label: 'Antimicrobial Treatment',
    description: 'Application of antimicrobial solution',
  },
  {
    id: 'stainRemovingAntimicrobial',
    label: 'Stain-Removing Antimicrobial',
    description: 'Stain removal with antimicrobial properties',
  },
  {
    id: 'homeSanitationFogging',
    label: 'Home Sanitation Fogging',
    description: 'Whole-home fogging treatment',
  },
];

const EQUIPMENT_RATES = {
  dehumidifier: { rate: 132, label: 'Dehumidifier', unit: 'day' },
  airMover: { rate: 46, label: 'Air Mover/Blower', unit: 'day' },
  rcdBox: { rate: 5, label: 'RCD Box', unit: 'day' },
};

export function ProcedureSection({ inspectionData, updateData, inspectionId }: ProcedureSectionProps) {
  const handleUpdate = async (field: string, value: any) => {
    updateData({ [field]: value });

    // API call to update procedure
    try {
      await fetch(`http://localhost:3001/api/inspections/${inspectionId}/procedure`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });
    } catch (error) {
      console.error('Failed to update procedure:', error);
    }
  };

  const handleEquipmentToggle = (enabled: boolean) => {
    handleUpdate('dryingEquipmentEnabled', enabled);
    if (!enabled) {
      // Reset equipment quantities when disabled
      handleUpdate('dehumidifierQty', 0);
      handleUpdate('airMoverQty', 0);
      handleUpdate('rcdBoxQty', 0);
    }
  };

  const calculateEquipmentCost = () => {
    if (!inspectionData.dryingEquipmentEnabled) return 0;

    const dehumidifierCost = (inspectionData.dehumidifierQty || 0) * EQUIPMENT_RATES.dehumidifier.rate;
    const airMoverCost = (inspectionData.airMoverQty || 0) * EQUIPMENT_RATES.airMover.rate;
    const rcdBoxCost = (inspectionData.rcdBoxQty || 0) * EQUIPMENT_RATES.rcdBox.rate;

    return dehumidifierCost + airMoverCost + rcdBoxCost;
  };

  const equipmentCostPerDay = calculateEquipmentCost();

  return (
    <div className="space-y-4">
      {/* Work Procedures */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <ClipboardList className="h-5 w-5 mr-2 text-blue-600" />
            Work Procedures
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {WORK_PROCEDURES.map((procedure) => (
            <div
              key={procedure.id}
              className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all ${
                inspectionData[procedure.id]
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200'
              }`}
            >
              <Checkbox
                id={procedure.id}
                checked={inspectionData[procedure.id] || false}
                onCheckedChange={(checked) => handleUpdate(procedure.id, checked)}
                className="mt-1"
              />
              <Label
                htmlFor={procedure.id}
                className="flex-1 cursor-pointer"
              >
                <p className="font-medium text-base">{procedure.label}</p>
                <p className="text-sm text-gray-600">{procedure.description}</p>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Drying Equipment */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Droplets className="h-5 w-5 mr-2 text-blue-600" />
              Drying Equipment
            </CardTitle>
            <Switch
              checked={inspectionData.dryingEquipmentEnabled || false}
              onCheckedChange={handleEquipmentToggle}
            />
          </div>
        </CardHeader>
        {inspectionData.dryingEquipmentEnabled && (
          <CardContent className="space-y-4">
            {/* Dehumidifiers */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Dehumidifiers
                <span className="ml-2 text-xs text-gray-500">
                  ${EQUIPMENT_RATES.dehumidifier.rate}/day each
                </span>
              </Label>
              <div className="flex items-center gap-3">
                <Input
                  type="number"
                  min="0"
                  max="10"
                  value={inspectionData.dehumidifierQty || 0}
                  onChange={(e) => handleUpdate('dehumidifierQty', parseInt(e.target.value) || 0)}
                  className="text-lg text-center w-24"
                />
                <span className="text-sm text-gray-600">units</span>
                {(inspectionData.dehumidifierQty || 0) > 0 && (
                  <span className="ml-auto text-sm font-semibold text-blue-600">
                    ${(inspectionData.dehumidifierQty * EQUIPMENT_RATES.dehumidifier.rate).toFixed(2)}/day
                  </span>
                )}
              </div>
            </div>

            {/* Air Movers */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Air Movers/Blowers
                <span className="ml-2 text-xs text-gray-500">
                  ${EQUIPMENT_RATES.airMover.rate}/day each
                </span>
              </Label>
              <div className="flex items-center gap-3">
                <Input
                  type="number"
                  min="0"
                  max="20"
                  value={inspectionData.airMoverQty || 0}
                  onChange={(e) => handleUpdate('airMoverQty', parseInt(e.target.value) || 0)}
                  className="text-lg text-center w-24"
                />
                <span className="text-sm text-gray-600">units</span>
                {(inspectionData.airMoverQty || 0) > 0 && (
                  <span className="ml-auto text-sm font-semibold text-blue-600">
                    ${(inspectionData.airMoverQty * EQUIPMENT_RATES.airMover.rate).toFixed(2)}/day
                  </span>
                )}
              </div>
            </div>

            {/* RCD Boxes */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                RCD Boxes
                <span className="ml-2 text-xs text-gray-500">
                  ${EQUIPMENT_RATES.rcdBox.rate}/day each
                </span>
              </Label>
              <div className="flex items-center gap-3">
                <Input
                  type="number"
                  min="0"
                  max="5"
                  value={inspectionData.rcdBoxQty || 0}
                  onChange={(e) => handleUpdate('rcdBoxQty', parseInt(e.target.value) || 0)}
                  className="text-lg text-center w-24"
                />
                <span className="text-sm text-gray-600">units</span>
                {(inspectionData.rcdBoxQty || 0) > 0 && (
                  <span className="ml-auto text-sm font-semibold text-blue-600">
                    ${(inspectionData.rcdBoxQty * EQUIPMENT_RATES.rcdBox.rate).toFixed(2)}/day
                  </span>
                )}
              </div>
            </div>

            {/* Equipment Cost Summary */}
            {equipmentCostPerDay > 0 && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-900">
                    Equipment Cost (per day)
                  </span>
                  <span className="text-xl font-bold text-blue-600">
                    ${equipmentCostPerDay.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-blue-700 mt-1">
                  Total cost will be calculated based on job duration
                </p>
              </div>
            )}

            {/* Validation */}
            {equipmentCostPerDay === 0 && (
              <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <strong>Note:</strong> Drying equipment is enabled but no quantities specified.
                  Add equipment quantities or disable this section.
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Info: Equipment hire explanation */}
      <Card className="bg-gray-50">
        <CardContent className="pt-4">
          <p className="text-xs text-gray-600">
            <strong>Equipment Hire Notes:</strong> Equipment costs are calculated per 24-hour period.
            Partial days are rounded up. Equipment is included in the final cost calculation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
