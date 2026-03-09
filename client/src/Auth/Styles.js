import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, mixin } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
  padding: 40px 20px;
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 4px;
  padding: 40px 40px 36px;
  ${mixin.boxShadowMedium}
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
`;

export const LogoText = styled.div`
  margin-top: 10px;
  ${font.bold}
  ${font.size(18)}
  color: ${color.textDarkest};
  letter-spacing: 0.3px;
`;

export const FormHeading = styled.h1`
  text-align: center;
  ${font.medium}
  ${font.size(20)}
  color: ${color.textDarkest};
  margin-bottom: 24px;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  ${font.medium}
  ${font.size(15)}
  cursor: pointer;
  transition: background 0.1s;
  background: ${color.primary};
  color: #fff;
  &:hover:not(:disabled) {
    background: ${mixin.lighten(color.primary, 0.15)};
  }
  &:active:not(:disabled) {
    background: ${mixin.darken(color.primary, 0.1)};
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const SecondaryAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: 1px solid ${color.borderLight};
  border-radius: 4px;
  background: #fff;
  ${font.regular}
  ${font.size(14.5)}
  color: ${color.textDark};
  cursor: pointer;
  transition: background 0.1s;
  &:hover:not(:disabled) {
    background: ${color.backgroundLight};
  }
  &:active:not(:disabled) {
    color: ${color.primary};
    background: ${color.backgroundLightPrimary};
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  color: ${color.textLight};
  ${font.size(12)}
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${color.borderLightest};
  }
  &::before {
    margin-right: 10px;
  }
  &::after {
    margin-left: 10px;
  }
`;

export const BottomLinks = styled.div`
  margin-top: 20px;
  text-align: center;
  ${font.size(13.5)}
  color: ${color.textMedium};
`;

export const BottomLink = styled(Link)`
  ${mixin.link()}
  ${font.size(13.5)}
`;

export const ForgotLink = styled(Link)`
  ${mixin.link()}
  ${font.size(13)}
  display: block;
  text-align: right;
  margin-top: 4px;
  margin-bottom: 16px;
`;
