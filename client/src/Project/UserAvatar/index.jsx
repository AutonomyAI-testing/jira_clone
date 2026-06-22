import React, { useState, useRef } from 'react';

import useCurrentUser from 'shared/hooks/currentUser';
import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';
import { Breadcrumbs, Avatar, Button, Modal } from 'shared/components';

// File upload validation constraints
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

import {
  PageContainer,
  FormCont,
  FormElement,
  PageHeading,
  AvatarPreviewSection,
  AvatarRing,
  AvatarInner,
  UserInfo,
  UserName,
  UserEmail,
  SectionTitle,
  InputGroup,
  InputLabel,
  URLInput,
  FileInputButton,
  HiddenFileInput,
  Divider,
  ActionButtonsGroup,
  SaveButton,
  RemoveButton,
  CancelButton,
} from './Styles';

/**
 * Modal content for confirming avatar removal.
 * Manages local loading state while the parent handles the async operation.
 */
const RemoveConfirmContent = ({ onConfirm, onCancel }) => {
  const [isWorking, setIsWorking] = useState(false);

  const handleConfirm = async () => {
    setIsWorking(true);
    try {
      await onConfirm();
    } finally {
      setIsWorking(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginTop: 0, marginBottom: '10px' }}>Remove Avatar?</h2>
      <p style={{ marginBottom: '20px' }}>Your avatar will revert to your initials.</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          variant="danger"
          onClick={handleConfirm}
          isWorking={isWorking}
        >
          Remove
        </Button>
        <Button
          variant="secondary"
          onClick={onCancel}
          disabled={isWorking}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

const UserAvatar = () => {
  const { currentUser } = useCurrentUser({ cachePolicy: 'no-cache' });
  const [{ isUpdating }, updateCurrentUser] = useApi.put('/currentUser');

  const [localAvatarUrl, setLocalAvatarUrl] = useState(currentUser?.avatarUrl || '');
  const [urlInput, setUrlInput] = useState('');
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  const fileInputRef = useRef(null);

  if (!currentUser) {
    return null;
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      toast.error('File is too large (max 5MB)');
      return;
    }

    // Validate file type
    if (!VALID_IMAGE_TYPES.includes(file.type)) {
      toast.error('Only JPG, PNG, GIF, and WebP images are supported');
      return;
    }

    // Convert file to data URL for preview and persistence
    const reader = new FileReader();
    reader.onload = (ev) => {
      setLocalAvatarUrl(ev.target.result);
      setUrlInput('');
    };
    reader.readAsDataURL(file);
  };

  const handleUrlInputChange = (e) => {
    const url = e.target.value;
    setUrlInput(url);
    if (url.trim()) {
      setLocalAvatarUrl(url);
    }
  };

  const handleSave = async () => {
    // Ensure an avatar source is selected before attempting to save
    if (!localAvatarUrl.trim()) {
      toast.error('Please select or enter an avatar');
      return;
    }

    try {
      await updateCurrentUser({ avatarUrl: localAvatarUrl });
      toast.success('Avatar updated successfully.');
    } catch (error) {
      toast.error(error);
    }
  };

  const handleRemoveClick = () => {
    setShowRemoveConfirm(true);
  };

  const handleRemoveConfirm = async () => {
    setLocalAvatarUrl('');
    setUrlInput('');
    setShowRemoveConfirm(false);

    try {
      await updateCurrentUser({ avatarUrl: '' });
      toast.success('Avatar removed.');
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCancel = () => {
    // Revert form state to current user's avatar
    setLocalAvatarUrl(currentUser.avatarUrl || '');
    setUrlInput('');
  };

  return (
    <PageContainer>
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Projects', 'Settings', 'Avatar']} />
          <PageHeading>Profile Avatar</PageHeading>

          <AvatarPreviewSection>
            <AvatarRing>
              <AvatarInner>
                <Avatar
                  avatarUrl={localAvatarUrl || undefined}
                  name={currentUser.name}
                  size={228}
                />
              </AvatarInner>
            </AvatarRing>
            <UserInfo>
              <UserName>{currentUser.name}</UserName>
              <UserEmail>{currentUser.email}</UserEmail>
            </UserInfo>
          </AvatarPreviewSection>

          <SectionTitle>Upload New Avatar</SectionTitle>
          <InputGroup>
            <InputLabel>Image URL</InputLabel>
            <URLInput
              type="text"
              placeholder="https://example.com/avatar.jpg"
              value={urlInput}
              onChange={handleUrlInputChange}
              disabled={isUpdating}
            />
          </InputGroup>

          <InputGroup>
            <FileInputButton
              variant="primary"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUpdating}
            >
              Upload Image File
            </FileInputButton>
            <HiddenFileInput
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </InputGroup>

          <Divider />

          <SectionTitle>Remove Avatar</SectionTitle>
          <InputGroup>
            <RemoveButton
              variant="danger"
              onClick={handleRemoveClick}
              disabled={isUpdating}
            >
              Remove Avatar
            </RemoveButton>
          </InputGroup>

          <ActionButtonsGroup>
            <SaveButton
              variant="primary"
              onClick={handleSave}
              isWorking={isUpdating}
              disabled={isUpdating}
            >
              Save Changes
            </SaveButton>
            <CancelButton
              variant="secondary"
              onClick={handleCancel}
              disabled={isUpdating}
            >
              Cancel
            </CancelButton>
          </ActionButtonsGroup>
        </FormElement>
      </FormCont>

      {showRemoveConfirm && (
        <Modal
          isOpen
          testid="modal:remove-avatar"
          onClose={() => setShowRemoveConfirm(false)}
          renderContent={(modal) => (
            <RemoveConfirmContent
              onConfirm={handleRemoveConfirm}
              onCancel={modal.close}
            />
          )}
        />
      )}
    </PageContainer>
  );
};

export default UserAvatar;
