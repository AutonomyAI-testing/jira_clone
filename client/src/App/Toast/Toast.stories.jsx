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

// Container styling for toast display
const CONTAINER_STYLES = {
  width: '400px',
  minHeight: '300px',
  background: '#f4f5f7',
  margin: '0 auto',
  position: 'relative',
};

// Wrapper that emits pubsub events to trigger toast notifications.
// Stagger emissions by 150ms so multiple toasts appear sequentially.
// Uses fixed positioning (right: 30px, top: 50px) for toasts, so container
// is centered and sized to keep them visible in the story viewport.
const ToastWrapper = ({ toasts }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toasts.forEach((toast, i) => {
        setTimeout(() => {
          pubsub.emit('toast', { ...toast, duration: 0 });
        }, i * 150);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={CONTAINER_STYLES}>
      <Toast />
    </div>
  );
};

export const AllVariants = () => (
  <ToastWrapper
    toasts={[
      {
        type: 'success',
        title: 'Issue updated',
        message: 'Changes saved successfully.',
      },
      {
        type: 'danger',
        title: 'Failed to save',
        message: 'Something went wrong. Please try again.',
      },
      {
        type: 'primary',
        title: 'Issue assigned',
        message: 'Assigned to you. Check the board for updates.',
      },
    ]}
  />
);

export const SuccessToast = () => (
  <ToastWrapper
    toasts={[
      {
        type: 'success',
        title: 'Issue updated',
        message: 'Changes saved successfully.',
      },
    ]}
  />
);

export const ErrorToast = () => (
  <ToastWrapper
    toasts={[
      {
        type: 'danger',
        title: 'Failed to save',
        message: 'Something went wrong. Please try again.',
      },
    ]}
  />
);

export const InfoToast = () => (
  <ToastWrapper
    toasts={[
      {
        type: 'primary',
        title: 'Issue assigned',
        message: 'Assigned to you. Check the board for updates.',
      },
    ]}
  />
);
