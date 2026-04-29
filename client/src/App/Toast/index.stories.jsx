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

// Helper component that triggers toasts on mount
function ToastTrigger({ toasts }) {
  useEffect(() => {
    toasts.forEach((toast, i) => {
      setTimeout(() => {
        pubsub.emit('toast', { ...toast, duration: 0 });
      }, i * 150);
    });
  }, []);

  return React.createElement(Toast, null);
}

export const Success = {
  render: () =>
    React.createElement(ToastTrigger, {
      toasts: [{ type: 'success', title: 'Issue updated', message: 'Your changes have been saved.' }],
    }),
};

export const Danger = {
  render: () =>
    React.createElement(ToastTrigger, {
      toasts: [{ type: 'danger', title: 'Error', message: 'Something went wrong. Please try again.' }],
    }),
};

export const Warning = {
  render: () =>
    React.createElement(ToastTrigger, {
      toasts: [{ type: 'warning', title: 'Warning', message: 'You are running low on disk space.' }],
    }),
};

export const MultipleToasts = {
  render: () =>
    React.createElement(ToastTrigger, {
      toasts: [
        { type: 'success', title: 'Issue created', message: 'PROJ-42 has been created successfully.' },
        { type: 'danger', title: 'Error', message: 'Failed to update issue status.' },
        { type: 'warning', title: 'Warning', message: 'Your session will expire in 5 minutes.' },
      ],
    }),
};

export const TitleOnly = {
  render: () =>
    React.createElement(ToastTrigger, {
      toasts: [{ type: 'success', title: 'Changes saved!' }],
    }),
};

export const MessageOnly = {
  render: () =>
    React.createElement(ToastTrigger, {
      toasts: [{ type: 'danger', title: 'Error', message: 'Unable to connect to the server. Please check your network connection.' }],
    }),
};
