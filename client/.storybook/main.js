const path = require('path');

// Vite plugin to patch the @storybook/react chunk for React 16 compatibility
// Replaces the async import of react-dom/test-utils with a static mock
const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (id.includes('chunk-L3JF7GGZ') || id.includes('@storybook/react/dist/_browser-chunks/chunk')) {
      if (code.includes('await import("react-dom/test-utils")') || code.includes("await import('react-dom/test-utils')")) {
        return {
          code: code
            .replace(
              'await import("react-dom/test-utils")',
              '{ act: (cb) => { const result = cb(); return result && typeof result.then === "function" ? result : Promise.resolve(result); } }'
            )
            .replace(
              "await import('react-dom/test-utils')",
              "{ act: (cb) => { const result = cb(); return result && typeof result.then === 'function' ? result : Promise.resolve(result); } }"
            ),
          map: null,
        };
      }
    }
    return null;
  },
};

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  async viteFinal(config) {
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({
        NODE_ENV: 'development',
        API_URL: 'http://localhost:3000',
      }),
    };

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, '../src/shared'),
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      react: path.resolve(__dirname, '../node_modules/react/index.js'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom/index.js'),
      'react-dom/test-utils': path.resolve(__dirname, '../node_modules/react-dom/test-utils.js'),
    };

    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      'react-dom/test-utils',
      '@storybook/react',
    ];

    config.plugins = [...(config.plugins || []), react16ActPatchPlugin];

    return config;
  },
};

module.exports = config;
