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

// Helper component that emits a toast on mount
const ToastTrigger = ({ type, title, message, duration = 0, loading = false, disabled = false }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', { type, title, message, duration, loading, disabled });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return React.createElement(Toast, null);
};

export const Success = {
  render: () =>
    React.createElement(ToastTrigger, {
      type: 'success',
      title: 'Changes have been saved',
      message: 'Your project settings have been updated successfully.',
      duration: 0,
    }),
};

export const Danger = {
  render: () =>
    React.createElement(ToastTrigger, {
      type: 'danger',
      title: 'Something went wrong',
      message: 'An error occurred while saving your changes. Please try again.',
      duration: 0,
    }),
};

export const TitleOnly = {
  render: () =>
    React.createElement(ToastTrigger, {
      type: 'success',
      title: 'Issue created successfully',
      duration: 0,
    }),
};

export const MessageOnly = {
  render: () =>
    React.createElement(ToastTrigger, {
      type: 'danger',
      message: 'Failed to load project data.',
      duration: 0,
    }),
};

export const Loading = {
  render: () =>
    React.createElement(ToastTrigger, {
      type: 'success',
      title: 'Processing',
      message: 'Your request is being processed...',
      loading: true,
      duration: 0,
    }),
};

export const Disabled = {
  render: () =>
    React.createElement(ToastTrigger, {
      type: 'success',
      title: 'Action in progress',
      message: 'This notification cannot be dismissed.',
      disabled: true,
      duration: 0,
    }),
};

export const Multiple = {
  render: () => {
    const MultiToast = () => {
      useEffect(() => {
        const timers = [
          setTimeout(() => pubsub.emit('toast', { type: 'success', title: 'Issue moved', message: 'Moved to In Progress', duration: 0 }), 100),
          setTimeout(() => pubsub.emit('toast', { type: 'danger', title: 'Upload failed', message: 'File size exceeds limit.', duration: 0 }), 300),
          setTimeout(() => pubsub.emit('toast', { type: 'success', title: 'Comment added', duration: 0 }), 500),
        ];
        return () => timers.forEach(t => clearTimeout(t));
      }, []);
      return React.createElement(Toast, null);
    };
    return React.createElement(MultiToast, null);
  },
};
