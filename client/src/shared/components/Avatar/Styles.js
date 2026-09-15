import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  border: 2px solid #E13C3C;
  ${props => mixin.backgroundImage(props.avatarUrl)}
`;

export const WizardWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  border: 2px solid #E13C3C;
  background-color: #ebecf0;
  overflow: hidden;

  & > img {
    width: 72%;
    height: 72%;
    object-fit: contain;
    object-position: center center;
  }
`;

export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  border: 2px solid #E13C3C;
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
