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

// Helper: fire a pubsub toast event after mount so the real Toast component shows it
const ToastDemo = ({ toasts }) => {
  useEffect(() => {
    toasts.forEach((t, i) => {
      setTimeout(() => pubsub.emit('toast', { ...t, duration: 0 }), i * 50);
    });
  }, []);

  return (
    <div style={{ background: '#1a2332', minHeight: '100vh', padding: '20px' }}>
      <Toast />
    </div>
  );
};

export const WizardToast = () => (
  <ToastDemo
    toasts={[{ type: 'wizard', title: 'Meet your AI Wizard!', message: 'Your intelligent assistant is ready to help you manage issues and projects.' }]}
  />
);
WizardToast.storyName = 'Wizard Toast';

export const SuccessToast = () => (
  <ToastDemo
    toasts={[{ type: 'success', title: 'Changes saved', message: 'Your changes have been saved successfully.' }]}
  />
);
SuccessToast.storyName = 'Success Toast';

export const DangerToast = () => (
  <ToastDemo
    toasts={[{ type: 'danger', title: 'Error occurred', message: 'Something went wrong. Please try again.' }]}
  />
);
DangerToast.storyName = 'Danger Toast';

export const WarningToast = () => (
  <ToastDemo
    toasts={[{ type: 'warning', title: 'Warning', message: 'This action cannot be undone.' }]}
  />
);
WarningToast.storyName = 'Warning Toast';

export const AllToastTypes = () => (
  <ToastDemo
    toasts={[
      { type: 'wizard', title: 'Wizard Notification', message: 'Your AI assistant is working on it.' },
      { type: 'success', title: 'Success', message: 'Operation completed successfully.' },
      { type: 'danger', title: 'Error', message: 'An error occurred. Please retry.' },
      { type: 'warning', title: 'Warning', message: 'This action cannot be undone.' },
    ]}
  />
);
AllToastTypes.storyName = 'All Toast Types';
