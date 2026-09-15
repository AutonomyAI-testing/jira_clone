import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${color.backgroundLightest};
`;

export const MascotWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const MascotImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: contain;
  object-position: center;
`;

export const WelcomeTitle = styled.h1`
  ${font.black}
  font-size: 48px;
  color: ${color.danger};
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
`;
