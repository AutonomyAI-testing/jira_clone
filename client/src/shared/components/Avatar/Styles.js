import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

const statusColors = {
  online: '#36B37E',
  offline: '#8993A4',
  busy: '#FF5630',
  away: '#FFAB00',
};

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  ${props => mixin.backgroundImage(props.avatarUrl)}
`;

export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  text-transform: uppercase;
  color: #fff;
  background: ${props => props.color};
  ${font.medium}
  ${props => font.size(Math.round(props.size / 1.7))}
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const StatusDot = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${props => Math.max(8, Math.round(props.avatarSize * 0.28))}px;
  height: ${props => Math.max(8, Math.round(props.avatarSize * 0.28))}px;
  border-radius: 100%;
  border: 2px solid #fff;
  background: ${props => statusColors[props.status] || statusColors.offline};
  box-sizing: border-box;
`;
