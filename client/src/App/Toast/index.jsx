import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import { Icon } from 'shared/components';
import { Container, StyledToast, CloseIcon, Title, Message, IconContainer, Content } from './Styles';

const getIconForType = type => {
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

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast type={toast.type}>
              <IconContainer>
                <Icon type={getIconForType(toast.type)} size={20} />
              </IconContainer>
              <Content>
                {toast.title && <Title>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </Content>
              <CloseIcon
                type="close"
                size={18}
                onClick={() => removeToast(toast.id)}
              />
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
