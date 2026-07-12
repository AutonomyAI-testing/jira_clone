import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

// All three variants side by side — anime (120px), avatarUrl, and initials — all with red outline
export const AllVariants = () => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '48px', padding: '24px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <Avatar variant="anime" size={120} />
      <span style={{ fontSize: '13px', color: '#555', fontWeight: 'bold' }}>anime</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <Avatar avatarUrl="https://i.pravatar.cc/300?img=47" size={120} name="User Photo" />
      <span style={{ fontSize: '13px', color: '#555', fontWeight: 'bold' }}>avatarUrl</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <Avatar name="Dana White" size={120} />
      <span style={{ fontSize: '13px', color: '#555', fontWeight: 'bold' }}>initials</span>
    </div>
  </div>
);

AllVariants.storyName = 'All Variants - With Red Outline';

// Anime variant at multiple sizes
export const AnimeSizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: '#fff' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <Avatar variant="anime" size={32} />
      <span style={{ fontSize: '12px', color: '#666' }}>32px</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <Avatar variant="anime" size={48} />
      <span style={{ fontSize: '12px', color: '#666' }}>48px</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <Avatar variant="anime" size={80} />
      <span style={{ fontSize: '12px', color: '#666' }}>80px</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <Avatar variant="anime" size={120} />
      <span style={{ fontSize: '12px', color: '#666' }}>120px</span>
    </div>
  </div>
);

AnimeSizes.storyName = 'Anime Variant - Multiple Sizes';

// Default variant with avatarUrl
export const WithAvatarUrl = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', background: '#fff' }}>
    <Avatar avatarUrl="https://i.pravatar.cc/300?img=47" size={32} name="User One" />
    <Avatar avatarUrl="https://i.pravatar.cc/300?img=12" size={48} name="User Two" />
    <Avatar avatarUrl="https://i.pravatar.cc/300?img=33" size={80} name="User Three" />
  </div>
);

WithAvatarUrl.storyName = 'Default - With Avatar URL';

// Default variant with initials
export const WithInitials = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', background: '#fff' }}>
    <Avatar name="Alice Johnson" size={32} />
    <Avatar name="Bob Smith" size={48} />
    <Avatar name="Charlie Brown" size={80} />
    <Avatar name="Dana White" size={120} />
  </div>
);

WithInitials.storyName = 'Default - With Initials';

// Single large anime avatar for comparison with reference
export const AnimeLarge = () => (
  <div style={{ padding: '32px', background: '#fff' }}>
    <Avatar variant="anime" size={120} />
  </div>
);

AnimeLarge.storyName = 'Anime Variant - Large (120px)';
