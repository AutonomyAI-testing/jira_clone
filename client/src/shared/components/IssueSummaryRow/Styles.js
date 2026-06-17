import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

// Container for all issue summary elements laid out horizontally
// Includes clickable hover effect for board interactions
export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 3px;
  background: #fff;
  border: 1px solid ${color.borderLightest};
  transition: background 0.1s;
  ${mixin.clickable}
  &:hover {
    background: ${color.backgroundLightest};
  }
`;

// Issue key (e.g., TASK-42) in monospace-style with fixed minimum width
export const KeyText = styled.span`
  flex-shrink: 0;
  min-width: 72px;
  ${font.medium}
  ${font.size(12)}
  color: ${color.textMedium};
  letter-spacing: 0.02em;
`;

// Issue title with text truncation to prevent overflow in constrained layouts
export const TitleText = styled.span`
  flex: 1;
  ${font.size(13)}
  color: ${color.textDark};
  ${mixin.truncateText}
`;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
`;

// Priority badge with colored background and border (hex suffix: 18=light tint, 40=medium tint)
// Uses the same color for dot and text for visual consistency
export const PriorityBadge = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border-radius: 3px;
  background: ${props => props.color}18;
  border: 1px solid ${props => props.color}40;
  ${font.medium}
  ${font.size(11)}
  color: ${props => props.color};
  white-space: nowrap;
`;

// Visual indicator dot inside priority badge for quick visual scanning
export const PriorityDot = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${props => props.color};
  flex-shrink: 0;
`;

// Due date display on the right side (currently hardcoded as "Due Jun 30")
export const DueDateLabel = styled.span`
  flex-shrink: 0;
  ${font.size(12)}
  color: ${color.textMedium};
  white-space: nowrap;
`;
