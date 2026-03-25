import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
  },
};

// Auto-display wrapper that shows toasts on mount
// Emits toasts with staggered timing to demonstrate all states without user interaction
const ToastAutoDisplayWrapper = () => {
  useEffect(() => {
    // Stagger toast emissions to prevent overlap and show each toast clearly
    const successTimer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'success',
        title: 'Success!',
        message: 'Your changes have been saved successfully.',
        duration: 0, // Never auto-dismiss so we can see the design
      });
    }, 100);

    const warningTimer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'warning',
        title: 'Warning',
        message: 'This action cannot be undone. Please proceed with caution.',
        duration: 0,
      });
    }, 400);

    const errorTimer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'danger',
        title: 'Error!',
        message: 'An error occurred while processing your request. Please try again.',
        duration: 0,
      });
    }, 700);

    return () => {
      clearTimeout(successTimer);
      clearTimeout(warningTimer);
      clearTimeout(errorTimer);
    };
  }, []);

  return (
    <div>
      <Toast />
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h2>Toast Notifications</h2>
        <p>
          Three toast notifications are displayed in the top-right corner, showing the success (green),
          warning (orange), and error (red) states. Each toast has:
        </p>
        <ul>
          <li>Enhanced spacing and padding (16px)</li>
          <li>Clear typography with bold titles and regular messages</li>
          <li>Smooth box shadows for depth (0 4px 12px)</li>
          <li>Slide-in animation from the right</li>
          <li>Hover effect that lifts the toast (translateY -2px) and increases shadow</li>
          <li>Close icon (X) in the top-right corner</li>
          <li>Click to dismiss functionality</li>
        </ul>
      </div>
    </div>
  );
};

// Interactive wrapper allowing users to trigger toasts via buttons
// Demonstrates the toast's dismissible behavior and auto-dismiss timer
const ToastInteractiveWrapper = () => {
  return (
    <div>
      <Toast />
      <div style={{ padding: '20px', maxWidth: '600px' }}>
        <h2>Toast Notifications Demo</h2>
        <p>
          Click the buttons below to trigger toast notifications. They will appear in the top-right corner.
          Click on them to dismiss, or they will auto-dismiss after 5 seconds.
        </p>
        <button
          onClick={() =>
            pubsub.emit('toast', {
              type: 'success',
              title: 'Success!',
              message: 'Your changes have been saved successfully.',
              duration: 5,
            })
          }
          style={{
            padding: '10px 16px',
            marginRight: '8px',
            marginBottom: '8px',
            backgroundColor: '#0B875B',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Show Success Toast
        </button>

        <button
          onClick={() =>
            pubsub.emit('toast', {
              type: 'danger',
              title: 'Error!',
              message: 'An error occurred while processing your request. Please try again.',
              duration: 5,
            })
          }
          style={{
            padding: '10px 16px',
            marginRight: '8px',
            marginBottom: '8px',
            backgroundColor: '#E13C3C',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Show Error Toast
        </button>

        <button
          onClick={() =>
            pubsub.emit('toast', {
              type: 'warning',
              title: 'Warning',
              message: 'This action cannot be undone. Please proceed with caution.',
              duration: 5,
            })
          }
          style={{
            padding: '10px 16px',
            marginRight: '8px',
            marginBottom: '8px',
            backgroundColor: '#F89C1C',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Show Warning Toast
        </button>
      </div>
    </div>
  );
};

// Default story showing all three toast types automatically
export const Default = {
  render: () => <ToastAutoDisplayWrapper />,
};

// Story focused on visual design
export const AllToastTypes = {
  render: () => <ToastAutoDisplayWrapper />,
};

// Story focused on success toast
export const Success = {
  render: () => {
    const ShowSuccessOnly = () => {
      useEffect(() => {
        pubsub.emit('toast', {
          type: 'success',
          title: 'Success!',
          message: 'Your changes have been saved successfully.',
          duration: 0,
        });
      }, []);

      return (
        <div>
          <Toast />
          <div style={{ padding: '20px' }}>
            <h2>Success Toast Example</h2>
            <p>Demonstrates the success/positive state with green background.</p>
          </div>
        </div>
      );
    };
    return <ShowSuccessOnly />;
  },
};

// Story focused on warning toast
export const Warning = {
  render: () => {
    const ShowWarningOnly = () => {
      useEffect(() => {
        pubsub.emit('toast', {
          type: 'warning',
          title: 'Warning',
          message: 'This action cannot be undone. Please proceed with caution.',
          duration: 0,
        });
      }, []);

      return (
        <div>
          <Toast />
          <div style={{ padding: '20px' }}>
            <h2>Warning Toast Example</h2>
            <p>Demonstrates the warning state with orange background.</p>
          </div>
        </div>
      );
    };
    return <ShowWarningOnly />;
  },
};

// Story focused on error/danger toast
export const Error = {
  render: () => {
    const ShowErrorOnly = () => {
      useEffect(() => {
        pubsub.emit('toast', {
          type: 'danger',
          title: 'Error!',
          message: 'An error occurred while processing your request. Please try again.',
          duration: 0,
        });
      }, []);

      return (
        <div>
          <Toast />
          <div style={{ padding: '20px' }}>
            <h2>Error Toast Example</h2>
            <p>Demonstrates the error/negative state with red background.</p>
          </div>
        </div>
      );
    };
    return <ShowErrorOnly />;
  },
};

// Interactive story with buttons
export const Interactive = {
  render: () => <ToastInteractiveWrapper />,
};
