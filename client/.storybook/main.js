import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vite plugin to patch React 16 act() issue in @storybook/react browser chunks
const react16ActPatchPlugin = {
  name: 'react16-act-patch',
  transform(code, id) {
    if (id.includes('chunk-L3JF7GGZ') || (id.includes('@storybook/react') && code.includes('deprecatedTestUtils') && code.includes('act: void 0'))) {
      return code.replace(
        /let deprecatedTestUtils = \{ act: void 0 \};/g,
        'let deprecatedTestUtils = { act: (cb) => { const result = cb(); return result && typeof result.then === "function" ? result : Promise.resolve(result); } };'
      );
    }
    // Also patch the pre-bundled storybook_internal_preview_runtime.js
    if (id.includes('storybook_internal_preview_runtime') && code.includes('act: void 0') && code.includes('deprecatedTestUtils')) {
      return code.replace(
        /let deprecatedTestUtils = \{ act: void 0 \};/g,
        'let deprecatedTestUtils = { act: (cb) => { const result = cb(); return result && typeof result.then === "function" ? result : Promise.resolve(result); } };'
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
  async viteFinal(config) {
    return {
      ...config,
      plugins: [
        ...(config.plugins || []),
        react16ActPatchPlugin,
      ],
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
          '@storybook/react',
        ],
      },
    };
  },
};

export default config;
