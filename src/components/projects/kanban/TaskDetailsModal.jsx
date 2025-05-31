
import React, { useState, useEffect } from 'react';
import { 
  X, 
  Save, 
  Calendar, 
  User, 
  Tag, 
  AlertTriangle, 
  Plus,
  Minus,
  Paperclip
} from 'lucide-react';

const TaskDetailsModal = ({ task, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignee: { name: '', avatar: '', color: 'bg-blue-500' },
    priority: 'medium',
    dueDate: '',
    tags: [],
    storyPoints: 1,
    dependencies: []
  });

  useEffect(() => {
    if (task && task.id) {
      setFormData(task);
    }
  }, [task]);

  const priorities = [
    { value: 'low', label: 'Low', color: 'bg-gray-100 text-gray-800' },
    { value: 'medium', label: 'Medium', color: 'bg-blue-100 text-blue-800' },
    { value: 'high', label: 'High', color: 'bg-orange-100 text-orange-800' },
    { value: 'critical', label: 'Critical', color: 'bg-red-100 text-red-800' }
  ];

  const assigneeColors = [
    'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-pink-500', 
    'bg-indigo-500', 'bg-orange-500', 'bg-cyan-500', 'bg-red-500'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAssigneeChange = (name) => {
    const avatar = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const color = assigneeColors[Math.floor(Math.random() * assigneeColors.length)];
    
    setFormData(prev => ({
      ...prev,
      assignee: { name, avatar, color }
    }));
  };

  const handleTagAdd = (newTag) => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Please enter a task title');
      return;
    }

    if (!formData.assignee.name.trim()) {
      alert('Please assign the task to someone');
      return;
    }

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {task?.id ? 'Edit Task' : 'Create New Task'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Task Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
              placeholder="Enter task title..."
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
              placeholder="Enter task description..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Assignee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Assignee *
              </label>
              <div className="flex items-center gap-3">
                {formData.assignee.name && (
                  <div className={`w-8 h-8 rounded-full ${formData.assignee.color} flex items-center justify-center text-white text-sm font-medium`}>
                    {formData.assignee.avatar}
                  </div>
                )}
                <input
                  type="text"
                  value={formData.assignee.name}
                  onChange={(e) => handleAssigneeChange(e.target.value)}
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  placeholder="Enter assignee name..."
                  required
                />
              </div>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) => handleInputChange('priority', e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
              >
                {priorities.map(priority => (
                  <option key={priority.value} value={priority.value}>
                    {priority.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Due Date
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleInputChange('dueDate', e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
              />
            </div>

            {/* Story Points */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Story Points
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={formData.storyPoints}
                onChange={(e) => handleInputChange('storyPoints', parseInt(e.target.value))}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tags
            </label>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleTagRemove(tag)}
                      className="hover:text-primary-900 dark:hover:text-primary-100"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add a tag and press Enter..."
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleTagAdd(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
            >
              <Save size={16} />
              {task?.id ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
