import React from 'react';
import { createGlobalStyle } from 'styled-components';
import '../src/App/fontStyles.css';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; padding: 0; font-family: 'CircularStdBook', sans-serif; background: #fff; }
`;

const preview = {
  decorators: [
    Story => React.createElement(React.Fragment, null, React.createElement(GlobalStyle, null), React.createElement(Story, null)),
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export default preview;
