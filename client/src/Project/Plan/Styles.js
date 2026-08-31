import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const PlanContainer = styled.div`
  position: relative;
  padding: 26px 40px;
  min-height: 600px;
  height: calc(100vh - 60px);
  overflow: hidden;
`;

export const PlanHeading = styled.h1`
  position: relative;
  z-index: 1;
  color: #36B37E;
  font-size: 40px;
  ${font.bold}
  margin: 0 0 8px 0;
  line-height: 1.2;
`;

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 500px;
  height: 580px;
  opacity: 0.18;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  pointer-events: none;
`;
