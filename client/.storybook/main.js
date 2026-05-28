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
  staticDirs: [
    { from: '../src/App/assets', to: '/assets' },
  ],
  viteFinal: async (config) => {
    // Remove default Vite React plugin instances (incompatible with styled-components v4)
    config.plugins = (config.plugins || []).filter(
      p => p && p.name !== 'vite:react-babel' && p.name !== 'vite:react-refresh' && p.name !== 'vite:react-jsx-source',
    );

    // Add React plugin with classic JSX runtime (required for styled-components v4)
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // Add React 16 act patch
    config.plugins.push(react16ActPatchPlugin);

    // Set up module aliases to match webpack src-based imports
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Deduplicate React to avoid multiple React instances (causes context failures)
    config.resolve.dedupe = ['react', 'react-dom', 'formik'];

    // Force Vite to use exactly one copy of react and react-dom from node_modules
    const reactPath = path.resolve(__dirname, '../node_modules/react');
    const reactDomPath = path.resolve(__dirname, '../node_modules/react-dom');
    config.resolve.alias['react'] = reactPath;
    config.resolve.alias['react-dom'] = reactDomPath;

    // Ensure react and react-dom are pre-bundled together with formik
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'react',
      'react-dom',
      'formik',
    ];

    return config;
  },
};

module.exports = config;
