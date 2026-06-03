import React from 'react';

import Toast from '../../App/Toast';
import ToastShowcase from '.';

export default {
  title: 'Project/ToastShowcase',
  component: ToastShowcase,
  parameters: {
    layout: 'fullscreen',
  },
};

// Full page story — hero + all sections + interactive toasts
export const FullPage = () => (
  <>
    <Toast />
    <ToastShowcase />
  </>
);

FullPage.storyName = 'Full Page';
