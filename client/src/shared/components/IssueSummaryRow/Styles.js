import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  /* Enable cursor and selection feedback for card interaction in Kanban view */
  ${mixin.clickable}

  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const IssueKey = styled.span`
  flex-shrink: 0;
  margin-right: 8px;
  ${font.size(12)}
  color: ${color.textMedium};
  ${font.medium}
`;

export const IssueTitle = styled.span`
  flex: 1;
  min-width: 0;
  margin-right: 8px;
  ${font.size(13)}
  color: ${color.textDarkest};
  ${mixin.truncateText}
`;

export const AssigneeAvatar = styled(Avatar)`
  flex-shrink: 0;
  margin-right: 6px;
`;

export const PriorityIconWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 6px;
`;

export const DueDate = styled.span`
  flex-shrink: 0;
  ${font.size(11)}
  color: ${color.textLight};
  white-space: nowrap;
`;
