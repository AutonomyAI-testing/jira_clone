import React from 'react';
import PageError500 from './index';

// PageError500 story demonstrates the 500 Internal Server Error page
// Organized under Pages category for error pages and full-screen components
export default {
  title: 'Pages/PageError500',
  component: PageError500,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  name: '500 Internal Server Error',
  render: () => <PageError500 />,
};
