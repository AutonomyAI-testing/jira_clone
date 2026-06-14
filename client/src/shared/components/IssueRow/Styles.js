import styled from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  margin-bottom: 4px;
  ${mixin.clickable}
  transition: background 0.1s;

  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const IssueKey = styled.span`
  ${font.size(11)}
  ${font.medium}
  color: ${color.textMedium};
  margin-right: 8px;
  white-space: nowrap;
  min-width: 60px;
  flex-shrink: 0;
`;

export const Title = styled.span`
  ${font.size(13)}
  color: ${color.textDarkest};
  flex: 1;
  margin-right: 8px;
  ${mixin.truncateText}
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

export const DueDate = styled.span`
  ${font.size(11)}
  ${font.medium}
  color: ${color.textLight};
  white-space: nowrap;
  margin-left: 4px;
`;
