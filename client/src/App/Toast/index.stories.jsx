import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => {
  useEffect(() => {
    // Emit toast notifications with duration 0 so they don't auto-dismiss
    const timeouts = [];
    
    timeouts.push(
      setTimeout(() => {
        pubsub.emit('toast', {
          type: 'success',
          title: 'Success Toast',
          message: 'This is a success notification with red outline.',
          duration: 0,
        });
      }, 100)
    );

    timeouts.push(
      setTimeout(() => {
        pubsub.emit('toast', {
          type: 'danger',
          title: 'Danger Toast',
          message: 'This is a danger notification with red outline.',
          duration: 0,
        });
      }, 500)
    );

    timeouts.push(
      setTimeout(() => {
        pubsub.emit('toast', {
          type: 'warning',
          title: 'Warning Toast',
          message: 'This is a warning notification with red outline.',
          duration: 0,
        });
      }, 900)
    );

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return <Toast />;
};

export const Success = () => {
  useEffect(() => {
    pubsub.emit('toast', {
      type: 'success',
      title: 'Success',
      message: 'Operation completed successfully with red outline.',
      duration: 0,
    });
  }, []);

  return <Toast />;
};

export const Danger = () => {
  useEffect(() => {
    pubsub.emit('toast', {
      type: 'danger',
      title: 'Error',
      message: 'Something went wrong with red outline.',
      duration: 0,
    });
  }, []);

  return <Toast />;
};

export const Warning = () => {
  useEffect(() => {
    pubsub.emit('toast', {
      type: 'warning',
      title: 'Warning',
      message: 'Please be careful with red outline.',
      duration: 0,
    });
  }, []);

  return <Toast />;
};
