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

// Helper to emit toasts after mount
const ToastTrigger = ({ toasts }) => {
  useEffect(() => {
    toasts.forEach((toast, i) => {
      setTimeout(() => {
        pubsub.emit('toast', { ...toast, duration: 0 });
      }, i * 100);
    });
  }, []);
  return null;
};

export const AllTypes = {
  render: () => (
    <div style={{ height: '400px', background: '#f4f5f7', position: 'relative' }}>
      <ToastTrigger
        toasts={[
          { type: 'info', title: 'Info Toast', message: 'This uses the primary blue color (#0052cc).' },
          { type: 'success', title: 'Success Toast', message: 'Issue created successfully.' },
          { type: 'danger', title: 'Error Toast', message: 'Something went wrong. Please try again.' },
          { type: 'warning', title: 'Warning Toast', message: 'Your session is about to expire.' },
        ]}
      />
      <Toast />
    </div>
  ),
};

export const DefaultBlue = {
  render: () => (
    <div style={{ height: '300px', background: '#f4f5f7', position: 'relative' }}>
      <ToastTrigger
        toasts={[
          { type: 'info', title: 'Default Blue Toast', message: 'Background is #0052cc (primary blue color).' },
        ]}
      />
      <Toast />
    </div>
  ),
};

export const Success = {
  render: () => (
    <div style={{ height: '200px', background: '#f4f5f7', position: 'relative' }}>
      <ToastTrigger
        toasts={[
          { type: 'success', title: 'Success', message: 'Your changes have been saved.' },
        ]}
      />
      <Toast />
    </div>
  ),
};

export const Danger = {
  render: () => (
    <div style={{ height: '200px', background: '#f4f5f7', position: 'relative' }}>
      <ToastTrigger
        toasts={[
          { type: 'danger', title: 'Error', message: 'Failed to delete issue. Please try again.' },
        ]}
      />
      <Toast />
    </div>
  ),
};

export const Warning = {
  render: () => (
    <div style={{ height: '200px', background: '#f4f5f7', position: 'relative' }}>
      <ToastTrigger
        toasts={[
          { type: 'warning', title: 'Warning', message: 'You are about to permanently delete this item.' },
        ]}
      />
      <Toast />
    </div>
  ),
};

export const TitleOnly = {
  render: () => (
    <div style={{ height: '200px', background: '#f4f5f7', position: 'relative' }}>
      <ToastTrigger
        toasts={[
          { type: 'info', title: 'Issue updated successfully.' },
        ]}
      />
      <Toast />
    </div>
  ),
};
