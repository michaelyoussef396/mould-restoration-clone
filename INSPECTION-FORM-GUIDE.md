# Mobile Inspection Form - User Guide

> **Comprehensive guide for technicians using the mobile inspection form**

## Overview

The Mobile Inspection Form is a progressive 8-section wizard that guides technicians through property inspections from arrival to completion. It features auto-save, offline support, AI-powered text generation, and automatic cost calculation based on exact client pricing formulas.

**Key Features**:
- ✅ Auto-generated job numbers (MRC-2025-0001)
- ✅ Auto-save every 2 seconds (no data loss)
- ✅ Offline-first design (syncs when online)
- ✅ AI text generation for professional comments
- ✅ Automatic cost calculation with client pricing
- ✅ Photo compression before upload
- ✅ Unlimited areas with individual assessments
- ✅ Real-time dew point calculation

---

## Getting Started

### Accessing the Form

1. **From Inspection Calendar**:
   - Admin assigns inspection to technician
   - Inspection appears in technician's schedule
   - Click "Start Inspection" button

2. **Direct URL**:
   ```
   /mobile/inspection/{inspectionId}
   ```

3. **Authentication**:
   - Must be logged in as TECHNICIAN or ADMIN role
   - Form auto-redirects to login if not authenticated

### Form State Management

The form tracks three states:
- **DRAFT**: Initial state, can edit freely
- **IN_PROGRESS**: Started inspection (clicking "Start Inspection")
- **COMPLETED**: Final submission, triggers cost calculation

**Auto-save**: All changes save automatically after 2-second delay. Look for green checkmark icon in header.

---

## Section-by-Section Guide

### Section 1: Header (Job Details)

**Purpose**: Capture basic job information and start the inspection.

**Fields**:

1. **Job Number** (Auto-generated)
   - Format: `MRC-2025-0001`
   - Generated on first save
   - Cannot be edited once set

2. **Triage** (Optional)
   - Free text for urgent notes
   - Example: "Customer reports ceiling collapse"

3. **Address** (Optional)
   - Full property address
   - Pre-filled from lead data if available

4. **Start Button**
   - Click "Start Inspection" to begin
   - Records arrival time (cannot be undone)
   - Changes status to IN_PROGRESS

**Best Practices**:
- Take a moment to verify address before starting
- Use Triage for any immediate safety concerns
- Don't click Start until physically at property

---

### Section 2: Property Information

**Purpose**: Record property type and occupancy for accurate cost calculation.

**Fields**:

1. **Property Occupation**
   - Options: OWNER_OCCUPIED, RENTAL, COMMERCIAL
   - Required for insurance/reporting
   - Default: OWNER_OCCUPIED

2. **Dwelling Type**
   - Options: APARTMENT, TOWNHOUSE, HOUSE
   - Affects cost calculation (different rates)
   - Required for accurate quotes

**Impact on Pricing**:
- House: Standard rates
- Apartment/Townhouse: May affect access/equipment

---

### Section 3: Areas (Room-by-Room Assessment)

**Purpose**: Detailed assessment of each affected area with photos, readings, and AI-generated comments.

**Repeatable Section**: Add unlimited areas, each gets full assessment.

#### Adding Areas

1. Click "Add New Area"
2. Enter room name (e.g., "Master Bedroom", "Ensuite Bathroom")
3. Areas appear in collapse panels
4. Delete/reorder as needed

#### Area Fields

**1. Mould Visibility**
- Multi-select checkboxes
- Options: CONCEALED, VISIBLE_SMALL (<1m²), VISIBLE_MEDIUM (1-10m²), VISIBLE_LARGE (>10m²)
- Can select multiple (e.g., concealed + visible large)
- Affects work type classification

**2. Environmental Readings**
- **Temperature (°C)**: Room air temperature
- **Humidity (%)**: Relative humidity
- **Dew Point (°C)**: Auto-calculated using Magnus formula
- All readings shown in real-time card
- Yellow alert if dew point > 15°C (moisture risk)

**3. Photos (3 per area)**
- Tap camera icon to capture
- Photos compress automatically (max 1920x1080, 80% quality)
- Max 10MB per photo
- Preview shows after capture
- Tap X button to retake

**4. AI Comments**

Two types of comments:

