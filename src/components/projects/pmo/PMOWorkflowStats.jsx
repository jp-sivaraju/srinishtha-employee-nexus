
import React from 'react';
import { Card } from '../../ui/Card';
import { FolderPlus, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const PMOWorkflowStats = () => {
  const workflowStats = {
    projectsInCreation: 3,
    pendingApprovals: 5,
    activeProjects: 12,
    completedThisMonth: 4
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{workflowStats.projectsInCreation}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">In Creation</div>
          </div>
          <FolderPlus className="h-8 w-8 text-blue-600" />
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{workflowStats.pendingApprovals}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Pending Approval</div>
          </div>
          <Clock className="h-8 w-8 text-amber-600" />
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{workflowStats.activeProjects}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Active Projects</div>
          </div>
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{workflowStats.completedThisMonth}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
          </div>
          <AlertTriangle className="h-8 w-8 text-purple-600" />
        </div>
      </Card>
    </div>
  );
};

export default PMOWorkflowStats;
