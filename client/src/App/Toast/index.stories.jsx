import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div
        style={{
          minHeight: '200px',
          background: '#f0f0f0',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '24px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const ToastStoryWrapper = ({ toastType, title, message }) => {
  useEffect(() => {
    // Trigger the toast after component mounts
    setTimeout(() => {
      pubsub.emit('toast', {
        type: toastType,
        title,
        message,
        duration: 0, // Don't auto-dismiss in stories
      });
    }, 100);
  }, [toastType, title, message]);

  return <Toast />;
};

export const SuccessToast = () => (
  <ToastStoryWrapper
    toastType="success"
    title="Success"
    message="Your changes have been saved successfully"
  />
);

export const ErrorToast = () => (
  <ToastStoryWrapper
    toastType="danger"
    title="Error"
    message="Something went wrong. Please try again"
  />
);

export const WarningToast = () => (
  <ToastStoryWrapper toastType="warning" title="Warning" message="This action cannot be undone" />
);

export const MessageOnlyToast = () => (
  <ToastStoryWrapper toastType="success" title="" message="Operation completed" />
);

export const TitleOnlyToast = () => (
  <ToastStoryWrapper toastType="success" title="Done!" message="" />
);

export const LongMessageToast = () => (
  <ToastStoryWrapper
    toastType="success"
    title="Project Created"
    message="Your new project 'Wizard Designs' has been created successfully. You can now start adding issues and managing your team workflow."
  />
);
