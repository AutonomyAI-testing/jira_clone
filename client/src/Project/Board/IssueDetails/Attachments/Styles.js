import styled from 'styled-components';

import { font, color, mixin } from 'shared/utils/styles';

export const Attachments = styled.div`
  padding-top: 40px;
`;

export const Title = styled.div`
  ${font.medium}
  ${font.size(15)}
`;

export const AttachmentButton = styled.div`
  margin-top: 12px;
`;

export const AttachmentList = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AttachmentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: ${color.backgroundLight};
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  transition: background 0.1s;
  &:hover {
    background: ${color.backgroundLightPrimary};
  }
`;

export const FileName = styled.span`
  ${font.size(14)}
  color: ${color.textDark};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RemoveButton = styled.button`
  ${mixin.clickable}
  padding: 4px 8px;
  margin-left: 8px;
  background: none;
  border: none;
  color: ${color.textMedium};
  ${font.size(20)}
  line-height: 1;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.1s;
  &:hover {
    background: ${color.backgroundMedium};
    color: ${color.textDark};
  }
`;
