import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Panel = styled.div`
  position: fixed;
  left: 64px;
  top: 0;
  width: 380px;
  height: 100vh;
  background: white;
  ${mixin.boxShadowDropdown}
  display: flex;
  flex-direction: column;
  z-index: 1001;
  animation: slideIn 0.2s ease;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${color.borderLightest};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const MarkAllReadLink = styled.span`
  ${mixin.link(color.primary)}
  ${font.size(13)}
`;

export const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  ${mixin.customScrollbar()}
`;

export const NotificationItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 20px;
  border-left: 3px solid ${props => (props.isRead ? 'transparent' : color.primary)};
  background: ${props => (props.isRead ? 'white' : color.backgroundLightPrimary)};
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: ${color.backgroundLightest};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${color.borderLightest};
  }
`;

export const NotificationContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const NotificationText = styled.div`
  ${font.size(14)}
  color: ${color.textDark};
  line-height: 1.4;
  margin-bottom: 4px;
`;

export const NotificationTime = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const Footer = styled.div`
  padding: 16px 20px;
  border-top: 1px solid ${color.borderLightest};
  text-align: center;
`;

export const ViewAllLink = styled.span`
  ${mixin.link(color.primary)}
  ${font.size(14)}
`;
