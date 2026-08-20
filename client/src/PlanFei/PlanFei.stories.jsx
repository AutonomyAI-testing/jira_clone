import React from 'react';

import PlanFei from './index';

export default {
  title: 'PlanFei',
  component: PlanFei,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <PlanFei />;
