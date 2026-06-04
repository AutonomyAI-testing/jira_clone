import React from 'react';

import PageError from './index';

export default {
  title: 'Shared/PageError',
  component: PageError,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  name: 'Default',
  render: () => <PageError />,
};
