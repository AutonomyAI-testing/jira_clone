import React, { useState } from 'react';

import { Button, Icon } from 'shared/components';
import toast from 'shared/utils/toast';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  PreviewGrid,
  PreviewCard,
  PreviewCardIcon,
  PreviewCardTitle,
  PreviewCardDescription,
  PreviewCardBadge,
  ButtonGrid,
  StyledButton,
  ConfigSection,
  ConfigGrid,
  ConfigField,
  ConfigLabel,
  ConfigInput,
  ConfigSelect,
  ConfigTextarea,
  ConfigActions,
  StatusContainer,
  StatusLabel,
  StatusValue,
} from './Styles';

const TOAST_TYPES = [
  {
    type: 'success',
    icon: 'plus',
    title: 'Success',
    description: 'Operation completed successfully',
  },
  {
    type: 'danger',
    icon: 'close',
    title: 'Error',
    description: 'Something went wrong',
  },
  {
    type: 'warning',
    icon: 'help',
    title: 'Warning',
    description: 'Please review this information',
  },
  {
    type: 'info',
    icon: 'help',
    title: 'Info',
    description: 'Additional information available',
  },
];

// Default duration in seconds for custom toast configuration
const DEFAULT_TOAST_DURATION = '5';

// Delay between multiple toast notifications to avoid visual overlap
const MULTIPLE_TOAST_INTERVAL_MS = 300;

