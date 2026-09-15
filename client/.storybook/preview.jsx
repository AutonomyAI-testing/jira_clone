import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

export const decorators = [
  (Story) => (
    <>
      <NormalizeStyles />
      <Story />
    </>
  ),
];

const preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'padded',
  },
};

export default preview;
