import React from 'react';
import AvatarPage from './index';

export default {
  title: 'Project/AvatarPage',
  component: AvatarPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  name: 'Profile Page',
  render: () => <AvatarPage />,
};
