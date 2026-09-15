const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async config => {
    // Path alias: resolve 'shared' to src/shared (matches webpack config)
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      shared: path.resolve(__dirname, '../src/shared'),
    };
    return config;
  },
  staticDirs: [{ from: '../src/App/assets', to: '/assets' }],
};
