/**
 * Mobile Inspection Form API Routes
 *
 * Comprehensive endpoints for 15-section mobile inspection workflow:
 * - Section 1: Auto-generated Header
 * - Section 2: Property Information
 * - Section 3: Area Assessments (repeatable)
 * - Section 4: Subfloor (toggle)
 * - Section 5: Outdoor Information
 * - Section 6: Waste Disposal
 * - Section 7: Work Procedure
 * - Section 8: Job Summary
 *
 * Plus: Cost calculation, photo upload, AI generation, completion
 */

import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import OpenAI from 'openai';

const prisma = new PrismaClient();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const { id } = req.params;
    const uploadPath = path.join(__dirname, '..', 'uploads', 'inspections', id);

    // Create directory if it doesn't exist
    await fs.promises.mkdir(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed'));
  }
});

// Initialize OpenAI (will use env var OPENAI_API_KEY if available)
let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// Helper: API response formatter
const apiResponse = {
  success: (data, message = 'Success') => ({
    success: true,
    message,
    data
  }),
  error: (message, statusCode = 400, details = null) => ({
    success: false,
    message,
    statusCode,
    details
  })
};

// Helper: Generate unique job number
function generateJobNumber() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `MRC-${year}-${random}`;
}

// Helper: Calculate dew point from temperature and humidity
function calculateDewPoint(temperature, humidity) {
  // Magnus formula for dew point calculation
  const a = 17.27;
  const b = 237.7;

  const alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100);
  const dewPoint = (b * alpha) / (a - alpha);

  return Math.round(dewPoint * 10) / 10; // Round to 1 decimal
}

