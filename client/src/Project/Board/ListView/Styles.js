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

  ${props =>
    props.clickable &&
    `
    cursor: pointer;
    transition: background 0.1s;
    
    &:hover {
      background: ${color.backgroundLightest};
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

export const EditRow = styled.tr`
  background: ${color.backgroundLightest};
`;

export const EditCell = styled.td`
  padding: 16px;
`;

export const EditLabel = styled.label`
  display: block;
  ${font.size(12.5)}
  font-weight: 500;
  color: ${color.textMedium};
  margin-bottom: 6px;
`;

export const EditInput = styled.input`
  width: 100%;
  ${font.size(14)}
  padding: 8px 10px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
  }
`;

export const EditActions = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 4px;
`;

export const SaveButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background: ${color.primary};
  color: #fff;
  ${font.size(14)}
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: ${color.primaryDark};
  }
`;

export const CancelButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background: ${color.backgroundMedium};
  color: ${color.textDark};
  ${font.size(14)}
  cursor: pointer;
  &:hover {
    background: ${color.backgroundLight};
  }
`;
