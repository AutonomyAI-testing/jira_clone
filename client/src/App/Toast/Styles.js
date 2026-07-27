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
  align-items: center;
  margin-bottom: 8px;
  width: 340px;
  padding: 14px 40px 14px 14px;
  border-radius: 5px;
  color: #fff;
  background: ${props => color[props.type]};
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.boxShadowMedium}
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

export const MascotAvatar = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin-right: 14px;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);

  img {
    width: 78%;
    height: 78%;
    object-fit: contain;
    object-position: center;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
`;

export const Title = styled.div`
  ${font.size(15)}
  ${font.medium}
`;

export const Message = styled.div`
  padding-top: 4px;
  white-space: pre-wrap;
  ${font.size(14)}
  ${font.regular}
  opacity: 0.95;
`;
