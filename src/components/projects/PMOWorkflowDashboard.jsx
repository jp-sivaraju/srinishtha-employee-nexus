import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  Plus, 
  Upload, 
  Download, 
  Settings, 
  FolderPlus, 
  Import, 
  Download as ExportIcon,
  Workflow,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';
import ProjectCreationForm from './ProjectCreationForm';
import ProjectImportExportWorkflow from './ProjectImportExportWorkflow';
import { useToast } from '../ui/Toast';

const PMOWorkflowDashboard = () => {
  const { showToast } = useToast();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showImportExport, setShowImportExport] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const workflowStats = {
    projectsInCreation: 3,
    pendingApprovals: 5,
    activeProjects: 12,
    completedThisMonth: 4
  };

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

  const quickActions = [
    {
      id: 'create',
      title: 'Create Project',
      description: 'Start a new project with PMP standard fields',
      icon: FolderPlus,
      color: 'bg-blue-500',
      action: () => setShowCreateForm(true)
    },
    {
      id: 'import',
      title: 'Import Projects',
      description: 'Import from JIRA, Monday.com, or CSV files',
      icon: Import,
      color: 'bg-green-500',
      action: () => setShowImportExport(true)
    },
    {
      id: 'export',
      title: 'Export Data',
      description: 'Export project data for reporting',
      icon: ExportIcon,
      color: 'bg-purple-500',
      action: () => setShowImportExport(true)
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

  const handleProjectSave = (projectData) => {
    console.log('Saving project:', projectData);
    showToast('Project saved successfully!', 'success');
    setShowCreateForm(false);
    setEditProject(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">PMO Workflow Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage project workflows, creation, and data operations</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowImportExport(true)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <Workflow size={16} />
            Import/Export
          </button>
          <button 
            onClick={() => setShowCreateForm(true)}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
          >
            <Plus size={16} />
            New Project
          </button>
        </div>
      </div>

      {/* Workflow Stats */}
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

      {/* Quick Actions */}
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

      {/* Recent Activities */}
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

      {/* Modals */}
      {showCreateForm && (
        <ProjectCreationForm
          onClose={() => {
            setShowCreateForm(false);
            setEditProject(null);
          }}
          onSave={handleProjectSave}
          editProject={editProject}
        />
      )}

      {showImportExport && (
        <ProjectImportExportWorkflow
          onClose={() => setShowImportExport(false)}
        />
      )}
    </div>
  );
};

export default PMOWorkflowDashboard;
