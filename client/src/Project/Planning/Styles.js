import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  text-align: center;
`;

export const Title = styled.h1`
  color: ${color.success};
  ${font.bold};
  ${font.size(36)};
  margin-bottom: 32px;
  letter-spacing: 0.5px;
`;

export const WizardImage = styled.img`
  max-width: 350px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;
