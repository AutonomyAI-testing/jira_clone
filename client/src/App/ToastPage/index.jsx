import React from 'react';
import toast from 'shared/utils/toast';
import Button from 'shared/components/Button';
import {
  Container,
  PageTitle,
  Description,
  Section,
  SectionTitle,
  ButtonGrid,
  ButtonContainer,
  ButtonLabel,
} from './Styles';

// Toast type configurations for demonstration
const TOAST_TYPES = [
  {
    type: 'success',
    title: 'Success!',
    message: 'Your action completed successfully.',
    variant: 'success',
    label: 'Green notification for successful actions',
  },
  {
    type: 'danger',
    title: 'Error!',
    message: 'Something went wrong. Please try again.',
    variant: 'danger',
    label: 'Red notification for errors',
  },
  {
    type: 'warning',
    title: 'Warning',
    message: 'Please review this important notice.',
    variant: 'secondary',
    label: 'Orange notification for warnings',
  },
  {
    type: 'info',
    title: 'Information',
    message: 'Here is some useful information for you.',
    variant: 'primary',
    label: 'Blue notification for information',
  },
];

// Content variation toast configurations
const CONTENT_VARIATIONS = [
  {
    type: 'success',
    title: 'Title only toast - no message',
    label: 'Toast with title but no message',
    buttonLabel: 'Title Only',
  },
  {
    type: 'info',
    title: '',
    message: 'Message only toast - no title',
    label: 'Toast with message but no title',
    buttonLabel: 'Message Only',
  },
  {
    type: 'warning',
    title: 'Long Message',
    message:
      'This is a longer toast message that demonstrates how the toast component handles extended text content and wrapping.',
    label: 'Toast with wrapped long message',
    buttonLabel: 'Long Message',
  },
  {
    type: 'danger',
    title: 'Persistent Notification',
    message: 'This toast will not auto-dismiss. Click to close.',
    duration: 0,
    label: 'Toast that does not auto-dismiss',
    buttonLabel: 'Persistent Toast',
  },
];

// Helper function to create a toast handler
const createToastHandler = config => {
  const { type, title, message = undefined, duration = undefined } = config;
  return () => {
    const toastConfig = { type, title };
    if (message !== undefined) {
      toastConfig.message = message;
    }
    if (duration !== undefined) {
      toastConfig.duration = duration;
    }
    toast.show(toastConfig);
  };
};

const ToastPage = () => {
  const handleSuccessToast = createToastHandler(TOAST_TYPES[0]);
  const handleDangerToast = createToastHandler(TOAST_TYPES[1]);
  const handleWarningToast = createToastHandler(TOAST_TYPES[2]);
  const handleInfoToast = createToastHandler(TOAST_TYPES[3]);

  const handleTitleOnlyToast = createToastHandler(CONTENT_VARIATIONS[0]);
  const handleMessageOnlyToast = createToastHandler(CONTENT_VARIATIONS[1]);
  const handleLongMessageToast = createToastHandler(CONTENT_VARIATIONS[2]);
  const handlePersistentToast = createToastHandler(CONTENT_VARIATIONS[3]);

  const handleMultipleToasts = () => {
    const types = ['success', 'danger', 'warning', 'info'];
    types.forEach((type, index) => {
      setTimeout(() => {
        toast.show({
          type,
          title: `Toast #${index + 1}`,
          message: `This is toast number ${index + 1}`,
        });
      }, index * 300);
    });
  };

  return (
    <Container>
      <PageTitle>Toast Notification System</PageTitle>
      <Description>
        Click on the buttons below to trigger different types of toast notifications. Toasts appear
        in the top-right corner and can be dismissed by clicking on them. Try different
        configurations to see how the toast system handles various content types.
      </Description>

      <Section>
        <SectionTitle>Toast Types</SectionTitle>
        <ButtonGrid>
          {TOAST_TYPES.map((config, index) => {
            const handlers = [
              handleSuccessToast,
              handleDangerToast,
              handleWarningToast,
              handleInfoToast,
            ];
            return (
              <ButtonContainer key={config.type}>
                <Button variant={config.variant} onClick={handlers[index]}>
                  {config.title.split('!')[0]} Toast
                </Button>
                <ButtonLabel>{config.label}</ButtonLabel>
              </ButtonContainer>
            );
          })}
        </ButtonGrid>
      </Section>

      <Section>
        <SectionTitle>Content Variations</SectionTitle>
        <ButtonGrid>
          {CONTENT_VARIATIONS.map(config => {
            const handlers = [
              handleTitleOnlyToast,
              handleMessageOnlyToast,
              handleLongMessageToast,
              handlePersistentToast,
            ];
            const index = CONTENT_VARIATIONS.indexOf(config);
            return (
              <ButtonContainer key={config.buttonLabel}>
                <Button onClick={handlers[index]}>{config.buttonLabel}</Button>
                <ButtonLabel>{config.label}</ButtonLabel>
              </ButtonContainer>
            );
          })}
        </ButtonGrid>
      </Section>

      <Section>
        <SectionTitle>Multiple Toasts</SectionTitle>
        <ButtonGrid>
          <ButtonContainer>
            <Button variant="primary" onClick={handleMultipleToasts}>
              Show Multiple Toasts
            </Button>
            <ButtonLabel>Queue multiple toasts in sequence</ButtonLabel>
          </ButtonContainer>
        </ButtonGrid>
      </Section>
    </Container>
  );
};

export default ToastPage;
