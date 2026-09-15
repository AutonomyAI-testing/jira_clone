import styled from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const Header = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  ${font.medium}
  ${font.size(24)}
  color: #FF0000;
  margin: 16px 0 0 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  background: white;
  border: ${props => (props.isCurrentUser ? `2px solid ${color.primary}` : `1px solid ${color.borderLightest}`)};
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.15s;
  ${mixin.clickable}

  &:hover {
    ${mixin.boxShadowMedium}
  }
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 16px;
`;

export const UserName = styled.div`
  ${font.medium}
  ${font.size(18)}
  color: ${color.textDarkest};
  margin-bottom: 8px;
`;

export const UserEmail = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
  margin-bottom: 12px;
`;

export const RoleBadge = styled.div`
  ${mixin.tag()}
  margin-bottom: 16px;
  display: inline-block;
`;

export const IssueCount = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${color.borderLightest};
  width: 100%;
`;

export const ViewIssuesButton = styled.div`
  width: 100%;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${color.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  ${font.size(60)}
`;

export const EmptyTitle = styled.h2`
  ${font.medium}
  ${font.size(20)}
  color: ${color.textDarkest};
  margin-bottom: 8px;
`;

export const EmptyDescription = styled.p`
  ${font.size(14)}
  color: ${color.textMedium};
  margin-bottom: 24px;
`;

export const ProfileEditSection = styled.div`
  background: white;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 40px;
`;

export const EditSectionTitle = styled.h2`
  ${font.medium}
  ${font.size(18)}
  color: ${color.textDarkest};
  margin: 0 0 24px 0;
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.label`
  ${font.medium}
  ${font.size(13)}
  color: ${color.textDarkest};
  margin-bottom: 8px;
`;

export const FieldInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  ${font.size(14)}
  color: ${color.textDarkest};
  transition: border-color 0.15s;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${color.backgroundLightPrimary};
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const AvatarPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

export const AvatarPreviewLabel = styled.span`
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const FormActions = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid ${color.borderLightest};
`;

export const CurrentUserBadge = styled.span`
  ${mixin.tag(color.backgroundLightPrimary, color.primary)}
  margin-bottom: 16px;
`;
