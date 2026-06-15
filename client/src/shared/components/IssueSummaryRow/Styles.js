import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

// Compact horizontal layout for displaying issue summary in lists/boards
// Visual order: priority icon → due date → issue key → title → assignee avatar

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 3px;
  ${mixin.clickable}
  transition: background 0.1s;

  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const IssueKey = styled.span`
  ${font.size(11.5)}
  ${font.medium}
  color: ${color.textMedium};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const Title = styled.div`
  flex: 1; /* Expand to fill available space, allowing text truncation */
  ${font.size(13)}
  color: ${color.textDarkest};
  ${mixin.truncateText}
`;

export const AvatarWrapper = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const PriorityBadgeWrapper = styled.div`
  flex-shrink: 0;
`;

export const DueDate = styled.span`
  ${font.size(11.5)}
  ${font.regular}
  color: ${color.textLight};
  white-space: nowrap;
  flex-shrink: 0;
`;
