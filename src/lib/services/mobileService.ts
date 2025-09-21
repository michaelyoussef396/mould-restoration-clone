import { z } from 'zod';

// Types for mobile CRM functionality
export interface OfflineSync {
  id: string;
  type: 'CREATE' | 'UPDATE' | 'DELETE';
  entity: 'LEAD' | 'INSPECTION' | 'ACTIVITY' | 'PHOTO' | 'REPORT';
  entityId: string;
  data: any;
  timestamp: string;
  synced: boolean;
  syncedAt?: string;
  retryCount: number;
  lastError?: string;
}

export interface MobileInspection {
  id: string;
  leadId: string;
  scheduledAt: string;
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'OFFLINE_COMPLETED';
  customerName: string;
  address: string;
  phone: string;
  serviceType: string;
  checklistItems: ChecklistItem[];
  photos: MobilePhoto[];
  voiceNotes: VoiceNote[];
  findings: MobileFindings;
  recommendations: string[];
  signatures: MobileSignature[];
  gpsLocation?: GpsLocation;
  syncStatus: 'SYNCED' | 'PENDING' | 'FAILED' | 'OFFLINE';
  lastSyncAt?: string;
}

export interface ChecklistItem {
  id: string;
  category: 'PREPARATION' | 'INSPECTION' | 'DOCUMENTATION' | 'COMPLETION';
  task: string;
  completed: boolean;
  notes?: string;
  required: boolean;
  timestamp?: string;
}

export interface MobilePhoto {
  id: string;
  inspectionId: string;
  localPath: string;
  cloudUrl?: string;
  caption: string;
  location: string;
  category: 'BEFORE' | 'DURING' | 'AFTER' | 'DAMAGE' | 'EQUIPMENT' | 'MOISTURE';
  gpsCoordinates?: { latitude: number; longitude: number };
  timestamp: string;
  fileSize: number;
  uploaded: boolean;
  compressed: boolean;
}

export interface VoiceNote {
  id: string;
  inspectionId: string;
  localPath: string;
  cloudUrl?: string;
  duration: number;
  transcription?: string;
  category: 'FINDING' | 'RECOMMENDATION' | 'CUSTOMER_CONCERN' | 'FOLLOW_UP';
  timestamp: string;
  processed: boolean;
}

export interface MobileFindings {
  mouldPresent: boolean;
  severityLevel?: 'LOW' | 'MODERATE' | 'HIGH' | 'SEVERE';
  affectedAreas: string[];
  moistureReadings: MobileMoistureReading[];
  visualObservations: string[];
  immediateActions: string[];
  followUpRequired: boolean;
  customerNotified: boolean;
}

export interface MobileMoistureReading {
  id: string;
  location: string;
  reading: number;
  unit: string;
  normal: boolean;
  timestamp: string;
  gpsCoordinates?: { latitude: number; longitude: number };
  deviceId?: string;
}

export interface MobileSignature {
  id: string;
  type: 'CUSTOMER' | 'TECHNICIAN' | 'PROPERTY_MANAGER';
  signatureData: string; // Base64 encoded signature
  signerName: string;
  signerTitle?: string;
  timestamp: string;
  purpose: 'COMPLETION' | 'PERMISSION' | 'ACKNOWLEDGMENT';
}

export interface GpsLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: string;
  address?: string;
}

export interface MobileSettings {
  userId: string;
  offlineMode: boolean;
  autoSync: boolean;
  syncOnWifiOnly: boolean;
  photoQuality: 'LOW' | 'MEDIUM' | 'HIGH';
  autoPhotoUpload: boolean;
  voiceTranscription: boolean;
  gpsTracking: boolean;
  notificationsEnabled: boolean;
  darkMode: boolean;
  fontSize: 'SMALL' | 'MEDIUM' | 'LARGE';
}

export interface SyncStatus {
  lastSyncAt?: string;
  pendingUploads: number;
  pendingDownloads: number;
  syncInProgress: boolean;
  networkStatus: 'ONLINE' | 'OFFLINE' | 'SLOW';
  storageUsed: number; // MB
  storageLimit: number; // MB
  errors: string[];
}

// Validation schemas
const CreateMobileInspectionSchema = z.object({
  leadId: z.string(),
  scheduledAt: z.string(),
  checklistTemplate: z.string().optional(),
});

