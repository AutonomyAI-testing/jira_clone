import React from 'react';
import { PageLoader } from 'shared/components';

export default {
  title: 'Auth/Authenticate',
  component: PageLoader,
  parameters: {
    layout: 'fullscreen',
  },
};

// The Authenticate component shows a PageLoader while authenticating.
// Since the actual component uses useHistory and API calls which don't work
// in Storybook, we render the visual output directly.
export const Loading = () => (
  <div style={{ minHeight: '100vh', background: '#fff' }}>
    <PageLoader />
  </div>
);