**a) AI-Generated Comments**
- Click "Generate AI Comments" button
- Uses OpenAI GPT-4 to analyze:
  - Mould visibility levels
  - Environmental readings
  - Area name/type
- Generates professional description
- Example: "Master bedroom presents moderate mould growth (1-10m² visible) with elevated humidity at 72%. Dew point of 16.2°C indicates persistent moisture conditions requiring immediate remediation."

**b) Edited Comments**
- Start with AI-generated text or write from scratch
- Manual edits override AI version
- Saved separately for audit trail

**5. Moisture Meter Readings** (Optional Toggle)

Enable to record detailed moisture readings:

**Surface Readings**:
- Multiple measurement points
- Moisture level 0-100%
- Material type (e.g., "Plasterboard", "Timber stud")
- Tap to add more readings

**Invasive Readings**:
- Separate section for destructive testing
- Same format as surface readings
- Used when drilling/probing required

**6. Work Assessment**

**Job Time (hours)**:
- Estimated hours for this area
- Used in cost calculation
- Be realistic (affects pricing)

**Demolition Required** (Toggle):
- Enable if material removal needed
- Opens "Demolition Time" field
- Affects work type classification

**Demolition Time (hours)**:
- Additional time for demo work
- Adds to total job time
- Uses higher DEMOLITION pricing tier

**AI Generate Demolition Description**:
- Click button for professional demo scope
- Example: "Remove affected plasterboard ceiling section (approx 3m²) including insulation. Cut back to 300mm beyond visible damage. Seal containment barrier."

---

### Section 4: Subfloor Assessment (Optional)

**Purpose**: Detailed subfloor inspection when crawl space access required.

**Enable Toggle**: Turn on to activate subfloor section.

**Why Optional**:
- Not all properties have accessible subfloors
- Townhouses/apartments often N/A
- Only enable if actually inspected

**Fields**:

**1. Observations (Text)**
- Free text for findings
- Example: "Standing water present, poor ventilation, mould on bearers"

**2. Photos (3 subfloor photos)**
- Same format as area photos
- Critical for insurance claims
- Before/after comparison

**3. Subfloor Readings**
- Repeatable like moisture readings
- Material type + moisture level
- Separate from main area readings
- Used for subfloor-specific work quotes

**Work Type Impact**:
- Subfloor work uses SUBFLOOR pricing tier (highest rate)
- Separate from surface/demolition pricing
- Correctly classified in cost breakdown

---

### Section 5: Outdoor Conditions

**Purpose**: Environmental baseline and exterior documentation.

**Environmental Readings**:

**1. Temperature (°C)**
- Outdoor air temperature
- Baseline for indoor comparison

**2. Humidity (%)**
- Outdoor relative humidity
- Compare to indoor readings

**3. Dew Point (°C)**
- **Auto-calculated** using Magnus formula
- Can manually override if needed
- Click "Auto-calc" button to reset
- Alert if > 15°C (moisture-prone conditions)

**4. Comments (Optional)**
- Weather observations
- Example: "Recent heavy rain, property in valley"

**Fixed Exterior Photos** (4 Required):

1. **Front Door Photo**
   - Identifies property
   - Insurance requirement

2. **Front House Photo**
   - Overall property condition
   - Before state documentation

3. **Mailbox Photo**
   - Address verification
   - Additional identifier

4. **Street Photo**
   - Location context
   - Access conditions

**Direction Photos** (Unlimited, Optional):

- Toggle to enable
- Add photos from all sides of property
- Grid display with X delete buttons
- Useful for access planning

---

### Section 6: Waste Disposal (Optional)

**Purpose**: Track contaminated waste for regulatory compliance.

**Enable Toggle**: Only if waste disposal required.

**Waste Amount**:
- Slider: 0-20 cubic meters
- Displayed in real-time
- Required for waste manifest

**Regulations**:
- Mould waste = biohazard
- Must be tracked for EPA compliance
- Affects disposal costs (not yet in pricing)

---

### Section 7: Work Procedure

**Purpose**: Equipment and treatment specifications.

**1. HEPA Filtration** (Toggle)
- Required for most mould jobs
- Industry standard for air quality
- Note: Not currently in cost calc (fixed-price model)

