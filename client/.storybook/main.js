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
    autodocs: false,
  },
  webpackFinal: async (config) => {
    // Resolve absolute imports from src/
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = ['.*', '.js', '.jsx'];

    // Embed images as base64 data URIs (must use unshift to override webpack5 defaults)
    config.module.rules.unshift({
      test: /\.(png|jpg|jpeg|gif)$/,
      type: 'asset/inline',
    });

    // Fonts inline too
    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf|svg)$/,
      type: 'asset/inline',
    });

    return config;
  },
};
