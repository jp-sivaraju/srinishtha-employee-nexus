
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import ProjectDashboard from '../components/projects/ProjectDashboard';
import TasksBoard from '../components/projects/TasksBoard';
import ProjectDeliverables from '../components/projects/ProjectDeliverables';
import TimesheetModule from '../components/projects/TimesheetModule';
import PMODashboard from '../components/projects/PMODashboard';
import ProjectIntegrations from '../components/projects/ProjectIntegrations';
import ImportExportModule from '../components/projects/ImportExportModule';
import { useToast } from '@/hooks/use-toast';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const { showToast, ToastContainer } = useToast();

  const tabs = [
    { id: 'projects', label: 'Projects', component: ProjectDashboard },
    { id: 'tasks', label: 'Tasks Board', component: TasksBoard },
    { id: 'deliverables', label: 'Deliverables', component: ProjectDeliverables },
    { id: 'timesheets', label: 'Timesheets', component: TimesheetModule },
    { id: 'pmo', label: 'PMO Dashboard', component: PMODashboard },
    { id: 'integrations', label: 'Integrations', component: ProjectIntegrations },
    { id: 'import-export', label: 'Import/Export', component: ImportExportModule }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || ProjectDashboard;

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title="Project Management Hub"
          description="World-class project management with JIRA-like features, integrations, and PMO tracking"
          withParallax={true}
        />

        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <ActiveComponent />
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default Projects;
