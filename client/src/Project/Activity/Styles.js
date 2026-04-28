import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Page = styled.div`
  padding: 25px 32px 50px;
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  ${font.size(24)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const FiltersBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;
`;
