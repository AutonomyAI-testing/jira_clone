import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import Button from 'shared/components/Button';
import Logo from 'shared/components/Logo';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  ${mixin.boxShadowMedium}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
`;

export const StyledLogo = styled(Logo)`
  display: flex;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 4px;
  color: ${color.textDarkest};
  ${font.bold}
  ${font.size(24)}
`;

export const Subheading = styled.p`
  text-align: center;
  margin-bottom: 32px;
  color: ${color.textMedium};
  ${font.regular}
  ${font.size(14)}
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
  height: 44px;
  ${font.size(15)}
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
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
  height: 44px;
  ${font.size(15)}
`;

export const ErrorMessage = styled.div`
  padding: 10px 14px;
  margin-top: 16px;
  border-radius: 4px;
  background: ${mixin.rgba(color.danger, 0.08)};
  border: 1px solid ${mixin.rgba(color.danger, 0.2)};
  color: ${color.danger};
  ${font.medium}
  ${font.size(13)}
`;
