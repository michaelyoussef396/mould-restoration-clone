/**
 * Cost Calculation Service Tests
 * Verifies complex pricing logic against business requirements
 */

import { describe, test, expect } from 'vitest';
import { CostCalculationService, type InspectionCostData } from './costCalculationService';

const calculator = new CostCalculationService();

describe('CostCalculationService', () => {

  describe('Work Type Determination', () => {
    test('should identify SUBFLOOR work when subfloor enabled', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: true,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.workType).toBe('SUBFLOOR');
    });

    test('should identify DEMOLITION work when any area has demolition', () => {
      const data: InspectionCostData = {
        areas: [
          { areaName: 'Room 1', jobTime: 60, demolitionRequired: false },
          { areaName: 'Room 2', jobTime: 60, demolitionRequired: true, demolitionTime: 30 }
        ],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.workType).toBe('DEMOLITION');
    });

    test('should identify CONSTRUCTION work for construction dwelling', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'CONSTRUCTION',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.workType).toBe('CONSTRUCTION');
    });

    test('should default to SURFACE work', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.workType).toBe('SURFACE');
    });
  });

  describe('Total Hours Calculation', () => {
    test('should sum job times across areas', () => {
      const data: InspectionCostData = {
        areas: [
          { areaName: 'Room 1', jobTime: 60, demolitionRequired: false },
          { areaName: 'Room 2', jobTime: 90, demolitionRequired: false },
          { areaName: 'Room 3', jobTime: 30, demolitionRequired: false }
        ],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.totalHours).toBe(3); // 180 minutes / 60 = 3 hours
    });

    test('should include demolition time when applicable', () => {
      const data: InspectionCostData = {
        areas: [
          { areaName: 'Room 1', jobTime: 60, demolitionRequired: true, demolitionTime: 30 },
          { areaName: 'Room 2', jobTime: 60, demolitionRequired: false }
        ],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.totalHours).toBe(2.5); // (60+30+60) / 60 = 2.5 hours
    });
  });

  describe('Pricing Anchors - Exact Matches', () => {
    test('SURFACE: 2 hours should equal $612.00', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.labourCost).toBe(612.00);
    });

    test('SURFACE: 8 hours should equal $1,216.99', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 480, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.labourCost).toBe(1216.99);
    });

    test('DEMOLITION: 2 hours should equal $711.90', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 60, demolitionRequired: true, demolitionTime: 60 }],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.labourCost).toBe(711.90);
    });

    test('SUBFLOOR: 2 hours should equal $900.00', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: true,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.labourCost).toBe(900.00);
    });
  });

  describe('Discount Application', () => {
    test('0-8 hours: No discount (0%)', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 300, demolitionRequired: false }], // 5 hours
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.discountPercent).toBe(0);
    });

    test('8-16 hours: 7.5% discount', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 720, demolitionRequired: false }], // 12 hours
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.discountPercent).toBe(0.075);
    });

    test('16-24 hours: 10% discount', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 1200, demolitionRequired: false }], // 20 hours
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.discountPercent).toBe(0.10);
    });

    test('24+ hours: 13% discount (max)', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 1800, demolitionRequired: false }], // 30 hours
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.discountPercent).toBe(0.13);
    });
  });

  describe('Equipment Costs', () => {
    test('No equipment when drying equipment disabled', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 5,
        airMoverQty: 3,
        rcdBoxQty: 1
      };

      const result = calculator.calculate(data);
      expect(result.equipmentCost).toBe(0);
    });

    test('Dehumidifier: $132/day × qty × days', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }], // 2 hours = 1 day
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: true,
        dehumidifierQty: 2,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.equipmentDetails.dehumidifiers.cost).toBe(264); // $132 × 2 × 1
      expect(result.equipmentCost).toBe(264);
    });

    test('Air Mover: $46/day × qty × days', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: true,
        dehumidifierQty: 0,
        airMoverQty: 4,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.equipmentDetails.airMovers.cost).toBe(184); // $46 × 4 × 1
    });

    test('RCD Box: $5/day × qty × days', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: true,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 2
      };

      const result = calculator.calculate(data);
      expect(result.equipmentDetails.rcdBox.cost).toBe(10); // $5 × 2 × 1
    });

    test('Days should round up (partial days count as full)', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 1500, demolitionRequired: false }], // 25 hours = 2 days
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: true,
        dehumidifierQty: 1,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      expect(result.equipmentDetails.dehumidifiers.days).toBe(2);
      expect(result.equipmentDetails.dehumidifiers.cost).toBe(264); // $132 × 1 × 2
    });

    test('All equipment combined', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 480, demolitionRequired: false }], // 8 hours = 1 day
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: true,
        dehumidifierQty: 2,
        airMoverQty: 3,
        rcdBoxQty: 1
      };

      const result = calculator.calculate(data);
      // Dehumidifier: $132 × 2 × 1 = $264
      // Air Mover: $46 × 3 × 1 = $138
      // RCD Box: $5 × 1 × 1 = $5
      // Total: $407
      expect(result.equipmentCost).toBe(407);
    });
  });

  describe('GST Calculation', () => {
    test('GST should be 10% of subtotal', () => {
      const data: InspectionCostData = {
        areas: [{ areaName: 'Room 1', jobTime: 120, demolitionRequired: false }],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);
      // Labour: $612.00
      // Equipment: $0
      // Subtotal: $612.00
      // GST: $61.20 (10%)
      expect(result.gst).toBe(61.20);
      expect(result.totalCost).toBe(673.20); // $612.00 + $61.20
    });
  });

  describe('Complete Real-World Scenarios', () => {
    test('Scenario 1: Simple 2-hour surface job', () => {
      const data: InspectionCostData = {
        areas: [
          { areaName: 'Bedroom', jobTime: 120, demolitionRequired: false }
        ],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: false,
        dehumidifierQty: 0,
        airMoverQty: 0,
        rcdBoxQty: 0
      };

      const result = calculator.calculate(data);

      expect(result.workType).toBe('SURFACE');
      expect(result.totalHours).toBe(2);
      expect(result.labourCost).toBe(612.00);
      expect(result.equipmentCost).toBe(0);
      expect(result.subtotal).toBe(612.00);
      expect(result.gst).toBe(61.20);
      expect(result.totalCost).toBe(673.20);
      expect(result.discountPercent).toBe(0);
    });

    test('Scenario 2: Demolition job with equipment (12 hours)', () => {
      const data: InspectionCostData = {
        areas: [
          { areaName: 'Bathroom', jobTime: 180, demolitionRequired: true, demolitionTime: 120 },
          { areaName: 'Kitchen', jobTime: 240, demolitionRequired: true, demolitionTime: 180 }
        ],
        dwellingType: 'HOUSE',
        subfloorEnabled: false,
        dryingEquipmentEnabled: true,
        dehumidifierQty: 2,
        airMoverQty: 3,
        rcdBoxQty: 1
      };

      const result = calculator.calculate(data);

      expect(result.workType).toBe('DEMOLITION');
      expect(result.totalHours).toBe(12); // 720 minutes
      expect(result.discountPercent).toBe(0.075); // 7.5% discount

      // Labour calculation (with interpolation + discount)
      // Equipment: (132×2 + 46×3 + 5×1) × 1 day = $407
      expect(result.equipmentCost).toBe(407);
    });

    test('Scenario 3: Large subfloor job (30 hours) with max discount', () => {
      const data: InspectionCostData = {
        areas: [
          { areaName: 'Entire House', jobTime: 1800, demolitionRequired: false }
        ],
        dwellingType: 'HOUSE',
        subfloorEnabled: true,
        dryingEquipmentEnabled: true,
        dehumidifierQty: 3,
        airMoverQty: 6,
        rcdBoxQty: 2
      };

      const result = calculator.calculate(data);

      expect(result.workType).toBe('SUBFLOOR');
      expect(result.totalHours).toBe(30);
      expect(result.discountPercent).toBe(0.13); // 13% max discount

      // Equipment: 2 days (30hrs / 24 = 1.25, rounds to 2)
      expect(result.equipmentDetails.dehumidifiers.days).toBe(2);
      expect(result.equipmentDetails.dehumidifiers.cost).toBe(792); // $132 × 3 × 2
      expect(result.equipmentDetails.airMovers.cost).toBe(552); // $46 × 6 × 2
      expect(result.equipmentDetails.rcdBox.cost).toBe(20); // $5 × 2 × 2
      expect(result.equipmentCost).toBe(1364); // Total equipment
    });
  });
});
