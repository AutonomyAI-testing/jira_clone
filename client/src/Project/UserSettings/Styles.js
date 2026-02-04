import styled from 'styled-components';

import { font } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const FormCont = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: 640px;
`;

export const FormHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
`;

export const ActionButton = styled(Button)`
  margin-top: 30px;
`;

export const AvatarSection = styled.div`
  margin-bottom: 30px;
`;

export const AvatarLabel = styled.div`
  padding: 0 0 5px;
  color: #5e6c84;
  ${font.size(13)}
  ${font.medium}
`;

export const AvatarWrapper = styled.div`
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #e53935;
`;
