const path = require('path');

// Flatten plugin array to handle nested arrays from Vite config
const flattenPlugins = plugins => {
  const result = [];
  for (const p of plugins) {
    if (Array.isArray(p)) result.push(...flattenPlugins(p));
    else if (p) result.push(p);
  }
  return result;
};

// React 16 doesn't include act() from react-dom/test-utils, but Storybook 8+ assumes React 18+
// This plugin patches the imports to define act as a no-op to maintain compatibility
const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (
      id.includes('node_modules/@storybook/react') ||
      id.includes('node_modules/react-dom/test-utils')
    ) {
      return code.replace(
        /import\s+{\s*act\s*}\s+from\s+['"]react-dom\/test-utils['"]/g,
        'const act = (fn) => fn();',
      );
    }
  },
};

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    const reactPlugin = require('@vitejs/plugin-react');
    const reactPluginFn = reactPlugin.default || reactPlugin;

    // Flatten and filter existing react plugins
    const reactPluginNames = new Set([
      'vite:react-babel',
      'vite:react-refresh',
      'vite:react-jsx-source',
      'react-refresh',
    ]);
    const flat = flattenPlugins(config.plugins || []);
    config.plugins = flat.filter(p => !reactPluginNames.has(p.name));
    config.plugins.unshift(reactPluginFn({ jsxRuntime: 'classic' }));
    config.plugins.push(react16ActPatchPlugin);

    // Module resolution aliases to match webpack config
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
      App: path.resolve(__dirname, '../src/App'),
      Auth: path.resolve(__dirname, '../src/Auth'),
      Project: path.resolve(__dirname, '../src/Project'),
    };

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
