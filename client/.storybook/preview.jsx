import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/project/1/board']}>
        <NormalizeStyles />
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
