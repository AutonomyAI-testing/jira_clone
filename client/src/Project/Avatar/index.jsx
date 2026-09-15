import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import useCurrentUser from 'shared/hooks/currentUser';
import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';
import { Breadcrumbs, ConfirmModal } from 'shared/components';

import {
  PageContainer,
  FormCont,
  FormElement,
  PageHeading,
  Section,
  SectionTitle,
  AvatarDisplayContainer,
  StyledAvatarLarge,
  UserInfo,
  UserName,
  UserEmail,
  EmptyStateContainer,
  EmptyStateImage,
  EmptyStateText,
  EmptyStateSubtext,
  FileInputContainer,
  HiddenFileInput,
  FileInputButton,
  FilePreview,
  FilePreviewImage,
  FileInfo,
  FileConstraints,
  ActionContainer,
  SaveButton,
  RemoveButton,
  ErrorMessage,
} from './Styles';

// Empty state avatar mascot — shown when no avatar is set
const WizardRobotImage = () => (
  <img src="/wizard-robot.jpg" alt="wizard robot mascot" style={{ maxWidth: '200px', height: 'auto' }} />
);

const propTypes = {
  project: PropTypes.object.isRequired,
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

const AvatarPage = ({ project }) => {
  const { currentUser } = useCurrentUser();
  const [{ isUpdating }, updateUserAvatar] = useApi.put('/currentUser');
  const [, removeUserAvatar] = useApi.put('/currentUser');

  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [fileError, setFileError] = useState(null);
  const $fileInputRef = useRef(null);

  const handleFileSelect = event => {
    const file = event.target.files?.[0];

    if (!file) {
      setFileError(null);
      setSelectedFile(null);
      setFilePreview(null);
      return;
    }

    // Validate file type — only JPG and PNG allowed
    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError('Only JPG and PNG images are allowed.');
      setSelectedFile(null);
      setFilePreview(null);
      return;
    }

    // Validate file size — enforces 5MB limit
    if (file.size > MAX_FILE_SIZE) {
      setFileError('File size must be 5MB or smaller.');
      setSelectedFile(null);
      setFilePreview(null);
      return;
    }

    setFileError(null);
    setSelectedFile(file);

    // Generate preview using FileReader to display image before upload
    const reader = new FileReader();
    reader.onload = e => {
      setFilePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setFileError('Please select a file first.');
      return;
    }

    try {
      await updateUserAvatar({
        avatarUrl: filePreview,
      });
      toast.success('Avatar uploaded successfully.');
      // Clear local state after successful upload
      setSelectedFile(null);
      setFilePreview(null);
      setFileError(null);
      // Reset file input to allow re-selecting the same file in the future
      if ($fileInputRef.current) {
        $fileInputRef.current.value = '';
      }
    } catch (error) {
      setFileError('Failed to upload avatar. Please try again.');
    }
  };

  const handleRemove = async modal => {
    try {
      // Clear avatar by setting avatarUrl to null
      await removeUserAvatar({
        avatarUrl: null,
      });
      toast.success('Avatar removed successfully.');
      modal.close();
      // Reset any pending file selection
      setSelectedFile(null);
      setFilePreview(null);
      setFileError(null);
      if ($fileInputRef.current) {
        $fileInputRef.current.value = '';
      }
    } catch (error) {
      modal.close();
      setFileError('Failed to remove avatar. Please try again.');
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <PageContainer>
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Projects', project.name, 'Avatar']} />
          <PageHeading>Profile Avatar</PageHeading>

          {/* Current Avatar Display Section — shows avatar if set, else empty state with mascot */}
          <Section>
            <SectionTitle>Current Avatar</SectionTitle>
            {currentUser.avatarUrl ? (
              <AvatarDisplayContainer>
                <StyledAvatarLarge
                  avatarUrl={currentUser.avatarUrl}
                  name={currentUser.name}
                  size={200}
                />
                <UserInfo>
                  <UserName>{currentUser.name}</UserName>
                  <UserEmail>{currentUser.email}</UserEmail>
                </UserInfo>
              </AvatarDisplayContainer>
            ) : (
              <EmptyStateContainer>
                <EmptyStateImage>
                  <WizardRobotImage />
                </EmptyStateImage>
                <EmptyStateText>No avatar yet</EmptyStateText>
                <EmptyStateSubtext>Upload an avatar to customize your profile</EmptyStateSubtext>
              </EmptyStateContainer>
            )}
          </Section>

          {/* Upload Section — allows file selection with validation and preview */}
          <Section>
            <SectionTitle>Upload New Avatar</SectionTitle>
            <FileInputContainer>
              <HiddenFileInput
                ref={$fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                onChange={handleFileSelect}
              />
              <FileInputButton
                onClick={() => $fileInputRef.current?.click()}
                variant="secondary"
              >
                Choose File
              </FileInputButton>
            </FileInputContainer>

            {fileError && <ErrorMessage>{fileError}</ErrorMessage>}

            {selectedFile && !fileError && (
              <FilePreview>
                <FilePreviewImage src={filePreview} alt="Preview" />
                <FileInfo>
                  <div>
                    <strong>File:</strong> {selectedFile.name}
                  </div>
                  <div>
                    <strong>Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB
                  </div>
                  <div>
                    <strong>Type:</strong> {selectedFile.type}
                  </div>
                </FileInfo>
              </FilePreview>
            )}

            <FileConstraints>
              <span role="img" aria-label="constraints icon">📋</span> <strong>Constraints:</strong> JPG or PNG only • Max 5MB • Recommended size: 200x200px
            </FileConstraints>

            {selectedFile && (
              <ActionContainer>
                <SaveButton
                  variant="primary"
                  onClick={handleUpload}
                  isWorking={isUpdating}
                >
                  Save Changes
                </SaveButton>
                <SaveButton
                  variant="secondary"
                  onClick={() => {
                    // Clear file selection and reset to initial state
                    setSelectedFile(null);
                    setFilePreview(null);
                    setFileError(null);
                    if ($fileInputRef.current) {
                      $fileInputRef.current.value = '';
                    }
                  }}
                  disabled={isUpdating}
                >
                  Cancel
                </SaveButton>
              </ActionContainer>
            )}
          </Section>

          {/* Remove Section — only shown when an avatar exists */}
          {currentUser.avatarUrl && (
            <Section>
              <SectionTitle>Remove Avatar</SectionTitle>
              <ConfirmModal
                variant="danger"
                title="Remove Avatar"
                message="Are you sure you want to remove your avatar? You'll see your name initial instead."
                confirmText="Remove Avatar"
                cancelText="Keep Avatar"
                onConfirm={handleRemove}
                renderLink={linkProps => (
                  <RemoveButton {...linkProps} variant="danger">
                    Remove Avatar
                  </RemoveButton>
                )}
              />
            </Section>
          )}
        </FormElement>
      </FormCont>
    </PageContainer>
  );
};

AvatarPage.propTypes = propTypes;

export default AvatarPage;
