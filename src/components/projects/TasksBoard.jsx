
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  Calendar, 
  BarChart3, 
  Users, 
  Settings,
  Kanban
} from 'lucide-react';
import KanbanBoard from './kanban/KanbanBoard';
import ProjectTimeline from './timeline/ProjectTimeline';
import ProjectAnalyticsDashboard from './analytics/ProjectAnalyticsDashboard';
import CollaborationPanel from './collaboration/CollaborationPanel';

const TasksBoard = () => {
  const [activeView, setActiveView] = useState('kanban');
  const [showCollaboration, setShowCollaboration] = useState(false);

  const views = [
    { id: 'kanban', label: 'Kanban Board', icon: Kanban, component: KanbanBoard },
    { id: 'timeline', label: 'Timeline', icon: Calendar, component: ProjectTimeline },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, component: ProjectAnalyticsDashboard }
  ];

  const ActiveComponent = views.find(view => view.id === activeView)?.component || KanbanBoard;

  return (
    <div className="space-y-6 relative">
      {/* View Selector */}
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-md">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`px-4 py-2 text-sm flex items-center gap-2 ${
                  activeView === view.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                } first:rounded-l-md last:rounded-r-md border-r last:border-r-0 border-gray-300 dark:border-gray-600`}
              >
                <view.icon size={16} />
                {view.label}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setShowCollaboration(!showCollaboration)}
              className={`px-4 py-2 text-sm flex items-center gap-2 border rounded-md ${
                showCollaboration
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Users size={16} />
              Collaboration
            </button>
            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
              <Settings size={16} />
            </button>
          </div>
        </div>
      </Card>

      {/* Active View */}
      <ActiveComponent />

      {/* Collaboration Panel */}
      <CollaborationPanel 
        isOpen={showCollaboration}
        onClose={() => setShowCollaboration(false)}
        taskId={null}
      />
    </div>
  );
};

export default TasksBoard;
