import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  outline: 2px solid red;
  ${props => mixin.backgroundImage(props.avatarUrl)}
`;

export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  outline: 2px solid red;
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

export const GradientBorderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  background: linear-gradient(135deg, #4eecd8 0%, #5bb8f5 45%, #a78bfa 85%, #c4b5fd 100%);
  padding: 4px;
  box-sizing: border-box;
  outline: 2px solid red;
`;

export const GradientBorderInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
`;

export const AnimeImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;
