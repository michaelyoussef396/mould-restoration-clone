# Mobile Inspection Form - Complete Implementation Plan

> **Status**: In Progress (60% Complete)
> **Timeline**: 4 weeks to completion
> **Scope**: Mobile-first inspection form data capture only (NO PDF generation or client booking)

---

## Table of Contents
1. [Current State Assessment](#current-state-assessment)
2. [Database Schema](#database-schema)
3. [API Endpoints](#api-endpoints)
4. [Component Architecture](#component-architecture)
5. [AI Integration Strategy](#ai-integration-strategy)
6. [Offline Storage & Sync](#offline-storage--sync)
7. [Photo Management](#photo-management)
8. [Cost Calculation](#cost-calculation)
9. [4-Week Implementation Timeline](#4-week-implementation-timeline)
10. [Testing Strategy](#testing-strategy)

---

## Current State Assessment

### ✅ What's Already Built (60% Complete)

#### Database Schema (100% Complete)
- **Prisma Schema**: `/prisma/schema.prisma`
- All 15 sections modeled with proper relationships
- Inspection model with 8 main sections
- InspectionArea model (repeatable room assessments)
- MoistureReading model (nested in areas)
- SubfloorReading model
- All enums defined (PropertyOccupation, DwellingType, WorkType, etc.)

#### Cost Calculation Engine (100% Complete)
- **File**: `src/lib/services/costCalculationService.ts`
- Pricing anchors implemented:
  - Surface: 2hr = $612, 8hr = $1,216.99
  - Demolition: 2hr = $711.90, 8hr = $1,798.90
  - Construction: 2hr = $661.96, 8hr = $1,507.95
  - Subfloor: 2hr = $900, 8hr = $2,334.69
- Equipment rates:
  - Dehumidifier: $132/day
  - Air Mover: $46/day
  - RCD Box: $5/day
- Discount logic:
  - 0-8 hours: 0%
  - 8-16 hours: 7.5%
  - 16-24 hours: 10%
  - 24+ hours: 13% (maximum)
- Linear interpolation between anchor points
- GST calculation (10%)
- Full test coverage (100% passing)

#### API Foundation (80% Complete)
- **File**: `api-routes/mobile-inspection.js`
- Basic CRUD operations
- Job number generation (MRC-YYYY-0001)
- Dew point auto-calculation
- Draft auto-save endpoints
- Area/moisture/subfloor CRUD

#### Form Wizard Structure (40% Complete)
- **File**: `src/pages/mobile/InspectionWizard.tsx`
- 8-step wizard navigation
- Progress tracking
- Auto-save logic (2s debounce)
- Component placeholders defined

### ❌ What's Missing (40% Remaining)

#### Component Development (0% Complete)
- 8 section components not built
- Photo capture/management UI
- AI text generation interface
- Moisture reading repeater
- Area assessment repeater

#### Mobile Features (0% Complete)
- IndexedDB offline storage
- Photo compression
- Upload queue with retry
- Sync conflict resolution
- Service Worker setup

#### AI Integration (0% Complete)
- OpenAI API connection
- Comment generation logic
- Demolition description generation
- Cause of mould analysis
- User editing & approval flow

---

## Database Schema

### Primary Models (All Implemented)

#### 1. Inspection (Main Form)
```prisma
model Inspection {
  // SECTION 1: AUTO-GENERATED HEADER
  jobNumber       String?   @unique  // MRC-2025-0001
  triage          String?            // Job description
  address         String?            // Property address
  inspectorId     String?            // Technician
  requestedBy     String?            // Original contact
  attentionTo     String?            // On-site contact
  inspectionDate  DateTime?          // Default: today

  // SECTION 2: PROPERTY INFORMATION
  propertyOccupation PropertyOccupation?
  dwellingType       DwellingType?

  // SECTION 4: SUBFLOOR (toggle on/off)
  subfloorEnabled         Boolean @default(false)
  subfloorObservations    String?    // Textarea → AI
  subfloorLandscape       SubfloorLandscape?
  subfloorComments        String?    // Textarea → AI
  subfloorPhotos          String?    // JSON array (max 20)
  subfloorSanitation      Boolean @default(false)
  subfloorRacking         Boolean @default(false)
  subfloorTreatmentTime   Int?       // Minutes

  // SECTION 5: OUTDOOR INFORMATION
  outdoorTemperature  Float?
  outdoorHumidity     Float?
  outdoorDewPoint     Float?    // Auto-calculated
  outdoorComments     String?
  frontDoorPhoto      String?
  frontHousePhoto     String?
  mailboxPhoto        String?
  streetPhoto         String?
  directionPhotosEnabled Boolean @default(false)
  directionPhotos     String?   // JSON array

  // SECTION 6: WASTE DISPOSAL
  wasteDisposalEnabled Boolean @default(false)
  wasteDisposalAmount  WasteAmount?

  // SECTION 7: WORK PROCEDURE
  hepaVac                    Boolean @default(false)
  antimicrobial              Boolean @default(false)
  stainRemovingAntimicrobial Boolean @default(false)
  homeSanitationFogging      Boolean @default(false)
  dryingEquipmentEnabled     Boolean @default(false)
  dehumidifierQty            Int @default(0)
  airMoverQty                Int @default(0)
  rcdBoxQty                  Int @default(0)

  // SECTION 8: JOB SUMMARY
  recommendDehumidifier      Boolean @default(false)
  dehumidifierSize           DehumidifierSize?
  causeOfMould               String?  // AI-generated
  causeOfMouldOriginal       String?  // AI original
  additionalInfoTechnician   String?
  additionalEquipmentComments String?
  parkingOptions             ParkingOption?

  // COST CALCULATION (auto-calculated)
  labourCost      Float?
  equipmentCost   Float?
  subtotal        Float?
  gst             Float?
  totalCost       Float?
  workType        WorkType?
  totalHours      Float?
  discountPercent Float?

  // Relationships
  areas            InspectionArea[]
  subfloorReadings SubfloorReading[]
}
```

#### 2. InspectionArea (Repeatable Sections)
```prisma
model InspectionArea {
  // SECTION 3: AREA ASSESSMENTS (repeatable)
  areaName     String              // e.g., "Master Bedroom"
  orderIndex   Int                 // Maintain order

  // Mould visibility (multi-select)
  mouldVisibility String           // JSON array
  // Options: Ceiling, Cornice, Windows, Window furnishings,
  //          Walls, Skirting, Flooring, Wardrobe, Cupboard,
  //          Contents, Grout/silicone, No mould visible

  // Environmental readings
  temperature  Float?
  humidity     Float?
  dewPoint     Float?              // Auto-calculated

  // AI-generated comments
  commentsGenerated String?        // AI original
  commentsEdited    String?        // Edited version
  commentsApproved  Boolean @default(false)

  // Moisture reading toggle
  moistureReadingEnabled Boolean @default(false)

  // Internal notes (admin only)
  internalNotes String?

  // Room photos (exactly 3 required)
  roomPhoto1 String?
  roomPhoto2 String?
  roomPhoto3 String?

  // Infrared section (toggle)
  infraredEnabled     Boolean @default(false)
  infraredPhoto       String?
  infraredNaturalPhoto String?
  infraredObservation InfraredObservation?

  // Time tracking for cost calculation
  jobTime        Int              // Minutes (no demolition)
  demolitionRequired Boolean @default(false)
  demolitionTime     Int?         // Demolition minutes

  // AI-generated demolition description
  demolitionDescGenerated String?
  demolitionDescEdited    String?
  demolitionDescApproved  Boolean @default(false)

  // Relationships
  moistureReadings MoistureReading[]
}
```

#### 3. MoistureReading (Nested in Areas)
```prisma
model MoistureReading {
  title      String    // Location description
  photos     String    // JSON array (unlimited)
  orderIndex Int       // Maintain order
}
```

#### 4. SubfloorReading (Section 4)
```prisma
model SubfloorReading {
  moistureValue Float   // Percentage
  location      String  // Description
  orderIndex    Int
}
```

### Enums (All Implemented)

```typescript
enum PropertyOccupation {
  TENANTED, VACANT, OWNER_OCCUPIED, TENANTS_VACATING
}

enum DwellingType {
  HOUSE, UNITS, APARTMENT, DUPLEX, TOWNHOUSE,
  COMMERCIAL, CONSTRUCTION, INDUSTRIAL
}

enum SubfloorLandscape {
  FLAT_BLOCK, SLOPING_BLOCK
}

enum WasteAmount {
  SMALL,        // Disposal bags
  MEDIUM,       // Fill van
  LARGE,        // Fill 2 vans
  EXTRA_LARGE   // Fill skip
}

enum DehumidifierSize {
  SMALL,   // 1 dehumidifier
  MEDIUM,  // 2 dehumidifiers
  LARGE    // Home built-in
}

enum ParkingOption {
  DRIVEWAY, STREET, CARPARK,
  VISITOR_CAR_PARK, NO_NEARBY_PARKING
}

enum InfraredObservation {
  NO_ACTIVE_WATER_INFILTRATION,
  EVIDENCE_WATER_INFILTRATION,
  INDICATIONS_PAST_WATER_INGRESS,
  POSSIBLE_CONDENSATION_VARIATIONS,
  SUSPECTED_MISSING_INSULATION
}

enum WorkType {
  SURFACE,       // Type 1 - No demolition
  DEMOLITION,    // Type 2 - With demolition
  CONSTRUCTION,  // Type 3 - Construction
  SUBFLOOR       // Type 4 - Subfloor work
}
```

---

## API Endpoints

### Current Implementation (80% Complete)

#### Inspection Workflow
```typescript
// START INSPECTION
POST /api/inspections/:id/start
Body: {
  arrivedAt?: string,      // ISO datetime
  attentionTo?: string     // On-site contact
}
Response: {
  success: true,
  data: Inspection          // With auto-generated job number
}

// GET DRAFT (for wizard)
GET /api/inspections/:id/draft
Response: {
  success: true,
  data: Inspection          // Full inspection with areas
}

// AUTO-SAVE SECTION
PATCH /api/inspections/:id/section
Body: {
  section: string,          // e.g., "header", "property"
  data: object              // Section-specific data
}
Response: {
  success: true,
  data: Inspection
}
```

#### Area Management
```typescript
// CREATE AREA
POST /api/inspections/:id/areas
Body: {
  areaName: string,
  orderIndex: number,
  mouldVisibility: string[], // Will be JSON stringified
  temperature?: number,
  humidity?: number,
  jobTime: number,
  demolitionRequired: boolean,
  demolitionTime?: number
}

// UPDATE AREA
PATCH /api/inspections/:inspectionId/areas/:areaId
Body: { ...areaData }

// DELETE AREA
DELETE /api/inspections/:inspectionId/areas/:areaId

// GENERATE AI COMMENTS
POST /api/inspections/:inspectionId/areas/:areaId/generate-comments
Body: {
  mouldVisibility: string[],
  temperature: number,
  humidity: number,
  dewPoint: number
}
Response: {
  success: true,
  data: {
    comments: string        // AI-generated paragraph
  }
}
```

#### Moisture Readings
```typescript
// CREATE MOISTURE READING
POST /api/inspections/:inspectionId/areas/:areaId/moisture-readings
Body: {
  title: string,
  photos: string[],         // URLs
  orderIndex: number
}

// UPDATE/DELETE similar pattern
```

#### Subfloor Operations
```typescript
// CREATE SUBFLOOR READING
POST /api/inspections/:id/subfloor-readings
Body: {
  moistureValue: number,
  location: string,
  orderIndex: number
}
```

#### Cost Calculation
```typescript
// CALCULATE COST
POST /api/inspections/:id/calculate-cost
Body: {
  areas: [{
    areaName: string,
    jobTime: number,
    demolitionRequired: boolean,
    demolitionTime?: number
  }],
  dwellingType?: string,
  subfloorEnabled: boolean,
  dryingEquipmentEnabled: boolean,
  dehumidifierQty: number,
  airMoverQty: number,
  rcdBoxQty: number
}
Response: {
  success: true,
  data: {
    labourCost: number,
    equipmentCost: number,
    subtotal: number,
    gst: number,
    totalCost: number,
    workType: string,
    totalHours: number,
    discountPercent: number,
    areaDetails: [...],
    equipmentDetails: {...}
  }
}
```

#### Completion
```typescript
// COMPLETE INSPECTION
POST /api/inspections/:id/complete
Body: {
  finalCost?: number        // Override if needed
}
Response: {
  success: true,
  data: Inspection          // Status: COMPLETED
}
```

### Missing API Endpoints (20%)

#### AI Text Generation (NOT YET IMPLEMENTED)
```typescript
// GENERATE CAUSE OF MOULD
POST /api/inspections/:id/generate-cause-of-mould
Body: {
  areas: AreaData[],
  outdoorConditions: {...},
  subfloorObservations?: string
}
Response: {
  success: true,
  data: {
    causeOfMould: string     // AI-generated analysis
  }
}

// GENERATE DEMOLITION DESCRIPTION
POST /api/inspections/:inspectionId/areas/:areaId/generate-demolition
Body: {
  mouldVisibility: string[],
  areaName: string,
  demolitionTime: number
}
Response: {
  success: true,
  data: {
    demolitionDesc: string   // AI-generated list
  }
}
```

#### Photo Upload (NOT YET IMPLEMENTED)
```typescript
// UPLOAD PHOTO
POST /api/inspections/:id/photos
Body: FormData {
  photo: File,
  section: string,          // "area", "subfloor", "outdoor"
  areaId?: string,          // If area photo
  photoType?: string        // "room1", "infrared", etc.
}
Response: {
  success: true,
  data: {
    url: string,            // Cloud storage URL
    thumbnail: string       // Optimized thumbnail
  }
}
```

---

## Component Architecture

### Wizard Container (PARTIALLY IMPLEMENTED)
**File**: `src/pages/mobile/InspectionWizard.tsx`

**Current Features**:
- ✅ Step navigation (8 steps)
- ✅ Progress bar
- ✅ Auto-save logic (2s debounce)
- ✅ Loading/saving states
- ✅ Draft data loading

**Missing Features**:
- ❌ Offline detection
- ❌ IndexedDB sync
- ❌ Photo upload queue
- ❌ Conflict resolution

### Section Components (ALL MISSING)

#### 1. HeaderSection Component
**File**: `src/components/mobile-inspection/HeaderSection.tsx` (CREATE)

**Fields**:
- Job Number (auto-generated, read-only)
- Triage (pre-filled from lead, editable)
- Address (pre-filled from lead, editable)
- Inspector (dropdown: technicians)
- Requested By (pre-filled from lead)
- Attention To (text input)
- Inspection Date (date picker, default: today)

**Features**:
- Auto-populate from lead data
- Generate job number on start
- Save on field change

#### 2. PropertySection Component
**File**: `src/components/mobile-inspection/PropertySection.tsx` (CREATE)

**Fields**:
- Property Occupation (dropdown)
  - Options: Tenanted, Vacant, Owner occupied, Tenants vacating
- Dwelling Type (dropdown)
  - Options: House, Units, Apartment, Duplex, Townhouse, Commercial, Construction, Industrial

**Features**:
- Simple 2-field form
- Impacts cost calculation (Construction type)

#### 3. AreasSection Component (MOST COMPLEX)
**File**: `src/components/mobile-inspection/AreasSection.tsx` (CREATE)

**Structure**:
```typescript
interface AreaFormData {
  areaName: string;
  mouldVisibility: string[];
  temperature?: number;
  humidity?: number;
  dewPoint?: number;           // Auto-calculated
  commentsGenerated?: string;  // AI button
  commentsEdited?: string;     // Edit AI output
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
  jobTime: number;             // Minutes
  demolitionRequired: boolean;
  demolitionTime?: number;
  demolitionDescGenerated?: string;
  demolitionDescEdited?: string;
}
```

**Sub-Components**:
```typescript
// Repeater controls
<AreaRepeater
  areas={areas}
  onAdd={handleAddArea}
  onRemove={handleRemoveArea}
  onReorder={handleReorder}
/>

// Mould visibility multi-select
<MouldVisibilitySelector
  selected={area.mouldVisibility}
  onChange={handleVisibilityChange}
  options={[
    "Ceiling", "Cornice", "Windows",
    "Window furnishings", "Walls", "Skirting",
    "Flooring", "Wardrobe", "Cupboard", "Contents",
    "Grout/silicone", "No mould visible"
  ]}
/>

// Environmental readings
<EnvironmentalReadings
  temperature={area.temperature}
  humidity={area.humidity}
  dewPoint={area.dewPoint}
  onTempChange={handleTempChange}
  onHumidityChange={handleHumidityChange}
  // Auto-calculate dewPoint
/>

// AI comments section
<AICommentSection
  generated={area.commentsGenerated}
  edited={area.commentsEdited}
  approved={area.commentsApproved}
  onGenerate={handleGenerateComments}
  onEdit={handleEditComments}
  onApprove={handleApproveComments}
/>

// Moisture readings (optional, toggled)
{area.moistureReadingEnabled && (
  <MoistureReadingRepeater
    readings={area.moistureReadings}
    onAdd={handleAddMoistureReading}
    onRemove={handleRemoveMoistureReading}
    // Each reading has: title, photos (unlimited)
  />
)}

// Room photos (exactly 3 required)
<RoomPhotoCapture
  photo1={area.roomPhoto1}
  photo2={area.roomPhoto2}
  photo3={area.roomPhoto3}
  onChange={handlePhotoChange}
  // Mobile camera integration
/>

// Infrared section (optional, toggled)
{area.infraredEnabled && (
  <InfraredSection
    photo={area.infraredPhoto}
    naturalPhoto={area.infraredNaturalPhoto}
    observation={area.infraredObservation}
    onChange={handleInfraredChange}
  />
)}

// Time tracking
<TimeTracking
  jobTime={area.jobTime}
  demolitionRequired={area.demolitionRequired}
  demolitionTime={area.demolitionTime}
  onJobTimeChange={handleJobTimeChange}
  onDemolitionChange={handleDemolitionChange}
/>

// Demolition description (if demolition enabled)
{area.demolitionRequired && (
  <DemolitionDescription
    generated={area.demolitionDescGenerated}
    edited={area.demolitionDescEdited}
    approved={area.demolitionDescApproved}
    onGenerate={handleGenerateDemolition}
  />
)}
```

**Key Features**:
- Add/remove/reorder areas
- Each area is independent form section
- Auto-calculate dew point from temp + humidity
- AI generation with approval workflow
- Mobile-optimized photo capture
- Validation: 3 room photos required

#### 4. SubfloorSection Component
**File**: `src/components/mobile-inspection/SubfloorSection.tsx` (CREATE)

**Toggle-able Section** (can be disabled):

**Fields**:
- Observations (textarea → AI generates comments)
- Landscape (dropdown: Flat block, Sloping block)
- Comments (AI-generated, editable)
- Photos (up to 20)
- Sanitation flag (checkbox)
- Racking flag (checkbox)
- Treatment Time (number input, minutes)
- Moisture Readings (repeater)
  - Value (percentage)
  - Location (text)

**Features**:
- Enable/disable entire section
- AI comment generation from observations
- Photo limit enforcement (20 max)
- Subfloor reading repeater

#### 5. OutdoorSection Component
**File**: `src/components/mobile-inspection/OutdoorSection.tsx` (CREATE)

**Fields**:
- Temperature (number input)
- Humidity (number input)
- Dew Point (auto-calculated, read-only)
- Comments (textarea)
- Photos:
  - Front Door (1 photo)
  - Front House (1 photo)
  - Mailbox (1 photo)
  - Street (1 photo)
  - Direction Photos (toggle on/off)
    - When enabled: unlimited photos

**Features**:
- Auto-calculate dew point
- Fixed + optional photo sets
- Mobile camera integration

#### 6. WasteSection Component
**File**: `src/components/mobile-inspection/WasteSection.tsx` (CREATE)

**Toggle-able Section**:

**Fields**:
- Waste Disposal Enabled (toggle)
- Waste Amount (dropdown when enabled)
  - Options: Small (disposal bags), Medium (fill van), Large (fill 2 vans), Extra large (fill skip)

**Features**:
- Simple toggle + dropdown
- Save state when disabled

#### 7. ProcedureSection Component
**File**: `src/components/mobile-inspection/ProcedureSection.tsx` (CREATE)

**Fields**:
- Work Procedure Checkboxes:
  - HEPA Vac (checkbox)
  - Antimicrobial (checkbox)
  - Stain Removing Antimicrobial (checkbox)
  - Home Sanitation Fogging (checkbox)

- Drying Equipment (toggle section):
  - Drying Equipment Enabled (toggle)
  - When enabled:
    - Dehumidifier Qty (number input, default: 0)
    - Air Mover Qty (number input, default: 0)
    - RCD Box Qty (number input, default: 0)

**Features**:
- Checkbox group for procedures
- Toggle equipment section
- Quantity inputs with validation
- Impacts cost calculation

#### 8. SummarySection Component
**File**: `src/components/mobile-inspection/SummarySection.tsx` (CREATE)

**Fields**:
- Recommend Dehumidifier (toggle)
- Dehumidifier Size (dropdown when enabled)
  - Options: Small (1 dehumidifier), Medium (2 dehumidifiers), Large (home built-in)
- Cause of Mould (AI-generated, editable)
  - AI button to generate
  - Textarea to edit
  - Store both original + edited
- Additional Info for Technician (textarea)
- Additional Equipment Comments (textarea)
- Parking Options (dropdown)
  - Options: Driveway, Street, Carpark, Visitor car park, No nearby parking

**Cost Calculation Display**:
```typescript
<CostCalculationDisplay
  labourCost={breakdown.labourCost}
  equipmentCost={breakdown.equipmentCost}
  subtotal={breakdown.subtotal}
  gst={breakdown.gst}
  totalCost={breakdown.totalCost}
  workType={breakdown.workType}
  totalHours={breakdown.totalHours}
  discountPercent={breakdown.discountPercent}
  areaDetails={breakdown.areaDetails}
  equipmentDetails={breakdown.equipmentDetails}
/>
```

**Features**:
- AI cause of mould analysis
- Real-time cost calculation
- Cost breakdown visualization
- Complete inspection button

---

## AI Integration Strategy

### OpenAI Integration

#### 1. API Configuration
```typescript
// src/lib/services/openaiService.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenAIService {
  async generateAreaComments(data: {
    areaName: string;
    mouldVisibility: string[];
    temperature: number;
    humidity: number;
    dewPoint: number;
  }): Promise<string> {
    const prompt = `You are a professional mould inspection technician writing a technical report.

Area: ${data.areaName}
Mould visible on: ${data.mouldVisibility.join(', ')}
Temperature: ${data.temperature}°C
Humidity: ${data.humidity}%
Dew Point: ${data.dewPoint}°C

Write a professional, technical paragraph (50-100 words) describing the mould conditions in this area. Focus on:
- What surfaces have mould
- Environmental conditions that contribute to mould growth
- Severity based on visible mould locations
- Technical observations a client would find valuable

Do not include recommendations or next steps. Only describe current conditions.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'You are a certified mould inspection expert writing technical reports for clients.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    return response.choices[0].message.content || '';
  }

  async generateDemolitionDescription(data: {
    areaName: string;
    mouldVisibility: string[];
    demolitionTime: number;
  }): Promise<string> {
    const prompt = `You are a professional mould remediation technician creating a work order.

Area: ${data.areaName}
Mould visible on: ${data.mouldVisibility.join(', ')}
Estimated demolition time: ${demolitionTime} minutes

Create a bulleted list of demolition work required to remove all affected materials. Each line should be specific and actionable. Examples:
- Remove and dispose of mould-affected ceiling plasterboard (2.4m x 1.2m section)
- Cut out and remove mould-damaged window furnishings
- Strip and dispose of contaminated carpet (3m x 4m)

Be specific about materials and approximate dimensions based on typical Melbourne homes.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'You are a mould remediation expert creating detailed work orders.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.8,
      max_tokens: 300,
    });

    return response.choices[0].message.content || '';
  }

  async generateCauseOfMould(data: {
    areas: Array<{
      areaName: string;
      mouldVisibility: string[];
      temperature: number;
      humidity: number;
    }>;
    outdoorTemp?: number;
    outdoorHumidity?: number;
    subfloorObservations?: string;
  }): Promise<string> {
    const areasDesc = data.areas.map(a =>
      `${a.areaName}: ${a.mouldVisibility.join(', ')} (${a.temperature}°C, ${a.humidity}%)`
    ).join('\n');

    const prompt = `You are a certified mould investigator analyzing the root cause of mould growth.

INSPECTION DATA:
${areasDesc}

Outdoor Conditions: ${data.outdoorTemp}°C, ${data.outdoorHumidity}% humidity
${data.subfloorObservations ? `Subfloor: ${data.subfloorObservations}` : ''}

Based on this inspection data, write a professional analysis (100-150 words) explaining:
1. The most likely cause(s) of the mould growth
2. Which environmental factors are contributing
3. Any patterns observed across multiple areas
4. Technical reasoning for your conclusion

Be specific to Melbourne climate and building standards. Use professional technical language suitable for a client report.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'You are a certified mould investigator with expertise in Melbourne building standards.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return response.choices[0].message.content || '';
  }

  async generateSubfloorComments(observations: string): Promise<string> {
    const prompt = `You are a subfloor specialist writing technical observations for a client report.

Technician Observations:
${observations}

Rewrite these observations as a professional, structured paragraph (50-100 words) suitable for a client inspection report. Include:
- Subfloor condition assessment
- Moisture or ventilation issues observed
- Any structural or sanitation concerns
- Technical terminology appropriate for homeowners

Keep it factual and descriptive. Do not include recommendations.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'You are a building inspector specializing in subfloor assessments.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    return response.choices[0].message.content || '';
  }
}

export const openaiService = new OpenAIService();
```

#### 2. UI Integration Pattern

**AI Generation Flow**:
1. User fills in data fields
2. Clicks "Generate with AI" button
3. Show loading spinner
4. Call OpenAI API
5. Display generated text in read-only preview
6. User can:
   - Accept (saves to `commentsGenerated`)
   - Edit (saves to `commentsEdited`)
   - Reject and regenerate

**Component Example**:
```typescript
<AITextGenerator
  label="Area Comments"
  value={area.commentsEdited || area.commentsGenerated}
  onGenerate={async () => {
    const result = await fetch('/api/inspections/:id/areas/:areaId/generate-comments', {
      method: 'POST',
      body: JSON.stringify({
        areaName: area.areaName,
        mouldVisibility: area.mouldVisibility,
        temperature: area.temperature,
        humidity: area.humidity,
        dewPoint: area.dewPoint,
      })
    });
    const { data } = await result.json();
    setArea({ ...area, commentsGenerated: data.comments });
  }}
  onEdit={(edited) => {
    setArea({ ...area, commentsEdited: edited });
  }}
  onApprove={() => {
    setArea({ ...area, commentsApproved: true });
  }}
/>
```

#### 3. API Endpoint Implementation

**Backend** (`api-server.js`):
```javascript
import { openaiService } from './services/openaiService.js';

// Generate area comments
app.post('/api/inspections/:inspectionId/areas/:areaId/generate-comments',
  authenticateToken,
  async (req, res) => {
    try {
      const { areaName, mouldVisibility, temperature, humidity, dewPoint } = req.body;

      const comments = await openaiService.generateAreaComments({
        areaName,
        mouldVisibility,
        temperature,
        humidity,
        dewPoint,
      });

      res.json({
        success: true,
        data: { comments }
      });
    } catch (error) {
      console.error('AI generation error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to generate comments. Please try again.',
        error: error.message
      });
    }
  }
);

// Similar endpoints for demolition, cause of mould, subfloor
```

#### 4. Error Handling & Fallbacks

**Strategies**:
1. **API Timeout**: 30s timeout, show error message
2. **Rate Limiting**: Queue requests, show "generating..." state
3. **API Failure**: Fallback to template-based text
4. **Cost Management**: Cache common patterns, limit regenerations

**Fallback Templates**:
```typescript
const FALLBACK_TEMPLATES = {
  areaComments: (data) => {
    return `Mould is visible on ${data.mouldVisibility.join(', ')} in ${data.areaName}. Environmental readings show ${data.temperature}°C temperature with ${data.humidity}% humidity, resulting in a dew point of ${data.dewPoint}°C. These conditions are conducive to mould growth and require remediation.`;
  },

  causeOfMould: () => {
    return `Based on the inspection findings, the mould growth appears to be caused by elevated moisture levels and poor ventilation. The environmental conditions observed throughout the property exceed optimal humidity levels, creating an environment suitable for mould development.`;
  }
};
```

---

## Offline Storage & Sync

### IndexedDB Architecture

#### 1. Database Schema
```typescript
// src/lib/db/inspectionDB.ts
import Dexie, { Table } from 'dexie';

interface OfflineInspection {
  id: string;
  inspectionId: string;
  data: any;
  lastModified: number;
  syncStatus: 'pending' | 'syncing' | 'synced' | 'conflict';
  version: number;
}

interface OfflinePhoto {
  id: string;
  inspectionId: string;
  section: string;
  areaId?: string;
  photoType?: string;
  blob: Blob;
  uploadStatus: 'pending' | 'uploading' | 'uploaded' | 'failed';
  retryCount: number;
  lastAttempt?: number;
}

class InspectionDatabase extends Dexie {
  inspections!: Table<OfflineInspection>;
  photos!: Table<OfflinePhoto>;

  constructor() {
    super('InspectionDB');
    this.version(1).stores({
      inspections: 'id, inspectionId, syncStatus, lastModified',
      photos: 'id, inspectionId, uploadStatus, lastAttempt'
    });
  }
}

export const db = new InspectionDatabase();
```

#### 2. Auto-Save Strategy

**Every 30 seconds OR on field change**:

```typescript
// src/hooks/useAutoSave.ts
import { useEffect, useRef } from 'react';
import { db } from '@/lib/db/inspectionDB';

export function useAutoSave(inspectionId: string, data: any, interval = 30000) {
  const timerRef = useRef<NodeJS.Timeout>();
  const lastSaveRef = useRef<number>(0);

  useEffect(() => {
    const save = async () => {
      try {
        // Save to IndexedDB immediately
        await db.inspections.put({
          id: `draft-${inspectionId}`,
          inspectionId,
          data,
          lastModified: Date.now(),
          syncStatus: 'pending',
          version: (lastSaveRef.current || 0) + 1,
        });

        // Attempt sync if online
        if (navigator.onLine) {
          await syncToServer(inspectionId, data);
        }

        lastSaveRef.current = Date.now();
      } catch (error) {
        console.error('Auto-save error:', error);
      }
    };

    // Immediate save on data change
    save();

    // Periodic save
    timerRef.current = setInterval(save, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [inspectionId, data, interval]);
}

async function syncToServer(inspectionId: string, data: any) {
  try {
    const response = await fetch(`/api/inspections/${inspectionId}/draft`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      await db.inspections.update(`draft-${inspectionId}`, {
        syncStatus: 'synced',
      });
    }
  } catch (error) {
    // Will retry on next save or when online
    console.error('Sync failed:', error);
  }
}
```

#### 3. Offline Detection & Recovery

```typescript
// src/lib/services/offlineService.ts
export class OfflineService {
  private syncInProgress = false;

  constructor() {
    // Listen for online/offline events
    window.addEventListener('online', () => this.handleOnline());
    window.addEventListener('offline', () => this.handleOffline());
  }

  async handleOnline() {
    console.log('Back online - syncing pending changes');
    await this.syncAllPending();
  }

  handleOffline() {
    console.log('Offline mode activated');
    // Show offline banner
  }

  async syncAllPending() {
    if (this.syncInProgress) return;

    try {
      this.syncInProgress = true;

      // 1. Sync inspection data
      const pendingInspections = await db.inspections
        .where('syncStatus')
        .equals('pending')
        .toArray();

      for (const inspection of pendingInspections) {
        await syncToServer(inspection.inspectionId, inspection.data);
      }

      // 2. Upload pending photos
      await this.uploadPendingPhotos();

    } finally {
      this.syncInProgress = false;
    }
  }

  async uploadPendingPhotos() {
    const pendingPhotos = await db.photos
      .where('uploadStatus')
      .equals('pending')
      .toArray();

    for (const photo of pendingPhotos) {
      await this.uploadPhoto(photo);
    }
  }

  async uploadPhoto(photo: OfflinePhoto) {
    try {
      await db.photos.update(photo.id, { uploadStatus: 'uploading' });

      const formData = new FormData();
      formData.append('photo', photo.blob);
      formData.append('section', photo.section);
      if (photo.areaId) formData.append('areaId', photo.areaId);
      if (photo.photoType) formData.append('photoType', photo.photoType);

      const response = await fetch(`/api/inspections/${photo.inspectionId}/photos`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        await db.photos.update(photo.id, {
          uploadStatus: 'uploaded',
          // Store URL for reference
        });
        return result.data.url;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      await db.photos.update(photo.id, {
        uploadStatus: 'failed',
        retryCount: photo.retryCount + 1,
        lastAttempt: Date.now(),
      });
      throw error;
    }
  }

  async queuePhoto(
    inspectionId: string,
    section: string,
    blob: Blob,
    areaId?: string,
    photoType?: string
  ) {
    const id = `photo-${Date.now()}-${Math.random()}`;

    await db.photos.add({
      id,
      inspectionId,
      section,
      areaId,
      photoType,
      blob,
      uploadStatus: 'pending',
      retryCount: 0,
    });

    // Attempt immediate upload if online
    if (navigator.onLine) {
      const photo = await db.photos.get(id);
      if (photo) {
        try {
          await this.uploadPhoto(photo);
        } catch (error) {
          // Will retry later
        }
      }
    }

    return id;
  }
}

export const offlineService = new OfflineService();
```

#### 4. Conflict Resolution

**Strategy**: Last-write-wins with version tracking

```typescript
async function syncWithConflictResolution(inspectionId: string, localData: any) {
  try {
    // Get server version
    const response = await fetch(`/api/inspections/${inspectionId}/draft`);
    const { data: serverData } = await response.json();

    const localVersion = localData.version || 0;
    const serverVersion = serverData.version || 0;

    if (serverVersion > localVersion) {
      // Server has newer data - conflict!
      await db.inspections.update(`draft-${inspectionId}`, {
        syncStatus: 'conflict',
      });

      // Show conflict resolution UI
      return {
        conflict: true,
        local: localData,
        server: serverData,
      };
    }

    // Local is newer or same - proceed with sync
    const updateResponse = await fetch(`/api/inspections/${inspectionId}/draft`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'If-Match': serverVersion.toString(), // Optimistic locking
      },
      body: JSON.stringify({
        ...localData,
        version: serverVersion + 1,
      }),
    });

    if (updateResponse.ok) {
      await db.inspections.update(`draft-${inspectionId}`, {
        syncStatus: 'synced',
      });
      return { conflict: false };
    }
  } catch (error) {
    console.error('Sync conflict:', error);
    throw error;
  }
}
```

---

## Photo Management

### Mobile Camera Integration

#### 1. Photo Capture Component
```typescript
// src/components/mobile-inspection/PhotoCapture.tsx
import { useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { offlineService } from '@/lib/services/offlineService';

interface PhotoCaptureProps {
  inspectionId: string;
  section: string;
  areaId?: string;
  photoType?: string;
  maxPhotos?: number;
  onPhotoAdded: (photoId: string) => void;
  onPhotoRemoved: (photoId: string) => void;
  photos: string[];
}

export function PhotoCapture({
  inspectionId,
  section,
  areaId,
  photoType,
  maxPhotos = 1,
  onPhotoAdded,
  onPhotoRemoved,
  photos = [],
}: PhotoCaptureProps) {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsCapturing(true);

      // Compress image before upload
      const compressed = await compressImage(file);

      // Queue for upload (handles offline)
      const photoId = await offlineService.queuePhoto(
        inspectionId,
        section,
        compressed,
        areaId,
        photoType
      );

      onPhotoAdded(photoId);
    } catch (error) {
      console.error('Photo capture error:', error);
    } finally {
      setIsCapturing(false);
    }
  };

  const canAddMore = photos.length < maxPhotos;

  return (
    <div className="space-y-4">
      {/* Photo Grid */}
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photoId, idx) => (
          <div key={photoId} className="relative aspect-square">
            <img
              src={`/api/photos/${photoId}/thumbnail`}
              alt={`Photo ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => onPhotoRemoved(photoId)}
              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Capture Buttons */}
      {canAddMore && (
        <div className="grid grid-cols-2 gap-2">
          {/* Camera capture (mobile) */}
          <Button
            type="button"
            variant="outline"
            className="min-h-[44px]"
            disabled={isCapturing}
          >
            <label className="flex items-center gap-2 cursor-pointer w-full">
              <Camera className="w-5 h-5" />
              <span>Camera</span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleCapture}
                className="hidden"
                disabled={isCapturing}
              />
            </label>
          </Button>

          {/* Library upload */}
          <Button
            type="button"
            variant="outline"
            className="min-h-[44px]"
            disabled={isCapturing}
          >
            <label className="flex items-center gap-2 cursor-pointer w-full">
              <Upload className="w-5 h-5" />
              <span>Library</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleCapture}
                className="hidden"
                disabled={isCapturing}
              />
            </label>
          </Button>
        </div>
      )}

      {/* Upload progress */}
      {isCapturing && (
        <div className="text-sm text-muted-foreground">
          Compressing and uploading...
        </div>
      )}

      {/* Photo limit indicator */}
      <div className="text-sm text-muted-foreground">
        {photos.length} / {maxPhotos === Infinity ? '∞' : maxPhotos} photos
      </div>
    </div>
  );
}
```

#### 2. Image Compression
```typescript
// src/lib/utils/imageCompression.ts
export async function compressImage(
  file: File,
  maxWidth: number = 1920,
  maxHeight: number = 1080,
  quality: number = 0.8
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;

        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }

        // Create canvas and compress
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Compression failed'));
            }
          },
          'image/jpeg',
          quality
        );
      };

      img.onerror = reject;
      img.src = e.target?.result as string;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Generate thumbnail
