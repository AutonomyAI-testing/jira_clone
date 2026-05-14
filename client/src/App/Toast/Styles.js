import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

// Map toast types to background colors
const getBackgroundColor = type => {
  const backgrounds = {
    success: color.success,
    danger: '#F0B429',
    warning: color.warning,
    info: color.primary,
  };
  return backgrounds[type] || backgrounds.success;
};

// Map toast types to border colors
const getBorderColor = type => {
  const borders = {
    danger: '#D32E2E',
  };
  return borders[type] || null;
};

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 8px;
  width: 300px;
  padding: 12px 16px 12px 40px;
  border-radius: 4px;
  color: #fff;
  background: ${props => getBackgroundColor(props.type)};
  border: ${props =>
    getBorderColor(props.type) ? `2px solid ${getBorderColor(props.type)}` : 'none'};
  cursor: pointer;
  transition: all 0.2s ease;
  ${mixin.hardwareAccelerate}
  display: flex;
  flex-direction: column;
  gap: 4px;

  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    transform: translateX(20px);
  }

  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  flex-shrink: 0;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  font-size: 18px;
  cursor: pointer;
  color: #fff;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.div`
  ${font.size(14)}
  ${font.medium}
  line-height: 1.3;
`;

export const Message = styled.div`
  white-space: pre-wrap;
  ${font.size(13)}
  ${font.regular}
  line-height: 1.4;
  opacity: 0.95;
`;
