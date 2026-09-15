import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

// Wizard toast uses a custom dark blue background distinct from other toast types
const wizardBackground = '#374A5E';

// Get background color based on toast type - wizard uses custom color, others use theme palette
const getToastBackground = type => {
  if (type === 'wizard') {
    return wizardBackground;
  }
  return color[type];
};

export const Container = styled.div`
  /* Toast container positioned in top-right corner, above modals */
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 5px;
  /* Wizard toasts are wider to accommodate the side icon */
  width: ${props => (props.type === 'wizard' ? '340px' : '300px')};
  /* Wizard padding reserves space on left for icon (72px total: 12px left padding + 48px icon + 12px right padding) */
  padding: ${props => (props.type === 'wizard' ? '12px 12px 12px 72px' : '15px 20px')};
  border-radius: 3px;
  color: #fff;
  background: ${props => getToastBackground(props.type)};
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.clearfix}
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

export const CloseIcon = styled(Icon)`
  /* Close button positioned in top-right corner of toast */
  position: absolute;
  top: 13px;
  right: 14px;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
`;

export const IconWrapper = styled.div`
  /* Positions icon on the left side of wizard toast, vertically centered */
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Title = styled.div`
  padding-right: 22px;
  /* Wizard title is bright white; other types inherit from theme */
  color: ${props => (props.type === 'wizard' ? '#FFFFFF' : '#fff')};
  ${font.size(15)}
  ${font.medium}
`;

export const Message = styled.div`
  padding: 8px 10px 0 0;
  white-space: pre-wrap;
  /* Wizard message uses a lighter gray for secondary text; other types inherit */
  color: ${props => (props.type === 'wizard' ? '#B0BEC5' : 'inherit')};
  ${font.size(14)}
  ${font.medium}
`;
