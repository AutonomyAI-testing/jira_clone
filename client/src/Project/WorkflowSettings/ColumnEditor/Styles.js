import styled from 'styled-components';

import { Button } from 'shared/components';

export const ColumnsContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px 0;
  overflow-x: auto;
  margin-bottom: 20px;
`;

export const AddButton = styled(Button)`
  margin-top: 10px;
`;
