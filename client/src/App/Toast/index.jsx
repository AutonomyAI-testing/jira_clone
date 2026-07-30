import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import {
  Container,
  StyledToast,
  ToastAvatar,
  ContentWrapper,
  CloseIcon,
  Title,
  Message,
} from './Styles';
import mascotSrc from './mascotBase64';

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
              <ToastAvatar avatarUrl={mascotSrc} size={48} />
              <ContentWrapper>
                {toast.title && <Title>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </ContentWrapper>
              <CloseIcon type="close" />
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
