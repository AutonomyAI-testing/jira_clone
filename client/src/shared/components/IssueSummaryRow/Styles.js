import styled from 'styled-components';

import { color, font, mixin, issuePriorityColors } from 'shared/utils/styles';

/**
 * Styled components for IssueSummaryRow - a compact horizontal layout
 * for displaying issue metadata on Kanban board cards.
 */

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 3px;
  background: #fff;
  transition: background 0.1s;
  ${mixin.clickable}

  &:hover {
    background: #f4f5f7;
  }
`;

export const IssueKey = styled.span`
  ${font.size(11)}
  color: #5e6c84;
  font-weight: 400;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const Title = styled.span`
  ${font.size(13)}
  flex: 1;
  ${mixin.truncateText}
  color: #172b4d;
`;

export const PriorityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 3px;
  ${font.size(11)}
  font-weight: 500;
  flex-shrink: 0;
`;

export const PriorityIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarWrapper = styled.div`
  margin-left: auto;
  flex-shrink: 0;
`;

export const DueDate = styled.span`
  ${font.size(11)}
  color: ${color.textMedium};
  white-space: nowrap;
  flex-shrink: 0;
`;
