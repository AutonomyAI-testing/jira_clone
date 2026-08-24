import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
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

export const CowboyHat = styled.span`
  position: absolute;
  top: ${props => Math.round(props.size * -0.42)}px;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${props => Math.round(props.size * 0.75)}px;
  line-height: 1;
  pointer-events: none;
  user-select: none;
`;
