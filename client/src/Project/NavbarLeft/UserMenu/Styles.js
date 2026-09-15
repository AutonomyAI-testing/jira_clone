import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';

export const Trigger = styled.div`
  padding: 8px;
  ${mixin.clickable}
`;

export const Popup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  box-shadow: 0 4px 11px rgba(9, 30, 66, 0.13), 0 0 1px rgba(9, 30, 66, 0.13);
  min-width: 240px;
  z-index: ${zIndexValues.dropdown};
  ${mixin.hardwareAccelerate}
`;

export const PopupContent = styled.div`
  padding: 12px 0;
`;

export const UserInfo = styled.div`
  padding: 8px 16px;
`;

export const UserName = styled.div`
  ${font.medium}
  ${font.size(14)}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const UserEmail = styled.div`
  ${font.regular}
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const Divider = styled.div`
  height: 1px;
  background: ${color.borderLightest};
  margin: 8px 0;
`;

export const MenuItem = styled.a`
  display: block;
  padding: 8px 16px;
  color: ${color.textDark};
  text-decoration: none;
  transition: background 0.1s;
  ${mixin.clickable}
  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const Container = styled.div`
  position: relative;
`;
