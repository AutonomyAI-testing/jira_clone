import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;
