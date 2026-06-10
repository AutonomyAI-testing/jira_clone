import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid ${color.borderLightest};
  background: white;
  gap: 10px;
  transition: background 0.1s;
  ${mixin.clickable}
  
  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const IssueKey = styled.div`
  min-width: 68px;
  ${font.medium}
  ${font.size(12)}
  color: ${color.textMedium};
  flex-shrink: 0;
`;

export const Title = styled.div`
  flex: 1;
  ${font.size(14)}
  color: ${color.textDark};
  ${mixin.truncateText}
`;

export const AssigneeWrapper = styled.div`
  flex-shrink: 0;
`;

export const PriorityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 3px;
  ${font.size(12)}
  ${font.medium}
  background: ${props => `${props.priorityColor}20`};
  color: ${props => props.priorityColor};
  flex-shrink: 0;
`;

