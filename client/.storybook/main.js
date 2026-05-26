const path = require('path');

const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (
      id.includes('chunk-TENYCC3B') ||
      id.includes('chunk-L3JF7GGZ') ||
      (id.includes('@storybook/react') && code.includes('act: void 0'))
    ) {
      return code.replace(
        /let deprecatedTestUtils = \{ act: void 0 \};/g,
        'let deprecatedTestUtils = { act: (cb) => { const result = cb(); return result && typeof result.then === "function" ? result : Promise.resolve(result); } };',
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

    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, '../src/shared'),
    };
    return config;
  },
  staticDirs: [{ from: '../src/App/assets', to: '/assets' }],
};
