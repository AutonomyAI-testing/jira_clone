import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  padding: 25px 32px 50px;
`;

export const PageHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
`;

export const PageDescription = styled.p`
  padding-bottom: 25px;
  color: ${color.textMedium};
  ${font.size(15)}
  line-height: 1.6;
`;

export const StatusList = styled.div`
  margin-bottom: 30px;
`;

export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  margin-bottom: 10px;
  background: ${color.backgroundLightest};
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  transition: all 0.1s;

  &:hover {
    background: ${color.backgroundLight};
    border-color: ${color.borderLight};
  }
`;

export const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StatusBadge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => {
    const colors = [
      color.primary,
      '#6554C0',
      '#00875A',
      '#FF991F',
      '#0052CC',
    ];
    return colors[props.index % colors.length];
  }};
  color: #fff;
  ${font.bold}
`;

export const StatusName = styled.div`
  ${font.size(15)}
  ${font.medium}
  color: ${color.textDark};
  margin-bottom: 4px;
`;

export const StatusDescription = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
  line-height: 1.5;
`;

export const StatusActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: ${color.textMedium};

  i {
    margin-bottom: 16px;
    color: ${color.textLight};
  }

  p {
    ${font.size(15)}
  }
`;

export const AddStatusSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${color.borderLight};
`;

export const AddStatusForm = styled.div`
  background: ${color.backgroundLightest};
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  padding: 20px;
`;

export const FormRow = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  color: ${color.textMedium};
  ${font.size(13)}
  ${font.medium}
`;

export const FormActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
