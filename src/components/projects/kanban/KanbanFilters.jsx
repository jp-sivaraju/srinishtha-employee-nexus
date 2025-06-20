
import React from 'react';
import { X } from 'lucide-react';

const KanbanFilters = ({ filters, onFiltersChange, columns }) => {
  const allAssignees = Array.from(
    new Set(
      columns.flatMap(col => 
        col.tasks.map(task => task.assignee.name)
      )
    )
  );

  const allTags = Array.from(
    new Set(
      columns.flatMap(col => 
        col.tasks.flatMap(task => task.tags)
      )
    )
  );

  const priorities = ['low', 'medium', 'high', 'critical'];

  const handleFilterChange = (key, value) => {
    onFiltersChange(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleTagToggle = (tag) => {
    onFiltersChange(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const clearFilters = () => {
    onFiltersChange({
      assignee: '',
      priority: '',
      dueDate: '',
      tags: []
    });
  };

  const hasActiveFilters = filters.assignee || filters.priority || filters.dueDate || filters.tags.length > 0;

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <div className="flex flex-wrap gap-4 items-center">
        <h3 className="font-medium text-gray-900 dark:text-white">Filters:</h3>
        
        {/* Assignee Filter */}
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Assignee</label>
          <select
            value={filters.assignee}
            onChange={link => handleFilterChange('assignee', e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-800"
          >
            <option value="">All assignees</option>
            {allAssignees.map(assignee => (
              <option key={assignee} value={assignee}>{assignee}</option>
            ))}
          </select>
        </div>

        {/* Priority Filter */}
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Priority</label>
          <select
            value={filters.priority}
            onChange={link => handleFilterChange('priority', e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-800"
          >
            <option value="">All priorities</option>
            {priorities.map(priority => (
              <option key={priority} value={priority}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Due Date Filter */}
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Due Date</label>
          <select
            value={filters.dueDate}
            onChange={link => handleFilterChange('dueDate', e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-800"
          >
            <option value="">All dates</option>
            <option value="overdue">Overdue</option>
            <option value="today">Due today</option>
            <option value="week">Due this week</option>
            <option value="month">Due this month</option>
          </select>
        </div>

        {/* Tags Filter */}
        <div>
          <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Tags</label>
          <div className="flex flex-wrap gap-1">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-2 py-1 rounded-full text-xs transition-colors ${
                  filters.tags.includes(tag)
                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-600'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <X size={14} />
            Clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default KanbanFilters;
