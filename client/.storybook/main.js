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
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    config.resolve.extensions = ['*', '.js', '.jsx'];

    config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf|svg|png|jpg|jpeg|gif)$/,
      use: [{ loader: 'url-loader', options: { limit: 15000 } }],
    });

    return config;
  },
};
