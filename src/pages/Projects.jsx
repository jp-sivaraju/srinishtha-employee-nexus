
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import ProjectDashboard from '../components/projects/ProjectDashboard';
import TasksBoard from '../components/projects/TasksBoard';
import ProjectDeliverables from '../components/projects/ProjectDeliverables';
import { useToast } from '../components/ui/Toast';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const { ToastContainer } = useToast();

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title="Projects & Tasks"
          description="Manage your projects, track tasks, and access deliverables"
          withParallax={true}
        />

        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'projects'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'tasks'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Tasks Board
              </button>
              <button
                onClick={() => setActiveTab('deliverables')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'deliverables'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Deliverables
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'projects' && <ProjectDashboard />}
        {activeTab === 'tasks' && <TasksBoard />}
        {activeTab === 'deliverables' && <ProjectDeliverables />}
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default Projects;
