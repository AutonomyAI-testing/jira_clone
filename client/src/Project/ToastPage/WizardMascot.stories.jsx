import React from 'react';
import WizardMascot from './WizardMascot';

export default {
  title: 'Project/ToastPage/WizardMascot',
  component: WizardMascot,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <WizardMascot />;

export const Small = () => <WizardMascot width={140} height={160} />;

export const Large = () => <WizardMascot width={400} height={460} />;
