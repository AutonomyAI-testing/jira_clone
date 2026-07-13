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

// Anime variant — circular image with a thin teal-to-blue gradient ring border
// Strategy: use a padding-based wrapper for the ring, image sits inside with no gap
export const AnimeRing = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* ring thickness = 3% of size, min 2px */
  padding: ${props => Math.max(2, Math.round(props.size * 0.03))}px;
  border-radius: 50%;
  background: linear-gradient(135deg, #43e8d8 0%, #74b9ff 55%, #a29bfe 100%);
  /* total rendered size = size + 2*padding */
  box-sizing: content-box;
  /* red outline sits outside the gradient ring */
  outline: 2px solid #e84343;
  outline-offset: 2px;
`;

export const AnimeImage = styled.div`
  position: relative;
  z-index: 1;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background-image: url('${props => props.avatarUrl}');
  background-position: 50% 30%;
  background-repeat: no-repeat;
  /* slightly zoomed in so character face fills the circle */
  background-size: 110%;
  background-color: transparent;
  flex-shrink: 0;
`;
