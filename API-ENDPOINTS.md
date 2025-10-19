# Mobile Inspection API - Endpoints Documentation

> **Complete API reference for mobile inspection form (27 endpoints)**

## Table of Contents

1. [Authentication](#authentication)
2. [Inspection Management](#inspection-management)
3. [Section Updates](#section-updates)
4. [Area Management](#area-management)
5. [Moisture Readings](#moisture-readings)
6. [Subfloor Assessment](#subfloor-assessment)
7. [Photo Upload](#photo-upload)
8. [AI Text Generation](#ai-text-generation)
9. [Cost Calculation](#cost-calculation)
10. [Error Handling](#error-handling)

---

## Authentication

All endpoints require JWT authentication via Bearer token.

**Header Format**:
```
Authorization: Bearer <token>
```

**Getting Token**:
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "technician@mouldandrestoration.com.au",
    "password": "password123"
  }'

# Response:
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "...",
      "email": "technician@mouldandrestoration.com.au",
      "role": "TECHNICIAN"
    }
  }
}
```

**Storing Token** (Frontend):
```javascript
localStorage.setItem('auth_token', token);
```

**Using Token**:
```javascript
fetch('/api/inspections/...', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
    'Content-Type': 'application/json'
  }
})
```

---

## Inspection Management

### 1. Load Draft Inspection

Load inspection data for editing (initial load on page).

**Endpoint**: `GET /api/inspections/:id/draft`

**Parameters**:
- `id` (path): Inspection ID (cuid)

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "cmgg8g96i003vwv4guie9kykt",
    "jobNumber": "MRC-2025-0001",
    "status": "DRAFT",
    "triage": null,
    "address": "123 Main St, Carlton VIC 3053",
    "propertyOccupation": "OWNER_OCCUPIED",
    "dwellingType": "HOUSE",
    "outdoorTemperature": 22.5,
    "outdoorHumidity": 65.0,
    "outdoorDewPoint": 15.8,
    "areas": [
      {
        "id": "area_001",
        "areaName": "Master Bedroom",
        "mouldVisibility": "[\"VISIBLE_MEDIUM\"]",
        "temperature": 24.0,
        "humidity": 72.0,
        "dewPoint": 18.2,
        "moistureReadings": []
      }
    ],
    "subfloorReadings": [],
    "labourCost": null,
    "equipmentCost": null,
    "totalCost": null
  }
}
```

**Example**:
```bash
curl -X GET http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/draft \
  -H "Authorization: Bearer <token>"
```

**Frontend Usage**:
```typescript
const loadInspection = async (id: string) => {
  const response = await fetch(`/api/inspections/${id}/draft`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    }
  });
  const result = await response.json();
  return result.data;
};
```

---

### 2. Start Inspection

Mark inspection as started, record arrival time.

**Endpoint**: `POST /api/inspections/:id/start`

**Request Body**:
```json
{
  "arrivedAt": "2025-10-04T10:00:00Z"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Inspection started",
  "data": {
    "id": "cmgg8g96i003vwv4guie9kykt",
    "status": "IN_PROGRESS",
    "startedAt": "2025-10-04T10:00:00.000Z",
    "arrivedAt": "2025-10-04T10:00:00.000Z"
  }
}
```

**Example**:
```bash
curl -X POST http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/start \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "arrivedAt": "2025-10-04T10:00:00Z"
  }'
```

**Frontend Usage**:
```typescript
const startInspection = async (id: string) => {
  await fetch(`/api/inspections/${id}/start`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      arrivedAt: new Date().toISOString()
    })
  });
};
```

---

### 3. Complete Inspection

Finalize inspection, trigger cost calculation.

**Endpoint**: `PUT /api/inspections/:id/complete`

**Request Body**:
```json
{
  "completedAt": "2025-10-04T14:30:00Z"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Inspection completed",
  "data": {
    "id": "cmgg8g96i003vwv4guie9kykt",
    "status": "COMPLETED",
    "completedAt": "2025-10-04T14:30:00.000Z",
    "labourCost": 1450.00,
    "equipmentCost": 264.00,
    "totalCost": 1714.00,
    "workType": "DEMOLITION"
  }
}
```

**Example**:
```bash
curl -X PUT http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/complete \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "completedAt": "2025-10-04T14:30:00Z"
  }'
```

**Note**: This triggers automatic cost calculation using `costCalculationService`.

---

## Section Updates

### 4. Update Property Information

**Endpoint**: `PUT /api/inspections/:id/property`

**Request Body**:
```json
{
  "propertyOccupation": "OWNER_OCCUPIED",
  "dwellingType": "HOUSE"
}
```

**Allowed Values**:
- `propertyOccupation`: `OWNER_OCCUPIED`, `RENTAL`, `COMMERCIAL`
- `dwellingType`: `APARTMENT`, `TOWNHOUSE`, `HOUSE`

**Response**:
```json
{
  "success": true,
  "data": {
    "propertyOccupation": "OWNER_OCCUPIED",
    "dwellingType": "HOUSE"
  }
}
```

**Example**:
```bash
curl -X PUT http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/property \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "propertyOccupation": "RENTAL",
    "dwellingType": "APARTMENT"
  }'
```

---

### 5. Update Outdoor Section

**Endpoint**: `PUT /api/inspections/:id/outdoor`

**Request Body**:
```json
{
  "outdoorTemperature": 22.5,
  "outdoorHumidity": 65.0,
  "outdoorDewPoint": 15.8,
  "outdoorComments": "Recent heavy rain, property in valley",
  "directionPhotosEnabled": true,
  "directionPhotos": "[\"url1.jpg\", \"url2.jpg\"]"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "outdoorTemperature": 22.5,
    "outdoorHumidity": 65.0,
    "outdoorDewPoint": 15.8
  }
}
```

**Example**:
```bash
curl -X PUT http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/outdoor \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "outdoorTemperature": 22.5,
    "outdoorHumidity": 65.0,
    "outdoorDewPoint": 15.8
  }'
```

**Note**: Dew point auto-calculated on frontend using Magnus formula, but can be manually overridden.

---

### 6. Update Subfloor Section

**Endpoint**: `PUT /api/inspections/:id/subfloor`

**Request Body**:
```json
{
  "subfloorEnabled": true,
  "subfloorObservations": "Standing water present, poor ventilation, mould on bearers"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "subfloorEnabled": true,
    "subfloorObservations": "Standing water present..."
  }
}
```

---

### 7. Update Waste Disposal

**Endpoint**: `PUT /api/inspections/:id/waste`

**Request Body**:
```json
{
  "wasteDisposalEnabled": true,
  "wasteAmount": 3.5
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "wasteDisposalEnabled": true,
    "wasteAmount": 3.5
  }
}
```

**Note**: Waste amount in cubic meters (0-20).

---

### 8. Update Work Procedure

**Endpoint**: `PUT /api/inspections/:id/procedure`

**Request Body**:
```json
{
  "hepaFilterEnabled": true,
  "antimicrobialEnabled": true,
  "dryingEquipmentEnabled": true,
  "dehumidifierQty": 2,
  "airMoverQty": 4,
  "rcdBoxQty": 1
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "hepaFilterEnabled": true,
    "antimicrobialEnabled": true,
    "dryingEquipmentEnabled": true,
    "dehumidifierQty": 2,
    "airMoverQty": 4,
    "rcdBoxQty": 1
  }
}
```

**Equipment Pricing**:
- Dehumidifier: $132/day
- Air Mover: $46/day
- RCD Box: $5/day

---

## Area Management

### 9. Create Area

Add new room/area to inspection.

**Endpoint**: `POST /api/inspections/:id/areas`

**Request Body**:
```json
{
  "areaName": "Master Bedroom",
  "orderIndex": 0
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "area_001",
    "inspectionId": "cmgg8g96i003vwv4guie9kykt",
    "areaName": "Master Bedroom",
    "orderIndex": 0,
    "mouldVisibility": "[]",
    "moistureReadingEnabled": false,
    "jobTime": 0,
    "demolitionRequired": false
  }
}
```

**Example**:
```bash
curl -X POST http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/areas \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "areaName": "Ensuite Bathroom",
    "orderIndex": 1
  }'
```

---

### 10. Update Area

**Endpoint**: `PUT /api/inspections/:id/areas/:areaId`

**Request Body**:
```json
{
  "areaName": "Master Bedroom",
  "mouldVisibility": "[\"VISIBLE_MEDIUM\", \"CONCEALED\"]",
  "temperature": 24.0,
  "humidity": 72.0,
  "dewPoint": 18.2,
  "commentsGenerated": "AI generated text...",
  "commentsEdited": "Edited by technician...",
  "moistureReadingEnabled": true,
  "jobTime": 4,
  "demolitionRequired": true,
  "demolitionTime": 2,
  "demolitionDescription": "Remove affected plasterboard..."
}
```

**Mould Visibility Options**:
- `CONCEALED`: Hidden behind walls/surfaces
- `VISIBLE_SMALL`: <1m²
- `VISIBLE_MEDIUM`: 1-10m²
- `VISIBLE_LARGE`: >10m²

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "area_001",
    "areaName": "Master Bedroom",
    "mouldVisibility": "[\"VISIBLE_MEDIUM\", \"CONCEALED\"]",
    "temperature": 24.0,
    "humidity": 72.0,
    "dewPoint": 18.2,
    "jobTime": 4,
    "demolitionRequired": true
  }
}
```

---

### 11. Delete Area

**Endpoint**: `DELETE /api/inspections/:id/areas/:areaId`

**Response**:
```json
{
  "success": true,
  "message": "Area deleted"
}
```

**Example**:
```bash
curl -X DELETE http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/areas/area_001 \
  -H "Authorization: Bearer <token>"
```

---

### 12. Reorder Areas

**Endpoint**: `PUT /api/inspections/:id/areas/:areaId/order`

**Request Body**:
```json
{
  "newOrderIndex": 2
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "area_001",
    "orderIndex": 2
  }
}
```

---

## Moisture Readings

### 13. Create Moisture Reading

**Endpoint**: `POST /api/inspections/:id/areas/:areaId/moisture-readings`

**Request Body**:
```json
{
  "readingType": "SURFACE",
  "material": "Plasterboard",
  "moistureLevel": 18.5,
  "orderIndex": 0
}
```

**Reading Types**:
- `SURFACE`: Non-destructive surface measurement
- `INVASIVE`: Destructive probe measurement

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "reading_001",
    "areaId": "area_001",
    "readingType": "SURFACE",
    "material": "Plasterboard",
    "moistureLevel": 18.5,
    "orderIndex": 0
  }
}
```

---

### 14. Update Moisture Reading

**Endpoint**: `PUT /api/inspections/:id/areas/:areaId/moisture-readings/:readingId`

**Request Body**:
```json
{
  "moistureLevel": 22.3,
  "material": "Timber stud"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "reading_001",
    "moistureLevel": 22.3,
    "material": "Timber stud"
  }
}
```

---

### 15. Delete Moisture Reading

**Endpoint**: `DELETE /api/inspections/:id/areas/:areaId/moisture-readings/:readingId`

**Response**:
```json
{
  "success": true,
  "message": "Reading deleted"
}
```

---

## Subfloor Assessment

### 16. Create Subfloor Reading

**Endpoint**: `POST /api/inspections/:id/subfloor/readings`

**Request Body**:
```json
{
  "material": "Timber bearer",
  "moistureLevel": 25.8,
  "orderIndex": 0
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "subfloor_reading_001",
    "inspectionId": "cmgg8g96i003vwv4guie9kykt",
    "material": "Timber bearer",
    "moistureLevel": 25.8,
    "orderIndex": 0
  }
}
```

---

### 17. Update Subfloor Reading

**Endpoint**: `PUT /api/inspections/:id/subfloor/readings/:readingId`

**Request Body**:
```json
{
  "moistureLevel": 28.3
}
```

---

### 18. Delete Subfloor Reading

**Endpoint**: `DELETE /api/inspections/:id/subfloor/readings/:readingId`

---

## Photo Upload

All photo endpoints use `multipart/form-data` with file upload.

### 19. Upload Area Photos

**Endpoint**: `POST /api/inspections/:id/areas/:areaId/photos`

**Request** (multipart/form-data):
```
photo: <File> (JPEG/PNG/GIF, max 10MB)
photoNumber: "1" | "2" | "3"
```

**Response**:
```json
{
  "success": true,
  "data": {
    "url": "/uploads/inspections/cmgg8g96i003vwv4guie9kykt/area_001_photo_1.jpg",
    "photoField": "roomPhoto1"
  }
}
```

**Example** (using FormData):
```javascript
const uploadAreaPhoto = async (inspectionId, areaId, file, photoNumber) => {
  const formData = new FormData();
  formData.append('photo', file);
  formData.append('photoNumber', photoNumber);

  const response = await fetch(
    `/api/inspections/${inspectionId}/areas/${areaId}/photos`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: formData
    }
  );
  return response.json();
};
```

**curl Example**:
```bash
curl -X POST http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/areas/area_001/photos \
  -H "Authorization: Bearer <token>" \
  -F "photo=@/path/to/image.jpg" \
  -F "photoNumber=1"
```

---

### 20. Upload Subfloor Photos

**Endpoint**: `POST /api/inspections/:id/subfloor/photos`

**Request** (multipart/form-data):
```
photo: <File>
photoNumber: "1" | "2" | "3"
```

**Response**: Same format as area photos.

---

### 21. Upload Outdoor Photos

**Endpoint**: `POST /api/inspections/:id/outdoor/photos`

**Request** (multipart/form-data):
```
photo: <File>
photoType: "frontDoorPhoto" | "frontHousePhoto" | "mailboxPhoto" | "streetPhoto"
```

**Response**:
```json
{
  "success": true,
  "data": {
    "url": "/uploads/inspections/cmgg8g96i003vwv4guie9kykt/frontDoor.jpg",
    "photoField": "frontDoorPhoto"
  }
}
```

---

### 22. Upload Direction Photos

**Endpoint**: `POST /api/inspections/:id/outdoor/direction-photos`

**Request** (multipart/form-data):
```
photo: <File>
```

**Response**:
```json
{
  "success": true,
  "data": {
    "url": "/uploads/inspections/cmgg8g96i003vwv4guie9kykt/direction_1697123456.jpg"
  }
}
```

**Note**: Direction photos are unlimited, stored in array.

---

### 23. General Photo Upload

**Endpoint**: `POST /api/inspections/:id/photos`

**Request** (multipart/form-data):
```
photo: <File>
section: "outdoor" | "area" | "subfloor"
photoType: string (field name)
```

**Response**:
```json
{
  "success": true,
  "data": {
    "url": "/uploads/inspections/cmgg8g96i003vwv4guie9kykt/photo.jpg"
  }
}
```

**Photo Processing**:
- Compressed on client before upload (max 1920x1080, 80% quality)
- Stored in `/uploads/inspections/{inspectionId}/`
- Multer middleware validates size (10MB max) and type (image/*)

---

## AI Text Generation

Requires OpenAI API key in environment variables.

### 24. Generate Area Comments

**Endpoint**: `POST /api/inspections/:id/generate-area-comments`

**Request Body**:
```json
{
  "areaId": "area_001"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "commentsGenerated": "Master bedroom presents moderate mould growth (1-10m² visible) with elevated humidity at 72%. Dew point of 18.2°C indicates persistent moisture conditions requiring immediate remediation. Concealed growth suspected behind wall cavities based on moisture readings."
  }
}
```

**AI Prompt**:
```
You are a professional mould inspection expert. Generate a concise technical
assessment (2-3 sentences) for a room based on:
- Area name
- Mould visibility levels
- Temperature, humidity, dew point
- Moisture readings

Use professional language suitable for insurance reports.
```

**Example**:
```bash
curl -X POST http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/generate-area-comments \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "areaId": "area_001"
  }'
```

---

### 25. Generate Demolition Description

**Endpoint**: `POST /api/inspections/:id/generate-demolition-description`

**Request Body**:
```json
{
  "areaId": "area_001"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "demolitionDescription": "Remove affected plasterboard ceiling section (approx 3m²) including insulation. Cut back to 300mm beyond visible damage. Seal containment barrier with 6mil plastic sheeting. Double-bag contaminated materials in heavy-duty waste bags for disposal as biohazard waste."
  }
}
```

**AI Prompt**:
```
Generate a professional demolition scope for mould remediation work.
Include:
- Specific materials to remove
- Safety procedures
- Containment requirements
- Waste handling

2-3 sentences, suitable for work order.
```

---

### 26. Generate Cause of Mould

**Endpoint**: `POST /api/inspections/:id/generate-cause-of-mould`

**Request Body**: None (uses entire inspection data)

**Response**:
```json
{
  "success": true,
  "data": {
    "causeOfMould": "Primary cause identified as inadequate ventilation in combination with water ingress from failed shower waterproofing. Elevated indoor humidity (68%) significantly exceeds outdoor baseline (52%), indicating internal moisture source. Subfloor standing water contributing to rising damp in affected areas. Recommend immediate waterproofing repair, improved mechanical ventilation, and subfloor drainage solution."
  }
}
```

**AI Prompt**:
```
Analyze complete inspection data and identify root cause of mould growth.
Consider:
- Indoor vs outdoor environmental readings
- Affected areas and patterns
- Moisture sources
- Building defects
- Ventilation issues

Provide professional root cause analysis (3-4 sentences) with remediation
recommendations suitable for insurance claims and client reports.
```

**Example**:
```bash
curl -X POST http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/generate-cause-of-mould \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json"
```

---

## Cost Calculation

### 27. Calculate Cost

Trigger manual cost calculation (also runs automatically on inspection completion).

**Endpoint**: `POST /api/inspections/:id/calculate-cost`

**Request Body**: None (uses inspection data)

**Response**:
```json
{
  "success": true,
  "data": {
    "breakdown": {
      "areas": [
        {
          "areaName": "Master Bedroom",
          "workType": "DEMOLITION",
          "hours": 6,
          "hourlyRate": 215.50,
          "cost": 1293.00
        }
      ],
      "totalHours": 6,
      "labourSubtotal": 1293.00,
      "discountPercent": 0,
      "discountAmount": 0,
      "labourCost": 1293.00,
      "equipment": {
        "dehumidifiers": { "qty": 2, "rate": 132, "days": 3, "cost": 792 },
        "airMovers": { "qty": 4, "rate": 46, "days": 3, "cost": 552 },
        "rcdBoxes": { "qty": 1, "rate": 5, "days": 3, "cost": 15 }
      },
      "equipmentCost": 1359.00,
      "totalCost": 2652.00,
      "primaryWorkType": "DEMOLITION"
    }
  }
}
```

**Calculation Logic**:

1. **Determine Work Type per Area**:
   - SUBFLOOR if subfloor enabled
   - DEMOLITION if demolitionRequired = true
   - SURFACE otherwise

2. **Calculate Hourly Rate** (per work type):
   ```
   Anchor Points:
   SURFACE: $612 (2hr) → $1,217 (8hr)
   DEMOLITION: $712 (2hr) → $1,799 (8hr)
   CONSTRUCTION: $662 (2hr) → $1,508 (8hr)
   SUBFLOOR: $900 (2hr) → $2,335 (8hr)

   Linear Interpolation (2-8hr):
   rate_2hr = anchor_2hr / 2
   rate_8hr = anchor_8hr / 8
   slope = (rate_8hr - rate_2hr) / 6
   hourlyRate = rate_2hr + slope * (hours - 2)
   ```

3. **Apply Discount**:
   ```
   8-16 hours: 7.5% off
   16-24 hours: 10% off
   24+ hours: 13% off
   ```

4. **Add Equipment**:
   ```
   equipmentCost = (dehumidifiers × 132 + airMovers × 46 + rcdBoxes × 5) × days
   ```

5. **Final Total**:
   ```
   totalCost = (labourSubtotal - discount) + equipmentCost
   ```

**Example**:
```bash
curl -X POST http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/calculate-cost \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json"
```

---

## Error Handling

### Standard Error Response

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

### Common HTTP Status Codes

**200 OK**: Successful request
```json
{ "success": true, "data": {...} }
```

**400 Bad Request**: Invalid input
```json
{ "success": false, "message": "Invalid data provided" }
```

**401 Unauthorized**: Missing/invalid token
```json
{ "success": false, "message": "Authentication required" }
```

**403 Forbidden**: Insufficient permissions
```json
{ "success": false, "message": "Access denied" }
```

**404 Not Found**: Resource doesn't exist
```json
{ "success": false, "message": "Inspection not found" }
```

**500 Internal Server Error**: Server error
```json
{ "success": false, "message": "Internal server error" }
```

**503 Service Unavailable**: OpenAI API not configured
```json
{ "success": false, "message": "OpenAI not configured" }
```

### Error Examples

**Invalid Inspection ID**:
```bash
curl -X GET http://localhost:3001/api/inspections/invalid_id/draft \
  -H "Authorization: Bearer <token>"

# Response: 404
{
  "success": false,
  "message": "Inspection not found"
}
```

**Missing Authentication**:
```bash
curl -X GET http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/draft

# Response: 401
{
  "success": false,
  "message": "Authentication required"
}
```

**AI Generation Without API Key**:
```bash
curl -X POST http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/generate-cause-of-mould \
  -H "Authorization: Bearer <token>"

# Response: 503
{
  "success": false,
  "message": "OpenAI not configured"
}
```

**File Too Large**:
```bash
curl -X POST http://localhost:3001/api/inspections/cmgg8g96i003vwv4guie9kykt/photos \
  -H "Authorization: Bearer <token>" \
  -F "photo=@large_file.jpg"

# Response: 400
{
  "success": false,
  "message": "File size exceeds 10MB limit"
}
```

---

## Rate Limiting

**Current Status**: No rate limiting implemented

**Recommendation for Production**:
```javascript
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: { success: false, message: 'Too many requests' }
});

app.use('/api/', apiLimiter);
```

---

## Testing Examples

### Complete Workflow Test

```bash
# 1. Login
TOKEN=$(curl -s -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"tech@example.com","password":"pass123"}' \
  | jq -r '.data.token')

# 2. Load inspection
INSPECTION_ID="cmgg8g96i003vwv4guie9kykt"
curl -X GET http://localhost:3001/api/inspections/$INSPECTION_ID/draft \
  -H "Authorization: Bearer $TOKEN"

# 3. Start inspection
curl -X POST http://localhost:3001/api/inspections/$INSPECTION_ID/start \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"arrivedAt":"'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}'

# 4. Update property
curl -X PUT http://localhost:3001/api/inspections/$INSPECTION_ID/property \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"propertyOccupation":"OWNER_OCCUPIED","dwellingType":"HOUSE"}'

# 5. Create area
AREA_ID=$(curl -s -X POST http://localhost:3001/api/inspections/$INSPECTION_ID/areas \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"areaName":"Master Bedroom","orderIndex":0}' \
  | jq -r '.data.id')

# 6. Update area
curl -X PUT http://localhost:3001/api/inspections/$INSPECTION_ID/areas/$AREA_ID \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "mouldVisibility":"[\"VISIBLE_MEDIUM\"]",
    "temperature":24.0,
    "humidity":72.0,
    "dewPoint":18.2,
    "jobTime":4,
    "demolitionRequired":true,
    "demolitionTime":2
  }'

# 7. Generate AI comments
curl -X POST http://localhost:3001/api/inspections/$INSPECTION_ID/generate-area-comments \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"areaId":"'$AREA_ID'"}'

# 8. Complete inspection
curl -X PUT http://localhost:3001/api/inspections/$INSPECTION_ID/complete \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"completedAt":"'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}'
```

---

## Frontend Integration

### React Hook Example

```typescript
import { useState, useEffect } from 'react';

const useInspection = (inspectionId: string) => {
  const [inspection, setInspection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInspection();
  }, [inspectionId]);

  const loadInspection = async () => {
    const response = await fetch(`/api/inspections/${inspectionId}/draft`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    });
    const result = await response.json();
    setInspection(result.data);
    setLoading(false);
  };

  const updateProperty = async (data: any) => {
    await fetch(`/api/inspections/${inspectionId}/property`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    await loadInspection(); // Reload
  };

  const createArea = async (areaName: string) => {
    const response = await fetch(`/api/inspections/${inspectionId}/areas`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        areaName,
        orderIndex: inspection.areas.length
      })
    });
    const result = await response.json();
    await loadInspection();
    return result.data;
  };

  return {
    inspection,
    loading,
    updateProperty,
    createArea,
    reload: loadInspection
  };
};
```

---

## Production Deployment

### Environment Variables

```bash
# Required
DATABASE_URL="postgresql://user:pass@host:5432/db"
JWT_SECRET="production-secret-key-change-this"
PORT=3001

# Optional (AI features)
OPENAI_API_KEY="sk-..."

# Optional (Cloud photo storage)
AWS_S3_BUCKET="mould-inspection-photos"
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
```

### Security Checklist

- [ ] Change JWT_SECRET from default
- [ ] Enable HTTPS only
- [ ] Add rate limiting
- [ ] Configure CORS for production domain
- [ ] Set up PostgreSQL (not SQLite)
- [ ] Configure S3/Cloudinary for photos
- [ ] Enable API logging
- [ ] Set up error monitoring (Sentry)

---

## Support

**Technical Issues**: See `INSPECTION-FORM-GUIDE.md`
**Cost Calculation**: See `src/lib/services/costCalculationService.ts`
**Source Code**: `/api-routes/mobile-inspection.js` (1,400+ lines)

**API Version**: 1.0
**Last Updated**: October 14, 2025
