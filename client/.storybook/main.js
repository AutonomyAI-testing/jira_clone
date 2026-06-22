const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  webpackFinal: async (config) => {
    // Resolve absolute imports from src/ (e.g. 'shared/components')
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = ['*', '.js', '.jsx'];

    // url-loader for fonts and images
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf|svg)$/,
      use: [{ loader: 'url-loader', options: { limit: 15000 } }],
    });

    return config;
  },
};
