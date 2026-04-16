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

// Helper to trigger toasts after component mounts
const ToastStoryWrapper = ({ toasts }) => {
  useEffect(() => {
    // Small delay to ensure component has mounted
    const timer = setTimeout(() => {
      toasts.forEach(({ delay = 0, ...toastProps }) => {
        setTimeout(() => {
          pubsub.emit('toast', toastProps);
        }, delay);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return React.createElement(
    'div',
    { style: { position: 'relative', height: '300px', background: '#f4f5f7' } },
    React.createElement(Toast, null),
  );
};

export const SuccessAndDanger = {
  render: () =>
    React.createElement(ToastStoryWrapper, {
      toasts: [
        {
          type: 'success',
          title: 'Issue Updated',
          message: 'Your changes have been saved successfully.',
          duration: 0,
          delay: 100,
        },
        {
          type: 'danger',
          title: 'Error Occurred',
          message: 'Something went wrong. Please try again.',
          duration: 0,
          delay: 300,
        },
      ],
    }),
  name: 'Success and Danger',
};

export const SuccessToast = {
  render: () =>
    React.createElement(ToastStoryWrapper, {
      toasts: [
        {
          type: 'success',
          title: 'Changes Saved',
          message: 'Your project settings have been updated.',
          duration: 0,
        },
      ],
    }),
  name: 'Success Toast',
};

export const DangerToast = {
  render: () =>
    React.createElement(ToastStoryWrapper, {
      toasts: [
        {
          type: 'danger',
          title: 'Authentication Failed',
          message: 'Invalid credentials. Please check your email and password.',
          duration: 0,
        },
      ],
    }),
  name: 'Danger Toast',
};

export const TitleOnly = {
  render: () =>
    React.createElement(ToastStoryWrapper, {
      toasts: [
        {
          type: 'success',
          title: 'Copied to clipboard!',
          duration: 0,
        },
      ],
    }),
  name: 'Title Only',
};

export const MessageOnly = {
  render: () =>
    React.createElement(ToastStoryWrapper, {
      toasts: [
        {
          type: 'danger',
          message: 'Network connection lost. Retrying...',
          duration: 0,
        },
      ],
    }),
  name: 'Message Only',
};
