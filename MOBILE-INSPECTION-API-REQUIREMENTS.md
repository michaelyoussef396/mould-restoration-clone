# Mobile Inspection Form - API Requirements

> **Last Updated**: October 5, 2025
> **Status**: Documentation for API implementation

---

## Overview

This document lists all API endpoints required for the mobile inspection form to function. It separates existing endpoints from those that need to be implemented.

---

## ✅ Existing Endpoints (Already Built)

These endpoints are already implemented in `api-server.js`:

### Inspection Core
```typescript
POST   /api/inspections/:id/start
// Body: { arrivedAt: ISO8601 }
// Returns: { inspection, jobNumber }
// Status: ✅ WORKING

GET    /api/inspections/:id/draft
// Returns: Complete inspection data
// Status: ✅ WORKING

PUT    /api/inspections/:id/complete
// Body: { } (auto-calculates cost)
// Returns: { inspection, costCalculation }
// Status: ✅ WORKING

POST   /api/inspections/:id/calculate-cost
// Body: { areas, subfloorTreatmentTime, equipment, dryingDays }
// Returns: { labourCost, equipmentCost, subtotal, gst, totalCost, breakdown }
// Status: ✅ WORKING (uses CostCalculationService)
```

---

## ❌ Missing Endpoints (Need to Build)

These endpoints are called by the components but don't exist yet:

### Section Update Endpoints (8 endpoints)

```typescript
PUT /api/inspections/:id/header
// Body: { triage, address, attentionTo, inspectionDate, ... }
// Updates: Header section fields
// Priority: MEDIUM
// Estimated: 30 min

PUT /api/inspections/:id/property
// Body: { occupation, dwellingType }
// Updates: Property section fields
// Priority: MEDIUM
// Estimated: 30 min

PUT /api/inspections/:id/waste
// Body: { wasteDisposalEnabled, wasteAmount }
// Updates: Waste section fields
// Priority: LOW
// Estimated: 30 min

PUT /api/inspections/:id/outdoor
// Body: { outdoorTemperature, outdoorHumidity, dewPoint, comments, ... }
// Updates: Outdoor section fields
// Priority: MEDIUM
// Estimated: 30 min

PUT /api/inspections/:id/procedure
// Body: { hepaVac, antimicrobial, dryingEquipmentEnabled, dehumidifierQty, ... }
// Updates: Procedure section fields
// Priority: MEDIUM
// Estimated: 30 min

PUT /api/inspections/:id/summary
// Body: { recommendDehumidifier, causeOfMould, parkingOptions, ... }
// Updates: Summary section fields
// Priority: MEDIUM
// Estimated: 30 min

PUT /api/inspections/:id/subfloor
// Body: { subfloorEnabled, subfloorObservations, subfloorLandscape, ... }
// Updates: Subfloor section fields
// Priority: LOW
// Estimated: 30 min
```

**Total for section updates**: ~3.5 hours

**Note**: These can be combined into a single generic endpoint:
```typescript
PATCH /api/inspections/:id/section
// Body: { section: 'header'|'property'|etc, data: {...} }
// This would reduce implementation time to ~1 hour
```

---

### Area CRUD Endpoints (4 endpoints)

```typescript
POST /api/inspections/:id/areas
// Body: { areaName, orderIndex, mouldVisibility, ... }
// Returns: { area with generated ID }
// Priority: HIGH
// Estimated: 1 hour

PATCH /api/inspections/:id/areas/:areaId
// Body: { areaName, mouldVisibility, temperature, ... }
// Updates: Any area field
// Priority: HIGH
// Estimated: 30 min

DELETE /api/inspections/:id/areas/:areaId
// Returns: { success: true }
// Priority: HIGH
// Estimated: 30 min

GET /api/inspections/:id/areas
// Returns: Array of areas for inspection
// Priority: MEDIUM (could use /draft instead)
// Estimated: 30 min (optional)
```

**Total for areas**: ~2.5 hours

---

### Photo Upload Endpoints (6 endpoints)

All photo endpoints follow same pattern:
1. Accept FormData with compressed JPEG blob
2. Save to disk/cloud storage
3. Return URL

```typescript
POST /api/inspections/:id/outdoor/photos
// FormData: { photo: Blob, photoType: 'frontDoor'|'frontHouse'|etc }
// Returns: { url: string, thumbnail?: string }
// Priority: HIGH
// Estimated: 1 hour (template for all photo endpoints)

POST /api/inspections/:id/outdoor/direction-photos
// FormData: { photo: Blob }
// Returns: { url: string }
// Priority: MEDIUM
// Estimated: 30 min

POST /api/inspections/:id/areas/:areaId/photos
// FormData: { photo: Blob, photoType: 'roomPhoto1'|'roomPhoto2'|'roomPhoto3'|'infraredPhoto'|'infraredNaturalPhoto' }
// Returns: { url: string }
// Priority: HIGH
// Estimated: 30 min

POST /api/inspections/:id/areas/:areaId/moisture-photos
// FormData: { photo: Blob, readingIndex: number }
// Returns: { url: string }
// Priority: MEDIUM
// Estimated: 30 min

POST /api/inspections/:id/subfloor/photos
// FormData: { photo: Blob }
// Returns: { url: string }
// Priority: MEDIUM
// Estimated: 30 min

POST /api/inspections/:id/subfloor/reading-photos
// FormData: { photo: Blob, readingIndex: number }
// Returns: { url: string }
// Priority: LOW
// Estimated: 30 min
```

**Total for photos**: ~3.5 hours

**Photo Storage Options**:
- **Option 1**: Local filesystem (`/uploads/inspections/:id/...`) - Simple, immediate
- **Option 2**: AWS S3 / Cloudinary - Production-ready, requires setup
- **Recommendation**: Start with local filesystem, migrate to cloud later

