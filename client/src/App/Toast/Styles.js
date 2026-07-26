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
  align-items: flex-start;
  margin-bottom: 8px;
  width: 340px;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 4px solid ${props => color[props.type]};
  background: #fff;
  color: ${color.textDarkest};
  cursor: pointer;
  ${mixin.boxShadowMedium}
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

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 12px;
  margin-top: 2px;
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
  padding-right: 22px;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 18px;
  cursor: pointer;
  color: ${color.textLight};

  &:hover {
    color: ${color.textDark};
  }
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.medium}
  color: ${color.danger};
`;

export const Message = styled.div`
  padding-top: 4px;
  white-space: pre-wrap;
  ${font.size(13)}
  color: ${color.danger};
`;
