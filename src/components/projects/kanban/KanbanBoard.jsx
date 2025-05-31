
import React, { useState, useCallback } from 'react';
import { Card } from '../../ui/Card';
import { 
  Plus, 
  Filter, 
  Search, 
  Calendar, 
  User, 
  Tag,
  MoreHorizontal,
  AlertCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import KanbanColumn from './KanbanColumn';
import TaskDetailsModal from './TaskDetailsModal';
import KanbanFilters from './KanbanFilters';
import { useToast } from '../../ui/Toast';

const KanbanBoard = () => {
  const { showToast } = useToast();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    assignee: '',
    priority: '',
    dueDate: '',
    tags: []
  });

  const [columns, setColumns] = useState([
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
  ]);

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

      // Check target column limit
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

  const handleCreateTask = (columnId) => {
    setEditingTask({ columnId });
    setShowTaskModal(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskModal(true);
  };

  const handleSaveTask = (taskData) => {
    if (editingTask?.id) {
      // Update existing task
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
      // Create new task
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
    
    setShowTaskModal(false);
    setEditingTask(null);
  };

  const filteredColumns = columns.map(column => ({
    ...column,
    tasks: column.tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesAssignee = !filters.assignee || task.assignee.name === filters.assignee;
      const matchesPriority = !filters.priority || task.priority === filters.priority;
      const matchesTags = filters.tags.length === 0 || 
                         filters.tags.some(tag => task.tags.includes(tag));
      
      return matchesSearch && matchesAssignee && matchesPriority && matchesTags;
    })
  }));

  const totalTasks = columns.reduce((sum, col) => sum + col.tasks.length, 0);
  const completedTasks = columns.find(col => col.id === 'done')?.tasks.length || 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Kanban Board</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {totalTasks} total tasks • {completedTasks} completed • {totalTasks - completedTasks} remaining
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm w-64"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 border rounded-md flex items-center gap-2 text-sm ${
              showFilters 
                ? 'bg-primary-50 border-primary-300 text-primary-700 dark:bg-primary-900/30 dark:border-primary-600 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <Filter size={16} />
            Filters
          </button>
          
          <button
            onClick={() => handleCreateTask('backlog')}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2 text-sm"
          >
            <Plus size={16} />
            Add Task
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <KanbanFilters 
          filters={filters}
          onFiltersChange={setFilters}
          columns={columns}
        />
      )}

      {/* Kanban Board */}
      <Card className="p-6">
        <div className="flex gap-6 overflow-x-auto min-h-[600px]">
          {filteredColumns.map((column) => (
            <KanbanColumn
              key={column.id}
              column={column}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onCreateTask={handleCreateTask}
              onEditTask={handleEditTask}
            />
          ))}
        </div>
      </Card>

      {/* Task Details Modal */}
      {showTaskModal && (
        <TaskDetailsModal
          task={editingTask}
          onClose={() => {
            setShowTaskModal(false);
            setEditingTask(null);
          }}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
};

export default KanbanBoard;
