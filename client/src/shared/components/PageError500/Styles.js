import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #0d1117;
  padding: 40px;
`;

export const ErrorPageInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 560px;
  width: 100%;
`;

export const AvatarWrapper = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 32px;
  border: 3px solid transparent;
  background: linear-gradient(#0d1117, #0d1117) padding-box,
    linear-gradient(135deg, #ff6b6b, #ffa94d, #ff8787, #e03131) border-box;
  box-shadow: 0 0 32px rgba(255, 107, 107, 0.2), 0 0 64px rgba(224, 49, 49, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ErrorCode = styled.h1`
  ${font.bold}
  font-size: 96px;
  line-height: 1;
  margin: 0 0 16px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ffa94d 40%, #ff8787 70%, #e03131 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -2px;
`;

export const Title = styled.h2`
  ${font.bold}
  font-size: 28px;
  color: #e03131;
  margin: 0 0 12px;
  letter-spacing: -0.5px;
`;

export const Description = styled.p`
  ${font.regular}
  font-size: 16px;
  color: #8b949e;
  margin: 0 0 36px;
  line-height: 1.6;
  max-width: 400px;
`;

export const HomeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, #e03131, #ff6b6b);
  color: #ffffff;
  ${font.medium}
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
  border: none;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
