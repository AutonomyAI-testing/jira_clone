import React, { useEffect } from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';

// Import Storybook-specific font CSS that uses absolute /assets/ paths
// Font files served by staticDirs in main.js
import './fontStyles.css';

// Ensure a #root element exists for Modal portal targets
function ensureRootElement() {
  if (typeof document !== 'undefined' && !document.getElementById('root')) {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
  }
}
ensureRootElement();

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <NormalizeStyles />
        <BaseStyles />
        <Story />
      </>
    ),
  ],
};

export default preview;
