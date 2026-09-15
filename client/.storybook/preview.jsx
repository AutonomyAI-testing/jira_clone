import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <>
        <NormalizeStyles />
        <Story />
      </>
    ),
  ],
};

export default preview;
