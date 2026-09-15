import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

// Main container for the issue summary row
// Uses flex row to align all elements horizontally with consistent spacing
// Hover state provides visual feedback that the row is interactive
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: #f4f5f7;
  }
`;

// Wraps the priority icon to maintain alignment and prevent shrinking
export const PriorityWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

// Issue key label (e.g., PROJ-123) displayed in monospace for clarity
// Secondary text color and smaller font size indicate this is supporting metadata
export const IssueKey = styled.span`
  flex-shrink: 0;
  color: ${color.textLight};
  ${font.size(11)}
  font-family: monospace;
`;

// Issue title — the primary content with flex: 1 to consume available space
// Text is truncated with ellipsis if it exceeds the container width
export const Title = styled.span`
  flex: 1;
  ${mixin.truncateText}
  ${font.size(14)}
  color: ${color.textDarkest};
`;

// Wraps the assignee avatar to maintain alignment and prevent shrinking
export const AvatarWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

// Due date displayed as secondary metadata with no wrapping
// Appears before avatar to maintain consistent column ordering
export const DueDate = styled.span`
  flex-shrink: 0;
  ${font.size(11)}
  color: ${color.textLight};
  white-space: nowrap;
`;
