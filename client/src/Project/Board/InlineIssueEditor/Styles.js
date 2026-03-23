import styled, { css } from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const EditorContainer = styled.div`
  position: relative;
  background: #fff;
  border-radius: 3px;
  padding: 20px;
  ${mixin.boxShadowDropdown}
  z-index: ${zIndexValues.dropdown};
`;

export const EditorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "title title title"
    "type status priority"
    "assignees assignees assignees"
    "estimate startDate dueDate";
  gap: 16px 12px;
`;

export const EditorField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${props => props.gridArea && `grid-area: ${props.gridArea};`}
`;

export const FieldLabel = styled.div`
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(11.5)}
  ${font.bold}
`;

export const CloseButton = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px;
  border-radius: 3px;
  ${mixin.clickable}
  color: ${color.textMedium};
  transition: all 0.1s;

  &:hover {
    background: ${color.backgroundMedium};
    color: ${color.textDark};
  }
`;

export const StatusTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 3px;
  text-transform: uppercase;
  ${font.size(12)}
  ${font.bold}
  transition: background 0.1s;

  ${props => {
    const colors = {
      backlog: css`
        color: ${color.textDark};
        background: ${color.backgroundMedium};
      `,
      selected: css`
        color: ${color.textDark};
        background: ${color.backgroundMedium};
      `,
      inprogress: css`
        color: #fff;
        background: #0052cc;
      `,
      done: css`
        color: #fff;
        background: #0b875b;
      `,
    };
    return colors[props.color];
  }}

  ${props =>
    props.isValue &&
    css`
      cursor: pointer;
      &:hover {
        background: ${mixin.darken(color.backgroundMedium, 0.03)};
      }
    `}
`;

export const TypeOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  color: ${color.textDark};
  ${font.size(14)}
`;

export const PriorityOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  color: ${color.textDark};
  ${font.size(14)}
`;

export const UserOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${props => (props.isSelectValue ? '3px 5px' : '6px 8px')};
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.1s;
  ${font.size(14)}
  color: ${color.textDark};

  ${props =>
    props.isSelectValue &&
    css`
      background: ${color.backgroundMedium};
      &:hover {
        background: ${mixin.darken(color.backgroundMedium, 0.05)};
      }
    `}

  ${props =>
    !props.isSelectValue &&
    css`
      &:hover {
        background: ${color.backgroundLight};
      }
    `}
`;

export const UserName = styled.span`
  flex: 1;
`;
