import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import {
  Container,
  StyledToast,
  IconWrapper,
  ContentWrapper,
  CloseButton,
  Title,
  Message,
  ToastIcon,
} from './Styles';

// Maps toast type to appropriate icon name. Falls back to 'help' for unknown types.
const getIconByType = type => {
  const iconMap = {
    success: 'shipping',
    danger: 'close',
    warning: 'help',
    info: 'help',
  };
  return iconMap[type] || 'help';
};

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  // Subscribe to pubsub 'toast' events and manage toast lifecycle
  useEffect(() => {
    const addToast = ({ type = 'success', title, message, duration = 5 }) => {
      const id = uniqueId('toast-');

      setToasts(currentToasts => [...currentToasts, { id, type, title, message }]);

      // Auto-dismiss toasts after specified duration (in seconds). Duration of 0 means persist until user closes.
      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on('toast', addToast);

    // Clean up subscription on unmount to prevent memory leaks
    return () => {
      pubsub.off('toast', addToast);
    };
  }, []);

  // Remove a toast from the stack by ID
  const removeToast = id => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  // Handle close button click
  const handleCloseClick = e => {
    e.stopPropagation();
    removeToast(e.currentTarget.dataset.toastId);
  };

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast key={toast.id} type={toast.type}>
              <IconWrapper>
                <ToastIcon type={getIconByType(toast.type)} size={20} />
              </IconWrapper>
              <ContentWrapper>
                {toast.title && <Title>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </ContentWrapper>
              <CloseButton
                type="button"
                aria-label="Close notification"
                data-toast-id={toast.id}
                onClick={handleCloseClick}
              >
                <ToastIcon type="close" size={20} />
              </CloseButton>
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
