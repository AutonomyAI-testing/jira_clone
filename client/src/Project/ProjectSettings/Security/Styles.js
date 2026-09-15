import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
`;

export const Placeholder = styled.div`
  text-align: center;
  padding: 60px 20px;
`;

export const PlaceholderIcon = styled.div`
  margin-bottom: 20px;
  color: ${color.textMedium};
`;

export const PlaceholderTitle = styled.h3`
  margin: 0 0 12px;
  ${font.size(18)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const PlaceholderDescription = styled.p`
  margin: 0;
  ${font.size(14)}
  color: ${color.textMedium};
  line-height: 1.5;
`;
