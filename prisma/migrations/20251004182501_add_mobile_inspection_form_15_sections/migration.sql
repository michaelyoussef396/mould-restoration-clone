-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'CLIENT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "phone" TEXT,
    "territories" TEXT,
    "workingHours" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "leads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "suburb" TEXT NOT NULL,
    "address" TEXT,
    "postcode" TEXT,
    "serviceType" TEXT NOT NULL,
    "urgency" TEXT NOT NULL DEFAULT 'MEDIUM',
    "source" TEXT NOT NULL DEFAULT 'WEBSITE',
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "estimatedValue" REAL,
    "bookingDates" TEXT,
    "inspectionDate" TEXT,
    "inspectionTime" TEXT,
    "emailSent" BOOLEAN NOT NULL DEFAULT false,
    "emailSentAt" DATETIME,
    "emailDeliveryId" TEXT,
    "emailStatus" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "contactedAt" DATETIME,
    "qualifiedAt" DATETIME,
    "convertedAt" DATETIME,
    "createdById" TEXT NOT NULL,
    "assignedToId" TEXT,
    CONSTRAINT "leads_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "leads_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "inspections" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jobNumber" TEXT,
    "triage" TEXT,
    "address" TEXT,
    "inspectorId" TEXT,
    "requestedBy" TEXT,
    "attentionTo" TEXT,
    "inspectionDate" DATETIME,
    "propertyOccupation" TEXT,
    "dwellingType" TEXT,
    "subfloorEnabled" BOOLEAN NOT NULL DEFAULT false,
    "subfloorObservations" TEXT,
    "subfloorLandscape" TEXT,
    "subfloorComments" TEXT,
    "subfloorPhotos" TEXT,
    "subfloorSanitation" BOOLEAN NOT NULL DEFAULT false,
    "subfloorRacking" BOOLEAN NOT NULL DEFAULT false,
    "subfloorTreatmentTime" INTEGER,
    "outdoorTemperature" REAL,
    "outdoorHumidity" REAL,
    "outdoorDewPoint" REAL,
    "outdoorComments" TEXT,
    "frontDoorPhoto" TEXT,
    "frontHousePhoto" TEXT,
    "mailboxPhoto" TEXT,
    "streetPhoto" TEXT,
    "directionPhotosEnabled" BOOLEAN NOT NULL DEFAULT false,
    "directionPhotos" TEXT,
    "wasteDisposalEnabled" BOOLEAN NOT NULL DEFAULT false,
    "wasteDisposalAmount" TEXT,
    "hepaVac" BOOLEAN NOT NULL DEFAULT false,
    "antimicrobial" BOOLEAN NOT NULL DEFAULT false,
    "stainRemovingAntimicrobial" BOOLEAN NOT NULL DEFAULT false,
    "homeSanitationFogging" BOOLEAN NOT NULL DEFAULT false,
    "dryingEquipmentEnabled" BOOLEAN NOT NULL DEFAULT false,
    "dehumidifierQty" INTEGER NOT NULL DEFAULT 0,
    "airMoverQty" INTEGER NOT NULL DEFAULT 0,
    "rcdBoxQty" INTEGER NOT NULL DEFAULT 0,
    "recommendDehumidifier" BOOLEAN NOT NULL DEFAULT false,
    "dehumidifierSize" TEXT,
    "causeOfMould" TEXT,
    "causeOfMouldOriginal" TEXT,
    "additionalInfoTechnician" TEXT,
    "additionalEquipmentComments" TEXT,
    "parkingOptions" TEXT,
    "labourCost" REAL,
    "equipmentCost" REAL,
    "subtotal" REAL,
    "gst" REAL,
    "totalCost" REAL,
    "workType" TEXT,
    "totalHours" REAL,
    "discountPercent" REAL,
    "scheduledAt" DATETIME NOT NULL,
    "completedAt" DATETIME,
    "startedAt" DATETIME,
    "arrivedAt" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'SCHEDULED',
    "findings" TEXT,
    "recommendations" TEXT,
    "photos" TEXT,
    "reportUrl" TEXT,
    "estimatedCost" REAL,
    "finalCost" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "leadId" TEXT NOT NULL,
    "technicianId" TEXT NOT NULL,
    CONSTRAINT "inspections_inspectorId_fkey" FOREIGN KEY ("inspectorId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "inspections_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "inspections_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "leadId" TEXT,
    "inspectionId" TEXT,
    CONSTRAINT "activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "activities_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "activities_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "inspections" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "relatedEntityType" TEXT,
    "relatedEntityId" TEXT,
    "leadId" TEXT,
    "bookingId" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "priority" TEXT NOT NULL DEFAULT 'NORMAL',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readAt" DATETIME,
    CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "notifications_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "notifications_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "leadId" TEXT NOT NULL,
    "technicianId" TEXT NOT NULL,
    "scheduledDate" DATETIME NOT NULL,
    "scheduledTime" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL DEFAULT 60,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "customerPreferredDates" TEXT,
    "confirmedDatetime" DATETIME,
    "propertyAddress" TEXT NOT NULL,
    "melbourneSuburb" TEXT NOT NULL,
    "estimatedTravelTime" INTEGER,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "bookings_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "bookings_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "inspection_areas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inspectionId" TEXT NOT NULL,
    "areaName" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "mouldVisibility" TEXT NOT NULL,
    "temperature" REAL,
    "humidity" REAL,
    "dewPoint" REAL,
    "commentsGenerated" TEXT,
    "commentsEdited" TEXT,
    "commentsApproved" BOOLEAN NOT NULL DEFAULT false,
    "moistureReadingEnabled" BOOLEAN NOT NULL DEFAULT false,
    "internalNotes" TEXT,
    "roomPhoto1" TEXT,
    "roomPhoto2" TEXT,
    "roomPhoto3" TEXT,
    "infraredEnabled" BOOLEAN NOT NULL DEFAULT false,
    "infraredPhoto" TEXT,
    "infraredNaturalPhoto" TEXT,
    "infraredObservation" TEXT,
    "jobTime" INTEGER NOT NULL,
    "demolitionRequired" BOOLEAN NOT NULL DEFAULT false,
    "demolitionTime" INTEGER,
    "demolitionDescGenerated" TEXT,
    "demolitionDescEdited" TEXT,
    "demolitionDescApproved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "inspection_areas_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "inspections" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "moisture_readings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "areaId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "photos" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "moisture_readings_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "inspection_areas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "subfloor_readings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inspectionId" TEXT NOT NULL,
    "moistureValue" REAL NOT NULL,
    "location" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "subfloor_readings_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "inspections" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "inspections_jobNumber_key" ON "inspections"("jobNumber");
