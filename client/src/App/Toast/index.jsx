import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';
import { Container, StyledToast, ToastIcon, CloseIcon, Content, Title, Message } from './Styles';

// Maps toast types to their icon names for the Icon component
const iconMap = {
  success: 'shipping',
  danger: 'close',
  warning: 'help',
  info: 'help',
  wizard: 'feedback',
};

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  // Set up pubsub listener for toast notifications
  useEffect(() => {
    const addToast = ({ type = 'success', title, message, duration = 5 }) => {
      const id = uniqueId('toast-');
      setToasts(currentToasts => [...currentToasts, { id, type, title, message }]);

      // Auto-dismiss toasts after specified duration
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
            <StyledToast key={toast.id} type={toast.type} onClick={() => removeToast(toast.id)}>
              <ToastIcon type={iconMap[toast.type] || 'feedback'} />
              <Content>
                {toast.title && <Title>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </Content>
              <CloseIcon type="close" />
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
