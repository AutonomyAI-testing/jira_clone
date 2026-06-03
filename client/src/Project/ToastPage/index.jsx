import React, { useState } from 'react';
import PropTypes from 'prop-types';

import toast from 'shared/utils/toast';
import { Button, Icon, Breadcrumbs } from 'shared/components';
import { color } from 'shared/utils/styles';

import {
  Container,
  Content,
  PageTitle,
  PageSubtitle,
  Section,
  SectionTitle,
  ButtonRow,
  FormGroup,
  FormField,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  FormButton,
  ReferenceCards,
  ReferenceCard,
  CardClose,
  CardTitle,
  CardMessage,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ToastPage = ({ project }) => {
  // Manages the state of the custom toast builder form fields
  const [formState, setFormState] = useState({
    title: '',
    message: '',
    type: 'success',
    duration: 5,
  });

  const handleFormChange = (field, value) => {
    setFormState(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFireQuickToast = (type, title, message, duration = 5) => {
    toast.show({
      type,
      title,
      message,
      duration,
    });
  };

  const handleFireCustomToast = () => {
    if (!formState.title.trim()) {
      toast.show({
        type: 'warning',
        title: 'Validation',
        message: 'Please enter a toast title',
        duration: 3,
      });
      return;
    }

    toast.show({
      type: formState.type,
      title: formState.title,
      message: formState.message || undefined,
      duration: parseInt(formState.duration, 10),
    });

    // Clear the form after a toast is created to prepare for the next one
    setFormState({
      title: '',
      message: '',
      type: 'success',
      duration: 5,
    });
  };

  // Reference cards showing example toasts for each type
  const referenceToasts = [
    {
      type: 'success',
      title: 'Success',
      message: 'Your action was completed successfully.',
      bgColor: color.success,
      textColor: '#fff',
    },
    {
      type: 'danger',
      title: 'Error',
      message: 'Something went wrong. Please try again.',
      bgColor: color.danger,
      textColor: '#fff',
    },
    {
      type: 'warning',
      title: 'Warning',
      message: 'This action may have unintended effects.',
      bgColor: color.warning,
      textColor: color.textDarkest,
    },
  ];

  return (
    <Container>
      <Content>
        <Breadcrumbs items={['Projects', project.name, 'Toast Notifications']} />

        <PageTitle>Toast Notifications</PageTitle>
        <PageSubtitle>Interactive demo of toast notification types and configurations</PageSubtitle>

        {/* Section 1: Quick Triggers */}
        <Section>
          <SectionTitle>Quick Triggers</SectionTitle>
          <ButtonRow>
            <Button
              variant="primary"
              onClick={() =>
                handleFireQuickToast('success', 'Success!', 'Your action was completed successfully.', 5)
              }
            >
              Success Toast
            </Button>
            <Button
              variant="danger"
              onClick={() =>
                handleFireQuickToast('danger', 'Error', 'Something went wrong. Please try again.', 5)
              }
            >
              Error Toast
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                handleFireQuickToast('warning', 'Warning', 'This action may have unintended effects.', 5)
              }
            >
              Warning Toast
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                handleFireQuickToast('success', 'Info', 'Here is some useful information for you.', 5)
              }
            >
              Info Toast
            </Button>
          </ButtonRow>
        </Section>

        {/* Section 2: Custom Toast Builder */}
        <Section>
          <SectionTitle>Custom Toast Builder</SectionTitle>
          <FormGroup>
            <FormField>
              <FormLabel>Title</FormLabel>
              <FormInput
                type="text"
                placeholder="Toast title"
                value={formState.title}
                onChange={value => handleFormChange('title', value)}
              />
            </FormField>

            <FormField>
              <FormLabel>Message</FormLabel>
              <FormTextarea
                placeholder="Toast message (optional)"
                value={formState.message}
                onChange={e => handleFormChange('message', e.target.value)}
              />
            </FormField>

            <FormField>
              <FormLabel>Type</FormLabel>
              <FormSelect value={formState.type} onChange={e => handleFormChange('type', e.target.value)}>
                <option value="success">Success</option>
                <option value="danger">Error</option>
                <option value="warning">Warning</option>
              </FormSelect>
            </FormField>

            <FormField>
              <FormLabel>Duration (seconds)</FormLabel>
              <FormInput
                type="number"
                min="0"
                value={formState.duration}
                onChange={value => handleFormChange('duration', value)}
              />
            </FormField>

            <div>
              <Button variant="primary" onClick={handleFireCustomToast}>
                Fire Toast
              </Button>
            </div>
          </FormGroup>
        </Section>

        {/* Section 3: Toast Reference */}
        <Section>
          <SectionTitle>Toast Reference</SectionTitle>
          <ReferenceCards>
            {referenceToasts.map(toastRef => (
              <ReferenceCard key={toastRef.type} bgColor={toastRef.bgColor} textColor={toastRef.textColor}>
                <CardClose>
                  <Icon type="close" size={20} />
                </CardClose>
                <CardTitle>{toastRef.title}</CardTitle>
                <CardMessage>{toastRef.message}</CardMessage>
              </ReferenceCard>
            ))}
          </ReferenceCards>
        </Section>
      </Content>
    </Container>
  );
};

ToastPage.propTypes = propTypes;

export default ToastPage;
