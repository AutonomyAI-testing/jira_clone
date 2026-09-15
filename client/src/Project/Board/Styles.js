import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  width: 100%;
`;

export const MascotImage = styled.img`
  width: 240px;
  min-width: 240px;
  object-fit: contain;
  margin-bottom: 32px;
`;

export const WelcomeHeading = styled.h1`
  ${font.bold}
  font-size: 40px;
  color: ${color.danger};
  margin: 0;
  text-align: center;
`;
