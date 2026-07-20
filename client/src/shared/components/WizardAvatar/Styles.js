import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
`;

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25%       { transform: rotate(-4deg); }
  75%       { transform: rotate(4deg); }
`;

export const Wrapper = styled.span`
  display: inline-block;
  line-height: 0;
  border: 3px solid #E13C3C;
  border-radius: 10px;
  padding: 4px;

  svg {
    width: ${({ size }) => size}px;
    height: auto;
    display: block;
  }

  &[data-animated='true'] {
    animation: ${float} 3s ease-in-out infinite;
  }

  &[data-animated='true']:hover {
    animation: ${wiggle} 0.5s ease-in-out infinite;
  }
`;
