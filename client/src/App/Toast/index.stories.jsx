import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';

import Toast from './index';
import { Container, StyledToast, CloseIcon, Title, Message } from './Styles';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

// StoryContainer: Wraps toasts in a flex layout to display them in a centered column.
// The Toast component uses fixed positioning for production; this override allows
// the stories to show toasts relative to the container without fixed positioning.
const StoryContainer = ({ children, height = '200px' }) => (
  <div style={{ background: '#f4f5f7', minHeight: height, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '40px 20px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '320px' }}>
      {children}
    </div>
  </div>
);

// Static visual stories: Display hardcoded toast variations without relying on pubsub.
// These show the visual output for each toast type and content configuration.
export const SuccessToast = () => (
  <StoryContainer>
    <StyledToast type="success" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Title>Issue updated</Title>
      <Message>Your issue has been saved successfully.</Message>
    </StyledToast>
  </StoryContainer>
);
SuccessToast.storyName = 'Success Toast';

export const ErrorToast = () => (
  <StoryContainer>
    <StyledToast type="danger" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Title>Something went wrong</Title>
      <Message>Failed to update the issue. Please try again.</Message>
    </StyledToast>
  </StoryContainer>
);
ErrorToast.storyName = 'Error Toast';

export const WarningToast = () => (
  <StoryContainer>
    <StyledToast type="warning" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Title>Session expiring</Title>
      <Message>Your session will expire in 5 minutes. Please save your work.</Message>
    </StyledToast>
  </StoryContainer>
);
WarningToast.storyName = 'Warning Toast';

export const InfoToast = () => (
  <StoryContainer>
    <StyledToast type="primary" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Title>New update available</Title>
      <Message>A new version has been deployed. Refresh to get the latest changes.</Message>
    </StyledToast>
  </StoryContainer>
);
InfoToast.storyName = 'Info Toast';

export const TitleOnly = () => (
  <StoryContainer height="150px">
    <StyledToast type="success" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Title>Changes saved</Title>
    </StyledToast>
  </StoryContainer>
);
TitleOnly.storyName = 'Title Only';

export const MessageOnly = () => (
  <StoryContainer height="150px">
    <StyledToast type="danger" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Message>An unexpected error occurred. Please contact support.</Message>
    </StyledToast>
  </StoryContainer>
);
MessageOnly.storyName = 'Message Only';

export const ToastStack = () => (
  <StoryContainer height="400px">
    <StyledToast type="success" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Title>Issue created</Title>
      <Message>PROJ-42 has been created and added to the backlog.</Message>
    </StyledToast>
    <StyledToast type="warning" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Title>Approaching limit</Title>
      <Message>You have 5 issues remaining in your sprint capacity.</Message>
    </StyledToast>
    <StyledToast type="danger" style={{ position: 'relative', margin: 0 }}>
      <CloseIcon type="close" />
      <Title>Upload failed</Title>
      <Message>The attachment could not be uploaded. Max file size is 10MB.</Message>
    </StyledToast>
  </StoryContainer>
);
ToastStack.storyName = 'Toast Stack (Multiple)';

// Live pubsub-driven stories: Demonstrate the Toast component receiving messages
// via the pubsub event system (as it does in production).
export const LiveToastContainer = () => {
  useEffect(() => {
    const timers = [];
    // duration: 0 means toasts persist indefinitely (no auto-dismiss)
    // Stagger emissions by 300ms to show the stacking behavior
    const toasts = [
      { type: 'success', title: 'Connected', message: 'Real-time updates are active.', duration: 0 },
      { type: 'danger', title: 'Error', message: 'Failed to sync with server.', duration: 0 },
      { type: 'warning', title: 'Warning', message: 'Low disk space detected.', duration: 0 },
      { type: 'primary', title: 'Info', message: 'Scheduled maintenance at 3 AM.', duration: 0 },
    ];

    toasts.forEach((toast, i) => {
      timers.push(setTimeout(() => pubsub.emit('toast', toast), i * 300));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ position: 'relative', height: '500px', background: '#f4f5f7', padding: '20px' }}>
      <p style={{ color: '#42526E', fontFamily: 'sans-serif', fontSize: '14px' }}>
        Toast notifications appear in the top-right corner via pubsub events.
        Click any toast to dismiss it.
      </p>
      <Toast />
    </div>
  );
};
LiveToastContainer.storyName = 'Live Container (pubsub)';

export const AllTypes = () => (
  <StoryContainer height="500px">
    {['success', 'danger', 'warning', 'primary'].map(type => (
      <StyledToast key={type} type={type} style={{ position: 'relative', margin: 0 }}>
        <CloseIcon type="close" />
        <Title style={{ textTransform: 'capitalize' }}>{type} notification</Title>
        <Message>This is a {type} toast message example.</Message>
      </StyledToast>
    ))}
  </StoryContainer>
);
AllTypes.storyName = 'All Types';