**2. Antimicrobial Treatment** (Toggle)
- Professional grade fungicide
- Applied after remediation
- Standard procedure

**3. Drying Equipment** (Optional Toggle)

When enabled, specify quantities:

- **Dehumidifiers**: 0-10 units
  - Cost: $132/day per unit
  - Commercial-grade

- **Air Movers**: 0-20 units
  - Cost: $46/day per unit
  - High-velocity fans

- **RCD Safety Boxes**: 0-10 units
  - Cost: $5/day per unit
  - Electrical safety

**Equipment Pricing**:
- Daily rates shown above
- Multiplied by estimated days on site
- Added to labour cost in summary

---

### Section 8: Job Summary & Cost

**Purpose**: AI-generated summary and automatic cost calculation.

**AI Cause of Mould** (Optional):

1. Click "Generate Cause Analysis"
2. AI analyzes:
   - All area data
   - Environmental readings
   - Property type
   - Outdoor conditions
3. Generates professional root cause analysis
4. Example: "Primary cause identified as inadequate ventilation in combination with water ingress from failed shower waterproofing. Elevated indoor humidity (68%) significantly exceeds outdoor baseline (52%), indicating internal moisture source."

**Cost Summary Display**:

Shows automatic calculation with breakdown:

**Labour Cost**:
- Calculated from area job times
- Uses tiered pricing by work type:
  - SURFACE: $612 (2hr) → $1,217 (8hr)
  - DEMOLITION: $712 (2hr) → $1,799 (8hr)
  - CONSTRUCTION: $662 (2hr) → $1,508 (8hr)
  - SUBFLOOR: $900 (2hr) → $2,335 (8hr)
- Linear interpolation between anchor points
- Discount tiers:
  - 8-16 hours: 7.5% off
  - 16-24 hours: 10% off
  - 24+ hours: 13% off

**Equipment Cost**:
- Sum of all daily rates × days
- Dehumidifiers: $132/day each
- Air Movers: $46/day each
- RCD Boxes: $5/day each

**Total Cost**:
- Labour + Equipment
- Displayed as final quote
- Auto-updates when areas/equipment change

**View Detailed Breakdown**:
- Click to expand full calculation
- Shows per-area costs
- Equipment itemization
- Discount application

**Final Actions**:

**1. Complete Inspection**:
- Click "Complete Inspection" button
- Triggers final cost calculation
- Changes status to COMPLETED
- Cannot edit after completion (by design)

**2. Save Draft**:
- Auto-saves every 2 seconds
- Manual save available
- Can return later

---

## AI Features

### OpenAI Integration

The form uses GPT-4 for three AI generation features:

**1. Area Comments**
- Analyzes mould visibility + readings
- Professional inspection language
- Highlights risk factors

**2. Demolition Descriptions**
- Scope of material removal
- Safety procedures
- Containment requirements

**3. Cause of Mould Analysis**
- Comprehensive root cause analysis
- Compares indoor/outdoor conditions
- Identifies moisture sources

**Requirements**:
- OpenAI API key in `.env`
- Internet connection
- Status: 503 error if not configured

**Fallback**:
- Manual text entry always available
- AI is optional enhancement
- Form works without API key

---

## Photo Management

### Compression Algorithm

All photos compressed before upload:

```
Max dimensions: 1920x1080
Quality: 80% JPEG
Max file size: 10MB
Format: JPEG only (PNG/GIF converted)
```

**Why Compression**:
- Mobile data savings
- Faster uploads
- Reduced storage costs
- Still high quality for reports

### Storage Locations

**Development**:
- Local directory: `/uploads/inspections/{id}/`
- Served as static files

**Production** (requires configuration):
- AWS S3 bucket (recommended)
- Cloudinary (alternative)
- Requires env variable updates

### Photo Types

**Area Photos**: `area_{areaId}_photo_{1|2|3}.jpg`
**Subfloor Photos**: `subfloor_photo_{1|2|3}.jpg`
**Outdoor Photos**:
- Fixed: `frontDoor.jpg`, `frontHouse.jpg`, `mailbox.jpg`, `street.jpg`
- Direction: `direction_{timestamp}.jpg`

---

## Cost Calculation Details

### Work Type Classification

The system automatically determines work type based on area data:

**SURFACE** (lowest rate):
- Visible mould only
- No demolition
- Surface treatment

