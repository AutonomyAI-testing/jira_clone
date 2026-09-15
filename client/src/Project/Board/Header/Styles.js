import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Header = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BoardName = styled.div`
  ${font.size(24)}
  ${font.medium}
  color: ${color.danger};
`;
