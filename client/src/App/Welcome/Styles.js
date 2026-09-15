import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${color.backgroundLightest};
`;

export const MascotWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 320px;
  margin-bottom: 32px;
`;

export const MascotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const Title = styled.h1`
  ${font.black}
  font-size: 42px;
  line-height: 1.2;
  color: ${color.danger};
  margin: 0 0 12px 0;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  ${font.regular}
  font-size: 16px;
  line-height: 1.5;
  color: ${color.textMedium};
  margin: 0;
`;
