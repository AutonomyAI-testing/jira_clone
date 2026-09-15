import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #0b1120;
  background-image: radial-gradient(ellipse at 60% 20%, #1a2a4a 0%, #0b1120 60%);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 48px 40px 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(16px);
  ${mixin.boxShadowMedium}
`;

export const AvatarWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #74d7d7 0%, #89b4f8 50%, #c1a8f7 100%);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: #0b1120;
    z-index: 1;
  }
`;

export const StyledAvatar = styled(Avatar)`
  position: relative;
  z-index: 2;
`;

export const WelcomeText = styled.h1`
  ${font.bold}
  ${font.size(24)}
  color: #ffffff;
  margin: 0 0 6px;
  text-align: center;
`;

export const SubText = styled.p`
  ${font.regular}
  ${font.size(14)}
  color: ${color.textMedium};
  margin: 0 0 32px;
  text-align: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  ${font.medium}
  ${font.size(12)}
  color: ${color.textLight};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.07);
  ${font.regular}
  ${font.size(15)}
  color: #ffffff;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: #89b4f8;
    background: rgba(255, 255, 255, 0.10);
  }
`;

export const ForgotLink = styled.a`
  display: block;
  text-align: right;
  ${font.size(12)}
  color: #89b4f8;
  margin-top: -8px;
  margin-bottom: 24px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #74d7d7 0%, #89b4f8 60%, #c1a8f7 100%);
  color: #ffffff;
  ${font.bold}
  ${font.size(15)}
  cursor: pointer;
  transition: opacity 0.15s ease, transform 0.1s ease;
  margin-bottom: 24px;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  gap: 12px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.10);
  }

  span {
    ${font.size(12)}
    color: ${color.textLight};
  }
`;

export const SignUpRow = styled.p`
  ${font.size(13)}
  color: ${color.textMedium};
  margin: 0;

  a {
    color: #89b4f8;
    text-decoration: none;
    ${font.medium}

    &:hover {
      text-decoration: underline;
    }
  }
`;
