const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => {
    config.mode = 'development';
    
    // Configure modules resolution like in main webpack.config.js
    config.resolve = config.resolve || {};
    config.resolve.modules = [path.join(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = ['*', '.js', '.jsx', '.json'];
    
    return config;
  },
};
