import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';

import Toast from 'App/Toast';
import ToastShowcase from '.';

// Reusable demo toast messages for consistent testing across story variants
// Each message matches the type's purpose and helps verify the visual appearance
const TOAST_MESSAGES = {
  success: { title: 'Changes saved!', message: 'Your project settings have been updated.' },
  error: { title: 'Something went wrong', message: 'Unable to save changes. Please try again.' },
  warning: { title: 'Heads up!', message: 'This action will affect all project members.' },
  info: { title: 'New update available', message: 'Refresh the page to see the latest changes.' },
};

export default {
  title: 'Project/ToastShowcase',
  component: ToastShowcase,
  parameters: {
    layout: 'padded',
  },
};

// Primary story: complete showcase page with all 4 variant cards and custom builder
// Users can interact with cards to see live toast previews
export const Default = () => (
  <div style={{ padding: '24px', background: '#f4f5f7', minHeight: '100vh' }}>
    <Toast />
    <ToastShowcase />
  </div>
);

// Story: demonstrates the success toast with icon, color, and auto-dismiss behavior
export const SuccessToast = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'success',
        ...TOAST_MESSAGES.success,
        duration: 0,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{ padding: '24px', background: '#f4f5f7', minHeight: '300px' }}>
      <Toast />
      <p style={{ color: '#6b7280', fontFamily: 'sans-serif' }}>Success toast appears in the top-right corner.</p>
    </div>
  );
};

// Story: demonstrates the error toast with icon, color, and persistent behavior
export const ErrorToast = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'danger',
        ...TOAST_MESSAGES.error,
        duration: 0,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{ padding: '24px', background: '#f4f5f7', minHeight: '300px' }}>
      <Toast />
      <p style={{ color: '#6b7280', fontFamily: 'sans-serif' }}>Error toast appears in the top-right corner.</p>
    </div>
  );
};

// Story: demonstrates the warning toast with icon, color, and auto-dismiss behavior
export const WarningToast = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'warning',
        ...TOAST_MESSAGES.warning,
        duration: 0,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{ padding: '24px', background: '#f4f5f7', minHeight: '300px' }}>
      <Toast />
      <p style={{ color: '#6b7280', fontFamily: 'sans-serif' }}>Warning toast appears in the top-right corner.</p>
    </div>
  );
};

// Story: demonstrates the info toast with icon, color, and auto-dismiss behavior
export const InfoToast = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      pubsub.emit('toast', {
        type: 'info',
        ...TOAST_MESSAGES.info,
        duration: 0,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={{ padding: '24px', background: '#f4f5f7', minHeight: '300px' }}>
      <Toast />
      <p style={{ color: '#6b7280', fontFamily: 'sans-serif' }}>Info toast appears in the top-right corner.</p>
    </div>
  );
};

// Story: displays all 4 toast types stacked vertically with staggered timing
// Demonstrates how multiple toasts are rendered together without overlap
export const AllVariants = () => {
  useEffect(() => {
    const toastConfigs = [
      { type: 'success', ...TOAST_MESSAGES.success, delay: 200 },
      { type: 'danger', ...TOAST_MESSAGES.error, delay: 400 },
      { type: 'warning', ...TOAST_MESSAGES.warning, delay: 600 },
      { type: 'info', ...TOAST_MESSAGES.info, delay: 800 },
    ];

    const timers = toastConfigs.map(config => {
      const { delay, ...toastData } = config;
      return setTimeout(() => {
        pubsub.emit('toast', { ...toastData, duration: 0 });
      }, delay);
    });
    return () => timers.forEach(clearTimeout);
  }, []);
  return (
    <div style={{ padding: '24px', background: '#f4f5f7', minHeight: '400px', position: 'relative' }}>
      <Toast />
      <p style={{ color: '#6b7280', fontFamily: 'sans-serif' }}>All 4 toast variants appear stacked in the top-right corner.</p>
    </div>
  );
};
