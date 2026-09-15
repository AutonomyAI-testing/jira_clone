import React from 'react';

import { Icon } from 'shared/components';

import {
  Container,
  Placeholder,
  PlaceholderIcon,
  PlaceholderTitle,
  PlaceholderDescription,
} from './Styles';

const ProjectSettingsSecurity = () => (
  <Container>
    <Placeholder>
      <PlaceholderIcon>
        <Icon type="settings" size={48} />
      </PlaceholderIcon>
      <PlaceholderTitle>Access & Permissions</PlaceholderTitle>
      <PlaceholderDescription>
        Configure project access levels and member permissions. This feature is coming in a future
        release.
      </PlaceholderDescription>
    </Placeholder>
  </Container>
);

export default ProjectSettingsSecurity;
