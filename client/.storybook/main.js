const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

const flattenPlugins = (plugins) => {
  const result = [];
  for (const p of plugins) {
    if (Array.isArray(p)) result.push(...flattenPlugins(p));
    else if (p) result.push(p);
  }
  return result;
};

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Module aliases
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Plugin filtering - flatten nested array first, then filter
    const flat = flattenPlugins(config.plugins || []);
    const reactPluginNames = new Set([
      'vite:react-babel',
      'vite:react-refresh',
      'vite:react-jsx-source',
      'react-refresh',
    ]);
    config.plugins = flat.filter(p => !reactPluginNames.has(p.name));
    config.plugins.unshift(
      reactPlugin.default({ jsxRuntime: 'classic' }),
    );

    // React 16 act patch
    const react16ActPatchPlugin = {
      name: 'react16-act-patch',
      transform(code, id) {
        if (
          id.includes('node_modules/@storybook/react') ||
          id.includes('node_modules/react-dom/test-utils')
        ) {
          return code.replace(
            /import\s+{\s*act\s*}\s+from\s+['"]react-dom\/test-utils['"]/g,
            "const act = (fn) => fn();",
          );
        }
      },
    };
    config.plugins.push(react16ActPatchPlugin);

    // process.env define
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    return config;
  },
};

module.exports = config;
