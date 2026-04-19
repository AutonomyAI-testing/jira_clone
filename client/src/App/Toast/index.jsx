import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import { Container, StyledToast, CloseIcon, Title, Message, LoadingSpinner } from './Styles';

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = ({ type = 'success', title, message, duration = 5, loading = false, disabled = false }) => {
      const id = uniqueId('toast-');

      setToasts(currentToasts => [...currentToasts, { id, type, title, message, loading, disabled }]);

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

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast
              key={toast.id}
              type={toast.type}
              disabled={toast.disabled}
              onClick={() => !toast.disabled && removeToast(toast.id)}
            >
              {toast.loading && <LoadingSpinner size={16} color="#fff" />}
              <CloseIcon type="close" />
              {toast.title && <Title>{toast.title}</Title>}
              {toast.message && <Message>{toast.message}</Message>}
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
