import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
`;

export const MascotWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 380px;
  margin-bottom: 36px;
`;

export const MascotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const Title = styled.h1`
  ${font.black}
  font-size: 48px;
  color: ${color.danger};
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.5px;
`;
