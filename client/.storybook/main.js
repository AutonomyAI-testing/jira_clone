const path = require('path');

// React 16 compatibility patch for missing `act` export.
// Storybook 8+ imports `act` from react-dom/test-utils, but React 16.12 doesn't export it.
// This plugin replaces the import with a no-op function to prevent module resolution errors.
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
  staticDirs: [
    { from: '../src/App/assets', to: '/assets' },
  ],
  viteFinal: async (viteConfig) => {
    // Module resolution: Map imports to match webpack's alias configuration
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      // Match webpack's src-based module resolution
      shared: path.resolve(__dirname, '../src/shared'),
      App: path.resolve(__dirname, '../src/App'),
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      // React 16 shim: provide jsx-runtime that React 16 lacks
      'react/jsx-runtime': path.resolve(__dirname, '../src/_storybook_shims/react-jsx-runtime.js'),
      'react/jsx-dev-runtime': path.resolve(__dirname, '../src/_storybook_shims/react-jsx-runtime.js'),
    };
    // Environment variable stubs for Vite. The application checks typeof process,
    // then accesses process.env.API_URL. These defines prevent undefined reference errors.
    viteConfig.define = {
      ...viteConfig.define,
      'process.env': JSON.stringify({ API_URL: undefined }),
      'process.env.API_URL': JSON.stringify(undefined),
      'process': JSON.stringify({ env: { API_URL: undefined } }),
    };
    viteConfig.plugins = viteConfig.plugins || [];
    viteConfig.plugins.push(react16ActPatchPlugin);
    return viteConfig;
  },
};

module.exports = config;
