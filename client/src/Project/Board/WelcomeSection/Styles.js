import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const AvatarCircle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  overflow: hidden;
  background: ${color.backgroundLightest};
  flex-shrink: 0;
`;

export const AvatarImage = styled.img`
  width: 72%;
  height: 72%;
  object-fit: contain;
  object-position: center;
`;

export const WelcomeText = styled.span`
  ${font.medium}
  ${font.size(18)}
  color: ${color.danger};
  margin-left: 12px;
`;
