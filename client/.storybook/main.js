import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Plugin to resolve react-dom/test-utils for React 16
    const reactDomTestUtilsPlugin = {
      name: 'resolve-react-dom-test-utils',
      resolveId(id) {
        if (id === 'react-dom/test-utils') {
          return path.resolve(__dirname, '../node_modules/react-dom/test-utils.js');
        }
      },
    };

    return {
      ...config,
      define: {
        ...(config.define || {}),
        'process.env': JSON.stringify({ NODE_ENV: 'development', API_URL: 'http://localhost:3000' }),
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
      plugins: [...(config.plugins || []), reactDomTestUtilsPlugin],
      optimizeDeps: {
        ...(config.optimizeDeps || {}),
        exclude: [...((config.optimizeDeps || {}).exclude || []), 'react-dom/test-utils'],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve ? config.resolve.alias : {}),
          shared: path.resolve(__dirname, '../src/shared'),
          browserHistory: path.resolve(__dirname, '../src/browserHistory.js'),
          // Force CJS React for browser (not the ESM wrapper)
          'react': path.resolve(__dirname, '../node_modules/react/index.js'),
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom/index.js'),
          'react-dom/test-utils': path.resolve(__dirname, '../node_modules/react-dom/test-utils.js'),
        },
      },
    };
  },
};

export default config;
