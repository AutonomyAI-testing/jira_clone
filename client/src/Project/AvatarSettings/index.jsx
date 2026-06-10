import React, { useState, useRef } from 'react';

import useApi from 'shared/hooks/api';
import useCurrentUser from 'shared/hooks/currentUser';
import { Breadcrumbs, Avatar, Button, PageLoader } from 'shared/components';
import toast from 'shared/utils/toast';

import AvatarCard from './AvatarCard';
import { PREDEFINED_AVATARS } from './constants';
import {
  PageCont,
  PageHeading,
  TwoColumnLayout,
  LeftColumn,
  RightColumn,
  LargePreviewCont,
  PreviewLabel,
  PreviewSublabel,
  SectionTitle,
  SectionDivider,
  AvatarsGrid,
  UploadArea,
  UploadHint,
  ActionsRow,
  ActionButtonGroup,
} from './Styles';

const AvatarSettings = () => {
  const { currentUser } = useCurrentUser();
  const [{ isUpdating }, updateCurrentUser] = useApi.put('/currentUser');
  const $fileInputRef = useRef();

  const [selectedAvatarUrl, setSelectedAvatarUrl] = useState((currentUser && currentUser.avatarUrl) || '');
  const [isSaving, setIsSaving] = useState(false);

  if (!currentUser) {
    return <PageLoader />;
  }

  const handleFileSelect = e => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast.error('Please upload a valid image file (JPG, PNG, GIF, or WEBP)');
      return;
    }

    // Read file as data URL
    const reader = new FileReader();
    reader.onload = event => {
      setSelectedAvatarUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await updateCurrentUser({ avatarUrl: selectedAvatarUrl });
      toast.success('Avatar updated successfully');
    } catch (error) {
      const errorMessage = (error && error.message) ? error.message : 'Failed to update avatar';
      toast.error(errorMessage);
      setIsSaving(false);
    }
  };

  const handleRemove = () => {
    setSelectedAvatarUrl('');
  };

  return (
    <PageCont>
      <Breadcrumbs items={['Projects', currentUser.name, 'Avatar Settings']} />
      <PageHeading>Avatar Settings</PageHeading>

      <TwoColumnLayout>
        <LeftColumn>
          <LargePreviewCont>
            <Avatar
              avatarUrl={selectedAvatarUrl || undefined}
              name={currentUser.name}
              size={200}
            />
            <PreviewLabel>{currentUser.name}</PreviewLabel>
            <PreviewSublabel>
              {selectedAvatarUrl ? 'Current selection' : 'No avatar selected'}
            </PreviewSublabel>
          </LargePreviewCont>
        </LeftColumn>

        <RightColumn>
          <SectionTitle>Upload Custom Avatar</SectionTitle>
          <UploadArea>
            <input
              ref={$fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            <Button
              variant="secondary"
              onClick={() => $fileInputRef.current.click()}
              disabled={isUpdating || isSaving}
            >
              Choose File
            </Button>
            <UploadHint>JPG, PNG, GIF, or WEBP (max 5MB)</UploadHint>
          </UploadArea>

          <SectionDivider />

          <SectionTitle>Pick a Character</SectionTitle>
          <AvatarsGrid>
            {PREDEFINED_AVATARS.map(avatar => (
              <AvatarCard
                key={avatar.id}
                avatar={avatar}
                isSelected={selectedAvatarUrl === avatar.url}
                onSelect={() => setSelectedAvatarUrl(avatar.url)}
              />
            ))}
          </AvatarsGrid>

          <SectionDivider />

          <ActionsRow>
            <ActionButtonGroup>
              <Button
                variant="primary"
                onClick={handleSave}
                isWorking={isUpdating || isSaving}
              >
                Save Changes
              </Button>
              <Button
                variant="danger"
                onClick={handleRemove}
                disabled={isUpdating || isSaving || !selectedAvatarUrl}
              >
                Remove Avatar
              </Button>
            </ActionButtonGroup>
          </ActionsRow>
        </RightColumn>
      </TwoColumnLayout>
    </PageCont>
  );
};

export default AvatarSettings;
