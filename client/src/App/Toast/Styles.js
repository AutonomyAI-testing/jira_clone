import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

const typeAccentColor = {
  success: color.success,
  danger: color.danger,
  warning: color.warning,
};

export const StyledToast = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 340px;
  min-height: 90px;
  padding: 12px 40px 12px 12px;
  border-radius: 8px;
  background: #fff;
  border-left: 5px solid
    ${props => typeAccentColor[props.type] || color.success};
  cursor: pointer;
  ${mixin.boxShadowMedium}
  box-shadow: 0 8px 24px 0 rgba(9, 30, 66, 0.18);
  transition: all 0.15s;
  ${mixin.hardwareAccelerate}

  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    right: -10px;
  }

  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    right: 0;
  }
`;

export const MascotImage = styled.img`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin-right: 14px;
`;

export const TextContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 18px;
  cursor: pointer;
  color: ${color.textLight};

  &:hover {
    color: ${color.textDark};
  }
`;

export const Title = styled.div`
  padding-right: 4px;
  color: ${color.textDarkest};
  ${font.size(14)}
  ${font.bold}
`;

export const Message = styled.div`
  padding-top: 4px;
  white-space: pre-wrap;
  color: ${color.textMedium};
  ${font.size(13)}
  ${font.medium}
`;
