import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Header = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const BoardName = styled.div`
  ${font.size(24)}
  ${font.bold}
  color: red;
`;

export const SprintBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  background: ${color.backgroundLightPrimary};
  color: ${color.primary};
  border-radius: 12px;
  ${font.size(13)}
  ${font.medium}
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    text-decoration: none;
  }
`;
