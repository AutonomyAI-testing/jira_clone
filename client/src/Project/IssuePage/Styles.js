import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  max-width: 1100px;
`;

export const TopActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 24px;
`;

export const TopActionsRight = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 65%;
  padding-right: 50px;
`;

export const Right = styled.div`
  width: 35%;
  padding-top: 5px;
`;

export const SectionTitle = styled.div`
  margin: 24px 0 5px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)}
  ${font.bold}
`;
