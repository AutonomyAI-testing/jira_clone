import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  outline: 3px solid red;
  outline-offset: 4px;
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
  outline: 3px solid red;
  outline-offset: 4px;
  ${font.medium}
  ${props => font.size(Math.round(props.size / 1.7))}
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const AnimeRingWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  flex-shrink: 0;

  outline: 3px solid red;
  outline-offset: ${props => Math.max(2, Math.round(props.size * 0.04)) + 5}px;

  &::before {
    content: '';
    position: absolute;
    inset: -${props => Math.max(2, Math.round(props.size * 0.04))}px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1dd7d7 0%, #4fc3f7 25%, #1e88e5 55%, #7c68ee 78%, #c5b8ff 100%);
    z-index: 0;
  }
`;

export const AnimeImage = styled.img`
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
`;
