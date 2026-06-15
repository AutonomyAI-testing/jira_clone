import styled, { css } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const PageHeading = styled.h1`
  ${font.size(24)}
  ${font.medium}
  color: red;
  margin-bottom: 30px;
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  ${font.size(14)}
  ${font.bold}
  color: red;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const AvatarPreview = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 4px;
  overflow: hidden;
  background: ${color.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputLabel = styled.label`
  display: block;
`;

export const InputLabelText = styled.div`
  margin-bottom: 8px;
  ${font.medium}
  ${font.size(14)}
  color: ${color.textDarkest};
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  ${font.size(14)}
  ${font.regular}
  font-family: inherit;
  transition: border-color 0.15s;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
  }
`;

export const DragDropZone = styled.div`
  position: relative;
  border: 2px dashed ${color.borderLight};
  border-radius: 4px;
  padding: 24px;
  text-align: center;
  background: ${color.backgroundLightest};
  transition: all 0.15s;
  ${mixin.clickable}

  ${props =>
    props.isDragActive &&
    css`
      border-color: ${color.primary};
      background: ${color.backgroundLightPrimary};
    `}
`;

export const DragDropText = styled.div`
  ${font.size(14)}
  ${font.regular}
  color: ${color.textMedium};
  margin-bottom: 12px;
`;

export const DragDropSubtext = styled.div`
  ${font.size(12)}
  ${font.regular}
  color: ${color.textLight};
`;

export const InputFile = styled.input`
  display: none;
`;

export const BrowseButton = styled(Button)`
  margin-top: 0;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const SaveButton = styled(Button)`
  flex: 1;
`;

export const RemoveButton = styled(Button)`
  flex: 1;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  z-index: 10;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SelectedFileInfo = styled.div`
  ${font.size(13)}
  ${font.regular}
  color: ${color.textMedium};
  padding: 12px;
  background: ${color.backgroundLightest};
  border-radius: 4px;
`;
