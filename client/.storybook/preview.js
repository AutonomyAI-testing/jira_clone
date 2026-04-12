import React, { Fragment } from 'react';
import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <Story />
      </Fragment>
    ),
  ],
};

export default preview;