---

### AI Generation Endpoints (4 endpoints)

These call OpenAI GPT-4 API with specific prompts:

```typescript
POST /api/inspections/:id/generate-cause-of-mould
// Body: { areas, outdoorTemp, outdoorHumidity, subfloorObservations }
// Returns: { causeOfMould: string }
// Uses: All inspection data to analyze root cause
// Priority: MEDIUM
// Estimated: 1 hour (template for all AI endpoints)

POST /api/inspections/:id/areas/:areaId/generate-comments
// Body: { mouldVisibility, temperature, humidity, dewPoint }
// Returns: { comments: string }
// Uses: Area-specific data for professional paragraph
// Priority: MEDIUM
// Estimated: 30 min

POST /api/inspections/:id/areas/:areaId/generate-demolition
// Body: { areaName, mouldVisibility, demolitionTime }
// Returns: { description: string }
// Uses: Mould locations to create bulleted work order
// Priority: MEDIUM
// Estimated: 30 min

POST /api/inspections/:id/subfloor/generate-comments
// Body: { observations, landscape, sanitationRequired, rackingRequired }
// Returns: { comments: string }
// Uses: Technician observations for professional paragraph
// Priority: LOW
// Estimated: 30 min
```

**Total for AI**: ~2.5 hours

**OpenAI Integration**:
```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateText(systemPrompt: string, userPrompt: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return completion.choices[0].message.content;
}
```

**Example Prompts**:
```
CAUSE OF MOULD:
System: You are a professional mould inspector writing a root cause analysis.
User: Areas affected: [list], Outdoor temp: 18°C, humidity: 75%, dew point: 13.5°C...

AREA COMMENTS:
System: You are a professional mould inspector documenting findings.
User: Mould visible on: Ceiling, Walls. Temp: 20°C, Humidity: 68%, Dew point: 14°C...

DEMOLITION DESCRIPTION:
System: You are creating a work order for demolition technicians.
User: Area: Bathroom. Mould on: Ceiling, Cornice, Walls. Estimated time: 60 minutes...

SUBFLOOR COMMENTS:
System: You are a professional subfloor inspector.
User: Observations: Standing water visible, poor ventilation, debris accumulation...
```

---

## Implementation Priority

### Phase 1: Core Functionality (HIGH - 6 hours)
```
1. Area CRUD endpoints (2.5 hours)
2. Photo upload template + outdoor photos (1.5 hours)
3. Generic section update endpoint (1 hour)
4. AI generation template + cause of mould (1 hour)
```
After Phase 1: Users can create areas, upload photos, and get basic AI assistance.

### Phase 2: Complete Features (MEDIUM - 5 hours)
```
5. All photo endpoints (2 hours)
6. All AI endpoints (1.5 hours)
7. All section-specific endpoints (1.5 hours)
```
After Phase 2: All features work, no limitations.

### Phase 3: Production Ready (LOW - 2 hours)
```
8. Cloud photo storage migration (1 hour)
9. Error handling improvements (0.5 hour)
10. API rate limiting and validation (0.5 hour)
```
After Phase 3: Production-ready, scalable, secure.

---

## Total Implementation Time

| Priority | Endpoints | Time |
|----------|-----------|------|
| HIGH     | 7         | 6h   |
| MEDIUM   | 10        | 5h   |
| LOW      | 4         | 2h   |
| **Total** | **21** | **13h** |

**Timeline**: 2-3 days for complete API implementation

---

## Testing Endpoints

For each endpoint, test with:

```bash
# Start API server
node api-server.js

# Test section update
curl -X PUT http://localhost:3001/api/inspections/:id/header \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"triage":"EMERGENCY","address":"123 Test St"}'

# Test area creation
curl -X POST http://localhost:3001/api/inspections/:id/areas \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"areaName":"Bathroom","mouldVisibility":"[\"Ceiling\",\"Walls\"]"}'

# Test photo upload
curl -X POST http://localhost:3001/api/inspections/:id/outdoor/photos \
  -H "Authorization: Bearer $TOKEN" \
  -F "photo=@test.jpg" \
  -F "photoType=frontDoor"

# Test AI generation
curl -X POST http://localhost:3001/api/inspections/:id/generate-cause-of-mould \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"areas":[...],"outdoorTemp":18,"outdoorHumidity":75}'
```

---

## Database Schema Support

All endpoints are supported by existing Prisma schema:

```prisma
model Inspection {
  // ✅ All inspection fields exist
  id, jobNumber, status, triage, address, ...

  // ✅ Relationships
  areas         InspectionArea[]
  subfloorReadings SubfloorReading[]
}

model InspectionArea {
  // ✅ All area fields exist
  id, areaName, mouldVisibility, temperature, ...
  moistureReadings MoistureReading[]
}

model MoistureReading {
  // ✅ All reading fields exist
  id, title, photos, orderIndex
}

model SubfloorReading {
  // ✅ All reading fields exist
  id, title, photos, orderIndex
}
```

No schema changes needed! ✅

---

## Next Steps

1. **Choose Priority**: Decide which phase to implement first
2. **Set Up OpenAI**: Get API key if building AI features
3. **Choose Storage**: Local filesystem or cloud storage for photos
4. **Build Template**: Create first endpoint, copy pattern for rest
5. **Test Each**: Test with curl/Postman before frontend integration
6. **Document**: Update this file with actual URLs and response formats

---

**Status**: Ready to implement
**Blocker**: None - all dependencies in place
**Recommendation**: Start with Phase 1 (HIGH priority) to get core functionality working
