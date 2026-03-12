import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const DueDateSection = styled.div`
  margin-bottom: 20px;
`;

export const DueDateDisplay = styled.div`
  margin-top: 11px;
`;

export const DueDateEditButton = styled.button`
  padding: 6px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  background: transparent;
  color: ${color.textDark};
  ${font.size(14)}
  ${mixin.clickable}
  transition: background 0.1s;

  &:hover {
    background: ${color.backgroundLight};
  }

  &:focus {
    outline: none;
    border-color: ${color.primary};
  }
`;

export const Dates = styled.div`
  margin-top: 11px;
  padding-top: 13px;
  line-height: 22px;
  border-top: 1px solid ${color.borderLightest};
  color: ${color.textMedium};
  ${font.size(13)}
`;
