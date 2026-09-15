import styled from 'styled-components';

import { color, font, mixin, issuePriorityColors } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

// Main row wrapper with flexbox layout and hover effect for interactivity
export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  background: #fff;
  transition: background 0.1s;
  ${mixin.clickable}

  &:hover {
    background: ${color.backgroundLightest};
  }
`;

// Left section with issue key and title — flex: 1 allows it to take remaining space, min-width: 0 enables text truncation
export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

export const IssueKey = styled.span`
  ${font.regular}
  ${font.size(11)}
  color: ${color.textLight};
  white-space: nowrap;
  flex-shrink: 0;
`;

// Title with ellipsis truncation for long text; flex: 1 distributes available space
export const IssueTitle = styled.div`
  ${font.regular}
  ${font.size(13)}
  color: ${color.textDarkest};
  ${mixin.truncateText}
  flex: 1;
`;

// Right section containing avatar, priority badge, and due date — flex-shrink: 0 prevents compression when space is tight
export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const StyledAvatar = styled(Avatar)`
  flex-shrink: 0;
`;

// Priority badge with color determined by priority level; rounded corners create pill shape
export const PriorityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  background: ${props => issuePriorityColors[props.priority]};
  color: #fff;
  ${font.medium}
  ${font.size(10)}
  white-space: nowrap;
  flex-shrink: 0;
`;

// Due date display — kept small and light for secondary importance
export const DueDate = styled.span`
  ${font.regular}
  ${font.size(11)}
  color: ${color.textLight};
  white-space: nowrap;
  flex-shrink: 0;
`;
