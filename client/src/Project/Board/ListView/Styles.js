import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

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
  transition: background 0.2s, box-shadow 0.2s;

  ${props =>
    props.clickable &&
    `
    cursor: pointer;
    
    &:hover {
      background: ${color.backgroundLightest};
    }
  `}

  ${props =>
    props.isEditing &&
    `
    background: #fff;
    box-shadow: 0 2px 8px rgba(9, 30, 66, 0.2);
    position: relative;
    z-index: 10;
    
    &:hover {
      background: #fff;
    }
  `}
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
