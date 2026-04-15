import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Form } from 'shared/components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${color.backgroundLightest};
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(9, 30, 66, 0.13), 0 0 1px rgba(9, 30, 66, 0.13);
`;

export const FormElement = styled(Form.Element)`
  padding: 0;
`;

export const Heading = styled.div`
  margin-bottom: 30px;
  text-align: center;
  ${font.size(24)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const FieldWrapper = styled.div`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const SubmitButton = styled.button`
  flex: 1;
  height: 32px;
  padding: 0 12px;
  border: none;
  border-radius: 3px;
  background-color: ${color.primary};
  color: #fff;
  ${font.size(14)}
  ${font.medium}
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: #003d99;
  }

  &:active {
    background-color: #002b73;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
