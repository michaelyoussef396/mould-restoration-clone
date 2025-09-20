// Dashboard stats endpoint for Vercel Functions
// Provides demo dashboard statistics for the Melbourne CRM system

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

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Basic auth check (demo mode)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized - Missing auth token' });
      return;
    }

    // Mock dashboard statistics for Melbourne operations
    const stats = {
      totalLeads: 47,
      newLeads: 8,
      activeInspections: 12,
      completedJobs: 156,
      monthlyRevenue: 45750,
      conversionRate: 72,
      averageJobValue: 2150,
      weeklyGrowth: 15.5,
      monthlyGrowth: 32.8,
      recentActivity: [
        {
          id: 'activity-001',
          type: 'NEW_LEAD',
          description: 'New lead from Carlton - Mould Inspection',
          timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
          leadId: 'lead-001'
        },
        {
          id: 'activity-002',
          type: 'INSPECTION_COMPLETED',
          description: 'Inspection completed in Richmond',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
          leadId: 'lead-002'
        },
        {
          id: 'activity-003',
          type: 'QUOTE_SENT',
          description: 'Quote sent for Fitzroy water damage restoration',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
          leadId: 'lead-003'
        }
      ],
      statusBreakdown: {
        NEW: 8,
        CONTACTED: 12,
        QUALIFIED: 15,
        QUOTED: 7,
        WON: 3,
        LOST: 2
      },
      serviceTypeBreakdown: {
        MOULD_INSPECTION: 18,
        MOULD_REMOVAL: 15,
        WATER_DAMAGE_RESTORATION: 8,
        AIR_QUALITY_TESTING: 4,
        PREVENTIVE_TREATMENT: 2
      },
      urgencyBreakdown: {
        LOW: 12,
        MEDIUM: 23,
        HIGH: 10,
        URGENT: 2
      },
      suburbStats: [
        { suburb: 'Carlton', leads: 8, value: 12500 },
        { suburb: 'Richmond', leads: 6, value: 9800 },
        { suburb: 'Fitzroy', leads: 5, value: 11200 },
        { suburb: 'Toorak', leads: 4, value: 8900 },
        { suburb: 'Brighton', leads: 3, value: 7600 }
      ],
      technicianPerformance: [
        {
          id: 'tech-001',
          name: 'James Wilson',
          completedJobs: 23,
          averageRating: 4.8,
          revenue: 18500
        },
        {
          id: 'tech-002',
          name: 'Emma Davis',
          completedJobs: 19,
          averageRating: 4.9,
          revenue: 15200
        }
      ]
    };

    res.status(200).json({
      success: true,
      data: stats,
      timestamp: new Date().toISOString(),
      message: 'Demo statistics - real-time data from Melbourne operations'
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}