import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

// Helper to emit a toast via pubsub after mount
const ToastWrapper = ({ toasts }) => {
  useEffect(() => {
    toasts.forEach(({ delay = 0, ...toast }) => {
      setTimeout(() => pubsub.emit('toast', toast), delay);
    });
  }, [toasts]);

  return (
    <div style={{ minHeight: '200px', background: '#f4f5f7', padding: '20px' }}>
      <Toast />
    </div>
  );
};

export const Success = {
  render: () => (
    <ToastWrapper
      toasts={[
        {
          type: 'success',
          title: 'Changes saved',
          message: 'Your changes have been saved successfully.',
          duration: 0,
        },
      ]}
    />
  ),
};

export const Error = {
  render: () => (
    <ToastWrapper
      toasts={[
        {
          type: 'danger',
          title: 'Error',
          message: 'Something went wrong. Please try again.',
          duration: 0,
        },
      ]}
    />
  ),
};

export const Warning = {
  render: () => (
    <ToastWrapper
      toasts={[
        {
          type: 'warning',
          title: 'Warning',
          message: 'This action cannot be undone.',
          duration: 0,
        },
      ]}
    />
  ),
};

export const Multiple = {
  render: () => (
    <ToastWrapper
      toasts={[
        {
          type: 'success',
          title: 'Issue created',
          message: 'New issue has been added to the board.',
          duration: 0,
          delay: 0,
        },
        {
          type: 'danger',
          title: 'Error',
          message: 'Failed to update comment.',
          duration: 0,
          delay: 100,
        },
        {
          type: 'warning',
          title: 'Warning',
          message: 'You have unsaved changes.',
          duration: 0,
          delay: 200,
        },
      ]}
    />
  ),
};

export const TitleOnly = {
  render: () => (
    <ToastWrapper toasts={[{ type: 'success', title: 'Saved successfully', duration: 0 }]} />
  ),
};
