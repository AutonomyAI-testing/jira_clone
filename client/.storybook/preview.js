import React from 'react';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';
import '../src/App/fontStyles.css';

const preview = {
  parameters: {
    layout: 'centered',
  },
  decorators: [
    function(Story) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(NormalizeStyles, null),
        React.createElement(BaseStyles, null),
        React.createElement(Story, null)
      );
    },
  ],
};

export default preview;
