import styled, { css } from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 24px;
  bottom: 24px;
  max-width: 400px;
  pointer-events: none;
`;

const getTypeStyles = props => {
  const typeMap = {
    success: css`
      background: ${color.success};
      border-left: 4px solid ${mixin.darken(color.success, 0.2)};
    `,
    danger: css`
      background: ${color.danger};
      border-left: 4px solid ${mixin.darken(color.danger, 0.2)};
    `,
    warning: css`
      background: ${color.warning};
      border-left: 4px solid ${mixin.darken(color.warning, 0.2)};
    `,
    info: css`
      background: ${color.primary};
      border-left: 4px solid ${mixin.darken(color.primary, 0.2)};
    `,
  };
  return typeMap[props.type] || css`
    background: ${color.primary};
    border-left: 4px solid ${mixin.darken(color.primary, 0.2)};
  `;
};

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 12px;
  width: 100%;
  padding: 16px 16px 16px 20px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  ${getTypeStyles}
  ${mixin.boxShadowMedium}
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  ${mixin.hardwareAccelerate}
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
  }

  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    transform: translateY(20px) scaleY(0.9);
  }

  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }

  @media (max-width: 480px) {
    width: calc(100vw - 32px);
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.bold}
  color: #fff;
  margin: 0;
`;

export const Message = styled.div`
  ${font.size(14)}
  ${font.regular}
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.4;
`;

export const CloseIcon = styled(Icon)`
  flex-shrink: 0;
  font-size: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.2s;
  padding: 2px 2px 0 0;
  
  &:hover {
    color: #fff;
  }
`;
