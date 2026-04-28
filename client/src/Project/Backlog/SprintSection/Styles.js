import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Section = styled.div`
  margin-bottom: 30px;
  border-radius: 4px;
  background: ${color.backgroundLightest};
  border-left: 4px solid ${color.primary};
  ${mixin.boxShadowMedium}
`;

export const Issues = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 100px;
`;

export const EmptyState = styled.div`
  padding: 40px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(15)}
`;
