import React from 'react';

import ToastPage from './index';
import Toast from '../../App/Toast';

export default {
  title: 'Project/ToastPage',
  component: ToastPage,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div style={{ padding: '24px', background: '#F4F5F7', minHeight: '100vh' }}>
        <Toast />
        <Story />
      </div>
    ),
  ],
};

export const Default = {};
