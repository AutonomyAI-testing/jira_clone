const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

// React 16 act patch plugin (Storybook 8 expects modern act)
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
  docs: { autodocs: false },
  viteFinal: async (config) => {
    // Set up module resolution to match webpack's src-based resolution
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Remove default Vite React plugin instances to avoid conflicts with styled-components v4
    config.plugins = (config.plugins || []).filter(
      p => p && p.name !== 'vite:react-babel' && p.name !== 'vite:react-refresh' && p.name !== 'vite:react-jsx-source'
    );

    // Add React plugin with classic JSX runtime (required for styled-components v4)
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    // Add React 16 act patch plugin
    config.plugins.push(react16ActPatchPlugin);

    // Define process.env to avoid 'process is not defined' in Vite
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.API_URL': JSON.stringify(undefined),
    };

    // Force CJS for formik to avoid ESM context issues with React 16
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'formik',
    ];

    return config;
  },
};
