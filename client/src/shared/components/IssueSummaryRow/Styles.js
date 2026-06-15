import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const IssueLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  ${mixin.clickable}
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const IssueKey = styled.div`
  flex-shrink: 0;
  width: 80px;
  ${font.medium}
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const IssueSummaryTitle = styled.div`
  flex-grow: 1;
  ${font.size(14)}
  ${mixin.truncateText}
`;

export const RightMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const DueDate = styled.span`
  ${font.size(12)}
  color: ${color.textLight};
  white-space: nowrap;
`;
