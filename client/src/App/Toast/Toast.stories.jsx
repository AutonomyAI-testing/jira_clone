import React from 'react';
import { StyledToast, CloseIcon, Title, Message } from './Styles';

const ToastWrapper = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '30px 20px', minHeight: '120px' }}>
    <div style={{ width: 340 }}>
      {children}
    </div>
  </div>
);

export default {
  title: 'App/Toast',
  parameters: {
    layout: 'padded',
  },
};

export const SuccessToast = () => (
  <ToastWrapper>
    <StyledToast type="success">
      <CloseIcon type="close" />
      <Title>Changes saved</Title>
      <Message>Your issue has been updated successfully.</Message>
    </StyledToast>
  </ToastWrapper>
);

export const DangerToast = () => (
  <ToastWrapper>
    <StyledToast type="danger">
      <CloseIcon type="close" />
      <Title>Something went wrong</Title>
      <Message>An error occurred while saving your changes. Please try again.</Message>
    </StyledToast>
  </ToastWrapper>
);

export const TitleOnlyToast = () => (
  <ToastWrapper>
    <StyledToast type="warning">
      <CloseIcon type="close" />
      <Title>Action required</Title>
    </StyledToast>
  </ToastWrapper>
);

export const MultipleToasts = () => (
  <ToastWrapper>
    <StyledToast type="success" style={{ marginBottom: 5 }}>
      <CloseIcon type="close" />
      <Title>Issue created</Title>
      <Message>A new issue has been added to the backlog.</Message>
    </StyledToast>
    <StyledToast type="danger" style={{ marginBottom: 5 }}>
      <CloseIcon type="close" />
      <Title>Delete failed</Title>
      <Message>Could not delete the issue. You may not have permission.</Message>
    </StyledToast>
    <StyledToast type="warning" style={{ marginBottom: 5 }}>
      <CloseIcon type="close" />
      <Title>Session expiring soon</Title>
    </StyledToast>
  </ToastWrapper>
);
