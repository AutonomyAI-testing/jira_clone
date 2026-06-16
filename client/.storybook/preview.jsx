import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <NormalizeStyles />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
};
