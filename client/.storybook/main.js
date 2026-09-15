const path = require('path');

const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (
      id.includes('node_modules/@storybook/react') ||
      id.includes('node_modules/react-dom/test-utils')
    ) {
      return code.replace(
        /import\s+{\s*act\s*}\s+from\s+['"]react-dom\/test-utils['"]/g,
        "const act = (fn) => fn();"
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
  async viteFinal(config) {
    const reactPlugin = require('@vitejs/plugin-react');

    // Remove default Vite React plugin instances
    config.plugins = (config.plugins || []).filter(
      p => p && p.name !== 'vite:react-babel' && p.name !== 'vite:react-refresh' && p.name !== 'vite:react-jsx-source'
    );

    // Add React plugin with classic JSX runtime (required for styled-components v4)
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));
    config.plugins.push(react16ActPatchPlugin);

    // Resolve path aliases matching webpack config
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Fix process.env for legacy webpack-era code
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    return config;
  },
};

module.exports = config;
