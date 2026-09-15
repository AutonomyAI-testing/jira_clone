// Polyfill regeneratorRuntime for React 16 + Storybook 8 compatibility.
// Ensures async/await syntax works correctly in stories.
if (typeof regeneratorRuntime === 'undefined') {
  // eslint-disable-next-line global-require
  const runtime = require('regenerator-runtime/runtime');
  if (typeof window !== 'undefined') window.regeneratorRuntime = runtime;
  if (typeof global !== 'undefined') global.regeneratorRuntime = runtime;
}

import React from 'react';
import '../src/App/fontStyles.css';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';

// Wrap all stories with global styles (NormalizeStyles and BaseStyles).
// This ensures stories render with the same styling as the main app.
export const decorators = [
  Story => (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
