import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 40px;
  max-width: 520px;
`;

export const MascotImage = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 32px;
  user-select: none;
  pointer-events: none;
`;

export const Heading = styled.h1`
  margin: 0 0 16px;
  ${font.bold}
  ${font.size(42)}
  color: ${color.danger};
  letter-spacing: -0.5px;
`;

export const Subtext = styled.p`
  margin: 0 0 36px;
  ${font.regular}
  ${font.size(18)}
  color: ${color.textMedium};
  line-height: 1.6;
`;
