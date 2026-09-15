import styled from 'styled-components';

export const CircleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  overflow: hidden;
  background: #f0f4ff;
  border: 2px solid #e13c3c;
  flex-shrink: 0;
`;

export const WizardImg = styled.img`
  width: 72%;
  height: 72%;
  object-fit: contain;
  object-position: center;
`;

export const PlainWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  flex-shrink: 0;
`;
