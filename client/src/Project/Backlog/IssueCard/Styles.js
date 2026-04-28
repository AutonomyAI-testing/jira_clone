import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Card = styled.div`
  position: relative;
  padding: 16px;
  padding-left: 20px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${color.borderLightest};
  transition: all 0.1s;
  ${mixin.clickable}

  &:hover {
    box-shadow: 0 0 0 1px ${color.borderLight};
  }

  ${props =>
    props.isDragging &&
    `
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transform: rotate(3deg);
  `}
`;

export const StatusBorder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: ${props => props.color};
  border-radius: 4px 0 0 4px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.medium}
  color: ${color.textDarkest};
  cursor: pointer;
  
  &:hover {
    color: ${color.primary};
    text-decoration: underline;
  }
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 16px;
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FieldLabel = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textMedium};
  text-transform: uppercase;
`;

export const FieldValue = styled.div`
  ${font.size(14)}
  color: ${color.textDark};
`;

export const Assignees = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const EstimateInput = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  input {
    width: 60px;
  }

  span {
    ${font.size(13)}
    color: ${color.textMedium};
  }
`;
