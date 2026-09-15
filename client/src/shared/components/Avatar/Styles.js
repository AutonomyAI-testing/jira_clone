import styled, { css } from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  flex-shrink: 0; /* Prevent shrinking when used as flex child in RingContainer */
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
  flex-shrink: 0; /* Prevent shrinking when used as flex child in RingContainer */
  ${font.medium}
  ${props => font.size(Math.round(props.size / 1.7))}
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

// Gradient ring wrapper: uses padding + background pattern (avoids z-index issues with pseudo-elements).
// Padding creates the ring width; scales proportionally with avatar size (9% of size, min 2px).
export const RingContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  ${props =>
    props.hasGradientBorder &&
    css`
      padding: ${Math.max(2, Math.round(props.size * 0.09))}px;
      background: linear-gradient(135deg, #4ecdc4, #8b9fe8);
    `}
`;
