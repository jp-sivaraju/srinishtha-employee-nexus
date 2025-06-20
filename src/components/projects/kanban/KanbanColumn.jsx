
import React from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import KanbanCard from './KanbanCard';

const KanbanColumn = ({ 
  column, 
  onDragStart, 
  onDragOver, 
  onDrop, 
  onCreateTask, 
  onEditTask 
}) => {
  const isAtLimit = column.limit && column.tasks.length >= column.limit;

  return (
    <div className="flex-shrink-0 w-80">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        {/* Column Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {column.title}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
              {column.tasks.length}
              {column.limit && `/${column.limit}`}
            </span>
          </div>
          
          {isAtLimit && (
            <AlertCircle className="w-4 h-4 text-amber-500" title="Column limit reached" />
          )}
        </div>

        {/* Drop Zone */}
        <div
          className="min-h-[500px] space-y-3"
          onDragOver={onDragOver}
          onDrop={link => onDrop(e, column.id)}
        >
          {/* Tasks */}
          {column.tasks.map((task) => (
            <KanbanCard
              key={task.id}
              task={task}
              columnId={column.id}
              onDragStart={onDragStart}
              onEdit={onEditTask}
            />
          ))}

          {/* Add Task button */}
          <button
            onClick={() => onCreateTask(column.id)}
            className={`w-full p-3 border-2 border-dashed rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center gap-2 ${
              isAtLimit 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-white dark:hover:bg-gray-700'
            }`}
            disabled={isAtLimit}
          >
            <Plus size={16} />
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn;
