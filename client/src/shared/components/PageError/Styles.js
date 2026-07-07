import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 64px 24px;
  gap: 28px;
  background: #ffffff;
`;

export const ErrorCode = styled.h1`
  margin: 0;
  ${font.black}
  font-size: 128px;
  line-height: 1;
  color: ${color.primary};
  letter-spacing: -4px;

  @media (max-width: 600px) {
    font-size: 80px;
    letter-spacing: -2px;
  }
`;

export const ErrorTitle = styled.h2`
  margin: 0;
  ${font.bold}
  font-size: 28px;
  line-height: 1.3;
  color: ${color.danger};
  text-align: center;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const ErrorSubtext = styled.p`
  margin: 0;
  ${font.regular}
  font-size: 16px;
  line-height: 1.6;
  color: ${color.textMedium};
  text-align: center;
  max-width: 400px;
`;

export const AvatarWrapper = styled.div`
  width: 272px;
  height: 272px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #00d4d4, #7c3aed, #3b82f6);
  box-shadow: 0 8px 32px rgba(0, 82, 204, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 210px;
    height: 210px;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  background: #fff;
`;

export const BackButton = styled.a`
  display: inline-block;
  padding: 13px 36px;
  background: ${color.primary};
  color: #fff;
  ${font.medium}
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s ease;

  &:hover {
    background: #0747a6;
    color: #fff;
  }

  &:active {
    background: #0a3880;
  }
`;
