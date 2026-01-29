import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const Comments = styled.div`
  padding-top: 40px;
`;

export const Title = styled.div`
  ${font.medium}
  ${font.size(15)}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Filters = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const FilterLabel = styled.span`
  ${font.size(13)}
  color: #5e6c84;
  margin-right: 4px;
`;

export const FilterSelect = styled.div`
  min-width: 140px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
`;

export const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.6;
`;

export const EmptyMessage = styled.div`
  ${font.size(16)}
  ${font.medium}
  color: #42526e;
  margin-bottom: 8px;
`;

export const EmptyHint = styled.div`
  ${font.size(14)}
  color: #5e6c84;
`;
