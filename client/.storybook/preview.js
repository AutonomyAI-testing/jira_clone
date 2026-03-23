import React, { Fragment } from 'react';
import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

export const decorators = [
  (Story) => (
    <Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <div style={{ width: '100%', maxWidth: '1200px', padding: '20px', background: '#fff', minHeight: '100vh' }}>
        <Story />
      </div>
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
