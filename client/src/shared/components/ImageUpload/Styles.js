import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const StyledImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const UploadArea = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.backgroundMedium};
  border: 2px solid ${color.borderLightest};
  ${props => props.hasPreview && `border-color: ${color.primary};`}
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlaceholderCircle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.backgroundMedium};
  color: ${color.textMedium};
  font-size: 48px;
  ${font.medium}
`;

export const UploadLabel = styled.div`
  ${font.size(14)}
  color: ${color.textDark};
  text-align: center;
`;

export const UploadButton = styled.button`
  padding: 6px 16px;
  background: ${color.primary};
  color: #fff;
  border: none;
  border-radius: 3px;
  ${font.size(14)}
  ${font.medium}
  cursor: pointer;
  transition: background 0.1s;

  &:hover {
    background: #0747a6;
  }

  &:active {
    background: #09326c;
  }
`;

export const RemoveButton = styled.button`
  padding: 4px 12px;
  background: transparent;
  color: ${color.danger};
  border: 1px solid ${color.danger};
  border-radius: 3px;
  ${font.size(13)}
  ${font.regular}
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: ${color.danger};
    color: #fff;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
