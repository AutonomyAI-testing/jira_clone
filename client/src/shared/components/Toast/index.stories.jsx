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

// Wrapper that positions the story content with proper height so fixed Toast is visible
const StoryWrapper = ({ children }) => (
  <div style={{ minHeight: '200px', position: 'relative', padding: '20px' }}>
    {children}
  </div>
);

export const Success = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'success',
        title: 'Issue updated',
        message: 'Your changes have been saved successfully.',
        duration: 0,
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StoryWrapper>
      <Toast />
    </StoryWrapper>
  );
};

export const Danger = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'danger',
        title: 'Error occurred',
        message: 'Something went wrong. Please try again.',
        duration: 0,
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StoryWrapper>
      <Toast />
    </StoryWrapper>
  );
};

export const Warning = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'warning',
        title: 'Warning',
        message: 'This action cannot be undone.',
        duration: 0,
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StoryWrapper>
      <Toast />
    </StoryWrapper>
  );
};

export const TitleOnly = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'success',
        title: 'Saved!',
        duration: 0,
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StoryWrapper>
      <Toast />
    </StoryWrapper>
  );
};

export const Multiple = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'success',
        title: 'Issue created',
        message: 'PROJ-42 has been created.',
        duration: 0,
      });
      pubsub.emit('toast', {
        type: 'danger',
        title: 'Upload failed',
        message: 'File size exceeds the 5MB limit.',
        duration: 0,
      });
      pubsub.emit('toast', {
        type: 'warning',
        title: 'Unsaved changes',
        message: 'You have unsaved changes in this issue.',
        duration: 0,
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StoryWrapper>
      <Toast />
    </StoryWrapper>
  );
};
