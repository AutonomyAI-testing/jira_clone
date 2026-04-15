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
  docs: {
    autodocs: false,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      resolve: {
        alias: {
          // Replicate webpack's module resolution: allows absolute imports from 'src'
          shared: path.resolve(__dirname, '../src/shared'),
        },
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-dom/client'],
      },
    });
  },
};

export default config;
