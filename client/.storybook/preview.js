import React from 'react';
import { createGlobalStyle } from 'styled-components';
import '../src/App/fontStyles.css';

// Import global styles inline in preview (NormalizeStyles + BaseStyles)
const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'CircularStdBook', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 1.2;
    color: #172b4d;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }
`;

const preview = {
  parameters: {
    layout: 'padded',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  decorators: [
    function(Story) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(GlobalStyles, null),
        React.createElement(Story, null)
      );
    },
  ],
};

export default preview;
