import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Page = styled.div`
  padding: 25px 32px 50px;
`;

export const Header = styled.div`
  margin-top: 6px;
`;

export const BoardName = styled.div`
  margin-top: 15px;
  ${font.size(24)}
  ${font.medium}
`;
