const path = require('path');

// Plugin to patch @storybook/react act() issue with React 16
const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (
      id.includes('chunk-L3JF7GGZ') ||
      (id.includes('@storybook/react') &&
        code.includes('deprecatedTestUtils') &&
        code.includes('act: void 0'))
    ) {
      return code.replace(
        /let deprecatedTestUtils = \{ act: void 0 \};/g,
        'let deprecatedTestUtils = { act: (cb) => { const result = cb(); return result && typeof result.then === "function" ? result : Promise.resolve(result); } };',
      );
    }
  },
};

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: {
        'process.env': JSON.stringify({
          NODE_ENV: 'development',
          API_URL: 'http://localhost:3000',
        }),
      },
      resolve: {
        alias: {
          shared: path.resolve(__dirname, '../src/shared'),
          browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
          react: path.resolve(__dirname, '../node_modules/react/index.js'),
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom/index.js'),
          'react-dom/test-utils': path.resolve(
            __dirname,
            '../node_modules/react-dom/test-utils.js',
          ),
        },
      },
      optimizeDeps: {
        exclude: ['react-dom/test-utils', '@storybook/react'],
      },
      plugins: [react16ActPatchPlugin],
    });
  },
};

module.exports = config;
