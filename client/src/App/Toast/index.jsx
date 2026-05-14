import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import { Icon } from 'shared/components';
import {
  Container,
  StyledToast,
  IconWrapper,
  TextContent,
  CloseIcon,
  Title,
  Message,
} from './Styles';

// Map notification types to icon types
const getIconType = type => {
  const iconMap = {
    success: 'check',
    danger: 'close',
    warning: 'help',
    info: 'feedback',
  };
  return iconMap[type] || 'feedback';
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
            <StyledToast key={toast.id} type={toast.type} onClick={() => removeToast(toast.id)}>
              <IconWrapper>
                <Icon type={getIconType(toast.type)} size={18} />
              </IconWrapper>
              <TextContent>
                {toast.title && <Title>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </TextContent>
              <CloseIcon type="close" size={18} />
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
