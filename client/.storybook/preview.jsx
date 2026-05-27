import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';
import '../src/App/fontStyles.css';

export const decorators = [
  (Story) => (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
