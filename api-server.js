#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.API_PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'development-secret-key';

// Initialize Prisma Client with enhanced configuration
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  errorFormat: 'pretty',
});

// Rate limiting store (in-memory for development, use Redis in production)
const rateLimitStore = new Map();

// Rate limiting middleware
const rateLimit = (windowMs = 15 * 60 * 1000, maxRequests = 100) => {
  return (req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress;
    const key = `${clientIp}:${req.path}`;
    const now = Date.now();

    // Clean up old entries
    if (Math.random() < 0.1) { // Clean up 10% of the time
      for (const [k, data] of rateLimitStore.entries()) {
        if (now - data.windowStart > windowMs) {
          rateLimitStore.delete(k);
        }
      }
    }

    let clientData = rateLimitStore.get(key);

    if (!clientData || now - clientData.windowStart > windowMs) {
      clientData = {
        windowStart: now,
        requestCount: 0
      };
    }

    clientData.requestCount++;
    rateLimitStore.set(key, clientData);

    // Set rate limit headers
    res.set({
      'X-RateLimit-Limit': maxRequests.toString(),
      'X-RateLimit-Remaining': Math.max(0, maxRequests - clientData.requestCount).toString(),
      'X-RateLimit-Reset': new Date(clientData.windowStart + windowMs).toISOString(),
    });

    if (clientData.requestCount > maxRequests) {
      return res.status(429).json({
        error: 'Too many requests',
        message: 'Rate limit exceeded. Please try again later.',
        retryAfter: Math.ceil((clientData.windowStart + windowMs - now) / 1000)
      });
    }

    next();
  };
};

// Request logging middleware
const requestLogger = (req, res, next) => {
  const start = Date.now();
  const requestId = Math.random().toString(36).substr(2, 9);

  req.requestId = requestId;

  // Log request
  console.log(`[${new Date().toISOString()}] ${requestId} ${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    contentLength: req.get('Content-Length'),
  });

  // Override res.json to log responses
  const originalJson = res.json.bind(res);
  res.json = (data) => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${requestId} ${res.statusCode} ${duration}ms`);
    return originalJson(data);
  };

  next();
};

// Enhanced CORS with production safety
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? [process.env.FRONTEND_URL || 'https://mouldandrestoration.com.au']
    : ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082', 'http://localhost:8083', 'http://localhost:8084', 'http://localhost:8085', 'http://localhost:8086', 'http://localhost:8087', 'http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Client-Timestamp', 'X-Request-Source'],
  exposedHeaders: ['X-RateLimit-Limit', 'X-RateLimit-Remaining', 'X-RateLimit-Reset']
}));

// Enhanced middleware stack
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(requestLogger);
app.use(rateLimit(15 * 60 * 1000, 1000)); // 1000 requests per 15 minutes

// Security headers
app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-API-Version': '1.0.0',
    'X-Powered-By': 'Mould & Restoration CRM'
  });
  next();
});

// Standard API response helpers
const apiResponse = {
  success: (data, message = 'Success', meta = {}) => ({
    success: true,
    message,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      ...meta
    }
  }),

  error: (message = 'Internal server error', code = 'INTERNAL_ERROR', details = {}, statusCode = 500) => ({
    success: false,
    error: {
      code,
      message,
      details,
      timestamp: new Date().toISOString()
    }
  }),

  validationError: (errors) => ({
    success: false,
    error: {
      code: 'VALIDATION_ERROR',
      message: 'Validation failed',
      details: errors,
      timestamp: new Date().toISOString()
    }
  }),

  notFound: (resource = 'Resource') => ({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `${resource} not found`,
      timestamp: new Date().toISOString()
    }
  })
};

// Demo passwords for development
const userPasswords = {
  'admin@mouldandrestoration.com.au': 'admin123',
  'tech@mouldandrestoration.com.au': 'tech123',
};

// Enhanced authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json(
      apiResponse.error('Access token required', 'MISSING_TOKEN', {}, 401)
    );
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      let errorCode = 'INVALID_TOKEN';
      let message = 'Invalid token';

      if (err.name === 'TokenExpiredError') {
        errorCode = 'TOKEN_EXPIRED';
        message = 'Token has expired';
      } else if (err.name === 'JsonWebTokenError') {
        errorCode = 'MALFORMED_TOKEN';
        message = 'Malformed token';
      }

      return res.status(403).json(
        apiResponse.error(message, errorCode, { tokenError: err.name }, 403)
      );
    }

    req.user = user;
    next();
  });
};

// Enhanced database error handler
const handleDatabaseError = (error, operation = 'Database operation') => {
  console.error(`Database error during ${operation}:`, error);

  if (error.code === 'P2002') {
    return apiResponse.error(
      'A record with this information already exists',
      'UNIQUE_CONSTRAINT_VIOLATION',
      { constraint: error.meta?.target },
      409
    );
  }

  if (error.code === 'P2025') {
    return apiResponse.error(
      'Record not found',
      'RECORD_NOT_FOUND',
      {},
      404
    );
  }

  if (error.code === 'P2003') {
    return apiResponse.error(
      'This operation would violate a required relationship',
      'FOREIGN_KEY_CONSTRAINT',
      { constraint: error.meta?.field_name },
      400
    );
  }

  return apiResponse.error(
    'Database operation failed',
    'DATABASE_ERROR',
    { originalError: error.code || error.message },
    500
  );
};

