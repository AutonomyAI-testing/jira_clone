const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
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
    config.resolve.extensions = ['.*', '.js', '.jsx', '.ts', '.tsx'];

    // Use webpack5 asset/inline to embed images as base64 data URIs
    // MUST use unshift() not push() — webpack5's built-in asset rules take priority otherwise
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
