import styled from 'styled-components';

import { font } from 'shared/utils/styles';

const BORDER_WIDTH = 5;
const BORDER_COLOR = '#e53935';

export const ImageRing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size + BORDER_WIDTH * 2}px;
  height: ${props => props.size + BORDER_WIDTH * 2}px;
  border-radius: 50%;
  background: ${BORDER_COLOR};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: ${BORDER_WIDTH}px;
`;

export const ImageClip = styled.div`
  width: ${props => props.size + 2}px;
  height: ${props => props.size + 2}px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  margin: -1px;
  transform: translateZ(0);
  will-change: transform;
  isolation: isolate;
`;

export const ImageInner = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
