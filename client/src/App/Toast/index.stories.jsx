import React, { useState, useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';
import { ToastType } from 'shared/constants/toasts';

/**
 * Toast Component Story
 * 
 * The Toast component displays notifications in the fixed top-right corner.
 * It uses the pub/sub system to receive toast messages and display them with
 * auto-dismiss functionality.
 * 
 * Toast Types and Colors:
 * - Success: #0B875B (green)
 * - Danger: #E13C3C (red)
 * - Warning: #F89C1C (orange)
 * - Info: #0052cc (blue)
 */
export default {
  title: 'Components/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', background: '#f5f5f5', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

// Helper component to trigger toasts
const ToastTrigger = ({ onTrigger, children }) => {
  useEffect(() => {
    onTrigger();
    // Auto-dismiss after 6 seconds to show the animation
    const timer = setTimeout(() => {
      // Clear for next story
    }, 6000);
    return () => clearTimeout(timer);
  }, [onTrigger]);
  
  return children;
};

export const Success = () => (
  <ToastTrigger
    onTrigger={() => {
      pubsub.emit('toast', {
        type: ToastType.SUCCESS,
        title: 'Success',
        message: 'Operation completed successfully',
        duration: 0, // Don't auto-dismiss for viewing
      });
    }}
  >
    <Toast />
  </ToastTrigger>
);

export const Danger = () => (
  <ToastTrigger
    onTrigger={() => {
      pubsub.emit('toast', {
        type: ToastType.DANGER,
        title: 'Error',
        message: 'Something went wrong',
        duration: 0,
      });
    }}
  >
    <Toast />
  </ToastTrigger>
);

export const Warning = () => (
  <ToastTrigger
    onTrigger={() => {
      pubsub.emit('toast', {
        type: ToastType.WARNING,
        title: 'Warning',
        message: 'Please review this action',
        duration: 0,
      });
    }}
  >
    <Toast />
  </ToastTrigger>
);

export const Info = () => (
  <ToastTrigger
    onTrigger={() => {
      pubsub.emit('toast', {
        type: ToastType.INFO,
        title: 'Info',
        message: 'This is an informational message',
        duration: 0,
      });
    }}
  >
    <Toast />
  </ToastTrigger>
);

export const AllTypes = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      // Trigger all toasts in sequence
      setTimeout(() => {
        pubsub.emit('toast', {
          type: ToastType.SUCCESS,
          title: 'Success',
          message: '✓ Operation completed',
          duration: 0,
        });
      }, 0);

      setTimeout(() => {
        pubsub.emit('toast', {
          type: ToastType.INFO,
          title: 'Info',
          message: 'ℹ Information message',
          duration: 0,
        });
      }, 200);

      setTimeout(() => {
        pubsub.emit('toast', {
          type: ToastType.WARNING,
          title: 'Warning',
          message: '⚠ Warning message',
          duration: 0,
        });
      }, 400);

      setTimeout(() => {
        pubsub.emit('toast', {
          type: ToastType.DANGER,
          title: 'Error',
          message: '✕ Error message',
          duration: 0,
        });
      }, 600);
    }
  }, [showAll]);

  return (
    <>
      <button
        onClick={() => setShowAll(!showAll)}
        style={{
          padding: '10px 20px',
          margin: '20px',
          backgroundColor: '#0052cc',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        {showAll ? 'Clear Toasts' : 'Show All Toast Types'}
      </button>
      <Toast />
    </>
  );
};

export const WithoutMessage = () => (
  <ToastTrigger
    onTrigger={() => {
      pubsub.emit('toast', {
        type: ToastType.SUCCESS,
        title: 'Saved',
        duration: 0,
      });
    }}
  >
    <Toast />
  </ToastTrigger>
);

export const WithoutTitle = () => (
  <ToastTrigger
    onTrigger={() => {
      pubsub.emit('toast', {
        type: ToastType.INFO,
        message: 'This is a message without a title',
        duration: 0,
      });
    }}
  >
    <Toast />
  </ToastTrigger>
);
