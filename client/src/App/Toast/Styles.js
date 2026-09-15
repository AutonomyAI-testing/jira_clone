import styled from 'styled-components';

import { font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

// Fixed container for toast stack - positioned above modals, pointer-events: none allows clicks to pass through
export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 24px;
  top: 24px;
  pointer-events: none; /* Allow clicks to pass to content beneath; re-enabled on individual toasts */
`;

// Returns accent color based on toast type - used for icon color and left border
const getAccentColor = props => {
  switch (props.type) {
    case 'danger':
      return '#E44D42'; // Red for error/danger
    case 'warning':
      return '#C8894F'; // Brown/tan for warning
    case 'success':
    default:
      return '#F5C518'; // Gold for success
  }
};

// Individual toast element - deep navy with type-specific accent border
export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 12px;
  width: 320px;
  padding: 16px 20px 16px 16px;
  border-radius: 8px;
  pointer-events: auto; /* Re-enable clicks on toast itself */
  cursor: pointer; /* Click anywhere to dismiss */

  /* Wizard theme: deep navy background with gold accents */
  background: #1a2744;
  border: 2px solid #e44d42;
  border-left: 4px solid ${props => getAccentColor(props)}; /* Accent color varies by type */

  /* Starfield texture effect with box-shadow */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(245, 197, 24, 0.05);

  transition: all 0.2s ease-out;
  ${mixin.hardwareAccelerate}

  &.jira-toast-enter {
    opacity: 0;
    transform: translateX(350px);
  }

  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    transform: translateX(0);
  }

  &.jira-toast-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    transform: translateX(350px);
  }
`;

// Icon display - colored by type, inline to sit beside content
export const IconWrapper = styled.span`
  color: ${props => getAccentColor(props)};
  font-size: 16px;
  margin-right: 12px;
  display: inline-block;
  flex-shrink: 0; /* Prevent icon from shrinking in flex layout */
`;

// Content container - takes remaining flex space after icon
export const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0; /* Allow flex item to shrink below content size */
`;

// Close icon - positioned absolutely in top-right, hover brightens for feedback
export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 20px;
  cursor: pointer;
  color: #c8d6f8;
  transition: color 0.2s ease-out;

  &:hover {
    color: #fff; /* Brighten on hover for visual feedback */
  }
`;

// Toast title - displayed in gold/yellow for prominence
export const Title = styled.div`
  color: #f5c518; /* Gold color for visual hierarchy */
  ${font.bold}
  ${font.size(15)}
  margin-bottom: 4px;
`;

// Toast message - light blue text, preserves whitespace for multi-line content
export const Message = styled.div`
  color: #c8d6f8; /* Light blue text on dark background */
  white-space: pre-wrap; /* Preserve line breaks in message content */
  ${font.regular}
  ${font.size(14)}
`;
