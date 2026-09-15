import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/App/fontStyles.css';

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
    Story => (
      <MemoryRouter initialEntries={['/project/board']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
