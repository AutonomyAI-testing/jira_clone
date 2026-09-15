import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${color.backgroundLightest};
  padding: 40px 24px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  width: 100%;
  text-align: center;
`;

export const MascotWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MascotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const WelcomeHeading = styled.h1`
  ${font.black}
  font-size: 36px;
  line-height: 1.2;
  color: ${color.danger};
  margin: 0 0 16px 0;
`;

export const Subtitle = styled.p`
  ${font.regular}
  font-size: 16px;
  line-height: 1.5;
  color: ${color.textMedium};
  margin: 0 0 40px 0;
`;

export const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 28px;
  background-color: ${color.primary};
  color: #fff;
  border-radius: 3px;
  ${font.medium}
  font-size: 15px;
  text-decoration: none;
  transition: background-color 0.15s;
  cursor: pointer;

  &:hover {
    background-color: #0042a3;
  }

  &:active {
    background-color: #003d99;
  }
`;
