import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

// Global decorator: provide MemoryRouter context so Link components work
export const decorators = [
  Story => (
    <MemoryRouter initialEntries={['/project/avatar']}>
      <NormalizeStyles />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
};
