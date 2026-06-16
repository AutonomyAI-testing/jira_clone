import React from 'react';
import PageError from './index';

// PageError story demonstrates the generic error page component
// Used when an unexpected error occurs, with guidance to contact support
export default {
  title: 'Components/PageError',
  component: PageError,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  name: 'Default',
  render: () => <PageError />,
};
