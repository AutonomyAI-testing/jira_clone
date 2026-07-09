import styled, { keyframes } from 'styled-components';
import { font } from 'shared/utils/styles';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at 20% 50%, rgba(76, 0, 130, 0.15) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 20%, rgba(0, 82, 204, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const StarCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

export const Card = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px 44px 44px;
  width: 440px;
  max-width: 95vw;
  backdrop-filter: blur(20px);
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.06) inset,
    0 0 80px rgba(0, 82, 204, 0.12);
`;

export const AvatarWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 28px;
  position: relative;
  animation: ${float} 4s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffd700 0%, #0052cc 50%, #ffd700 100%);
    background-size: 200% auto;
    animation: ${shimmer} 3s linear infinite;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: #16213e;
    z-index: 1;
  }
`;

export const AvatarImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 10%;
`;

export const WelcomeText = styled.h1`
  ${font.bold}
  font-size: 26px;
  color: #ffffff;
  margin: 0 0 6px;
  text-align: center;
  letter-spacing: -0.5px;
`;

export const SubText = styled.p`
  ${font.regular}
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 32px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  ${font.medium}
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.09);
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
  }
`;

export const LoginButton = styled.button`
  margin-top: 8px;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #0052cc 0%, #0747a6 100%);
  color: #ffffff;
  font-size: 15px;
  ${font.bold}
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 20px rgba(0, 82, 204, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: -100%; right: 0; bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.4s;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 28px rgba(0, 82, 204, 0.55);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GuestButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
  ${font.regular}
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(255, 215, 0, 0.4);
    color: rgba(255, 255, 255, 0.85);
    background: rgba(255, 215, 0, 0.05);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.2);
  font-size: 12px;
  ${font.regular}

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const FooterText = styled.p`
  margin: 24px 0 0;
  font-size: 12px;
  ${font.regular}
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
`;

export const SparkleIcon = styled.span`
  display: inline-block;
  margin-right: 6px;
`;
