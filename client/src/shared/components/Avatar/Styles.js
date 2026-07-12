import styled from 'styled-components';

import { font, mixin } from 'shared/utils/styles';

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  outline: 2px solid #e53935;
  outline-offset: 1px;
  ${props => mixin.backgroundImage(props.avatarUrl)}
`;

export const AnimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #4fd6d0 0%, #64b4e8 35%, #8ea8ee 65%, #c0a0e0 100%);
  padding: 4px;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
`;

export const AnimeInner = styled.div`
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
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
  outline: 2px solid #e53935;
  outline-offset: 1px;
  ${font.medium}
  ${props => font.size(Math.round(props.size / 1.7))}
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const AnimeAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size + 8}px;
  height: ${props => props.size + 8}px;
  border-radius: 50%;
  background: linear-gradient(100deg, #5ecfcf 0%, #7eb8ff 55%, #aabfff 100%);
  padding: 4px;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
  outline: 2px solid #e53935;
  outline-offset: 1px;
`;

export const AnimeAvatarInner = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background-image: url("${props => props.avatarUrl}");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;
