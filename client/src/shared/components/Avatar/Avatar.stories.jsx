import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

// Demo styles for grid layout with labeled variants
const GRID_CONTAINER_STYLES = {
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
  padding: '24px',
  flexWrap: 'wrap',
};

const VARIANT_WRAPPER_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
};

const LABEL_STYLES = {
  fontSize: '12px',
  color: '#666',
};

// Avatar variant gallery showing different sizes and image/letter fallback combinations
export const AllVariants = {
  render: () => (
    <div style={GRID_CONTAINER_STYLES}>
      <div style={VARIANT_WRAPPER_STYLES}>
        <Avatar name="John Smith" avatarUrl="https://i.pravatar.cc/300?img=47" size={32} />
        <span style={LABEL_STYLES}>With Image (32px)</span>
      </div>
      <div style={VARIANT_WRAPPER_STYLES}>
        <Avatar name="John Smith" avatarUrl={null} size={32} />
        <span style={LABEL_STYLES}>Letter Fallback (32px)</span>
      </div>
      <div style={VARIANT_WRAPPER_STYLES}>
        <Avatar name="Alice Johnson" avatarUrl="https://i.pravatar.cc/300?img=5" size={64} />
        <span style={LABEL_STYLES}>With Image (64px)</span>
      </div>
      <div style={VARIANT_WRAPPER_STYLES}>
        <Avatar name="Alice Johnson" avatarUrl={null} size={64} />
        <span style={LABEL_STYLES}>Letter Fallback (64px)</span>
      </div>
      <div style={VARIANT_WRAPPER_STYLES}>
        <Avatar name="Bob Martinez" avatarUrl={null} size={48} />
        <span style={LABEL_STYLES}>B (48px)</span>
      </div>
      <div style={VARIANT_WRAPPER_STYLES}>
        <Avatar name="Sandra Lee" avatarUrl={null} size={48} />
        <span style={LABEL_STYLES}>S (48px)</span>
      </div>
    </div>
  ),
};

export const WithImage = {
  args: {
    name: 'John Smith',
    avatarUrl: 'https://i.pravatar.cc/300?img=47',
    size: 32,
  },
};

export const LetterFallback = {
  args: {
    name: 'John Smith',
    avatarUrl: null,
    size: 32,
  },
};
