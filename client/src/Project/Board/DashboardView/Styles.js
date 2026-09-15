import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const DashboardContainer = styled.div`
  padding: 24px 32px;
  max-width: 1200px;
  ${mixin.scrollableY}
`;

// ── Summary stat cards ──────────────────────────────────────────────────────

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px 24px;
  border-left: 4px solid ${props => props.color || color.primary};
  box-shadow: 0 1px 4px rgba(9, 30, 66, 0.1);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StatValue = styled.span`
  ${font.size(28)}
  ${font.bold}
  color: ${color.textDarkest};
  line-height: 1.1;
`;

export const StatLabel = styled.span`
  ${font.size(13)}
  color: ${color.textMedium};
  ${font.medium}
`;

// ── Section header ───────────────────────────────────────────────────────────

export const SectionTitle = styled.h3`
  ${font.size(16)}
  ${font.bold}
  color: ${color.textDarkest};
  margin: 0 0 14px;
`;

// ── Charts ───────────────────────────────────────────────────────────────────

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px 24px;
  box-shadow: 0 1px 4px rgba(9, 30, 66, 0.1);
`;

export const ChartCardTitle = styled.h4`
  ${font.size(13)}
  ${font.bold}
  color: ${color.textMedium};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 16px;
`;

export const BarChart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BarLabel = styled.div`
  ${font.size(13)}
  color: ${color.textDark};
  display: flex;
  align-items: center;
  min-width: 110px;
  flex-shrink: 0;
`;

export const BarTrack = styled.div`
  flex: 1;
  height: 10px;
  background: ${color.backgroundLight};
  border-radius: 5px;
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  width: ${props => props.width || 0}%;
  background: ${props => props.background || color.primary};
  border-radius: 5px;
  transition: width 0.3s ease;
  min-width: ${props => (props.width > 0 ? '4px' : '0')};
`;

export const BarCount = styled.span`
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDark};
  min-width: 24px;
  text-align: right;
`;

// ── Status badge ─────────────────────────────────────────────────────────────

export const StatusBadge = styled.span`
  display: inline-block;
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 3px;
  ${font.size(11)}
  ${font.medium}
  background: ${props => props.background || color.backgroundLight};
  color: ${props => props.textColor || color.textDark};
  vertical-align: middle;
`;

// ── Team members ─────────────────────────────────────────────────────────────

export const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
`;

export const MemberCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px 16px;
  box-shadow: 0 1px 4px rgba(9, 30, 66, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const MemberAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${color.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${font.size(20)}
  ${font.bold}
  overflow: hidden;
  background-image: ${props => (props.src ? `url(${props.src})` : 'none')};
  background-size: cover;
  background-position: center;
`;

export const MemberName = styled.span`
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDarkest};
  text-align: center;
`;

export const MemberStats = styled.span`
  ${font.size(12)}
  color: ${color.textMedium};
  text-align: center;
`;

// ── Activity feed ─────────────────────────────────────────────────────────────

export const ActivityList = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(9, 30, 66, 0.1);
  overflow: hidden;
  margin-bottom: 32px;
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-bottom: 1px solid ${color.borderLightest};

  &:last-child {
    border-bottom: none;
  }
`;

export const ActivityDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${props => {
    const map = {
      done: '#0B875B',
      inprogress: '#0052cc',
      selected: '#dfe1e6',
      backlog: '#dfe1e6',
    };
    return map[props.status] || '#dfe1e6';
  }};
`;

export const ActivityText = styled.div`
  flex: 1;
  ${font.size(13)}
  color: ${color.textDark};

  strong {
    color: ${color.textDarkest};
    ${font.medium}
  }
`;

export const ActivityTime = styled.span`
  ${font.size(12)}
  color: ${color.textLight};
  flex-shrink: 0;
`;

// ── Empty states ──────────────────────────────────────────────────────────────

export const EmptyState = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
  padding: 24px 0;
  text-align: center;
  margin-bottom: 32px;
`;
