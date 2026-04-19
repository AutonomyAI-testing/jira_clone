import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import {
  Container,
  StyledToast,
  ToastIcon,
  ToastContent,
  CloseIcon,
  Title,
  Message,
} from './Styles';

/**
 * Maps toast notification types to their corresponding icon types.
 * Uses visual icons to reinforce the toast's message urgency and type.
 */
const getIconForType = type => {
  const iconMap = {
    success: 'issues', // Checkmark-like icon for success
    danger: 'close', // X icon for errors
    warning: 'feedback', // Alert icon for warnings
    info: 'help', // Question mark icon for info
  };
  return iconMap[type] || 'help'; // Default to help icon if type is unknown
};

/**
 * Toast notification component that displays temporary messages to the user.
 * Listens to the 'toast' pubsub event to add new notifications.
 * Automatically removes toasts after their specified duration expires.
 */
const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Handle incoming toast notifications from pubsub
    const addToast = ({ type = 'success', title, message, duration = 5 }) => {
      const id = uniqueId('toast-');

      setToasts((currentToasts) => [
        ...currentToasts,
        { id, type, title, message },
      ]);

      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on('toast', addToast);

    return () => {
      pubsub.off('toast', addToast);
    };
  }, []);

  // Remove a toast notification from the queue by ID
  const removeToast = id => {
    setToasts((currentToasts) =>
      currentToasts.filter(toast => toast.id !== id),
    );
  };

  return (
    <Container>
      <TransitionGroup>
        {toasts.map((toast) => (
          <CSSTransition
            key={toast.id}
            classNames="jira-toast"
            timeout={200}
          >
            <StyledToast
              key={toast.id}
              type={toast.type}
              onClick={() => removeToast(toast.id)}
            >
              <ToastIcon type={getIconForType(toast.type)} />
              <ToastContent>
                {toast.title && <Title>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </ToastContent>
              <CloseIcon type="close" />
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
