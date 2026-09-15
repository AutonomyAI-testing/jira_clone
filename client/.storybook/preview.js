import React, { Fragment } from 'react';
import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

export const decorators = [
  (Story) => (
    <Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <Story />
    </Fragment>
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
