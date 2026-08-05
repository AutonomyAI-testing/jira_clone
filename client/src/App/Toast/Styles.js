import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 30px;
`;

export const StyledToast = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;
  width: 320px;
  min-height: 72px;
  padding: 14px 16px 14px 108px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(9, 30, 66, 0.18), 0 0 1px rgba(9, 30, 66, 0.25);
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 5px solid ${props => color[props.type] || color.primary};
  overflow: visible;
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

export const MascotWrapper = styled.div`
  position: absolute;
  left: -10px;
  top: -28px;
  width: 108px;
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;
`;

export const MascotImg = styled.img`
  width: 96px;
  height: 96px;
  object-fit: contain;
  object-position: top center;
  display: block;
`;

export const TypeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 7px;
  border-radius: 3px;
  margin-bottom: 4px;
  background: ${props => color[props.type] || color.primary};
  color: #fff;
  ${font.size(11)}
  ${font.medium}
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 18px;
  cursor: pointer;
  color: ${color.textLight};
  opacity: 0.7;
  transition: opacity 0.1s;
  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.div`
  padding-right: 20px;
  color: ${color.textDarkest};
  ${font.size(14)}
  ${font.medium}
  line-height: 1.4;
`;

export const Message = styled.div`
  padding: 3px 10px 0 0;
  white-space: pre-wrap;
  color: ${color.textMedium};
  ${font.size(13)}
  line-height: 1.4;
`;
