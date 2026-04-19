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

// Reusable container component for all stories
const StoryContainer = ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      background: '#f4f5f7',
    }}
  >
    {children}
  </div>
);

const AllToastsStory = () => {
  useEffect(() => {
    const toastData = [
      {
        type: 'success',
        title: 'Issue Created',
        message: 'The issue has been successfully created.',
        duration: 0,
      },
      {
        type: 'danger',
        title: 'Error Occurred',
        message: 'Something went wrong. Please try again.',
        duration: 0,
      },
      {
        type: 'warning',
        title: 'Warning',
        message: 'This action cannot be undone. Proceed with caution.',
        duration: 0,
      },
      {
        type: 'info',
        title: 'Info',
        message: 'Your changes have been saved automatically.',
        duration: 0,
      },
    ];

    // Emit toasts with a small delay between each
    toastData.forEach((toast, index) => {
      setTimeout(() => {
        pubsub.emit('toast', toast);
      }, index * 100);
    });
  }, []);

  return (
    <StoryContainer>
      <Toast />
    </StoryContainer>
  );
};

// Shows all toast notification types at once with staggered appearance
export const AllTypes = {
  render: () => <AllToastsStory />,
  name: 'All Toast Types',
};

// Demonstrates a success notification
export const SuccessToast = {
  render: () => {
    const Story = () => {
      useEffect(() => {
        setTimeout(() => {
          pubsub.emit('toast', {
            type: 'success',
            title: 'Success!',
            message: 'The operation was completed successfully.',
            duration: 0,
          });
        }, 100);
      }, []);
      return (
        <StoryContainer>
          <Toast />
        </StoryContainer>
      );
    };
    return <Story />;
  },
  name: 'Success',
};

// Demonstrates an error/danger notification
export const DangerToast = {
  render: () => {
    const Story = () => {
      useEffect(() => {
        setTimeout(() => {
          pubsub.emit('toast', {
            type: 'danger',
            title: 'Error!',
            message: 'Something went wrong. Please try again.',
            duration: 0,
          });
        }, 100);
      }, []);
      return (
        <StoryContainer>
          <Toast />
        </StoryContainer>
      );
    };
    return <Story />;
  },
  name: 'Danger',
};

// Demonstrates a warning notification
export const WarningToast = {
  render: () => {
    const Story = () => {
      useEffect(() => {
        setTimeout(() => {
          pubsub.emit('toast', {
            type: 'warning',
            title: 'Warning',
            message: 'This action may have unintended consequences.',
            duration: 0,
          });
        }, 100);
      }, []);
      return (
        <StoryContainer>
          <Toast />
        </StoryContainer>
      );
    };
    return <Story />;
  },
  name: 'Warning',
};

// Demonstrates an informational notification
export const InfoToast = {
  render: () => {
    const Story = () => {
      useEffect(() => {
        setTimeout(() => {
          pubsub.emit('toast', {
            type: 'info',
            title: 'Information',
            message: 'Your session will expire in 5 minutes.',
            duration: 0,
          });
        }, 100);
      }, []);
      return (
        <StoryContainer>
          <Toast />
        </StoryContainer>
      );
    };
    return <Story />;
  },
  name: 'Info',
};
