import styled, { keyframes } from 'styled-components';

import { color, font } from 'shared/utils/styles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #fff;
`;

export const LeftPanel = styled.div`
  flex: 0 0 460px;
  background: #0747a6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 50px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    left: -80px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const LeftContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const AvatarRing = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #6be5c3 0%, #4c9aff 60%, #a78bfa 100%);
  margin: 0 auto 32px;
  flex-shrink: 0;
`;

export const AvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #1a3d7a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a3d7a 0%, #0a2d5e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: rgba(255, 255, 255, 0.6);
`;

export const LeftTitle = styled.h2`
  ${font.bold}
  ${font.size(26)}
  color: #fff;
  margin-bottom: 12px;
  line-height: 1.3;
`;

export const LeftSubtitle = styled.p`
  ${font.regular}
  ${font.size(15)}
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
`;

export const DotsRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 36px;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => (props.active ? '#4c9aff' : 'rgba(255,255,255,0.3)')};
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 80px;
  background: #fff;
`;

export const FormCard = styled.div`
  width: 100%;
  max-width: 420px;
  animation: ${fadeIn} 0.35s ease both;
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 36px;
`;

export const AppName = styled.span`
  ${font.bold}
  ${font.size(20)}
  color: ${color.textDarkest};
  letter-spacing: -0.3px;
`;

export const FormTitle = styled.h1`
  ${font.bold}
  ${font.size(28)}
  color: ${color.danger};
  margin-bottom: 6px;
  letter-spacing: -0.5px;
`;

export const FormSubtitle = styled.p`
  ${font.regular}
  ${font.size(15)}
  color: ${color.textMedium};
  margin-bottom: 36px;
`;

export const FieldGroup = styled.div`
  margin-bottom: 20px;
`;

export const FieldLabel = styled.label`
  display: block;
  ${font.medium}
  ${font.size(13)}
  color: ${color.textDark};
  margin-bottom: 7px;
  letter-spacing: 0.2px;
`;

export const StyledInputWrap = styled.div`
  position: relative;

  input {
    height: 44px;
    width: 100%;
    padding: 0 14px;
    border-radius: 6px;
    border: 1.5px solid ${color.borderLight};
    color: ${color.textDarkest};
    background: #fff;
    transition: border-color 0.15s, box-shadow 0.15s;
    ${font.regular}
    ${font.size(15)}

    &::placeholder {
      color: ${color.textLight};
    }

    &:hover {
      border-color: ${color.borderInputFocus};
    }

    &:focus {
      border-color: ${color.borderInputFocus};
      box-shadow: 0 0 0 3px rgba(76, 154, 255, 0.18);
      outline: none;
    }
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${color.textMedium};
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${color.textDark};
  }
`;

export const ForgotLink = styled.button`
  ${font.regular}
  ${font.size(13)}
  color: ${color.primary};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 6px;
  display: block;
  text-align: right;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 6px;
  background: ${color.primary};
  color: #fff;
  border: none;
  cursor: pointer;
  ${font.bold}
  ${font.size(15)}
  margin-top: 28px;
  transition: background 0.15s, transform 0.1s;
  letter-spacing: 0.2px;

  &:hover {
    background: #0747a6;
  }

  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 24px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${color.borderLightest};
  }

  span {
    ${font.regular}
    ${font.size(12)}
    color: ${color.textLight};
    white-space: nowrap;
  }
`;

export const GuestButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 6px;
  background: ${color.backgroundLightest};
  color: ${color.textDark};
  border: 1.5px solid ${color.borderLightest};
  cursor: pointer;
  ${font.medium}
  ${font.size(14)}
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${color.backgroundLight};
    border-color: ${color.borderLight};
  }
`;

export const SignupRow = styled.p`
  ${font.regular}
  ${font.size(13)}
  color: ${color.textMedium};
  text-align: center;
  margin-top: 28px;
`;

export const SignupLink = styled.button`
  ${font.medium}
  ${font.size(13)}
  color: ${color.primary};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  ${font.regular}
  ${font.size(13)}
  color: ${color.danger};
  margin-top: 8px;
`;
