import React from 'react';

import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
};

export const Default = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 24 }}>
    <Avatar name="John Doe" size={32} />
    <Avatar name="Alice Smith" size={32} />
    <Avatar name="Bob Martin" size={32} />
  </div>
);

export const WithPhoto = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 24 }}>
    <Avatar
      avatarUrl="https://i.pravatar.cc/150?img=1"
      name="User One"
      size={32}
    />
    <Avatar
      avatarUrl="https://i.pravatar.cc/150?img=2"
      name="User Two"
      size={48}
    />
  </div>
);

export const WizardVariant = () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 24 }}>
    <Avatar variant="wizard" size={32} />
    <Avatar variant="wizard" size={48} />
    <Avatar variant="wizard" size={64} />
    <Avatar variant="wizard" size={96} />
    <Avatar variant="wizard" size={128} />
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', padding: 24 }}>
    <Avatar name="A" size={24} />
    <Avatar name="B" size={32} />
    <Avatar name="C" size={48} />
    <Avatar name="D" size={64} />
  </div>
);
