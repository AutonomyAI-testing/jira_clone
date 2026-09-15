import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import {
  Container,
  StyledToast,
  IconWrapper,
  ContentWrapper,
  CloseIcon,
  Title,
  Message,
} from './Styles';

// Returns emoji icon for toast type - matches color accent and provides visual distinction
const getIconForType = type => {
  switch (type) {
    case 'danger':
      return '⚠'; // Warning symbol for errors
    case 'warning':
      return '✦'; // Sparkle for warnings
    case 'success':
    default:
      return '✦'; // Sparkle for success
  }
};

// Toast notification component - displays stack of dismissible toasts in fixed position
// Listens to pubsub 'toast' event and renders notifications with auto-dismiss after duration
const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Handler receives toast data from pubsub and adds it to local state
    const addToast = ({ type = 'success', title, message, duration = 5 }) => {
      const id = uniqueId('toast-');

      setToasts(currentToasts => [...currentToasts, { id, type, title, message }]);

      // Auto-dismiss after duration (in seconds). If duration is 0, toast persists until clicked
      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on('toast', addToast);

    // Cleanup: remove listener when component unmounts
    return () => {
      pubsub.off('toast', addToast);
    };
  }, []);

  // Remove toast from queue (called on dismiss or auto-timeout)
  const removeToast = id => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast key={toast.id} type={toast.type} onClick={() => removeToast(toast.id)}>
              <CloseIcon type="close" />
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <IconWrapper type={toast.type}>{getIconForType(toast.type)}</IconWrapper>
                <ContentWrapper>
                  {toast.title && <Title>{toast.title}</Title>}
                  {toast.message && <Message>{toast.message}</Message>}
                </ContentWrapper>
              </div>
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
