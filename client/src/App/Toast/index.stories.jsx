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

// Delays and constants for stories
const INITIAL_DELAY = 300; // Delay before first toast appears
const STAGGER_DELAY = 200; // Stagger delay between multiple toasts
const NO_AUTO_DISMISS = 0; // Duration=0 prevents auto-dismiss in Storybook
const CONTAINER_HEIGHT_SINGLE = '300px';
const CONTAINER_HEIGHT_ALL = '400px';
const CONTAINER_HEIGHT_STACK = '500px';

/**
 * ToastWrapper: Helper component for single toast stories
 * Emits a toast message after a brief delay to allow the Toast component to mount
 */
const ToastWrapper = ({ type, title, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', { type, title, message, duration: NO_AUTO_DISMISS });
    }, INITIAL_DELAY);
    return () => clearTimeout(timer);
  }, [type, title, message]);

  return (
    <div style={{ width: '100%', height: CONTAINER_HEIGHT_SINGLE, position: 'relative' }}>
      <Toast />
    </div>
  );
};

export const SuccessExample = {
  name: 'Success',
  render: () => (
    <ToastWrapper
      type="success"
      title="Changes saved"
      message="Your changes have been saved successfully."
    />
  ),
};

export const ErrorExample = {
  name: 'Error (Danger)',
  render: () => (
    <ToastWrapper type="danger" title="Error" message="Something went wrong. Please try again." />
  ),
};

export const WarningExample = {
  name: 'Warning',
  render: () => (
    <ToastWrapper type="warning" title="Warning" message="This action cannot be undone." />
  ),
};

/**
 * AllVariants: Demonstrates all three toast types with staggered appearance
 */
export const AllVariants = {
  name: 'All Variants',
  render: () => {
    const variants = [
      { type: 'success', title: 'Success', message: 'Operation completed.' },
      { type: 'danger', title: 'Error', message: 'Something went wrong.' },
      { type: 'warning', title: 'Warning', message: 'Proceed with caution.' },
    ];

    useEffect(() => {
      variants.forEach((variant, index) => {
        const delay = INITIAL_DELAY + index * STAGGER_DELAY;
        setTimeout(() => {
          pubsub.emit('toast', { ...variant, duration: NO_AUTO_DISMISS });
        }, delay);
      });
    }, []);

    return (
      <div style={{ width: '100%', height: CONTAINER_HEIGHT_ALL, position: 'relative' }}>
        <Toast />
      </div>
    );
  },
};

/**
 * StackingExample: Shows multiple toasts appearing quickly in succession
 */
export const StackingExample = {
  name: 'Stacking',
  render: () => {
    useEffect(() => {
      setTimeout(() => {
        pubsub.emit('toast', {
          type: 'success',
          title: 'First toast',
          message: 'This appears first.',
          duration: NO_AUTO_DISMISS,
        });
        pubsub.emit('toast', {
          type: 'danger',
          title: 'Second toast',
          message: 'This appears second.',
          duration: NO_AUTO_DISMISS,
        });
        pubsub.emit('toast', {
          type: 'warning',
          title: 'Third toast',
          message: 'This appears third.',
          duration: NO_AUTO_DISMISS,
        });
      }, INITIAL_DELAY);
    }, []);

    return (
      <div style={{ width: '100%', height: CONTAINER_HEIGHT_STACK, position: 'relative' }}>
        <Toast />
      </div>
    );
  },
};
