import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const GradientBorderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 3px;
  background: linear-gradient(135deg, #4EECC8 0%, #63B3FF 40%, #9B7EFF 70%, #C084FC 100%);
  width: ${props => props.size + 6}px;
  height: ${props => props.size + 6}px;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
`;

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  flex-shrink: 0;
  overflow: hidden;
  background-image: url("${props => props.avatarUrl}");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;

export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  flex-shrink: 0;
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
