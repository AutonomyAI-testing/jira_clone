const path = require('path');

// React 16 act() shim plugin for Storybook 8 compatibility
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
  viteFinal: async (config) => {
    // Set up module resolution aliases matching webpack config
    // webpack uses modules: [path.join(__dirname, 'src'), 'node_modules']
    // so 'shared', 'App', 'Project', etc. resolve from src/
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, '../src/shared'),
      App: path.resolve(__dirname, '../src/App'),
      Project: path.resolve(__dirname, '../src/Project'),
      Auth: path.resolve(__dirname, '../src/Auth'),
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
    };

    // Add React 16 act() compatibility patch
    config.plugins = config.plugins || [];
    config.plugins.push(react16ActPatchPlugin);

    return config;
  },
};

module.exports = config;
