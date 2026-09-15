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

// Helper wrapper that emits toast events so they appear in the Toast component
const ToastWithEmitter = ({ toasts }) => {
  useEffect(() => {
    // Emit toasts with slight delays so they don't overwrite each other
    toasts.forEach((toast, i) => {
      setTimeout(() => {
        pubsub.emit('toast', { ...toast, duration: 0 }); // duration: 0 = no auto-dismiss
      }, i * 100);
    });
  }, [toasts]);

  return <Toast />;
};

export const Success = {
  render: () => (
    <ToastWithEmitter
      toasts={[
        {
          type: 'success',
          title: 'Changes saved',
          message: 'Your changes have been saved successfully.',
        },
      ]}
    />
  ),
};

export const Danger = {
  render: () => (
    <ToastWithEmitter
      toasts={[
        { type: 'danger', title: 'Error', message: 'Something went wrong. Please try again.' },
      ]}
    />
  ),
};

export const Warning = {
  render: () => (
    <ToastWithEmitter
      toasts={[{ type: 'warning', title: 'Warning', message: 'This action cannot be undone.' }]}
    />
  ),
};

export const Info = {
  render: () => (
    <ToastWithEmitter
      toasts={[{ type: 'info', title: 'Info', message: 'A new version is available.' }]}
    />
  ),
};

export const MultipleToasts = {
  render: () => (
    <ToastWithEmitter
      toasts={[
        { type: 'success', title: 'Issue created', message: 'Issue PRJ-123 was created.' },
        { type: 'danger', title: 'Error', message: 'Failed to load comments.' },
        { type: 'warning', title: 'Warning', message: 'Session expires in 5 minutes.' },
        { type: 'info', title: 'Info', message: 'You have 3 unread notifications.' },
      ]}
    />
  ),
};

export const TitleOnly = {
  render: () => (
    <ToastWithEmitter toasts={[{ type: 'success', title: 'Issue deleted successfully' }]} />
  ),
};
