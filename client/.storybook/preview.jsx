import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/App/fontStyles.css';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <NormalizeStyles />
      <BaseStyles />
      <Story />
    </MemoryRouter>
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
