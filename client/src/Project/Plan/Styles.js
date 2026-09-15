import styled from 'styled-components';

import { color, font, zIndexValues } from 'shared/utils/styles';

export const PlanPage = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zIndexValues.navLeft + 10};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000000;
`;

export const Title = styled.h1`
  margin: 0 0 32px;
  color: ${color.danger};
  ${font.bold}
  ${font.size(42)}
  letter-spacing: 1px;
`;

export const MascotImage = styled.img`
  width: 300px;
  height: auto;
  opacity: 0.85;
  margin-top: 8px;
`;
