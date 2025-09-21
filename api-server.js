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