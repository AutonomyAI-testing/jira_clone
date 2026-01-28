import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div`
  padding: 25px 40px 35px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Heading = styled.div`
  padding-bottom: 15px;
  ${font.size(21)}
  ${font.medium}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
`;

export const TaskInput = styled.input`
  height: 40px;
  padding: 0 12px;
  border: 1px solid ${color.borderLight};
  border-radius: 3px;
  color: ${color.textDarkest};
  background: ${color.backgroundLightest};
  transition: background 0.1s, border 0.1s;
  ${font.regular}
  ${font.size(15)}
  flex: 1;

  &:focus {
    background: #fff;
    border: 1px solid ${color.borderInputFocus};
    outline: none;
  }

  ${mixin.placeholderColor(color.textLight)}
`;

export const AddButton = styled(Button)`
  height: 40px;
`;

export const TasksListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  background: ${color.backgroundLightest};
  border-radius: 3px;
  border: 1px solid ${color.borderLightest};
  transition: all 0.1s;
  cursor: grab;

  &:hover {
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  }

  &:active {
    cursor: grabbing;
  }

  ${props =>
    props.isBeingDragged &&
    `
    transform: rotate(3deg);
    box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    background: #fff;
    cursor: grabbing;
  `}
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const TaskText = styled.span`
  flex: 1;
  color: ${color.textDarkest};
  ${font.size(15)}
  ${font.regular}
  ${props =>
    props.completed &&
    `
    color: ${color.textLight};
    text-decoration: line-through;
  `}
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin-left: 10px;
  border: none;
  background: transparent;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.1s;
  flex-shrink: 0;

  &:hover {
    background: ${color.backgroundMedium};
  }

  i {
    color: ${color.textMedium};
  }

  &:hover i {
    color: ${color.danger};
  }
`;

export const EmptyState = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: ${color.textLight};
  ${font.size(14)}
`;
