
import React from 'react';
import { 
  Calendar, 
  MessageCircle, 
  Paperclip, 
  CheckSquare, 
  AlertTriangle,
  Clock,
  User
} from 'lucide-react';

const KanbanCard = ({ task, columnId, onDragStart, onEdit }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'high':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'medium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'low':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getDueDateStatus = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { color: 'text-red-600 dark:text-red-400', label: 'Overdue' };
    if (diffDays === 0) return { color: 'text-orange-600 dark:text-orange-400', label: 'Due today' };
    if (diffDays <= 3) return { color: 'text-amber-600 dark:text-amber-400', label: `${diffDays} days left` };
    return { color: 'text-gray-600 dark:text-gray-400', label: `${diffDays} days left` };
  };

  const dueDateStatus = getDueDateStatus(task.dueDate);

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-lg p-3 shadow-sm border border-gray-200 dark:border-gray-700 cursor-move hover:shadow-md transition-shadow"
      draggable
      onDragStart={(e) => onDragStart(e, task.id, columnId)}
      onClick={() => onEdit(task)}
    >
      {/* Priority & Story Points */}
      <div className="flex justify-between items-start mb-2">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
        {task.storyPoints && (
          <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
            {task.storyPoints} pts
          </span>
        )}
      </div>

      {/* Title */}
      <h4 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
        {task.title}
      </h4>

      {/* Description */}
      {task.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {task.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
              +{task.tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Due Date */}
      {task.dueDate && (
        <div className="flex items-center gap-1 mb-3">
          <Calendar size={12} className={dueDateStatus.color} />
          <span className={`text-xs ${dueDateStatus.color}`}>
            {dueDateStatus.label}
          </span>
        </div>
      )}

      {/* Checklist Progress */}
      {task.checklist && task.checklist.total > 0 && (
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
            <span>Checklist</span>
            <span>{task.checklist.completed}/{task.checklist.total}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div
              className="bg-green-500 h-1.5 rounded-full transition-all"
              style={{ width: `${(task.checklist.completed / task.checklist.total) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Dependencies Warning */}
      {task.dependencies && task.dependencies.length > 0 && (
        <div className="flex items-center gap-1 mb-2">
          <AlertTriangle size={12} className="text-amber-500" />
          <span className="text-xs text-amber-600 dark:text-amber-400">
            {task.dependencies.length} dependencies
          </span>
        </div>
      )}

      {/* Bottom Row */}
      <div className="flex items-center justify-between">
        {/* Assignee */}
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full ${task.assignee.color} flex items-center justify-center text-white text-xs font-medium`}>
            {task.assignee.avatar}
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400 truncate max-w-20">
            {task.assignee.name}
          </span>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-2">
          {task.comments > 0 && (
            <div className="flex items-center gap-1">
              <MessageCircle size={12} className="text-gray-400" />
              <span className="text-xs text-gray-500 dark:text-gray-400">{task.comments}</span>
            </div>
          )}
          
          {task.attachments > 0 && (
            <div className="flex items-center gap-1">
              <Paperclip size={12} className="text-gray-400" />
              <span className="text-xs text-gray-500 dark:text-gray-400">{task.attachments}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
