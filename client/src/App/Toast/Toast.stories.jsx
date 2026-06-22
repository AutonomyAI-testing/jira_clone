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

// Wrapper that emits a single toast via pubsub on mount.
// The effect intentionally has an empty dependency array to emit exactly once per render.
// Props are captured at mount time and never re-trigger the effect (as intended for Storybook).
const SingleToastWrapper = ({ type, title, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', { type, title, message, duration: 0 });
    }, 100);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight: '200px', position: 'relative' }}>
      <Toast />
    </div>
  );
};

// Wrapper that emits multiple toasts via pubsub on mount, staggered in time.
// The effect intentionally has an empty dependency array to emit exactly once per render.
// Toasts array is captured at mount time and never re-triggers the effect (as intended for Storybook).
const MultiToastWrapper = ({ toasts }) => {
  useEffect(() => {
    toasts.forEach((t, i) => {
      setTimeout(() => {
        pubsub.emit('toast', { ...t, duration: 0 });
      }, 100 + i * 50);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight: '400px', position: 'relative' }}>
      <Toast />
    </div>
  );
};

export const Success = {
  render: () => (
    <SingleToastWrapper
      type="success"
      title="Changes saved"
      message="Your project settings have been updated successfully."
    />
  ),
};

export const Error = {
  render: () => (
    <SingleToastWrapper
      type="danger"
      title="Something went wrong"
      message="Unable to save changes. Please try again later."
    />
  ),
};

export const Default = {
  render: () => (
    <SingleToastWrapper
      type="primary"
      title="New issue created"
      message="Issue has been added to the backlog."
    />
  ),
};

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <MultiToastWrapper
      toasts={[
        {
          type: 'success',
          title: 'Changes saved',
          message: 'Your project settings have been updated successfully.',
        },
        {
          type: 'danger',
          title: 'Something went wrong',
          message: 'Unable to save changes. Please try again later.',
        },
        {
          type: 'primary',
          title: 'New issue created',
          message: 'Issue has been added to the backlog.',
        },
      ]}
    />
  ),
};