export async function generateThumbnail(blob: Blob): Promise<Blob> {
  return compressImage(
    new File([blob], 'photo.jpg'),
    300,
    300,
    0.6
  );
}
```

#### 3. Upload Queue with Retry
```typescript
// src/lib/services/uploadQueue.ts
interface QueuedUpload {
  id: string;
  blob: Blob;
  metadata: any;
  retries: number;
  status: 'pending' | 'uploading' | 'success' | 'failed';
}

export class UploadQueue {
  private queue: QueuedUpload[] = [];
  private isProcessing = false;
  private maxRetries = 3;

  async add(blob: Blob, metadata: any): Promise<string> {
    const id = `upload-${Date.now()}-${Math.random()}`;

    this.queue.push({
      id,
      blob,
      metadata,
      retries: 0,
      status: 'pending',
    });

    this.process();
    return id;
  }

  private async process() {
    if (this.isProcessing || !navigator.onLine) return;

    const pending = this.queue.find(u => u.status === 'pending');
    if (!pending) return;

    this.isProcessing = true;

    try {
      pending.status = 'uploading';

      const formData = new FormData();
      formData.append('photo', pending.blob);
      Object.entries(pending.metadata).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      const response = await fetch('/api/photos/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      if (response.ok) {
        pending.status = 'success';
        // Remove from queue
        this.queue = this.queue.filter(u => u.id !== pending.id);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      pending.retries++;

      if (pending.retries >= this.maxRetries) {
        pending.status = 'failed';
      } else {
        pending.status = 'pending';
        // Exponential backoff
        await new Promise(resolve =>
          setTimeout(resolve, Math.pow(2, pending.retries) * 1000)
        );
      }
    } finally {
      this.isProcessing = false;
      // Process next in queue
      this.process();
    }
  }

  getStatus(id: string) {
    return this.queue.find(u => u.id === id)?.status || 'unknown';
  }

  getPendingCount() {
    return this.queue.filter(u => u.status === 'pending').length;
  }
}

export const uploadQueue = new UploadQueue();
```

---

## Cost Calculation

### Integration with Form (Already Built)

The cost calculation service is **100% complete** and tested. Integration needed:

```typescript
// src/components/mobile-inspection/CostSummaryDisplay.tsx
import { costCalculationService } from '@/lib/services/costCalculationService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function CostSummaryDisplay({ inspectionData }) {
  const breakdown = costCalculationService.calculate({
    areas: inspectionData.areas.map(area => ({
      areaName: area.areaName,
      jobTime: area.jobTime,
      demolitionRequired: area.demolitionRequired,
      demolitionTime: area.demolitionTime || 0,
    })),
    dwellingType: inspectionData.dwellingType,
    subfloorEnabled: inspectionData.subfloorEnabled,
    dryingEquipmentEnabled: inspectionData.dryingEquipmentEnabled,
    dehumidifierQty: inspectionData.dehumidifierQty,
    airMoverQty: inspectionData.airMoverQty,
    rcdBoxQty: inspectionData.rcdBoxQty,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Calculation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Labour Cost */}
        <div className="flex justify-between">
          <span>Labour ({breakdown.totalHours.toFixed(2)} hours)</span>
          <span className="font-semibold">
            {costCalculationService.formatCurrency(breakdown.labourCost)}
          </span>
        </div>

        {/* Discount */}
        {breakdown.discountPercent > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount ({(breakdown.discountPercent * 100).toFixed(1)}%)</span>
            <span>Applied</span>
          </div>
        )}

