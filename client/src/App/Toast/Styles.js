import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 24px;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 360px;
  /* Disable pointer events on container; individual toasts enable them as needed */
  pointer-events: none;

  > div {
    pointer-events: auto;
  }
`;

export const StyledToast = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 4px;
  background: ${props => color[props.type] || color.primary};
  color: #fff;
  box-shadow: ${mixin.boxShadowMedium};
  overflow: hidden;
  transition: all 0.15s ease-out;
  ${mixin.hardwareAccelerate}

  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    transform: translateX(10px);
  }

  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  padding-right: 8px;
`;

export const Title = styled.div`
  ${font.size(14)}
  ${font.medium}
  color: #fff;
  line-height: 1.4;
`;

export const Message = styled.div`
  ${font.size(13)}
  ${font.regular}
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const CloseIcon = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px;
  font-size: 18px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.15s ease-out;
  ${mixin.clickable}

  &:hover {
    color: #fff;
  }
`;
