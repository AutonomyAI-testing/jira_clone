import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import NotFound404 from './index';

export default {
  title: 'Shared/NotFound404',
  component: NotFound404,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {},
};
