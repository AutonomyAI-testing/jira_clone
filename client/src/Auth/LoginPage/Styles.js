import styled, { keyframes } from 'styled-components';
import { font } from 'shared/utils/styles';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a1a 0%, #12122a 40%, #1a1240 70%, #0d0d20 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(100, 80, 200, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(60, 120, 255, 0.10) 0%, transparent 50%),
      radial-gradient(ellipse at 60% 80%, rgba(120, 80, 200, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 48px 44px 44px;
  width: 380px;
  backdrop-filter: blur(20px);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.6),
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

export const AvatarContainer = styled.div`
  animation: ${float} 4s ease-in-out infinite;
  margin-bottom: 24px;
`;

export const AvatarRing = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #64b5f6 0%, #9c6fff 50%, #4fc3f7 100%);
  background-size: 200% 200%;
  animation: ${shimmer} 3s linear infinite;
  box-shadow:
    0 0 24px rgba(100, 181, 246, 0.4),
    0 0 48px rgba(156, 111, 255, 0.2);
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 2px solid #0a0a1a;
`;

export const WelcomeText = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  ${font.bold}
  font-size: 22px;
  color: #E13C3C;
  margin: 0 0 6px;
  letter-spacing: 0.3px;
`;

export const Subtitle = styled.p`
  ${font.regular}
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  ${font.medium}
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 10px;
  color: #ffffff;
  font-size: 15px;
  ${font.regular}
  transition: all 0.2s ease;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    border-color: rgba(100, 181, 246, 0.6);
    background: rgba(255, 255, 255, 0.09);
    box-shadow: 0 0 0 3px rgba(100, 181, 246, 0.12);
  }

  &:hover:not(:focus) {
    border-color: rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 13px;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #64b5f6 0%, #9c6fff 100%);
  color: #ffffff;
  font-size: 15px;
  ${font.bold}
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0);
    transition: background 0.2s ease;
  }

  &:hover::before {
    background: rgba(255, 255, 255, 0.12);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 4px 0;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const DividerText = styled.span`
  ${font.regular}
  font-size: 12px;
  color: rgba(255, 255, 255, 0.25);
`;

export const GuestButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 10px;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  ${font.regular}
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.2px;

  &:hover {
    border-color: rgba(100, 181, 246, 0.35);
    color: rgba(255, 255, 255, 0.8);
    background: rgba(100, 181, 246, 0.06);
  }
`;

export const ErrorMessage = styled.p`
  ${font.regular}
  font-size: 13px;
  color: #f48771;
  text-align: center;
  margin: 0;
  padding: 10px;
  background: rgba(244, 135, 113, 0.08);
  border-radius: 8px;
  border: 1px solid rgba(244, 135, 113, 0.15);
`;
