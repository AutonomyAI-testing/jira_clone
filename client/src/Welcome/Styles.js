import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Icon } from 'shared/components';

import wizardRobot from './assets/wizardRobotBase64';

export const WelcomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  background: ${color.backgroundLightest};
`;

export const WelcomeCard = styled.div`
  width: 100%;
  max-width: 520px;
  padding: 48px 40px 40px;
  text-align: center;
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
`;

export const Mascot = styled.img.attrs({
  src: wizardRobot,
  alt: 'Friendly wizard robot holding a wand',
})`
  height: 220px;
  margin-bottom: 24px;
  user-select: none;
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  color: ${color.danger};
  ${font.black}
  ${font.size(24)}
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  margin: 0 auto 28px;
  max-width: 400px;
  color: ${color.textMedium};
  ${font.size(15)}
  line-height: 1.4;
`;

export const Features = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;

export const FeatureIcon = styled(Icon)`
  margin-bottom: 8px;
  color: ${color.textDark};
`;

export const FeatureLabel = styled.div`
  color: ${color.textDark};
  ${font.medium}
  ${font.size(13)}
`;
