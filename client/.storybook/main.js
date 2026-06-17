const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // Allow absolute imports from src/ (matching webpack.config.js)
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = ['*', '.js', '.jsx'];

    // Add url-loader for fonts and images
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: { limit: 15000 },
        },
      ],
    });

    return config;
  },
};
