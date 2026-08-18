import styled from 'styled-components';

import { zIndexValues } from 'shared/utils/styles';
import sunflowerBg from './assets/sunflowerBase64';

export const PageBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: #000;
  background-image: url(${sunflowerBg});
  background-size: cover;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  z-index: ${zIndexValues.modal};
  pointer-events: none;
`;

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;

  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    right: -10px;
  }

  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    right: 0;
  }
`;

export const FindFeiTitle = styled.div`
  color: #ff0000;
  font-size: 20px;
  font-weight: 700;
  font-family: CircularStdBold, sans-serif;
  letter-spacing: 0.02em;
`;