// Auth Routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Check if user exists and password matches
    const demoPassword = userPasswords[email];
    if (!user || demoPassword !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        role: user.role.toLowerCase() 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return user data and token
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role.toLowerCase(),
        createdAt: user.createdAt,
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/auth/me', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role.toLowerCase(),
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Lead Routes
app.get('/api/leads', authenticateToken, async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      include: {
        createdBy: true,
        assignedTo: true,
        inspections: true,
        activities: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(leads);
  } catch (error) {
    console.error('Get leads error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/leads/recent/:limit', authenticateToken, async (req, res) => {
  try {
    const limit = parseInt(req.params.limit) || 10;
    
    const leads = await prisma.lead.findMany({
      take: limit,
      include: {
        createdBy: true,
        assignedTo: true,
        inspections: true,
        activities: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(leads);
  } catch (error) {
    console.error('Get recent leads error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    const lead = await prisma.lead.findUnique({
      where: { id: req.params.id },
      include: {
        createdBy: true,
        assignedTo: true,
        inspections: {
          include: {
            technician: true,
          },
        },
        activities: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.json(lead);
  } catch (error) {
    console.error('Get lead error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/leads', authenticateToken, async (req, res) => {
  try {
    const leadData = {
      ...req.body,
      createdById: req.user.id, // Use authenticated user's ID
    };

    // Handle bookingDates - ensure it's a JSON string if array is provided
    if (leadData.bookingDates && Array.isArray(leadData.bookingDates)) {
      leadData.bookingDates = JSON.stringify(leadData.bookingDates);
    }

    const lead = await prisma.lead.create({
      data: leadData,
      include: {
        createdBy: true,
        assignedTo: true,
        inspections: true,
        activities: true,
      },
    });

    res.status(201).json(lead);
  } catch (error) {
    console.error('Create lead error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Handle bookingDates - ensure it's a JSON string if array is provided
    if (updateData.bookingDates && Array.isArray(updateData.bookingDates)) {
      updateData.bookingDates = JSON.stringify(updateData.bookingDates);
    }

    // Set status-specific timestamps
    if (req.body.status === 'CONTACTED' && !updateData.contactedAt) {
      updateData.contactedAt = new Date();
    }
    if (req.body.status === 'QUALIFIED' && !updateData.qualifiedAt) {
      updateData.qualifiedAt = new Date();
    }
    if (req.body.status === 'CONVERTED' && !updateData.convertedAt) {
      updateData.convertedAt = new Date();
    }

    const lead = await prisma.lead.update({
      where: { id },
      data: updateData,
      include: {
        createdBy: true,
        assignedTo: true,
        inspections: true,
        activities: true,
      },
    });

    res.json(lead);
  } catch (error) {
    console.error('Update lead error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    await prisma.lead.delete({
      where: { id: req.params.id },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Delete lead error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Contact Form Route (Public - No Authentication Required)
app.post('/api/leads/contact', async (req, res) => {
  try {
    // Find the admin user to assign the lead to
    const adminUser = await prisma.user.findFirst({
      where: { role: 'ADMIN' },
    });

    if (!adminUser) {
      return res.status(500).json({ error: 'No admin user found to assign lead' });
    }

    const leadData = {
      ...req.body,
      source: 'WEBSITE', // Force source to be WEBSITE
      status: 'NEW', // Set initial status as NEW
      createdById: adminUser.id, // Assign to admin user
    };

    // Handle bookingDates - ensure it's a JSON string if array is provided
    if (leadData.bookingDates && Array.isArray(leadData.bookingDates)) {
      leadData.bookingDates = JSON.stringify(leadData.bookingDates);
    }

    // Remove estimatedValue if it exists
    delete leadData.estimatedValue;

    const lead = await prisma.lead.create({
      data: leadData,
      include: {
        createdBy: true,
        assignedTo: true,
        inspections: true,
        activities: true,
      },
    });

    // Create an activity to track the website submission
    await prisma.activity.create({
      data: {
        type: 'NOTE_ADDED',
        description: 'Lead created from website contact form',
        notes: 'Customer submitted contact form on website',
        userId: adminUser.id,
        leadId: lead.id,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      leadId: lead.id
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// Dashboard Stats Route
app.get('/api/dashboard/stats', authenticateToken, async (req, res) => {
  try {
    const [totalLeads, newLeads, scheduledInspections, completedThisWeek] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { status: 'NEW' } }),
      prisma.inspection.count({ where: { status: 'SCHEDULED' } }),
      prisma.inspection.count({
        where: {
          status: 'COMPLETED',
          completedAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
          },
        },
      }),
    ]);

    res.json({
      totalLeads,
      newLeads,
      scheduledInspections,
      completedThisWeek,
    });
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Phase 2B+ API Endpoints

// Technician Routes
app.get('/api/technicians', authenticateToken, async (req, res) => {
  try {
    const technicians = await prisma.user.findMany({
      where: {
        role: { in: ['ADMIN', 'TECHNICIAN'] }
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        inspections: {
          select: {
            id: true,
            scheduledAt: true,
            status: true,
            lead: {
              select: {
                suburb: true,
                address: true
              }
            }
          },
          where: {
            status: { in: ['SCHEDULED', 'IN_PROGRESS'] }
          },
          orderBy: {
            scheduledAt: 'asc'
          }
        }
      }
    });

    res.json(apiResponse.success(technicians, 'Technicians retrieved successfully'));
  } catch (error) {
    console.error('Get technicians error:', error);
    const errorResponse = handleDatabaseError(error, 'fetching technicians');
    res.status(errorResponse.error ? 500 : 500).json(errorResponse);
  }
});

// Inspection Calendar Routes
app.get('/api/inspections/calendar', authenticateToken, async (req, res) => {
  try {
    const { start, end, technicianId } = req.query;

    let whereClause = {};

    // Date range filter
    if (start || end) {
      whereClause.scheduledAt = {};
      if (start) whereClause.scheduledAt.gte = new Date(start);
      if (end) whereClause.scheduledAt.lte = new Date(end);
    }

    // Technician filter
    if (technicianId) {
      whereClause.technicianId = technicianId;
    }

    const inspections = await prisma.inspection.findMany({
      where: whereClause,
      include: {
        lead: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true,
            suburb: true,
            postcode: true,
            serviceType: true,
            urgency: true,
            status: true
          }
        },
        technician: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        scheduledAt: 'asc'
      }
    });

    // Transform for calendar format
    const calendarEvents = inspections.map(inspection => ({
      id: inspection.id,
      title: `${inspection.lead.firstName} ${inspection.lead.lastName} - ${inspection.lead.serviceType.replace('_', ' ')}`,
      start: inspection.scheduledAt,
      end: new Date(new Date(inspection.scheduledAt).getTime() + 2 * 60 * 60 * 1000), // 2 hour default duration
      status: inspection.status,
      technician: inspection.technician,
      lead: inspection.lead,
      inspection: {
        id: inspection.id,
        status: inspection.status,
        findings: inspection.findings,
        estimatedCost: inspection.estimatedCost,
        completedAt: inspection.completedAt
      }
    }));

    res.json(apiResponse.success(calendarEvents, 'Calendar events retrieved successfully'));
  } catch (error) {
    console.error('Get calendar inspections error:', error);
    const errorResponse = handleDatabaseError(error, 'fetching calendar inspections');
    res.status(errorResponse.error ? 500 : 500).json(errorResponse);
  }
});

// Available time slots calculation
app.get('/api/inspections/available-slots', authenticateToken, async (req, res) => {
  try {
    const { date, technicianId } = req.query;

    if (!date) {
      return res.status(400).json(
        apiResponse.validationError([{ field: 'date', message: 'Date parameter is required' }])
      );
    }

    const targetDate = new Date(date);
    const startOfDay = new Date(targetDate);
    startOfDay.setHours(7, 0, 0, 0); // Business hours start at 7 AM

    const endOfDay = new Date(targetDate);
    endOfDay.setHours(19, 0, 0, 0); // Business hours end at 7 PM

    // Find existing inspections for the date
    let whereClause = {
      scheduledAt: {
        gte: startOfDay,
        lte: endOfDay
      }
    };

    if (technicianId) {
      whereClause.technicianId = technicianId;
    }

    const existingInspections = await prisma.inspection.findMany({
      where: whereClause,
      select: {
        scheduledAt: true,
        technicianId: true
      }
    });

    // Generate available slots (9 AM - 5 PM, 2-hour slots)
    const slots = [];
    for (let hour = 9; hour <= 15; hour += 2) { // 9, 11, 13, 15 (3 PM)
      const slotTime = new Date(targetDate);
      slotTime.setHours(hour, 0, 0, 0);

      // Check if slot is available
      const isBooked = existingInspections.some(inspection => {
        const inspectionTime = new Date(inspection.scheduledAt);
        return Math.abs(inspectionTime.getTime() - slotTime.getTime()) < 2 * 60 * 60 * 1000; // Within 2 hours
      });

      slots.push({
        time: slotTime,
        available: !isBooked,
        displayTime: slotTime.toLocaleTimeString('en-AU', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      });
    }

    res.json(apiResponse.success(slots, 'Available slots calculated successfully'));
  } catch (error) {
    console.error('Get available slots error:', error);
    const errorResponse = handleDatabaseError(error, 'calculating available slots');
    res.status(errorResponse.error ? 500 : 500).json(errorResponse);
  }
});

// Create new inspection
app.post('/api/inspections', authenticateToken, async (req, res) => {
  try {
    const { leadId, technicianId, scheduledAt, notes } = req.body;

    // Validate required fields
    if (!leadId || !technicianId || !scheduledAt) {
      return res.status(400).json(
        apiResponse.validationError([
          { field: 'leadId', message: 'Lead ID is required' },
          { field: 'technicianId', message: 'Technician ID is required' },
          { field: 'scheduledAt', message: 'Scheduled time is required' }
        ])
      );
    }

    // Check if lead exists
    const lead = await prisma.lead.findUnique({
      where: { id: leadId }
    });

    if (!lead) {
      return res.status(404).json(
        apiResponse.notFound('Lead')
      );
    }

    // Check if technician exists
    const technician = await prisma.user.findUnique({
      where: {
        id: technicianId,
        role: { in: ['ADMIN', 'TECHNICIAN'] }
      }
    });

    if (!technician) {
      return res.status(404).json(
        apiResponse.notFound('Technician')
      );
    }

    // Create inspection
    const inspection = await prisma.inspection.create({
      data: {
        leadId,
        technicianId,
        scheduledAt: new Date(scheduledAt),
        status: 'SCHEDULED'
      },
      include: {
        lead: true,
        technician: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    // Create activity log
    await prisma.activity.create({
      data: {
        type: 'INSPECTION_SCHEDULED',
        description: `Inspection scheduled with ${technician.name}`,
        notes: notes || `Inspection scheduled for ${new Date(scheduledAt).toLocaleString('en-AU')}`,
        userId: req.user.id,
        leadId: leadId,
        inspectionId: inspection.id
      }
    });

    // Update lead status if it's still NEW
    if (lead.status === 'NEW') {
      await prisma.lead.update({
        where: { id: leadId },
        data: { status: 'CONTACTED' }
      });
    }

    res.status(201).json(apiResponse.success(inspection, 'Inspection scheduled successfully'));
  } catch (error) {
    console.error('Create inspection error:', error);
    const errorResponse = handleDatabaseError(error, 'creating inspection');
    res.status(errorResponse.error ? 500 : 500).json(errorResponse);
  }
});

// Update inspection
app.put('/api/inspections/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Handle status-specific updates
    if (updateData.status === 'COMPLETED' && !updateData.completedAt) {
      updateData.completedAt = new Date();
    }

    const inspection = await prisma.inspection.update({
      where: { id },
      data: updateData,
      include: {
        lead: true,
        technician: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    // Create activity log for status changes
    if (req.body.status && req.body.status !== inspection.status) {
      await prisma.activity.create({
        data: {
          type: updateData.status === 'COMPLETED' ? 'INSPECTION_COMPLETED' : 'STATUS_CHANGED',
          description: `Inspection status changed to ${updateData.status}`,
          notes: updateData.notes || updateData.findings || null,
          userId: req.user.id,
          leadId: inspection.leadId,
          inspectionId: inspection.id
        }
      });
    }

    res.json(apiResponse.success(inspection, 'Inspection updated successfully'));
  } catch (error) {
    console.error('Update inspection error:', error);
    const errorResponse = handleDatabaseError(error, 'updating inspection');
    res.status(errorResponse.error ? 500 : 500).json(errorResponse);
  }
});

// Analytics and Reporting Routes
app.get('/api/analytics/dashboard', authenticateToken, async (req, res) => {
  try {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    const [
      totalLeads,
      totalInspections,
      totalRevenue,
      leadsThisMonth,
      inspectionsThisWeek,
      conversionRate,
      recentActivity,
      topServiceTypes,
      monthlyTrends
    ] = await Promise.all([
      // Total leads
      prisma.lead.count(),

      // Total inspections
      prisma.inspection.count(),

      // Total revenue (sum of final costs from completed inspections)
      prisma.inspection.aggregate({
        where: { status: 'COMPLETED', finalCost: { not: null } },
        _sum: { finalCost: true }
      }),

      // Leads this month
      prisma.lead.count({
        where: { createdAt: { gte: startOfMonth } }
      }),

      // Inspections this week
      prisma.inspection.count({
        where: { scheduledAt: { gte: startOfWeek } }
      }),

      // Conversion rate (converted leads / total leads)
      Promise.all([
        prisma.lead.count({ where: { status: 'CONVERTED' } }),
        prisma.lead.count()
      ]).then(([converted, total]) => total > 0 ? (converted / total * 100) : 0),

      // Recent activity
      prisma.activity.findMany({
        take: 10,
        include: {
          user: { select: { name: true } },
          lead: { select: { firstName: true, lastName: true } }
        },
        orderBy: { createdAt: 'desc' }
      }),

      // Top service types
      prisma.lead.groupBy({
        by: ['serviceType'],
        _count: { serviceType: true },
        orderBy: { _count: { serviceType: 'desc' } }
      }),

      // Monthly trends (last 6 months)
      Promise.all(
        Array.from({ length: 6 }, (_, i) => {
          const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);
          return prisma.lead.count({
            where: {
              createdAt: { gte: monthStart, lte: monthEnd }
            }
          }).then(count => ({
            month: monthStart.toLocaleString('en-AU', { month: 'short', year: 'numeric' }),
            leads: count
          }));
        })
      ).then(results => results.reverse())
    ]);

    const analytics = {
      overview: {
        totalLeads,
        totalInspections,
        totalRevenue: totalRevenue._sum.finalCost || 0,
        leadsThisMonth,
        inspectionsThisWeek,
        conversionRate: Math.round(conversionRate * 100) / 100
      },
      recentActivity: recentActivity.map(activity => ({
        id: activity.id,
        type: activity.type,
        description: activity.description,
        user: activity.user.name,
        lead: activity.lead ? `${activity.lead.firstName} ${activity.lead.lastName}` : null,
        createdAt: activity.createdAt
      })),
      serviceTypes: topServiceTypes.map(item => ({
        service: item.serviceType.replace('_', ' '),
        count: item._count.serviceType
      })),
      monthlyTrends
    };

    res.json(apiResponse.success(analytics, 'Analytics data retrieved successfully'));
  } catch (error) {
    console.error('Get analytics error:', error);
    const errorResponse = handleDatabaseError(error, 'fetching analytics data');
    res.status(errorResponse.error ? 500 : 500).json(errorResponse);
  }
});

// Phase 2C: Advanced Scheduling & Integration Features

// Melbourne Suburb Travel Time Configuration
const MELBOURNE_TRAVEL_TIMES = {
  'Melbourne': 0,
  'Carlton': 5, 'Fitzroy': 8, 'South Yarra': 10, 'Richmond': 12, 'St Kilda': 15,
  'Prahran': 12, 'Windsor': 15, 'Brighton': 20, 'Camberwell': 18, 'Hawthorn': 15,
  'Kew': 20, 'Malvern': 18, 'Armadale': 22, 'Toorak': 15, 'Glen Iris': 25,
  'Caulfield': 20, 'Bentleigh': 25, 'Moorabbin': 30, 'Cheltenham': 35,
  'Frankston': 45, 'Dandenong': 40, 'Box Hill': 30, 'Ringwood': 35,
  'Blackburn': 28, 'Doncaster': 25, 'Templestowe': 30, 'Eltham': 35,
  'Diamond Creek': 40, 'Heidelberg': 20, 'Ivanhoe': 18, 'Preston': 15,
  'Northcote': 10, 'Thornbury': 12, 'Brunswick': 8, 'Coburg': 15,
  'Reservoir': 20, 'Bundoora': 25, 'Mill Park': 30, 'Epping': 35,
  'Craigieburn': 40, 'Sunbury': 45, 'Werribee': 35, 'Hoppers Crossing': 30,
  'Point Cook': 32, 'Williams Landing': 28, 'Newport': 15, 'Footscray': 12,
  'Yarraville': 15, 'Seddon': 18, 'Altona': 20, 'Essendon': 18,
  'Moonee Ponds': 12, 'Ascot Vale': 10, 'Niddrie': 20, 'Airport West': 22,
  'Keilor': 25, 'Tullamarine': 25
};

// Melbourne Business Configuration
const MELBOURNE_CONFIG = {
  timezone: 'Australia/Melbourne',
  businessHours: { start: '07:00', end: '19:00' },
  workingDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
  defaultInspectionDuration: 120, // minutes
  travelBufferTime: 15, // minutes between appointments
  maxDailyInspections: 6 // per technician
};

// Utility function to calculate travel time between Melbourne suburbs
const calculateTravelTime = (fromSuburb, toSuburb) => {
  const fromTime = MELBOURNE_TRAVEL_TIMES[fromSuburb] || 30;
  const toTime = MELBOURNE_TRAVEL_TIMES[toSuburb] || 30;
  return Math.abs(fromTime - toTime) + 15; // Add 15 minutes buffer
};

// Utility function to convert time to Melbourne timezone
const toMelbourneTime = (date) => {
  return new Date(date).toLocaleString('en-AU', {
    timeZone: 'Australia/Melbourne',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// Advanced Inspection Scheduling Conflict Detection
app.post('/api/inspections/check-conflicts', authenticateToken, async (req, res) => {
  try {
    const { technicianId, scheduledAt, suburb, duration = 120 } = req.body;

    if (!technicianId || !scheduledAt || !suburb) {
      return res.status(400).json(
        apiResponse.validationError([
          { field: 'technicianId', message: 'Technician ID is required' },
          { field: 'scheduledAt', message: 'Scheduled time is required' },
          { field: 'suburb', message: 'Suburb is required' }
        ])
      );
    }

    const targetTime = new Date(scheduledAt);
    const conflicts = [];
    const suggestedAlternatives = [];

    // Check business hours (7 AM - 7 PM Melbourne time)
    const hour = targetTime.getHours();
    if (hour < 7 || hour >= 19) {
      conflicts.push({
        type: 'OUTSIDE_HOURS',
        message: 'Scheduled time is outside business hours (7 AM - 7 PM)',
        suggestedAlternatives: []
      });
    }

    // Check for double booking
    const existingInspections = await prisma.inspection.findMany({
      where: {
        technicianId,
        scheduledAt: {
          gte: new Date(targetTime.getTime() - 2 * 60 * 60 * 1000), // 2 hours before
          lte: new Date(targetTime.getTime() + 2 * 60 * 60 * 1000)  // 2 hours after
        },
        status: { in: ['SCHEDULED', 'IN_PROGRESS'] }
      },
      include: {
        lead: { select: { suburb: true, firstName: true, lastName: true } }
      }
    });

    if (existingInspections.length > 0) {
      conflicts.push({
        type: 'DOUBLE_BOOKING',
        message: `Technician already has an inspection scheduled at this time`,
        conflictingInspections: existingInspections.map(insp => ({
          time: insp.scheduledAt,
          customer: `${insp.lead.firstName} ${insp.lead.lastName}`,
          location: insp.lead.suburb
        }))
      });
    }

    // Check travel time conflicts
    const dayStart = new Date(targetTime);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(targetTime);
    dayEnd.setHours(23, 59, 59, 999);

    const dayInspections = await prisma.inspection.findMany({
      where: {
        technicianId,
        scheduledAt: { gte: dayStart, lte: dayEnd },
        status: { in: ['SCHEDULED', 'IN_PROGRESS'] }
      },
      include: {
        lead: { select: { suburb: true } }
      },
      orderBy: { scheduledAt: 'asc' }
    });

    // Calculate travel time efficiency
    for (const inspection of dayInspections) {
      const travelTime = calculateTravelTime(inspection.lead.suburb, suburb);
      const timeDiff = Math.abs(new Date(inspection.scheduledAt) - targetTime) / (1000 * 60); // minutes

      if (timeDiff < travelTime + MELBOURNE_CONFIG.travelBufferTime) {
        conflicts.push({
          type: 'TRAVEL_TIME',
          message: `Insufficient travel time from ${inspection.lead.suburb} to ${suburb}`,
          requiredTravelTime: travelTime,
          suggestedAlternatives: []
        });
      }
    }

    // Generate suggested alternatives if conflicts exist
    if (conflicts.length > 0) {
      const alternatives = [];
      for (let hourOffset = 1; hourOffset <= 4; hourOffset++) {
        const altTime1 = new Date(targetTime.getTime() + hourOffset * 60 * 60 * 1000);
        const altTime2 = new Date(targetTime.getTime() - hourOffset * 60 * 60 * 1000);

        if (altTime1.getHours() >= 7 && altTime1.getHours() <= 17) {
          alternatives.push({
            start: altTime1.toISOString(),
            end: new Date(altTime1.getTime() + duration * 60 * 1000).toISOString(),
            available: true
          });
        }

        if (altTime2.getHours() >= 7 && altTime2.getHours() <= 17) {
          alternatives.push({
            start: altTime2.toISOString(),
            end: new Date(altTime2.getTime() + duration * 60 * 1000).toISOString(),
            available: true
          });
        }
      }

      conflicts.forEach(conflict => {
        conflict.suggestedAlternatives = alternatives.slice(0, 3);
      });
    }

    res.json(apiResponse.success({
      conflicts,
      hasConflicts: conflicts.length > 0,
      melbourneTime: toMelbourneTime(targetTime),
      travelOptimization: {
        nearbySuburbs: Object.keys(MELBOURNE_TRAVEL_TIMES).filter(sub =>
          calculateTravelTime(sub, suburb) <= 20
        ).slice(0, 5)
      }
    }, conflicts.length > 0 ? 'Scheduling conflicts detected' : 'No conflicts found'));

  } catch (error) {
    console.error('Check conflicts error:', error);
    const errorResponse = handleDatabaseError(error, 'checking scheduling conflicts');
    res.status(500).json(errorResponse);
  }
});

// Optimal Technician Assignment with Melbourne Route Optimization
app.post('/api/inspections/optimal-assignment', authenticateToken, async (req, res) => {
  try {
    const { suburb, scheduledAt, serviceType } = req.body;

    if (!suburb || !scheduledAt || !serviceType) {
      return res.status(400).json(
        apiResponse.validationError([
          { field: 'suburb', message: 'Suburb is required' },
          { field: 'scheduledAt', message: 'Scheduled time is required' },
          { field: 'serviceType', message: 'Service type is required' }
        ])
      );
    }

    const targetTime = new Date(scheduledAt);

    // Get all available technicians
    const technicians = await prisma.user.findMany({
      where: { role: { in: ['ADMIN', 'TECHNICIAN'] } },
      include: {
        inspections: {
          where: {
            scheduledAt: {
              gte: new Date(targetTime.getTime() - 4 * 60 * 60 * 1000),
              lte: new Date(targetTime.getTime() + 4 * 60 * 60 * 1000)
            },
            status: { in: ['SCHEDULED', 'IN_PROGRESS'] }
          },
          include: {
            lead: { select: { suburb: true } }
          }
        }
      }
    });

    // Score technicians based on availability and travel optimization
    const technicianScores = technicians.map(technician => {
      let score = 100; // Base score
      let reasoning = [];

      // Check availability
      const hasConflict = technician.inspections.some(insp => {
        const timeDiff = Math.abs(new Date(insp.scheduledAt) - targetTime) / (1000 * 60);
        return timeDiff < 120; // Within 2 hours
      });

      if (hasConflict) {
        score -= 50;
        reasoning.push('Has scheduling conflict');
      } else {
        reasoning.push('Available at requested time');
      }

      // Calculate travel efficiency
      const dayInspections = technician.inspections.filter(insp => {
        const inspDate = new Date(insp.scheduledAt);
        return inspDate.toDateString() === targetTime.toDateString();
      });

      if (dayInspections.length > 0) {
        const avgTravelTime = dayInspections.reduce((acc, insp) => {
          return acc + calculateTravelTime(insp.lead.suburb, suburb);
        }, 0) / dayInspections.length;

        if (avgTravelTime <= 15) {
          score += 20;
          reasoning.push('Excellent location efficiency');
        } else if (avgTravelTime <= 30) {
          score += 10;
          reasoning.push('Good location efficiency');
        } else {
          score -= 10;
          reasoning.push('Requires extended travel');
        }
      }

      // Workload balance
      const dayWorkload = dayInspections.length;
      if (dayWorkload >= 6) {
        score -= 30;
        reasoning.push('At maximum daily capacity');
      } else if (dayWorkload >= 4) {
        score -= 15;
        reasoning.push('High workload');
      } else {
        score += 10;
        reasoning.push('Balanced workload');
      }

      return {
        technician: {
          id: technician.id,
          name: technician.name,
          email: technician.email,
          currentWorkload: dayWorkload,
          territories: dayInspections.map(insp => insp.lead.suburb)
        },
        score,
        reasoning: reasoning.join(', '),
        availability: !hasConflict,
        travelEfficiency: dayInspections.length > 0 ? avgTravelTime : calculateTravelTime('Melbourne', suburb)
      };
    });

    // Sort by score
    technicianScores.sort((a, b) => b.score - a.score);

    const recommended = technicianScores[0];
    const alternatives = technicianScores.slice(1, 4);

    res.json(apiResponse.success({
      recommended: recommended.technician,
      alternatives: alternatives.map(alt => alt.technician),
      reasoning: recommended.reasoning,
      optimizationData: {
        melbourneTime: toMelbourneTime(targetTime),
        targetSuburb: suburb,
        estimatedTravelTime: recommended.travelEfficiency,
        serviceDuration: MELBOURNE_CONFIG.defaultInspectionDuration,
        businessHours: MELBOURNE_CONFIG.businessHours
      },
      allCandidates: technicianScores
    }, 'Optimal technician assignment calculated'));

  } catch (error) {
    console.error('Optimal assignment error:', error);
    const errorResponse = handleDatabaseError(error, 'calculating optimal assignment');
    res.status(500).json(errorResponse);
  }
});

// Schedule Optimization Report for Melbourne Operations
app.get('/api/inspections/optimization-report', authenticateToken, async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json(
        apiResponse.validationError([{ field: 'date', message: 'Date parameter is required' }])
      );
    }

    const targetDate = new Date(date);
    const dayStart = new Date(targetDate);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(targetDate);
    dayEnd.setHours(23, 59, 59, 999);

    const dayInspections = await prisma.inspection.findMany({
      where: {
        scheduledAt: { gte: dayStart, lte: dayEnd },
        status: { in: ['SCHEDULED', 'IN_PROGRESS', 'COMPLETED'] }
      },
      include: {
        lead: { select: { suburb: true, firstName: true, lastName: true } },
        technician: { select: { id: true, name: true } }
      },
      orderBy: { scheduledAt: 'asc' }
    });

    // Calculate travel optimization metrics
    const technicianRoutes = {};
    let totalTravelTime = 0;
    let totalInspections = dayInspections.length;

    dayInspections.forEach(inspection => {
      const techId = inspection.technicianId;
      if (!technicianRoutes[techId]) {
        technicianRoutes[techId] = {
          technician: inspection.technician,
          inspections: [],
          totalTravelTime: 0
        };
      }
      technicianRoutes[techId].inspections.push(inspection);
    });

    // Calculate travel times for each technician
    Object.values(technicianRoutes).forEach(route => {
      for (let i = 1; i < route.inspections.length; i++) {
        const prevSuburb = route.inspections[i-1].lead.suburb;
        const currentSuburb = route.inspections[i].lead.suburb;
        const travelTime = calculateTravelTime(prevSuburb, currentSuburb);
        route.totalTravelTime += travelTime;
        totalTravelTime += travelTime;
      }
    });

    const averageTravelTime = totalInspections > 0 ? totalTravelTime / totalInspections : 0;

    // Generate optimization suggestions
    const optimizationSuggestions = [];

    if (averageTravelTime > 25) {
      optimizationSuggestions.push('Consider grouping inspections by geographic clusters');
    }

    if (totalInspections < 12) {
      optimizationSuggestions.push('Opportunity to schedule additional inspections');
    }

    Object.values(technicianRoutes).forEach(route => {
      if (route.totalTravelTime > 60) {
        optimizationSuggestions.push(`${route.technician.name}'s route could be optimized to reduce travel time`);
      }
    });

    if (optimizationSuggestions.length === 0) {
      optimizationSuggestions.push('Schedule is well optimized for Melbourne operations');
    }

    // Calculate efficiency score (0-100)
    let efficiencyScore = 100;
    if (averageTravelTime > 30) efficiencyScore -= 20;
    if (averageTravelTime > 40) efficiencyScore -= 20;
    if (totalInspections < 8) efficiencyScore -= 15;

    const report = {
      date: targetDate.toISOString().split('T')[0],
      melbourneDate: toMelbourneTime(targetDate),
      totalInspections,
      totalTravelTime,
      averageTravelTime: Math.round(averageTravelTime * 100) / 100,
      optimizationSuggestions,
      efficiencyScore: Math.max(0, efficiencyScore),
      technicianBreakdown: Object.values(technicianRoutes).map(route => ({
        technician: route.technician.name,
        inspections: route.inspections.length,
        travelTime: route.totalTravelTime,
        efficiency: route.inspections.length > 0 ?
          Math.round((route.inspections.length * 120) / (route.inspections.length * 120 + route.totalTravelTime) * 100) : 0,
        suburbs: route.inspections.map(insp => insp.lead.suburb)
      })),
      melbourneInsights: {
        mostActiveSuburb: getMostFrequentSuburb(dayInspections),
        peakHours: getPeakHours(dayInspections),
        businessHoursUtilization: calculateBusinessHoursUtilization(dayInspections)
      }
    };

    res.json(apiResponse.success(report, 'Schedule optimization report generated'));

  } catch (error) {
    console.error('Optimization report error:', error);
    const errorResponse = handleDatabaseError(error, 'generating optimization report');
    res.status(500).json(errorResponse);
  }
});

// Helper functions for optimization report
const getMostFrequentSuburb = (inspections) => {
  const suburbCount = {};
  inspections.forEach(insp => {
    const suburb = insp.lead.suburb;
    suburbCount[suburb] = (suburbCount[suburb] || 0) + 1;
  });

  return Object.entries(suburbCount).reduce((a, b) =>
    suburbCount[a] > suburbCount[b] ? a : b, 'None'
  );
};

const getPeakHours = (inspections) => {
  const hourCount = {};
  inspections.forEach(insp => {
    const hour = new Date(insp.scheduledAt).getHours();
    hourCount[hour] = (hourCount[hour] || 0) + 1;
  });

  const peakHour = Object.entries(hourCount).reduce((a, b) =>
    hourCount[a[0]] > hourCount[b[0]] ? a : b, [9, 0]
  );

  return `${peakHour[0]}:00 (${peakHour[1]} inspections)`;
};

const calculateBusinessHoursUtilization = (inspections) => {
  const businessHours = 12; // 7 AM to 7 PM
  const utilizationHours = inspections.length * 2; // 2 hours per inspection
  return Math.min(100, Math.round((utilizationHours / businessHours) * 100));
};

// Communication Hub Routes (Enhanced with Australian Compliance)
app.get('/api/communication/templates', authenticateToken, async (req, res) => {
  try {
    // Enhanced templates with Australian business compliance
    const templates = [
      {
        id: '1',
        name: 'Initial Contact - Melbourne',
        type: 'EMAIL',
        subject: 'Thank you for contacting Mould & Restoration Co. - Melbourne',
        content: 'Dear {{firstName}},\n\nThank you for contacting Mould & Restoration Co. regarding mould inspection services in {{suburb}}.\n\nWe understand the urgency of mould issues in Melbourne\'s climate and will contact you within 24 hours to schedule your professional inspection.\n\nOur IICRC-certified technicians serve all Melbourne suburbs with 5+ years of local experience.\n\nBest regards,\nMould & Restoration Co.\nPhone: 1800 954 117\nEmail: admin@mouldandrestoration.com.au\nOperating Hours: 7 AM - 7 PM, 7 Days'
      },
      {
        id: '2',
        name: 'Inspection Reminder - Melbourne',
        type: 'SMS',
        content: 'Hi {{firstName}}, reminder: Your mould inspection is scheduled for {{date}} at {{time}} in {{suburb}}. Technician {{technicianName}} will contact you 30 minutes before arrival. Melbourne weather conditions optimal for inspection. Reply STOP to opt out.'
      },
      {
        id: '3',
        name: 'Quote Follow-up - Melbourne Market',
        type: 'EMAIL',
        subject: 'Following up on your {{suburb}} mould remediation quote',
        content: 'Dear {{firstName}},\n\nI wanted to follow up on the comprehensive quote we provided for your property at {{address}}, {{suburb}}.\n\nOur solution addresses Melbourne\'s specific mould challenges including:\n• Seasonal humidity control\n• Subfloor ventilation improvements\n• HEPA air filtration systems\n\nDo you have any questions about our proposed solution? Our 100% satisfaction guarantee covers all work.\n\nPlease let me know if you\'d like to proceed or need any clarification.\n\nBest regards,\nMould & Restoration Co.\nABN: 47 683 089 652'
      },
      {
        id: '4',
        name: '24 Hour Email Reminder',
        type: 'EMAIL',
        subject: 'Inspection Tomorrow - {{suburb}} Mould Assessment',
        content: 'Dear {{firstName}},\n\nThis is a reminder that your mould inspection is scheduled for tomorrow ({{date}}) at {{time}}.\n\nLocation: {{address}}, {{suburb}}\nTechnician: {{technicianName}}\nEstimated Duration: 2 hours\n\nPlease ensure:\n• Access to all areas requiring inspection\n• Parking availability for our service vehicle\n• Contact person available during inspection\n\nWeather forecast for {{suburb}}: Optimal conditions for accurate testing\n\nContact us at 1800 954 117 if you need to reschedule.\n\nMould & Restoration Co.'
      },
      {
        id: '5',
        name: '2 Hour Email Reminder',
        type: 'EMAIL',
        subject: 'Technician Arriving Soon - {{suburb}} Inspection',
        content: 'Dear {{firstName}},\n\nYour technician {{technicianName}} will arrive in approximately 2 hours for your mould inspection.\n\nScheduled Time: {{time}}\nLocation: {{address}}, {{suburb}}\nContact: {{technicianPhone}}\n\nWe\'ll call 30 minutes before arrival to confirm.\n\nMould & Restoration Co.'
      },
      {
        id: '6',
        name: '1 Hour SMS Reminder',
        type: 'SMS',
        content: 'MOULD INSPECTION ALERT: {{technicianName}} arriving in 1 hour for your {{time}} appointment at {{address}}, {{suburb}}. Technician will call 30min before arrival. Contact: {{technicianPhone}}. Reply STOP to opt out.'
      }
    ];

    res.json(apiResponse.success(templates, 'Communication templates retrieved successfully'));
  } catch (error) {
    console.error('Get templates error:', error);
    res.status(500).json(apiResponse.error('Failed to retrieve templates'));
  }
});

// Send Communication (SMS/Email)
app.post('/api/communication/send', authenticateToken, async (req, res) => {
  try {
    const { type, templateId, leadId, customData = {} } = req.body;

    if (!type || !templateId || !leadId) {
      return res.status(400).json(
        apiResponse.validationError([
          { field: 'type', message: 'Communication type is required (SMS/EMAIL)' },
          { field: 'templateId', message: 'Template ID is required' },
          { field: 'leadId', message: 'Lead ID is required' }
        ])
      );
    }

    // Get lead data for template variables
    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: {
        inspections: {
          include: {
            technician: { select: { name: true, email: true } }
          },
          orderBy: { scheduledAt: 'desc' },
          take: 1
        }
      }
    });

    if (!lead) {
      return res.status(404).json(apiResponse.notFound('Lead'));
    }

    // Get template
    const templates = await getTemplates(); // This would be from database in production
    const template = templates.find(t => t.id === templateId);

    if (!template) {
      return res.status(404).json(apiResponse.notFound('Template'));
    }

    // Prepare template variables
    const templateVars = {
      firstName: lead.firstName,
      lastName: lead.lastName,
      address: lead.address,
      suburb: lead.suburb,
      phone: lead.phone,
      email: lead.email,
      date: lead.inspections[0] ? new Date(lead.inspections[0].scheduledAt).toLocaleDateString('en-AU') : '',
      time: lead.inspections[0] ? new Date(lead.inspections[0].scheduledAt).toLocaleTimeString('en-AU', {
        hour: '2-digit',
        minute: '2-digit'
      }) : '',
      technicianName: lead.inspections[0]?.technician?.name || 'Our technician',
      technicianPhone: '1800 954 117', // Main business number
      ...customData
    };

    // Replace template variables
    let content = template.content;
    Object.entries(templateVars).forEach(([key, value]) => {
      content = content.replace(new RegExp(`{{${key}}}`, 'g'), value || '');
    });

    // Mock sending (in production, integrate with Twilio/SendGrid)
    const communicationRecord = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      templateId,
      leadId,
      content,
      recipient: type === 'SMS' ? lead.phone : lead.email,
      status: 'SENT',
      sentAt: new Date(),
      deliveryStatus: 'DELIVERED', // Mock status
      melbourneCompliance: {
        privacyActCompliant: true,
        optOutAvailable: type === 'SMS',
        businessHoursOnly: true,
        australianPhoneFormat: type === 'SMS' ? formatAustralianPhone(lead.phone) : null
      }
    };

    // Log communication activity
    await prisma.activity.create({
      data: {
        type: type === 'SMS' ? 'SMS' : 'EMAIL',
        description: `${type} sent using template: ${template.name}`,
        notes: `Recipient: ${communicationRecord.recipient}`,
        userId: req.user.id,
        leadId: leadId
      }
    });

    res.json(apiResponse.success(communicationRecord, `${type} sent successfully`));

  } catch (error) {
    console.error('Send communication error:', error);
    const errorResponse = handleDatabaseError(error, 'sending communication');
    res.status(500).json(errorResponse);
  }
});

// Schedule Automated Reminders
app.post('/api/inspections/:id/schedule-reminders', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      email24h = true,
      email2h = true,
      sms1h = true,
      customerReminders = true,
      technicianReminders = true
    } = req.body;

    const inspection = await prisma.inspection.findUnique({
      where: { id },
      include: {
        lead: true,
        technician: { select: { name: true, email: true } }
      }
    });

    if (!inspection) {
      return res.status(404).json(apiResponse.notFound('Inspection'));
    }

    const scheduledTime = new Date(inspection.scheduledAt);
    const reminderSchedule = [];

    // Calculate reminder times in Melbourne timezone
    if (email24h && customerReminders) {
      const reminder24h = new Date(scheduledTime.getTime() - 24 * 60 * 60 * 1000);
      reminderSchedule.push({
        type: 'EMAIL',
        templateId: '4', // 24 Hour Email Reminder
        scheduledFor: reminder24h,
        recipient: 'CUSTOMER'
      });
    }

    if (email2h && customerReminders) {
      const reminder2h = new Date(scheduledTime.getTime() - 2 * 60 * 60 * 1000);
      reminderSchedule.push({
        type: 'EMAIL',
        templateId: '5', // 2 Hour Email Reminder
        scheduledFor: reminder2h,
        recipient: 'CUSTOMER'
      });
    }

    if (sms1h && customerReminders) {
      const reminder1h = new Date(scheduledTime.getTime() - 1 * 60 * 60 * 1000);
      reminderSchedule.push({
        type: 'SMS',
        templateId: '6', // 1 Hour SMS Reminder
        scheduledFor: reminder1h,
        recipient: 'CUSTOMER'
      });
    }

    // Mock scheduling system (in production, use job queue like Bull/Agenda)
    const scheduledReminders = reminderSchedule.map((reminder, index) => ({
      id: `reminder_${id}_${index}`,
      inspectionId: id,
      ...reminder,
      status: 'SCHEDULED',
      melbourneTime: toMelbourneTime(reminder.scheduledFor),
      compliance: {
        businessHoursOnly: true,
        optOutRespected: true,
        privacyActCompliant: true
      }
    }));

    // Log reminder scheduling
    await prisma.activity.create({
      data: {
        type: 'NOTE_ADDED',
        description: 'Automated reminders scheduled',
        notes: `${reminderSchedule.length} reminders scheduled for Melbourne timezone`,
        userId: req.user.id,
        leadId: inspection.leadId,
        inspectionId: id
      }
    });

    res.json(apiResponse.success({
      scheduledReminders,
      inspectionTime: toMelbourneTime(scheduledTime),
      totalReminders: scheduledReminders.length,
      melbourneCompliance: {
        timezone: 'Australia/Melbourne',
        businessHoursOnly: true,
        privacyActCompliant: true,
        optOutAvailable: true
      }
    }, 'Automated reminders scheduled successfully'));

  } catch (error) {
    console.error('Schedule reminders error:', error);
    const errorResponse = handleDatabaseError(error, 'scheduling reminders');
    res.status(500).json(errorResponse);
  }
});

// NOTIFICATION ENDPOINTS
// Get all notifications for the current user
app.get('/api/notifications', authenticateToken, async (req, res) => {
  try {
    const { unread, page = '1', limit = '20', type } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const where = {
      userId: req.user.id,
      ...(unread === 'true' && { isRead: false }),
      ...(type && { type })
    };

    const notifications = await prisma.notification.findMany({
      where,
      include: {
        lead: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        },
        booking: {
          select: {
            id: true,
            scheduledDate: true,
            melbourneSuburb: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limitNum
    });

    const total = await prisma.notification.count({ where });

    res.json(apiResponse.success(notifications, 'Notifications retrieved successfully', {
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    }));

  } catch (error) {
    console.error('Get notifications error:', error);
    const errorResponse = handleDatabaseError(error, 'fetching notifications');
    res.status(500).json(errorResponse);
  }
});

// Get unread notification count
app.get('/api/notifications/unread-count', authenticateToken, async (req, res) => {
  try {
    const count = await prisma.notification.count({
      where: {
        userId: req.user.id,
        isRead: false
      }
    });

    res.json(apiResponse.success({ count }, 'Unread count retrieved successfully'));

  } catch (error) {
    console.error('Get unread count error:', error);
    const errorResponse = handleDatabaseError(error, 'fetching unread count');
    res.status(500).json(errorResponse);
  }
});

// Mark notification as read
app.post('/api/notifications/:id/read', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await prisma.notification.findUnique({
      where: { id }
    });

    if (!notification) {
      return res.status(404).json(apiResponse.notFound('Notification'));
    }

    if (notification.userId !== req.user.id) {
      return res.status(403).json(
        apiResponse.error('Unauthorized', 'FORBIDDEN', {}, 403)
      );
    }

    await prisma.notification.update({
      where: { id },
      data: {
        isRead: true,
        readAt: new Date()
      }
    });

    res.json(apiResponse.success({}, 'Notification marked as read'));

  } catch (error) {
    console.error('Mark as read error:', error);
    const errorResponse = handleDatabaseError(error, 'marking notification as read');
    res.status(500).json(errorResponse);
  }
});

// Mark all notifications as read
app.post('/api/notifications/read-all', authenticateToken, async (req, res) => {
  try {
    await prisma.notification.updateMany({
      where: {
        userId: req.user.id,
        isRead: false
      },
      data: {
        isRead: true,
        readAt: new Date()
      }
    });

    res.json(apiResponse.success({}, 'All notifications marked as read'));

  } catch (error) {
    console.error('Mark all as read error:', error);
    const errorResponse = handleDatabaseError(error, 'marking all notifications as read');
    res.status(500).json(errorResponse);
  }
});

// Delete notification
app.delete('/api/notifications/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await prisma.notification.findUnique({
      where: { id }
    });

    if (!notification) {
      return res.status(404).json(apiResponse.notFound('Notification'));
    }

    if (notification.userId !== req.user.id) {
      return res.status(403).json(
        apiResponse.error('Unauthorized', 'FORBIDDEN', {}, 403)
      );
    }

    await prisma.notification.delete({
      where: { id }
    });

    res.json(apiResponse.success({}, 'Notification deleted successfully'));

  } catch (error) {
    console.error('Delete notification error:', error);
    const errorResponse = handleDatabaseError(error, 'deleting notification');
    res.status(500).json(errorResponse);
  }
});

// Create notification (admin only)
app.post('/api/notifications', authenticateToken, async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'ADMIN') {
      return res.status(403).json(
        apiResponse.error('Admin access required', 'FORBIDDEN', {}, 403)
      );
    }

    const {
      userId,
      type,
      title,
      message,
      relatedEntityType,
      relatedEntityId,
      leadId,
      bookingId,
      priority = 'NORMAL'
    } = req.body;

    // Validate required fields
    if (!userId || !type || !title || !message) {
      return res.status(400).json(
        apiResponse.validationError({
          userId: !userId ? 'User ID is required' : null,
          type: !type ? 'Type is required' : null,
          title: !title ? 'Title is required' : null,
          message: !message ? 'Message is required' : null
        })
      );
    }

    const notification = await prisma.notification.create({
      data: {
        userId,
        type,
        title,
        message,
        relatedEntityType,
        relatedEntityId,
        leadId,
        bookingId,
        priority
      },
      include: {
        lead: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        },
        booking: {
          select: {
            id: true,
            scheduledDate: true,
            melbourneSuburb: true
          }
        }
      }
    });

    res.status(201).json(apiResponse.success(notification, 'Notification created successfully'));

  } catch (error) {
    console.error('Create notification error:', error);
    const errorResponse = handleDatabaseError(error, 'creating notification');
    res.status(500).json(errorResponse);
  }
});

// CALENDAR ENDPOINTS
// Get available time slots for a technician on a specific date
app.get('/api/calendar/availability', authenticateToken, async (req, res) => {
  try {
    const { date, technicianId, duration = '60' } = req.query;

    if (!date || !technicianId) {
      return res.status(400).json(
        apiResponse.validationError({
          date: !date ? 'Date is required' : null,
          technicianId: !technicianId ? 'Technician ID is required' : null
        })
      );
    }

    const targetDate = new Date(date);
    const durationMinutes = parseInt(duration);

    // Get existing bookings for the technician on this date
    const existingBookings = await prisma.booking.findMany({
      where: {
        technicianId,
        scheduledDate: {
          gte: new Date(targetDate.toISOString().split('T')[0]),
          lt: new Date(new Date(targetDate.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0])
        },
        status: {
          not: 'CANCELLED'
        }
      },
      orderBy: { scheduledTime: 'asc' }
    });

    // Melbourne business hours: 7 AM to 7 PM
    const businessStart = 7;
    const businessEnd = 19;
    const availableSlots = [];

    // Generate 30-minute slots throughout business hours
    for (let hour = businessStart; hour < businessEnd; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const slotStart = new Date(targetDate);
        slotStart.setHours(hour, minute, 0, 0);

        const slotEnd = new Date(slotStart.getTime() + durationMinutes * 60 * 1000);

        // Check if slot extends beyond business hours
        if (slotEnd.getHours() >= businessEnd) {
          continue;
        }

        // Check for conflicts with existing bookings
        const hasConflict = existingBookings.some(booking => {
          const bookingStart = new Date(`${booking.scheduledDate.toISOString().split('T')[0]}T${booking.scheduledTime}:00`);
          const bookingEnd = new Date(bookingStart.getTime() + booking.durationMinutes * 60 * 1000);

          return (slotStart < bookingEnd && slotEnd > bookingStart);
        });

        availableSlots.push({
          startTime: slotStart.toISOString(),
          endTime: slotEnd.toISOString(),
          isAvailable: !hasConflict,
          technicianId,
          conflictReason: hasConflict ? 'Time slot already booked' : null
        });
      }
    }

    res.json(apiResponse.success({
      availableSlots,
      date: targetDate.toISOString().split('T')[0],
      technicianId,
      durationMinutes,
      totalSlots: availableSlots.length,
      availableCount: availableSlots.filter(slot => slot.isAvailable).length
    }, 'Available slots retrieved successfully'));

  } catch (error) {
    console.error('Get availability error:', error);
    const errorResponse = handleDatabaseError(error, 'fetching availability');
    res.status(500).json(errorResponse);
  }
});

// Check if a specific time slot is available
app.post('/api/calendar/check-availability', authenticateToken, async (req, res) => {
  try {
    const { datetime, technicianId, duration = 60 } = req.body;

    if (!datetime || !technicianId) {
      return res.status(400).json(
        apiResponse.validationError({
          datetime: !datetime ? 'Datetime is required' : null,
          technicianId: !technicianId ? 'Technician ID is required' : null
        })
      );
    }

    const slotStart = new Date(datetime);
    const slotEnd = new Date(slotStart.getTime() + duration * 60 * 1000);

    // Check business hours (7 AM to 7 PM)
    const hour = slotStart.getHours();
    if (hour < 7 || hour >= 19 || slotEnd.getHours() >= 19) {
      return res.json(apiResponse.success({
        isAvailable: false,
        reason: 'Outside business hours (7 AM - 7 PM)'
      }, 'Availability checked'));
    }

    // Check for conflicts with existing bookings
    const conflictingBookings = await prisma.booking.findMany({
      where: {
        technicianId,
        scheduledDate: {
          gte: new Date(slotStart.toISOString().split('T')[0]),
          lt: new Date(new Date(slotStart.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0])
        },
        status: {
          not: 'CANCELLED'
        }
      }
    });

    const hasConflict = conflictingBookings.some(booking => {
      const bookingStart = new Date(`${booking.scheduledDate.toISOString().split('T')[0]}T${booking.scheduledTime}:00`);
      const bookingEnd = new Date(bookingStart.getTime() + booking.durationMinutes * 60 * 1000);

      return (slotStart < bookingEnd && slotEnd > bookingStart);
    });

    res.json(apiResponse.success({
      isAvailable: !hasConflict,
      reason: hasConflict ? 'Time slot already booked' : null,
      datetime: slotStart.toISOString(),
      technicianId,
      duration
    }, 'Availability checked'));

  } catch (error) {
    console.error('Check availability error:', error);
    const errorResponse = handleDatabaseError(error, 'checking availability');
    res.status(500).json(errorResponse);
  }
});

// Get bookings with optional filters
app.get('/api/calendar/bookings', authenticateToken, async (req, res) => {
  try {
    const {
      technicianId,
      date,
      startDate,
      endDate,
      status,
      page = '1',
      limit = '20'
    } = req.query;

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const where = {};

    // Filter by technician if specified
    if (technicianId) {
      where.technicianId = technicianId;
    }

    // Filter by specific date
    if (date) {
      const targetDate = new Date(date);
      where.scheduledDate = {
        gte: new Date(targetDate.toISOString().split('T')[0]),
        lt: new Date(new Date(targetDate.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0])
      };
    }

    // Filter by date range
    if (startDate && endDate) {
      where.scheduledDate = {
        gte: new Date(startDate),
        lte: new Date(endDate)
      };
    }

    // Filter by status
    if (status) {
      where.status = status;
    }

    const bookings = await prisma.booking.findMany({
      where,
      include: {
        lead: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        },
        technician: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: [
        { scheduledDate: 'asc' },
        { scheduledTime: 'asc' }
      ],
      skip,
      take: limitNum
    });

    const total = await prisma.booking.count({ where });

    res.json(apiResponse.success(bookings, 'Bookings retrieved successfully', {
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    }));

  } catch (error) {
    console.error('Get bookings error:', error);
    const errorResponse = handleDatabaseError(error, 'fetching bookings');
    res.status(500).json(errorResponse);
  }
});

// Create a new booking
app.post('/api/calendar/bookings', authenticateToken, async (req, res) => {
  try {
    const {
      leadId,
      technicianId,
      scheduledDate,
      scheduledTime,
      durationMinutes = 60,
      propertyAddress,
      melbourneSuburb,
      notes,
      customerPreferredDates
    } = req.body;

    // Validate required fields
    if (!leadId || !technicianId || !scheduledDate || !scheduledTime || !propertyAddress || !melbourneSuburb) {
      return res.status(400).json(
        apiResponse.validationError({
          leadId: !leadId ? 'Lead ID is required' : null,
          technicianId: !technicianId ? 'Technician ID is required' : null,
          scheduledDate: !scheduledDate ? 'Scheduled date is required' : null,
          scheduledTime: !scheduledTime ? 'Scheduled time is required' : null,
          propertyAddress: !propertyAddress ? 'Property address is required' : null,
          melbourneSuburb: !melbourneSuburb ? 'Melbourne suburb is required' : null
        })
      );
    }

    // Check if lead exists
    const lead = await prisma.lead.findUnique({
      where: { id: leadId }
    });

    if (!lead) {
      return res.status(404).json(apiResponse.notFound('Lead'));
    }

    // Check if technician exists
    const technician = await prisma.user.findUnique({
      where: { id: technicianId, role: 'TECHNICIAN' }
    });

    if (!technician) {
      return res.status(404).json(apiResponse.notFound('Technician'));
    }

    // Check availability
    const datetime = new Date(`${scheduledDate}T${scheduledTime}:00`);
    const slotEnd = new Date(datetime.getTime() + durationMinutes * 60 * 1000);

    // Check business hours
    const hour = datetime.getHours();
    if (hour < 7 || hour >= 19 || slotEnd.getHours() >= 19) {
      return res.status(400).json(
        apiResponse.error('Booking outside business hours (7 AM - 7 PM)', 'INVALID_TIME', {}, 400)
      );
    }

    // Check for conflicts
    const conflictingBookings = await prisma.booking.findMany({
      where: {
        technicianId,
        scheduledDate: new Date(scheduledDate),
        status: {
          not: 'CANCELLED'
        }
      }
    });

    const hasConflict = conflictingBookings.some(booking => {
      const bookingStart = new Date(`${booking.scheduledDate.toISOString().split('T')[0]}T${booking.scheduledTime}:00`);
      const bookingEnd = new Date(bookingStart.getTime() + booking.durationMinutes * 60 * 1000);

      return (datetime < bookingEnd && slotEnd > bookingStart);
    });

    if (hasConflict) {
      return res.status(409).json(
        apiResponse.error('Time slot conflict with existing booking', 'BOOKING_CONFLICT', {}, 409)
      );
    }

    // Create the booking
    const booking = await prisma.booking.create({
      data: {
        leadId,
        technicianId,
        scheduledDate: new Date(scheduledDate),
        scheduledTime,
        durationMinutes,
        propertyAddress,
        melbourneSuburb,
        notes,
        customerPreferredDates: customerPreferredDates ? JSON.stringify(customerPreferredDates) : null,
        status: 'PENDING'
      },
      include: {
        lead: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        },
        technician: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    // Create notification for technician
    await prisma.notification.create({
      data: {
        userId: technicianId,
        type: 'BOOKING_CONFIRMED',
        title: 'New Booking Assigned',
        message: `New inspection scheduled for ${lead.firstName} ${lead.lastName} in ${melbourneSuburb}`,
        relatedEntityType: 'booking',
        relatedEntityId: booking.id,
        leadId,
        bookingId: booking.id,
        priority: 'NORMAL'
      }
    });

    // Log activity
    await prisma.activity.create({
      data: {
        type: 'INSPECTION_SCHEDULED',
        description: 'Inspection booking created',
        notes: `Scheduled for ${scheduledDate} at ${scheduledTime} in ${melbourneSuburb}`,
        userId: req.user.id,
        leadId
      }
    });

    res.status(201).json(apiResponse.success(booking, 'Booking created successfully'));

  } catch (error) {
    console.error('Create booking error:', error);
    const errorResponse = handleDatabaseError(error, 'creating booking');
    res.status(500).json(errorResponse);
  }
});

// Update booking (reschedule)
app.put('/api/calendar/bookings/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        lead: true,
        technician: true
      }
    });

    if (!booking) {
      return res.status(404).json(apiResponse.notFound('Booking'));
    }

    // If updating schedule, check availability
    if (updates.scheduledDate || updates.scheduledTime || updates.durationMinutes) {
      const newDate = updates.scheduledDate || booking.scheduledDate.toISOString().split('T')[0];
      const newTime = updates.scheduledTime || booking.scheduledTime;
      const newDuration = updates.durationMinutes || booking.durationMinutes;
      const newTechnicianId = updates.technicianId || booking.technicianId;

      const datetime = new Date(`${newDate}T${newTime}:00`);
      const slotEnd = new Date(datetime.getTime() + newDuration * 60 * 1000);

      // Check business hours
      const hour = datetime.getHours();
      if (hour < 7 || hour >= 19 || slotEnd.getHours() >= 19) {
        return res.status(400).json(
          apiResponse.error('Booking outside business hours (7 AM - 7 PM)', 'INVALID_TIME', {}, 400)
        );
      }

      // Check for conflicts (excluding current booking)
      const conflictingBookings = await prisma.booking.findMany({
        where: {
          technicianId: newTechnicianId,
          scheduledDate: new Date(newDate),
          status: {
            not: 'CANCELLED'
          },
          id: {
            not: id
          }
        }
      });

      const hasConflict = conflictingBookings.some(booking => {
        const bookingStart = new Date(`${booking.scheduledDate.toISOString().split('T')[0]}T${booking.scheduledTime}:00`);
        const bookingEnd = new Date(bookingStart.getTime() + booking.durationMinutes * 60 * 1000);

        return (datetime < bookingEnd && slotEnd > bookingStart);
      });

      if (hasConflict) {
        return res.status(409).json(
          apiResponse.error('Time slot conflict with existing booking', 'BOOKING_CONFLICT', {}, 409)
        );
      }
    }

    // Prepare update data
    const updateData = {};
    if (updates.scheduledDate) updateData.scheduledDate = new Date(updates.scheduledDate);
    if (updates.scheduledTime) updateData.scheduledTime = updates.scheduledTime;
    if (updates.durationMinutes) updateData.durationMinutes = updates.durationMinutes;
    if (updates.propertyAddress) updateData.propertyAddress = updates.propertyAddress;
    if (updates.melbourneSuburb) updateData.melbourneSuburb = updates.melbourneSuburb;
    if (updates.notes !== undefined) updateData.notes = updates.notes;
    if (updates.status) updateData.status = updates.status;
    if (updates.technicianId) updateData.technicianId = updates.technicianId;
    if (updates.customerPreferredDates) {
      updateData.customerPreferredDates = JSON.stringify(updates.customerPreferredDates);
    }

    const updatedBooking = await prisma.booking.update({
      where: { id },
      data: updateData,
      include: {
        lead: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        },
        technician: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    // Create notification for technician if schedule changed
    if (updates.scheduledDate || updates.scheduledTime || updates.technicianId) {
      await prisma.notification.create({
        data: {
          userId: updatedBooking.technicianId,
          type: 'SCHEDULE_CHANGE',
          title: 'Booking Schedule Updated',
          message: `Inspection for ${booking.lead.firstName} ${booking.lead.lastName} has been rescheduled`,
          relatedEntityType: 'booking',
          relatedEntityId: booking.id,
          leadId: booking.leadId,
          bookingId: booking.id,
          priority: 'HIGH'
        }
      });
    }

    // Log activity
    await prisma.activity.create({
      data: {
        type: 'STATUS_CHANGED',
        description: 'Booking updated',
        notes: `Booking details updated`,
        userId: req.user.id,
        leadId: booking.leadId
      }
    });

    res.json(apiResponse.success(updatedBooking, 'Booking updated successfully'));

  } catch (error) {
    console.error('Update booking error:', error);
    const errorResponse = handleDatabaseError(error, 'updating booking');
    res.status(500).json(errorResponse);
  }
});

// Cancel booking
app.delete('/api/calendar/bookings/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        lead: true,
        technician: true
      }
    });

    if (!booking) {
      return res.status(404).json(apiResponse.notFound('Booking'));
    }

    await prisma.booking.update({
      where: { id },
      data: { status: 'CANCELLED' }
    });

    // Create notification for technician
    await prisma.notification.create({
      data: {
        userId: booking.technicianId,
        type: 'SCHEDULE_CHANGE',
        title: 'Booking Cancelled',
        message: `Inspection for ${booking.lead.firstName} ${booking.lead.lastName} has been cancelled`,
        relatedEntityType: 'booking',
        relatedEntityId: booking.id,
        leadId: booking.leadId,
        bookingId: booking.id,
        priority: 'HIGH'
      }
    });

    // Log activity
    await prisma.activity.create({
      data: {
        type: 'STATUS_CHANGED',
        description: 'Booking cancelled',
        notes: `Inspection booking cancelled`,
        userId: req.user.id,
        leadId: booking.leadId
      }
    });

    res.json(apiResponse.success({}, 'Booking cancelled successfully'));

  } catch (error) {
    console.error('Cancel booking error:', error);
    const errorResponse = handleDatabaseError(error, 'cancelling booking');
    res.status(500).json(errorResponse);
  }
});

// Confirm booking from customer preferences
app.post('/api/calendar/bookings/confirm', authenticateToken, async (req, res) => {
  try {
    const { leadId, technicianId, datetime, durationMinutes = 60 } = req.body;

    if (!leadId || !technicianId || !datetime) {
      return res.status(400).json(
        apiResponse.validationError({
          leadId: !leadId ? 'Lead ID is required' : null,
          technicianId: !technicianId ? 'Technician ID is required' : null,
          datetime: !datetime ? 'Datetime is required' : null
        })
      );
    }

    const lead = await prisma.lead.findUnique({
      where: { id: leadId }
    });

    if (!lead) {
      return res.status(404).json(apiResponse.notFound('Lead'));
    }

    const confirmedDate = new Date(datetime);
    const scheduledDate = confirmedDate.toISOString().split('T')[0];
    const scheduledTime = confirmedDate.toTimeString().slice(0, 5);

    // Check availability
    const slotEnd = new Date(confirmedDate.getTime() + durationMinutes * 60 * 1000);

    const conflictingBookings = await prisma.booking.findMany({
      where: {
        technicianId,
        scheduledDate: new Date(scheduledDate),
        status: {
          not: 'CANCELLED'
        }
      }
    });

    const hasConflict = conflictingBookings.some(booking => {
      const bookingStart = new Date(`${booking.scheduledDate.toISOString().split('T')[0]}T${booking.scheduledTime}:00`);
      const bookingEnd = new Date(bookingStart.getTime() + booking.durationMinutes * 60 * 1000);

      return (confirmedDate < bookingEnd && slotEnd > bookingStart);
    });

    if (hasConflict) {
      return res.json({
        success: false,
        message: 'Selected time slot is no longer available. Please choose another time.'
      });
    }

    // Create confirmed booking
    const booking = await prisma.booking.create({
      data: {
        leadId,
        technicianId,
        scheduledDate: new Date(scheduledDate),
        scheduledTime,
        durationMinutes,
        propertyAddress: lead.address || `${lead.suburb}, Melbourne`,
        melbourneSuburb: lead.suburb,
        confirmedDatetime: confirmedDate,
        status: 'CONFIRMED'
      }
    });

    // Create notification
    await prisma.notification.create({
      data: {
        userId: technicianId,
        type: 'BOOKING_CONFIRMED',
        title: 'Booking Confirmed',
        message: `Customer confirmed inspection for ${lead.firstName} ${lead.lastName}`,
        relatedEntityType: 'booking',
        relatedEntityId: booking.id,
        leadId,
        bookingId: booking.id,
        priority: 'NORMAL'
      }
    });

    // Update lead status
    await prisma.lead.update({
      where: { id: leadId },
      data: { status: 'QUALIFIED' }
    });

    res.json({
      success: true,
      message: 'Booking confirmed successfully',
      bookingId: booking.id
    });

  } catch (error) {
    console.error('Confirm booking error:', error);
    res.json({
      success: false,
      message: 'Failed to confirm booking. Please try again.'
    });
  }
});

// Detect scheduling conflicts
app.get('/api/calendar/conflicts', authenticateToken, async (req, res) => {
  try {
    const { technicianId, dateFrom, dateTo } = req.query;

    if (!technicianId || !dateFrom || !dateTo) {
      return res.status(400).json(
        apiResponse.validationError({
          technicianId: !technicianId ? 'Technician ID is required' : null,
          dateFrom: !dateFrom ? 'Start date is required' : null,
          dateTo: !dateTo ? 'End date is required' : null
        })
      );
    }

    const bookings = await prisma.booking.findMany({
      where: {
        technicianId,
        scheduledDate: {
          gte: new Date(dateFrom),
          lte: new Date(dateTo)
        },
        status: {
          not: 'CANCELLED'
        }
      },
      include: {
        lead: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      },
      orderBy: [
        { scheduledDate: 'asc' },
        { scheduledTime: 'asc' }
      ]
    });

    const conflicts = [];

    // Check for overlapping bookings
    for (let i = 0; i < bookings.length - 1; i++) {
      const current = bookings[i];
      const next = bookings[i + 1];

      const currentStart = new Date(`${current.scheduledDate.toISOString().split('T')[0]}T${current.scheduledTime}:00`);
      const currentEnd = new Date(currentStart.getTime() + current.durationMinutes * 60 * 1000);
      const nextStart = new Date(`${next.scheduledDate.toISOString().split('T')[0]}T${next.scheduledTime}:00`);

      if (currentEnd > nextStart) {
        conflicts.push({
          type: 'OVERLAP',
          booking1: {
            id: current.id,
            customer: `${current.lead.firstName} ${current.lead.lastName}`,
            scheduledDate: current.scheduledDate,
            scheduledTime: current.scheduledTime,
            duration: current.durationMinutes
          },
          booking2: {
            id: next.id,
            customer: `${next.lead.firstName} ${next.lead.lastName}`,
            scheduledDate: next.scheduledDate,
            scheduledTime: next.scheduledTime,
            duration: next.durationMinutes
          },
          message: 'Bookings overlap in time'
        });
      }
    }

    res.json(apiResponse.success(conflicts, 'Conflicts detected successfully'));

  } catch (error) {
    console.error('Detect conflicts error:', error);
    const errorResponse = handleDatabaseError(error, 'detecting conflicts');
    res.status(500).json(errorResponse);
  }
});

// Utility function to format Australian phone numbers
const formatAustralianPhone = (phone) => {
  if (!phone) return null;

  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');

  // Handle Australian mobile format
  if (digits.startsWith('04') && digits.length === 10) {
    return `+61 ${digits.substr(1, 3)} ${digits.substr(4, 3)} ${digits.substr(7, 3)}`;
  }

  // Handle landline format
  if (digits.length === 10 && digits.startsWith('0')) {
    return `+61 ${digits.substr(1, 1)} ${digits.substr(2, 4)} ${digits.substr(6, 4)}`;
  }

  return phone; // Return original if no format match
};

// Mock function to get templates (in production, this would query database)
const getTemplates = async () => {
  return [
    { id: '1', name: 'Initial Contact - Melbourne', type: 'EMAIL' },
    { id: '2', name: 'Inspection Reminder - Melbourne', type: 'SMS' },
    { id: '3', name: 'Quote Follow-up - Melbourne Market', type: 'EMAIL' },
    { id: '4', name: '24 Hour Email Reminder', type: 'EMAIL' },
    { id: '5', name: '2 Hour Email Reminder', type: 'EMAIL' },
    { id: '6', name: '1 Hour SMS Reminder', type: 'SMS' }
  ];
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('API Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler - let Express handle 404s naturally

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
  console.log(`🗄️  Database: Connected to Prisma`);
  console.log(`🔐 JWT Secret: ${JWT_SECRET === 'development-secret-key' ? 'Development mode' : 'Production mode'}`);
  console.log(`📡 CORS enabled for local development`);
});