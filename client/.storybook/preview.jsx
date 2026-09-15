import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

export const decorators = [
  Story => (
    <>
      <NormalizeStyles />
      <Story />
    </>
  ),
];

export const parameters = {
  layout: 'padded',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
