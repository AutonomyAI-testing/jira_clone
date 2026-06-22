import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

// Maps toast type to its background color from the design system
// Provides semantic color coding for different notification categories
const toastColor = type => {
  const map = {
    success: color.success,
    danger: color.danger,
    warning: color.warning,
    info: color.primary,
  };
  return map[type] || color.success; // Falls back to success color for unknown types
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
  width: 320px;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: ${props => toastColor(props.type)};
  cursor: pointer;
  display: flex;
  align-items: flex-start;
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

// Icon positioned left of the toast content
// flex-shrink: 0 prevents icon squishing when content overflows
// margin-top: 1px aligns icon with title text baseline
export const TypeIcon = styled(Icon)`
  flex-shrink: 0;
  margin-right: 10px;
  margin-top: 1px;
  color: #fff;
  opacity: 0.9;
`;

// Flex container for title and message
// flex: 1 expands to fill available space after icon
// min-width: 0 enables text truncation in long messages
// padding-right reserves space for the close icon
export const Content = styled.div`
  flex: 1;
  min-width: 0;
  padding-right: 20px;
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
  padding-top: 6px;
  white-space: pre-wrap;
  ${font.size(13)}
  opacity: 0.9;
`;
