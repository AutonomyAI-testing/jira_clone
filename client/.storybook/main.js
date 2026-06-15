const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

// Patch for React 16 compatibility: Storybook 8 uses act from react-dom/test-utils,
// but React 16.12 doesn't have it. We replace the import with a no-op.
const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (id.includes('node_modules/@storybook/react') || id.includes('node_modules/react-dom/test-utils')) {
      return code.replace(/import\s+{\s*act\s*}\s+from\s+['"]react-dom\/test-utils['"]/g, "const act = (fn) => fn();");
    }
  },
};

// Recursively flatten nested plugin arrays (Vite may provide plugins in nested structures)
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
    // Flatten nested plugins array to avoid duplication
    const flat = flattenPlugins(config.plugins || []);
    // Remove default React plugins to replace with our configured version
    const reactPluginNames = new Set(['vite:react-babel', 'vite:react-refresh', 'vite:react-jsx-source', 'react-refresh']);
    config.plugins = flat.filter(p => !reactPluginNames.has(p.name));
    // Use classic JSX runtime for styled-components v4 compatibility with React 16
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));
    config.plugins.push(react16ActPatchPlugin);

    // Configure module resolution aliases to match webpack config
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Define global variables for Vite (guards against process.env access)
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    return config;
  },
};

module.exports = config;
