import styled from 'styled-components';

import { Button } from 'shared/components';
import { font } from 'shared/utils/styles';

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const FormButton = styled(Button)`
  margin-right: 6px;
`;

export const CharacterCount = styled.div`
  ${font.size(12)}
  color: ${props => {
    if (props.isOverLimit) return '#de350b';
    if (props.isNearLimit) return '#ff991f';
    return '#5e6c84';
  }};
  font-weight: ${props => (props.isNearLimit || props.isOverLimit ? '600' : '400')};
  transition: all 0.2s ease;
`;
