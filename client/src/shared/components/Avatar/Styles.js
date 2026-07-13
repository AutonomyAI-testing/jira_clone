import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  outline: 2px solid #e53e3e;
  outline-offset: 1px;
  ${props => mixin.backgroundImage(props.avatarUrl)}
`;

export const Letter = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  outline: 2px solid #e53e3e;
  outline-offset: 1px;
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

export const AnimeRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => props.size + 6}px;
  height: ${props => props.size + 6}px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #38e8c0 0%, #80c5f0 45%, #a78bfa 100%);
  box-sizing: border-box;
  outline: 2px solid #e53e3e;
  outline-offset: 1px;

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
