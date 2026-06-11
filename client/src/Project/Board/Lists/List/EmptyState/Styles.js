import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  ${font.size(48)}
  margin-bottom: 16px;
  opacity: 0.7;
`;

export const EmptyMessage = styled.p`
  ${font.size(14)}
  color: ${color.textMedium};
  margin: 0;
`;
