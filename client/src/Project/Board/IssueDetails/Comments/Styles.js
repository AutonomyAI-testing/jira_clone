import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Comments = styled.div`
  padding-top: 40px;
`;

export const Title = styled.div`
  ${font.medium}
  ${font.size(15)}
`;

export const FilterContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;
  flex-wrap: wrap;
`;

export const FilterSelect = styled.div`
  flex: 0 1 auto;
  min-width: 150px;
  max-width: 300px;
  width: auto;
`;

export const NoComments = styled.div`
  margin-top: 20px;
  padding: 15px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(14)}
`;
