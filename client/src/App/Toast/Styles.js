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
  margin-bottom: 5px;
  width: 300px;
  padding: 14px 18px;
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

export const TypeIcon = styled(Icon)`
  flex-shrink: 0;
  margin-right: 10px;
  margin-top: 1px;
  color: #fff;
  font-size: 18px;
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
  padding-right: 20px;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  right: 14px;
  font-size: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.85);
  flex-shrink: 0;
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.medium}
`;

export const Message = styled.div`
  padding-top: 5px;
  white-space: pre-wrap;
  ${font.size(14)}
`;
