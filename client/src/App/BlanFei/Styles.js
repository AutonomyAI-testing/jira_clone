import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

import wizardBackground from 'App/assets/blan-fei-wizard.png';

export const BlanFeiPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${color.backgroundLightest};
  background-image: url(${wizardBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Title = styled.h1`
  ${font.bold}
  ${font.size(64)}
  color: ${color.danger};
  padding-top: 420px;
`;
