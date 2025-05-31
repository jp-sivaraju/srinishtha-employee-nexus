
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  GitBranch, 
  Bug, 
  MessageSquare, 
  Plus, 
  Settings, 
  CheckCircle, 
  XCircle, 
  Clock,
  ExternalLink,
  Webhook,
  Database
} from 'lucide-react';
import { useToast } from '../ui/Toast';

const ProjectIntegrations = () => {
  const { showToast } = useToast();

  const integrations = [
    {
      id: 1,
      name: 'GitHub',
      type: 'repository',
      status: 'connected',
      description: 'Source code repository management',
      icon: GitBranch,
      lastSync: '2 minutes ago',
      repositories: ['frontend-app', 'backend-api', 'mobile-app']
    },
    {
      id: 2,
      name: 'JIRA',
      type: 'qa',
      status: 'connected',
      description: 'Issue tracking and project management',
      icon: Bug,
      lastSync: '5 minutes ago',
      projects: ['WEB-123', 'MOB-456', 'API-789']
    },
    {
      id: 3,
      name: 'Slack',
      type: 'communication',
      status: 'connected',
      description: 'Team communication and notifications',
      icon: MessageSquare,
      lastSync: '1 minute ago',
      channels: ['#development', '#qa-reviews', '#project-updates']
    },
    {
      id: 4,
      name: 'Bitbucket',
      type: 'repository',
      status: 'disconnected',
      description: 'Alternative repository hosting',
      icon: GitBranch,
      lastSync: 'Never',
      repositories: []
    },
    {
      id: 5,
      name: 'Azure DevOps',
      type: 'qa',
      status: 'pending',
      description: 'Microsoft DevOps platform',
      icon: Database,
      lastSync: 'Configuring...',
      projects: []
    }
  ];

  const qaReviews = [
    {
      id: 1,
      title: 'Homepage UI Review',
      project: 'Website Redesign',
      reviewer: 'Sarah L.',
      status: 'approved',
      date: '2025-05-30',
      comments: 3
    },
    {
      id: 2,
      title: 'Authentication Flow Testing',
      project: 'Mobile App',
      reviewer: 'Mike S.',
      status: 'needs-changes',
      date: '2025-05-29',
      comments: 7
    },
    {
      id: 3,
      title: 'API Integration Review',
      project: 'Data Migration',
      reviewer: 'Alex W.',
      status: 'in-review',
      date: '2025-05-28',
      comments: 2
    }
  ];

  const repositories = [
    {
      id: 1,
      name: 'srinishtha-frontend',
      provider: 'GitHub',
      lastCommit: '2 hours ago',
      branch: 'main',
      commits: 145,
      contributors: 4
    },
    {
      id: 2,
      name: 'srinishtha-backend',
      provider: 'GitHub',
      lastCommit: '4 hours ago',
      branch: 'develop',
      commits: 89,
      contributors: 3
    },
    {
      id: 3,
      name: 'mobile-app-repo',
      provider: 'GitHub',
      lastCommit: '1 day ago',
      branch: 'feature/auth',
      commits: 67,
      contributors: 2
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'disconnected':
        return <XCircle className="h-5 w-5 text-rose-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-amber-600" />;
      default:
        return <XCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getReviewStatusClass = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'needs-changes':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      case 'in-review':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleAddIntegration = () => {
    showToast('Add integration modal would open here', 'info');
  };

  const handleConfigureIntegration = (name) => {
    showToast(`Configure ${name} integration`, 'info');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Project Integrations</h2>
        <button 
          onClick={handleAddIntegration}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
        >
          <Plus size={16} />
          <span>Add Integration</span>
        </button>
      </div>

      {/* Integration Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <Card key={integration.id} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <integration.icon className="h-6 w-6 text-primary-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{integration.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{integration.type}</p>
                </div>
              </div>
              {getStatusIcon(integration.status)}
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{integration.description}</p>
            
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Last sync: {integration.lastSync}
            </div>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={() => handleConfigureIntegration(integration.name)}
                className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 flex items-center"
              >
                <Settings size={14} className="mr-1" />
                Configure
              </button>
              <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
                <ExternalLink size={14} className="mr-1" />
                Open
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* QA Reviews and Repository Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="QA Reviews" icon={Bug} animateOnScroll={true}>
          <div className="space-y-4">
            {qaReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{review.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${getReviewStatusClass(review.status)}`}>
                    {review.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {review.project} • Reviewed by {review.reviewer}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{review.date}</span>
                  <span>{review.comments} comments</span>
                </div>
              </div>
            ))}
            <button className="w-full text-sm text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 py-2">
              View all reviews
            </button>
          </div>
        </Card>

        <Card title="Connected Repositories" icon={GitBranch} animateOnScroll={true}>
          <div className="space-y-4">
            {repositories.map((repo) => (
              <div key={repo.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{repo.name}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{repo.provider}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div>Branch: {repo.branch}</div>
                  <div>Commits: {repo.commits}</div>
                  <div>Last commit: {repo.lastCommit}</div>
                  <div>Contributors: {repo.contributors}</div>
                </div>
              </div>
            ))}
            <button className="w-full text-sm text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 py-2">
              Connect more repositories
            </button>
          </div>
        </Card>
      </div>

      {/* Webhook Configuration */}
      <Card title="Webhook Configuration" icon={Webhook} animateOnScroll={true}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">GitHub Webhooks</h4>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Automatically sync commits, pull requests, and issues
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-green-600">Active</span>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">JIRA Webhooks</h4>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Sync issue updates and status changes
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-green-600">Active</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
              Add Webhook
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
              Test Connection
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectIntegrations;
