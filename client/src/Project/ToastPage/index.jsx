import React, { useState } from 'react';
import toast from 'shared/utils/toast';
import { Icon } from 'shared/components';
import {
  Header,
  AvatarImage,
  HeaderContent,
  PageTitle,
  PageDescription,
  Section,
  SectionTitle,
  ToastVariantsContainer,
  ToastVariantCard,
  ToastPreview,
  PreviewCloseIcon,
  PreviewTitle,
  PreviewMessage,
  TriggerButton,
  BuilderCard,
  BuilderGrid,
  BuilderSection,
  Label,
  Input,
  Select,
  Textarea,
  BuilderActions,
  ShowToastButton,
  ResetButton,
  StaticPreviewsGrid,
  StaticToastBox,
  ToastTypeLabel,
  StaticToast,
  StaticTitle,
  StaticMessage,
  CodeExample,
} from './Styles';

// Configuration for all available toast types
const TOAST_TYPES = [
  { type: 'success', label: 'Success', icon: 'check' },
  { type: 'danger', label: 'Error', icon: 'close' },
  { type: 'warning', label: 'Warning', icon: 'warning' },
  { type: 'info', label: 'Info', icon: 'info' },
];

// Example content for each toast type - used in preview sections
const TOAST_EXAMPLES = {
  success: {
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
  },
  danger: {
    title: 'Error occurred',
    message: 'Something went wrong. Please try again later.',
  },
  warning: {
    title: 'Warning',
    message: 'This action cannot be undone. Please proceed with caution.',
  },
  info: {
    title: 'Information',
    message: 'New updates are available. Please refresh the page.',
  },
};

// Initial state for the toast builder form
const INITIAL_FORM_STATE = {
  type: 'info',
  title: '',
  message: '',
  duration: 5,
};

