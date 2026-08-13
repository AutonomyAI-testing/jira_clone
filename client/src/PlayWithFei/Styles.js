import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const MascotImage = styled.img`
  height: 280px;
  width: auto;
  display: block;
`;

export const Title = styled.h1`
  color: ${color.danger};
  ${font.size(48)}
  ${font.bold}
  margin-top: 24px;
  text-align: center;
`;
