const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

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

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Fix module aliases for webpack-style bare imports
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Fix process.env references
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    // Remove default Vite React plugin instances (incompatible with styled-components v4)
    config.plugins = (config.plugins || []).filter(
      p => p && p.name !== 'vite:react-babel' && p.name !== 'vite:react-refresh' && p.name !== 'vite:react-jsx-source',
    );
    // Add React plugin with classic JSX runtime (required for styled-components v4)
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));
    // Add React 16 act() patch
    config.plugins.push(react16ActPatchPlugin);

    return config;
  },
};

module.exports = config;
