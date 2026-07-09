import styled, { keyframes } from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #f5f0e8;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 40px;
  background: linear-gradient(145deg, #f5f0e8 0%, #ede8d8 100%);
  position: relative;
  overflow: hidden;

  /* decorative circles */
  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border: 1.5px solid rgba(0, 82, 204, 0.12);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: '';
    position: absolute;
    width: 340px;
    height: 340px;
    border: 1px solid rgba(0, 82, 204, 0.08);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    padding: 40px 24px 24px;
  }
`;

export const MascotWrapper = styled.div`
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;
  margin-bottom: 28px;
`;

export const MascotImage = styled.img`
  width: 280px;
  height: auto;
  max-width: 100%;
  filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.15));
  display: block;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const AppTitle = styled.h1`
  ${font.black}
  ${font.size(32)}
  color: ${color.textDarkest};
  letter-spacing: -0.5px;
  margin: 0 0 8px;
  text-align: center;
  z-index: 1;
`;

export const AppSubtitle = styled.p`
  ${font.medium}
  ${font.size(15)}
  color: ${color.textMedium};
  text-align: center;
  margin: 0;
  z-index: 1;
`;

export const RightPanel = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 40px;
  background: #ffffff;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.06);
  animation: ${fadeIn} 0.4s ease both;

  @media (max-width: 768px) {
    width: 100%;
    padding: 32px 24px 40px;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);
  }
`;

export const WelcomeHeading = styled.h2`
  ${font.black}
  ${font.size(26)}
  color: ${color.danger};
  margin: 0 0 6px;
`;

export const WelcomeSubheading = styled.p`
  ${font.regular}
  ${font.size(14)}
  color: ${color.textMedium};
  margin: 0 0 32px;
`;

export const SectionLabel = styled.p`
  ${font.bold}
  ${font.size(11)}
  color: ${color.textLight};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 12px;
`;

export const UserCardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
`;

export const UserCard = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  background: ${props => (props.isSelected ? color.backgroundLightPrimary : color.backgroundLightest)};
  border: 2px solid ${props => (props.isSelected ? color.primary : 'transparent')};
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
  ${mixin.clickable}

  &:hover {
    background: ${props => (props.isSelected ? color.backgroundLightPrimary : color.backgroundLight)};
    border-color: ${props => (props.isSelected ? color.primary : color.borderLight)};
    transform: translateX(2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${mixin.rgba(color.primary, 0.25)};
  }
`;

export const UserAvatarImage = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  ${props => mixin.backgroundImage(props.src)}
  border: 2px solid ${props => (props.isSelected ? color.primary : 'transparent')};
  transition: border-color 0.15s ease;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const UserName = styled.span`
  ${font.bold}
  ${font.size(14)}
  color: ${color.textDarkest};
`;

export const UserEmail = styled.span`
  ${font.regular}
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const SelectedBadge = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: '';
    display: block;
    width: 5px;
    height: 9px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg) translateY(-1px);
  }
`;

export const ContinueButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  border: none;
  background: ${props => (props.disabled ? color.backgroundMedium : color.primary)};
  color: ${props => (props.disabled ? color.textLight : '#fff')};
  ${font.bold}
  ${font.size(15)}
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.15s ease, transform 0.1s ease;
  margin-bottom: 20px;

  &:hover:not(:disabled) {
    background: #0747a6;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${mixin.rgba(color.primary, 0.3)};
  }
`;

export const FooterText = styled.p`
  ${font.regular}
  ${font.size(12)}
  color: ${color.textLight};
  text-align: center;
  margin: 0;

  a {
    color: ${color.textLink};
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${color.borderLightest};
  margin: 0 0 28px;
`;
