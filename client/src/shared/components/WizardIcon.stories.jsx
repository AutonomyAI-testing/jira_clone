import React from 'react';
import WizardIcon from './WizardIcon';

export default {
  title: 'Shared/WizardIcon',
  component: WizardIcon,
  parameters: {
    layout: 'centered',
  },
};

export const Size48 = () => (
  <div style={{ background: '#f4f5f7', padding: '24px', borderRadius: '8px' }}>
    <WizardIcon size={48} />
  </div>
);
Size48.storyName = 'Size 48';

export const Size64 = () => (
  <div style={{ background: '#f4f5f7', padding: '24px', borderRadius: '8px' }}>
    <WizardIcon size={64} />
  </div>
);
Size64.storyName = 'Size 64';

export const Size96 = () => (
  <div style={{ background: '#f4f5f7', padding: '24px', borderRadius: '8px' }}>
    <WizardIcon size={96} />
  </div>
);
Size96.storyName = 'Size 96';

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end', padding: '32px' }}>
    <div style={{ textAlign: 'center' }}>
      <WizardIcon size={48} />
      <div style={{ marginTop: '8px', fontSize: '12px', color: '#5e6c84' }}>48px</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <WizardIcon size={64} />
      <div style={{ marginTop: '8px', fontSize: '12px', color: '#5e6c84' }}>64px</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <WizardIcon size={96} />
      <div style={{ marginTop: '8px', fontSize: '12px', color: '#5e6c84' }}>96px</div>
    </div>
  </div>
);
AllSizes.storyName = 'All Sizes';