        {/* Equipment */}
        {breakdown.equipmentCost > 0 && (
          <>
            <div className="flex justify-between">
              <span>Equipment Hire</span>
              <span className="font-semibold">
                {costCalculationService.formatCurrency(breakdown.equipmentCost)}
              </span>
            </div>

            <div className="pl-4 text-sm text-muted-foreground space-y-1">
              {breakdown.equipmentDetails.dehumidifiers.qty > 0 && (
                <div>
                  {breakdown.equipmentDetails.dehumidifiers.qty} Dehumidifier(s) × {breakdown.equipmentDetails.dehumidifiers.days} day(s)
                </div>
              )}
              {breakdown.equipmentDetails.airMovers.qty > 0 && (
                <div>
                  {breakdown.equipmentDetails.airMovers.qty} Air Mover(s) × {breakdown.equipmentDetails.airMovers.days} day(s)
                </div>
              )}
              {breakdown.equipmentDetails.rcdBox.qty > 0 && (
                <div>
                  {breakdown.equipmentDetails.rcdBox.qty} RCD Box(es) × {breakdown.equipmentDetails.rcdBox.days} day(s)
                </div>
              )}
            </div>
          </>
        )}

        {/* Subtotal */}
        <div className="flex justify-between border-t pt-2">
          <span>Subtotal</span>
          <span className="font-semibold">
            {costCalculationService.formatCurrency(breakdown.subtotal)}
          </span>
        </div>

