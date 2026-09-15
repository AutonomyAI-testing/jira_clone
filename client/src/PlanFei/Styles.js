import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Page = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const MascotImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
`;

export const PlanFeiText = styled.h1`
  position: relative;
  z-index: 10;
  color: ${color.danger};
  ${font.bold}
  font-size: 56px;
  letter-spacing: 2px;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 12px rgba(255, 255, 255, 0.8);
  align-self: flex-end;
  margin-bottom: 48px;
`;
