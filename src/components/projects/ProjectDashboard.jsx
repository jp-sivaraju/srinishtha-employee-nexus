
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  Folder, 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  AlertTriangle, 
  CheckCircle,
  BarChart2,
  Plus,
  Filter
} from 'lucide-react';
import ProjectStatusChart from './ProjectStatusChart';
import TeamWorkloadChart from './TeamWorkloadChart';
import { useToast } from '../ui/Toast';

const ProjectDashboard = () => {
  const { showToast } = useToast();
  
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Redesign the company website with modern UI/UX',
      status: 'ongoing',
      progress: 65,
      deadline: 'June 10, 2025',
      team: ['Jane D.', 'Mike S.', 'Alex W.', 'Sam T.'],
      tasks: 24,
      completedTasks: 16
    },
    {
      id: 2,
      name: 'Mobile Application',
      description: 'Develop a new mobile app for client tracking',
      status: 'blocked',
      progress: 40,
      deadline: 'July 15, 2025',
      team: ['Alex W.', 'Sam T.', 'Lisa M.'],
      tasks: 18,
      completedTasks: 7,
      blockedReason: 'Waiting for API documentation from client'
    },
    {
      id: 3,
      name: 'Internal Dashboard',
      description: 'Create an analytics dashboard for management',
      status: 'completed',
      progress: 100,
      deadline: 'May 1, 2025',
      team: ['Mike S.', 'Lisa M.', 'John D.'],
      tasks: 15,
      completedTasks: 15
    },
    {
      id: 4,
      name: 'Data Migration',
      description: 'Migrate customer data to the new system',
      status: 'ongoing',
      progress: 30,
      deadline: 'August 20, 2025',
      team: ['John D.', 'Sarah L.', 'Jane D.'],
      tasks: 32,
      completedTasks: 10
    }
  ];

  const upcomingDeadlines = [
    { 
      id: 1,
      project: 'Website Redesign',
      task: 'Finalize homepage design',
      deadline: '2025-05-20',
      assignee: 'Jane D.'
    },
    { 
      id: 2, 
      project: 'Mobile Application',
      task: 'Complete authentication flow',
      deadline: '2025-05-22',
      assignee: 'Sam T.'
    },
    { 
      id: 3,
      project: 'Data Migration',
      task: 'Data validation procedures',
      deadline: '2025-05-25',
      assignee: 'John D.'
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'blocked':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleCreateProject = () => {
    showToast('This would open the create project modal', 'info');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const daysUntil = (dateString) => {
    const today = new Date();
    const deadline = new Date(dateString);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="lg:w-3/5 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Your Projects</h2>
            <div className="flex gap-3">
              <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                <Filter size={18} className="text-gray-500 dark:text-gray-400" />
              </button>
              <button 
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center gap-2"
                onClick={handleCreateProject}
              >
                <Plus size={16} />
                <span>New Project</span>
              </button>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <Card key={project.id} className="animate-on-scroll">
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{project.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {project.status === 'blocked' && (
                  <div className="flex items-center text-rose-600 dark:text-rose-400 text-sm mb-4">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    <span>{project.blockedReason}</span>
                  </div>
                )}

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Due: {project.deadline}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Tasks: {project.completedTasks}/{project.tasks}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, index) => (
                      <div 
                        key={index}
                        className="h-8 w-8 rounded-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center border-2 border-white dark:border-gray-800 text-xs text-primary-800 dark:text-primary-300 font-medium z-10"
                        style={{ zIndex: 10 - index }}
                      >
                        {member.split(' ')[0][0] + member.split(' ')[1][0]}
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div 
                        className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-2 border-white dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300"
                        style={{ zIndex: 10 - 3 }}
                      >
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                  <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                    View Details
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:w-2/5 space-y-6">
          <Card title="Project Status" icon={BarChart2}>
            <ProjectStatusChart />
          </Card>
          
          <Card title="Team Workload" icon={Users}>
            <TeamWorkloadChart />
          </Card>
          
          <Card title="Upcoming Deadlines" icon={Calendar}>
            <div className="space-y-3">
              {upcomingDeadlines.map((deadline) => {
                const days = daysUntil(deadline.deadline);
                const isUrgent = days <= 3;
                
                return (
                  <div 
                    key={deadline.id} 
                    className="flex items-start p-3 border-b last:border-0 border-gray-200 dark:border-gray-700"
                  >
                    <div className={`min-w-[3rem] w-12 h-12 rounded-md flex items-center justify-center mr-3 ${
                      isUrgent 
                        ? 'bg-rose-100 dark:bg-rose-900/30' 
                        : 'bg-amber-100 dark:bg-amber-900/30'
                    }`}>
                      <div className="text-center">
                        <div className={`text-sm font-bold ${
                          isUrgent 
                            ? 'text-rose-700 dark:text-rose-400' 
                            : 'text-amber-700 dark:text-amber-400'
                        }`}>
                          {days}
                        </div>
                        <div className={`text-xs ${
                          isUrgent 
                            ? 'text-rose-600 dark:text-rose-400' 
                            : 'text-amber-600 dark:text-amber-400'
                        }`}>
                          days
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        {deadline.task}
                      </h4>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>{deadline.project}</span>
                        <span className="mx-1">•</span>
                        <span>Due {formatDate(deadline.deadline)}</span>
                      </div>
                    </div>
                    
                    <div className="h-6 w-6 rounded-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-800 dark:text-primary-300 font-medium">
                      {deadline.assignee.split(' ')[0][0] + deadline.assignee.split(' ')[1][0]}
                    </div>
                  </div>
                );
              })}
              
              <button className="w-full mt-2 text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center justify-center py-1">
                <span>View all deadlines</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
