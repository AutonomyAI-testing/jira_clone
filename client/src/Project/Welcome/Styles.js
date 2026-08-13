import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 40px 20px;
`;

export const AvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${color.backgroundLightest};
  border: 3px solid ${color.borderLightest};
  overflow: hidden;
  margin-bottom: 32px;
  ${mixin.boxShadowMedium}
`;

export const AvatarImage = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  object-position: center;
`;

export const WelcomeHeading = styled.h1`
  margin: 0 0 16px;
  color: ${color.danger};
  ${font.black}
  ${font.size(42)}
  letter-spacing: -1px;
`;

export const WelcomeSubtext = styled.p`
  margin: 0 0 32px;
  color: ${color.textMedium};
  ${font.size(16)}
  max-width: 420px;
  line-height: 1.6;
`;

export const WelcomeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${color.backgroundLightSuccess};
  color: ${color.success};
  border-radius: 20px;
  padding: 6px 16px;
  ${font.size(13)}
  ${font.medium}
  margin-bottom: 12px;
`;

export const WelcomeDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${color.success};
  display: inline-block;
`;
