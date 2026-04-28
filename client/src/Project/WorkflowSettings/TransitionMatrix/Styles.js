import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

export const HeaderRow = styled.tr`
  background: ${color.backgroundLight};
`;

export const HeaderCell = styled.th`
  padding: 12px 16px;
  text-align: left;
  color: ${color.textMedium};
  ${font.size(13)};
  ${font.medium};
  border: 1px solid ${color.borderLightest};
  text-transform: uppercase;

  &:first-child {
    width: 200px;
  }
`;

export const Row = styled.tr`
  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const RowLabel = styled.td`
  padding: 12px 16px;
  color: ${color.textDark};
  ${font.size(14)};
  ${font.medium};
  border: 1px solid ${color.borderLightest};
`;

export const Cell = styled.td`
  padding: 12px 16px;
  text-align: center;
  border: 1px solid ${color.borderLightest};
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const EmptyCell = styled.span`
  color: ${color.textLight};
`;
