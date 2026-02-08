import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import { Container, StyledToast, CloseIcon, Title, Message, UndoButton } from './Styles';

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const addToast = ({ type = 'success', title, message, duration = 5, onUndo }) => {
      const id = uniqueId('toast-');

      setToasts(currentToasts => [...currentToasts, { id, type, title, message, onUndo }]);

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

  const handleUndo = (id, onUndo) => {
    if (onUndo) {
      onUndo();
      removeToast(id);
    }
  };

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast key={toast.id} type={toast.type} hasUndo={!!toast.onUndo}>
              <CloseIcon type="close" onClick={() => removeToast(toast.id)} />
              {toast.title && <Title>{toast.title}</Title>}
              {toast.message && <Message>{toast.message}</Message>}
              {toast.onUndo && (
                <UndoButton onClick={() => handleUndo(toast.id, toast.onUndo)}>
                  Undo
                </UndoButton>
              )}
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
