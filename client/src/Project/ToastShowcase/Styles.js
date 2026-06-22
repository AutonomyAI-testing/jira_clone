import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const PageHeading = styled.h1`
  padding: 6px 0 4px;
  ${font.size(24)}
  ${font.medium}
  color: ${color.danger};
`;

export const PageDescription = styled.p`
  margin-bottom: 30px;
  ${font.size(15)}
  color: ${color.textMedium};
`;

export const SectionHeading = styled.h2`
  margin-bottom: 16px;
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDark};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 4px;
  border: 1px solid ${color.borderLight};
  background: #fff;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 8px;
`;

export const ColorSwatch = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: ${props => props.bg};
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const CardDescription = styled.p`
  margin-bottom: 14px;
  ${font.size(13)}
  color: ${color.textMedium};
  line-height: 1.5;
`;

export const TriggerButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;

export const Divider = styled.hr`
  margin: 32px 0;
  border: none;
  border-top: 1px solid ${color.borderLightest};
`;

export const CustomForm = styled.div`
  background: #fff;
  border: 1px solid ${color.borderLight};
  border-radius: 4px;
  padding: 24px;
  max-width: 540px;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textDark};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StyledInput = styled.input`
  height: 34px;
  padding: 0 10px;
  border: 1px solid ${color.borderLight};
  border-radius: 3px;
  ${font.size(14)}
  color: ${color.textDarkest};
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${color.borderInputFocus};
  }
`;

export const StyledSelect = styled.select`
  height: 34px;
  padding: 0 10px;
  border: 1px solid ${color.borderLight};
  border-radius: 3px;
  ${font.size(14)}
  color: ${color.textDarkest};
  background: #fff;
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${color.borderInputFocus};
  }
`;

export const FireButton = styled(Button)`
  margin-top: 8px;
`;