const ToastDemo = () => {
  const [toastCount, setToastCount] = useState(0);
  const [configType, setConfigType] = useState('success');
  const [configTitle, setConfigTitle] = useState('');
  const [configMessage, setConfigMessage] = useState('');
  const [configDuration, setConfigDuration] = useState(DEFAULT_TOAST_DURATION);

  // Find toast type metadata by type identifier
  const getToastTypeConfig = type => TOAST_TYPES.find(t => t.type === type);

  // Display toast and increment counter for testing purposes
  const showToastAndIncrement = toastConfig => {
    toast.show(toastConfig);
    setToastCount(prev => prev + 1);
  };

  const handleShowToastType = type => {
    const typeConfig = getToastTypeConfig(type);
    showToastAndIncrement({
      type,
      title: typeConfig.title,
      message: typeConfig.description,
    });
  };

  const handleShowMultipleToasts = () => {
    const types = ['success', 'danger', 'warning', 'info'];
    types.forEach((type, index) => {
      setTimeout(() => {
        const typeConfig = getToastTypeConfig(type);
        // Set duration to 0 to make toasts persistent when showing multiple
        showToastAndIncrement({
          type,
          title: `${typeConfig.title} Toast #${index + 1}`,
          message: typeConfig.description,
          duration: 0,
        });
      }, index * MULTIPLE_TOAST_INTERVAL_MS);
    });
  };

  const handleShowLongMessageToast = () => {
    showToastAndIncrement({
      type: 'info',
      title: 'Multi-line Message',
      message:
        'This is a toast notification with a longer message.\nIt spans multiple lines.\nYou can see how the toast handles text wrapping.',
      duration: 0,
    });
  };

  const handleShowNoPersistentToast = () => {
    showToastAndIncrement({
      type: 'warning',
      title: 'Persistent Toast',
      message: 'Click this toast to dismiss it.\nIt will not auto-dismiss.',
      duration: 0,
    });
  };

  const handleShowCustomDurationToast = () => {
    showToastAndIncrement({
      type: 'success',
      title: 'Custom Duration',
      message: 'This toast will dismiss in 10 seconds',
      duration: 10,
    });
  };

  // Reset custom form fields to defaults after showing a toast
  const resetCustomToastForm = () => {
    setConfigTitle('');
    setConfigMessage('');
    setConfigDuration(DEFAULT_TOAST_DURATION);
  };

  const handleShowCustomToast = () => {
    // Title is required for toast visibility and accessibility
    if (!configTitle.trim()) {
      alert('Please enter a title');
      return;
    }

    showToastAndIncrement({
      type: configType,
      title: configTitle,
      message: configMessage,
      duration: parseInt(configDuration, 10) || 0,
    });

    resetCustomToastForm();
  };

  return (
    <Container>
      <Header>
        <Title>Toast Notifications</Title>
        <Subtitle>Demonstration and testing interface for toast notification system</Subtitle>
      </Header>

      {/* Section 1: Preview Cards */}
      <Section>
        <SectionTitle>Toast Types</SectionTitle>
        <PreviewGrid>
          {TOAST_TYPES.map(item => (
            <PreviewCard key={item.type} type={item.type}>
              <PreviewCardIcon>
                <Icon type={item.icon} size={24} />
              </PreviewCardIcon>
              <PreviewCardTitle>{item.title}</PreviewCardTitle>
              <PreviewCardDescription>{item.description}</PreviewCardDescription>
              <PreviewCardBadge>Live Preview</PreviewCardBadge>
            </PreviewCard>
          ))}
        </PreviewGrid>
      </Section>

      {/* Section 2: Basic Trigger Buttons */}
      <Section>
        <SectionTitle>Basic Examples</SectionTitle>
        <ButtonGrid>
          <StyledButton variant="success" onClick={() => handleShowToastType('success')}>
            Show Success Toast
          </StyledButton>
          <StyledButton variant="danger" onClick={() => handleShowToastType('danger')}>
            Show Error Toast
          </StyledButton>
          <StyledButton variant="warning" onClick={() => handleShowToastType('warning')}>
            Show Warning Toast
          </StyledButton>
          <StyledButton variant="primary" onClick={() => handleShowToastType('info')}>
            Show Info Toast
          </StyledButton>
        </ButtonGrid>
      </Section>

      {/* Section 3: Advanced Examples */}
      <Section>
        <SectionTitle>Advanced Examples</SectionTitle>
        <ButtonGrid>
          <StyledButton variant="primary" onClick={handleShowMultipleToasts}>
            Show Multiple Toasts
          </StyledButton>
          <StyledButton variant="primary" onClick={handleShowLongMessageToast}>
            Show Long Message Toast
          </StyledButton>
          <StyledButton variant="primary" onClick={handleShowNoPersistentToast}>
            Show Persistent Toast
          </StyledButton>
          <StyledButton variant="primary" onClick={handleShowCustomDurationToast}>
            Show 10s Duration Toast
          </StyledButton>
        </ButtonGrid>
      </Section>

      {/* Section 4: Custom Configuration */}
      <Section>
        <SectionTitle>Custom Configuration</SectionTitle>
        <ConfigSection>
          <ConfigGrid>
            <ConfigField>
              <ConfigLabel>Toast Type</ConfigLabel>
              <ConfigSelect value={configType} onChange={e => setConfigType(e.target.value)}>
                <option value="success">Success</option>
                <option value="danger">Error</option>
                <option value="warning">Warning</option>
                <option value="info">Info</option>
              </ConfigSelect>
            </ConfigField>

            <ConfigField>
              <ConfigLabel>Duration (seconds)</ConfigLabel>
              <ConfigInput
                type="number"
                min="0"
                max="60"
                value={configDuration}
                onChange={e => setConfigDuration(e.target.value)}
                placeholder="0 for no auto-dismiss"
              />
            </ConfigField>
          </ConfigGrid>

          <ConfigField style={{ marginBottom: '12px' }}>
            <ConfigLabel>Title *</ConfigLabel>
            <ConfigInput
              type="text"
              value={configTitle}
              onChange={e => setConfigTitle(e.target.value)}
              placeholder="Enter toast title..."
            />
          </ConfigField>

          <ConfigField style={{ marginBottom: '20px' }}>
            <ConfigLabel>Message</ConfigLabel>
            <ConfigTextarea
              value={configMessage}
              onChange={e => setConfigMessage(e.target.value)}
              placeholder="Enter toast message (supports newlines)..."
            />
          </ConfigField>

          <ConfigActions>
            <Button variant="secondary" onClick={resetCustomToastForm}>
              Reset
            </Button>
            <Button variant="primary" onClick={handleShowCustomToast}>
              Show Custom Toast
            </Button>
          </ConfigActions>
        </ConfigSection>
      </Section>

      {/* Section 5: Status */}
      <Section>
        <StatusContainer>
          <StatusLabel>Total Toasts Triggered</StatusLabel>
          <StatusValue>{toastCount}</StatusValue>
        </StatusContainer>
      </Section>
    </Container>
  );
};

export default ToastDemo;
