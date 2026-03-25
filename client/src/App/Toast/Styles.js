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
  position: relative;
  display: flex;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
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

export const IconContainer = styled.div`
  flex-shrink: 0;
  width: 20px;
  margin-right: 10px;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  padding-top: 1px;
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  right: 14px;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.medium}
`;

export const Message = styled.div`
  padding: 8px 0 0 0;
  white-space: pre-wrap;
  ${font.size(14)}
  ${font.medium}
`;
