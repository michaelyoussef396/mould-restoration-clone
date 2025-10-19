/**
 * Cost Summary Display Component
 *
 * Real-time cost calculation display with breakdown
 * Integrates with CostCalculationService
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingDown, AlertCircle } from 'lucide-react';

interface CostBreakdown {
  labourCost: number;
  equipmentCost: number;
  subtotal: number;
  gst: number;
  totalCost: number;
  workType: string;
  totalHours: number;
  discountPercent: number;
  areaDetails: Array<{
    areaName: string;
    jobTime: number;
    demolitionTime: number;
    totalMinutes: number;
  }>;
  equipmentDetails: {
    dehumidifiers: { qty: number; days: number; cost: number };
    airMovers: { qty: number; days: number; cost: number };
    rcdBox: { qty: number; days: number; cost: number };
  };
}

interface CostSummaryDisplayProps {
  breakdown: CostBreakdown | null;
  isCalculating?: boolean;
}

export function CostSummaryDisplay({ breakdown, isCalculating = false }: CostSummaryDisplayProps) {
  if (isCalculating) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Calculating costs...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!breakdown) {
    return (
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <strong>Cost calculation not available:</strong> Complete area assessments
              with time estimates to calculate costs.
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatCurrency = (value: number) => {
    return `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  const getWorkTypeColor = (workType: string) => {
    switch (workType) {
      case 'SURFACE': return 'bg-green-100 text-green-800';
      case 'DEMOLITION': return 'bg-orange-100 text-orange-800';
      case 'CONSTRUCTION': return 'bg-purple-100 text-purple-800';
      case 'SUBFLOOR': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Cost Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <DollarSign className="h-5 w-5 mr-2 text-green-600" />
              Cost Calculation
            </CardTitle>
            <Badge className={getWorkTypeColor(breakdown.workType)}>
              {breakdown.workType}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Labour Cost */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Labour</p>
              <p className="text-xs text-gray-500">
                {breakdown.totalHours.toFixed(2)} hours
              </p>
            </div>
            <p className="text-lg font-semibold">{formatCurrency(breakdown.labourCost)}</p>
          </div>

          {/* Discount (if applicable) */}
          {breakdown.discountPercent > 0 && (
            <div className="flex justify-between items-center text-green-600">
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                <div>
                  <p className="text-sm font-medium">Volume Discount</p>
                  <p className="text-xs">{(breakdown.discountPercent * 100).toFixed(1)}% applied</p>
                </div>
              </div>
              <p className="text-sm font-semibold">Included</p>
            </div>
          )}

          {/* Equipment Cost */}
          {breakdown.equipmentCost > 0 && (
            <>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Equipment Hire</p>
                    <p className="text-xs text-gray-500">
                      {breakdown.equipmentDetails.dehumidifiers.days || breakdown.equipmentDetails.airMovers.days || 1} day(s)
                    </p>
                  </div>
                  <p className="text-lg font-semibold">{formatCurrency(breakdown.equipmentCost)}</p>
                </div>
              </div>

              {/* Equipment Breakdown */}
              <div className="pl-4 space-y-1 text-xs text-gray-600">
                {breakdown.equipmentDetails.dehumidifiers.qty > 0 && (
                  <div className="flex justify-between">
                    <span>
                      {breakdown.equipmentDetails.dehumidifiers.qty} Dehumidifier(s) × {breakdown.equipmentDetails.dehumidifiers.days} day(s)
                    </span>
                    <span>{formatCurrency(breakdown.equipmentDetails.dehumidifiers.cost)}</span>
                  </div>
                )}
                {breakdown.equipmentDetails.airMovers.qty > 0 && (
                  <div className="flex justify-between">
                    <span>
                      {breakdown.equipmentDetails.airMovers.qty} Air Mover(s) × {breakdown.equipmentDetails.airMovers.days} day(s)
                    </span>
                    <span>{formatCurrency(breakdown.equipmentDetails.airMovers.cost)}</span>
                  </div>
                )}
                {breakdown.equipmentDetails.rcdBox.qty > 0 && (
                  <div className="flex justify-between">
                    <span>
                      {breakdown.equipmentDetails.rcdBox.qty} RCD Box(es) × {breakdown.equipmentDetails.rcdBox.days} day(s)
                    </span>
                    <span>{formatCurrency(breakdown.equipmentDetails.rcdBox.cost)}</span>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Subtotal */}
          <div className="border-t pt-3 flex justify-between items-center">
            <p className="text-sm font-medium">Subtotal</p>
            <p className="text-lg font-semibold">{formatCurrency(breakdown.subtotal)}</p>
          </div>

          {/* GST */}
          <div className="flex justify-between items-center text-sm">
            <p className="text-gray-600">GST (10%)</p>
            <p className="font-semibold">{formatCurrency(breakdown.gst)}</p>
          </div>

          {/* Total */}
          <div className="border-t-2 pt-3 flex justify-between items-center">
            <p className="text-lg font-bold">Total Cost</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(breakdown.totalCost)}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Area Breakdown (Collapsible) */}
      {breakdown.areaDetails.length > 0 && (
        <details className="group">
          <summary className="cursor-pointer list-none">
            <Card className="group-open:border-blue-600 transition-colors">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Area Time Breakdown</p>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </summary>

          <Card className="mt-2">
            <CardContent className="pt-4">
              <div className="space-y-3">
                {breakdown.areaDetails.map((area, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">{area.areaName}</p>
                      <div className="text-xs text-gray-500 space-x-2">
                        {area.jobTime > 0 && <span>Job: {area.jobTime}min</span>}
                        {area.demolitionTime > 0 && <span>Demo: {area.demolitionTime}min</span>}
                      </div>
                    </div>
                    <p className="font-semibold text-blue-600">
                      {(area.totalMinutes / 60).toFixed(2)} hrs
                    </p>
                  </div>
                ))}

                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{breakdown.totalHours.toFixed(2)} hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </details>
      )}

      {/* Pricing Info */}
      <Card className="bg-gray-50">
        <CardContent className="pt-4">
          <div className="text-xs text-gray-600 space-y-1">
            <p><strong>Pricing Type:</strong> {breakdown.workType}</p>
            {breakdown.discountPercent > 0 && (
              <p><strong>Discount Applied:</strong> {(breakdown.discountPercent * 100).toFixed(1)}% volume discount</p>
            )}
            <p className="text-gray-500 italic mt-2">
              All prices exclude GST. Final cost includes 10% GST.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
