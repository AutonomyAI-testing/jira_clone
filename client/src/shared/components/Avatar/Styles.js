import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  ${props => mixin.backgroundImage(props.avatarUrl)}
`;

export const AnimeRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${props => props.size + 10}px;
  height: ${props => props.size + 10}px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(145deg, #7ee8d4 0%, #82c8f0 35%, #9baef0 60%, #c4aaf5 85%, #d4b8f8 100%);
  box-sizing: border-box;

  img {
    display: block;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
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
