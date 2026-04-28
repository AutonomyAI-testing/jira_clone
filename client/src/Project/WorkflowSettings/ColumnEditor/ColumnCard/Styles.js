import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Card = styled.div`
  min-width: 220px;
  padding: 16px;
  border-radius: 4px;
  background: ${color.backgroundLightest};
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: box-shadow 0.1s;
  ${mixin.clickable};

  ${props =>
    props.isDragging &&
    `
    transform: rotate(2deg);
    box-shadow: 0px 8px 16px 0px rgba(9, 30, 66, 0.3);
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  ${font.size(14)};
  ${font.medium};
`;

export const ColorDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color};
  cursor: pointer;
  flex-shrink: 0;
  border: 2px solid ${color.borderLight};
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const TitleInput = styled.input`
  flex: 1;
  border: 1px solid ${color.borderInputFocus};
  border-radius: 3px;
  padding: 4px 8px;
  ${font.size(14)};
  ${font.medium};

  &:focus {
    outline: none;
  }
`;

export const DeleteIcon = styled(Icon)`
  color: ${color.textMedium};
  cursor: pointer;
  transition: color 0.1s;

  &:hover {
    color: ${color.danger};
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.div`
  ${font.size(12)};
  color: ${color.textMedium};
`;

export const WipInput = styled.input`
  width: 100%;
  padding: 6px 8px;
  border: 1px solid ${color.borderLight};
  border-radius: 3px;
  ${font.size(14)};

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
  }
`;
