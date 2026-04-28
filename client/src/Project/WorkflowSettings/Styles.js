import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Container = styled.div`
  padding: 25px 40px 50px;
  max-width: 1200px;
`;

export const Header = styled.div`
  margin-top: 6px;
  ${font.size(24)};
  ${font.medium};
`;

export const Section = styled.div`
  margin-top: 40px;
`;

export const SectionTitle = styled.div`
  margin-bottom: 20px;
  color: ${color.textDark};
  ${font.size(18)};
  ${font.medium};
`;
