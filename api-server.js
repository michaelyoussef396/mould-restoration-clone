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

// Communication Hub Routes (basic implementation)
app.get('/api/communication/templates', authenticateToken, async (req, res) => {
  try {
    // Return mock templates for now - in production this would be from database
    const templates = [
      {
        id: '1',
        name: 'Initial Contact',
        type: 'EMAIL',
        subject: 'Thank you for contacting Mould & Restoration Co.',
        content: 'Dear {{firstName}},\n\nThank you for contacting us regarding mould inspection services. We will be in touch within 24 hours to schedule your inspection.\n\nBest regards,\nMould & Restoration Co.'
      },
      {
        id: '2',
        name: 'Inspection Reminder',
        type: 'SMS',
        content: 'Hi {{firstName}}, this is a reminder that your mould inspection is scheduled for {{date}} at {{time}}. Our technician {{technicianName}} will contact you 30 minutes before arrival.'
      },
      {
        id: '3',
        name: 'Quote Follow-up',
        type: 'EMAIL',
        subject: 'Following up on your mould remediation quote',
        content: 'Dear {{firstName}},\n\nI wanted to follow up on the quote we provided for your property at {{address}}. Do you have any questions about our proposed solution?\n\nPlease let me know if you\'d like to proceed or if you need any clarification.\n\nBest regards,\nMould & Restoration Co.'
      }
    ];

    res.json(apiResponse.success(templates, 'Communication templates retrieved successfully'));
  } catch (error) {
    console.error('Get templates error:', error);
    res.status(500).json(apiResponse.error('Failed to retrieve templates'));
  }
});

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