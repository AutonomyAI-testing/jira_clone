import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import '../src/App/fontStyles.css';

export const decorators = [
  Story => (
    <MemoryRouter initialEntries={['/project/1/board']}>
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  layout: 'fullscreen',
};
