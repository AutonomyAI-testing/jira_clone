import styled from 'styled-components';

export const Container = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: #ebf5ec;
  overflow: hidden;
  flex-shrink: 0;
`;

export const MascotImage = styled.img`
  width: 96%;
  height: 96%;
  object-fit: contain;
  object-position: center;
  display: block;
`;
