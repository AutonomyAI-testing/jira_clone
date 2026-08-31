import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

import wizardImage from './assets/wizard-robot.png';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 64px);
  background-image: url('${wizardImage}');
  background-position: center 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
  padding-top: 24px;
`;

export const Title = styled.h1`
  ${font.black}
  ${font.size(42)}
  color: ${color.success};
  letter-spacing: 1px;
  text-align: center;
  user-select: none;
`;