const ToastPage = () => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const handleFormChange = (field, value) => {
    setFormState(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleShowToast = () => {
    const { type, title, message, duration } = formState;

    // Require at least a title or message to show the toast
    if (!title && !message) {
      toast.show({ type: 'warning', title: 'Please enter a title or message' });
      return;
    }

    toast.show({
      type,
      title: title || undefined,
      message: message || undefined,
      duration: parseInt(duration, 10),
    });
  };

  const handleReset = () => {
    setFormState(INITIAL_FORM_STATE);
  };

  const avatarUrl =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwwUAxUTAwwSBxMTExwSExgDEg0HExwTGxsdLiMyMjMyMzAxMjMxNTQ0NTAxMTD/2wBDAQICAgMDAwYDAwYMCAcIDAwwMjAwMDAwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMTD/wAARCAB4AHgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWm5ybnJ2eoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWm5ydn5KjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/Z';

  return (
    <div>
      <Header>
        <AvatarImage src={avatarUrl} alt="Toast showcase" />
        <HeaderContent>
          <PageTitle>Toast Notifications</PageTitle>
          <PageDescription>
            A lightweight notification system for displaying temporary messages to users. Build and
            preview toast notifications of different types.
          </PageDescription>
        </HeaderContent>
      </Header>

      <Section>
        <SectionTitle>
          <Icon type="notifications_active" />
          Live Toast Variants
        </SectionTitle>
        <PageDescription style={{ marginBottom: '20px' }}>
          Click the buttons below to trigger each toast type and see it appear in the top-right
          corner.
        </PageDescription>
        <ToastVariantsContainer>
          {TOAST_TYPES.map(({ type, label }) => (
            <ToastVariantCard key={type}>
              <ToastPreview type={type}>
                <PreviewCloseIcon>×</PreviewCloseIcon>
                <PreviewTitle>{label}</PreviewTitle>
                <PreviewMessage>{TOAST_EXAMPLES[type].message}</PreviewMessage>
              </ToastPreview>
              <TriggerButton
                onClick={() =>
                  toast.show({
                    type,
                    title: TOAST_EXAMPLES[type].title,
                    message: TOAST_EXAMPLES[type].message,
                    duration: 5,
                  })
                }
              >
                Trigger {label}
              </TriggerButton>
            </ToastVariantCard>
          ))}
        </ToastVariantsContainer>
      </Section>

      <Section>
        <SectionTitle>
          <Icon type="edit" />
          Toast Builder
        </SectionTitle>
        <PageDescription style={{ marginBottom: '20px' }}>
          Customize and preview your toast notification in real-time.
        </PageDescription>
        <BuilderCard>
          <BuilderGrid>
            <BuilderSection>
              <Label htmlFor="toast-type">Toast Type</Label>
              <Select
                id="toast-type"
                value={formState.type}
                onChange={e => handleFormChange('type', e.target.value)}
              >
                <option value="success">Success</option>
                <option value="danger">Error</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
              </Select>
            </BuilderSection>

            <BuilderSection>
              <Label htmlFor="toast-duration">Duration (seconds)</Label>
              <Input
                id="toast-duration"
                type="number"
                min="0"
                max="30"
                value={formState.duration}
                onChange={e => handleFormChange('duration', e.target.value)}
                placeholder="0 for persistent"
              />
            </BuilderSection>

            <BuilderSection style={{ gridColumn: '1 / -1' }}>
              <Label htmlFor="toast-title">Title</Label>
              <Input
                id="toast-title"
                type="text"
                value={formState.title}
                onChange={e => handleFormChange('title', e.target.value)}
                placeholder="Toast title..."
              />
            </BuilderSection>

            <BuilderSection style={{ gridColumn: '1 / -1' }}>
              <Label htmlFor="toast-message">Message</Label>
              <Textarea
                id="toast-message"
                value={formState.message}
                onChange={e => handleFormChange('message', e.target.value)}
                placeholder="Toast message..."
              />
            </BuilderSection>
          </BuilderGrid>

          <BuilderActions>
            <ShowToastButton onClick={handleShowToast}>Show Toast</ShowToastButton>
            <ResetButton onClick={handleReset}>Reset</ResetButton>
          </BuilderActions>

          <CodeExample>
            {`toast.show({
  type: '${formState.type}',
  ${formState.title ? `title: '${formState.title}',` : ''}
  ${formState.message ? `message: '${formState.message}',` : ''}
  duration: ${formState.duration}
})`}
          </CodeExample>
        </BuilderCard>
      </Section>

      <Section>
        <SectionTitle>
          <Icon type="preview" />
          Static Previews
        </SectionTitle>
        <PageDescription style={{ marginBottom: '20px' }}>
          Visual reference of all toast types with example content.
        </PageDescription>
        {/* Static preview grid showing all toast types side-by-side */}
        <StaticPreviewsGrid>
          {TOAST_TYPES.map(({ type, label }) => (
            <StaticToastBox key={type}>
              <ToastTypeLabel type={type}>{label}</ToastTypeLabel>
              <StaticToast type={type}>
                <PreviewCloseIcon>×</PreviewCloseIcon>
                <StaticTitle>{TOAST_EXAMPLES[type].title}</StaticTitle>
                <StaticMessage>{TOAST_EXAMPLES[type].message}</StaticMessage>
              </StaticToast>
            </StaticToastBox>
          ))}
        </StaticPreviewsGrid>
      </Section>

      <Section>
        <SectionTitle>
          <Icon type="code" />
          Usage Guide
        </SectionTitle>
        <BuilderCard>
          <div style={{ marginBottom: '16px' }}>
            <strong>Basic Usage:</strong>
            <CodeExample>{`import toast from 'shared/utils/toast';

// Quick success notification
toast.success('Operation completed');

// Custom notification
toast.show({
  type: 'info',
  title: 'Update Available',
  message: 'A new version is ready',
  duration: 3
});

// Error with automatic logging
toast.error(new Error('Something failed'));`}</CodeExample>
          </div>

          <div>
            <strong>Available Types:</strong>
            <CodeExample>{`type: 'success'  // Green - for successful operations
type: 'danger'   // Red - for errors
type: 'warning'  // Orange - for warnings
type: 'info'     // Blue - for informational messages`}</CodeExample>
          </div>
        </BuilderCard>
      </Section>
    </div>
  );
};

export default ToastPage;
