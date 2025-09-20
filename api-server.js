#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.API_PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'development-secret-key';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Middleware
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082', 'http://localhost:8083', 'http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Demo passwords for development
const userPasswords = {
  'admin@mouldandrestoration.com.au': 'admin123',
  'tech@mouldandrestoration.com.au': 'tech123',
};

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
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