import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const GradientBorderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size + 6}px;
  height: ${props => props.size + 6}px;
  border-radius: 100%;
  background: linear-gradient(135deg, #00D9FF, #4FC3F7, #7986CB, #9575CD, #AB47BC);
  padding: 4px;
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
