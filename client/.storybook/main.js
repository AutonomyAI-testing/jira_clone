const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

// React 16 act patch plugin - handles missing act utility in old React
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
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [{ from: '../src/App/assets', to: '/assets' }],
  async viteFinal(viteConfig) {
    // Set up path aliases matching webpack's resolve.modules config
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      // Match webpack's modules: [path.join(__dirname, 'src'), 'node_modules']
      // This allows absolute imports like 'shared/...', 'App/...', 'browserHistory'
      shared: path.resolve(__dirname, '../src/shared'),
      App: path.resolve(__dirname, '../src/App'),
      Auth: path.resolve(__dirname, '../src/Auth'),
      Project: path.resolve(__dirname, '../src/Project'),
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
    };

    // Remove default Vite React plugin instances
    viteConfig.plugins = (viteConfig.plugins || []).filter(
      p =>
        p &&
        p.name !== 'vite:react-babel' &&
        p.name !== 'vite:react-refresh' &&
        p.name !== 'vite:react-jsx-source',
    );

    // Add React plugin with classic JSX runtime (REQUIRED for styled-components v4)
    // Without 'classic', Vite injects __source metadata objects which styled-components v4
    // cannot handle, causing "Objects are not valid as a React child" errors
    const reactPluginFn = typeof reactPlugin === 'function' ? reactPlugin : reactPlugin.default;
    viteConfig.plugins.unshift(reactPluginFn({ jsxRuntime: 'classic' }));

    // Add React 16 act patch plugin
    viteConfig.plugins.push(react16ActPatchPlugin);

    // Dedupe React to prevent multiple instances
    viteConfig.resolve.dedupe = ['react', 'react-dom', 'formik'];

    // Define process.env for compatibility with webpack-based code
    viteConfig.define = {
      ...viteConfig.define,
      'process.env': {},
    };

    return viteConfig;
  },
};

module.exports = config;
