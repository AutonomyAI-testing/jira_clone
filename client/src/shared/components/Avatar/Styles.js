import styled from 'styled-components';

import { font } from 'shared/utils/styles';

const BORDER_WIDTH = 4;
const GRADIENT = 'linear-gradient(145deg, #5ce8e0 0%, #7ab8ff 100%)';

// Layer 1: gradient ring wrapper — no overflow:hidden (causes double-ring in Chromium)
export const ImageRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.size + BORDER_WIDTH * 2}px;
  height: ${p => p.size + BORDER_WIDTH * 2}px;
  border-radius: 50%;
  background: ${GRADIENT};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: ${BORDER_WIDTH}px;
`;

// Layer 2: clip div — overflow:hidden here, NOT on ring
// size+2 with margin:-1px overlaps 1px into ring, eliminating sub-pixel white fringe
export const ImageClip = styled.div`
  width: ${p => p.size + 2}px;
  height: ${p => p.size + 2}px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  margin: -1px;
  transform: translateZ(0);
  will-change: transform;
  isolation: isolate;
`;

// Layer 3: img — no border-radius (clipped by ImageClip), fills 100%
export const ImageInner = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Letter avatar also gets gradient ring
export const LetterRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.size + BORDER_WIDTH * 2}px;
  height: ${p => p.size + BORDER_WIDTH * 2}px;
  border-radius: 50%;
  background: ${GRADIENT};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: ${BORDER_WIDTH}px;
`;

export const Letter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
