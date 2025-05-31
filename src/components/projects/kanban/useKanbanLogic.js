
import { useState, useCallback } from 'react';
import { useToast } from '../../ui/Toast';

const initialColumns = [
  {
    id: 'backlog',
    title: 'Backlog',
    color: 'bg-gray-500',
    limit: null,
    tasks: [
      {
        id: 'task-1',
        title: 'User Authentication System',
        description: 'Implement OAuth 2.0 and JWT token authentication',
        assignee: { name: 'John Doe', avatar: 'JD', color: 'bg-blue-500' },
        priority: 'high',
        dueDate: '2025-06-15',
        tags: ['backend', 'security'],
        storyPoints: 8,
        dependencies: [],
        comments: 3,
        attachments: 1,
        checklist: { completed: 2, total: 5 }
      },
      {
        id: 'task-2',
        title: 'Dashboard Analytics',
        description: 'Create comprehensive analytics dashboard with charts',
        assignee: { name: 'Jane Smith', avatar: 'JS', color: 'bg-purple-500' },
        priority: 'medium',
        dueDate: '2025-06-20',
        tags: ['frontend', 'analytics'],
        storyPoints: 5,
        dependencies: ['task-1'],
        comments: 1,
        attachments: 0,
        checklist: { completed: 0, total: 3 }
      }
    ]
  },
  {
    id: 'todo',
    title: 'To Do',
    color: 'bg-blue-500',
    limit: 10,
    tasks: [
      {
        id: 'task-3',
        title: 'API Documentation',
        description: 'Write comprehensive API documentation',
        assignee: { name: 'Mike Johnson', avatar: 'MJ', color: 'bg-green-500' },
        priority: 'medium',
        dueDate: '2025-06-10',
        tags: ['documentation'],
        storyPoints: 3,
        dependencies: [],
        comments: 0,
        attachments: 2,
        checklist: { completed: 1, total: 4 }
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'bg-amber-500',
    limit: 5,
    tasks: [
      {
        id: 'task-4',
        title: 'Mobile Responsive Design',
        description: 'Make the application fully responsive for mobile devices',
        assignee: { name: 'Sarah Wilson', avatar: 'SW', color: 'bg-pink-500' },
        priority: 'high',
        dueDate: '2025-06-08',
        tags: ['frontend', 'mobile'],
        storyPoints: 6,
        dependencies: [],
        comments: 5,
        attachments: 3,
        checklist: { completed: 3, total: 6 }
      },
      {
        id: 'task-5',
        title: 'Database Optimization',
        description: 'Optimize database queries for better performance',
        assignee: { name: 'Alex Brown', avatar: 'AB', color: 'bg-indigo-500' },
        priority: 'critical',
        dueDate: '2025-06-05',
        tags: ['backend', 'performance'],
        storyPoints: 4,
        dependencies: [],
        comments: 2,
        attachments: 0,
        checklist: { completed: 2, total: 3 }
      }
    ]
  },
  {
    id: 'review',
    title: 'Review',
    color: 'bg-purple-500',
    limit: 3,
    tasks: [
      {
        id: 'task-6',
        title: 'Code Review Process',
        description: 'Establish automated code review workflows',
        assignee: { name: 'Lisa Davis', avatar: 'LD', color: 'bg-orange-500' },
        priority: 'low',
        dueDate: '2025-06-12',
        tags: ['process', 'quality'],
        storyPoints: 2,
        dependencies: [],
        comments: 4,
        attachments: 1,
        checklist: { completed: 4, total: 4 }
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    color: 'bg-green-500',
    limit: null,
    tasks: [
      {
        id: 'task-7',
        title: 'Project Setup',
        description: 'Initial project structure and configuration',
        assignee: { name: 'Tom Anderson', avatar: 'TA', color: 'bg-cyan-500' },
        priority: 'high',
        dueDate: '2025-05-20',
        tags: ['setup', 'infrastructure'],
        storyPoints: 3,
        dependencies: [],
        comments: 1,
        attachments: 0,
        checklist: { completed: 5, total: 5 }
      }
    ]
  }
];

export const useKanbanLogic = () => {
  const { showToast } = useToast();
  const [columns, setColumns] = useState(initialColumns);

  const handleDragStart = useCallback((e, taskId, sourceColumnId) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ taskId, sourceColumnId }));
    e.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e, targetColumnId) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const { taskId, sourceColumnId } = data;

    if (sourceColumnId === targetColumnId) return;

    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const sourceColumn = newColumns.find(col => col.id === sourceColumnId);
      const targetColumn = newColumns.find(col => col.id === targetColumnId);
      
      if (!sourceColumn || !targetColumn) return prevColumns;

      if (targetColumn.limit && targetColumn.tasks.length >= targetColumn.limit) {
        showToast(`Column "${targetColumn.title}" has reached its limit of ${targetColumn.limit} tasks`, 'error');
        return prevColumns;
      }

      const taskIndex = sourceColumn.tasks.findIndex(task => task.id === taskId);
      if (taskIndex === -1) return prevColumns;

      const task = sourceColumn.tasks[taskIndex];
      sourceColumn.tasks.splice(taskIndex, 1);
      targetColumn.tasks.push(task);

      return newColumns;
    });

    showToast('Task moved successfully', 'success');
  }, [showToast]);

  const handleSaveTask = useCallback((taskData, editingTask) => {
    if (editingTask?.id) {
      setColumns(prevColumns => {
        const newColumns = [...prevColumns];
        const column = newColumns.find(col => 
          col.tasks.some(task => task.id === editingTask.id)
        );
        if (column) {
          const taskIndex = column.tasks.findIndex(task => task.id === editingTask.id);
          column.tasks[taskIndex] = { ...taskData, id: editingTask.id };
        }
        return newColumns;
      });
      showToast('Task updated successfully', 'success');
    } else {
      const newTask = {
        ...taskData,
        id: `task-${Date.now()}`,
        comments: 0,
        attachments: 0,
        checklist: { completed: 0, total: 0 }
      };
      
      setColumns(prevColumns => {
        const newColumns = [...prevColumns];
        const column = newColumns.find(col => col.id === editingTask.columnId);
        if (column) {
          column.tasks.push(newTask);
        }
        return newColumns;
      });
      showToast('Task created successfully', 'success');
    }
  }, [showToast]);

  return {
    columns,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleSaveTask
  };
};
