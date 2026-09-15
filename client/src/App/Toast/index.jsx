import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import mascotWizard from 'App/assets/mascotWizardBase64';
import { Avatar } from 'shared/components';
import {
  Container,
  MascotWrapper,
  StyledToast,
  CloseIcon,
  ToastContent,
  Title,
  Message,
} from './Styles';

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

  if (toasts.length === 0) return null;

  return (
    <Container>
      <MascotWrapper>
        <Avatar avatarUrl={mascotWizard} name="Mascot" size={72} />
      </MascotWrapper>
      <TransitionGroup component={null}>
        {toasts.map((toast, index) => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast key={toast.id} type={toast.type} isFirst={index === 0} onClick={() => removeToast(toast.id)}>
              <CloseIcon type="close" />
              <ToastContent>
                {toast.title && <Title>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </ToastContent>
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
