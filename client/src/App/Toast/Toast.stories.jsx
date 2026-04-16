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

// Helper component that emits toast events on mount
const ToastDemo = ({ toasts }) => {
  useEffect(() => {
    const timers = [];
    toasts.forEach((toast, i) => {
      const t = setTimeout(() => {
        pubsub.emit('toast', { ...toast, duration: 0 }); // duration 0 = no auto-dismiss
      }, i * 150);
      timers.push(t);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div style={{ height: '100vh', background: '#f4f5f7', position: 'relative' }}>
      <Toast />
    </div>
  );
};

export const InfoBlueToast = {
  name: 'Info (Blue - Default)',
  render: () => (
    <ToastDemo
      toasts={[
        { type: 'info', title: 'Info Toast', message: 'Background color is #0052cc (primary blue).' },
      ]}
    />
  ),
};

export const AllTypes = {
  name: 'All Types',
  render: () => (
    <ToastDemo
      toasts={[
        { type: 'info', title: 'Info Toast', message: 'Uses the primary blue color (#0052cc).' },
        { type: 'success', title: 'Success Toast', message: 'Issue created successfully.' },
        { type: 'danger', title: 'Error Toast', message: 'Something went wrong. Please try again.' },
        { type: 'warning', title: 'Warning Toast', message: 'Your session is about to expire.' },
      ]}
    />
  ),
};

export const SuccessToast = {
  name: 'Success',
  render: () => (
    <ToastDemo
      toasts={[
        { type: 'success', title: 'Issue created', message: 'Your issue was created successfully.' },
      ]}
    />
  ),
};

export const ErrorToast = {
  name: 'Error',
  render: () => (
    <ToastDemo
      toasts={[
        { type: 'danger', title: 'Something went wrong', message: 'Unable to save changes. Please try again.' },
      ]}
    />
  ),
};

export const WarningToast = {
  name: 'Warning',
  render: () => (
    <ToastDemo
      toasts={[
        { type: 'warning', title: 'Session expiring', message: 'Your session will expire in 5 minutes.' },
      ]}
    />
  ),
};

export const MultipleToastsStacked = {
  name: 'Multiple Toasts Stacked',
  render: () => (
    <ToastDemo
      toasts={[
        { type: 'success', title: 'Issue created', message: 'Your issue was created successfully.' },
        { type: 'danger', title: 'Upload failed', message: 'The file could not be uploaded. Check your connection.' },
        { type: 'warning', title: 'Low disk space', message: 'The server is running low on disk space.' },
      ]}
    />
  ),
};

export const TitleOnly = {
  render: () => (
    <ToastDemo
      toasts={[
        { type: 'success', title: 'Saved!' },
      ]}
    />
  ),
};

export const MessageOnly = {
  render: () => (
    <ToastDemo
      toasts={[
        { type: 'danger', message: 'Failed to connect to server.' },
      ]}
    />
  ),
};