        {/* GST */}
        <div className="flex justify-between">
          <span>GST (10%)</span>
          <span className="font-semibold">
            {costCalculationService.formatCurrency(breakdown.gst)}
          </span>
        </div>

        {/* Total */}
        <div className="flex justify-between border-t-2 pt-2 text-lg">
          <span className="font-bold">Total Cost</span>
          <span className="font-bold">
            {costCalculationService.formatCurrency(breakdown.totalCost)}
          </span>
        </div>

        {/* Work Type Badge */}
        <div className="flex justify-center pt-2">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
            Work Type: {breakdown.workType}
          </span>
        </div>

        {/* Area Breakdown */}
        <details className="pt-4">
          <summary className="cursor-pointer text-sm text-muted-foreground">
            View Area Breakdown
          </summary>
          <div className="mt-2 space-y-2 text-sm">
            {breakdown.areaDetails.map((area, idx) => (
              <div key={idx} className="flex justify-between pl-4">
                <span>{area.areaName}</span>
                <span>{(area.totalMinutes / 60).toFixed(2)} hrs</span>
              </div>
            ))}
          </div>
        </details>
      </CardContent>
    </Card>
  );
}
```

---

## 4-Week Implementation Timeline

### Week 1: Core Components (Days 1-5)

#### Day 1: Setup & Header Component
- [ ] Create component directory structure
- [ ] Build HeaderSection component
- [ ] Implement auto-generated job number
- [ ] Test auto-population from lead data

#### Day 2: Property & Waste Sections
- [ ] Build PropertySection (simple dropdowns)
- [ ] Build WasteSection (toggle + dropdown)
- [ ] Integrate with wizard navigation
- [ ] Test section auto-save

#### Day 3: Outdoor Section
- [ ] Build OutdoorSection component
- [ ] Implement dew point auto-calculation
- [ ] Add photo capture (4 fixed + optional)
- [ ] Test photo compression

#### Day 4: Procedure & Summary (Part 1)
- [ ] Build ProcedureSection (checkboxes + equipment)
- [ ] Integrate with cost calculation
- [ ] Build SummarySection structure
- [ ] Add dehumidifier recommendation logic

#### Day 5: Summary (Part 2) & Cost Display
- [ ] Build CostSummaryDisplay component
- [ ] Integrate real-time cost calculation
- [ ] Add parking options
- [ ] Test cost accuracy with test data

### Week 2: Complex Components (Days 6-10)

#### Day 6: Areas Section Foundation
- [ ] Build AreasSection container
- [ ] Implement area repeater (add/remove/reorder)
- [ ] Build area form structure
- [ ] Add mould visibility multi-select

#### Day 7: Areas Environmental & Photos
- [ ] Add environmental readings inputs
- [ ] Implement dew point auto-calc per area
- [ ] Build room photo capture (3 required)
- [ ] Add photo validation

#### Day 8: Areas Moisture & Infrared
- [ ] Build moisture reading repeater
- [ ] Implement infrared toggle section
- [ ] Add infrared photo capture
- [ ] Create infrared observation dropdown

#### Day 9: Areas Time & Demolition
- [ ] Build time tracking inputs
- [ ] Add demolition toggle
- [ ] Implement demolition time input
- [ ] Link to cost calculation

#### Day 10: Subfloor Section
- [ ] Build SubfloorSection component
- [ ] Add subfloor toggle
- [ ] Implement observations textarea
- [ ] Build subfloor reading repeater
- [ ] Add photo upload (max 20)

### Week 3: Advanced Features (Days 11-15)

#### Day 11: AI Integration Setup
- [ ] Configure OpenAI API
- [ ] Build OpenAIService class
- [ ] Create AI generation endpoints
- [ ] Test AI response quality

#### Day 12: AI UI Components
- [ ] Build AITextGenerator component
- [ ] Add "Generate with AI" buttons
- [ ] Implement edit/approve workflow
- [ ] Create loading states

#### Day 13: Offline Storage
- [ ] Set up IndexedDB with Dexie
- [ ] Implement auto-save to IndexedDB
- [ ] Build offline detection
- [ ] Create sync service

#### Day 14: Photo Upload Queue
- [ ] Build upload queue service
- [ ] Implement retry logic
- [ ] Add exponential backoff
- [ ] Create upload progress UI

#### Day 15: Sync & Conflict Resolution
- [ ] Implement background sync
- [ ] Build conflict detection
- [ ] Create conflict resolution UI
- [ ] Test offline → online recovery

### Week 4: Integration & Testing (Days 16-20)

#### Day 16: End-to-End Integration
- [ ] Connect all components to API
- [ ] Test complete form flow
- [ ] Verify auto-save works
- [ ] Check cost calculation accuracy

#### Day 17: Mobile Optimization
- [ ] Test on real mobile devices
- [ ] Optimize touch targets (44px min)
- [ ] Improve one-handed usage
- [ ] Add haptic feedback

#### Day 18: Testing & Bug Fixes
- [ ] Create test inspection scenarios
- [ ] Test all 15 sections
- [ ] Fix validation issues
- [ ] Test photo upload/compression

#### Day 19: Performance & Polish
- [ ] Optimize bundle size
- [ ] Lazy load components
- [ ] Improve loading states
- [ ] Add success animations

#### Day 20: Documentation & Handoff
- [ ] Document component usage
- [ ] Create technician user guide
- [ ] Record demo video
- [ ] Deploy to staging

---

## Testing Strategy

### Manual Testing Scenarios

#### Scenario 1: Complete Inspection (Surface Work)
```
1. Start inspection from scheduled job
2. Fill all header fields (auto-populated)
3. Select "House" + "Owner occupied"
4. Add 3 areas:
   - Master Bedroom (mould on ceiling, walls)
   - Bathroom (mould on ceiling, windows)
   - Kitchen (no mould visible)
