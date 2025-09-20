// Leads endpoint for Vercel Functions
// Provides demo lead management for the Melbourne CRM system

const MOCK_LEADS = [
  {
    id: 'lead-001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@example.com',
    phone: '0423 456 789',
    suburb: 'Carlton',
    address: '123 Smith Street',
    postcode: '3053',
    serviceType: 'MOULD_INSPECTION',
    urgency: 'HIGH',
    source: 'WEBSITE',
    status: 'NEW',
    notes: 'Visible mould in bathroom, concerns about health impact',
    estimatedValue: 850,
    bookingDates: JSON.stringify(['2025-01-22T09:00:00Z', '2025-01-23T14:00:00Z']),
    createdAt: '2025-01-21T10:30:00Z',
    updatedAt: '2025-01-21T10:30:00Z',
    createdById: 'admin-001',
    assignedToId: 'tech-001',
    createdBy: {
      id: 'admin-001',
      name: 'Admin User',
      email: 'admin@mouldrestoration.com.au',
      role: 'admin'
    },
    assignedTo: {
      id: 'tech-001',
      name: 'James Wilson',
      email: 'james@mouldrestoration.com.au',
      role: 'technician'
    },
    inspections: [],
    activities: []
  },
  {
    id: 'lead-002',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@example.com',
    phone: '0412 789 123',
    suburb: 'Richmond',
    address: '456 Bridge Road',
    postcode: '3121',
    serviceType: 'MOULD_REMOVAL',
    urgency: 'MEDIUM',
    source: 'REFERRAL',
    status: 'CONTACTED',
    notes: 'Follow-up from previous inspection, ready to proceed',
    estimatedValue: 2400,
    bookingDates: JSON.stringify(['2025-01-24T08:00:00Z']),
    createdAt: '2025-01-20T14:15:00Z',
    updatedAt: '2025-01-21T09:00:00Z',
    contactedAt: '2025-01-21T09:00:00Z',
    createdById: 'admin-001',
    assignedToId: 'tech-002',
    createdBy: {
      id: 'admin-001',
      name: 'Admin User',
      email: 'admin@mouldrestoration.com.au',
      role: 'admin'
    },
    assignedTo: {
      id: 'tech-002',
      name: 'Emma Davis',
      email: 'emma@mouldrestoration.com.au',
      role: 'technician'
    },
    inspections: [],
    activities: []
  },
  {
    id: 'lead-003',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@example.com',
    phone: '0401 234 567',
    suburb: 'Fitzroy',
    address: '789 Brunswick Street',
    postcode: '3065',
    serviceType: 'WATER_DAMAGE_RESTORATION',
    urgency: 'HIGH',
    source: 'PHONE',
    status: 'QUALIFIED',
    notes: 'Water damage from burst pipe, urgent response needed',
    estimatedValue: 3200,
    bookingDates: JSON.stringify(['2025-01-22T07:00:00Z']),
    createdAt: '2025-01-21T08:15:00Z',
    updatedAt: '2025-01-21T11:30:00Z',
    contactedAt: '2025-01-21T08:45:00Z',
    qualifiedAt: '2025-01-21T11:30:00Z',
    createdById: 'admin-001',
    assignedToId: 'tech-001',
    createdBy: {
      id: 'admin-001',
      name: 'Admin User',
      email: 'admin@mouldrestoration.com.au',
      role: 'admin'
    },
    assignedTo: {
      id: 'tech-001',
      name: 'James Wilson',
      email: 'james@mouldrestoration.com.au',
      role: 'technician'
    },
    inspections: [],
    activities: []
  }
];

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Basic auth check (demo mode)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized - Missing auth token' });
      return;
    }

    if (req.method === 'GET') {
      // Return all leads with pagination support
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedLeads = MOCK_LEADS.slice(startIndex, endIndex);

      res.status(200).json({
        success: true,
        data: paginatedLeads,
        pagination: {
          page,
          limit,
          total: MOCK_LEADS.length,
          totalPages: Math.ceil(MOCK_LEADS.length / limit)
        },
        message: 'Demo data - changes will not persist'
      });
    } else if (req.method === 'POST') {
      // Create new lead (demo mode)
      const leadData = req.body;

      const newLead = {
        id: 'lead-' + Date.now(),
        ...leadData,
        status: 'NEW',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdById: 'admin-001',
        createdBy: {
          id: 'admin-001',
          name: 'Admin User',
          email: 'admin@mouldrestoration.com.au',
          role: 'admin'
        },
        inspections: [],
        activities: []
      };

      res.status(201).json({
        success: true,
        data: newLead,
        message: 'Lead created in demo mode - changes will not persist'
      });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Leads API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}