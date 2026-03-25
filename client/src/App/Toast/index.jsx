import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import { Container, StyledToast, CloseIcon, Title, Message, IconContainer, ToastContent } from './Styles';

const getToastIcon = type => {
  const icons = {
    success: '\u2713',
    danger: '\u2715',
    warning: '\u26a0',
    info: '\u2139',
  };
  return icons[type] || icons.success;
};

const getToastRole = type => {
  return type === 'danger' ? 'alert' : 'status';
};

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = ({ type = 'success', title, message, duration = 5 }) => {
      const id = uniqueId('toast-');

      setToasts(currentToasts => [...currentToasts, { id, type, title, message }]);

      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on('toast', addToast);

    return () => {
      pubsub.off('toast', addToast);
    };
  }, []);

  const removeToast = id => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  const handleCloseKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      removeToast(id);
    }
  };

  return (
    <Container aria-live="polite" aria-atomic="true">
      <TransitionGroup>
        {toasts.map(toast => {
          const ariaLabel = `${toast.type} notification: ${toast.title}${toast.message ? ` - ${toast.message}` : ''}`;
          return (
            <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
              <StyledToast
                key={toast.id}
                type={toast.type}
                role={getToastRole(toast.type)}
                aria-label={ariaLabel}
              >
                <IconContainer>{getToastIcon(toast.type)}</IconContainer>
                <ToastContent>
                  {toast.title && <Title>{toast.title}</Title>}
                  {toast.message && <Message>{toast.message}</Message>}
                </ToastContent>
                <CloseIcon
                  type="close"
                  tabIndex={0}
                  role="button"
                  aria-label="Close notification"
                  onKeyDown={e => handleCloseKeyDown(e, toast.id)}
                  onClick={() => removeToast(toast.id)}
                />
              </StyledToast>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
