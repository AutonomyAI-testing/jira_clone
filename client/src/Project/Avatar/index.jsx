import React, { useState } from 'react';

import WizardRobotIllustration from './WizardRobotIllustration';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  ContentGrid,
  GallerySection,
  SectionTitle,
  AvatarGrid,
  AvatarCard,
  FeaturedBadge,
  SelectedCheckmark,
  CardLabel,
  LetterAvatar,
  PreviewPanel,
  PreviewTitle,
  PreviewSizes,
  PreviewSizeRow,
  SizeLabel,
  PreviewLetterAvatar,
  ApplyButton,
  AppliedBanner,
} from './Styles';

const AVATAR_COLORS = [
  '#DA7657',
  '#6ADA57',
  '#5784DA',
  '#AA57DA',
  '#DA5757',
  '#DA5792',
  '#57DACA',
  '#57A5DA',
];

const PREVIEW_SIZES = [
  { size: 24, label: '24px' },
  { size: 32, label: '32px' },
  { size: 48, label: '48px' },
  { size: 64, label: '64px' },
  { size: 128, label: '128px' },
];

const LETTER_OPTIONS = AVATAR_COLORS.map((color, i) => ({
  id: `letter-${i}`,
  type: 'letter',
  color,
  label: String.fromCharCode(65 + i), // A, B, C ...
}));

const WIZARD_OPTION = {
  id: 'wizard-robot',
  type: 'wizard',
  label: 'Wizard Robot',
};

const ALL_OPTIONS = [WIZARD_OPTION, ...LETTER_OPTIONS];

const AvatarPreviewContent = ({ option, size }) => {
  if (!option) return null;

  if (option.type === 'wizard') {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          background: '#e8dcc8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <WizardRobotIllustration size={size} />
      </div>
    );
  }

  return (
    <PreviewLetterAvatar size={size} bg={option.color}>
      {option.label}
    </PreviewLetterAvatar>
  );
};

const AvatarPage = () => {
  const [selectedId, setSelectedId] = useState(WIZARD_OPTION.id);
  const [applied, setApplied] = useState(false);

  const selectedOption = ALL_OPTIONS.find(o => o.id === selectedId);

  const handleSelect = id => {
    setSelectedId(id);
    setApplied(false);
  };

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Choose Your Avatar</PageTitle>
        <PageSubtitle>
          Pick a profile picture that represents you across the project.
        </PageSubtitle>
      </PageHeader>

      <ContentGrid>
        {/* ── Gallery ── */}
        <GallerySection>
          <SectionTitle>Available Avatars</SectionTitle>
          <AvatarGrid>
            {ALL_OPTIONS.map(option => (
              <AvatarCard
                key={option.id}
                isSelected={selectedId === option.id}
                onClick={() => handleSelect(option.id)}
                role="radio"
                aria-checked={selectedId === option.id}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' || e.key === ' ' ? handleSelect(option.id) : undefined}
              >
                {option.type === 'wizard' && (
                  <FeaturedBadge><span role="img" aria-label="star">⭐</span> Featured</FeaturedBadge>
                )}

                <SelectedCheckmark visible={selectedId === option.id}>
                  ✓
                </SelectedCheckmark>

                {option.type === 'wizard' ? (
                  <WizardRobotIllustration size={option.id === selectedId ? 88 : 80} />
                ) : (
                  <LetterAvatar bg={option.color}>{option.label}</LetterAvatar>
                )}

                <CardLabel>{option.label}</CardLabel>
              </AvatarCard>
            ))}
          </AvatarGrid>
        </GallerySection>

        {/* ── Preview Panel ── */}
        <PreviewPanel>
          <PreviewTitle>Preview</PreviewTitle>

          <PreviewSizes>
            {PREVIEW_SIZES.map(({ size, label }) => (
              <PreviewSizeRow key={size}>
                <SizeLabel>{label}</SizeLabel>
                <AvatarPreviewContent option={selectedOption} size={size} />
              </PreviewSizeRow>
            ))}
          </PreviewSizes>

          <ApplyButton onClick={handleApply} disabled={applied}>
            {applied ? '✓ Applied!' : 'Apply Avatar'}
          </ApplyButton>

          {applied && (
            <AppliedBanner>Avatar updated successfully!</AppliedBanner>
          )}
        </PreviewPanel>
      </ContentGrid>
    </PageContainer>
  );
};

export default AvatarPage;
