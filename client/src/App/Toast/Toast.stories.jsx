import React, { useEffect, useRef } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

// Reusable container for story renders with consistent background and sizing
const ToastContainer = () => (
  <div style={{ width: '100vw', height: '100vh', background: '#f4f5f7' }}>
    <Toast />
  </div>
);

/**
 * Helper to emit a toast message after a delay.
 * Used in stories to display toasts with staggered timing for visual clarity.
 */
const emitToastWithDelay = (toastConfig, delay) => {
  return setTimeout(() => {
    pubsub.emit('toast', toastConfig);
  }, delay);
};

// Story: Show all toast types stacked
export const AllTypes = () => {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Emit different toast types in sequence for visual hierarchy
    const timers = [
      emitToastWithDelay({
        type: 'success',
        title: 'Success',
        message: 'Issue has been updated successfully.',
        duration: 0,
      }, 300),
      emitToastWithDelay({
        type: 'danger',
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        duration: 0,
      }, 500),
      emitToastWithDelay({
        type: 'warning',
        title: 'Warning',
        message: 'Your session will expire in 5 minutes.',
        duration: 0,
      }, 700),
      emitToastWithDelay({
        type: 'primary',
        title: 'Info',
        message: 'A new project update is available.',
        duration: 0,
      }, 900),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return <ToastContainer />;
};
AllTypes.storyName = 'All Types (Stacked)';

/**
 * Factory function to create a story that emits a single toast on mount.
 * Handles timer cleanup and ensures toast only fires once per story render.
 */
const createSingleToastStory = (toastConfig, storyName) => {
  const Story = () => {
    const fired = useRef(false);

    useEffect(() => {
      if (fired.current) return;
      fired.current = true;

      const timer = emitToastWithDelay(toastConfig, 300);
      return () => clearTimeout(timer);
    }, []);

    return <ToastContainer />;
  };

  Story.storyName = storyName;
  return Story;
};

// Story: Success toast only
export const SuccessToast = createSingleToastStory(
  {
    type: 'success',
    title: 'Changes Saved',
    message: 'Your project settings have been saved successfully.',
    duration: 0,
  },
  'Success',
);

// Story: Error (danger) toast only
export const ErrorToast = createSingleToastStory(
  {
    type: 'danger',
    title: 'Error',
    message: 'Could not save changes. Please check your connection and try again.',
    duration: 0,
  },
  'Error (Danger)',
);

// Story: Warning toast only
export const WarningToast = createSingleToastStory(
  {
    type: 'warning',
    title: 'Session Expiring',
    message: 'Your session will expire soon. Save your work.',
    duration: 0,
  },
  'Warning',
);

// Story: Info toast only
export const InfoToast = createSingleToastStory(
  {
    type: 'primary',
    title: 'Update Available',
    message: 'A new version of the application is available.',
    duration: 0,
  },
  'Info',
);

// Story: Primary (Info) toast only
export const PrimaryToast = createSingleToastStory(
  {
    type: 'primary',
    title: 'Update Available',
    message: 'A new version of the application is available.',
    duration: 0,
  },
  'Primary (Blue)',
);

// Story: Title-only (no message) toasts
export const TitleOnly = () => {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Show two title-only toasts in sequence to demonstrate the variant
    const timers = [
      emitToastWithDelay({
        type: 'success',
        title: 'Issue updated',
        duration: 0,
      }, 300),
      emitToastWithDelay({
        type: 'danger',
        title: 'Failed to save',
        duration: 0,
      }, 500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return <ToastContainer />;
};
TitleOnly.storyName = 'Title Only (No Message)';
