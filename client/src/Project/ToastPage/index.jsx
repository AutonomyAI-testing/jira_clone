import React, { useState } from 'react';

import toast from 'shared/utils/toast';
import { Button, Input, Textarea, Breadcrumbs, Select } from 'shared/components';

import {
  PageContainer,
  PageHeader,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  SectionContainer,
  SectionTitle,
  DemoFormContainer,
  FormField,
  FormLabel,
  SelectContainer,
  SelectField,
  ButtonContainer,
  QuickFireButtons,
  CodeBlock,
  ToastPreviewsContainer,
  ToastPreviewCard,
  PreviewLabel,
  StyledToastPreview,
  ToastPreviewTitle,
  ToastPreviewMessage,
  CodeSection,
  CodeExampleBlock,
  CodeExampleTitle,
} from './Styles';

// Initial form state for the interactive demo
const DEFAULT_FORM_STATE = {
  toastType: 'success',
  title: 'Your changes are saved',
  message: 'All your modifications have been successfully saved to the system.',
  duration: 5,
};

// Predefined toast samples for quick-fire buttons
const QUICK_TOAST_SAMPLES = {
  success: 'Changes saved successfully!',
  error: 'Something went wrong. Please try again.',
  custom: {
    type: 'success',
    title: '✨ Magic Spell Cast!',
    message: 'The toast wizard has conjured a notification!',
    duration: 5,
  },
};

const ToastPage = () => {
  const [formState, setFormState] = useState(DEFAULT_FORM_STATE);

  const handleFormChange = (field, value) => {
    setFormState(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFireToast = () => {
    const { toastType, title, message, duration } = formState;
    toast.show({
      type: toastType,
      title,
      message,
      duration: parseInt(duration, 10),
    });
  };

  const handleQuickSuccess = () => {
    toast.success(QUICK_TOAST_SAMPLES.success);
  };

  const handleQuickError = () => {
    toast.error(QUICK_TOAST_SAMPLES.error);
  };

  const handleQuickCustom = () => {
    toast.show(QUICK_TOAST_SAMPLES.custom);
  };

  return (
    <PageContainer>
      <Breadcrumbs items={['Projects', 'Toast']} />
      <PageHeader>Toast Notifications</PageHeader>

      {/* Hero Section */}
      <SectionContainer>
        <HeroSection>
          <HeroTitle>🧙 Toast Wizard</HeroTitle>
          <HeroSubtitle>Conjure your notifications with the power of toasts!</HeroSubtitle>
        </HeroSection>
      </SectionContainer>

      {/* Interactive Demo Section */}
      <SectionContainer>
        <SectionTitle>Interactive Demo</SectionTitle>
        <DemoFormContainer>
          <FormField>
            <SelectContainer>
              <SelectField>
                <FormLabel>Toast Type</FormLabel>
                <Select
                  value={formState.toastType}
                  onChange={value => handleFormChange('toastType', value)}
                  options={[
                    { value: 'success', label: 'Success (Green)' },
                    { value: 'danger', label: 'Error (Red)' },
                  ]}
                />
              </SelectField>
            </SelectContainer>
          </FormField>

          <FormField>
            <FormLabel>Title</FormLabel>
            <Input
              value={formState.title}
              onChange={value => handleFormChange('title', value)}
              placeholder="Enter toast title"
            />
          </FormField>

          <FormField>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={formState.message}
              onChange={value => handleFormChange('message', value)}
              placeholder="Enter toast message"
              minRows={3}
            />
          </FormField>

          <FormField>
            <FormLabel>Duration (seconds)</FormLabel>
            <Input
              type="number"
              value={formState.duration}
              onChange={value => handleFormChange('duration', value)}
              placeholder="5"
              filter={/^\d*$/}
            />
          </FormField>

          <ButtonContainer>
            <Button variant="primary" onClick={handleFireToast}>
              🔥 Fire Toast!
            </Button>
          </ButtonContainer>
        </DemoFormContainer>
      </SectionContainer>

      {/* Quick-Fire Section */}
      <SectionContainer>
        <SectionTitle>Quick-Fire Buttons</SectionTitle>
        <QuickFireButtons>
          <Button variant="success" onClick={handleQuickSuccess}>
            ✅ Success
          </Button>
          <Button variant="danger" onClick={handleQuickError}>
            ❌ Error
          </Button>
          <Button variant="primary" onClick={handleQuickCustom}>
            ✨ Magic Custom Toast
          </Button>
        </QuickFireButtons>
      </SectionContainer>

      {/* How It Works Section */}
      <SectionContainer>
        <SectionTitle>How It Works</SectionTitle>
        <CodeSection>
          <CodeExampleBlock>
            <CodeExampleTitle>Basic Usage</CodeExampleTitle>
            <CodeBlock>{`import toast from 'shared/utils/toast';

// Show a success toast
toast.success('Changes saved successfully!');

// Show an error toast
toast.error({ message: 'Something went wrong.' });

// Show a custom toast
toast.show({
  type: 'success',
  title: 'Success!',
  message: 'Your action was successful.',
  duration: 5,
});`}</CodeBlock>
          </CodeExampleBlock>

          <CodeExampleBlock>
            <CodeExampleTitle>API Reference</CodeExampleTitle>
            <CodeBlock>{`toast.show(options)
  options.type: 'success' | 'danger'
  options.title: string (required)
  options.message: string (optional)
  options.duration: number (seconds, default: 5)
              0 = persistent until clicked

toast.success(title)
  Shows a green success toast

toast.error(error)
  Shows a red error toast
  error can be a string or error object`}</CodeBlock>
          </CodeExampleBlock>
        </CodeSection>
      </SectionContainer>

      {/* Toast Reference Section */}
      <SectionContainer>
        <SectionTitle>Toast Variants</SectionTitle>
        <ToastPreviewsContainer>
          <ToastPreviewCard>
            <PreviewLabel>Success Toast</PreviewLabel>
            <StyledToastPreview type="success">
              <ToastPreviewTitle>Changes saved</ToastPreviewTitle>
              <ToastPreviewMessage>
                Your modifications have been successfully saved to the system.
              </ToastPreviewMessage>
            </StyledToastPreview>
          </ToastPreviewCard>

          <ToastPreviewCard>
            <PreviewLabel>Error Toast</PreviewLabel>
            <StyledToastPreview type="danger">
              <ToastPreviewTitle>Error</ToastPreviewTitle>
              <ToastPreviewMessage>Something went wrong. Please try again.</ToastPreviewMessage>
            </StyledToastPreview>
          </ToastPreviewCard>

          <ToastPreviewCard>
            <PreviewLabel>Custom Toast</PreviewLabel>
            <StyledToastPreview type="success">
              <ToastPreviewTitle>✨ Magic Spell Cast!</ToastPreviewTitle>
              <ToastPreviewMessage>
                The toast wizard has conjured a notification!
              </ToastPreviewMessage>
            </StyledToastPreview>
          </ToastPreviewCard>
        </ToastPreviewsContainer>
      </SectionContainer>
    </PageContainer>
  );
};

export default ToastPage;