**DEMOLITION** (medium-high rate):
- Demolition required = true
- Material removal needed
- Includes disposal

**CONSTRUCTION** (medium rate):
- Reconstruction after demo
- Not yet fully implemented
- Placeholder for future

**SUBFLOOR** (highest rate):
- Subfloor section enabled
- Crawl space work
- Difficult access

### Pricing Formula

**Hourly Rate Calculation**:

```
For 2 hours or less:
  rate = anchorRate_2hr / 2

For 8 hours or more:
  rate = anchorRate_8hr / 8

For 2-8 hours (LINEAR INTERPOLATION):
  rate_2hr = anchorRate_2hr / 2
  rate_8hr = anchorRate_8hr / 8
  slope = (rate_8hr - rate_2hr) / 6
  rate = rate_2hr + slope * (hours - 2)
```

**Discount Application**:

```
Total hours    | Discount
---------------|----------
0-8 hours      | 0%
8-16 hours     | 7.5%
16-24 hours    | 10%
24+ hours      | 13%
```

**Equipment**:
```
equipmentCost = (dehumidifiers × 132 + airMovers × 46 + rcdBoxes × 5) × days
```

**Final Total**:
```
subtotal = labourCost
discount = subtotal × discountPercent
totalCost = (subtotal - discount) + equipmentCost
```

---

## Troubleshooting

### Common Issues

**1. "Failed to load inspection"**
- **Cause**: Invalid inspection ID or unauthorized
- **Fix**: Check URL, ensure logged in as correct user

**2. "Failed to upload photo"**
- **Cause**: File too large or network error
- **Fix**: Photo auto-compresses, check internet connection

**3. "AI generation unavailable (503)"**
- **Cause**: OpenAI API key not configured
- **Fix**: Contact admin to add API key, or enter text manually

**4. "Auto-save failed"**
- **Cause**: Lost internet connection
- **Fix**: Changes stored locally, will sync when online

**5. Dew point not calculating**
- **Cause**: Missing temp or humidity value
- **Fix**: Enter both values, calculation triggers automatically

### Network Handling

**Offline Mode**:
- Form data stored in browser
- Syncs when connection restored
- Yellow indicator shows offline state

**Auto-save Indicator**:
- Green checkmark: Saved successfully
- Yellow clock: Saving in progress
- Red X: Save failed (rare)

### Browser Requirements

**Supported**:
- Chrome/Edge 90+ (recommended)
- Safari 14+
- Firefox 88+

**Required Features**:
- LocalStorage (offline support)
- FileReader API (photo compression)
- Fetch API (API calls)

---

## Best Practices

### Field Workflow

**Before Starting**:
1. Verify correct inspection in calendar
2. Ensure phone charged (photos drain battery)
3. Check internet connection (4G/5G/WiFi)
4. Calibrate moisture meter

**During Inspection**:
1. Start with outdoor readings (baseline)
2. Work systematically room-by-room
3. Take photos before disturbing area
4. Record readings immediately (memory fades)
5. Use AI comments as starting point, edit as needed

**After Inspection**:
1. Review all sections for completeness
2. Generate cause analysis (helps quotes)
3. Check cost calculation is reasonable
4. Complete inspection (triggers final save)
5. Discuss quote with customer if present

### Photography Tips

**Lighting**:
- Use phone flash in dark areas
- Avoid windows in background (silhouettes)
- Get close for detail shots

**Composition**:
- Include reference (ruler/hand for scale)
- Capture entire affected area
- Document before state clearly

**Mandatory Photos**:
- All 4 exterior (insurance requirement)
- At least 1 per affected area
- Any visible mould growth
- Subfloor conditions if inspected

### Data Quality

**Accuracy**:
- Don't estimate readings (use meter)
- Round dew point to 1 decimal
- Be conservative with time estimates

**Completeness**:
- Fill all required fields
- Don't skip outdoor section
- Add comments to unusual findings

**Professional Language**:
- Use AI as template
- Edit for specifics
- Avoid jargon in customer-facing text

---

## Technical Reference

### API Endpoints Used

The form communicates with 27 API endpoints:

**Inspection Management**:
- `POST /api/inspections/:id/start` - Start inspection
- `GET /api/inspections/:id/draft` - Load draft data
- `PUT /api/inspections/:id/complete` - Complete inspection

