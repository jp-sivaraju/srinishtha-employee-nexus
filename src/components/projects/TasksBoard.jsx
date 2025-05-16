
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Search, 
  Plus,
  Filter,
  MoreVertical
} from 'lucide-react';
import { useToast } from '../ui/Toast';

const TasksBoard = () => {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Kanban board data
  const initialTasks = {
    todo: [
      { id: 't1', title: 'Design landing page wireframes', priority: 'high', assignee: 'Jane D.', project: 'Website Redesign' },
      { id: 't2', title: 'Create icon set for mobile app', priority: 'medium', assignee: 'Alex W.', project: 'Mobile App' },
      { id: 't3', title: 'Review competitor websites', priority: 'low', assignee: 'Mike S.', project: 'Website Redesign' },
    ],
    inProgress: [
      { id: 't4', title: 'Implement authentication flow', priority: 'high', assignee: 'Sam T.', project: 'Mobile App' },
      { id: 't5', title: 'Set up analytics tracking', priority: 'medium', assignee: 'Lisa M.', project: 'Dashboard' },
    ],
    review: [
      { id: 't6', title: 'User testing feedback incorporation', priority: 'high', assignee: 'Jane D.', project: 'Mobile App' },
      { id: 't7', title: 'Optimize page load performance', priority: 'medium', assignee: 'John D.', project: 'Website Redesign' },
    ],
    done: [
      { id: 't8', title: 'Requirement documentation', priority: 'high', assignee: 'Mike S.', project: 'Data Migration' },
      { id: 't9', title: 'Setup development environment', priority: 'medium', assignee: 'Alex W.', project: 'Dashboard' },
      { id: 't10', title: 'Initial project planning', priority: 'medium', assignee: 'Sam T.', project: 'Mobile App' },
    ]
  };
  
  const [tasks, setTasks] = useState(initialTasks);

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  
  const filterTasks = (tasks) => {
    if (!searchQuery) return tasks;
    
    const filtered = {};
    Object.keys(tasks).forEach(column => {
      filtered[column] = tasks[column].filter(
        task => 
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.assignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.project.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    
    return filtered;
  };
  
  const handleAddTask = () => {
    showToast('This would open the create task modal', 'info');
  };
  
  const handleDragStart = (e, id, fromColumn) => {
    e.dataTransfer.setData('taskId', id);
    e.dataTransfer.setData('fromColumn', fromColumn);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  const handleDrop = (e, toColumn) => {
    e.preventDefault();
    
    const taskId = e.dataTransfer.getData('taskId');
    const fromColumn = e.dataTransfer.getData('fromColumn');
    
    if (fromColumn === toColumn) return;
    
    // Find the task in the fromColumn
    const task = tasks[fromColumn].find(t => t.id === taskId);
    if (!task) return;
    
    // Remove from source and add to destination
    setTasks(prevTasks => ({
      ...prevTasks,
      [fromColumn]: prevTasks[fromColumn].filter(t => t.id !== taskId),
      [toColumn]: [...prevTasks[toColumn], task]
    }));
    
    showToast(`Task moved to ${toColumn.replace(/([A-Z])/g, ' $1').toLowerCase()}`, 'success');
  };
  
  const getColumnIcon = (column) => {
    switch (column) {
      case 'todo':
        return null;
      case 'inProgress':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'review':
        return <AlertTriangle className="h-4 w-4 text-blue-500" />;
      case 'done':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };
  
  const formatColumnName = (name) => {
    switch (name) {
      case 'todo':
        return 'To Do';
      case 'inProgress':
        return 'In Progress';
      case 'review':
        return 'Review';
      case 'done':
        return 'Done';
      default:
        return name;
    }
  };
  
  const filteredTasks = filterTasks(tasks);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Task Board</h2>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks, people, projects..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full md:w-64 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter size={18} className="text-gray-500 dark:text-gray-400" />
          </button>
          <button 
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
            onClick={handleAddTask}
          >
            <Plus size={16} />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Map through columns */}
        {Object.keys(tasks).map((columnKey) => (
          <div 
            key={columnKey} 
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, columnKey)}
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-750 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-800 dark:text-white flex items-center">
                  {getColumnIcon(columnKey)}
                  <span className="ml-2">{formatColumnName(columnKey)}</span>
                  <span className="ml-2 px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-300">
                    {filteredTasks[columnKey].length}
                  </span>
                </h3>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-3 min-h-[200px]" style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}>
              {filteredTasks[columnKey].map((task) => (
                <div 
                  key={task.id}
                  className="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer hover:shadow transition-all card-hover"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id, columnKey)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityClass(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {task.project}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-800 dark:text-white text-sm mb-2">{task.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-6 rounded-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-800 dark:text-primary-300 font-medium">
                      {task.assignee.split(' ')[0][0] + (task.assignee.split(' ')[1]?.[0] || '')}
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <CheckCircle size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredTasks[columnKey].length === 0 && (
                <div className="flex flex-col items-center justify-center h-20 text-center text-gray-500 dark:text-gray-400 text-sm border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4">
                  <span>No tasks</span>
                  <button className="mt-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 text-sm flex items-center">
                    <Plus size={14} className="mr-1" />
                    <span>Add task</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksBoard;
