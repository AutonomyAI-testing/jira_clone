const path = require('path');

const reactPlugin = require('@vitejs/plugin-react');

// React 16 Act Patch (for test utilities)
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

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: { autodocs: 'tag' },
  viteFinal: async viteConfig => {
    // Remove default Vite React plugin instances
    viteConfig.plugins = (viteConfig.plugins || []).filter(
      p =>
        p &&
        p.name !== 'vite:react-babel' &&
        p.name !== 'vite:react-refresh' &&
        p.name !== 'vite:react-jsx-source',
    );
    // Add React plugin with classic JSX runtime (required for styled-components v4)
    viteConfig.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));
    // Add React 16 act patch
    viteConfig.plugins.push(react16ActPatchPlugin);

    // Resolve bare module aliases used in webpack config
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    return viteConfig;
  },
};

module.exports = config;
