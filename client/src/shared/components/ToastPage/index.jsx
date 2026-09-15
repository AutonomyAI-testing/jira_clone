import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { color } from 'shared/utils/styles';

import toast from 'shared/utils/toast';
import Toast from 'App/Toast';

import {
  PageContainer,
  ContentWrapper,
  HeaderSection,
  AvatarPlaceholder,
  HeaderContent,
  MainTitle,
  Subtitle,
  SectionTitle,
  ButtonGrid,
  ToastButton,
  CustomToastSection,
  FormRow,
  FormField,
  FormLabel,
  StyledInput,
  CustomButtonRow,
  ShowcaseGrid,
  ToastCard,
  ToastCardHeader,
  ToastCardIcon,
  ToastCardMessage,
  DescriptionText,
} from './Styles';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: undefined,
};

const TOAST_TYPES = [
  { type: 'success', label: 'Success' },
  { type: 'danger', label: 'Error' },
  { type: 'warning', label: 'Warning' },
  { type: 'primary', label: 'Info' },
];

const ICON_MAP = { success: '✓', danger: '✕', warning: '⚠', primary: 'ℹ' };

// Configuration for each toast type and how to trigger it
const TOAST_CONFIG = {
  success: () => toast.success('Success! Everything is working perfectly.'),
  danger: () => toast.error('Error: Something went wrong. Please try again.'),
  warning: () =>
    toast.show({
      type: 'warning',
      title: 'Warning',
      message: 'Please be careful with this action',
      duration: 5,
    }),
  primary: () =>
    toast.show({
      type: 'primary',
      title: 'Info',
      message: 'Here is some information for you',
      duration: 5,
    }),
};

const SHOWCASE_TOASTS = [
  {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully',
  },
  {
    type: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again',
  },
  {
    type: 'warning',
    title: 'Warning',
    message: 'Please review before proceeding',
  },
  {
    type: 'primary',
    title: 'Info',
    message: 'Here is some useful information',
  },
];

/**
 * ToastPage - An interactive demo playground for the toast notification system.
 * Allows users to preview different toast types and test custom toast messages.
 */
const ToastPage = ({ className }) => {
  // Form state for creating custom toast notifications
  const [customTitle, setCustomTitle] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleShowToast = (type) => {
    const toastHandler = TOAST_CONFIG[type];
    if (toastHandler) {
      toastHandler();
    }
  };

  const handleShowCustom = () => {
    // Show custom toast if at least one field has content, then clear the form
    if (customTitle.trim() || customMessage.trim()) {
      toast.show({
        type: 'success',
        title: customTitle || 'Custom Toast',
        message: customMessage || 'Your custom message appears here',
        duration: 5,
      });
      setCustomTitle('');
      setCustomMessage('');
    }
  };

  return (
    <PageContainer className={className}>
      <ContentWrapper>
        {/* Hero header with title and subtitle */}
        <HeaderSection>
          <AvatarPlaceholder />
          <HeaderContent>
            <MainTitle>Toast Notifications</MainTitle>
            <Subtitle>A polished demo playground for the toast notification system</Subtitle>
          </HeaderContent>
        </HeaderSection>

        {/* Toast Types Buttons */}
        <SectionTitle>Toast Types</SectionTitle>
        <ButtonGrid>
          <ToastButton variant="success" onClick={() => handleShowToast('success')}>
            Success
          </ToastButton>
          <ToastButton variant="danger" onClick={() => handleShowToast('danger')}>
            Error
          </ToastButton>
          <ToastButton
            variant="secondary"
            $colorOverride={color.warning}
            onClick={() => handleShowToast('warning')}
          >
            Warning
          </ToastButton>
          <ToastButton variant="primary" onClick={() => handleShowToast('primary')}>
            Info
          </ToastButton>
        </ButtonGrid>

        {/* Custom Toast Section */}
        <SectionTitle>Custom Toast</SectionTitle>
        <CustomToastSection>
          <FormRow>
            <FormField>
              <FormLabel htmlFor="toast-title">Title</FormLabel>
              <StyledInput
                id="toast-title"
                type="text"
                placeholder="Enter toast title"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
              />
            </FormField>
          </FormRow>
          <FormRow>
            <FormField>
              <FormLabel htmlFor="toast-message">Message</FormLabel>
              <StyledInput
                id="toast-message"
                type="text"
                placeholder="Enter toast message"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
              />
            </FormField>
          </FormRow>
          <CustomButtonRow>
            <ToastButton variant="success" onClick={handleShowCustom}>
              Show Custom Toast
            </ToastButton>
          </CustomButtonRow>
        </CustomToastSection>

        {/* Showcase Cards */}
        <SectionTitle>Toast Variants</SectionTitle>
        <ShowcaseGrid>
          {SHOWCASE_TOASTS.map((toastItem) => (
            <ToastCard key={toastItem.type} type={toastItem.type}>
              <ToastCardHeader>
                <ToastCardIcon>{ICON_MAP[toastItem.type]}</ToastCardIcon>
                {toastItem.title}
              </ToastCardHeader>
              <ToastCardMessage>{toastItem.message}</ToastCardMessage>
              <DescriptionText>Click a button above to trigger</DescriptionText>
            </ToastCard>
          ))}
        </ShowcaseGrid>
      </ContentWrapper>

      {/* Toast Renderer */}
      <Toast />
    </PageContainer>
  );
};

ToastPage.propTypes = propTypes;
ToastPage.defaultProps = defaultProps;

export default ToastPage;
