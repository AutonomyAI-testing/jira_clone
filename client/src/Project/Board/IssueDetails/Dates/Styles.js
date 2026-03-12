import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Dates = styled.div`
  margin-top: 11px;
  padding-top: 13px;
  line-height: 22px;
  border-top: 1px solid ${color.borderLightest};
  color: ${color.textMedium};
  ${font.size(13)}
`;

export const DueDateLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  color: ${color.textMedium};
  ${font.size(12)}
  font-weight: 500;
  text-transform: uppercase;
`;

export const DueDateValue = styled.div`
  margin-top: 5px;
  margin-bottom: 24px;
`;

export const DueDateEdit = styled.div`
  padding: 8px 12px;
  border-radius: 3px;
  border: 1px solid ${color.borderLightest};
  background-color: ${color.backgroundLight};
  color: ${color.textDarkest};
  ${font.size(13)}
  cursor: pointer;
  transition: background-color 0.1s, border-color 0.1s;

  &:hover {
    background-color: ${color.backgroundMedium};
    border-color: #ccc;
  }

  &:active {
    background-color: ${color.backgroundLight};
  }
`;
