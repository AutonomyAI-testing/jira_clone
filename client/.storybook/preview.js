import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';
import '../src/App/fontStyles.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    function(Story) {
      return React.createElement(React.Fragment, null,
        React.createElement(NormalizeStyles, null),
        React.createElement(BaseStyles, null),
        React.createElement(Story, null)
      );
    },
  ],
};

export default preview;
