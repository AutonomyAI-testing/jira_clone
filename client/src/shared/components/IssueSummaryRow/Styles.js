import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
/* Styled components for the IssueSummaryRow component.
   Uses project-standard utilities for colors, fonts, and mixins to ensure consistency. */

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  gap: 12px;
  ${mixin.clickable}
  /* Subtle hover effect to provide visual feedback for interactive context */
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const IssueKeyBadge = styled.span`
  min-width: 60px;
  flex-shrink: 0;
  ${font.medium}
  ${font.size(13)}
  color: ${color.textMedium};
  text-transform: uppercase;
  /* Slight letter spacing for better readability of the issue key identifier */
  letter-spacing: 0.5px;
`;

export const IssueTitle = styled.span`
  flex: 1;
  ${font.regular}
  ${font.size(14)}
  color: ${color.textDarkest};
  /* Ellipsis truncation for long titles while preserving other metadata visibility */
  ${mixin.truncateText}
`;

export const PriorityBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 3px;
  background: ${props => {
    const {priorityColor} = props;
    if (!priorityColor) return color.backgroundLight;
    /* Create a light tinted background using the priority color with 20% opacity (hex '20')
       This provides visual distinction while maintaining hierarchy and reducing visual noise */
    return `${props.priorityColor  }20`;
  }};
`;

export const PriorityIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Container for the priority icon with proper centering */
`;

export const PriorityLabel = styled.span`
  ${font.medium}
  ${font.size(12)}
  /* Use the priority color for the text to match the badge's visual indicator */
  color: ${props => props.priorityColor || color.textMedium};
`;

export const AvatarSection = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  /* Prevent avatar from shrinking so it always remains visible even with long titles */
`;

export const DueDateLabel = styled.span`
  flex-shrink: 0;
  ${font.regular}
  ${font.size(12)}
  color: ${color.textLight};
  /* Prevent wrapping to ensure due date displays on a single line */
  white-space: nowrap;
`;
