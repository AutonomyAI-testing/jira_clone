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

export const IssueLabel = {
  BUG: 'bug',
  FEATURE: 'feature',
  ENHANCEMENT: 'enhancement',
  DESIGN: 'design',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  DOCUMENTATION: 'documentation',
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

export const IssueLabelCopy = {
  [IssueLabel.BUG]: 'Bug',
  [IssueLabel.FEATURE]: 'Feature',
  [IssueLabel.ENHANCEMENT]: 'Enhancement',
  [IssueLabel.DESIGN]: 'Design',
  [IssueLabel.FRONTEND]: 'Frontend',
  [IssueLabel.BACKEND]: 'Backend',
  [IssueLabel.DOCUMENTATION]: 'Documentation',
};
