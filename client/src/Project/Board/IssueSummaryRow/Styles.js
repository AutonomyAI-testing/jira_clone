import styled from 'styled-components';

import { color, font, mixin, issuePriorityColors } from 'shared/utils/styles';

// Container for the entire issue row with consistent height and hover state
export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  height: 40px;
  border-bottom: 1px solid ${color.borderLightest};
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: ${color.backgroundLightest};
  }
`;

// Issue key (e.g., "TASK-42") with fixed width to maintain alignment across multiple rows
export const IssueKeyText = styled.span`
  ${font.medium}
  color: ${color.textMedium};
  flex-shrink: 0;
  min-width: 70px;
`;

// Issue title text that grows to fill available space with text truncation
export const IssueTitle = styled.div`
  flex: 1;
  color: ${color.textDark};
  ${font.size(14)}
  ${mixin.truncateText}
`;

// Right-side content container for avatar, priority badge, and due date
export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// Priority badge with dynamic background color based on priority level (1-5)
export const PriorityBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  ${font.bold}
  ${font.size(12)}
  color: #fff;
  background: ${(props) => issuePriorityColors[props.priority]};
  white-space: nowrap;
  flex-shrink: 0;
`;

// Due date label text with subtle color to indicate secondary information
export const DueDateLabel = styled.span`
  ${font.size(12)}
  color: ${color.textLight};
  white-space: nowrap;
  flex-shrink: 0;
`;
