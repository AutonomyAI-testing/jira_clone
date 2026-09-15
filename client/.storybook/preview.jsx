import React from 'react';
import '../src/App/fontStyles.css';

/** @type {import('@storybook/react-vite').Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
