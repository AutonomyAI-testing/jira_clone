import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

export default {
  parameters: {
    layout: 'padded',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  decorators: [
    (Story) => (
      <>
        <NormalizeStyles />
        <Story />
      </>
    ),
  ],
};
