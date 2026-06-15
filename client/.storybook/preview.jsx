import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import NormalizeStyles from '../src/App/NormalizeStyles';
import '../src/App/fontStyles.css';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f4f5f7;
    font-family: 'CircularStdBook', sans-serif;
  }
`;

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/project/1/board']}>
        <NormalizeStyles />
        <GlobalLinkReset />
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
