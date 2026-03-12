export const IssueType = {
  TASK: 'task',
  BUG: 'bug',
  STORY: 'story',
};

export const IssueStatus = {
  BACKLOG: 'backlog',
  SELECTED: 'selected',
  INPROGRESS: 'inprogress',
  DONE: 'done',
};

export const IssuePriority = {
  HIGHEST: '5',
  HIGH: '4',
  MEDIUM: '3',
  LOW: '2',
  LOWEST: '1',
};

export const IssueTypeCopy = {
  [IssueType.TASK]: 'Task',
  [IssueType.BUG]: 'Bug',
  [IssueType.STORY]: 'Story',
};

export const IssueStatusCopy = {
  [IssueStatus.BACKLOG]: 'Backlog',
  [IssueStatus.SELECTED]: 'Selected for development',
  [IssueStatus.INPROGRESS]: 'In progress',
  [IssueStatus.DONE]: 'Done',
};

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: 'Highest',
  [IssuePriority.HIGH]: 'High',
  [IssuePriority.MEDIUM]: 'Medium',
  [IssuePriority.LOW]: 'Low',
  [IssuePriority.LOWEST]: 'Lowest',
};

export const IssueLabel = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  UI: 'ui',
  PERFORMANCE: 'performance',
  BUG_FIX: 'bug-fix',
  DOCUMENTATION: 'documentation',
  REFACTOR: 'refactor',
  TESTING: 'testing',
  DESIGN: 'design',
  DEVOPS: 'devops',
  URGENT: 'urgent',
  BLOCKED: 'blocked',
};

export const IssueLabelCopy = {
  [IssueLabel.FRONTEND]: 'Frontend',
  [IssueLabel.BACKEND]: 'Backend',
  [IssueLabel.UI]: 'UI',
  [IssueLabel.PERFORMANCE]: 'Performance',
  [IssueLabel.BUG_FIX]: 'Bug Fix',
  [IssueLabel.DOCUMENTATION]: 'Documentation',
  [IssueLabel.REFACTOR]: 'Refactor',
  [IssueLabel.TESTING]: 'Testing',
  [IssueLabel.DESIGN]: 'Design',
  [IssueLabel.DEVOPS]: 'DevOps',
  [IssueLabel.URGENT]: 'Urgent',
  [IssueLabel.BLOCKED]: 'Blocked',
};

export const IssueLabelColors = {
  [IssueLabel.FRONTEND]: { bg: '#E3F2FD', text: '#01579B', border: '#90CAF9' },
  [IssueLabel.BACKEND]: { bg: '#F3E5F5', text: '#4A148C', border: '#CE93D8' },
  [IssueLabel.UI]: { bg: '#FCE4EC', text: '#880E4F', border: '#F48FB1' },
  [IssueLabel.PERFORMANCE]: { bg: '#FFF3E0', text: '#E65100', border: '#FFB74D' },
  [IssueLabel.BUG_FIX]: { bg: '#FFEBEE', text: '#B71C1C', border: '#EF5350' },
  [IssueLabel.DOCUMENTATION]: { bg: '#E8F5E9', text: '#1B5E20', border: '#81C784' },
  [IssueLabel.REFACTOR]: { bg: '#F1F8E9', text: '#33691E', border: '#AED581' },
  [IssueLabel.TESTING]: { bg: '#E0F2F1', text: '#004D40', border: '#80DEEA' },
  [IssueLabel.DESIGN]: { bg: '#EDE7F6', text: '#311B92', border: '#B39DDB' },
  [IssueLabel.DEVOPS]: { bg: '#F0F4C3', text: '#33691E', border: '#DCE775' },
  [IssueLabel.URGENT]: { bg: '#FFF3E0', text: '#E65100', border: '#FF9800' },
  [IssueLabel.BLOCKED]: { bg: '#ECEFF1', text: '#37474F', border: '#90A4AE' },
};
