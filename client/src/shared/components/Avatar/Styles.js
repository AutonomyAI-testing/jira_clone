import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

const BORDER_THICKNESS = 3;

// Outer ring: linear-gradient background with padding acting as the border thickness
export const GradientRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: ${BORDER_THICKNESS}px;
  background: linear-gradient(135deg, #a8d8f0 0%, #70c8e8 30%, #29b6a8 70%, #0fa89a 100%);
  width: ${props => props.size + BORDER_THICKNESS * 2}px;
  height: ${props => props.size + BORDER_THICKNESS * 2}px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

// Solid-color outline ring (e.g. red)
export const OutlineRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: ${BORDER_THICKNESS}px;
  background: ${props => props.outlineColor || '#E13C3C'};
  width: ${props => props.size + BORDER_THICKNESS * 2}px;
  height: ${props => props.size + BORDER_THICKNESS * 2}px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

// Inner wrapper: clips content to a circle
export const ClipWrapper = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  overflow: hidden;
  flex-shrink: 0;
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
