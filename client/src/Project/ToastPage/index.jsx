import React from 'react';

import toast from 'shared/utils/toast';
import { Button, Breadcrumbs } from 'shared/components';

import WizardMascot from './WizardMascot';
import {
  PageContainer,
  PageTitle,
  PageSubtitle,
  ContentGrid,
  MascotSection,
  MascotLabel,
  ToastGrid,
  ToastCard,
  ToastCardInfo,
  ToastCardTitle,
  ToastCardDesc,
  ToastCardButton,
} from './Styles';

const ToastPage = () => {
  const handleShowSuccess = () => {
    toast.show({
      type: 'success',
      title: 'Success!',
      message: 'Your action completed successfully.',
    });
  };

  const handleShowDanger = () => {
    toast.show({
      type: 'danger',
      title: 'Error',
      message: 'Something went wrong. Please try again.',
    });
  };

  const handleShowWarning = () => {
    toast.show({
      type: 'warning',
      title: 'Warning',
      message: 'This action may have unintended side effects.',
    });
  };

  const handleShowInfo = () => {
    toast.show({
      type: 'info',
      title: 'Info',
      message: 'Here is some useful information for you.',
    });
  };

  return (
    <PageContainer>
      <Breadcrumbs items={['Projects', 'Notifications', 'Toast Showcase']} />
      <PageTitle>Toast Notifications</PageTitle>
      <PageSubtitle>Trigger different notification styles and see them in action.</PageSubtitle>

      <ContentGrid>
        <MascotSection>
          <WizardMascot width={280} height={320} />
          <MascotLabel>Toast Wizard</MascotLabel>
        </MascotSection>

        <ToastGrid>
          <ToastCard>
            <ToastCardInfo>
              <ToastCardTitle>Success</ToastCardTitle>
              <ToastCardDesc>Confirmation of successful operations</ToastCardDesc>
            </ToastCardInfo>
            <ToastCardButton>
              <Button variant="success" onClick={handleShowSuccess}>
                Show Toast
              </Button>
            </ToastCardButton>
          </ToastCard>
          <ToastCard>
            <ToastCardInfo>
              <ToastCardTitle>Error</ToastCardTitle>
              <ToastCardDesc>Display errors and failed operations</ToastCardDesc>
            </ToastCardInfo>
            <ToastCardButton>
              <Button variant="danger" onClick={handleShowDanger}>
                Show Toast
              </Button>
            </ToastCardButton>
          </ToastCard>
          <ToastCard>
            <ToastCardInfo>
              <ToastCardTitle>Warning</ToastCardTitle>
              <ToastCardDesc>Alert users to potentially risky actions</ToastCardDesc>
            </ToastCardInfo>
            <ToastCardButton>
              <Button variant="secondary" onClick={handleShowWarning}>
                Show Toast
              </Button>
            </ToastCardButton>
          </ToastCard>
          <ToastCard>
            <ToastCardInfo>
              <ToastCardTitle>Info</ToastCardTitle>
              <ToastCardDesc>Provide additional helpful information</ToastCardDesc>
            </ToastCardInfo>
            <ToastCardButton>
              <Button variant="primary" onClick={handleShowInfo}>
                Show Toast
              </Button>
            </ToastCardButton>
          </ToastCard>
        </ToastGrid>
      </ContentGrid>
    </PageContainer>
  );
};

export default ToastPage;
