/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
      SWC: {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    },
  },
  webpackFinal: (config) => {
    config.externals = config.externals || {};
    config.externals['react/jsx-runtime'] = 'react/jsx-runtime';
    config.resolve = config.resolve || {};
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback['react/jsx-runtime'] = false;
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['shared'] = require('path').resolve(__dirname, '../src/shared');
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
