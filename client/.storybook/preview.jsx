import React from 'react';

import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';
import Toast from '../src/App/Toast';

// Import font styles (CircularStd + jira icon font)
import '../src/App/fontStyles.css';

export const decorators = [
  Story => (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Toast />
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
