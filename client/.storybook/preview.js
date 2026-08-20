import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';

// Fonts embedded as base64 (generated) so CircularStd renders in Storybook.
import './circularFonts.css';

export const parameters = {
  layout: 'fullscreen',
};

export const decorators = [
  Story => (
    <MemoryRouter initialEntries={['/plan-fei']}>
      <NormalizeStyles />
      <BaseStyles />
      <Story />
    </MemoryRouter>
  ),
];
