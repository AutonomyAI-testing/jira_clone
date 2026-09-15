const path = require('path');
const reactPlugin = require('@vitejs/plugin-react');

const flattenPlugins = (plugins) => {
  const result = [];
  for (const p of plugins) {
    if (Array.isArray(p)) result.push(...flattenPlugins(p));
    else if (p) result.push(p);
  }
  return result;
};

const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (id.includes('node_modules/@storybook/react') || id.includes('node_modules/react-dom/test-utils')) {
      return code.replace(
        /import\s+{\s*act\s*}\s+from\s+['"]react-dom\/test-utils['"]/g,
        "const act = (fn) => fn();"
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
  staticDirs: ['../public'],
  async viteFinal(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    const flat = flattenPlugins(config.plugins || []);
    const reactPluginNames = new Set([
      'vite:react-babel',
      'vite:react-refresh',
      'vite:react-jsx-source',
      'react-refresh',
    ]);
    config.plugins = flat.filter(p => !reactPluginNames.has(p.name));
    config.plugins.unshift(react16ActPatchPlugin);
    config.plugins.unshift(reactPlugin.default({ jsxRuntime: 'classic' }));

    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['formik', 'react', 'react-dom'],
    };
    config.resolve.dedupe = ['react', 'react-dom', 'formik'];

    return config;
  },
};

module.exports = config;
