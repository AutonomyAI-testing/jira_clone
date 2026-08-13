import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #fff;
`;

export const MascotImage = styled.img`
  width: 240px;
  height: auto;
  margin-bottom: 32px;
  user-select: none;
`;

export const WelcomeHeading = styled.h1`
  ${font.bold}
  ${font.size(42)}
  color: ${color.textDarkest};
  margin: 0;
  letter-spacing: -0.5px;
`;
