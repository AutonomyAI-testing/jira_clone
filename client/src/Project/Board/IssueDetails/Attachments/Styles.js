import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Attachments = styled.div`
  padding-top: 40px;
`;

export const Title = styled.div`
  ${font.medium}
  ${font.size(15)}
  margin-bottom: 12px;
`;

export const AttachmentList = styled.div`
  margin-top: 16px;
`;

export const AttachmentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  margin-bottom: 8px;
  background: ${color.backgroundLightest};
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  transition: all 0.1s;
  &:hover {
    background: ${color.backgroundLight};
    border-color: ${color.borderLight};
  }
`;

export const AttachmentInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AttachmentName = styled.div`
  ${font.size(14)}
  color: ${color.textDark};
  margin-bottom: 4px;
`;

export const AttachmentSize = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const RemoveButton = styled.button`
  padding: 4px 8px;
  background: transparent;
  border: none;
  color: ${color.textMedium};
  ${font.size(13)}
  ${mixin.clickable}
  border-radius: 3px;
  transition: all 0.1s;
  &:hover {
    color: ${color.danger};
    background: ${color.backgroundLight};
  }
`;
