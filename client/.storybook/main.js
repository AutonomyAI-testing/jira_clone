const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: {
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.API_URL': JSON.stringify('http://localhost:3000'),
      },
      resolve: {
        alias: {
          shared: path.resolve(__dirname, '../src/shared'),
          Project: path.resolve(__dirname, '../src/Project'),
          Auth: path.resolve(__dirname, '../src/Auth'),
          browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
          react: path.resolve(__dirname, '../node_modules/react/index.js'),
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom/index.js'),
        },
      },
      optimizeDeps: {
        exclude: ['react-dom/test-utils', '@storybook/react'],
      },
    });
  },
};
