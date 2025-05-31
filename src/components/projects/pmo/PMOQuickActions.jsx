
import React from 'react';
import { Card } from '../../ui/Card';
import { Workflow, FolderPlus, Import, Download as ExportIcon, Settings } from 'lucide-react';
import { useToast } from '../../ui/Toast';

const PMOQuickActions = ({ onCreateProject, onShowImportExport }) => {
  const { showToast } = useToast();

  const quickActions = [
    {
      id: 'create',
      title: 'Create Project',
      description: 'Start a new project with PMP standard fields',
      icon: FolderPlus,
      color: 'bg-blue-500',
      action: onCreateProject
    },
    {
      id: 'import',
      title: 'Import Projects',
      description: 'Import from JIRA, Monday.com, or CSV files',
      icon: Import,
      color: 'bg-green-500',
      action: onShowImportExport
    },
    {
      id: 'export',
      title: 'Export Data',
      description: 'Export project data for reporting',
      icon: ExportIcon,
      color: 'bg-purple-500',
      action: onShowImportExport
    },
    {
      id: 'templates',
      title: 'Project Templates',
      description: 'Manage project templates and standards',
      icon: Settings,
      color: 'bg-orange-500',
      action: () => showToast('Project templates management coming soon!', 'info')
    }
  ];

  return (
    <Card title="Quick Actions" icon={Workflow}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={action.action}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
          >
            <div className="flex items-center mb-3">
              <div className={`p-2 ${action.color} rounded-lg mr-3`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">{action.title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{action.description}</p>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default PMOQuickActions;
