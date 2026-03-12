#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const cacheDir = path.join(__dirname, 'node_modules', '.cache', 'babel-loader');
const fullCacheDir = path.join(__dirname, 'node_modules', '.cache');

try {
  if (fs.existsSync(cacheDir)) {
    console.log(`Deleting ${cacheDir}...`);
    execSync(`rm -rf "${cacheDir}"`);
    console.log('✓ Babel cache deleted successfully');
  } else {
    console.log('Babel cache directory not found (already clean)');
  }

  if (fs.existsSync(fullCacheDir) && fs.readdirSync(fullCacheDir).length === 0) {
    console.log(`Deleting empty ${fullCacheDir}...`);
    execSync(`rm -rf "${fullCacheDir}"`);
    console.log('✓ Empty cache directory removed');
  }
} catch (error) {
  console.error('Error clearing cache:', error.message);
  process.exit(1);
}
