const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

// React 16 act patch plugin - React 16 predates the act utility modern Storybook expects
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

/** @type {import('@storybook/react-vite').StorybookConfig} */
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
  viteFinal: async viteConfig => {
    // Set up src-based module resolution (matches webpack's resolve.modules: ['src'])
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      // Allow absolute imports from src/ (e.g., 'shared/components', 'shared/utils/styles')
      shared: path.resolve(__dirname, '../src/shared'),
      // browserHistory is imported as bare path in api.js
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
    };

    // Remove default Vite React plugin instances to avoid dual-transform issues
    viteConfig.plugins = (viteConfig.plugins || []).filter(
      p =>
        p &&
        p.name !== 'vite:react-babel' &&
        p.name !== 'vite:react-refresh' &&
        p.name !== 'vite:react-jsx-source',
    );

    // Add React plugin with classic JSX runtime at the start
    // Classic runtime required: styled-components v4 is incompatible with automatic JSX transform
    // that injects __source metadata, causing "Objects are not valid as a React child" errors.
    viteConfig.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // Add React 16 compatibility patch
    viteConfig.plugins.push(react16ActPatchPlugin);

    // Define process.env to prevent ReferenceError in Vite context
    viteConfig.define = {
      ...viteConfig.define,
      'process.env': {},
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    return viteConfig;
  },
};

module.exports = config;
