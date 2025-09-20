#!/usr/bin/env node

import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8083;

// Enable compression
app.use(compression({
  // Compress all responses
  threshold: 0,
  // Use highest compression level for better performance
  level: 9,
  // Compress all mime types
  filter: () => true
}));

// Custom middleware to serve precompressed files
app.use((req, res, next) => {
  // Check if the client accepts gzip or brotli
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const url = req.url.split('?')[0]; // Remove query parameters

  // Try to serve brotli compressed files first (better compression)
  if (acceptEncoding.includes('br')) {
    const brotliPath = path.join(__dirname, 'dist', url + '.br');
    if (fs.existsSync(brotliPath)) {
      res.set('Content-Encoding', 'br');
      res.set('Content-Type', getContentType(url));
      res.set('Cache-Control', 'public, max-age=31536000, immutable');
      return res.sendFile(brotliPath);
    }
  }

  // Try to serve gzip compressed files
  if (acceptEncoding.includes('gzip')) {
    const gzipPath = path.join(__dirname, 'dist', url + '.gz');
    if (fs.existsSync(gzipPath)) {
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', getContentType(url));
      res.set('Cache-Control', 'public, max-age=31536000, immutable');
      return res.sendFile(gzipPath);
    }
  }

  next();
});

// Helper function to get content type
function getContentType(url) {
  if (url.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (url.endsWith('.css')) return 'text/css; charset=utf-8';
  if (url.endsWith('.html')) return 'text/html; charset=utf-8';
  if (url.endsWith('.json')) return 'application/json; charset=utf-8';
  if (url.endsWith('.png')) return 'image/png';
  if (url.endsWith('.jpg') || url.endsWith('.jpeg')) return 'image/jpeg';
  if (url.endsWith('.webp')) return 'image/webp';
  if (url.endsWith('.svg')) return 'image/svg+xml';
  if (url.endsWith('.ico')) return 'image/x-icon';
  if (url.endsWith('.webmanifest')) return 'application/manifest+json';
  if (url.endsWith('.xml')) return 'application/xml';
  return 'application/octet-stream';
}

// Security headers
app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  });
  next();
});

// Serve static files with aggressive caching for assets
app.use('/assets', express.static(path.join(__dirname, 'dist/assets'), {
  maxAge: '1y',
  immutable: true,
  setHeaders: (res, path) => {
    // Additional performance headers for assets
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

// Serve other static files (images, icons, etc.)
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1d',
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.set('Cache-Control', 'no-cache');
    }
  }
}));

// SPA fallback - serve index.html for all routes that don't match files
app.use((req, res, next) => {
  // If the file doesn't exist, serve index.html
  const filePath = path.join(__dirname, 'dist', req.path);

  // Check if it's a file request (has extension)
  if (path.extname(req.path)) {
    return next();
  }

  // Serve index.html for SPA routes
  res.set('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Production server running on http://localhost:${PORT}`);
  console.log(`📦 Serving from: ${path.join(__dirname, 'dist')}`);
  console.log(`🗜️  Compression: Enabled (Brotli + Gzip)`);
  console.log(`⚡ Performance: Optimized for production`);
});