import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';

// Import the font CSS for CircularStd and jira icon font
import '../src/App/fontStyles.css';

const withGlobalStyles = Story => (
  <>
    <NormalizeStyles />
    <BaseStyles />
    <Story />
  </>
);

export const decorators = [withGlobalStyles];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  layout: 'padded',
};
