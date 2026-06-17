const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // Replicate app's absolute import resolution from "src"
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = ['*', '.js', '.jsx', '.ts', '.tsx'];

    // Handle font files and images
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf|svg)$/,
      type: 'asset/resource',
    });

    return config;
  },
};
