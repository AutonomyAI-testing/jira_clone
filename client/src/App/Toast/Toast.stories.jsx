import React from 'react';
import styled from 'styled-components';

import { StyledToast, CloseIcon, Title, Message } from './Styles';

export default {
  title: 'App/Toast',
  parameters: {
    layout: 'fullscreen',
  },
};

// A wrapper to position toasts in a visible area (instead of fixed top-right)
const StoryContainer = styled.div`
  padding: 20px;
  background: #f4f5f7;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

// Inner container matching the real Container but relative (not fixed) for stories
const ToastStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Success = {
  render: () => (
    <StoryContainer>
      <ToastStack>
        <StyledToast type="success">
          <CloseIcon type="close" />
          <Title>Changes have been saved</Title>
          <Message>Your issue has been updated successfully.</Message>
        </StyledToast>
      </ToastStack>
    </StoryContainer>
  ),
};

export const Danger = {
  render: () => (
    <StoryContainer>
      <ToastStack>
        <StyledToast type="danger">
          <CloseIcon type="close" />
          <Title>Something went wrong</Title>
          <Message>An error occurred while saving your changes. Please try again.</Message>
        </StyledToast>
      </ToastStack>
    </StoryContainer>
  ),
};

export const MultipleToasts = {
  render: () => (
    <StoryContainer>
      <ToastStack>
        <StyledToast type="success">
          <CloseIcon type="close" />
          <Title>Issue created</Title>
          <Message>A new issue has been added to the board.</Message>
        </StyledToast>
        <StyledToast type="danger">
          <CloseIcon type="close" />
          <Title>Upload failed</Title>
          <Message>The file could not be uploaded. Max size is 10MB.</Message>
        </StyledToast>
        <StyledToast type="warning">
          <CloseIcon type="close" />
          <Title>Session expiring</Title>
          <Message>Your session will expire in 5 minutes. Save your work.</Message>
        </StyledToast>
      </ToastStack>
    </StoryContainer>
  ),
};

export const MessageOnly = {
  render: () => (
    <StoryContainer>
      <ToastStack>
        <StyledToast type="success">
          <CloseIcon type="close" />
          <Message>Copied to clipboard.</Message>
        </StyledToast>
      </ToastStack>
    </StoryContainer>
  ),
};
