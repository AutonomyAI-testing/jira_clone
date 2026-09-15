const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async config => {
    // Add src directory to module resolution path to support absolute imports like 'shared/utils'.
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
    // Configure Babel to transpile JS/JSX files with React 16 + Storybook 8 compatibility.
    // This ensures proper transpilation of async/await and JSX syntax in stories.
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: { chrome: 80 } }], '@babel/react'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      },
    });
    // Provide regeneratorRuntime global for async/await support in stories.
    // This fixes "regeneratorRuntime is not defined" errors with async/await syntax.
    config.plugins.push(
      new webpack.ProvidePlugin({
        regeneratorRuntime: require.resolve('regenerator-runtime/runtime'),
      }),
    );
    return config;
  },
};
