import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Avatar, IssueTypeIcon, IssuePriorityIcon, Select, TextEditor } from 'shared/components';
import { IssueTypeCopy, IssuePriorityCopy, IssueStatus, IssueStatusCopy, IssueType, IssuePriority } from 'shared/constants/issues';
import { KeyCodes } from 'shared/constants/keyCodes';
import api from 'shared/utils/api';
import { is, generateErrors } from 'shared/utils/validation';

import {
  Container,
  ControlsBar,
  ZoomControls,
  ZoomButton,
  LegendContainer,
  LegendItem,
  LegendDot,
  LegendLabel,
  GraphContainer,
  GraphSvg,
  EditPanel,
  EditPanelHeader,
  EditPanelTitle,
  CloseButton,
  EditContent,
  EditLabel,
  EditInput,
  EditActions,
  SaveButton,
  CancelButton,
  NodeCircle,
  NodeLabel,
  TaskNode,
  TaskNodeTitle,
  TaskNodeMeta,
  EdgeLine,
  EdgeLabel,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  currentUserId: PropTypes.number,
};

const defaultProps = {
  currentUserId: null,
};

const MindmapView = ({ project, filters, currentUserId }) => {
  const { users, issues } = project;
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [editingIssueId, setEditingIssueId] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [titleError, setTitleError] = useState(null);
  const [draggedNode, setDraggedNode] = useState(null);
  const [nodePositions, setNodePositions] = useState({});
  const containerRef = useRef();
  const editPanelRef = useRef();

  // Filter issues based on current filters
  const filteredIssues = useMemo(() => {
    let filtered = issues;

    if (filters.searchTerm) {
      filtered = filtered.filter(issue =>
        issue.title.toLowerCase().includes(filters.searchTerm.toLowerCase()),
      );
    }

    if (filters.userIds.length > 0) {
      filtered = filtered.filter(issue =>
        issue.userIds.some(id => filters.userIds.includes(id)),
      );
    }

    if (filters.myOnly && currentUserId) {
      filtered = filtered.filter(issue => issue.userIds.includes(currentUserId));
    }

    return filtered;
  }, [issues, filters, currentUserId]);

  // Calculate graph data - nodes and edges (people-focused)
  const graphData = useMemo(() => {
    const nodes = [];
    const edges = [];
    const peopleCollaborations = {}; // Track collaborations between people
    const peopleBlockers = {}; // Track blockers between people

    // Create person nodes with workload data
    users.forEach((user, idx) => {
      const userIssues = filteredIssues.filter(issue => issue.userIds.includes(user.id));
      const allUserIssues = issues.filter(issue => issue.userIds.includes(user.id));
      
      // Calculate workload
      const totalAssigned = allUserIssues.reduce((sum, task) => sum + (task.timeRemaining || 0), 0);
      const totalCapacity = 40;
      const workloadPercentage = Math.min((totalAssigned / totalCapacity) * 100, 100);
      
      if (userIssues.length > 0 || !filters.searchTerm) {
        nodes.push({
          id: `user-${user.id}`,
          type: 'person',
          data: user,
          issues: userIssues,
          workload: {
            assigned: totalAssigned,
            capacity: totalCapacity,
            percentage: workloadPercentage,
          },
        });
      }
    });

    // Create smaller task nodes for context
    filteredIssues.forEach(issue => {
      nodes.push({
        id: `task-${issue.id}`,
        type: 'task',
        data: issue,
      });

      // Add edges from task to assignees (lighter, dashed)
      issue.userIds.forEach(userId => {
        edges.push({
          id: `edge-task-${issue.id}-user-${userId}`,
          source: `user-${userId}`,
          target: `task-${issue.id}`,
          type: 'assignment',
        });
      });

      // Track collaborations: if multiple people work on same task
      if (issue.userIds.length > 1) {
        for (let i = 0; i < issue.userIds.length; i++) {
          for (let j = i + 1; j < issue.userIds.length; j++) {
            const user1 = issue.userIds[i];
            const user2 = issue.userIds[j];
            const key = `${Math.min(user1, user2)}-${Math.max(user1, user2)}`;
            
            if (!peopleCollaborations[key]) {
              peopleCollaborations[key] = {
                user1,
                user2,
                count: 0,
                tasks: [],
              };
            }
            peopleCollaborations[key].count += 1;
            peopleCollaborations[key].tasks.push(issue.title);
          }
        }
      }

      // Track blockers between people
      if (issue.dependencies && issue.dependencies.length > 0) {
        issue.dependencies.forEach(depId => {
          const dependentIssue = issues.find(i => i.id === depId);
          if (dependentIssue && dependentIssue.status !== 'done') {
            // Add edge from dependent task to blocked task (task level)
            edges.push({
              id: `edge-dep-${issue.id}-${depId}`,
              source: `task-${depId}`,
              target: `task-${issue.id}`,
              type: 'dependency',
              label: 'blocks',
            });

            // Track people-level blockers
            const blockedPersonIds = issue.userIds;
            const blockerPersonIds = dependentIssue.userIds;

            blockedPersonIds.forEach(blockedId => {
              blockerPersonIds.forEach(blockerId => {
                if (blockedId !== blockerId) {
                  const key = `blocker-${blockerId}-${blockedId}`;
                  if (!peopleBlockers[key]) {
                    peopleBlockers[key] = {
                      blocker: blockerId,
                      blocked: blockedId,
                      count: 0,
                      tasks: [],
                    };
                  }
                  peopleBlockers[key].count += 1;
                  peopleBlockers[key].tasks.push({ blockerTask: dependentIssue.title, blockedTask: issue.title });
                }
              });
            });
          }
        });
      }
    });

    // Add collaboration edges between people
    Object.values(peopleCollaborations).forEach(collab => {
      edges.push({
        id: `edge-collab-${collab.user1}-${collab.user2}`,
        source: `user-${collab.user1}`,
        target: `user-${collab.user2}`,
        type: 'collaboration',
        count: collab.count,
        tasks: collab.tasks,
      });
    });

    // Add blocker edges between people
    Object.values(peopleBlockers).forEach(blocker => {
      edges.push({
        id: `edge-blocker-${blocker.blocker}-${blocker.blocked}`,
        source: `user-${blocker.blocker}`,
        target: `user-${blocker.blocked}`,
        type: 'blocker',
        count: blocker.count,
        tasks: blocker.tasks,
      });
    });

    return { nodes, edges };
  }, [users, filteredIssues, issues, filters.searchTerm]);

  // Initialize node positions using force-directed layout simulation
  useEffect(() => {
    if (graphData.nodes.length === 0) return;

    const centerX = 600;
    const centerY = 400;
    const personRadius = 320;
    const taskOffsetFromPerson = 120;

    const newPositions = {};

    // Position person nodes in a circle
    const personNodes = graphData.nodes.filter(n => n.type === 'person');
    personNodes.forEach((node, idx) => {
      const angle = (idx / personNodes.length) * 2 * Math.PI;
      newPositions[node.id] = {
        x: centerX + personRadius * Math.cos(angle),
        y: centerY + personRadius * Math.sin(angle),
      };
    });

    // Position task nodes closer to their assignees
    const taskNodes = graphData.nodes.filter(n => n.type === 'task');
    const personTaskCounts = {}; // Track how many tasks per person to spread them

    taskNodes.forEach((node, idx) => {
      // Find the assignees for this task
      const assigneeIds = node.data.userIds.map(uid => `user-${uid}`);
      
      if (assigneeIds.length > 0) {
        // Position task closer to the first assignee (or average if multiple)
        const assigneePositions = assigneeIds
          .map(aid => newPositions[aid])
          .filter(Boolean);
        
        if (assigneePositions.length > 0) {
          const avgX = assigneePositions.reduce((sum, pos) => sum + pos.x, 0) / assigneePositions.length;
          const avgY = assigneePositions.reduce((sum, pos) => sum + pos.y, 0) / assigneePositions.length;
          
          // Calculate direction from center to average assignee position
          const dx = avgX - centerX;
          const dy = avgY - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const dirX = dx / distance;
          const dirY = dy / distance;
          
          // Track tasks per person for spreading
          const primaryAssignee = assigneeIds[0];
          personTaskCounts[primaryAssignee] = (personTaskCounts[primaryAssignee] || 0) + 1;
          const taskIndex = personTaskCounts[primaryAssignee];
          
          // Position task closer to assignee with some perpendicular offset to avoid overlap
          const offsetAngle = (taskIndex - 1) * 0.3 - 0.3; // Spread tasks in an arc
          const perpX = -dirY;
          const perpY = dirX;
          
          newPositions[node.id] = {
            x: avgX - dirX * taskOffsetFromPerson + perpX * taskIndex * 30,
            y: avgY - dirY * taskOffsetFromPerson + perpY * taskIndex * 30,
          };
        } else {
          // Fallback position
          const angle = (idx / taskNodes.length) * 2 * Math.PI;
          newPositions[node.id] = {
            x: centerX + 150 * Math.cos(angle),
            y: centerY + 150 * Math.sin(angle),
          };
        }
      } else {
        // No assignees - position in inner circle
        const angle = (idx / taskNodes.length) * 2 * Math.PI;
        newPositions[node.id] = {
          x: centerX + 150 * Math.cos(angle),
          y: centerY + 150 * Math.sin(angle),
        };
      }
    });

    setNodePositions(newPositions);
  }, [graphData.nodes]);

  // Handle click outside edit panel
  useEffect(() => {
    const handleClickOutside = event => {
      if (editingIssueId && editPanelRef.current && !editPanelRef.current.contains(event.target)) {
        handleCancelEdit();
      }
    };

    if (editingIssueId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingIssueId]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleZoomReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = e => {
    if (e.target === e.currentTarget || e.target.tagName === 'svg') {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = e => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }

    if (draggedNode) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - pan.x) / zoom;
      const y = (e.clientY - rect.top - pan.y) / zoom;
      
      setNodePositions(prev => ({
        ...prev,
        [draggedNode]: { x, y },
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedNode(null);
  };

  const handleNodeMouseDown = (e, nodeId) => {
    e.stopPropagation();
    setDraggedNode(nodeId);
  };

  const handleTaskDoubleClick = (e, task) => {
    e.preventDefault();
    e.stopPropagation();
    setEditingIssueId(task.id);
    setEditedFields({
      title: task.title,
      description: task.description || '',
      type: task.type,
      status: task.status,
      priority: task.priority,
      productArea: task.productArea || '',
    });
    setTitleError(null);
  };

  const handleSaveEdit = () => {
    const issue = issues.find(i => i.id === editingIssueId);
    if (!issue) return;

    setTitleError(null);

    const errors = generateErrors({ title: editedFields.title }, { title: [is.required(), is.maxLength(200)] });

    if (errors.title) {
      setTitleError(errors.title);
      return;
    }

    const updatedFields = {};
    if (editedFields.title !== issue.title) updatedFields.title = editedFields.title;
    if (editedFields.description !== (issue.description || '')) updatedFields.description = editedFields.description;
    if (editedFields.type !== issue.type) updatedFields.type = editedFields.type;
    if (editedFields.status !== issue.status) updatedFields.status = editedFields.status;
    if (editedFields.priority !== issue.priority) updatedFields.priority = editedFields.priority;
    if (editedFields.productArea !== (issue.productArea || '')) updatedFields.productArea = editedFields.productArea;

    if (Object.keys(updatedFields).length > 0) {
      api.optimisticUpdate(`/issues/${issue.id}`, {
        updatedFields,
        currentFields: issue,
        setLocalData: () => {},
      });
    }

    setEditingIssueId(null);
    setEditedFields({});
  };

  const handleCancelEdit = () => {
    setEditingIssueId(null);
    setEditedFields({});
    setTitleError(null);
  };

  const handleKeyDown = event => {
    if (event.keyCode === KeyCodes.ESCAPE) {
      handleCancelEdit();
    }
  };

  const updateEditedField = (field, value) => {
    setEditedFields(prev => ({ ...prev, [field]: value }));
  };

  const getStatusColor = status => {
    const statusColors = {
      backlog: '#DFE1E6',
      selected: '#EBECF0',
      inprogress: '#0052CC',
      done: '#0B875B',
    };
    return statusColors[status] || '#DFE1E6';
  };

  return (
    <Container>
      <ControlsBar>
        <ZoomControls>
          <ZoomButton onClick={handleZoomOut}>-</ZoomButton>
          <ZoomButton onClick={handleZoomReset}>Reset</ZoomButton>
          <ZoomButton onClick={handleZoomIn}>+</ZoomButton>
        </ZoomControls>
        <LegendContainer>
          <LegendItem>
            <LegendDot color="#0052CC" />
            <LegendLabel>Person (ring = workload)</LegendLabel>
          </LegendItem>
          <LegendItem>
            <LegendDot color="#5243AA" />
            <LegendLabel>Collaboration</LegendLabel>
          </LegendItem>
          <LegendItem>
            <LegendDot color="#E13C3C" />
            <LegendLabel>Blocker</LegendLabel>
          </LegendItem>
          <LegendItem>
            <LegendDot color="#DFE1E6" />
            <LegendLabel>Assignment</LegendLabel>
          </LegendItem>
        </LegendContainer>
      </ControlsBar>

      <GraphContainer
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <GraphSvg style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}>
          {/* Render edges */}
          <g>
            {graphData.edges.map(edge => {
              const sourcePos = nodePositions[edge.source];
              const targetPos = nodePositions[edge.target];

              if (!sourcePos || !targetPos) return null;

              let color = '#DFE1E6';
              let strokeWidth = 1;
              let strokeDasharray = '4,4';
              let label = edge.label;

              if (edge.type === 'collaboration') {
                color = '#5243AA';
                strokeWidth = 2 + Math.min(edge.count, 5) * 0.5;
                strokeDasharray = 'none';
                label = `${edge.count} ${edge.count === 1 ? 'task' : 'tasks'}`;
              } else if (edge.type === 'blocker') {
                color = '#E13C3C';
                strokeWidth = 2;
                strokeDasharray = 'none';
                label = `${edge.count} ${edge.count === 1 ? 'blocker' : 'blockers'}`;
              } else if (edge.type === 'dependency') {
                color = '#E13C3C';
                strokeWidth = 2;
                strokeDasharray = 'none';
                label = 'blocks';
              } else if (edge.type === 'assignment') {
                color = '#DFE1E6';
                strokeWidth = 1;
                strokeDasharray = '4,4';
              }

              return (
                <g key={edge.id}>
                  <EdgeLine
                    x1={sourcePos.x}
                    y1={sourcePos.y}
                    x2={targetPos.x}
                    y2={targetPos.y}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                  />
                  {label && edge.type !== 'assignment' && (
                    <EdgeLabel
                      x={(sourcePos.x + targetPos.x) / 2}
                      y={(sourcePos.y + targetPos.y) / 2}
                      color={color}
                    >
                      {label}
                    </EdgeLabel>
                  )}
                </g>
              );
            })}
          </g>

          {/* Render nodes */}
          <g>
            {graphData.nodes.map(node => {
              const pos = nodePositions[node.id];
              if (!pos) return null;

              if (node.type === 'person') {
                const user = node.data;
                const taskCount = node.issues.length;
                const workload = node.workload;
                
                // Workload ring color: green if < 80%, yellow if < 100%, red if >= 100%
                const workloadColor = workload.percentage < 80 ? '#0B875B' : workload.percentage < 100 ? '#F2C94C' : '#E13C3C';

                return (
                  <g
                    key={node.id}
                    onMouseDown={e => handleNodeMouseDown(e, node.id)}
                    style={{ cursor: 'move' }}
                  >
                    {/* Outer workload ring */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={50}
                      fill="none"
                      stroke={workloadColor}
                      strokeWidth={6}
                      strokeDasharray={`${(workload.percentage / 100) * (2 * Math.PI * 50)} ${2 * Math.PI * 50}`}
                      transform={`rotate(-90 ${pos.x} ${pos.y})`}
                      style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))' }}
                    />
                    {/* Inner circle background */}
                    <NodeCircle
                      cx={pos.x}
                      cy={pos.y}
                      r={45}
                      fill="#fff"
                      stroke="#0052CC"
                      strokeWidth={3}
                    />
                    {/* Avatar */}
                    <foreignObject
                      x={pos.x - 35}
                      y={pos.y - 35}
                      width={70}
                      height={70}
                      style={{ pointerEvents: 'none' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Avatar avatarUrl={user.avatarUrl} name={user.name} size={60} />
                      </div>
                    </foreignObject>
                    {/* Name label */}
                    <NodeLabel x={pos.x} y={pos.y + 65}>
                      {user.name}
                    </NodeLabel>
                    {/* Workload and task count */}
                    <NodeLabel x={pos.x} y={pos.y + 80} opacity={0.7} fontSize={11}>
                      {taskCount} {taskCount === 1 ? 'task' : 'tasks'} • {workload.assigned}h/{workload.capacity}h
                    </NodeLabel>
                  </g>
                );
              }

              if (node.type === 'task') {
                const task = node.data;
                const color = getStatusColor(task.status);

                return (
                  <g
                    key={node.id}
                    onMouseDown={e => handleNodeMouseDown(e, node.id)}
                    onDoubleClick={e => handleTaskDoubleClick(e, task)}
                    style={{ cursor: 'move' }}
                  >
                    <TaskNode
                      x={pos.x - 50}
                      y={pos.y - 18}
                      width={100}
                      height={36}
                      rx={4}
                      fill={color}
                      stroke="#fff"
                      strokeWidth={1.5}
                    />
                    <foreignObject
                      x={pos.x - 46}
                      y={pos.y - 14}
                      width={92}
                      height={28}
                      style={{ pointerEvents: 'none' }}
                    >
                      <div style={{ padding: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <TaskNodeTitle style={{ fontSize: '10px' }}>{task.title.length > 15 ? `${task.title.substring(0, 15)}...` : task.title}</TaskNodeTitle>
                      </div>
                    </foreignObject>
                  </g>
                );
              }

              return null;
            })}
          </g>
        </GraphSvg>
      </GraphContainer>

      {editingIssueId && (
        <EditPanel ref={editPanelRef} onKeyDown={handleKeyDown}>
          <EditPanelHeader>
            <EditPanelTitle>Edit Task</EditPanelTitle>
            <CloseButton onClick={handleCancelEdit}>×</CloseButton>
          </EditPanelHeader>
          <EditContent>
            <div>
              <EditLabel>Title *</EditLabel>
              <EditInput
                value={editedFields.title}
                onChange={e => updateEditedField('title', e.target.value)}
                placeholder="Task title"
                autoFocus
              />
              {titleError && <div style={{ color: '#E13C3C', fontSize: '12.5px', marginTop: '4px' }}>{titleError}</div>}
            </div>

            <div>
              <EditLabel>Description</EditLabel>
              <TextEditor
                placeholder="Add description..."
                defaultValue={editedFields.description}
                onChange={value => updateEditedField('description', value)}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              <div>
                <EditLabel>Type</EditLabel>
                <Select
                  variant="normal"
                  withClearValue={false}
                  name="type"
                  value={editedFields.type}
                  options={Object.values(IssueType).map(type => ({
                    value: type,
                    label: IssueTypeCopy[type],
                  }))}
                  onChange={value => updateEditedField('type', value)}
                  renderValue={({ value: type }) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <IssueTypeIcon type={type} />
                      {IssueTypeCopy[type]}
                    </div>
                  )}
                  renderOption={({ value: type }) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <IssueTypeIcon type={type} />
                      {IssueTypeCopy[type]}
                    </div>
                  )}
                />
              </div>

              <div>
                <EditLabel>Priority</EditLabel>
                <Select
                  variant="normal"
                  withClearValue={false}
                  name="priority"
                  value={editedFields.priority}
                  options={Object.values(IssuePriority).map(priority => ({
                    value: priority,
                    label: IssuePriorityCopy[priority],
                  }))}
                  onChange={value => updateEditedField('priority', value)}
                  renderValue={({ value: priority }) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <IssuePriorityIcon priority={priority} />
                      {IssuePriorityCopy[priority]}
                    </div>
                  )}
                  renderOption={({ value: priority }) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <IssuePriorityIcon priority={priority} />
                      {IssuePriorityCopy[priority]}
                    </div>
                  )}
                />
              </div>

              <div>
                <EditLabel>Status</EditLabel>
                <Select
                  variant="normal"
                  withClearValue={false}
                  name="status"
                  value={editedFields.status}
                  options={Object.values(IssueStatus).map(status => ({
                    value: status,
                    label: IssueStatusCopy[status],
                  }))}
                  onChange={value => updateEditedField('status', value)}
                />
              </div>

              <div>
                <EditLabel>Product Area</EditLabel>
                <EditInput
                  value={editedFields.productArea}
                  onChange={e => updateEditedField('productArea', e.target.value)}
                  placeholder="Product area"
                />
              </div>
            </div>

            <EditActions>
              <SaveButton onClick={handleSaveEdit}>Save</SaveButton>
              <CancelButton onClick={handleCancelEdit}>Cancel</CancelButton>
            </EditActions>
          </EditContent>
        </EditPanel>
      )}
    </Container>
  );
};

MindmapView.propTypes = propTypes;
MindmapView.defaultProps = defaultProps;

export default MindmapView;
