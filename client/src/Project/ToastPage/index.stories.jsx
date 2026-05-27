import React from 'react';

import Toast from '../../App/Toast';
import ToastPage from './index';

export default {
  title: 'Project/ToastPage',
  component: ToastPage,
  parameters: {
    layout: 'padded',
  },
};

// Default story showing the full interactive toast demo page.
// The Toast component is included so interactive buttons actually show toasts.
export const Default = () => (
  <>
    <Toast />
    <ToastPage />
  </>
);
