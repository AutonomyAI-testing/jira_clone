import React, { useState } from 'react';
import pubsub from 'sweet-pubsub';

import {
  PageCont,
  Hero,
  HeroMascot,
  HeroTitle,
  HeroSubtitle,
  SectionTitle,
  CardsGrid,
  VariantCard,
  CardHeader,
  CardIcon,
  CardName,
  CardDescription,
  CardMessage,
  CustomMessageContainer,
  CustomMessageLabel,
  CustomMessageInput,
  TriggerButton,
  CodeSection,
  CodeTitle,
  CodeBlock,
} from './Styles';

// Toast notification variants with their display properties and usage guidelines
// The color is used for the left border accent on each card
const TOAST_VARIANTS = [
  {
    type: 'success',
    title: 'Success',
    color: '#0B875B',
    icon: '✅',
    description: 'Use for successful operations, confirmations, and positive feedback.',
    defaultMessage: 'Changes have been saved successfully.',
  },
  {
    type: 'danger',
    title: 'Error',
    color: '#E13C3C',
    icon: '❌',
    description: 'Use for errors, failures, and destructive action results.',
    defaultMessage: 'Something went wrong. Please try again.',
  },
  {
    type: 'warning',
    title: 'Warning',
    color: '#F89C1C',
    icon: '⚠️',
    description: 'Use for cautionary notices and risky actions.',
    defaultMessage: 'This action cannot be undone. Proceed with caution.',
  },
  {
    type: 'primary',
    title: 'Info',
    color: '#0052cc',
    icon: 'ℹ️',
    description: 'Use for general information, tips, and neutral updates.',
    defaultMessage: 'A new version is available. Please refresh.',
  },
];

const ToastShowcase = () => {
  const [customMessage, setCustomMessage] = useState('');

  // Trigger a toast notification with the variant's configuration
  // If a custom message is provided (only for the first variant), use it; otherwise use the default
  const handleTriggerToast = variant => {
    const message = customMessage.trim() || variant.defaultMessage;

    pubsub.emit('toast', {
      type: variant.type,
      title: variant.title,
      message,
      duration: 5,
    });

    setCustomMessage('');
  };

  return (
    <PageCont>
      <Hero>
        <HeroMascot>
          <span role="img" aria-label="Wizard mascot">
            🧙
          </span>
        </HeroMascot>
        <HeroTitle>Toast Notifications</HeroTitle>
        <HeroSubtitle>Explore all notification variants and trigger them live</HeroSubtitle>
      </Hero>

      <SectionTitle>Notification Variants</SectionTitle>

      <CardsGrid>
        {TOAST_VARIANTS.map(variant => (
          <VariantCard key={variant.type} borderColor={variant.color}>
            <CardHeader>
              <CardIcon>{variant.icon}</CardIcon>
              <CardName>{variant.title}</CardName>
            </CardHeader>

            <CardDescription>{variant.description}</CardDescription>

            <CardMessage>{variant.defaultMessage}</CardMessage>

            {/* Custom message input only appears on the first variant (Success) */}
            {variant === TOAST_VARIANTS[0] && (
              <CustomMessageContainer>
                <CustomMessageLabel>Custom Message (Optional)</CustomMessageLabel>
                <CustomMessageInput
                  value={customMessage}
                  onChange={e => setCustomMessage(e.target.value)}
                  placeholder="Type a custom message for any variant..."
                />
              </CustomMessageContainer>
            )}

            <TriggerButton onClick={() => handleTriggerToast(variant)}>Trigger Toast</TriggerButton>
          </VariantCard>
        ))}
      </CardsGrid>

      <CodeSection>
        <CodeTitle>Usage Example</CodeTitle>
        <CodeBlock>
          {`import pubsub from 'sweet-pubsub';

// Fire a toast notification
pubsub.emit('toast', {
  type: 'success',    // 'success' | 'danger' | 'warning' | 'primary'
  title: 'Success!',
  message: 'Your changes have been saved.',
  duration: 5,        // seconds, 0 = sticky
});

// OR use the toast utility
import toast from 'shared/utils/toast';
toast.show({
  type: 'success',
  title: 'Success!',
  message: 'Your changes have been saved.',
  duration: 5,
});`}
        </CodeBlock>
      </CodeSection>
    </PageCont>
  );
};

export default ToastShowcase;
