import styled, { keyframes } from 'styled-components';

import { color, font } from 'shared/utils/styles';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

export const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(160deg, #e8f0fe 0%, #F4F5F7 50%, #dff0ec 100%);
  padding: 40px 24px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 48px 64px;
  max-width: 540px;
  width: 100%;
`;

export const MascotWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  overflow: hidden;
  background: #f0f7ef;
  margin-bottom: 32px;
  animation: ${floatAnimation} 3.5s ease-in-out infinite;
  flex-shrink: 0;
`;

export const MascotImage = styled.img`
  width: 72%;
  height: 72%;
  object-fit: contain;
  object-position: center;
`;

export const Greeting = styled.h1`
  margin: 0 0 12px;
  color: #e13c3c;
  text-align: center;
  ${font.black}
  font-size: 32px;
  line-height: 1.2;
`;

export const Tagline = styled.p`
  margin: 0 0 8px;
  color: ${color.textMedium};
  text-align: center;
  ${font.regular}
  font-size: 16px;
  line-height: 1.6;
  max-width: 380px;
`;

export const Subtitle = styled.p`
  margin: 0 0 36px;
  color: ${color.textLight};
  text-align: center;
  ${font.regular}
  font-size: 14px;
  line-height: 1.5;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  color: ${color.textLink};
  ${font.medium}
  font-size: 14px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
