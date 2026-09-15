import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

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

export const WizardRobotAvatar = styled.img`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  object-fit: cover;
  object-position: center top;
  flex-shrink: 0;
  border: 3px solid #e84040;
  box-sizing: border-box;
`;