5. Capture 3 photos per area
6. Add environmental readings (temp, humidity)
7. Generate AI comments for each area
8. Skip subfloor
9. Add outdoor conditions + 4 photos
10. Skip waste disposal
11. Select work procedures (HEPA, Antimicrobial)
12. Skip equipment hire
13. Generate cause of mould
14. Verify cost calculation (Surface work, no discount)
15. Complete inspection
```

**Expected**:
- Job number: MRC-2025-XXXX
- Work type: SURFACE
- Total cost calculated correctly
- All photos uploaded
- AI comments generated

#### Scenario 2: Complex Demolition Job
```
1. Start inspection
2. Add 2 areas with demolition:
   - Living Room (ceiling, walls) - 120min job + 60min demo
   - Bedroom (walls, flooring) - 90min job + 45min demo
3. Generate demolition descriptions
4. Enable subfloor section:
   - Add observations
   - Generate subfloor comments
   - Add 5 moisture readings
   - Upload 10 photos
5. Enable waste disposal (Large - 2 vans)
6. Enable equipment:
   - 2 Dehumidifiers
   - 3 Air Movers
   - 1 RCD Box
7. Verify cost calculation
```

**Expected**:
- Work type: DEMOLITION
- Total hours: 5.25 (315 minutes)
- Discount: 0% (under 8 hours)
- Equipment cost calculated for 1 day
- Demolition descriptions AI-generated

#### Scenario 3: Offline Mode
```
1. Start inspection online
2. Fill first 3 sections
3. Disconnect from network
4. Continue filling sections 4-8
5. Capture photos (queued)
6. Complete form
7. Reconnect to network
8. Verify auto-sync
9. Check all data persisted
10. Verify photos uploaded
```

**Expected**:
- All data saved to IndexedDB
- Sync indicator shows "pending"
- On reconnect, automatic sync
- Photos upload with retry
- No data loss

### Automated Testing (Playwright)

```typescript
// tests/mobile-inspection-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Mobile Inspection Form', () => {
  test('complete basic inspection flow', async ({ page }) => {
    // Login as technician
    await page.goto('/admin/login');
    await page.fill('input[name="email"]', 'technician@example.com');
    await page.fill('input[name="password"]', 'password');
    await page.click('button[type="submit"]');

    // Navigate to inspection
    await page.goto('/mobile/inspection/test-id');

    // Section 1: Header
    await expect(page.locator('text=MRC-2025-')).toBeVisible();
    await page.fill('input[name="attentionTo"]', 'John Smith');

    // Section 2: Property
    await page.click('button:has-text("Next")');
    await page.selectOption('select[name="propertyOccupation"]', 'OWNER_OCCUPIED');
    await page.selectOption('select[name="dwellingType"]', 'HOUSE');

    // Section 3: Areas
    await page.click('button:has-text("Next")');
    await page.click('button:has-text("Add Area")');
    await page.fill('input[name="areaName"]', 'Master Bedroom');

    // ... continue through all sections

    // Verify cost calculation
    await expect(page.locator('text=/Total Cost.*\\$[0-9,]+\\.[0-9]{2}/')).toBeVisible();

    // Complete inspection
    await page.click('button:has-text("Complete Inspection")');
    await expect(page.locator('text=Inspection completed successfully')).toBeVisible();
  });

  test('AI comment generation', async ({ page }) => {
    // ... setup

    await page.click('button:has-text("Generate with AI")');
    await expect(page.locator('.loading-spinner')).toBeVisible();
    await page.waitForSelector('text=/Mould.*visible.*on/', { timeout: 10000 });

    // Edit AI output
    await page.click('button:has-text("Edit")');
    await page.fill('textarea[name="comments"]', 'Edited comment');
    await page.click('button:has-text("Approve")');

    await expect(page.locator('text=Edited comment')).toBeVisible();
  });

  test('offline mode persistence', async ({ page, context }) => {
    // ... start inspection

    // Go offline
    await context.setOffline(true);

    // Fill data
    await page.fill('input[name="temperature"]', '22');
    await page.fill('input[name="humidity"]', '65');

    // Verify saved to IndexedDB
    const dbData = await page.evaluate(() => {
      return indexedDB.databases();
    });
    expect(dbData).toContain('InspectionDB');

    // Go online
    await context.setOffline(false);

    // Verify sync
    await page.waitForSelector('text=Synced', { timeout: 5000 });
  });
});
```

### Performance Testing

```typescript
// tests/performance.spec.ts
test('photo compression performance', async ({ page }) => {
  const startTime = Date.now();

  // Upload 5MB image
  await page.setInputFiles('input[type="file"]', 'large-photo.jpg');

  const compressionTime = Date.now() - startTime;

  // Should compress in under 2 seconds
  expect(compressionTime).toBeLessThan(2000);

  // Verify compressed size
  const compressedSize = await page.evaluate(() => {
    return document.querySelector('img')?.getAttribute('src')?.length || 0;
  });

  // Should be under 1MB base64
  expect(compressedSize).toBeLessThan(1400000);
});
```

---

## Success Criteria

### Feature Completeness
- [ ] All 15 sections implemented
- [ ] All dropdown options match specifications
- [ ] Cost calculation 100% accurate
- [ ] Photo management functional
- [ ] AI integration working

### Mobile UX
- [ ] 44px minimum touch targets
- [ ] One-handed operation
- [ ] Smooth scrolling
- [ ] Fast load times (<3s)
- [ ] Offline capability

### Data Integrity
- [ ] Auto-save every 30s
- [ ] No data loss offline
- [ ] Conflict resolution works
- [ ] Photos uploaded reliably
- [ ] Cost calculation matches pricing

### Performance
- [ ] Photo compression <2s
- [ ] AI generation <10s
- [ ] Form save <500ms
- [ ] IndexedDB sync <1s
- [ ] Bundle size <500KB

---

## Next Steps

1. **Review this plan** with stakeholders
2. **Confirm OpenAI API access** for AI features
3. **Set up development environment** for mobile testing
4. **Begin Week 1 implementation** (Header → Summary components)
5. **Daily progress tracking** using todo list

---

**Document Version**: 1.0
**Last Updated**: October 5, 2025
**Status**: Planning Complete - Ready for Implementation
