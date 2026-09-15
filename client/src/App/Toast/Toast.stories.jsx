import React from 'react';
import pubsub from 'sweet-pubsub';

import Toast from './index';
import { StyledToast, CloseIcon, Title, Message } from './Styles';

export default {
  title: 'App/Toast',
  parameters: {
    layout: 'fullscreen',
  },
};

// ─── Static stories: render Styles sub-components directly ───────────────────

/** 1. Success toast — green background, title only */
export const SuccessToast = {
  name: 'Success Toast',
  render: () => (
    <div style={{ position: 'relative', width: 360, height: 80, margin: '40px auto' }}>
      <StyledToast type="success" style={{ position: 'relative', marginBottom: 0 }}>
        <CloseIcon type="close" />
        <Title>Changes have been saved.</Title>
      </StyledToast>
    </div>
  ),
};

/** 2. Danger/Error toast — red background, title + message */
export const DangerToast = {
  name: 'Danger / Error Toast',
  render: () => (
    <div style={{ position: 'relative', width: 360, margin: '40px auto' }}>
      <StyledToast type="danger" style={{ position: 'relative', marginBottom: 0 }}>
        <CloseIcon type="close" />
        <Title>Error</Title>
        <Message>Something went wrong, please try again.</Message>
      </StyledToast>
    </div>
  ),
};

/** 3. Title only — no message */
export const TitleOnly = {
  name: 'Title Only',
  render: () => (
    <div style={{ position: 'relative', width: 360, height: 80, margin: '40px auto' }}>
      <StyledToast type="success" style={{ position: 'relative', marginBottom: 0 }}>
        <CloseIcon type="close" />
        <Title>Issue has been created successfully.</Title>
      </StyledToast>
    </div>
  ),
};

/** 4. Title + message */
export const TitleAndMessage = {
  name: 'Title + Message',
  render: () => (
    <div style={{ position: 'relative', width: 360, margin: '40px auto' }}>
      <StyledToast type="danger" style={{ position: 'relative', marginBottom: 0 }}>
        <CloseIcon type="close" />
        <Title>Authentication failed</Title>
        <Message>Your session has expired. Please log in again to continue.</Message>
      </StyledToast>
    </div>
  ),
};

/** 5. Multiple toasts stacked */
export const MultipleToasts = {
  name: 'Multiple Toasts Stacked',
  render: () => (
    <div style={{ width: 360, margin: '40px auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
      <StyledToast type="success" style={{ position: 'relative', marginBottom: 5 }}>
        <CloseIcon type="close" />
        <Title>Changes have been saved.</Title>
      </StyledToast>
      <StyledToast type="danger" style={{ position: 'relative', marginBottom: 5 }}>
        <CloseIcon type="close" />
        <Title>Error</Title>
        <Message>Something went wrong, please try again.</Message>
      </StyledToast>
      <StyledToast type="success" style={{ position: 'relative', marginBottom: 5 }}>
        <CloseIcon type="close" />
        <Title>Issue linked successfully.</Title>
      </StyledToast>
    </div>
  ),
};

// ─── Interactive story: real Toast component + pubsub trigger ─────────────────

const InteractiveWrapper = () => {
  const fireToast = (type, title, message) => {
    pubsub.emit('toast', { type, title, message, duration: 0 });
  };

  return (
    <div style={{ minHeight: 500, padding: 32, background: '#f4f5f7' }}>
      <h3 style={{ fontFamily: 'sans-serif', color: '#172b4d', marginBottom: 16 }}>
        Click a button to trigger a toast notification
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <button
          type="button"
          onClick={() => fireToast('success', 'Changes have been saved.')}
          style={{
            padding: '10px 20px',
            background: '#0B875B',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            fontSize: 14,
          }}
        >
          ✓ Success Toast
        </button>
        <button
          type="button"
          onClick={() => fireToast('danger', 'Error', 'Something went wrong, please try again.')}
          style={{
            padding: '10px 20px',
            background: '#E13C3C',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            fontSize: 14,
          }}
        >
          ✕ Error Toast
        </button>
        <button
          type="button"
          onClick={() => fireToast('success', 'Issue linked successfully.')}
          style={{
            padding: '10px 20px',
            background: '#0052cc',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            fontSize: 14,
          }}
        >
          + Link Toast
        </button>
      </div>
      <p style={{ fontFamily: 'sans-serif', color: '#5e6c84', fontSize: 13, marginTop: 16 }}>
        Toasts appear in the top-right corner. Click any toast to dismiss it.
      </p>
      {/* Full Toast component listens to pubsub events */}
      <Toast />
    </div>
  );
};

/** 6. Interactive demo — buttons fire pubsub events, full Toast renders in top-right */
export const InteractiveDemo = {
  name: 'Interactive Demo',
  render: () => <InteractiveWrapper />,
};
