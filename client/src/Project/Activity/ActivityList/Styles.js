import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const EmptyState = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(15)}
`;
