import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Title = styled.div`
  padding: 20px 0 6px;
  ${font.size(15)}
  ${font.medium}
`;

export const UploadArea = styled.div`
  border: 2px dashed ${props => props.isDragging ? color.primary : color.borderLightest};
  border-radius: 4px;
  padding: 24px;
  text-align: center;
  background: ${props => props.isDragging ? color.backgroundLight : 'transparent'};
  transition: all 0.2s;
  margin-bottom: 16px;
  &:hover {
    border-color: ${color.borderLight};
    background: ${color.backgroundLightest};
  }
`;

export const UploadText = styled.div`
  color: ${color.textMedium};
  ${font.size(14)}
  margin-bottom: 12px;
`;

export const UploadButton = styled.div`
  display: inline-block;
`;

export const AttachmentList = styled.div`
  margin-top: 16px;
`;

export const AttachmentItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  margin-bottom: 8px;
  background: ${color.backgroundLightest};
  transition: all 0.1s;
  &:hover {
    border-color: ${color.borderLight};
    background: #fff;
  }
`;

export const AttachmentPreview = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid ${color.borderLight};
  margin-right: 12px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.textMedium};
  ${font.size(11)}
  ${font.bold}
  text-transform: uppercase;
`;

export const AttachmentInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const AttachmentName = styled.div`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
`;

export const AttachmentSize = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const RemoveButton = styled.div`
  margin-left: 8px;
  opacity: 0.6;
  transition: opacity 0.1s;
  ${mixin.clickable}
  &:hover {
    opacity: 1;
  }
`;
