import React from 'react';
import Avatar from './index';

// Shared styles for consistent layout across avatar stories
const FLEX_CONTAINER = { display: 'flex', gap: '16px', alignItems: 'center', padding: '24px' };
const FLEX_CONTAINER_LARGE_GAP = {
  display: 'flex',
  gap: '24px',
  alignItems: 'flex-end',
  padding: '24px',
};
const FLEX_CONTAINER_SMALL_GAP = {
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  padding: '24px',
};
const LABEL_STYLE = {
  fontSize: '11px',
  fontWeight: 600,
  color: '#5E6C84',
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};
const SIZE_LABEL_STYLE = {
  fontSize: '10px',
  color: '#8993a4',
  marginTop: '6px',
  textAlign: 'center',
};

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

// Story 1: Avatar with a profile image URL (circular cropped image)
export const WithImage = {
  name: 'With Profile Image',
  render: () => (
    <div style={FLEX_CONTAINER}>
      <Avatar avatarUrl="https://i.pravatar.cc/150?img=3" name="Alice" size={32} />
      <Avatar avatarUrl="https://i.pravatar.cc/150?img=12" name="Bob" size={48} />
      <Avatar avatarUrl="https://i.pravatar.cc/150?img=47" name="Carol" size={64} />
    </div>
  ),
};

// Story 2: Letter avatar (initial only, color derived from name)
export const WithName = {
  name: 'Letter Avatar (Name Only)',
  render: () => (
    <div style={FLEX_CONTAINER}>
      <Avatar name="Alice" size={40} />
      <Avatar name="Bob" size={40} />
      <Avatar name="Sam" size={40} />
      <Avatar name="Diana" size={40} />
      <Avatar name="Eve" size={40} />
    </div>
  ),
};

// Story 3: Size variations
export const SizeVariations = {
  name: 'Size Variations',
  render: () => (
    <div style={FLEX_CONTAINER}>
      {avatarPreviewBox(
        <Avatar name="Small" size={24} />,
        <div style={{ fontSize: '11px', marginTop: '6px', color: '#5E6C84' }}>Small (24px)</div>,
      )}
      {avatarPreviewBox(
        <Avatar name="Medium" size={32} />,
        <div style={{ fontSize: '11px', marginTop: '6px', color: '#5E6C84' }}>Medium (32px)</div>,
      )}
      {avatarPreviewBox(
        <Avatar name="Large" size={48} />,
        <div style={{ fontSize: '11px', marginTop: '6px', color: '#5E6C84' }}>Large (48px)</div>,
      )}
      {avatarPreviewBox(
        <Avatar name="XLarge" size={64} />,
        <div style={{ fontSize: '11px', marginTop: '6px', color: '#5E6C84' }}>XL (64px)</div>,
      )}
    </div>
  ),
};

const label = text => <div style={LABEL_STYLE}>{text}</div>;

const sizeLabel = px => <div style={SIZE_LABEL_STYLE}>{px}px</div>;

const avatarPreviewBox = (avatar, sizeText) => (
  <div style={{ textAlign: 'center' }}>
    {avatar}
    {sizeText}
  </div>
);

// Story 4: All variants together
const ALL_VARIANTS_COLUMN = {
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  padding: '24px',
  minWidth: '500px',
};

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={ALL_VARIANTS_COLUMN}>
      {/* Image avatars with size variations */}
      <div>
        {label('Profile Image — Small / Medium / Large')}
        <div style={FLEX_CONTAINER_LARGE_GAP}>
          {avatarPreviewBox(
            <Avatar avatarUrl="https://i.pravatar.cc/150?img=1" name="User" size={24} />,
            sizeLabel(24),
          )}
          {avatarPreviewBox(
            <Avatar avatarUrl="https://i.pravatar.cc/150?img=5" name="User2" size={36} />,
            sizeLabel(36),
          )}
          {avatarPreviewBox(
            <Avatar avatarUrl="https://i.pravatar.cc/150?img=10" name="User3" size={56} />,
            sizeLabel(56),
          )}
          {avatarPreviewBox(
            <Avatar avatarUrl="https://i.pravatar.cc/150?img=20" name="User4" size={80} />,
            sizeLabel(80),
          )}
        </div>
      </div>
      {/* Letter avatars with size variations */}
      <div>
        {label('Letter Avatar (Name Only) — Small / Medium / Large')}
        <div style={FLEX_CONTAINER_LARGE_GAP}>
          {avatarPreviewBox(<Avatar name="Alice" size={24} />, sizeLabel(24))}
          {avatarPreviewBox(<Avatar name="Bob" size={36} />, sizeLabel(36))}
          {avatarPreviewBox(<Avatar name="Carlos" size={56} />, sizeLabel(56))}
          {avatarPreviewBox(<Avatar name="Diana" size={80} />, sizeLabel(80))}
        </div>
      </div>
      {/* Multiple names showing color variety */}
      <div>
        {label('Letter Avatars — Color Variety by Name')}
        <div style={FLEX_CONTAINER_SMALL_GAP}>
          <Avatar name="Alice" size={40} />
          <Avatar name="Bob" size={40} />
          <Avatar name="Sam" size={40} />
          <Avatar name="Diana" size={40} />
          <Avatar name="Eve" size={40} />
          <Avatar name="Frank" size={40} />
        </div>
      </div>
    </div>
  ),
};