export function registerMobileInspectionRoutes(app, authenticateToken) {

  // ============================================================================
  // INSPECTION WORKFLOW ENDPOINTS
  // ============================================================================

  /**
   * POST /api/inspections/:id/start
   * Start inspection workflow - marks inspection as IN_PROGRESS
   */
  app.post('/api/inspections/:id/start', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { arrivedAt, attentionTo } = req.body;

      // Get inspection with lead data
      const inspection = await prisma.inspection.findUnique({
        where: { id },
        include: { lead: true, technician: true }
      });

      if (!inspection) {
        return res.status(404).json(apiResponse.error('Inspection not found', 404));
      }

      // Generate job number if not exists
      const jobNumber = inspection.jobNumber || generateJobNumber();

      // Update inspection
      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          status: 'IN_PROGRESS',
          startedAt: new Date(),
          arrivedAt: arrivedAt ? new Date(arrivedAt) : new Date(),
          attentionTo: attentionTo || null,
          jobNumber,
          // Pre-populate from lead
          triage: inspection.lead.notes || `${inspection.lead.serviceType} - ${inspection.lead.suburb}`,
          address: inspection.lead.address || `${inspection.lead.suburb}, VIC ${inspection.lead.postcode}`,
          requestedBy: `${inspection.lead.firstName} ${inspection.lead.lastName}`,
          inspectionDate: new Date()
        },
        include: {
          lead: true,
          technician: true,
          inspector: true
        }
      });

      res.json(apiResponse.success({
        inspection: updated,
        jobNumber
      }, 'Inspection started successfully'));

    } catch (error) {
      console.error('Error starting inspection:', error);
      res.status(500).json(apiResponse.error('Failed to start inspection', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/header
   * Update header information (Section 1)
   */
  app.put('/api/inspections/:id/header', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { inspectorId, attentionTo, inspectionDate } = req.body;

      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          inspectorId: inspectorId || undefined,
          attentionTo: attentionTo || undefined,
          inspectionDate: inspectionDate ? new Date(inspectionDate) : undefined
        },
        include: {
          inspector: true
        }
      });

      res.json(apiResponse.success(updated, 'Header updated successfully'));

    } catch (error) {
      console.error('Error updating header:', error);
      res.status(500).json(apiResponse.error('Failed to update header', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/property
   * Update property information (Section 2)
   */
  app.put('/api/inspections/:id/property', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { propertyOccupation, dwellingType } = req.body;

      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          propertyOccupation: propertyOccupation || undefined,
          dwellingType: dwellingType || undefined
        }
      });

      res.json(apiResponse.success(updated, 'Property information updated'));

    } catch (error) {
      console.error('Error updating property:', error);
      res.status(500).json(apiResponse.error('Failed to update property information', 500, error.message));
    }
  });

  // ============================================================================
  // AREA MANAGEMENT ENDPOINTS (Section 3)
  // ============================================================================

  /**
   * POST /api/inspections/:id/areas
   * Create new area assessment
   */
  app.post('/api/inspections/:id/areas', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const areaData = req.body;

      // Count existing areas to set order
      const existingCount = await prisma.inspectionArea.count({
        where: { inspectionId: id }
      });

      // Calculate dew point if temp and humidity provided
      let dewPoint = null;
      if (areaData.temperature && areaData.humidity) {
        dewPoint = calculateDewPoint(areaData.temperature, areaData.humidity);
      }

      const area = await prisma.inspectionArea.create({
        data: {
          inspectionId: id,
          areaName: areaData.areaName,
          orderIndex: existingCount,
          mouldVisibility: JSON.stringify(areaData.mouldVisibility || []),
          temperature: areaData.temperature || null,
          humidity: areaData.humidity || null,
          dewPoint,
          jobTime: areaData.jobTime || 0,
          demolitionRequired: areaData.demolitionRequired || false,
          demolitionTime: areaData.demolitionTime || null,
          moistureReadingEnabled: areaData.moistureReadingEnabled || false,
          infraredEnabled: areaData.infraredEnabled || false
        }
      });

      res.json(apiResponse.success({
        area,
        dewPoint
      }, 'Area created successfully'));

    } catch (error) {
      console.error('Error creating area:', error);
      res.status(500).json(apiResponse.error('Failed to create area', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/areas/:areaId
   * Update existing area
   */
  app.put('/api/inspections/:id/areas/:areaId', authenticateToken, async (req, res) => {
    try {
      const { areaId } = req.params;
      const updates = req.body;

      // Recalculate dew point if temp or humidity changed
      let dewPoint = updates.dewPoint;
      if (updates.temperature !== undefined || updates.humidity !== undefined) {
        const currentArea = await prisma.inspectionArea.findUnique({
          where: { id: areaId }
        });

        const temp = updates.temperature !== undefined ? updates.temperature : currentArea.temperature;
        const hum = updates.humidity !== undefined ? updates.humidity : currentArea.humidity;

        if (temp && hum) {
          dewPoint = calculateDewPoint(temp, hum);
        }
      }

      // Prepare update data
      const updateData = {
        ...updates,
        dewPoint: dewPoint !== undefined ? dewPoint : undefined,
        mouldVisibility: updates.mouldVisibility ? JSON.stringify(updates.mouldVisibility) : undefined
      };

      // Remove undefined values
      Object.keys(updateData).forEach(key =>
        updateData[key] === undefined && delete updateData[key]
      );

      const updated = await prisma.inspectionArea.update({
        where: { id: areaId },
        data: updateData,
        include: {
          moistureReadings: true
        }
      });

      res.json(apiResponse.success(updated, 'Area updated successfully'));

    } catch (error) {
      console.error('Error updating area:', error);
      res.status(500).json(apiResponse.error('Failed to update area', 500, error.message));
    }
  });

  /**
   * DELETE /api/inspections/:id/areas/:areaId
   * Delete area assessment
   */
  app.delete('/api/inspections/:id/areas/:areaId', authenticateToken, async (req, res) => {
    try {
      const { areaId } = req.params;

      await prisma.inspectionArea.delete({
        where: { id: areaId }
      });

      res.json(apiResponse.success(null, 'Area deleted successfully'));

    } catch (error) {
      console.error('Error deleting area:', error);
      res.status(500).json(apiResponse.error('Failed to delete area', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/areas/reorder
   * Reorder areas
   */
  app.put('/api/inspections/:id/areas/reorder', authenticateToken, async (req, res) => {
    try {
      const { areaIds } = req.body; // Array of area IDs in new order

      // Update orderIndex for each area
      const updates = areaIds.map((areaId, index) =>
        prisma.inspectionArea.update({
          where: { id: areaId },
          data: { orderIndex: index }
        })
      );

      await prisma.$transaction(updates);

      res.json(apiResponse.success(null, 'Areas reordered successfully'));

    } catch (error) {
      console.error('Error reordering areas:', error);
      res.status(500).json(apiResponse.error('Failed to reorder areas', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/areas/:areaId/comments
   * Update area comments (AI-generated or edited)
   */
  app.put('/api/inspections/:id/areas/:areaId/comments', authenticateToken, async (req, res) => {
    try {
      const { areaId } = req.params;
      const { commentsEdited, approved } = req.body;

      const updated = await prisma.inspectionArea.update({
        where: { id: areaId },
        data: {
          commentsEdited,
          commentsApproved: approved || false
        }
      });

      res.json(apiResponse.success(updated, 'Comments updated successfully'));

    } catch (error) {
      console.error('Error updating comments:', error);
      res.status(500).json(apiResponse.error('Failed to update comments', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/areas/:areaId/demolition
   * Update demolition description (AI-generated or edited)
   */
  app.put('/api/inspections/:id/areas/:areaId/demolition', authenticateToken, async (req, res) => {
    try {
      const { areaId } = req.params;
      const { demolitionDescEdited, approved } = req.body;

      const updated = await prisma.inspectionArea.update({
        where: { id: areaId },
        data: {
          demolitionDescEdited,
          demolitionDescApproved: approved || false
        }
      });

      res.json(apiResponse.success(updated, 'Demolition description updated'));

    } catch (error) {
      console.error('Error updating demolition:', error);
      res.status(500).json(apiResponse.error('Failed to update demolition description', 500, error.message));
    }
  });

  // ============================================================================
  // MOISTURE READING ENDPOINTS (Section 3 - nested)
  // ============================================================================

  /**
   * POST /api/inspections/:id/areas/:areaId/readings
   * Add moisture reading to area
   */
  app.post('/api/inspections/:id/areas/:areaId/readings', authenticateToken, async (req, res) => {
    try {
      const { areaId } = req.params;
      const { title, photos } = req.body;

      // Count existing readings for order
      const existingCount = await prisma.moistureReading.count({
        where: { areaId }
      });

      const reading = await prisma.moistureReading.create({
        data: {
          areaId,
          title,
          photos: JSON.stringify(photos || []),
          orderIndex: existingCount
        }
      });

      res.json(apiResponse.success(reading, 'Moisture reading added'));

    } catch (error) {
      console.error('Error adding moisture reading:', error);
      res.status(500).json(apiResponse.error('Failed to add moisture reading', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/areas/:areaId/readings/:readingId
   * Update moisture reading
   */
  app.put('/api/inspections/:id/areas/:areaId/readings/:readingId', authenticateToken, async (req, res) => {
    try {
      const { readingId } = req.params;
      const { title, photos } = req.body;

      const updated = await prisma.moistureReading.update({
        where: { id: readingId },
        data: {
          title: title || undefined,
          photos: photos ? JSON.stringify(photos) : undefined
        }
      });

      res.json(apiResponse.success(updated, 'Moisture reading updated'));

    } catch (error) {
      console.error('Error updating moisture reading:', error);
      res.status(500).json(apiResponse.error('Failed to update moisture reading', 500, error.message));
    }
  });

  /**
   * DELETE /api/inspections/:id/areas/:areaId/readings/:readingId
   * Delete moisture reading
   */
  app.delete('/api/inspections/:id/areas/:areaId/readings/:readingId', authenticateToken, async (req, res) => {
    try {
      const { readingId } = req.params;

      await prisma.moistureReading.delete({
        where: { id: readingId }
      });

      res.json(apiResponse.success(null, 'Moisture reading deleted'));

    } catch (error) {
      console.error('Error deleting moisture reading:', error);
      res.status(500).json(apiResponse.error('Failed to delete moisture reading', 500, error.message));
    }
  });

  // ============================================================================
  // SUBFLOOR ENDPOINTS (Section 4)
  // ============================================================================

  /**
   * PUT /api/inspections/:id/subfloor
   * Update subfloor section
   */
  app.put('/api/inspections/:id/subfloor', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const subfloorData = req.body;

      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          subfloorEnabled: subfloorData.subfloorEnabled !== undefined ? subfloorData.subfloorEnabled : undefined,
          subfloorObservations: subfloorData.subfloorObservations || undefined,
          subfloorLandscape: subfloorData.subfloorLandscape || undefined,
          subfloorComments: subfloorData.subfloorComments || undefined,
          subfloorPhotos: subfloorData.subfloorPhotos ? JSON.stringify(subfloorData.subfloorPhotos) : undefined,
          subfloorSanitation: subfloorData.subfloorSanitation !== undefined ? subfloorData.subfloorSanitation : undefined,
          subfloorRacking: subfloorData.subfloorRacking !== undefined ? subfloorData.subfloorRacking : undefined,
          subfloorTreatmentTime: subfloorData.subfloorTreatmentTime || undefined
        }
      });

      res.json(apiResponse.success(updated, 'Subfloor section updated'));

    } catch (error) {
      console.error('Error updating subfloor:', error);
      res.status(500).json(apiResponse.error('Failed to update subfloor section', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/subfloor/readings
   * Add subfloor reading
   */
  app.post('/api/inspections/:id/subfloor/readings', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { moistureValue, location } = req.body;

      const existingCount = await prisma.subfloorReading.count({
        where: { inspectionId: id }
      });

      const reading = await prisma.subfloorReading.create({
        data: {
          inspectionId: id,
          moistureValue,
          location,
          orderIndex: existingCount
        }
      });

      res.json(apiResponse.success(reading, 'Subfloor reading added'));

    } catch (error) {
      console.error('Error adding subfloor reading:', error);
      res.status(500).json(apiResponse.error('Failed to add subfloor reading', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/subfloor/readings/:readingId
   * Update subfloor reading
   */
  app.put('/api/inspections/:id/subfloor/readings/:readingId', authenticateToken, async (req, res) => {
    try {
      const { readingId } = req.params;
      const { moistureValue, location } = req.body;

      const updated = await prisma.subfloorReading.update({
        where: { id: readingId },
        data: {
          moistureValue: moistureValue !== undefined ? moistureValue : undefined,
          location: location || undefined
        }
      });

      res.json(apiResponse.success(updated, 'Subfloor reading updated'));

    } catch (error) {
      console.error('Error updating subfloor reading:', error);
      res.status(500).json(apiResponse.error('Failed to update subfloor reading', 500, error.message));
    }
  });

  /**
   * DELETE /api/inspections/:id/subfloor/readings/:readingId
   * Delete subfloor reading
   */
  app.delete('/api/inspections/:id/subfloor/readings/:readingId', authenticateToken, async (req, res) => {
    try {
      const { readingId } = req.params;

      await prisma.subfloorReading.delete({
        where: { id: readingId }
      });

      res.json(apiResponse.success(null, 'Subfloor reading deleted'));

    } catch (error) {
      console.error('Error deleting subfloor reading:', error);
      res.status(500).json(apiResponse.error('Failed to delete subfloor reading', 500, error.message));
    }
  });

  // ============================================================================
  // OUTDOOR, WASTE, PROCEDURE, SUMMARY ENDPOINTS (Sections 5-8)
  // ============================================================================

  /**
   * PUT /api/inspections/:id/outdoor
   * Update outdoor information (Section 5)
   */
  app.put('/api/inspections/:id/outdoor', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const outdoorData = req.body;

      // Calculate outdoor dew point if provided
      let outdoorDewPoint = outdoorData.outdoorDewPoint;
      if (outdoorData.outdoorTemperature && outdoorData.outdoorHumidity) {
        outdoorDewPoint = calculateDewPoint(outdoorData.outdoorTemperature, outdoorData.outdoorHumidity);
      }

      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          outdoorTemperature: outdoorData.outdoorTemperature || undefined,
          outdoorHumidity: outdoorData.outdoorHumidity || undefined,
          outdoorDewPoint,
          outdoorComments: outdoorData.outdoorComments || undefined,
          frontDoorPhoto: outdoorData.frontDoorPhoto || undefined,
          frontHousePhoto: outdoorData.frontHousePhoto || undefined,
          mailboxPhoto: outdoorData.mailboxPhoto || undefined,
          streetPhoto: outdoorData.streetPhoto || undefined,
          directionPhotosEnabled: outdoorData.directionPhotosEnabled !== undefined ? outdoorData.directionPhotosEnabled : undefined,
          directionPhotos: outdoorData.directionPhotos ? JSON.stringify(outdoorData.directionPhotos) : undefined
        }
      });

      res.json(apiResponse.success({
        inspection: updated,
        dewPoint: outdoorDewPoint
      }, 'Outdoor information updated'));

    } catch (error) {
      console.error('Error updating outdoor:', error);
      res.status(500).json(apiResponse.error('Failed to update outdoor information', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/waste
   * Update waste disposal (Section 6)
   */
  app.put('/api/inspections/:id/waste', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { wasteDisposalEnabled, wasteDisposalAmount } = req.body;

      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          wasteDisposalEnabled: wasteDisposalEnabled !== undefined ? wasteDisposalEnabled : undefined,
          wasteDisposalAmount: wasteDisposalAmount || undefined
        }
      });

      res.json(apiResponse.success(updated, 'Waste disposal updated'));

    } catch (error) {
      console.error('Error updating waste:', error);
      res.status(500).json(apiResponse.error('Failed to update waste disposal', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/procedure
   * Update work procedure (Section 7)
   */
  app.put('/api/inspections/:id/procedure', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const procedureData = req.body;

      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          hepaVac: procedureData.hepaVac !== undefined ? procedureData.hepaVac : undefined,
          antimicrobial: procedureData.antimicrobial !== undefined ? procedureData.antimicrobial : undefined,
          stainRemovingAntimicrobial: procedureData.stainRemovingAntimicrobial !== undefined ? procedureData.stainRemovingAntimicrobial : undefined,
          homeSanitationFogging: procedureData.homeSanitationFogging !== undefined ? procedureData.homeSanitationFogging : undefined,
          dryingEquipmentEnabled: procedureData.dryingEquipmentEnabled !== undefined ? procedureData.dryingEquipmentEnabled : undefined,
          dehumidifierQty: procedureData.dehumidifierQty !== undefined ? procedureData.dehumidifierQty : undefined,
          airMoverQty: procedureData.airMoverQty !== undefined ? procedureData.airMoverQty : undefined,
          rcdBoxQty: procedureData.rcdBoxQty !== undefined ? procedureData.rcdBoxQty : undefined
        }
      });

      res.json(apiResponse.success(updated, 'Work procedure updated'));

    } catch (error) {
      console.error('Error updating procedure:', error);
      res.status(500).json(apiResponse.error('Failed to update work procedure', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/summary
   * Update job summary (Section 8)
   */
  app.put('/api/inspections/:id/summary', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const summaryData = req.body;

      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          recommendDehumidifier: summaryData.recommendDehumidifier !== undefined ? summaryData.recommendDehumidifier : undefined,
          dehumidifierSize: summaryData.dehumidifierSize || undefined,
          causeOfMould: summaryData.causeOfMould || undefined,
          additionalInfoTechnician: summaryData.additionalInfoTechnician || undefined,
          additionalEquipmentComments: summaryData.additionalEquipmentComments || undefined,
          parkingOptions: summaryData.parkingOptions || undefined
        }
      });

      res.json(apiResponse.success(updated, 'Job summary updated'));

    } catch (error) {
      console.error('Error updating summary:', error);
      res.status(500).json(apiResponse.error('Failed to update job summary', 500, error.message));
    }
  });

  // ============================================================================
  // COST CALCULATION & COMPLETION
  // ============================================================================

  /**
   * POST /api/inspections/:id/calculate-cost
   * Calculate live cost based on provided data (for real-time calculation in wizard)
   */
  app.post('/api/inspections/:id/calculate-cost', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { areas, subfloorTreatmentTime, dehumidifierQty, airMoverQty, rcdBoxQty, dryingDays } = req.body;

      // Import cost calculation service
      const { costCalculationService } = await import('../src/lib/services/costCalculationService.ts');

      // Prepare data for calculation (using data from request body)
      const costData = {
        areas: areas || [],
        subfloorTreatmentTime: subfloorTreatmentTime || 0,
        dryingEquipmentEnabled: (dehumidifierQty > 0 || airMoverQty > 0 || rcdBoxQty > 0),
        dehumidifierQty: dehumidifierQty || 0,
        airMoverQty: airMoverQty || 0,
        rcdBoxQty: rcdBoxQty || 0,
        dryingDays: dryingDays || 1
      };

      const breakdown = costCalculationService.calculate(costData);

      res.json(apiResponse.success(breakdown, 'Cost calculated successfully'));

    } catch (error) {
      console.error('Error calculating cost:', error);
      res.status(500).json(apiResponse.error('Failed to calculate cost', 500, error.message));
    }
  });

  /**
   * PUT /api/inspections/:id/complete
   * Complete inspection - finalize and calculate costs
   */
  app.put('/api/inspections/:id/complete', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { finalCost } = req.body; // Optional manual override

      // Get inspection with all data
      const inspection = await prisma.inspection.findUnique({
        where: { id },
        include: {
          areas: { orderBy: { orderIndex: 'asc' } }
        }
      });

      if (!inspection) {
        return res.status(404).json(apiResponse.error('Inspection not found', 404));
      }

      // Calculate cost
      const { costCalculationService } = await import('../src/lib/services/costCalculationService.ts');

      const costData = {
        areas: inspection.areas.map(area => ({
          areaName: area.areaName,
          jobTime: area.jobTime,
          demolitionRequired: area.demolitionRequired,
          demolitionTime: area.demolitionTime
        })),
        dwellingType: inspection.dwellingType,
        subfloorEnabled: inspection.subfloorEnabled,
        dryingEquipmentEnabled: inspection.dryingEquipmentEnabled,
        dehumidifierQty: inspection.dehumidifierQty,
        airMoverQty: inspection.airMoverQty,
        rcdBoxQty: inspection.rcdBoxQty
      };

      const costBreakdown = costCalculationService.calculate(costData);

      // Update inspection
      const updated = await prisma.inspection.update({
        where: { id },
        data: {
          status: 'COMPLETED',
          completedAt: new Date(),
          labourCost: costBreakdown.labourCost,
          equipmentCost: costBreakdown.equipmentCost,
          subtotal: costBreakdown.subtotal,
          gst: costBreakdown.gst,
          totalCost: costBreakdown.totalCost,
          workType: costBreakdown.workType,
          totalHours: costBreakdown.totalHours,
          discountPercent: costBreakdown.discountPercent,
          finalCost: finalCost || costBreakdown.totalCost
        },
        include: {
          lead: true,
          technician: true,
          inspector: true,
          areas: {
            include: {
              moistureReadings: true
            },
            orderBy: { orderIndex: 'asc' }
          },
          subfloorReadings: true
        }
      });

      // Update lead status to FORM_COMPLETED
      await prisma.lead.update({
        where: { id: inspection.leadId },
        data: {
          status: 'FORM_COMPLETED'
        }
      });

      res.json(apiResponse.success({
        inspection: updated,
        costCalculation: costBreakdown
      }, 'Inspection completed successfully'));

    } catch (error) {
      console.error('Error completing inspection:', error);
      res.status(500).json(apiResponse.error('Failed to complete inspection', 500, error.message));
    }
  });

  /**
   * GET /api/inspections/:id/draft
   * Get complete inspection draft for offline sync
   */
  app.get('/api/inspections/:id/draft', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;

      const inspection = await prisma.inspection.findUnique({
        where: { id },
        include: {
          lead: true,
          technician: true,
          inspector: true,
          areas: {
            include: {
              moistureReadings: true
            },
            orderBy: { orderIndex: 'asc' }
          },
          subfloorReadings: {
            orderBy: { orderIndex: 'asc' }
          }
        }
      });

      if (!inspection) {
        return res.status(404).json(apiResponse.error('Inspection not found', 404));
      }

      res.json(apiResponse.success(inspection, 'Inspection draft retrieved'));

    } catch (error) {
      console.error('Error getting draft:', error);
      res.status(500).json(apiResponse.error('Failed to get inspection draft', 500, error.message));
    }
  });

  // ============================================================================
  // PHOTO UPLOAD ENDPOINTS
  // ============================================================================

  /**
   * POST /api/inspections/:id/outdoor/photos
   * Upload outdoor photos (front door, front house, mailbox, street)
   */
  app.post('/api/inspections/:id/outdoor/photos', authenticateToken, upload.single('photo'), async (req, res) => {
    try {
      const { id } = req.params;
      const { photoType } = req.body; // frontDoorPhoto, frontHousePhoto, mailboxPhoto, streetPhoto

      if (!req.file) {
        return res.status(400).json(apiResponse.error('No photo file provided'));
      }

      // Generate photo URL (relative path from uploads directory)
      const photoUrl = `/uploads/inspections/${id}/${req.file.filename}`;

      // Update inspection with photo URL
      const updateField = photoType;
      const updated = await prisma.inspection.update({
        where: { id },
        data: { [updateField]: photoUrl }
      });

      res.json(apiResponse.success({ url: photoUrl }, 'Photo uploaded successfully'));

    } catch (error) {
      console.error('Error uploading outdoor photo:', error);
      res.status(500).json(apiResponse.error('Failed to upload photo', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/outdoor/direction-photos
   * Upload direction photos (unlimited)
   */
  app.post('/api/inspections/:id/outdoor/direction-photos', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;

      const photoUrl = `/uploads/inspections/${id}/outdoor/direction-${Date.now()}.jpg`;

      // Get current direction photos
      const inspection = await prisma.inspection.findUnique({
        where: { id },
        select: { directionPhotos: true }
      });

      const currentPhotos = inspection.directionPhotos ? JSON.parse(inspection.directionPhotos) : [];
      const updatedPhotos = [...currentPhotos, photoUrl];

      await prisma.inspection.update({
        where: { id },
        data: { directionPhotos: JSON.stringify(updatedPhotos) }
      });

      res.json(apiResponse.success({ url: photoUrl }, 'Direction photo uploaded'));

    } catch (error) {
      console.error('Error uploading direction photo:', error);
      res.status(500).json(apiResponse.error('Failed to upload direction photo', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/areas/:areaId/photos
   * Upload area photos (room photos, infrared photos)
   */
  app.post('/api/inspections/:id/areas/:areaId/photos', authenticateToken, async (req, res) => {
    try {
      const { id, areaId } = req.params;
      const { photoType } = req.body; // roomPhoto1, roomPhoto2, roomPhoto3, infraredPhoto, infraredNaturalPhoto

      const photoUrl = `/uploads/inspections/${id}/areas/${areaId}/${photoType}-${Date.now()}.jpg`;

      const updateField = photoType;
      await prisma.inspectionArea.update({
        where: { id: areaId },
        data: { [updateField]: photoUrl }
      });

      res.json(apiResponse.success({ url: photoUrl }, 'Area photo uploaded'));

    } catch (error) {
      console.error('Error uploading area photo:', error);
      res.status(500).json(apiResponse.error('Failed to upload area photo', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/areas/:areaId/moisture-photos
   * Upload moisture reading photos
   */
  app.post('/api/inspections/:id/areas/:areaId/moisture-photos', authenticateToken, async (req, res) => {
    try {
      const { id, areaId } = req.params;
      const { readingIndex } = req.body;

      const photoUrl = `/uploads/inspections/${id}/areas/${areaId}/moisture-${readingIndex}-${Date.now()}.jpg`;

      // Get the reading
      const readings = await prisma.moistureReading.findMany({
        where: { areaId },
        orderBy: { orderIndex: 'asc' }
      });

      if (!readings[readingIndex]) {
        return res.status(404).json(apiResponse.error('Reading not found', 404));
      }

      const reading = readings[readingIndex];
      const currentPhotos = reading.photos ? JSON.parse(reading.photos) : [];
      const updatedPhotos = [...currentPhotos, photoUrl];

      await prisma.moistureReading.update({
        where: { id: reading.id },
        data: { photos: JSON.stringify(updatedPhotos) }
      });

      res.json(apiResponse.success({ url: photoUrl }, 'Moisture reading photo uploaded'));

    } catch (error) {
      console.error('Error uploading moisture photo:', error);
      res.status(500).json(apiResponse.error('Failed to upload moisture photo', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/subfloor/photos
   * Upload subfloor photos (max 20)
   */
  app.post('/api/inspections/:id/subfloor/photos', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;

      const photoUrl = `/uploads/inspections/${id}/subfloor/photo-${Date.now()}.jpg`;

      // Get current photos
      const inspection = await prisma.inspection.findUnique({
        where: { id },
        select: { subfloorPhotos: true }
      });

      const currentPhotos = inspection.subfloorPhotos ? JSON.parse(inspection.subfloorPhotos) : [];

      if (currentPhotos.length >= 20) {
        return res.status(400).json(apiResponse.error('Maximum 20 photos allowed', 400));
      }

      const updatedPhotos = [...currentPhotos, photoUrl];

      await prisma.inspection.update({
        where: { id },
        data: { subfloorPhotos: JSON.stringify(updatedPhotos) }
      });

      res.json(apiResponse.success({ url: photoUrl }, 'Subfloor photo uploaded'));

    } catch (error) {
      console.error('Error uploading subfloor photo:', error);
      res.status(500).json(apiResponse.error('Failed to upload subfloor photo', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/subfloor/reading-photos
   * Upload subfloor reading photos
   */
  app.post('/api/inspections/:id/subfloor/reading-photos', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { readingIndex } = req.body;

      const photoUrl = `/uploads/inspections/${id}/subfloor/reading-${readingIndex}-${Date.now()}.jpg`;

      // Get the reading
      const readings = await prisma.subfloorReading.findMany({
        where: { inspectionId: id },
        orderBy: { orderIndex: 'asc' }
      });

      if (!readings[readingIndex]) {
        return res.status(404).json(apiResponse.error('Reading not found', 404));
      }

      const reading = readings[readingIndex];
      const currentPhotos = reading.photos ? JSON.parse(reading.photos) : [];
      const updatedPhotos = [...currentPhotos, photoUrl];

      await prisma.subfloorReading.update({
        where: { id: reading.id },
        data: { photos: JSON.stringify(updatedPhotos) }
      });

      res.json(apiResponse.success({ url: photoUrl }, 'Subfloor reading photo uploaded'));

    } catch (error) {
      console.error('Error uploading subfloor reading photo:', error);
      res.status(500).json(apiResponse.error('Failed to upload subfloor reading photo', 500, error.message));
    }
  });

  // ============================================================================
  // AI GENERATION ENDPOINTS
  // ============================================================================

  /**
   * POST /api/inspections/:id/generate-cause-of-mould
   * Generate AI analysis of mould cause
   */
  app.post('/api/inspections/:id/generate-cause-of-mould', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { areas, outdoorTemp, outdoorHumidity, subfloorObservations } = req.body;

      let causeOfMould;

      if (openai) {
        // Use OpenAI API
        const areasDescription = areas?.map(a => `${a.areaName} (mould on: ${Array.isArray(a.mouldVisibility) ? a.mouldVisibility.join(', ') : a.mouldVisibility})`).join('; ');

        const prompt = `As a professional mould inspector, analyze the root cause of mould growth based on these findings:

Areas affected: ${areasDescription || 'No areas specified'}
Outdoor temperature: ${outdoorTemp}°C
Outdoor humidity: ${outdoorHumidity}%
${subfloorObservations ? `Subfloor observations: ${subfloorObservations}` : ''}

Provide a professional 2-3 paragraph analysis of the root cause and contributing factors.`;

        const completion = await openai.chat.completions.create({
          model: 'gpt-4',
          messages: [
            { role: 'system', content: 'You are a professional mould inspector with extensive experience in moisture analysis and building science. Write clear, professional reports for property owners.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 300
        });

        causeOfMould = completion.choices[0].message.content;
      } else {
        // Fallback to mock generation
        causeOfMould = `Based on the inspection findings across ${areas?.length || 0} areas, the primary cause of mould growth appears to be elevated moisture levels combined with inadequate ventilation. ` +
          `Outdoor conditions (${outdoorTemp}°C, ${outdoorHumidity}% humidity) indicate a high dew point, contributing to condensation on cooler surfaces. ` +
          `${subfloorObservations ? 'Subfloor inspection revealed additional moisture sources that require attention. ' : ''}` +
          `Immediate remediation and improved ventilation are recommended to prevent recurrence.`;
      }

      // Save to inspection
      await prisma.inspection.update({
        where: { id },
        data: {
          causeOfMouldOriginal: causeOfMould,
          causeOfMould
        }
      });

      res.json(apiResponse.success({ causeOfMould }, 'Cause of mould generated'));

    } catch (error) {
      console.error('Error generating cause of mould:', error);
      res.status(500).json(apiResponse.error('Failed to generate cause of mould', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/areas/:areaId/generate-comments
   * Generate AI comments for area
   */
  app.post('/api/inspections/:id/areas/:areaId/generate-comments', authenticateToken, async (req, res) => {
    try {
      const { areaId } = req.params;
      const { mouldVisibility, temperature, humidity, dewPoint } = req.body;

      // Mock AI generation
      const mouldLocations = mouldVisibility?.length > 0
        ? mouldVisibility.join(', ')
        : 'no visible mould';

      const comments = `Inspection of this area revealed mould growth on ${mouldLocations}. ` +
        `Environmental readings show temperature at ${temperature}°C with ${humidity}% relative humidity, ` +
        `resulting in a dew point of ${dewPoint}°C. These conditions are conducive to mould development. ` +
        `Professional remediation and moisture control measures are recommended.`;

      // Save to area
      await prisma.inspectionArea.update({
        where: { id: areaId },
        data: {
          commentsGenerated: comments,
          commentsEdited: comments,
          commentsApproved: false
        }
      });

      res.json(apiResponse.success({ comments }, 'Area comments generated'));

    } catch (error) {
      console.error('Error generating area comments:', error);
      res.status(500).json(apiResponse.error('Failed to generate comments', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/areas/:areaId/generate-demolition
   * Generate AI demolition work order
   */
  app.post('/api/inspections/:id/areas/:areaId/generate-demolition', authenticateToken, async (req, res) => {
    try {
      const { areaId } = req.params;
      const { areaName, mouldVisibility, demolitionTime } = req.body;

      // Mock AI generation
      const workItems = mouldVisibility?.map(location =>
        `• Remove and dispose of affected ${location.toLowerCase()}`
      ).join('\n') || '• Assess and remove affected materials';

      const description = `Demolition Work Order - ${areaName}\n\n` +
        `Estimated Time: ${demolitionTime} minutes\n\n` +
        `Tasks:\n${workItems}\n` +
        `• Contain work area with plastic sheeting\n` +
        `• Use HEPA filtration during removal\n` +
        `• Double-bag all contaminated materials\n` +
        `• Clean and sanitize exposed surfaces`;

      // Save to area
      await prisma.inspectionArea.update({
        where: { id: areaId },
        data: {
          demolitionDescGenerated: description,
          demolitionDescEdited: description,
          demolitionDescApproved: false
        }
      });

      res.json(apiResponse.success({ description }, 'Demolition description generated'));

    } catch (error) {
      console.error('Error generating demolition description:', error);
      res.status(500).json(apiResponse.error('Failed to generate demolition description', 500, error.message));
    }
  });

  /**
   * POST /api/inspections/:id/subfloor/generate-comments
   * Generate AI comments for subfloor
   */
  app.post('/api/inspections/:id/subfloor/generate-comments', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { observations, landscape, sanitationRequired, rackingRequired } = req.body;

      // Mock AI generation
      const comments = `Subfloor inspection findings: ${observations || 'Standard observations noted'}. ` +
        `The subfloor landscape is ${landscape?.toLowerCase() || 'level'}. ` +
        `${sanitationRequired ? 'Sanitation treatment is required due to organic contamination. ' : ''}` +
        `${rackingRequired ? 'Racking installation is recommended for improved ventilation. ' : ''}` +
        `Overall, the subfloor requires attention to prevent moisture accumulation and maintain structural integrity.`;

      // Save to inspection
      await prisma.inspection.update({
        where: { id },
        data: {
          subfloorCommentsGenerated: comments,
          subfloorCommentsEdited: comments
        }
      });

      res.json(apiResponse.success({ comments }, 'Subfloor comments generated'));

    } catch (error) {
      console.error('Error generating subfloor comments:', error);
      res.status(500).json(apiResponse.error('Failed to generate subfloor comments', 500, error.message));
    }
  });

  // GET /api/inspections/:id/full - Get complete inspection details (for viewing)
  app.get('/api/inspections/:id/full', authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;

      const inspection = await prisma.inspection.findUnique({
        where: { id },
        include: {
          lead: true,
          technician: true,
          inspector: true,
          areas: {
            include: {
              moistureReadings: true
            },
            orderBy: { orderIndex: 'asc' }
          },
          subfloorReadings: {
            orderBy: { orderIndex: 'asc' }
          }
        }
      });

      if (!inspection) {
        return res.status(404).json(apiResponse.error('Inspection not found', 404));
      }

      res.json(apiResponse.success(inspection, 'Inspection details retrieved'));

    } catch (error) {
      console.error('Error fetching full inspection:', error);
      res.status(500).json(apiResponse.error('Failed to fetch inspection', 500, error.message));
    }
  });

  console.log('✅ Mobile Inspection API routes registered (with photo upload & AI generation)');
}
