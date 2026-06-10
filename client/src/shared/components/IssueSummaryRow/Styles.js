import styled from 'styled-components';

import { color, font, mixin, issuePriorityColors } from 'shared/utils/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  height: 44px;
  border-bottom: 1px solid ${color.borderLightest};
  background: #fff;
  transition: background 0.1s;
  ${mixin.clickable}

  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const IssueKey = styled.span`
  flex-shrink: 0;
  ${font.regular}
  ${font.size(12)}
  color: ${color.textLight};
  white-space: nowrap;
  font-family: 'Courier New', monospace;
`;

export const TitleWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Title = styled.div`
  ${font.size(13)}
  ${font.regular}
  color: ${color.textDarkest};
  ${mixin.truncateText}
`;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  /* Gradient background used when assignee has no avatar URL - provides visual placeholder */
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  padding: 2px;

  & > div {
    width: 100%;
    height: 100%;
  }
`;

export const PriorityBadge = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 3px;
  background: ${props => mixin.rgba(issuePriorityColors[props.priority], 0.15)};
  color: ${props => issuePriorityColors[props.priority]};
  ${font.size(12)}
  ${font.medium}
  white-space: nowrap;
`;

export const DueDate = styled.span`
  flex-shrink: 0;
  ${font.size(12)}
  ${font.regular}
  color: ${color.textLight};
  white-space: nowrap;
`;
