// In-memory sprint data store
let sprintsDataStore = [
  {
    id: 1,
    name: 'Sprint 1',
    status: 'active',
    startDate: '2020-06-01T00:00:00.000Z',
    endDate: '2020-06-14T00:00:00.000Z',
    goal: 'Implement core navigation and authentication features',
    issueIds: [102, 103, 104, 105, 106],
    createdAt: '2020-05-25T00:00:00.000Z',
    completedAt: null,
  },
  {
    id: 2,
    name: 'Sprint 2',
    status: 'planning',
    startDate: null,
    endDate: null,
    goal: 'Add reporting dashboard and analytics',
    issueIds: [107, 108],
    createdAt: '2020-06-08T00:00:00.000Z',
    completedAt: null,
  },
];

export const sprintsData = {
  get sprints() {
    return [...sprintsDataStore];
  },
};

export const getSprintById = sprintId => {
  return sprintsDataStore.find(sprint => sprint.id === Number(sprintId));
};

export const createSprint = sprintData => {
  const newSprint = {
    id: Date.now(),
    name: sprintData.name || 'New Sprint',
    status: 'planning',
    startDate: sprintData.startDate || null,
    endDate: sprintData.endDate || null,
    goal: sprintData.goal || '',
    issueIds: [],
    createdAt: new Date().toISOString(),
    completedAt: null,
  };
  sprintsDataStore.push(newSprint);
  return newSprint;
};

export const updateSprint = (sprintId, updatedFields) => {
  const index = sprintsDataStore.findIndex(sprint => sprint.id === Number(sprintId));
  if (index !== -1) {
    sprintsDataStore[index] = {
      ...sprintsDataStore[index],
      ...updatedFields,
    };
    return sprintsDataStore[index];
  }
  return null;
};

export const deleteSprint = sprintId => {
  const index = sprintsDataStore.findIndex(sprint => sprint.id === Number(sprintId));
  if (index !== -1) {
    sprintsDataStore.splice(index, 1);
    return true;
  }
  return false;
};

export const updateSprintIssues = (sprintId, issueIds) => {
  return updateSprint(sprintId, { issueIds });
};
