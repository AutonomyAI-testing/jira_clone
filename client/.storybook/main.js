const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

// React 16 act() patch plugin - replaces import { act } from 'react-dom/test-utils'
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
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [
    { from: '../src/App/assets', to: '/assets' },
  ],
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async config => {
    // Remove default Vite React plugin instances that conflict with styled-components v4
    config.plugins = (config.plugins || []).filter(
      p => p && p.name !== 'vite:react-babel' && p.name !== 'vite:react-refresh' && p.name !== 'vite:react-jsx-source',
    );

    // Add React plugin with classic JSX runtime for styled-components v4 compatibility
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // Add the React 16 act patch plugin
    config.plugins.push(react16ActPatchPlugin);

    // Module aliases for non-standard webpack bare-module imports
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Define process.env to avoid "process is not defined" errors
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    return config;
  },
};

module.exports = config;
