const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack4',
  },
  webpackFinal: async (config) => {
    // Mirror the project's webpack.config.js module resolution
    // Project uses modules: [path.join(__dirname, 'src'), 'node_modules']
    // which allows absolute imports like 'shared/components'
    config.resolve.modules = [
      path.resolve(__dirname, '../src'),
      'node_modules',
    ];
    config.resolve.extensions = ['*', '.js', '.jsx'];
    config.module.rules.push({
      test: /\.svg$/,
      use: ['url-loader'],
    });
    return config;
  },
};
