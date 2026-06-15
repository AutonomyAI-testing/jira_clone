import styled from 'styled-components';

import { color, font, mixin, issuePriorityColors } from 'shared/utils/styles';

// Layout constants
const ROW_HEIGHT = 40;
const ROW_PADDING = '8px 10px';
const ROW_GAP = '8px';
const BORDER_RADIUS = 3;
const FLEX_GAP = 6;
const ISSUE_KEY_WIDTH = 60;

// Shadow and animation constants
const BOX_SHADOW = '0px 1px 2px 0px rgba(9, 30, 66, 0.25)';
const SHADOW_TRANSITION_MS = 100;

// Badge styling constants
const BADGE_PADDING = '2px 6px';
const BADGE_OPACITY = 0.12;

export const Row = styled.div`
  display: flex;
  align-items: center;
  height: ${ROW_HEIGHT}px;
  padding: ${ROW_PADDING};
  border-radius: ${BORDER_RADIUS}px;
  background: #fff;
  box-shadow: ${BOX_SHADOW};
  gap: ${ROW_GAP};
  transition: background ${SHADOW_TRANSITION_MS}ms;
  ${mixin.clickable}
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const IssueKey = styled.span`
  flex: 0 0 ${ISSUE_KEY_WIDTH}px;
  ${font.size(12)}
  color: ${color.textMedium};
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`;

export const Title = styled.span`
  flex: 1 1 auto;
  ${font.size(14)}
  color: ${color.textDarkest};
  ${mixin.truncateText}
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${FLEX_GAP}px;
  flex: 0 0 auto;
`;

export const DueDate = styled.span`
  ${font.size(12)}
  color: ${color.textLight};
  white-space: nowrap;
`;

export const PriorityBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${BADGE_PADDING};
  border-radius: ${BORDER_RADIUS}px;
  ${font.size(12)}
  color: ${props => issuePriorityColors[props.priority]};
  background: ${props => {
    const baseColor = issuePriorityColors[props.priority];
    // Extract RGB values from hex color and create a light version with fixed opacity.
    // This creates a subtle background that complements the text color.
    return `rgba(${parseInt(baseColor.slice(1, 3), 16)}, ${parseInt(
      baseColor.slice(3, 5),
      16,
    )}, ${parseInt(baseColor.slice(5, 7), 16)}, ${BADGE_OPACITY})`;
  }};
`;
