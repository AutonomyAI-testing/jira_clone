import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const FormCont = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 25px 40px 35px;
`;

export const FormHeading = styled.h1`
  padding: 0 0 12px;
  margin: 0 0 8px;
  ${font.size(28)}
  ${font.bold}
  color: ${color.danger};
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${color.borderLightest};
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 12px 16px;
  margin: 0;
  cursor: pointer;
  user-select: none;
  ${font.size(14)}
  ${font.medium}
  color: ${props => (props.isActive ? color.primary : color.textMedium)};
  border-bottom: 3px solid ${props => (props.isActive ? color.primary : 'transparent')};
  margin-bottom: -2px;
  transition: all 0.15s;

  ${props => props.isDanger && `color: ${color.danger};`}
  ${props => props.isActive && props.isDanger && `border-bottom-color: ${color.danger};`}

  &:hover {
    color: ${props => (props.isDanger ? color.danger : color.textDark)};
  }

  &:active {
    ${font.bold}
  }
`;

export const TabContent = styled.div`
  padding: 20px 0;
`;
