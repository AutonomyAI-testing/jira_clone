import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

const typeColors = {
  success: color.success,
  danger: color.danger,
  warning: color.warning,
  primary: color.primary,
};

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MascotWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6px;
  pointer-events: none;

  /* Target the Avatar image element */
  > div {
    border-radius: 100%;
    box-shadow: 0 4px 12px rgba(9, 30, 66, 0.2);
    border: 3px solid #fff;
  }
`;

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 8px;
  width: 320px;
  padding: 14px 40px 14px 18px;
  border-radius: 8px;
  background: #ffffff;
  border-left: 4px solid ${props => typeColors[props.type] || typeColors.success};
  box-shadow: 0 4px 16px rgba(9, 30, 66, 0.14), 0 0 1px rgba(9, 30, 66, 0.18);
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.hardwareAccelerate}

  ${props => props.isFirst && `
    outline: 2px solid ${color.danger};
    outline-offset: 0;
  `}

  &:hover {
    box-shadow: 0 6px 20px rgba(9, 30, 66, 0.2), 0 0 1px rgba(9, 30, 66, 0.22);
  }

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

export const ToastContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 18px;
  cursor: pointer;
  color: ${color.textLight};
  transition: color 0.1s;

  &:hover {
    color: ${color.textDark};
  }
`;

export const Title = styled.div`
  padding-right: 4px;
  color: ${color.textDarkest};
  ${font.size(14)}
  ${font.medium}
  line-height: 1.4;
`;

export const Message = styled.div`
  margin-top: 4px;
  color: ${color.textMedium};
  white-space: pre-wrap;
  ${font.size(13)}
  line-height: 1.45;
`;
