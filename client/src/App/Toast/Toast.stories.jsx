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

// A wrapper that triggers toasts on mount
const ToastWithTrigger = ({ toasts }) => {
  useEffect(() => {
    toasts.forEach((t, i) => {
      setTimeout(() => {
        pubsub.emit('toast', t);
      }, i * 100);
    });
  }, []);

  return React.createElement(Toast, null);
};

export const MultipleToasts = {
  name: 'Multiple Toasts (Success, Error, Info)',
  render: () => React.createElement(ToastWithTrigger, {
    toasts: [
      {
        type: 'success',
        title: 'Issue Created',
        message: 'Your issue has been successfully created and added to the backlog.',
        duration: 0,
      },
      {
        type: 'danger',
        title: 'Error Occurred',
        message: 'Unable to connect to the server. Please try again later.',
        duration: 0,
      },
      {
        type: 'info',
        title: 'New Comment',
        message: 'John Doe commented on issue JRA-42.',
        duration: 0,
      },
    ],
  }),
};

export const SuccessToast = {
  name: 'Success Toast',
  render: () => React.createElement(ToastWithTrigger, {
    toasts: [
      {
        type: 'success',
        title: 'Changes Saved',
        message: 'Your project settings have been updated successfully.',
        duration: 0,
      },
    ],
  }),
};

export const ErrorToast = {
  name: 'Error Toast',
  render: () => React.createElement(ToastWithTrigger, {
    toasts: [
      {
        type: 'danger',
        title: 'Permission Denied',
        message: 'You do not have permission to perform this action.',
        duration: 0,
      },
    ],
  }),
};

export const InfoToast = {
  name: 'Info Toast',
  render: () => React.createElement(ToastWithTrigger, {
    toasts: [
      {
        type: 'info',
        title: 'Heads Up',
        message: 'Your session will expire in 5 minutes.',
        duration: 0,
      },
    ],
  }),
};

export const WarningToast = {
  name: 'Warning Toast',
  render: () => React.createElement(ToastWithTrigger, {
    toasts: [
      {
        type: 'warning',
        title: 'Low Disk Space',
        message: 'You are running low on storage. Please clean up some files.',
        duration: 0,
      },
    ],
  }),
};
