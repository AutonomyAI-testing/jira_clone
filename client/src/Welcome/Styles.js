import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
  padding: 40px 20px;
`;

export const MascotImage = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 32px;
  /* subtle drop shadow to lift the character off the background */
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.12));
`;

export const Heading = styled.h1`
  ${font.black}
  font-size: 40px;
  color: ${color.danger};
  margin: 0 0 12px;
  text-align: center;
  line-height: 1.2;
`;

export const Tagline = styled.p`
  ${font.regular}
  font-size: 18px;
  color: ${color.textMedium};
  margin: 0 0 40px;
  text-align: center;
  max-width: 400px;
  line-height: 1.6;
`;
