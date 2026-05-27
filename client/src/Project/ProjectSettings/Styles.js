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

// FormHeading is styled with red color as a visual indicator in Storybook stories.
// This makes the form heading clearly visible in the preview. In production, ensure the
// heading color is set by parent context or update this to match your design system.
export const FormHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
  color: red;
`;

export const ActionButton = styled(Button)`
  margin-top: 30px;
`;
