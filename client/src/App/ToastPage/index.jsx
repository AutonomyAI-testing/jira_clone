import React from 'react';
import toast from 'shared/utils/toast';
import { Button } from 'shared/components';
import {
  Container,
  Header,
  Title,
  Description,
  DemoSection,
  SectionTitle,
  ButtonGroup,
  ToastTypeCard,
  CardTitle,
  CardDescription,
} from './Styles';

const ToastPage = () => {
  // Helper to show simple toast messages (success/error shorthand)
  const showSimpleToast = (type, message) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  };

  // Helper to show toasts with title and message
  const showDetailedToast = (type, title, message, options = {}) => {
    toast.show({
      type,
      title,
      message,
      ...options,
    });
  };

  const handleShowSuccess = () => showSimpleToast('success', 'This is a success message!');
  const handleShowError = () => showSimpleToast('error', 'This is an error message!');
  const handleShowWarning = () => showDetailedToast('warning', 'Warning', 'This is a warning message!');
  const handleShowInfo = () => showDetailedToast('primary', 'Info', 'This is an info message!');
  const handleShowSuccessWithMessage = () => showDetailedToast('success', 'Success', 'Operation completed successfully!');
  const handleShowErrorWithMessage = () => showDetailedToast('danger', 'Error', 'An error occurred during the operation.', { duration: 0 });
  const handleShowWarningWithMessage = () => showDetailedToast('warning', 'Warning', 'Please check your input and try again.');
  const handleShowInfoWithMessage = () => showDetailedToast('primary', 'Information', 'This is some helpful information.');
  const handleShowPersistent = () => showDetailedToast('danger', 'Important', 'This message will persist until you close it.', { duration: 0 });

  return (
    <Container>
      <Header>
        <Title>Toast Notifications</Title>
        <Description>
          Explore all toast notification variants available in the application
        </Description>
      </Header>

      <DemoSection>
        <SectionTitle>Basic Toasts</SectionTitle>
        <ButtonGroup>
          <ToastTypeCard>
            <CardTitle>Success</CardTitle>
            <CardDescription>Simple success notification</CardDescription>
            <Button variant="success" onClick={handleShowSuccess}>
              Show Success
            </Button>
          </ToastTypeCard>

          <ToastTypeCard>
            <CardTitle>Error</CardTitle>
            <CardDescription>Simple error notification</CardDescription>
            <Button variant="danger" onClick={handleShowError}>
              Show Error
            </Button>
          </ToastTypeCard>

          <ToastTypeCard>
            <CardTitle>Warning</CardTitle>
            <CardDescription>Simple warning notification</CardDescription>
            <Button variant="warning" onClick={handleShowWarning}>
              Show Warning
            </Button>
          </ToastTypeCard>

          <ToastTypeCard>
            <CardTitle>Info</CardTitle>
            <CardDescription>Simple info notification</CardDescription>
            <Button variant="primary" onClick={handleShowInfo}>
              Show Info
            </Button>
          </ToastTypeCard>
        </ButtonGroup>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Toasts with Title and Message</SectionTitle>
        <ButtonGroup>
          <ToastTypeCard>
            <CardTitle>Success</CardTitle>
            <CardDescription>With title and message</CardDescription>
            <Button variant="success" onClick={handleShowSuccessWithMessage}>
              Show Success
            </Button>
          </ToastTypeCard>

          <ToastTypeCard>
            <CardTitle>Error</CardTitle>
            <CardDescription>With title and message</CardDescription>
            <Button variant="danger" onClick={handleShowErrorWithMessage}>
              Show Error
            </Button>
          </ToastTypeCard>

          <ToastTypeCard>
            <CardTitle>Warning</CardTitle>
            <CardDescription>With title and message</CardDescription>
            <Button variant="warning" onClick={handleShowWarningWithMessage}>
              Show Warning
            </Button>
          </ToastTypeCard>

          <ToastTypeCard>
            <CardTitle>Info</CardTitle>
            <CardDescription>With title and message</CardDescription>
            <Button variant="primary" onClick={handleShowInfoWithMessage}>
              Show Info
            </Button>
          </ToastTypeCard>
        </ButtonGroup>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Special Cases</SectionTitle>
        <ButtonGroup>
          <ToastTypeCard>
            <CardTitle>Persistent Toast</CardTitle>
            <CardDescription>Stays on screen until dismissed (duration: 0)</CardDescription>
            <Button variant="danger" onClick={handleShowPersistent}>
              Show Persistent
            </Button>
          </ToastTypeCard>
        </ButtonGroup>
      </DemoSection>
    </Container>
  );
};

export default ToastPage;
