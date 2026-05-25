import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';

import Toast from 'App/Toast';
import ToastPage from './index';

export default {
  title: 'App/ToastPage',
  component: ToastPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <React.Fragment>
        <Story />
        <Toast />
      </React.Fragment>
    ),
  ],
};

export const Default = () => <ToastPage />;

export const WithPreloadedToasts = () => {
  useEffect(() => {
    const toastData = [
      {
        type: 'success',
        title: 'Success!',
        message: 'Your action completed successfully.',
        duration: 0,
      },
      {
        type: 'danger',
        title: 'Error!',
        message: 'Something went wrong. Please try again.',
        duration: 0,
      },
      {
        type: 'warning',
        title: 'Warning',
        message: 'Please review this important notice.',
        duration: 0,
      },
      {
        type: 'info',
        title: 'Information',
        message: 'Here is some useful information for you.',
        duration: 0,
      },
    ];

    toastData.forEach((toast, index) => {
      setTimeout(() => {
        pubsub.emit('toast', toast);
      }, index * 150);
    });
  }, []);

  return <ToastPage />;
};

export const WithSuccessToast = () => {
  useEffect(() => {
    setTimeout(() => {
      pubsub.emit('toast', {
        type: 'success',
        title: 'Success!',
        message: 'Your action completed successfully.',
        duration: 0,
      });
    }, 300);
  }, []);

  return <ToastPage />;
};

export const WithErrorToast = () => {
  useEffect(() => {
    setTimeout(() => {
      pubsub.emit('toast', {
        type: 'danger',
        title: 'Error!',
        message: 'Something went wrong. Please try again.',
        duration: 0,
      });
    }, 300);
  }, []);

  return <ToastPage />;
};
