import styled, { css } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const ListViewContainer = styled.div`
  margin-top: 24px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${color.borderLightest};
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  ${font.size(14)}
`;

export const TableHeader = styled.thead`
  background: ${color.backgroundLight};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${color.borderLightest};

  ${props =>
    props.clickable &&
    `
    cursor: pointer;
    transition: background 0.1s;
    
    &:hover {
      background: ${color.backgroundLightest};
      
      .expand-icon {
        opacity: 1;
      }
    }
  `}

  ${props =>
    props.isEditing &&
    css`
      background: ${color.backgroundLight};
      &:hover {
        background: ${color.backgroundLight};
        cursor: default;
      }
    `}

  .expand-icon {
    opacity: 0;
    transition: opacity 0.1s;
    ${mixin.clickable}
    color: ${color.textMedium};
    
    &:hover {
      color: ${color.primary};
    }
  }
`;

export const TableHeaderCell = styled.th`
  padding: 12px 16px;
  text-align: left;
  ${font.medium}
  color: ${color.textMedium};
  ${props => props.width && `width: ${props.width};`}
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  color: ${color.textDark};
  vertical-align: middle;
  
  &:first-child {
    text-align: center;
    padding: 0;
  }
`;

export const IssueKey = styled.span`
  ${font.medium}
  color: ${color.textMedium};
`;

export const IssueTitle = styled.div`
  color: ${color.textDark};
  ${font.size(14)}
`;

export const AssigneesContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
