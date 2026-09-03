import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

import robotImage from 'App/assets/plan-fei-robot.png';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${robotImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
`;

export const Title = styled.h1`
  ${font.black}
  ${font.size(48)}
  color: ${color.primary};
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
`;
