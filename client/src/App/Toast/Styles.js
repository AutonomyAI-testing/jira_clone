import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon, Avatar } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 340px;
  padding: 12px 40px 12px 12px;
  border-radius: 8px;
  color: #fff;
  background: ${props => color[props.type]};
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
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

export const ToastAvatar = styled(Avatar)`
  flex: 0 0 auto;
  margin-right: 12px;
  background-color: rgba(255, 255, 255, 0.18);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.bold}
`;

export const Message = styled.div`
  padding-top: 4px;
  white-space: pre-wrap;
  opacity: 0.9;
  ${font.size(13)}
  ${font.medium}
`;
