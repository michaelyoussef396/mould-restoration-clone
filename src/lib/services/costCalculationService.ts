/**
 * Cost Calculation Engine for Mobile Inspection Forms
 *
 * Implements complex tiered pricing based on:
 * - Work type (Surface, Demolition, Construction, Subfloor)
 * - Total hours (with linear interpolation between anchor points)
 * - Volume discounts (7.5%, 10%, 13% at different thresholds)
 * - Equipment hire costs (per day, rounded up)
 *
 * Pricing Anchors (Excluding GST):
 * - Type 1 (Surface):      2hr = $612.00,  8hr = $1,216.99
 * - Type 2 (Demolition):   2hr = $711.90,  8hr = $1,798.90
 * - Type 3 (Construction): 2hr = $661.96,  8hr = $1,507.95
 * - Type 4 (Subfloor):     2hr = $900.00,  8hr = $2,334.69
 *
 * Equipment Rates (Per Day):
 * - Dehumidifier: $132/day
 * - Air Mover:    $46/day
 * - RCD Box:      $5/day
 */

export type WorkType = 'SURFACE' | 'DEMOLITION' | 'CONSTRUCTION' | 'SUBFLOOR';

export interface InspectionAreaData {
  areaName: string;
  jobTime: number; // minutes
  demolitionRequired: boolean;
  demolitionTime?: number; // minutes
}

export interface InspectionCostData {
  areas: InspectionAreaData[];
  dwellingType?: string;
  subfloorEnabled: boolean;
  dryingEquipmentEnabled: boolean;
  dehumidifierQty: number;
  airMoverQty: number;
  rcdBoxQty: number;
}

export interface CostBreakdown {
  labourCost: number;
  equipmentCost: number;
  subtotal: number;
  gst: number;
  totalCost: number;
  workType: WorkType;
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

// Pricing matrix (excluding GST)
const PRICING_ANCHORS = {
  SURFACE: {
    twoHours: 612.00,
    eightHours: 1216.99
  },
  DEMOLITION: {
    twoHours: 711.90,
    eightHours: 1798.90
  },
  CONSTRUCTION: {
    twoHours: 661.96,
    eightHours: 1507.95
  },
  SUBFLOOR: {
    twoHours: 900.00,
    eightHours: 2334.69
  }
} as const;

// Equipment daily rates
const EQUIPMENT_RATES = {
  DEHUMIDIFIER: 132,
  AIR_MOVER: 46,
  RCD_BOX: 5
} as const;

export class CostCalculationService {

  /**
   * Main calculation function
   * Orchestrates the entire cost calculation workflow
   */
  calculate(data: InspectionCostData): CostBreakdown {
    // Step 1: Sum all area times
    const { totalHours, areaDetails } = this.calculateTotalHours(data.areas);

    // Step 2: Determine work type
    const workType = this.determineWorkType(data);

    // Step 3: Calculate hourly rate from anchor points
    const hourlyRate = this.calculateHourlyRate(workType, totalHours);

    // Step 4: Apply discount based on total hours
    const discountPercent = this.getDiscountPercent(totalHours);
    const labourCost = hourlyRate * totalHours * (1 - discountPercent);

    // Step 5: Calculate equipment costs
    const { equipmentCost, equipmentDetails } = this.calculateEquipmentCost(data, totalHours);

    // Step 6: Calculate totals
    const subtotal = labourCost + equipmentCost;
    const gst = subtotal * 0.10; // 10% GST
    const totalCost = subtotal + gst;

    return {
      labourCost: this.roundToTwoDecimals(labourCost),
      equipmentCost: this.roundToTwoDecimals(equipmentCost),
      subtotal: this.roundToTwoDecimals(subtotal),
      gst: this.roundToTwoDecimals(gst),
      totalCost: this.roundToTwoDecimals(totalCost),
      workType,
      totalHours: this.roundToTwoDecimals(totalHours),
      discountPercent,
      areaDetails,
      equipmentDetails
    };
  }

  /**
   * Step 1: Calculate total hours from all areas
   * Sums job time + demolition time for each area
   */
  private calculateTotalHours(areas: InspectionAreaData[]): {
    totalHours: number;
    areaDetails: Array<{
      areaName: string;
      jobTime: number;
      demolitionTime: number;
      totalMinutes: number;
    }>;
  } {
    let totalMinutes = 0;
    const areaDetails = areas.map(area => {
      const jobTime = area.jobTime || 0;
      const demolitionTime = (area.demolitionRequired && area.demolitionTime) ? area.demolitionTime : 0;
      const areaTotalMinutes = jobTime + demolitionTime;

      totalMinutes += areaTotalMinutes;

      return {
        areaName: area.areaName,
        jobTime,
        demolitionTime,
        totalMinutes: areaTotalMinutes
      };
    });

    return {
      totalHours: totalMinutes / 60, // Convert to hours
      areaDetails
    };
  }

  /**
   * Step 2: Determine work type (priority order)
   * Priority: Subfloor > Demolition > Construction > Surface
   */
  private determineWorkType(data: InspectionCostData): WorkType {
    // Priority 1: Subfloor work
    if (data.subfloorEnabled) {
      return 'SUBFLOOR';
    }

    // Priority 2: Demolition work (any area has demolition)
    const hasDemolition = data.areas.some(area =>
      area.demolitionRequired && area.demolitionTime && area.demolitionTime > 0
    );
    if (hasDemolition) {
      return 'DEMOLITION';
    }

    // Priority 3: Construction
    if (data.dwellingType === 'CONSTRUCTION') {
      return 'CONSTRUCTION';
    }

    // Default: Surface work
    return 'SURFACE';
  }

