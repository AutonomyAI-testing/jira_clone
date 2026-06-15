import React, { useState, useRef } from 'react';

import useCurrentUser from 'shared/hooks/currentUser';
import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';
import { Avatar as AvatarComponent, Spinner } from 'shared/components';

import {
  Container,
  Content,
  PageHeading,
  Section,
  SectionTitle,
  PreviewContainer,
  AvatarPreview,
  FormContent,
  InputLabel,
  InputLabelText,
  TextInput,
  DragDropZone,
  DragDropText,
  DragDropSubtext,
  InputFile,
  BrowseButton,
  ActionButtons,
  SaveButton,
  RemoveButton,
  LoadingOverlay,
  PreviewImage,
  SelectedFileInfo,
} from './Styles';

const AvatarPage = () => {
  const { currentUser } = useCurrentUser();
  const [{ isUpdating }, updateUser] = useApi.put('/currentUser');

  const [avatarUrl, setAvatarUrl] = useState((currentUser && currentUser.avatarUrl) || '');
  const [previewUrl, setPreviewUrl] = useState((currentUser && currentUser.avatarUrl) || '');
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef(null);

  if (!currentUser) {
    return null;
  }

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const isValidUrl = url => {
    try {
      // eslint-disable-next-line no-new
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const droppedText = e.dataTransfer.getData('text/plain');
    if (droppedText && isValidUrl(droppedText)) {
      setAvatarUrl(droppedText);
      setPreviewUrl(droppedText);
    } else {
      toast.error('Please drop a valid image URL');
    }
  };

  const handleFileSelect = e => {
    const files = e && e.target && e.target.files;
    const file = files && files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const dataUrl = event && event.target && event.target.result;
        setAvatarUrl(dataUrl);
        setPreviewUrl(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSave = async () => {
    if (!avatarUrl) {
      toast.error('Please select an avatar first');
      return;
    }

    try {
      await updateUser({ avatarUrl });
      toast.success('Avatar updated successfully');
      setPreviewUrl(avatarUrl);
    } catch (error) {
      toast.error(error.message || 'Failed to update avatar');
    }
  };

  const handleRemove = async () => {
    try {
      await updateUser({ avatarUrl: null });
      setAvatarUrl('');
      setPreviewUrl('');
      toast.success('Avatar removed successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to remove avatar');
    }
  };

  return (
    <Container>
      <Content>
        <PageHeading>Avatar Settings</PageHeading>

        <Section>
          <SectionTitle>Current Avatar</SectionTitle>
          <PreviewContainer>
            <AvatarPreview>
              {previewUrl ? (
                <PreviewImage src={previewUrl} alt={currentUser.name} />
              ) : (
                <AvatarComponent name={currentUser.name} size={120} />
              )}
            </AvatarPreview>
          </PreviewContainer>
        </Section>

        <Section>
          <SectionTitle>Upload Avatar</SectionTitle>
          <FormContent>
            <InputLabel>
              <InputLabelText>Image URL</InputLabelText>
              <TextInput
                type="text"
                placeholder="https://example.com/avatar.jpg"
                value={avatarUrl}
                onChange={e => {
                  setAvatarUrl(e.target.value);
                  if (e.target.value && isValidUrl(e.target.value)) {
                    setPreviewUrl(e.target.value);
                  }
                }}
              />
            </InputLabel>

            <DragDropZone
              isDragActive={isDragActive}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={handleDrop}
            >
              {isUpdating && (
                <LoadingOverlay>
                  <Spinner />
                </LoadingOverlay>
              )}
              <DragDropText>Drag and drop an image URL here</DragDropText>
              <DragDropSubtext>or</DragDropSubtext>
              <BrowseButton variant="secondary" onClick={handleBrowseClick}>
                Browse Files
              </BrowseButton>
              <InputFile
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
              />
            </DragDropZone>

            {avatarUrl && avatarUrl !== currentUser.avatarUrl && (
              <SelectedFileInfo>
                Selected avatar will be updated when you click Save
              </SelectedFileInfo>
            )}

            <ActionButtons>
              <SaveButton
                variant="primary"
                onClick={handleSave}
                disabled={!avatarUrl || avatarUrl === currentUser.avatarUrl || isUpdating}
              >
                {isUpdating ? 'Saving...' : 'Save Avatar'}
              </SaveButton>
              {currentUser.avatarUrl && (
                <RemoveButton
                  variant="danger"
                  onClick={handleRemove}
                  disabled={!currentUser.avatarUrl || isUpdating}
                >
                  {isUpdating ? 'Removing...' : 'Remove Avatar'}
                </RemoveButton>
              )}
            </ActionButtons>
          </FormContent>
        </Section>
      </Content>
    </Container>
  );
};

export default AvatarPage;