const UpdateMobileInspectionSchema = z.object({
  status: z.enum(['IN_PROGRESS', 'COMPLETED', 'OFFLINE_COMPLETED']).optional(),
  findings: z.object({
    mouldPresent: z.boolean(),
    severityLevel: z.enum(['LOW', 'MODERATE', 'HIGH', 'SEVERE']).optional(),
    affectedAreas: z.array(z.string()),
    visualObservations: z.array(z.string()),
    immediateActions: z.array(z.string()),
    followUpRequired: z.boolean(),
    customerNotified: z.boolean(),
  }).optional(),
  recommendations: z.array(z.string()).optional(),
  gpsLocation: z.object({
    latitude: z.number(),
    longitude: z.number(),
    accuracy: z.number(),
  }).optional(),
});

const AddPhotoSchema = z.object({
  inspectionId: z.string(),
  file: z.any(), // File object
  caption: z.string(),
  location: z.string(),
  category: z.enum(['BEFORE', 'DURING', 'AFTER', 'DAMAGE', 'EQUIPMENT', 'MOISTURE']),
  gpsCoordinates: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }).optional(),
});

class MobileService {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  private db: IDBDatabase | null = null;
  private syncQueue: OfflineSync[] = [];

  constructor() {
    this.initIndexedDB();
    this.setupServiceWorker();
    this.startPeriodicSync();
  }

