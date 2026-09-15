const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const reactPlugin = require('@vitejs/plugin-react');

// Flattens nested plugin arrays while filtering falsy values
const flattenPlugins = (plugins) => {
  const result = [];
  for (const p of plugins) {
    if (Array.isArray(p)) result.push(...flattenPlugins(p));
    else if (p) result.push(p);
  }
  return result;
};

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(viteConfig) {
    const reactPluginFn = reactPlugin.default || reactPlugin;

    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Remove default React plugins and add our own with classic JSX runtime (required for React 16)
    const flat = flattenPlugins(viteConfig.plugins || []);
    const reactPluginNames = new Set(['vite:react-babel', 'vite:react-refresh', 'vite:react-jsx-source', 'react-refresh']);
    viteConfig.plugins = flat.filter(p => !reactPluginNames.has(p.name));
    viteConfig.plugins.unshift(reactPluginFn({ jsxRuntime: 'classic' }));

    // Patch Storybook's use of React 18+ act() which is not available in React 16
    // Convert act() imports to a no-op function to prevent test utils errors
    const react16ActPatchPlugin = {
      name: 'react16-act-patch',
      transform(code, id) {
        if (id.includes('node_modules/@storybook/react') || id.includes('node_modules/react-dom/test-utils')) {
          return code.replace(/import\s+{\s*act\s*}\s+from\s+['"]react-dom\/test-utils['"]/g, "const act = (fn) => fn();");
        }
      },
    };
    viteConfig.plugins.push(react16ActPatchPlugin);

    // Polyfill process.env for Vite (not available in ES modules by default)
    viteConfig.define = {
      ...viteConfig.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    return viteConfig;
  },
};

module.exports = config;
