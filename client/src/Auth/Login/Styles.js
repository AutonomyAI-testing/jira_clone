import styled, { css } from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 48px 40px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4dd9c0, #4fc3f7, #81a4fb, #a78bfa);
  padding: 6px;
`;

export const AvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  ${font.black}
  ${font.size(24)}
  color: ${color.danger};
  text-align: center;
  margin: 0 0 8px;
`;

export const Subtitle = styled.p`
  ${font.size(14)}
  color: ${color.textMedium};
  text-align: center;
  margin: 0 0 28px;
`;

export const FieldGroup = styled.div`
  margin-bottom: 16px;
`;

export const FieldLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${font.medium}
  ${font.size(13)}
  color: ${color.textMedium};
`;

export const FieldInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 6px;
  border: 1px solid ${color.borderLightest};
  color: ${color.textDarkest};
  background: ${color.backgroundLightest};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
  box-sizing: border-box;
  outline: none;
  &:hover {
    background: ${color.backgroundLight};
  }
  &:focus {
    background: #fff;
    border: 1px solid ${color.borderInputFocus};
    box-shadow: 0 0 0 1px ${color.borderInputFocus};
  }
  ${({ invalid }) =>
    invalid &&
    css`
      &,
      &:focus {
        border: 1px solid ${color.danger};
        box-shadow: none;
      }
    `}
`;

export const FieldError = styled.div`
  margin-top: 4px;
  ${font.size(12)}
  color: ${color.danger};
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  margin-top: 24px;
  border: none;
  border-radius: 6px;
  background: ${color.primary};
  color: #fff;
  cursor: pointer;
  ${font.medium}
  ${font.size(15)}
  transition: background 0.15s;
  &:hover:not(:disabled) {
    background: #0065ff;
  }
  &:active:not(:disabled) {
    background: #0041a8;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${color.borderLightest};
  margin: 24px 0;
`;

export const GuestLink = styled.p`
  text-align: center;
  ${font.size(13)}
  color: ${color.textLink};
  cursor: pointer;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;
