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
  [IssueLabel.FRONTEND]: '#0052CC',
  [IssueLabel.BACKEND]: '#00875A',
  [IssueLabel.UI]: '#FF7452',
  [IssueLabel.PERFORMANCE]: '#974F0C',
  [IssueLabel.BUG_FIX]: '#AE2A19',
  [IssueLabel.DOCUMENTATION]: '#5E4DB2',
  [IssueLabel.REFACTOR]: '#216E4E',
  [IssueLabel.TESTING]: '#AF2EF0',
  [IssueLabel.DESIGN]: '#FFAB00',
  [IssueLabel.DEVOPS]: '#626F86',
  [IssueLabel.URGENT]: '#E5243E',
  [IssueLabel.BLOCKED]: '#626F86',
};
