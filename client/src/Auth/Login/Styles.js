import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import Logo from 'shared/components/Logo';
import Button from 'shared/components/Button';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
  padding: 40px 20px;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

export const StyledLogo = styled(Logo)`
  display: flex;
  margin-bottom: 12px;
`;

export const AppName = styled.span`
  ${font.bold}
  ${font.size(18)}
  color: ${color.textDarkest};
  letter-spacing: 0.02em;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  ${mixin.boxShadowMedium}
`;

export const Title = styled.h1`
  ${font.bold}
  ${font.size(20)}
  color: ${color.textDarkest};
  margin: 0 0 28px 0;
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 8px;
  height: 40px;
  justify-content: center;
`;

export const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-top: 1px solid ${color.borderLightest};
  }
`;

export const DividerText = styled.span`
  ${font.regular}
  ${font.size(12)}
  color: ${color.textLight};
  padding: 0 12px;
`;

export const GuestLink = styled.span`
  ${mixin.link()}
  ${font.size(14)}
  cursor: pointer;
`;
