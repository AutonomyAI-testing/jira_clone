const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: [],
  webpackFinal: (config) => {
    // Setup module resolution to match main webpack config
    config.resolve.modules = [
      path.join(__dirname, '../src'),
      'node_modules',
    ];
    
    // Setup aliases for absolute imports from src directory
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    config.resolve.alias['shared'] = path.join(__dirname, '../src/shared');
    
    return config;
  },
};
