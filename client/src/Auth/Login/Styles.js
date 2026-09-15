import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';
import Logo from 'shared/components/Logo';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 4px;
  ${mixin.boxShadowMedium}
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

export const StyledLogo = styled(Logo)`
  margin-bottom: 12px;
`;

export const AppTitle = styled.h2`
  ${font.medium}
  ${font.size(18)}
  color: ${color.textDarkest};
  letter-spacing: -0.3px;
`;

export const FormHeading = styled.h1`
  ${font.medium}
  ${font.size(20)}
  color: ${color.textDarkest};
  margin-bottom: 24px;
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
`;

export const ActionButton = styled(Button)`
  width: 100%;
  margin-top: 8px;
  justify-content: center;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0 20px;
  color: ${color.textLight};
  ${font.size(12)}

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${color.borderLightest};
  }

  &::before {
    margin-right: 12px;
  }

  &::after {
    margin-left: 12px;
  }
`;

export const GuestButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;
