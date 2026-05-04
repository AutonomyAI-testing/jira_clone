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

const ToastStage = ({ children, height = 200 }) =>
  React.createElement(
    'div',
    {
      style: {
        position: 'relative',
        height,
        width: '100%',
        background: '#f4f5f7',
      },
    },
    children,
  );

const createToastStory = (toastConfig, stageHeight = 130) => ({
  render: () => {
    const [shown, setShown] = React.useState(false);
    useEffect(() => {
      if (!shown) {
        setShown(true);
        if (Array.isArray(toastConfig)) {
          toastConfig.forEach((config, index) => {
            setTimeout(() => {
              pubsub.emit('toast', { ...config, duration: 0 });
            }, index * 150);
          });
        } else {
          pubsub.emit('toast', { ...toastConfig, duration: 0 });
        }
      }
    }, [shown]);
    return React.createElement(
      ToastStage,
      { height: stageHeight },
      React.createElement(Toast, null),
    );
  },
});

export const AllVariants = createToastStory(
  [
    {
      type: 'success',
      title: 'Success',
      message: 'Your changes have been saved successfully.',
    },
    {
      type: 'danger',
      title: 'Error',
      message: 'Something went wrong. Please try again.',
    },
    {
      type: 'warning',
      title: 'Warning',
      message: 'Your session will expire soon.',
    },
    {
      type: 'info',
      title: 'Info',
      message: 'A new version is available.',
    },
  ],
  320,
);

export const SuccessExample = createToastStory({
  type: 'success',
  title: 'Issue created',
  message: 'Your new issue has been added to the backlog.',
});

export const DangerExample = createToastStory({
  type: 'danger',
  title: 'Failed to save',
  message: 'We could not save your changes. Please check your connection and try ' + 'again.',
});

export const WarningExample = createToastStory({
  type: 'warning',
  title: 'Low disk space',
  message: 'You are running low on storage. Consider cleaning up old files.',
});

export const InfoExample = createToastStory({
  type: 'info',
  title: 'Heads up',
  message: 'Scheduled maintenance will begin at midnight tonight.',
});

export const LongMessage = createToastStory(
  {
    type: 'success',
    title: 'Bulk update complete',
    message:
      'All 47 issues in the sprint have been updated with the new priority ' +
      'values. The board has been refreshed to reflect the latest changes.',
  },
  160,
);

export const TitleOnly = createToastStory(
  {
    type: 'success',
    title: 'Saved!',
  },
  110,
);

export const StackingExample = createToastStory(
  [
    {
      type: 'success',
      title: 'First toast',
      message: 'This appeared first.',
    },
    {
      type: 'warning',
      title: 'Second toast',
      message: 'This appeared second.',
    },
    {
      type: 'danger',
      title: 'Third toast',
      message: 'This appeared third.',
    },
  ],
  320,
);
