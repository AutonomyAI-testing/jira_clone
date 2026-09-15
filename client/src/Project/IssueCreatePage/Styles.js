import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const PageContainer = styled.div`
  padding: 20px 40px 40px;
  max-width: 900px;
  margin: 0 auto;
`;

export const FormElement = styled(Form.Element)`
  padding: 25px 40px 35px;
  background: ${color.backgroundLightest};
  border-radius: 3px;
  margin-top: 20px;
`;

export const FormContent = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 999px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

export const RightColumn = styled.div`
  width: 320px;
  flex-shrink: 0;

  @media (max-width: 999px) {
    width: 100%;
    flex-shrink: auto;
  }
`;

// Form heading with intentional red color for visual emphasis on create action
export const FormHeading = styled.div`
  padding-bottom: 15px;
  ${font.size(21)}
  ${font.bold}
  color: red;
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

  @media (max-width: 680px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const ActionButton = styled(Button)`
  margin-left: 10px;

  @media (max-width: 680px) {
    margin-left: 0;
    width: 100%;
  }
`;
