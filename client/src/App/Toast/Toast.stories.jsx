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

// Wrapper that emits a toast event shortly after mount
const ToastWithEvents = ({ events }) => {
  useEffect(() => {
    const timers = events.map((event, i) => {
      return setTimeout(() => {
        pubsub.emit('toast', { ...event, duration: 0 });
      }, 100 + i * 100);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div style={{ minHeight: 200, position: 'relative' }}>
      <Toast />
    </div>
  );
};

export const SuccessToast = {
  name: 'Success Toast',
  render: () => (
    <ToastWithEvents
      events={[
        {
          type: 'success',
          title: 'Changes have been saved',
          message: 'Your project settings have been updated successfully.',
        },
      ]}
    />
  ),
};

export const DangerToast = {
  name: 'Danger / Error Toast',
  render: () => (
    <ToastWithEvents
      events={[
        {
          type: 'danger',
          title: 'Error',
          message: 'Something went wrong. Please try again later.',
        },
      ]}
    />
  ),
};

export const MultipleToasts = {
  name: 'Multiple Toasts Stacked',
  render: () => (
    <ToastWithEvents
      events={[
        {
          type: 'success',
          title: 'Issue created',
          message: 'New issue has been added to the backlog.',
        },
        {
          type: 'danger',
          title: 'Error',
          message: 'Failed to upload attachment.',
        },
        {
          type: 'success',
          title: 'Comment posted',
          message: 'Your comment has been saved.',
        },
      ]}
    />
  ),
};

export const EmptyContainer = {
  name: 'Empty Container (No Toasts)',
  render: () => (
    <div style={{ minHeight: 200, position: 'relative' }}>
      <Toast />
    </div>
  ),
};
