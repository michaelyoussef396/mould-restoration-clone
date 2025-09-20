// Authentication endpoint for Vercel Functions
// Provides demo authentication for the Melbourne CRM system

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

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }

    // Demo authentication - use for production demo
    if (email === 'admin@mouldrestoration.com.au' && password === 'demo123') {
      const user = {
        id: 'admin-001',
        email: 'admin@mouldrestoration.com.au',
        name: 'Admin User',
        role: 'admin',
        createdAt: new Date('2024-01-01').toISOString()
      };

      const token = 'demo-jwt-token-' + Date.now();

      res.status(200).json({
        success: true,
        user,
        token,
        message: 'Demo authentication successful'
      });
    } else if (email === 'james@mouldrestoration.com.au' && password === 'demo123') {
      const user = {
        id: 'tech-001',
        email: 'james@mouldrestoration.com.au',
        name: 'James Wilson',
        role: 'technician',
        createdAt: new Date('2024-02-01').toISOString()
      };

      const token = 'demo-jwt-token-' + Date.now();

      res.status(200).json({
        success: true,
        user,
        token,
        message: 'Demo authentication successful'
      });
    } else {
      res.status(401).json({
        error: 'Invalid credentials',
        hint: 'Use admin@mouldrestoration.com.au / demo123 for admin access'
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}