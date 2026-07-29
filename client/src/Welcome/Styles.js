import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fff;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 24px;
`;

export const MascotImage = styled.img`
  width: 280px;
  height: auto;
  margin-bottom: 24px;
  user-select: none;
`;

export const Heading = styled.h1`
  ${font.bold}
  ${font.size(42)}
  color: ${color.danger};
  margin: 0 0 16px 0;
`;

export const Subtitle = styled.p`
  ${font.regular}
  ${font.size(18)}
  color: ${color.textMedium};
  margin: 0 0 40px 0;
  max-width: 360px;
  line-height: 1.6;
`;
