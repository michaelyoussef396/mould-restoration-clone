#!/bin/bash

echo "🚀 Starting Ultra LCP Optimization Lighthouse Audit"
echo "📍 Target: http://localhost:6001 (mobile)"
echo "🎯 Goals: 95%+ performance score with LCP <2.5s"
echo ""

cd /Users/michaelyoussef/APP/mould-restoration-clone

# Check if server is running
echo "🔍 Checking if development server is running on port 6001..."
if curl -s http://localhost:6001 > /dev/null; then
    echo "✅ Server is running!"
    echo ""

    # Run the audit
    echo "🏁 Running Lighthouse audit..."
    node simple-ultra-lcp-audit.js

    echo ""
    echo "📊 Audit completed! Check lighthouse-ultra-lcp-optimization.json for full results."

else
    echo "❌ Server is not running on port 6001"
    echo "Please start the development server with: npm run dev -- --port 6001"
    exit 1
fi