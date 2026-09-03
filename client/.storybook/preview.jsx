import React from 'react';
import { createGlobalStyle } from 'styled-components';

import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';
import '../src/App/fontStyles.css';

const FixEmptyRoot = createGlobalStyle`
  body > #root:empty { display: none !important; height: 0 !important; min-height: 0 !important; }
`;

export const decorators = [
  Story => (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <FixEmptyRoot />
      <Story />
    </>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
};
