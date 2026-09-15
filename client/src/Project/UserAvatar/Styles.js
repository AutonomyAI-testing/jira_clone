import styled, { css } from 'styled-components';

import { color, font, mixin, sizes } from 'shared/utils/styles';
import { Button, Avatar } from 'shared/components';

// Layout
const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

// Avatar gradient ring: blue to cyan/teal to green
const AVATAR_RING_GRADIENT = 'linear-gradient(135deg, #74ebd5 0%, #9face6 50%, #74b9ff 100%)';

export const PageContainer = styled.div`
  padding: 25px 32px 50px ${paddingLeft}px;

  @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  }
  @media (max-width: 999px) {
    padding-left: ${paddingLeft - 20 - sizes.secondarySideBarWidth}px;
  }
`;

export const FormCont = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormElement = styled.div`
  width: 100%;
  max-width: 640px;
`;

export const PageHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
  color: ${color.danger};
`;

export const AvatarPreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const AvatarRing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: ${AVATAR_RING_GRADIENT};
  padding: 4px;
  margin-bottom: 20px;
`;

export const AvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.div`
  text-align: center;
`;

export const UserName = styled.div`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const UserEmail = styled.div`
  ${font.size(14)}
  ${font.regular}
  color: ${color.textMedium};
`;

export const SectionTitle = styled.h2`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  display: block;
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 8px;
`;

export const URLInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  ${font.size(14)}
  ${font.regular}
  color: ${color.textDarkest};

  &:focus {
    outline: none;
    border: 1px solid ${color.borderInputFocus};
    box-shadow: 0 0 0 1px ${color.borderInputFocus};
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const FileInputButton = styled(Button)`
  margin-right: 12px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${color.borderLightest};
  margin: 30px 0;
`;

// Action buttons layout: responsive spacing
export const ActionButtonsGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const SaveButton = styled(Button)`
  flex: 1;
  min-width: 150px;
`;

export const RemoveButton = styled(Button)`
  flex: 0 0 auto;
`;

export const CancelButton = styled(Button)`
  flex: 0 0 auto;
`;
