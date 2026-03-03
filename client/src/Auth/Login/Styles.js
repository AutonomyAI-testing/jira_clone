import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import Button from 'shared/components/Button';
import Logo from 'shared/components/Logo';

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
`;

export const FormCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 8px;
  background: #fff;
  ${mixin.boxShadowMedium}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const StyledLogo = styled(Logo)`
  margin-right: 10px;
`;

export const AppName = styled.span`
  color: ${color.textDarkest};
  ${font.bold}
  ${font.size(22)}
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 8px;
  color: ${color.textDarkest};
  ${font.medium}
  ${font.size(20)}
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 28px;
  color: ${color.textMedium};
  ${font.regular}
  ${font.size(14)}
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 40px;
  margin-top: 28px;
  ${font.size(15)}
`;

export const Divider = styled.div`
  margin: 24px 0;
  border-top: 1px solid ${color.borderLightest};
  position: relative;
  text-align: center;

  &::after {
    content: 'or';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 12px;
    background: #fff;
    color: ${color.textLight};
    ${font.size(13)}
  }
`;

export const GuestButton = styled(Button)`
  width: 100%;
  height: 40px;
  ${font.size(15)}
`;

export const FooterText = styled.p`
  margin-top: 24px;
  text-align: center;
  color: ${color.textMedium};
  ${font.regular}
  ${font.size(13)}
`;

export const FooterLink = styled.span`
  ${mixin.link()}
  margin-left: 4px;
`;
