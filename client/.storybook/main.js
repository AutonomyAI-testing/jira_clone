const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

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
  viteFinal: async viteConfig => {
    // Module resolution aliases (matching webpack config)
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Remove default Vite React plugin instances to avoid styled-components v4 JSX conflict
    viteConfig.plugins = (viteConfig.plugins || []).filter(
      p => p && p.name !== 'vite:react-babel' && p.name !== 'vite:react-refresh' && p.name !== 'vite:react-jsx-source',
    );
    // Add React plugin with classic JSX runtime (required for styled-components v4)
    viteConfig.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // React 16 act patch
    viteConfig.plugins.push(react16ActPatchPlugin);

    // Polyfill process.env for files that use it (e.g., config.js)
    viteConfig.define = {
      ...viteConfig.define,
      'process.env': '{}',
    };

    return viteConfig;
  },
};

module.exports = config;
