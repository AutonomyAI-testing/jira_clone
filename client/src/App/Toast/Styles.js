import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
  pointer-events: none;
`;

export const StyledToast = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  width: 360px;
  padding: 16px 20px;
  border-radius: 4px;
  color: #fff;
  background: ${props => color[props.type]};
  box-shadow: ${mixin.boxShadowMedium};
  pointer-events: auto;
  transition: all 0.2s ease;
  ${mixin.hardwareAccelerate}

  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    transform: translateX(400px);
  }

  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const Title = styled.div`
  ${font.medium}
  ${font.size(15)}
  color: #fff;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Message = styled.div`
  ${font.regular}
  ${font.size(13)}
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

export const ToastIcon = styled(Icon)`
  color: #fff;
`;
