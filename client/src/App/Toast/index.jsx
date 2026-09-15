import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import WizardIcon from 'shared/components/WizardIcon';

import { Container, StyledToast, CloseIcon, IconWrapper, Title, Message } from './Styles';

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Subscribe to toast events from the pubsub system
    const addToast = ({ type = 'success', title, message, duration = 5 }) => {
      const id = uniqueId('toast-');

      setToasts(currentToasts => [...currentToasts, { id, type, title, message }]);

      // Auto-dismiss toast after specified duration (in seconds), or keep open if duration is 0
      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on('toast', addToast);

    // Cleanup subscription on unmount
    return () => {
      pubsub.off('toast', addToast);
    };
  }, []);

  // Remove a toast by ID (called on timeout or user click)
  const removeToast = id => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast key={toast.id} type={toast.type} onClick={() => removeToast(toast.id)}>
              {/* Wizard toasts display a custom icon; other toast types use a close button only */}
              {toast.type === 'wizard' && (
                <IconWrapper>
                  <WizardIcon size={48} />
                </IconWrapper>
              )}
              {/* Close icon shown on all toast types */}
              <CloseIcon type="close" />
              {/* Title and message are optional and only rendered if provided */}
              {toast.title && <Title type={toast.type}>{toast.title}</Title>}
              {toast.message && <Message type={toast.type}>{toast.message}</Message>}
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

// Toast uses a pubsub system for displaying notifications globally.
// Usage: import { toast } from 'shared/utils/toast';
//   toast.show({ type: 'success', title: '...', message: '...', duration: 5 });
//   toast.wizard('Title', 'Message');  // For wizard-type toasts
export default Toast;
