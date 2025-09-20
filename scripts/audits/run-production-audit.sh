#!/bin/bash

echo "🚀 Starting Production Lighthouse Audit..."
echo "📱 Checking if production server is running on port 6001..."

# Check if port 6001 is in use
if lsof -Pi :6001 -sTCP:LISTEN -t >/dev/null ; then
    echo "✅ Production server detected on port 6001"
else
    echo "❌ Production server not running on port 6001"
    echo "Please start production server with: npm run build && npm run start"
    exit 1
fi

echo "🔍 Running comprehensive mobile audit..."
node lighthouse-production-audit.js