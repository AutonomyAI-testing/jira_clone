import React from 'react';

import Toast from './index';
import { Container, StyledToast, CloseIcon, Title, Message } from './Styles';

// Styles for story layout — positions toast in a fixed area for preview
const STORY_WRAPPER_STYLES = { position: 'relative', right: 'auto', top: 'auto' };
const SMALL_CONTAINER_HEIGHT = 120;
const MEDIUM_CONTAINER_HEIGHT = 100;
const LARGE_CONTAINER_HEIGHT = 280;

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
  },
};

export const Success = {
  name: 'Success Toast',
  render: () => (
    <div style={{ position: 'relative', minHeight: SMALL_CONTAINER_HEIGHT }}>
      <Container style={STORY_WRAPPER_STYLES}>
        <StyledToast type="success" onClick={() => {}}>
          <CloseIcon type="close" />
          <Title>Issue has been successfully updated</Title>
          <Message>Your changes have been saved and are now live.</Message>
        </StyledToast>
      </Container>
    </div>
  ),
};

export const Error = {
  name: 'Error Toast',
  render: () => (
    <div style={{ position: 'relative', minHeight: SMALL_CONTAINER_HEIGHT }}>
      <Container style={STORY_WRAPPER_STYLES}>
        <StyledToast type="danger" onClick={() => {}}>
          <CloseIcon type="close" />
          <Title>Something went wrong</Title>
          <Message>Failed to save changes. Please try again.</Message>
        </StyledToast>
      </Container>
    </div>
  ),
};

export const TitleOnly = {
  name: 'Title Only (No Message)',
  render: () => (
    <div style={{ position: 'relative', minHeight: MEDIUM_CONTAINER_HEIGHT }}>
      <Container style={STORY_WRAPPER_STYLES}>
        <StyledToast type="success" onClick={() => {}}>
          <CloseIcon type="close" />
          <Title>Issue created successfully</Title>
        </StyledToast>
      </Container>
    </div>
  ),
};

export const Stacked = {
  name: 'Stacked Toasts',
  render: () => (
    <div style={{ position: 'relative', minHeight: LARGE_CONTAINER_HEIGHT }}>
      <Container style={STORY_WRAPPER_STYLES}>
        <StyledToast type="success" onClick={() => {}}>
          <CloseIcon type="close" />
          <Title>Issue updated</Title>
          <Message>Your changes have been saved.</Message>
        </StyledToast>
        <StyledToast type="danger" onClick={() => {}}>
          <CloseIcon type="close" />
          <Title>Upload failed</Title>
          <Message>The file could not be uploaded. Maximum size is 5MB.</Message>
        </StyledToast>
        <StyledToast type="warning" onClick={() => {}}>
          <CloseIcon type="close" />
          <Title>Session expiring soon</Title>
          <Message>Your session will expire in 5 minutes.</Message>
        </StyledToast>
      </Container>
    </div>
  ),
};
