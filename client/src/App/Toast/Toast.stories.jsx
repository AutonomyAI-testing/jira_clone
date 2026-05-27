import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';
import { Container, StyledToast, ToastIcon, CloseIcon, Content, Title, Message } from './Styles';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Default story: Renders the live Toast container that listens to pubsub events.
 * Auto-dispatches sample toasts on mount to show the component in action.
 */
export const Default = () => {
  useEffect(() => {
    const toasts = [
      {
        type: 'success',
        title: 'Changes Saved',
        message: 'Your project settings were updated.',
        duration: 0,
      },
      {
        type: 'danger',
        title: 'Action Failed',
        message: 'Something went wrong. Please try again.',
        duration: 0,
      },
      {
        type: 'warning',
        title: 'Storage Warning',
        message: "You're using 90% of your storage quota.",
        duration: 0,
      },
      {
        type: 'info',
        title: 'New Update Available',
        message: 'Refresh to get the latest features.',
        duration: 0,
      },
      {
        type: 'wizard',
        title: 'Wizard Mode Active',
        message: 'Spells and enchantments are now available.',
        duration: 0,
      },
    ];
    toasts.forEach((toast, i) => {
      setTimeout(() => pubsub.emit('toast', toast), i * 150);
    });
  }, []);

  return <Toast />;
};

/**
 * AllVariants story: Static rendering of all toast variants for visual reference.
 * Uses direct JSX composition without pubsub dependencies for visual testing.
 */
export const AllVariants = () => (
  <Container style={{ position: 'static', padding: '20px' }}>
    {[
      {
        id: '1',
        type: 'success',
        title: 'Changes Saved',
        message: 'Your project settings were updated successfully.',
      },
      {
        id: '2',
        type: 'danger',
        title: 'Action Failed',
        message: 'Something went wrong. Please try again later.',
      },
      {
        id: '3',
        type: 'warning',
        title: 'Storage Warning',
        message: "You're using 90% of your storage. Consider archiving.",
      },
      {
        id: '4',
        type: 'info',
        title: 'New Update Available',
        message: 'A new version is available. Refresh to update.',
      },
      {
        id: '5',
        type: 'wizard',
        title: 'Wizard Mode Active',
        message: 'Spells and enchantments are now available in your toolkit.',
      },
    ].map(toast => (
      <StyledToast key={toast.id} type={toast.type}>
        <ToastIcon
          type={
            {
              success: 'shipping',
              danger: 'close',
              warning: 'help',
              info: 'help',
              wizard: 'feedback',
            }[toast.type] || 'feedback'
          }
        />
        <Content>
          {toast.title && <Title>{toast.title}</Title>}
          {toast.message && <Message>{toast.message}</Message>}
        </Content>
        <CloseIcon type="close" />
      </StyledToast>
    ))}
  </Container>
);
