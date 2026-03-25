import React from 'react';
import styled from 'styled-components';

// Inline styled components for story
const StyledToast = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: ${props => {
    const colors = {
      success: '#0B875B',
      danger: '#E13C3C',
      warning: '#F89C1C',
      info: '#0052cc',
    };
    return colors[props.type] || colors.success;
  }};
  cursor: pointer;
  transition: all 0.15s;
  transform: translateZ(0);
`;

const IconContainer = styled.div`
  flex-shrink: 0;
  width: 20px;
  margin-right: 10px;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  padding-top: 1px;
`;

const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.div`
  font-family: 'CircularStdMedium', sans-serif;
  font-size: 15px;
  font-weight: normal;
`;

const Message = styled.div`
  padding: 8px 0 0 0;
  white-space: pre-wrap;
  font-family: 'CircularStdMedium', sans-serif;
  font-size: 14px;
  font-weight: normal;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 13px;
  right: 14px;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`;

export default {
  title: 'Components/Toast',
  parameters: {
    layout: 'fullscreen',
  },
};

const MockToastDisplay = ({ type, title, message }) => {
  const getToastIcon = (toastType) => {
    const icons = {
      success: '\u2713',
      danger: '\u2715',
      warning: '\u26a0',
      info: '\u2139',
    };
    return icons[toastType] || icons.success;
  };

  const getToastRole = (toastType) => {
    return toastType === 'danger' ? 'alert' : 'status';
  };

  const handleCloseKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
    }
  };

  const ariaLabel = `${type} notification: ${title}${message ? ` - ${message}` : ''}`;

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      <StyledToast
        type={type}
        role={getToastRole(type)}
        aria-label={ariaLabel}
      >
        <IconContainer>{getToastIcon(type)}</IconContainer>
        <ToastContent>
          {title && <Title>{title}</Title>}
          {message && <Message>{message}</Message>}
        </ToastContent>
        <CloseButton
          tabIndex={0}
          role="button"
          aria-label="Close notification"
          onKeyDown={handleCloseKeyDown}
        >
          ×
        </CloseButton>
      </StyledToast>
      <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        Try tabbing to the close button and pressing Enter/Escape to dismiss
      </p>
    </div>
  );
};

export const Success = () => (
  <MockToastDisplay
    type="success"
    title="Success!"
    message="Your changes have been saved."
  />
);

export const Danger = () => (
  <MockToastDisplay
    type="danger"
    title="Error!"
    message="Something went wrong. Please try again."
  />
);

export const Warning = () => (
  <MockToastDisplay
    type="warning"
    title="Warning"
    message="Please review before proceeding."
  />
);

export const Info = () => (
  <MockToastDisplay
    type="info"
    title="Info"
    message="Here is some information you should know."
  />
);

export const SuccessNoMessage = () => (
  <MockToastDisplay
    type="success"
    title="Saved!"
  />
);

export const DangerNoMessage = () => (
  <MockToastDisplay
    type="danger"
    title="Login failed"
  />
);

export const AllTypes = () => (
  <div style={{ padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
    <h2 style={{ marginBottom: '30px' }}>All Toast Types</h2>
    <div style={{ marginBottom: '40px' }}>
      <h3>Success Toast (✓ Check mark)</h3>
      <MockToastDisplay
        type="success"
        title="Success!"
        message="Green background with check mark icon"
      />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>Danger Toast (✕ X mark)</h3>
      <MockToastDisplay
        type="danger"
        title="Error"
        message="Red background with X mark icon"
      />
    </div>
    <div style={{ marginBottom: '40px' }}>
      <h3>Warning Toast (⚠ Warning)</h3>
      <MockToastDisplay
        type="warning"
        title="Warning"
        message="Orange background with warning icon"
      />
    </div>
    <div>
      <h3>Info Toast (ⓘ Info)</h3>
      <MockToastDisplay
        type="info"
        title="Information"
        message="Blue background with info icon"
      />
    </div>
  </div>
);
