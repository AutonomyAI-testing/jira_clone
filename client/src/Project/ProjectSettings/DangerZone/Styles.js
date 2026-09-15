import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
`;

export const DangerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 2px solid ${color.danger};
  border-radius: 4px;
  background: #fdf3f3; /* danger background tint — matches color.danger (#E13C3C) at ~5% opacity */
`;

export const CardLeft = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px;
  ${font.size(16)}
  ${font.bold}
  color: ${color.danger};
`;

export const CardDescription = styled.p`
  margin: 0;
  ${font.size(14)}
  color: ${color.textMedium};
  line-height: 1.5;
`;

export const CardRight = styled.div`
  flex-shrink: 0;
`;
