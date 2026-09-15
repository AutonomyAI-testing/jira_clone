import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

import wizardRobotImage from './assets/wizard-robot.jpg';

export const ErrorPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  background: #f5efe0;
`;

export const ErrorPageInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 560px;
  width: 100%;
  text-align: center;
`;

export const WizardImage = styled.div`
  width: 320px;
  height: 320px;
  background-image: url(${wizardRobotImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

export const ErrorBox = styled.div`
  padding: 28px 32px;
  border-radius: 6px;
  border: 1px solid ${color.borderLight};
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  ${font.size(26)}
  color: #e53935;
`;
