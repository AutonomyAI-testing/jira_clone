import styled from 'styled-components';

import { sizes } from 'shared/utils/styles';

const navLeft = sizes.appNavBarLeftWidth;
const sidebar = sizes.secondarySideBarWidth;

export const PlanPage = styled.div`
  position: fixed;
  top: 0;
  left: ${navLeft + sidebar}px;
  right: 0;
  bottom: 0;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const MascotImage = styled.img`
  width: 280px;
  height: auto;
  margin-bottom: 32px;
  user-select: none;
  pointer-events: none;
`;

export const PlanText = styled.h1`
  color: #ff0000;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin: 0;
  text-transform: lowercase;
  font-family: 'CircularStdBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;
