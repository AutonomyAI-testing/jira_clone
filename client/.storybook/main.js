const path = require('path');

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

const flattenPlugins = plugins => {
  const result = [];
  for (const p of plugins) {
    if (Array.isArray(p)) result.push(...flattenPlugins(p));
    else if (p) result.push(p);
  }
  return result;
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
    autodocs: false,
  },
  async viteFinal(config) {
    const reactPlugin = require('@vitejs/plugin-react');

    // Resolve aliases matching webpack config
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Deduplicate react and formik
    config.resolve.dedupe = [
      ...(config.resolve.dedupe || []),
      'react',
      'react-dom',
      'formik',
    ];

    // Pre-bundle formik with CJS to fix context mismatch
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'formik',
    ];

    // Define process.env
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    // Fix plugins: flatten, remove React plugins, add classic JSX
    const flat = flattenPlugins(config.plugins || []);
    const reactPluginNames = new Set([
      'vite:react-babel',
      'vite:react-refresh',
      'vite:react-jsx-source',
      'react-refresh',
    ]);
    config.plugins = flat.filter(p => !reactPluginNames.has(p.name));
    const reactPluginFn = reactPlugin.default || reactPlugin;
    config.plugins.unshift(reactPluginFn({ jsxRuntime: 'classic' }));
    config.plugins.push(react16ActPatchPlugin);

    return config;
  },
};

module.exports = config;
