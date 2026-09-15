const path = require('path');

const reactPlugin = require('@vitejs/plugin-react');

// React 16 act patch - React 16.12.0 doesn't have modern act utility
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
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [
    { from: '../src/App/assets', to: '/assets' },
  ],
  viteFinal: async config => {
    // Set up module path aliases matching webpack resolve.modules from src
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
      App: path.resolve(__dirname, '../src/App'),
      Project: path.resolve(__dirname, '../src/Project'),
    };

    // Remove Vite's default React plugins and replace with classic JSX runtime
    // This is required for styled-components v4 compatibility
    config.plugins = (config.plugins || []).filter(
      p => p && p.name !== 'vite:react-babel' && p.name !== 'vite:react-refresh' && p.name !== 'vite:react-jsx-source',
    );

    // Add React plugin with classic JSX runtime at the start
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // Add React 16 act patch plugin
    config.plugins.push(react16ActPatchPlugin);

    // Define process.env for Vite compatibility
    config.define = {
      ...config.define,
      'process.env': '{}',
      'process.env.API_URL': JSON.stringify('http://localhost:3000'),
    };

    return config;
  },
};

module.exports = config;
