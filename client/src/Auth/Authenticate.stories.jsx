import React, { Fragment } from 'react';
import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

import { PageLoader } from 'shared/components';

export default {
  title: 'Auth/Authenticate',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <div style={{ width: '100%', minHeight: '100vh', background: '#fff' }}>
          <Story />
        </div>
      </Fragment>
    ),
  ],
};

// The Authenticate component renders a PageLoader which displays
// a green spinner (using color.success = '#0B875B')
// We render the PageLoader directly to verify the green color is applied
export const Loading = () => <PageLoader />;
