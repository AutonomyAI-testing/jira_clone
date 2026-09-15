import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

// Custom color palette for each toast variant
const toastColors = {
  success: '#0B875B',
  danger: '#E13C3C',
  warning: '#F89C1C',
  info: '#0052cc',
  wizard: '#403294',
};

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 360px;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: ${props => toastColors[props.type] || color.primary};
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: flex-start;
  ${mixin.hardwareAccelerate}

  /* Animate toast slide-in from right and fade-out on exit */
  &.jira-toast-enter, &.jira-toast-exit.jira-toast-exit-active {
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
  margin-right: 12px;
  margin-top: 2px;
  font-size: 22px;
  color: #fff;
  flex-shrink: 0;
`;

export const CloseIcon = styled(Icon)`
  margin-left: auto;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
  flex-shrink: 0;
`;

/* Flexbox container for toast title and message */
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.medium}
`;

export const Message = styled.div`
  padding: 8px 0 0 0;
  white-space: pre-wrap; /* Preserve line breaks in toast messages */
  ${font.size(14)}
  ${font.medium}
`;
