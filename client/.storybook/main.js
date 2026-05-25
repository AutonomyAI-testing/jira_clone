const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, '../src/shared'),
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
    };
    config.resolve.extensions.push('.tsx', '.ts');
    return config;
  },
};
