import React from 'react';
import WizardAvatar from './WizardAvatar';

export default {
  title: 'Shared/WizardAvatar',
  component: WizardAvatar,
  parameters: {
    layout: 'centered',
  },
};

export const AllSizes = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '32px', padding: '16px', paddingTop: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <WizardAvatar size={48} />
        <span style={{ fontSize: '12px', color: '#FF0000', fontFamily: 'sans-serif' }}>Small (48px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <WizardAvatar size={128} />
        <span style={{ fontSize: '12px', color: '#FF0000', fontFamily: 'sans-serif' }}>Default (128px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <WizardAvatar size={200} />
        <span style={{ fontSize: '12px', color: '#FF0000', fontFamily: 'sans-serif' }}>Large (200px)</span>
      </div>
    </div>
  ),
};

export const Default = {
  args: {
    size: 128,
  },
};

export const Small = {
  args: {
    size: 48,
  },
};

export const Large = {
  args: {
    size: 200,
  },
};
