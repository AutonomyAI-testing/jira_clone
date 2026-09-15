import React, { useState } from 'react';

import toast from 'shared/utils/toast';
import { Button, Breadcrumbs, Input } from 'shared/components';

import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  Section,
  SectionTitle,
  PlaygroundCard,
  FormRow,
  FormLabel,
  TypeButtonGroup,
  TypeButton,
  InputField,
  DurationButtonGroup,
  DurationButton,
  ShowToastButton,
  ExamplesRow,
  ExampleCard,
  ExampleLabel,
  ExampleDescription,
  ExampleButton,
  ExampleBorder,
} from './Styles';

const TOAST_TYPES = {
  success: { label: 'Success', color: '#0B875B' },
  danger: { label: 'Error', color: '#E13C3C' },
  warning: { label: 'Warning', color: '#F89C1C' },
  primary: { label: 'Info', color: '#0052cc' },
};

const DURATION_OPTIONS = [
  { value: 3, label: '3s' },
  { value: 5, label: '5s' },
  { value: 10, label: '10s' },
  { value: 0, label: 'Never' },
];

const EXAMPLE_CONFIGS = [
  {
    type: 'success',
    title: '✨ Task completed',
    message: 'Your issue has been successfully updated.',
    description: 'Use for successful operations and confirmations',
  },
  {
    type: 'danger',
    title: '⚠️ Something went wrong',
    message: 'Failed to update the issue. Please try again.',
    description: 'Use for errors and failures',
  },
  {
    type: 'warning',
    title: '🔔 Heads up',
    message: 'This action cannot be undone.',
    description: 'Use for warnings and important notices',
  },
  {
    type: 'primary',
    title: 'ℹ️ New feature',
    message: 'Check out the new dashboard improvements.',
    description: 'Use for informational messages',
  },
];

const Toast = () => {
  const [selectedType, setSelectedType] = useState('success');
  const [title, setTitle] = useState('Magic happens here ✨');
  const [message, setMessage] = useState('The wizard approves this notification!');
  const [selectedDuration, setSelectedDuration] = useState(5);

  const handleShowToast = () => {
    const toastConfig = {
      type: selectedType === 'primary' ? 'primary' : selectedType,
      title,
      message: message || undefined,
      duration: selectedDuration,
    };

    if (selectedType === 'primary') {
      toast.show(toastConfig);
    } else if (selectedType === 'success') {
      toast.success(title);
    } else if (selectedType === 'danger') {
      toast.error(new Error(message || title));
    } else {
      toast.show(toastConfig);
    }
  };

  const handleShowExample = (config) => {
    if (config.type === 'primary') {
      toast.show({
        type: 'primary',
        title: config.title,
        message: config.message,
        duration: 5,
      });
    } else if (config.type === 'success') {
      toast.success(config.title);
    } else if (config.type === 'danger') {
      toast.error(new Error(config.message || config.title));
    } else {
      toast.show({
        type: config.type,
        title: config.title,
        message: config.message,
        duration: 5,
      });
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <Breadcrumbs items={['Projects', 'Toast Notifications']} />
        <PageTitle>Toast Notifications</PageTitle>
        <PageSubtitle>
          Non-intrusive feedback messages that appear briefly at the top-right of your screen.
          Perfect for notifying users of actions, errors, and important updates.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>🎮 Interactive Playground</SectionTitle>
        <PlaygroundCard>
          <FormRow>
            <FormLabel>Toast Type</FormLabel>
            <TypeButtonGroup>
              {Object.entries(TOAST_TYPES).map(([key, { label }]) => (
                <TypeButton
                  key={key}
                  isActive={selectedType === key}
                  onClick={() => setSelectedType(key)}
                >
                  {label}
                </TypeButton>
              ))}
            </TypeButtonGroup>
          </FormRow>

          <FormRow>
            <FormLabel>Title *</FormLabel>
            <InputField
              value={title}
              onChange={(value) => setTitle(value)}
              placeholder="Enter toast title..."
            />
          </FormRow>

          <FormRow>
            <FormLabel>Message (optional)</FormLabel>
            <InputField
              value={message}
              onChange={(value) => setMessage(value)}
              placeholder="Add a supporting message..."
            />
          </FormRow>

          <FormRow>
            <FormLabel>Auto-dismiss</FormLabel>
            <DurationButtonGroup>
              {DURATION_OPTIONS.map(({ value, label: durationLabel }) => (
                <DurationButton
                  key={value}
                  isActive={selectedDuration === value}
                  onClick={() => setSelectedDuration(value)}
                >
                  {durationLabel}
                </DurationButton>
              ))}
            </DurationButtonGroup>
          </FormRow>

          <ShowToastButton variant="primary" onClick={handleShowToast}>
            Show Toast 🚀
          </ShowToastButton>
        </PlaygroundCard>
      </Section>

      <Section>
        <SectionTitle>📚 Quick Examples</SectionTitle>
        <ExamplesRow>
          {EXAMPLE_CONFIGS.map((config) => (
            <ExampleCard key={config.type}>
              <ExampleBorder type={config.type} />
              <ExampleLabel>{TOAST_TYPES[config.type].label}</ExampleLabel>
              <ExampleDescription>{config.description}</ExampleDescription>
              <ExampleButton
                variant="secondary"
                onClick={() => handleShowExample(config)}
              >
                Try it
              </ExampleButton>
            </ExampleCard>
          ))}
        </ExamplesRow>
      </Section>
    </PageContainer>
  );
};

export default Toast;