  /**
   * Step 3: Calculate hourly rate using linear interpolation
   *
   * Uses anchor points at 2 hours and 8 hours to establish rate curve
   * Interpolates for values between, extrapolates for values outside
   */
  private calculateHourlyRate(workType: WorkType, hours: number): number {
    const anchors = PRICING_ANCHORS[workType];

    // If exactly 2 or 8 hours, return exact anchor rate
    if (hours === 2) return anchors.twoHours / 2;
    if (hours === 8) return anchors.eightHours / 8;

    // Calculate hourly rates from anchors
    const rate2hr = anchors.twoHours / 2;
    const rate8hr = anchors.eightHours / 8;

    // For values below 2 hours, use 2-hour rate (no extrapolation)
    if (hours < 2) {
      return rate2hr;
    }

    // For values above 8 hours, use 8-hour rate (no extrapolation)
    if (hours > 8) {
      return rate8hr;
    }

    // Linear interpolation between 2 and 8 hours
    // Formula: rate = rate2hr + (rate8hr - rate2hr) * (hours - 2) / (8 - 2)
    const slope = (rate8hr - rate2hr) / (8 - 2);
    const hourlyRate = rate2hr + slope * (hours - 2);

    return hourlyRate;
  }

  /**
   * Step 4: Get discount percentage based on total hours
   *
   * Tiered discount structure:
   * - 0-8 hours:   0% discount
   * - 8-16 hours:  7.5% discount
   * - 16-24 hours: 10% discount
   * - 24+ hours:   13% discount (maximum)
   */
  private getDiscountPercent(hours: number): number {
    if (hours <= 8) return 0;           // 0-8 hours: No discount
    if (hours <= 16) return 0.075;      // 8-16 hours: 7.5% discount
    if (hours <= 24) return 0.10;       // 16-24 hours: 10% discount
    return 0.13;                        // 24+ hours: 13% discount (MAX)
  }

  /**
   * Step 5: Calculate equipment hire costs
   *
   * Equipment is charged per day (24 hours)
   * Days are rounded up (partial days count as full days)
   */
  private calculateEquipmentCost(
    data: InspectionCostData,
    totalHours: number
  ): {
    equipmentCost: number;
    equipmentDetails: CostBreakdown['equipmentDetails'];
  } {
    if (!data.dryingEquipmentEnabled) {
      return {
        equipmentCost: 0,
        equipmentDetails: {
          dehumidifiers: { qty: 0, days: 0, cost: 0 },
          airMovers: { qty: 0, days: 0, cost: 0 },
          rcdBox: { qty: 0, days: 0, cost: 0 }
        }
      };
    }

    // Calculate number of days (round up)
    const days = Math.ceil(totalHours / 24);

    let equipmentCost = 0;
    const equipmentDetails: CostBreakdown['equipmentDetails'] = {
      dehumidifiers: { qty: 0, days: 0, cost: 0 },
      airMovers: { qty: 0, days: 0, cost: 0 },
      rcdBox: { qty: 0, days: 0, cost: 0 }
    };

    // Dehumidifiers
    if (data.dehumidifierQty > 0) {
      const cost = EQUIPMENT_RATES.DEHUMIDIFIER * data.dehumidifierQty * days;
      equipmentCost += cost;
      equipmentDetails.dehumidifiers = {
        qty: data.dehumidifierQty,
        days,
        cost
      };
    }

    // Air movers/blowers
    if (data.airMoverQty > 0) {
      const cost = EQUIPMENT_RATES.AIR_MOVER * data.airMoverQty * days;
      equipmentCost += cost;
      equipmentDetails.airMovers = {
        qty: data.airMoverQty,
        days,
        cost
      };
    }

    // RCD boxes
    if (data.rcdBoxQty > 0) {
      const cost = EQUIPMENT_RATES.RCD_BOX * data.rcdBoxQty * days;
      equipmentCost += cost;
      equipmentDetails.rcdBox = {
        qty: data.rcdBoxQty,
        days,
        cost
      };
    }

    return { equipmentCost, equipmentDetails };
  }

  /**
   * Helper: Round to 2 decimal places for currency
   */
  private roundToTwoDecimals(value: number): number {
    return Math.round(value * 100) / 100;
  }

  /**
   * Format currency for display
   */
  formatCurrency(value: number): string {
    return `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }

  /**
   * Get formatted cost summary for display
   */
  getFormattedSummary(breakdown: CostBreakdown): string {
    return `
Labour: ${this.formatCurrency(breakdown.labourCost)}
Equipment: ${this.formatCurrency(breakdown.equipmentCost)}
Subtotal: ${this.formatCurrency(breakdown.subtotal)}
GST (10%): ${this.formatCurrency(breakdown.gst)}
Total: ${this.formatCurrency(breakdown.totalCost)}

Work Type: ${breakdown.workType}
Total Hours: ${breakdown.totalHours.toFixed(2)}
Discount: ${(breakdown.discountPercent * 100).toFixed(1)}%
    `.trim();
  }
}

// Export singleton instance
export const costCalculationService = new CostCalculationService();
