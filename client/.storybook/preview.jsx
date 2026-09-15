import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

// DO NOT import BaseStyles — it sets html,body,#root{height:100%} which pushes content off-screen

export const decorators = [
  Story => (
    <>
      <NormalizeStyles />
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
