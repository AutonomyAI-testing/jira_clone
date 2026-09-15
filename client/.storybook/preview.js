import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import '../src/App/fontStyles.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0; padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: #fff; color: #172b4d; font-size: 15px; line-height: 1.5;
  }
`;

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <GlobalStyle />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};
