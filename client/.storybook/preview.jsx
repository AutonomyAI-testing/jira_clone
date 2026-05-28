import React from 'react';
import '../src/App/fontStyles.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
