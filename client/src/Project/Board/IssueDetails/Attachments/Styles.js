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
  gap: 12px;
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

export const FileIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;
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

export const EmptyState = styled.div`
  margin-top: 16px;
  padding: 30px 20px;
  text-align: center;
  background: ${color.backgroundLight};
  border: 1px dashed ${color.borderLight};
  border-radius: 3px;
`;

export const EmptyHint = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
`;
