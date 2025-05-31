
import React from 'react';
import { Card } from '../../ui/Card';
import { BarChart2, AlertTriangle } from 'lucide-react';

const PMOProjectMetrics = () => {
  const projectMetrics = [
    { 
      id: 1, 
      name: 'Website Redesign', 
      scopeCreep: 15, 
      scheduleSlippage: 12, 
      budgetOverrun: 8, 
      status: 'at-risk',
      originalBudget: 150000,
      currentBudget: 162000
    },
    { 
      id: 2, 
      name: 'Mobile App', 
      scopeCreep: 25, 
      scheduleSlippage: 18, 
      budgetOverrun: 15, 
      status: 'critical',
      originalBudget: 200000,
      currentBudget: 230000
    },
    { 
      id: 3, 
      name: 'Data Migration', 
      scopeCreep: 5, 
      scheduleSlippage: 3, 
      budgetOverrun: 2, 
      status: 'on-track',
      originalBudget: 80000,
      currentBudget: 82000
    },
    { 
      id: 4, 
      name: 'Dashboard', 
      scopeCreep: 8, 
      scheduleSlippage: 5, 
      budgetOverrun: 3, 
      status: 'on-track',
      originalBudget: 120000,
      currentBudget: 124000
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'at-risk':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'critical':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <Card title="Project Health Metrics" icon={BarChart2} animateOnScroll={true}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Scope Creep</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Schedule Slippage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Budget Overrun</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Budget Impact</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {projectMetrics.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {project.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  <div className="flex items-center">
                    <span className={`mr-2 ${project.scopeCreep > 15 ? 'text-rose-600' : project.scopeCreep > 10 ? 'text-amber-600' : 'text-green-600'}`}>
                      {project.scopeCreep}%
                    </span>
                    {project.scopeCreep > 15 && <AlertTriangle className="h-4 w-4 text-rose-600" />}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  <div className="flex items-center">
                    <span className={`mr-2 ${project.scheduleSlippage > 15 ? 'text-rose-600' : project.scheduleSlippage > 10 ? 'text-amber-600' : 'text-green-600'}`}>
                      {project.scheduleSlippage}%
                    </span>
                    {project.scheduleSlippage > 15 && <AlertTriangle className="h-4 w-4 text-rose-600" />}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  <div className="flex items-center">
                    <span className={`mr-2 ${project.budgetOverrun > 10 ? 'text-rose-600' : project.budgetOverrun > 5 ? 'text-amber-600' : 'text-green-600'}`}>
                      {project.budgetOverrun}%
                    </span>
                    {project.budgetOverrun > 10 && <AlertTriangle className="h-4 w-4 text-rose-600" />}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  <div>
                    <div className="text-sm">${project.currentBudget.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">
                      (${(project.currentBudget - project.originalBudget).toLocaleString()} over)
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 mr-2">
                    Details
                  </button>
                  <button className="text-amber-600 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300">
                    Escalate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default PMOProjectMetrics;
