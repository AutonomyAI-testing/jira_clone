import styled from 'styled-components';

import { color, font, mixin, issueStatusColors } from 'shared/utils/styles';
import { IssueStatus } from 'shared/constants/issues';

const getStatusColor = status => {
  const statusColorMap = {
    [IssueStatus.BACKLOG]: '#626F86',
    [IssueStatus.SELECTED]: '#626F86',
    [IssueStatus.INPROGRESS]: color.primary,
    [IssueStatus.DONE]: color.success,
  };
  return statusColorMap[status] || color.textMedium;
};

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  min-height: 500px;
  width: 25%;
  border-radius: 6px;
  background: #fff;
  border-left: 4px solid ${props => getStatusColor(props.status)};
  box-shadow: 0 1px 3px rgba(9, 30, 66, 0.1);
  overflow: hidden;

  @media (max-width: 1100px) {
    min-height: 400px;
  }
`;

export const Title = styled.div`
  padding: 16px;
  text-transform: uppercase;
  color: ${color.textDark};
  ${font.size(12)};
  ${font.bold}
  border-bottom: 1px solid ${color.borderLightest};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const IssuesCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: ${props => {
    const statusColorMap = {
      [IssueStatus.BACKLOG]: color.backgroundMedium,
      [IssueStatus.SELECTED]: color.backgroundMedium,
      [IssueStatus.INPROGRESS]: color.primary,
      [IssueStatus.DONE]: color.success,
    };
    return statusColorMap[props.status] || color.backgroundMedium;
  }};
  color: ${props => issueStatusColors[props.status] || color.textDark};
  border-radius: 12px;
  ${font.size(12)};
  ${font.bold}
  text-transform: lowercase;
`;

export const Issues = styled.div`
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  ${mixin.scrollableY}
  ${mixin.customScrollbar({ width: 6, background: color.borderLight })}

  &:empty::after {
    content: 'No issues here';
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${color.textLight};
    ${font.size(14)}
    ${font.regular}
  }
`;
