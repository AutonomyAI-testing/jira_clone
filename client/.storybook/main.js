const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack4',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, '../src/shared'),
    };
    return config;
  },
};
