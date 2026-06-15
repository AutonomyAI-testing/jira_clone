import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 10px;
  border-radius: 3px;
  background: #fff;
  transition: background 0.1s;
  ${mixin.clickable}

  &:hover {
    background: ${color.backgroundLight};
  }

  @media (max-width: 1100px) {
    padding: 8px;
    gap: 10px;
  }
`;

export const IssueKey = styled.span`
  flex-shrink: 0;
  ${font.medium}
  ${font.size(12)}
  color: ${color.textMedium};
  background: ${color.backgroundLightest};
  padding: 2px 6px;
  border-radius: 3px;
`;

export const TitleText = styled.span`
  flex: 1;
  ${font.size(14)}
  color: ${color.textDark};
  ${mixin.truncateText}
`;

export const AssigneeAvatarWrapper = styled.div`
  flex-shrink: 0;
  display: inline-flex;
`;

export const PriorityBadge = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 0 6px;
  border-radius: 3px;
  background: ${props => props.backgroundColor};
  color: #fff;
  ${font.medium}
  ${font.size(11)}
`;
