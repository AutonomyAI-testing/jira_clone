import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Container = styled.div`
  padding: 30px;
  background: ${color.backgroundLightest};
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
`;

export const ColumnsRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ColumnNode = styled.div`
  padding: 12px 20px;
  background: ${props => props.color};
  color: ${color.textDarkest};
  border-radius: 4px;
  ${font.size(13)};
  ${font.medium};
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  text-align: center;
  min-width: 100px;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  color: ${color.textMedium};
`;

export const Arrow = styled.span`
  ${font.size(18)};
  color: ${props => (props.direction === 'forward' ? color.primary : color.textMedium)};
`;
