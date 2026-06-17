import styled from 'styled-components';

import { color, font, mixin, issuePriorityColors } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  border-bottom: 1px solid ${color.borderLightest};
  gap: 12px;
`;

export const IssueKey = styled.span`
  ${font.medium}
  color: ${color.textMedium};
  font-family: 'Courier New', monospace;
  white-space: nowrap;
  flex-shrink: 0;
  ${font.size(12)}
`;

export const Title = styled.span`
  color: ${color.textDark};
  ${font.size(13)}
  flex: 1;
  ${mixin.truncateText}
`;

export const AssigneeAvatar = styled(Avatar)`
  flex-shrink: 0;
`;

export const PriorityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  border-radius: 3px;
  background: ${props => issuePriorityColors[props.priority]};
  color: #fff;
  ${font.size(11)}
  ${font.bold}
  white-space: nowrap;
  flex-shrink: 0;
`;

export const DueDate = styled.span`
  ${font.size(11)}
  color: ${color.textMedium};
  white-space: nowrap;
  flex-shrink: 0;
`;

