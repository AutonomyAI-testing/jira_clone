import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { activityTypeColors } from 'shared/utils/activity';

export const Item = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  background: white;
  border-radius: 4px;
  margin-bottom: 2px;
  cursor: pointer;
  transition: background 0.1s;
  border-left: 3px solid ${props => activityTypeColors[props.activityType] || color.borderLight};

  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Header = styled.div`
  margin-bottom: 6px;
`;

export const Description = styled.div`
  ${font.size(14)}
  color: ${color.textDark};
  line-height: 1.5;

  strong {
    ${font.medium}
    color: ${color.textDarkest};
  }
`;

export const Time = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const StatusTransition = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  span {
    color: ${color.textMedium};
    ${font.size(16)}
  }
`;

export const StatusTag = styled.span`
  ${mixin.tag(props => props.background, props => props.color)}
`;
