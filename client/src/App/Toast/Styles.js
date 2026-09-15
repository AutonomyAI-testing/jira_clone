import styled, { css } from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 24px;
  top: 24px;
  max-width: 400px;
  pointer-events: none;
`;

// Type-based background colors for toast notifications
// Extracted as a separate object for maintainability and clarity
const typeStyles = {
  success: css`
    background: ${color.success};
  `,
  danger: css`
    background: ${color.danger};
  `,
  warning: css`
    background: ${color.warning};
  `,
};

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 12px;
  padding: 16px 16px 16px 16px;
  border-radius: 4px;
  color: #fff;
  ${props => typeStyles[props.type] || typeStyles.success} /* Apply type-specific background */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${mixin.hardwareAccelerate}
  pointer-events: all;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 280px;

  &:hover {
    /* Enhanced shadow and subtle lift on hover for better interaction feedback */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  /* Slide-in animation from the right using transform for better performance */
  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    transform: translateX(100%) translateZ(0);
  }

  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    transform: translateX(0) translateZ(0);
  }
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.div`
  padding-right: 28px;
  ${font.size(14)}
  ${font.bold}
  margin-bottom: 4px;
  line-height: 1.4;
`;

export const Message = styled.div`
  padding-right: 28px;
  white-space: pre-wrap;
  word-break: break-word;
  ${font.size(13)}
  ${font.regular}
  line-height: 1.5;
  margin-top: 4px;
`;
