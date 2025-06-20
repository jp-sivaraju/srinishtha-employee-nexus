
import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const KanbanBoardHeader = ({ 
  totalTasks, 
  completedTasks, 
  searchTerm, 
  setSearchTerm, 
  showFilters, 
  setShowFilters, 
  onCreateTask 
}) => {
  return (
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
          onClick={() => onCreateTask('backlog')}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2 text-sm"
        >
          <Plus size={16} />
          Add Task
        </button>
      </div>
    </div>
  );
};

export default KanbanBoardHeader;
