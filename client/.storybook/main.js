const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.API_URL': JSON.stringify('http://localhost:3000'),
    };

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, '../src/shared'),
      Project: path.resolve(__dirname, '../src/Project'),
      Auth: path.resolve(__dirname, '../src/Auth'),
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      react: path.resolve(__dirname, '../node_modules/react/index.js'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom/index.js'),
    };

    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      'react-dom/test-utils',
      '@storybook/react',
    ];

    return config;
  },
};
