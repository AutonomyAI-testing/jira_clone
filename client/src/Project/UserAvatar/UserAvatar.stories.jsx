import React from 'react';

import UserAvatar from './index';

export default {
  title: 'Project/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'fullscreen',
  },
};

// Component uses built-in mock data from config.js for all API calls

export const Default = {
  name: 'Default',
};

export const WithInitials = {
  name: 'No Avatar (Initials)',
};
