import styled from 'styled-components';

import { font, color, sizes } from 'shared/utils/styles';
import { Button, Avatar, Form } from 'shared/components';

export const PageContainer = styled.div`
  margin-left: ${sizes.appNavBarLeftWidth}px;
  padding: 40px 20px;
  min-height: 100vh;
  background: ${color.backgroundLightest};
`;

export const FormCont = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: 640px;
`;

export const PageHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
  // Note: Red color is intentional design choice for primary page heading
  color: red;
`;

export const Section = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  padding: 6px 0 20px;
  ${font.size(18)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const AvatarDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: white;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
`;

export const StyledAvatarLarge = styled(Avatar)`
  margin-bottom: 20px;
`;

export const UserInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const UserName = styled.div`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const UserEmail = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: white;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  text-align: center;
`;

export const EmptyStateImage = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  background: ${color.backgroundLight};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const EmptyStateText = styled.div`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 8px;
`;

export const EmptyStateSubtext = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
  margin-bottom: 20px;
`;

export const FileInputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileInputButton = styled(Button)`
  width: 100%;
`;

export const FilePreview = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: ${color.backgroundLight};
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
`;

export const FilePreviewImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
`;

export const FileInfo = styled.div`
  margin-top: 15px;
  ${font.size(13)}
  color: ${color.textMedium};

  div {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FileConstraints = styled.div`
  margin-top: 10px;
  padding: 12px;
  background: ${color.backgroundLightPrimary};
  border-left: 4px solid ${color.primary};
  border-radius: 4px;
  ${font.size(13)}
  color: ${color.textDark};
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const SaveButton = styled(Button)`
  flex: 1;
  min-width: 150px;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const RemoveButton = styled(Button)`
  flex: 1;
  min-width: 150px;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  ${font.size(13)}
  color: ${color.danger};
  margin-top: 8px;
  padding: 8px 12px;
  background: ${color.backgroundLight};
  border-radius: 4px;
  border-left: 4px solid ${color.danger};
`;
