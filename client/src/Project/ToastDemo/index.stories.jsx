import React from 'react';
import Toast from 'App/Toast';
import ToastDemo from './index';

export default {
  title: 'Project/ToastDemo',
  component: ToastDemo,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div style={{ background: '#f4f5f7', minHeight: '100vh' }}>
        <Toast />
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <ToastDemo />;

export const WithToastContainer = () => (
  <div>
    <Toast />
    <ToastDemo />
  </div>
);
