#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting Ultra LCP Optimization Lighthouse Audit...');
console.log('📍 Target: http://localhost:6001 (mobile)');
console.log('🎯 Goal: 95%+ performance score with LCP <2.5s\n');

try {
  // Run the audit script
  execSync('node lighthouse-ultra-lcp-audit.js', {
    stdio: 'inherit',
    cwd: '/Users/michaelyoussef/APP/mould-restoration-clone'
  });

  console.log('\n✅ Ultra LCP audit completed successfully!');
  console.log('📄 Results saved to: lighthouse-ultra-lcp-optimization.json');

} catch (error) {
  console.error('❌ Audit execution failed:', error.message);
  process.exit(1);
}