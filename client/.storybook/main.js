import path from 'path';
import reactPlugin from '@vitejs/plugin-react';

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
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  async viteFinal(config) {
    // Set up aliases to match webpack config
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
      shared: path.resolve(__dirname, '../src/shared'),
    };

    // Deduplicate React instances
    config.resolve.dedupe = [
      ...(config.resolve.dedupe || []),
      'react',
      'react-dom',
    ];

    // Replace the default React plugin with classic JSX runtime to fix styled-components v4
    const reactPluginNames = new Set([
      'vite:react-babel',
      'vite:react-refresh',
      'vite:react-jsx-source',
      'react-refresh',
    ]);
    const flat = flattenPlugins(config.plugins || []);
    config.plugins = flat.filter(p => !reactPluginNames.has(p.name));
    config.plugins.unshift(
      reactPlugin.default({ jsxRuntime: 'classic' }),
      react16ActPatchPlugin,
    );

    // Define process.env to prevent ReferenceError
    config.define = {
      ...config.define,
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify('development'),
    };

    // Optimize deps
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'react',
      'react-dom',
    ];

    return config;
  },
};

export default config;
