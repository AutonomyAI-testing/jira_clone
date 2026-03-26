import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${color.backgroundLightest};
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid ${color.borderLightest};
  background-color: ${color.backgroundLight};
  gap: 20px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  margin: -4px -8px;
  color: ${color.textDark};
  transition: color 0.1s;
  ${font.size(14)}

  &:hover {
    color: ${color.textDarkest};
  }

  span {
    font-weight: 500;
  }
`;

export const PageTitle = styled.h1`
  flex: 1;
  margin: 0;
  padding: 0;
  ${font.size(24)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const FormElement = styled(Form.Element)`
  padding: 25px 40px 35px;
  flex: 1;
  overflow-y: auto;
`;

export const FormContent = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const LeftColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

export const RightColumn = styled.div`
  width: 320px;
  flex-shrink: 0;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  ${props => props.withBottomMargin && `margin-bottom: 5px;`}
`;

export const SelectItemLabel = styled.div`
  padding: 0 3px 0 6px;
`;

export const Divider = styled.div`
  margin-top: 22px;
  border-top: 1px solid ${color.borderLightest};
`;

export const SectionTitle = styled.div`
  margin-bottom: 12px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)}
  ${font.bold}
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
`;

export const ActionButton = styled(Button)`
  margin-left: 10px;
`;
