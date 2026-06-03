const path = require('path');

/**
 * React 16 compatibility patch for Storybook 8.
 * Storybook 8 uses act() from react-dom/test-utils, which doesn't exist in React 16.
 * This plugin replaces the import with a no-op function to allow the test to run.
 */
const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (
      id.includes('node_modules/@storybook/react') ||
      id.includes('node_modules/react-dom/test-utils')
    ) {
      return code.replace(
        /import\s+{\s*act\s*}\s+from\s+['"]react-dom\/test-utils['"]/g,
        'const act = fn => fn();',
      );
    }
  },
};

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [{ from: '../src/App/assets', to: '/assets' }],
  viteFinal: async viteConfig => {
    const reactPlugin = require('@vitejs/plugin-react');

    // Remove any existing React plugins (Storybook may have added them)
    viteConfig.plugins = (viteConfig.plugins || []).filter(
      p =>
        p &&
        p.name !== 'vite:react-babel' &&
        p.name !== 'vite:react-refresh' &&
        p.name !== 'vite:react-jsx-source',
    );

    // Add React plugin with classic JSX runtime (required for styled-components v4)
    viteConfig.plugins.unshift(react16ActPatchPlugin);
    viteConfig.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // Resolve src-based absolute imports (matching webpack's src module resolution)
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    return viteConfig;
  },
};

module.exports = config;
