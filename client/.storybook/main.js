const path = require('path');
/* eslint-disable-next-line import/no-extraneous-dependencies */
const reactPlugin = require('@vitejs/plugin-react');

/* eslint-disable-next-line import/no-extraneous-dependencies */
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
    // Resolve path aliases (matching webpack's src-based module resolution)
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Remove default Vite React plugin instances to avoid conflicts
    viteConfig.plugins = (viteConfig.plugins || []).filter(
      p =>
        p &&
        p.name !== 'vite:react-babel' &&
        p.name !== 'vite:react-refresh' &&
        p.name !== 'vite:react-jsx-source',
    );

    // Add React plugin with classic JSX runtime (required for styled-components v4)
    viteConfig.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // React 16 act patch plugin
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
    viteConfig.plugins.push(react16ActPatchPlugin);

    return viteConfig;
  },
};

module.exports = config;
