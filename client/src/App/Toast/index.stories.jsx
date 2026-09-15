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

// Helper to emit a toast via pubsub in stories
// Uses duration: 0 to keep toasts visible indefinitely (duration: 0 means no auto-dismiss)
function fireToast(opts) {
  pubsub.emit('toast', { duration: 0, ...opts });
}

// Story wrapper with consistent background for toast visibility
const ToastStoryWrapper = ({ children }) => (
  <div style={{ background: '#F4F5F7', minHeight: '200px', padding: '20px' }}>{children}</div>
);

// Helper to create a toast story with consistent pattern
const createToastStory = toastConfig => () => {
  useEffect(() => {
    fireToast(toastConfig);
  }, []);
  return (
    <ToastStoryWrapper>
      <Toast />
    </ToastStoryWrapper>
  );
};

export const Success = createToastStory({
  type: 'success',
  title: 'Issue created',
  message: 'Your issue has been created successfully.',
});

export const Error = createToastStory({
  type: 'danger',
  title: 'Something went wrong',
  message: 'Failed to save changes. Please try again.',
});

export const Warning = createToastStory({
  type: 'warning',
  title: 'Unsaved changes',
  message: 'You have unsaved changes that will be lost.',
});

export const Info = createToastStory({
  type: 'primary',
  title: 'Heads up',
  message: 'A new version of the app is available.',
});

export const TitleOnly = createToastStory({
  type: 'success',
  title: 'Changes saved!',
});

export const MessageOnly = createToastStory({
  type: 'danger',
  message: 'An unexpected error occurred. Our team has been notified.',
});

export const MultipleToasts = () => {
  useEffect(() => {
    const toasts = [
      { type: 'success', title: 'Issue created', message: 'PROJ-42 has been created.' },
      {
        type: 'warning',
        title: 'Assignment conflict',
        message: 'This user already has 5 open issues.',
      },
      { type: 'danger', title: 'Upload failed', message: 'File size exceeds the 10MB limit.' },
      {
        type: 'primary',
        title: 'Sprint started',
        message: 'Sprint 12 is now active with 23 issues.',
      },
    ];
    toasts.forEach((toast, i) => {
      setTimeout(() => fireToast(toast), i * 100);
    });
  }, []);
  return (
    <div style={{ background: '#F4F5F7', minHeight: '400px', padding: '20px' }}>
      <Toast />
    </div>
  );
};

export const LongMessage = createToastStory({
  type: 'danger',
  title: 'Permission denied',
  message:
    'You do not have permission to perform this action. Please contact your project administrator to request the required access level.',
});