  // IndexedDB initialization for offline storage
  private async initIndexedDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('MouldCRM', 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object stores
        if (!db.objectStoreNames.contains('inspections')) {
          const inspectionStore = db.createObjectStore('inspections', { keyPath: 'id' });
          inspectionStore.createIndex('leadId', 'leadId', { unique: false });
          inspectionStore.createIndex('status', 'status', { unique: false });
        }

        if (!db.objectStoreNames.contains('photos')) {
          const photoStore = db.createObjectStore('photos', { keyPath: 'id' });
          photoStore.createIndex('inspectionId', 'inspectionId', { unique: false });
          photoStore.createIndex('uploaded', 'uploaded', { unique: false });
        }

        if (!db.objectStoreNames.contains('syncQueue')) {
          const syncStore = db.createObjectStore('syncQueue', { keyPath: 'id' });
          syncStore.createIndex('synced', 'synced', { unique: false });
          syncStore.createIndex('type', 'type', { unique: false });
        }

        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'userId' });
        }
      };
    });
  }

  // Service Worker setup for background sync
  private async setupServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/mobile-sw.js');
        console.log('Mobile service worker registered:', registration);
      } catch (error) {
        console.error('Service worker registration failed:', error);
      }
    }
  }

  // Mobile Inspection Management
  async getMobileInspections(status?: string): Promise<MobileInspection[]> {
    // Try online first, fallback to offline
    try {
      if (navigator.onLine) {
        const token = localStorage.getItem('auth_token');
        const url = status
          ? `${this.baseUrl}/api/mobile/inspections?status=${status}`
          : `${this.baseUrl}/api/mobile/inspections`;

        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const inspections = await response.json();
          await this.saveInspectionsOffline(inspections);
          return inspections;
        }
      }
    } catch (error) {
      console.warn('Online fetch failed, using offline data:', error);
    }

    // Fallback to offline data
    return this.getInspectionsOffline(status);
  }

  async getMobileInspectionById(id: string): Promise<MobileInspection | null> {
    // Try online first
    try {
      if (navigator.onLine) {
        const token = localStorage.getItem('auth_token');
        const response = await fetch(`${this.baseUrl}/api/mobile/inspections/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const inspection = await response.json();
          await this.saveInspectionOffline(inspection);
          return inspection;
        }
      }
    } catch (error) {
      console.warn('Online fetch failed, using offline data:', error);
    }

    // Fallback to offline
    return this.getInspectionOffline(id);
  }

  async createMobileInspection(data: z.infer<typeof CreateMobileInspectionSchema>): Promise<MobileInspection> {
    const validated = CreateMobileInspectionSchema.parse(data);

    const inspection: MobileInspection = {
      id: `mobile_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      leadId: validated.leadId,
      scheduledAt: validated.scheduledAt,
      status: 'SCHEDULED',
      customerName: '', // Will be populated from lead data
      address: '',
      phone: '',
      serviceType: '',
      checklistItems: await this.getDefaultChecklist(validated.checklistTemplate),
      photos: [],
      voiceNotes: [],
      findings: {
        mouldPresent: false,
        affectedAreas: [],
        moistureReadings: [],
        visualObservations: [],
        immediateActions: [],
        followUpRequired: false,
        customerNotified: false,
      },
      recommendations: [],
      signatures: [],
      syncStatus: 'PENDING',
    };

    // Save offline first
    await this.saveInspectionOffline(inspection);

    // Queue for sync
    await this.addToSyncQueue({
      type: 'CREATE',
      entity: 'INSPECTION',
      entityId: inspection.id,
      data: inspection,
    });

    return inspection;
  }

  async updateMobileInspection(id: string, data: z.infer<typeof UpdateMobileInspectionSchema>): Promise<MobileInspection> {
    const validated = UpdateMobileInspectionSchema.parse(data);

    let inspection = await this.getInspectionOffline(id);
    if (!inspection) {
      throw new Error('Inspection not found');
    }

    inspection = { ...inspection, ...validated, syncStatus: 'PENDING' };
    await this.saveInspectionOffline(inspection);

    // Queue for sync
    await this.addToSyncQueue({
      type: 'UPDATE',
      entity: 'INSPECTION',
      entityId: id,
      data: validated,
    });

    return inspection;
  }

  // Photo Management
  async addPhoto(data: z.infer<typeof AddPhotoSchema>): Promise<MobilePhoto> {
    const validated = AddPhotoSchema.parse(data);

    const photo: MobilePhoto = {
      id: `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      inspectionId: validated.inspectionId,
      localPath: '', // Will be set after compression
      caption: validated.caption,
      location: validated.location,
      category: validated.category,
      gpsCoordinates: validated.gpsCoordinates,
      timestamp: new Date().toISOString(),
      fileSize: validated.file.size,
      uploaded: false,
      compressed: false,
    };

    // Compress and save photo
    const compressedFile = await this.compressPhoto(validated.file);
    photo.localPath = await this.savePhotoLocally(compressedFile, photo.id);
    photo.compressed = true;
    photo.fileSize = compressedFile.size;

    await this.savePhotoOffline(photo);

    // Queue for upload
    await this.addToSyncQueue({
      type: 'CREATE',
      entity: 'PHOTO',
      entityId: photo.id,
      data: photo,
    });

    return photo;
  }

  async getPhotosForInspection(inspectionId: string): Promise<MobilePhoto[]> {
    return this.getPhotosOffline(inspectionId);
  }

  // Voice Notes
  async addVoiceNote(inspectionId: string, audioBlob: Blob, category: VoiceNote['category']): Promise<VoiceNote> {
    const voiceNote: VoiceNote = {
      id: `voice_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      inspectionId,
      localPath: await this.saveAudioLocally(audioBlob, `voice_${Date.now()}`),
      duration: 0, // Will be calculated
      category,
      timestamp: new Date().toISOString(),
      processed: false,
    };

    await this.saveVoiceNoteOffline(voiceNote);

    // Queue for upload and transcription
    await this.addToSyncQueue({
      type: 'CREATE',
      entity: 'VOICE_NOTE',
      entityId: voiceNote.id,
      data: voiceNote,
    });

    return voiceNote;
  }

  // GPS and Location Services
  async getCurrentLocation(): Promise<GpsLocation> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: new Date().toISOString(),
          });
        },
        (error) => reject(error),
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    });
  }

  async reverseGeocode(latitude: number, longitude: number): Promise<string> {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`
      );
      const data = await response.json();
      return data.features[0]?.place_name || `${latitude}, ${longitude}`;
    } catch (error) {
      return `${latitude}, ${longitude}`;
    }
  }

  // Signature Capture
  async addSignature(inspectionId: string, signatureData: string, signerName: string, type: MobileSignature['type'], purpose: MobileSignature['purpose']): Promise<MobileSignature> {
    const signature: MobileSignature = {
      id: `sig_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      signatureData,
      signerName,
      timestamp: new Date().toISOString(),
      purpose,
    };

    // Update inspection with signature
    const inspection = await this.getInspectionOffline(inspectionId);
    if (inspection) {
      inspection.signatures.push(signature);
      await this.saveInspectionOffline(inspection);
    }

    await this.addToSyncQueue({
      type: 'CREATE',
      entity: 'SIGNATURE',
      entityId: signature.id,
      data: signature,
    });

    return signature;
  }

  // Sync Management
  async syncData(): Promise<{ success: boolean; synced: number; failed: number; errors: string[] }> {
    const results = { success: true, synced: 0, failed: 0, errors: [] as string[] };

    if (!navigator.onLine) {
      results.success = false;
      results.errors.push('No internet connection');
      return results;
    }

    const pendingItems = await this.getPendingSyncItems();

    for (const item of pendingItems) {
      try {
        await this.syncItem(item);
        item.synced = true;
        item.syncedAt = new Date().toISOString();
        await this.updateSyncItem(item);
        results.synced++;
      } catch (error) {
        item.retryCount++;
        item.lastError = error instanceof Error ? error.message : 'Unknown error';
        await this.updateSyncItem(item);
        results.failed++;
        results.errors.push(`${item.entity} ${item.entityId}: ${item.lastError}`);
      }
    }

    return results;
  }

  async getSyncStatus(): Promise<SyncStatus> {
    const pendingUploads = await this.countPendingSyncItems();
    const storageUsed = await this.calculateStorageUsage();

    return {
      lastSyncAt: localStorage.getItem('lastSyncAt') || undefined,
      pendingUploads,
      pendingDownloads: 0,
      syncInProgress: false,
      networkStatus: navigator.onLine ? 'ONLINE' : 'OFFLINE',
      storageUsed,
      storageLimit: 100, // 100MB limit
      errors: [],
    };
  }

  // Settings Management
  async getMobileSettings(): Promise<MobileSettings> {
    const userId = localStorage.getItem('userId') || 'default';
    return this.getSettingsOffline(userId);
  }

  async updateMobileSettings(settings: Partial<MobileSettings>): Promise<MobileSettings> {
    const userId = localStorage.getItem('userId') || 'default';
    const currentSettings = await this.getSettingsOffline(userId);
    const updatedSettings = { ...currentSettings, ...settings };
    await this.saveSettingsOffline(updatedSettings);
    return updatedSettings;
  }

  // Offline Data Management
  private async getInspectionsOffline(status?: string): Promise<MobileInspection[]> {
    if (!this.db) return [];

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['inspections'], 'readonly');
      const store = transaction.objectStore('inspections');
      const request = store.getAll();

      request.onsuccess = () => {
        let inspections = request.result;
        if (status) {
          inspections = inspections.filter(i => i.status === status);
        }
        resolve(inspections);
      };
      request.onerror = () => reject(request.error);
    });
  }

  private async getInspectionOffline(id: string): Promise<MobileInspection | null> {
    if (!this.db) return null;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['inspections'], 'readonly');
      const store = transaction.objectStore('inspections');
      const request = store.get(id);

      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  private async saveInspectionOffline(inspection: MobileInspection): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['inspections'], 'readwrite');
      const store = transaction.objectStore('inspections');
      const request = store.put(inspection);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  private async saveInspectionsOffline(inspections: MobileInspection[]): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['inspections'], 'readwrite');
      const store = transaction.objectStore('inspections');

      let completed = 0;
      const total = inspections.length;

      if (total === 0) {
        resolve();
        return;
      }

      inspections.forEach(inspection => {
        const request = store.put(inspection);
        request.onsuccess = () => {
          completed++;
          if (completed === total) resolve();
        };
        request.onerror = () => reject(request.error);
      });
    });
  }

  // Photo management helpers
  private async compressPhoto(file: File): Promise<File> {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      const img = new Image();

      img.onload = () => {
        const maxWidth = 1920;
        const maxHeight = 1080;
        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);

        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          const compressedFile = new File([blob!], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        }, 'image/jpeg', 0.8);
      };

      img.src = URL.createObjectURL(file);
    });
  }

  private async savePhotoLocally(file: File, photoId: string): Promise<string> {
    // In a real implementation, this would save to device storage
    // For now, we'll use a data URL
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  }

  private async saveAudioLocally(blob: Blob, filename: string): Promise<string> {
    // Similar to photo saving
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }

  // Sync queue management
  private async addToSyncQueue(item: Omit<OfflineSync, 'id' | 'timestamp' | 'synced' | 'retryCount'>): Promise<void> {
    const syncItem: OfflineSync = {
      ...item,
      id: `sync_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      synced: false,
      retryCount: 0,
    };

    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['syncQueue'], 'readwrite');
      const store = transaction.objectStore('syncQueue');
      const request = store.add(syncItem);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  private async getPendingSyncItems(): Promise<OfflineSync[]> {
    if (!this.db) return [];

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['syncQueue'], 'readonly');
      const store = transaction.objectStore('syncQueue');
      const index = store.index('synced');
      const request = index.getAll(false);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  private async syncItem(item: OfflineSync): Promise<void> {
    const token = localStorage.getItem('auth_token');

    let url = `${this.baseUrl}/api/mobile/sync`;
    let method = 'POST';

    if (item.type === 'UPDATE') {
      url = `${this.baseUrl}/api/mobile/sync/${item.entityId}`;
      method = 'PUT';
    } else if (item.type === 'DELETE') {
      url = `${this.baseUrl}/api/mobile/sync/${item.entityId}`;
      method = 'DELETE';
    }

    const response = await fetch(url, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: item.type,
        entity: item.entity,
        data: item.data,
      }),
    });

    if (!response.ok) {
      throw new Error(`Sync failed: ${response.statusText}`);
    }
  }

  private async updateSyncItem(item: OfflineSync): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['syncQueue'], 'readwrite');
      const store = transaction.objectStore('syncQueue');
      const request = store.put(item);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  private async countPendingSyncItems(): Promise<number> {
    if (!this.db) return 0;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['syncQueue'], 'readonly');
      const store = transaction.objectStore('syncQueue');
      const index = store.index('synced');
      const request = index.count(false);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  private async calculateStorageUsage(): Promise<number> {
    // Estimate storage usage based on stored data
    if (!navigator.storage || !navigator.storage.estimate) {
      return 0;
    }

    try {
      const estimate = await navigator.storage.estimate();
      return Math.round((estimate.usage || 0) / 1024 / 1024); // Convert to MB
    } catch {
      return 0;
    }
  }

  // Helper methods
  private async getDefaultChecklist(template?: string): Promise<ChecklistItem[]> {
    // Return default checklist items based on template
    const defaultItems: ChecklistItem[] = [
      {
        id: '1',
        category: 'PREPARATION',
        task: 'Confirm customer contact details',
        completed: false,
        required: true,
      },
      {
        id: '2',
        category: 'PREPARATION',
        task: 'Review service requirements',
        completed: false,
        required: true,
      },
      {
        id: '3',
        category: 'INSPECTION',
        task: 'Visual inspection of affected areas',
        completed: false,
        required: true,
      },
      {
        id: '4',
        category: 'INSPECTION',
        task: 'Moisture readings',
        completed: false,
        required: true,
      },
      {
        id: '5',
        category: 'DOCUMENTATION',
        task: 'Take before photos',
        completed: false,
        required: true,
      },
      {
        id: '6',
        category: 'DOCUMENTATION',
        task: 'Record findings',
        completed: false,
        required: true,
      },
      {
        id: '7',
        category: 'COMPLETION',
        task: 'Customer signature',
        completed: false,
        required: true,
      },
    ];

    return defaultItems;
  }

  private async getPhotosOffline(inspectionId: string): Promise<MobilePhoto[]> {
    if (!this.db) return [];

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['photos'], 'readonly');
      const store = transaction.objectStore('photos');
      const index = store.index('inspectionId');
      const request = index.getAll(inspectionId);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  private async savePhotoOffline(photo: MobilePhoto): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['photos'], 'readwrite');
      const store = transaction.objectStore('photos');
      const request = store.put(photo);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  private async saveVoiceNoteOffline(voiceNote: VoiceNote): Promise<void> {
    // Store voice note metadata in inspection record
    const inspection = await this.getInspectionOffline(voiceNote.inspectionId);
    if (inspection) {
      inspection.voiceNotes.push(voiceNote);
      await this.saveInspectionOffline(inspection);
    }
  }

  private async getSettingsOffline(userId: string): Promise<MobileSettings> {
    if (!this.db) {
      return this.getDefaultSettings(userId);
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['settings'], 'readonly');
      const store = transaction.objectStore('settings');
      const request = store.get(userId);

      request.onsuccess = () => {
        resolve(request.result || this.getDefaultSettings(userId));
      };
      request.onerror = () => reject(request.error);
    });
  }

  private async saveSettingsOffline(settings: MobileSettings): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['settings'], 'readwrite');
      const store = transaction.objectStore('settings');
      const request = store.put(settings);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  private getDefaultSettings(userId: string): MobileSettings {
    return {
      userId,
      offlineMode: false,
      autoSync: true,
      syncOnWifiOnly: false,
      photoQuality: 'MEDIUM',
      autoPhotoUpload: true,
      voiceTranscription: true,
      gpsTracking: true,
      notificationsEnabled: true,
      darkMode: false,
      fontSize: 'MEDIUM',
    };
  }

  private startPeriodicSync(): void {
    // Auto-sync every 5 minutes when online
    setInterval(async () => {
      if (navigator.onLine) {
        try {
          await this.syncData();
        } catch (error) {
          console.warn('Periodic sync failed:', error);
        }
      }
    }, 5 * 60 * 1000);
  }
}

export const mobileService = new MobileService();
export default mobileService;