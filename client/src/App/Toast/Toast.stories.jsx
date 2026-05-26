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

const WRAPPER_STYLES = {
  minHeight: '200px',
  background: '#f4f5f7',
  position: 'relative',
};

const DEMO_CONTAINER_STYLES = {
  minHeight: '400px',
  background: '#f4f5f7',
  position: 'relative',
};

const DEMO_TEXT_STYLES = {
  fontFamily: 'sans-serif',
  color: '#42526E',
  fontSize: 14,
};

// Helper that mounts Toast and immediately fires a pubsub event so the real
// component renders with the given toast data.
const ToastStory = ({ toasts }) => {
  useEffect(() => {
    toasts.forEach(({ delay = 0, ...toast }) => {
      const timer = setTimeout(() => pubsub.emit('toast', toast), delay);
      return () => clearTimeout(timer);
    });
  }, [toasts]);

  return (
    <div style={WRAPPER_STYLES}>
      <Toast />
    </div>
  );
};

export const Success = () => (
  <ToastStory
    toasts={[{ type: 'success', title: 'Changes saved', message: 'Your changes have been saved successfully.', duration: 0 }]}
  />
);

export const Danger = () => (
  <ToastStory
    toasts={[{ type: 'danger', title: 'Something went wrong', message: "We couldn't process your request. Please try again later.", duration: 0 }]}
  />
);

export const Warning = () => (
  <ToastStory
    toasts={[{ type: 'warning', title: 'Unsaved changes', message: 'You have unsaved changes that may be lost if you navigate away.', duration: 0 }]}
  />
);

export const Primary = () => (
  <ToastStory
    toasts={[{ type: 'primary', title: 'Issue created', message: 'Issue JRA-123 has been created and assigned to you.', duration: 0 }]}
  />
);

export const TitleOnly = () => (
  <ToastStory
    toasts={[{ type: 'success', title: 'Copied to clipboard', duration: 0 }]}
  />
);

export const MessageOnly = () => (
  <ToastStory
    toasts={[{ type: 'danger', message: 'An unexpected error occurred while loading the project.', duration: 0 }]}
  />
);

export const Stacked = () => (
  <ToastStory
    toasts={[
      { type: 'success', title: 'Issue created', message: 'Issue JRA-101 has been created successfully.', duration: 0 },
      { type: 'primary', title: 'Issue updated', message: 'Issue JRA-98 has been moved to In Progress.', duration: 0, delay: 50 },
      { type: 'warning', title: 'Permission warning', message: "You don't have edit access to this project.", duration: 0, delay: 100 },
      { type: 'danger', title: 'Upload failed', message: 'The file you tried to upload exceeds the maximum size limit of 10MB.', duration: 0, delay: 150 },
    ]}
  />
);

// Demo notifications with staggered timing to showcase the toast system
const DEMO_NOTIFICATIONS = [
  {
    delay: 500,
    toast: {
      type: 'success',
      title: 'Issue created',
      message: 'Issue JRA-105 created successfully.',
      duration: 8,
    },
  },
  {
    delay: 1200,
    toast: {
      type: 'warning',
      title: 'Slow connection',
      message: 'Network latency detected. Some features may be slow.',
      duration: 8,
    },
  },
  {
    delay: 2000,
    toast: {
      type: 'danger',
      title: 'Save failed',
      message: 'Could not save your changes. Check your connection.',
      duration: 8,
    },
  },
];

export const LiveDemo = () => {
  useEffect(() => {
    // Schedule toast notifications at staggered intervals
    const timers = DEMO_NOTIFICATIONS.map(({ delay, toast }) =>
      setTimeout(() => {
        pubsub.emit('toast', toast);
      }, delay),
    );

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div style={DEMO_CONTAINER_STYLES}>
      <div style={{ padding: '20px' }}>
        <p style={DEMO_TEXT_STYLES}>
          Toast notifications will appear in the top-right corner over the next few seconds...
        </p>
      </div>
      <Toast />
    </div>
  );
};
