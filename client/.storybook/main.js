const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    // Resolve absolute imports from src/
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = ['*', '.js', '.jsx', '.ts', '.tsx'];

    // Handle font/image files
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf|svg)$/,
      use: [{ loader: 'url-loader', options: { limit: 50000 } }],
    });

    return config;
  },
};
