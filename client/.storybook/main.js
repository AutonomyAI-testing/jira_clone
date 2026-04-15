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
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // Absolute import resolution: shared -> src/shared (replicates webpack modules config)
          shared: path.resolve(__dirname, '../src/shared'),
          // Force CJS React for browser bundling (NOT the ESM wrapper which uses createRequire)
          react: path.resolve(__dirname, '../node_modules/react/index.js'),
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom/index.js'),
          // Explicit alias for react-dom/test-utils subpath
          'react-dom/test-utils': path.resolve(__dirname, '../node_modules/react-dom/test-utils.js'),
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...((config.optimizeDeps && config.optimizeDeps.include) ? config.optimizeDeps.include.filter(d => d !== 'react-dom/test-utils') : []),
        ],
        exclude: [
          ...((config.optimizeDeps && config.optimizeDeps.exclude) || []),
          'react-dom/test-utils',
        ],
      },
    };
  },
};

export default config;
