import styled, { keyframes } from 'styled-components';

import { font } from 'shared/utils/styles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(100, 210, 255, 0.4); }
  50% { transform: scale(1.02); box-shadow: 0 0 0 12px rgba(100, 210, 255, 0); }
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0a0e1a 0%, #111827 50%, #0a0e1a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 60%);
    animation: ${shimmer} 8s ease-in-out infinite alternate;
  }
`;

export const BackgroundOrbs = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99, 179, 237, 0.12) 0%, transparent 70%);
    top: -100px;
    right: -100px;
    filter: blur(40px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%);
    bottom: -80px;
    left: -80px;
    filter: blur(40px);
  }
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 48px 48px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  width: 420px;
  max-width: calc(100vw - 48px);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  animation: ${fadeIn} 0.6s ease-out both;
  position: relative;
  z-index: 1;
`;

export const AvatarRing = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  margin-bottom: 28px;
  animation: ${fadeIn} 0.5s ease-out 0.1s both;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #64d2ff, #a78bfa, #64d2ff);
    background-size: 200% 200%;
    animation: ${shimmer} 3s linear infinite;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #64d2ff, #a78bfa, #64d2ff);
    background-size: 200% 200%;
    animation: ${shimmer} 3s linear infinite;
    filter: blur(8px);
    opacity: 0.5;
    z-index: 0;
  }
`;

export const AvatarImage = styled.div`
  position: relative;
  z-index: 1;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #0a0e1a;
  animation: ${pulse} 4s ease-in-out infinite;
  cursor: pointer;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const WelcomeText = styled.div`
  text-align: center;
  margin-bottom: 32px;
  animation: ${fadeIn} 0.5s ease-out 0.2s both;
`;

export const Title = styled.h1`
  color: #ef4444;
  ${font.size(24)}
  ${font.bold}
  margin-bottom: 8px;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  color: rgba(248, 250, 252, 0.45);
  ${font.size(14)}
  ${font.regular}
  line-height: 1.5;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 16px;
  animation: ${fadeIn} 0.5s ease-out 0.3s both;
`;

export const Label = styled.label`
  display: block;
  color: rgba(248, 250, 252, 0.6);
  ${font.size(12)}
  ${font.medium}
  margin-bottom: 8px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #f8fafc;
  ${font.size(15)}
  ${font.regular}
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(248, 250, 252, 0.25);
  }

  &:focus {
    outline: none;
    border-color: rgba(100, 210, 255, 0.5);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(100, 210, 255, 0.1);
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;

  ${Input} {
    padding-right: 48px;
  }
`;

export const TogglePassword = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: rgba(248, 250, 252, 0.35);
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(248, 250, 252, 0.7);
  }
`;

export const OptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
  animation: ${fadeIn} 0.5s ease-out 0.35s both;
`;

export const RememberLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(248, 250, 252, 0.5);
  ${font.size(13)}
  cursor: pointer;

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    accent-color: #64d2ff;
    cursor: pointer;
  }
`;

export const ForgotLink = styled.a`
  color: rgba(100, 210, 255, 0.8);
  ${font.size(13)}
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #64d2ff;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  ${font.size(15)}
  ${font.bold}
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-out 0.4s both;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #60a5fa 0%, #818cf8 100%);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-out 0.45s both;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.08);
  }

  span {
    color: rgba(248, 250, 252, 0.3);
    ${font.size(12)}
  }
`;

export const GuestButton = styled.button`
  width: 100%;
  padding: 13px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(248, 250, 252, 0.65);
  ${font.size(14)}
  ${font.regular}
  cursor: pointer;
  transition: all 0.2s ease;
  animation: ${fadeIn} 0.5s ease-out 0.5s both;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.18);
    color: rgba(248, 250, 252, 0.85);
  }
`;

export const FooterText = styled.p`
  margin-top: 20px;
  color: rgba(248, 250, 252, 0.35);
  ${font.size(13)}
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out 0.55s both;

  a {
    color: rgba(100, 210, 255, 0.8);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #64d2ff;
    }
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 12px 14px;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 10px;
  color: #fca5a5;
  ${font.size(13)}
  margin-bottom: 16px;
  animation: ${fadeIn} 0.3s ease-out;
`;
