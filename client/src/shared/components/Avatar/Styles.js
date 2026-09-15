import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

const DEFAULT_GRADIENT = 'linear-gradient(135deg, #74b9ff 0%, #a29bfe 50%, #55efc4 100%)';

export const GradientBorder = styled.div`
  display: inline-flex;
  border-radius: 50%;
  padding: 2px;
  background: ${props =>
    typeof props.gradient === 'string' ? props.gradient : DEFAULT_GRADIENT};
  flex-shrink: 0;
`;

export const Image = styled.div`
  display: block;
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
