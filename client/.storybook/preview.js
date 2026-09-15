import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { color, font } from '../src/shared/utils/styles';
import '../src/App/fontStyles.css';

const StorybookGlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    min-height: 100%;
  }
  body {
    color: ${color.textDarkest};
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
    ${font.size(16)}
    ${font.regular}
    background: #f4f5f7;
  }
  *, *:after, *:before {
    box-sizing: border-box;
  }
`;

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => React.createElement(
      React.Fragment, null,
      React.createElement(StorybookGlobalStyles, null),
      React.createElement(Story, null),
    ),
  ],
};

export default preview;
