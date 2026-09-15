import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'App/Toast',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 380, minHeight: 350, position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

// Helper: emit toasts after mount so the real component receives them via pubsub
const ToastWithMessages = ({ messages }) => {
  useEffect(() => {
    messages.forEach((msg, i) => {
      setTimeout(() => pubsub.emit('toast', { ...msg, duration: 0 }), i * 80);
    });
  }, []);
  return <Toast />;
};

export const MultipleToasts = {
  render: () => (
    <ToastWithMessages
      messages={[
        { type: 'success', title: 'Issue created', message: 'PRJ-42 was added to the backlog.' },
        { type: 'danger', title: 'Permission denied', message: "You don't have access to delete this issue." },
        { type: 'success', message: 'Comment posted.' },
        { type: 'danger', message: 'Network error. Please check your connection.' },
      ]}
    />
  ),
};

export const SuccessWithTitleAndMessage = {
  render: () => (
    <ToastWithMessages
      messages={[{ type: 'success', title: 'Issue created successfully', message: 'Your issue has been added to the board.' }]}
    />
  ),
};

export const ErrorWithTitleAndMessage = {
  render: () => (
    <ToastWithMessages
      messages={[{ type: 'danger', title: 'Something went wrong', message: 'Unable to save the issue. Please try again.' }]}
    />
  ),
};

export const SuccessMessageOnly = {
  render: () => (
    <ToastWithMessages
      messages={[{ type: 'success', message: 'Changes saved successfully.' }]}
    />
  ),
};

export const ContainerPositioningContext = {
  render: () => (
    <div style={{ position: 'relative', height: 300, width: 600, background: '#f4f5f7', border: '2px dashed #c1c7d0', borderRadius: 4 }}>
      <div style={{ padding: 20, color: '#42526e', fontSize: 14 }}>
        The Container is fixed to the viewport (right: 30px, top: 50px).
        In production it overlays the entire app.
      </div>
      <ToastWithMessages
        messages={[{ type: 'success', title: 'Notification anchored here', message: 'This shows the Container positioning context.' }]}
      />
    </div>
  ),
};
