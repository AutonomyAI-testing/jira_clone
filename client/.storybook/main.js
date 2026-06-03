const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

// React 16 act patch for Storybook 8 compatibility
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

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [
    { from: '../src/App/assets', to: '/assets' },
  ],
  async viteFinal(config) {
    // Set up module resolution aliases to match webpack config
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      // Resolve absolute imports from src/ (matches webpack modules: [src, node_modules])
      shared: path.resolve(__dirname, '../src/shared'),
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
    };

    // Remove default Vite React plugin instances that conflict with styled-components v4
    config.plugins = (config.plugins || []).filter(
      p =>
        p &&
        p.name !== 'vite:react-babel' &&
        p.name !== 'vite:react-refresh' &&
        p.name !== 'vite:react-jsx-source',
    );

    // Add React plugin with classic JSX runtime (required for styled-components v4)
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // Add React 16 act patch
    config.plugins.push(react16ActPatchPlugin);

    return config;
  },
};
