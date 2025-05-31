
import React from 'react';
import { Card } from '../../ui/Card';
import { Clock, FolderPlus, Import, Download as ExportIcon, CheckCircle } from 'lucide-react';

const PMORecentActivities = () => {
  const recentActivities = [
    {
      id: 1,
      type: 'project_created',
      title: 'New project "Mobile App Redesign" created',
      user: 'Sarah Johnson',
      timestamp: '2 hours ago',
      status: 'completed'
    },
    {
      id: 2,
      type: 'import_completed',
      title: 'JIRA import completed - 15 projects imported',
      user: 'System',
      timestamp: '4 hours ago',
      status: 'completed'
    },
    {
      id: 3,
      type: 'approval_pending',
      title: 'Project "Website Rebuild" pending approval',
      user: 'Mike Chen',
      timestamp: '6 hours ago',
      status: 'pending'
    },
    {
      id: 4,
      type: 'export_generated',
      title: 'Monthly PMO report exported',
      user: 'Lisa Wang',
      timestamp: '1 day ago',
      status: 'completed'
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'project_created':
        return <FolderPlus className="h-5 w-5 text-blue-600" />;
      case 'import_completed':
        return <Import className="h-5 w-5 text-green-600" />;
      case 'export_generated':
        return <ExportIcon className="h-5 w-5 text-purple-600" />;
      case 'approval_pending':
        return <Clock className="h-5 w-5 text-amber-600" />;
      default:
        return <CheckCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'pending':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'failed':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <Card title="Recent Workflow Activities" icon={Clock}>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between p-3 border-b last:border-0 border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="mr-3">
                {getActivityIcon(activity.type)}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </h4>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.user} • {activity.timestamp}
                </div>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadge(activity.status)}`}>
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PMORecentActivities;
