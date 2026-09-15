import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => Math.round(props.size * 364 / 212)}px;
  flex-shrink: 0;
`;