**Section Updates**:
- `PUT /api/inspections/:id/property` - Property info
- `PUT /api/inspections/:id/outdoor` - Outdoor section
- `PUT /api/inspections/:id/subfloor` - Subfloor observations
- `PUT /api/inspections/:id/waste` - Waste disposal
- `PUT /api/inspections/:id/procedure` - Work procedure

**Areas**:
- `POST /api/inspections/:id/areas` - Create area
- `PUT /api/inspections/:id/areas/:areaId` - Update area
- `DELETE /api/inspections/:id/areas/:areaId` - Delete area
- `PUT /api/inspections/:id/areas/:areaId/order` - Reorder areas

**Readings**:
- `POST /api/inspections/:id/areas/:areaId/moisture-readings`
- `PUT /api/inspections/:id/areas/:areaId/moisture-readings/:readingId`
- `DELETE /api/inspections/:id/areas/:areaId/moisture-readings/:readingId`
- `POST /api/inspections/:id/subfloor/readings`

**Photos**:
- `POST /api/inspections/:id/photos` - Upload photo
- `POST /api/inspections/:id/outdoor/photos` - Outdoor photos
- `POST /api/inspections/:id/areas/:areaId/photos` - Area photos
- `POST /api/inspections/:id/subfloor/photos` - Subfloor photos

**AI Generation**:
- `POST /api/inspections/:id/generate-area-comments` - Area AI comments
- `POST /api/inspections/:id/generate-cause-of-mould` - Cause analysis
- `POST /api/inspections/:id/generate-demolition-description` - Demo scope

**Cost Calculation**:
- `POST /api/inspections/:id/calculate-cost` - Calculate cost breakdown

See `API-ENDPOINTS.md` for full documentation with request/response examples.

### Data Model

**Inspection**:
```typescript
{
  id: string (cuid)
  jobNumber: string (auto: "MRC-2025-0001")
  status: "DRAFT" | "IN_PROGRESS" | "COMPLETED"
  triage: string?
  address: string?

  propertyOccupation: "OWNER_OCCUPIED" | "RENTAL" | "COMMERCIAL"?
  dwellingType: "APARTMENT" | "TOWNHOUSE" | "HOUSE"?

  outdoorTemperature: number?
  outdoorHumidity: number?
  outdoorDewPoint: number?
  frontDoorPhoto: string (URL)?

  labourCost: number?
  equipmentCost: number?
  totalCost: number?
  workType: "SURFACE" | "DEMOLITION" | "CONSTRUCTION" | "SUBFLOOR"?

  areas: InspectionArea[]
}
```

**InspectionArea**:
```typescript
{
  id: string (cuid)
  inspectionId: string
  areaName: string
  orderIndex: number

  mouldVisibility: string (JSON array)
  temperature: number?
  humidity: number?
  dewPoint: number?

  commentsGenerated: string? (AI)
  commentsEdited: string? (manual)

  moistureReadingEnabled: boolean
  moistureReadings: MoistureReading[]

  roomPhoto1: string (URL)?
  roomPhoto2: string (URL)?
  roomPhoto3: string (URL)?

  jobTime: number (hours)
  demolitionRequired: boolean
  demolitionTime: number?
}
```

### Environment Variables

Required for full functionality:

```bash
# API Server
PORT=3001
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="your-secret-key"

# OpenAI (optional, for AI features)
OPENAI_API_KEY="sk-..."

# Photo Storage (production)
AWS_S3_BUCKET="mould-inspection-photos"
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
# OR
CLOUDINARY_URL="cloudinary://..."
```

---

## Version History

**v1.0** (October 14, 2025)
- Initial release
- 8 sections complete
- 27 API endpoints
- AI integration
- Cost calculation
- Photo management

---

## Support

**Technical Issues**: Contact system administrator
**Form Questions**: Reference this guide or `API-ENDPOINTS.md`
**Cost Calculation**: See exact pricing formulas in `costCalculationService.ts`

**Quick Links**:
- API Documentation: `API-ENDPOINTS.md`
- Technical Guide: `CLAUDE.md` (Phase 3 section)
- Source Code: `src/pages/mobile/InspectionWizard.tsx`
