import React from 'react';
import ToastPage from './index';
import Toast from 'App/Toast';

export default {
  title: 'Project/ToastPage',
  component: ToastPage,
  parameters: {
    layout: 'padded',
  },
};

export const Default = () => (
  <>
    <Toast />
    <ToastPage />
  </>
);
