import React from 'react';

import WizardRobotAvatar from './index';

export default {
  title: 'WizardRobotAvatar',
  component: WizardRobotAvatar,
};

export const small = () => <WizardRobotAvatar size={80} />;

export const default_ = () => <WizardRobotAvatar />;

export const large = () => <WizardRobotAvatar size={320} />;

export const multiple = () => (
  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
    <WizardRobotAvatar size={80} />
    <WizardRobotAvatar size={200} />
    <WizardRobotAvatar size={320} />
  </div>
);
