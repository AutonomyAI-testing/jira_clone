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

// Solid red outline ring — same wrapper+padding pattern, no overflow:hidden
export const RedOutlineWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => props.size + 6}px;
  height: ${props => props.size + 6}px;
  border-radius: 50%;
  padding: 3px;
  background: #e11d48;
  box-sizing: border-box;

  img {
    display: block;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
  }
`;

// Gradient border ring using padding trick — no overflow:hidden to avoid Chromium antialiasing artifact
export const GradientBorderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => props.size + 10}px;
  height: ${props => props.size + 10}px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, #5df0d0 0%, #72d9f5 30%, #9db8f8 60%, #b89df8 85%, #c89cf5 100%);
  box-sizing: border-box;

  img {
    display: block;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
  }
`;
