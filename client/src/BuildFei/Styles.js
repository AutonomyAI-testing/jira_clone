import styled from 'styled-components';

import { font, issuePriorityColors } from 'shared/utils/styles';
import { IssuePriority } from 'shared/constants/issues';

import feiWizardImage from 'App/assets/fei-wizard.png';

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f0f4ff;
  position: relative;
  overflow: hidden;
`;

export const BackgroundCharacter = styled.div`
  position: absolute;
  bottom: 0;
  right: 60px;
  width: 420px;
  height: 490px;
  background-image: url("${feiWizardImage}");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.18;
  pointer-events: none;
`;

export const ContentBox = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 64px 80px;
`;

export const FeiImage = styled.div`
  width: 220px;
  height: 260px;
  background-image: url("${feiWizardImage}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 40px;
  filter: drop-shadow(0 12px 32px rgba(0, 82, 204, 0.18));
`;

export const Title = styled.h1`
  margin: 0 0 16px 0;
  ${font.black}
  font-size: 64px;
  line-height: 1.1;
  color: ${issuePriorityColors[IssuePriority.HIGH]};
  letter-spacing: -1px;
`;

export const Tagline = styled.p`
  margin: 0;
  ${font.medium}
  font-size: 18px;
  color: #2d8738;
  letter-spacing: 0.5px;
`;
