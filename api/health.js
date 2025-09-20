// Health check endpoint for Vercel Functions
// Provides basic API functionality without external dependencies

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

  if (req.method === 'GET') {
    res.status(200).json({
      status: 'healthy',
      service: 'Mould & Restoration CRM API',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      environment: process.env.VERCEL_ENV || 'development',
      message: 'API is running on Vercel Functions'
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}