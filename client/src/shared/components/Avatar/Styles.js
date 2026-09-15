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

const GRADIENT_RING_BORDER = 8;

export const GradientRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => props.size + GRADIENT_RING_BORDER * 2}px;
  height: ${props => props.size + GRADIENT_RING_BORDER * 2}px;
  border-radius: 50%;
  padding: ${GRADIENT_RING_BORDER}px;
  background: linear-gradient(135deg, #38e8c0 0%, #80c5f0 50%, #a78bfa 100%);
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
