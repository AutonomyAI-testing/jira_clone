const path = require('path');

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    const reactPlugin = require('@vitejs/plugin-react');
    const reactPluginFn = reactPlugin.default || reactPlugin;

    // Flatten nested plugins array
    const flattenPlugins = (plugins) => {
      const result = [];
      for (const p of plugins) {
        if (Array.isArray(p)) result.push(...flattenPlugins(p));
        else if (p) result.push(p);
      }
      return result;
    };
    const flat = flattenPlugins(config.plugins || []);
    const reactPluginNames = new Set(['vite:react-babel', 'vite:react-refresh', 'vite:react-jsx-source', 'react-refresh']);
    config.plugins = flat.filter(p => !reactPluginNames.has(p.name));
    config.plugins.unshift(reactPluginFn({ jsxRuntime: 'classic' }));

    // React 16 act patch
    const react16ActPatchPlugin = {
      name: 'react16-act-patch',
      transform(code, id) {
        if (id.includes('node_modules/@storybook/react') || id.includes('node_modules/react-dom/test-utils')) {
          return code.replace(/import\s+{\s*act\s*}\s+from\s+['"]react-dom\/test-utils['"]/g, "const act = (fn) => fn();");
        }
      },
    };
    config.plugins.push(react16ActPatchPlugin);

    // Module resolution aliases
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Force formik CJS to prevent context mismatch with React 16
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'formik',
    ];
    config.resolve.dedupe = [
      ...(config.resolve.dedupe || []),
      'react',
      'react-dom',
      'formik',
    ];

    // process.env define
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    return config;
  },
};

module.exports = config;
