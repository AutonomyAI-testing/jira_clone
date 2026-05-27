const path = require('path');

// Vite plugin to patch React 16 compatibility issues with Storybook 8.6.14
// Storybook 8+ expects React 17+ but this project uses React 16.12.0
// This plugin patches the deprecated testUtils.act function that was removed from React 17+
const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (
      id.includes('chunk-L3JF7GGZ') ||
      id.includes('chunk-TENYCC3B') ||
      (id.includes('@storybook/react') && code.includes('act: void 0'))
    ) {
      return code.replace(
        /let deprecatedTestUtils = \{ act: void 0 \};/g,
        'let deprecatedTestUtils = { act: (cb) => { const result = cb(); return result && typeof result.then === "function" ? result : Promise.resolve(result); } };'
      );
    }
  },
};

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins || []), react16ActPatchPlugin];
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [...(config.optimizeDeps.exclude || []), '@storybook/react'];

    // Vite doesn't polyfill process.env like webpack does
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({ API_URL: 'http://localhost:3000' }),
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, '../src/shared'),
      App: path.resolve(__dirname, '../src/App'),
      browserHistory: path.resolve(__dirname, '../src/browserHistory'),
    };
    return config;
  },
  staticDirs: [{ from: '../src/App/assets', to: '/assets' }],
};
