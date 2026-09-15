import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  box-shadow: 0 0 0 2px #e84040;
  ${props => mixin.backgroundImage(props.avatarUrl)}
`;

export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  box-shadow: 0 0 0 2px #e84040;
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

// AnimeRing uses ::before for the gradient border — avoids all overflow:hidden
// antialiasing artifacts by keeping the image in its own layer
export const AnimeRing = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  flex-shrink: 0;

  /* Gradient ring via pseudo-element */
  &::before {
    content: '';
    position: absolute;
    inset: ${props => -Math.max(2, Math.round(props.size * 0.04))}px;
    border-radius: 50%;
    background: linear-gradient(150deg, #40e0d0 0%, #7ab8f5 40%, #9b8ff5 100%);
    z-index: 0;
  }
`;

// The image sits above the pseudo-element, clipped to circle
export const AnimeAvatar = styled.img`
  display: block;
  position: relative;
  z-index: 1;
  width: 115%;
  height: 115%;
  margin: -7.5% 0 0 -7.5%;
  border-radius: 50%;
  object-fit: cover;
  object-position: 55% 25%;
  max-width: none;
  box-shadow: 0 0 0 2px #e84040;
`;

