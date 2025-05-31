
import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import KanbanColumn from './KanbanColumn';
import TaskDetailsModal from './TaskDetailsModal';
import KanbanFilters from './KanbanFilters';
import KanbanBoardHeader from './KanbanBoardHeader';
import { useKanbanLogic } from './useKanbanLogic';

const KanbanBoard = () => {
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

  const {
    columns,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleSaveTask
  } = useKanbanLogic();

  const handleCreateTask = (columnId) => {
    setEditingTask({ columnId });
    setShowTaskModal(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskModal(true);
  };

  const onSaveTask = (taskData) => {
    handleSaveTask(taskData, editingTask);
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
      <KanbanBoardHeader
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        onCreateTask={handleCreateTask}
      />

      {showFilters && (
        <KanbanFilters 
          filters={filters}
          onFiltersChange={setFilters}
          columns={columns}
        />
      )}

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

      {showTaskModal && (
        <TaskDetailsModal
          task={editingTask}
          onClose={() => {
            setShowTaskModal(false);
            setEditingTask(null);
          }}
          onSave={onSaveTask}
        />
      )}
    </div>
  );
};

export default KanbanBoard;
