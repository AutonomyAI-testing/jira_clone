import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 8px;
  width: 320px;
  padding: 16px 12px 16px 16px;
  border-radius: 3px;
  border: 2px solid red;
  color: #fff;
  background: ${props => color[props.type]};
  cursor: pointer;
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

export const ToastIcon = styled(Icon)`
  flex-shrink: 0;
  font-size: 20px;
  margin-right: 12px;
  margin-top: 2px;
  color: #fff;
`;

export const ToastContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CloseIcon = styled(Icon)`
  flex-shrink: 0;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  margin-left: 8px;
  margin-top: 2px;
  opacity: 0.8;
  transition: opacity 0.1s;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.medium}
  color: #fff;
  margin-bottom: 4px;
`;

export const Message = styled.div`
  white-space: pre-wrap;
  ${font.size(14)}
  ${font.medium}
  color: #fff;
  opacity: 0.95;
`;
