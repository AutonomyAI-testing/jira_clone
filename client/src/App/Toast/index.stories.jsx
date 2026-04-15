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

// Helper to emit a toast after a small delay so the component is mounted first
const EmitToast = ({ toastProps }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', toastProps);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return null;
};

export const Success = {
  render: () => (
    <div style={{ position: 'relative', width: '400px', height: '200px' }}>
      <EmitToast toastProps={{ type: 'success', title: 'Changes saved', message: 'Your project settings have been updated successfully.', duration: 0 }} />
      <Toast />
    </div>
  ),
};

export const Error = {
  render: () => (
    <div style={{ position: 'relative', width: '400px', height: '200px' }}>
      <EmitToast toastProps={{ type: 'danger', title: 'Error', message: 'Something went wrong. Please try again.', duration: 0 }} />
      <Toast />
    </div>
  ),
};

export const Warning = {
  render: () => (
    <div style={{ position: 'relative', width: '400px', height: '200px' }}>
      <EmitToast toastProps={{ type: 'warning', title: 'Warning', message: 'This action cannot be undone.', duration: 0 }} />
      <Toast />
    </div>
  ),
};

export const TitleOnly = {
  render: () => (
    <div style={{ position: 'relative', width: '400px', height: '200px' }}>
      <EmitToast toastProps={{ type: 'success', title: 'Issue created successfully', duration: 0 }} />
      <Toast />
    </div>
  ),
};

export const MultipleToasts = {
  render: () => {
    const MultiToastEmitter = () => {
      useEffect(() => {
        const t1 = setTimeout(() => pubsub.emit('toast', { type: 'success', title: 'Issue created', duration: 0 }), 100);
        const t2 = setTimeout(() => pubsub.emit('toast', { type: 'danger', title: 'Error', message: 'Failed to load data.', duration: 0 }), 300);
        const t3 = setTimeout(() => pubsub.emit('toast', { type: 'warning', title: 'Warning', message: 'Session expires soon.', duration: 0 }), 500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
      }, []);
      return null;
    };
    return (
      <div style={{ position: 'relative', width: '400px', height: '400px' }}>
        <MultiToastEmitter />
        <Toast />
      </div>
    );
  },
};
