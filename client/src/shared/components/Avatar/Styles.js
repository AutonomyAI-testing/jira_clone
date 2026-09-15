import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  background-image: url("${props => props.avatarUrl}");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;

export const GradientBorderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size + props.borderWidth * 2}px;
  height: ${props => props.size + props.borderWidth * 2}px;
  border-radius: 50%;
  background: linear-gradient(135deg, #80e8c8 0%, #7ecef4 40%, #a8c8f8 70%, #c8b8f0 100%);
  padding: ${props => props.borderWidth}px;
  box-sizing: border-box;
  overflow: hidden;
  outline: 2px solid #e03030;
  outline-offset: 2px;
`;

export const GradientBorderInner = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

export const GradientImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
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
