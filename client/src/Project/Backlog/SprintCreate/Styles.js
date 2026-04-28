import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ModalContents = styled.div`
  padding: 35px 40px 40px;
`;

export const ModalTitle = styled.div`
  ${font.size(21)}
  ${font.medium}
  color: ${color.textDarkest};
  padding-bottom: 25px;
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.div`
  ${font.size(13)}
  ${font.medium}
  color: ${color.textMedium};
  margin-bottom: 5px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 10px;
`;
