import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fff;
  padding: 40px 24px;
`;

export const MascotWrapper = styled.div`
  width: 380px;
  height: 380px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  font-size: 38px;
  line-height: 1.2;
  color: ${color.danger};
  margin: 0 0 16px 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  ${font.regular}
  font-size: 17px;
  line-height: 1.6;
  color: ${color.textMedium};
  margin: 0 0 36px 0;
  text-align: center;
  max-width: 440px;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${color.primary};
  color: #fff;
  ${font.medium}
  font-size: 15px;
  height: 40px;
  padding: 0 28px;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #0042a3;
    color: #fff;
  }

  &:active {
    background: #003d99;
  }
`;
