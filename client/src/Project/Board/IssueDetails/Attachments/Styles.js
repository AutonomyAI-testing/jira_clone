import styled from 'styled-components';

import { font, color } from 'shared/utils/styles';

export const Attachments = styled.div`
  padding-top: 40px;
`;

export const Title = styled.div`
  ${font.medium}
  ${font.size(15)}
  color: ${color.primary};
`;

export const AttachmentButton = styled.div`
  margin-top: 12px;
`;
