
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Folder, Calendar, Clock, Users, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const { showToast, ToastContainer } = useToast();

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

  // Kanban board data
  const tasks = {
    todo: [
      { id: 't1', title: 'Design landing page wireframes', priority: 'high', assignee: 'Jane D.' },
      { id: 't2', title: 'Create icon set for mobile app', priority: 'medium', assignee: 'Alex W.' },
      { id: 't3', title: 'Review competitor websites', priority: 'low', assignee: 'Mike S.' },
    ],
    inProgress: [
      { id: 't4', title: 'Implement authentication flow', priority: 'high', assignee: 'Sam T.' },
      { id: 't5', title: 'Set up analytics tracking', priority: 'medium', assignee: 'Lisa M.' },
    ],
    review: [
      { id: 't6', title: 'User testing feedback incorporation', priority: 'high', assignee: 'Jane D.' },
      { id: 't7', title: 'Optimize page load performance', priority: 'medium', assignee: 'John D.' },
    ],
    done: [
      { id: 't8', title: 'Requirement documentation', priority: 'high', assignee: 'Mike S.' },
      { id: 't9', title: 'Setup development environment', priority: 'medium', assignee: 'Alex W.' },
      { id: 't10', title: 'Initial project planning', priority: 'medium', assignee: 'Sam T.' },
    ]
  };

  // Deliverables data
  const deliverables = [
    { id: 'd1', name: 'Project Requirements Doc', type: 'PDF', size: '2.4 MB', updatedAt: '2025-04-28', updatedBy: 'Mike S.' },
    { id: 'd2', name: 'Brand Guidelines', type: 'PDF', size: '5.7 MB', updatedAt: '2025-04-25', updatedBy: 'Jane D.' },
    { id: 'd3', name: 'UI Design Mockups', type: 'Figma', size: '---', updatedAt: '2025-05-02', updatedBy: 'Alex W.' },
    { id: 'd4', name: 'API Documentation', type: 'Markdown', size: '1.2 MB', updatedAt: '2025-04-30', updatedBy: 'Sam T.' },
    { id: 'd5', name: 'Project Timeline', type: 'Excel', size: '1.8 MB', updatedAt: '2025-05-01', updatedBy: 'Lisa M.' }
  ];

  const handleUpload = () => {
    showToast('File uploaded successfully!', 'success');
  };

  const handleDownload = (name) => {
    showToast(`Downloading ${name}...`, 'info');
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

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

  const getFileTypeClass = (type) => {
    switch (type) {
      case 'PDF':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      case 'Figma':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Excel':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Markdown':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

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

        {activeTab === 'projects' && (
          <div className="grid gap-6 mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Your Projects</h2>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                New Project
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {projects.map((project) => (
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
        )}

        {activeTab === 'tasks' && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Kanban Board</h2>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Add Task
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* To Do Column */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-750 rounded-t-lg">
                  <h3 className="font-medium text-gray-800 dark:text-white flex items-center">
                    To Do <span className="ml-2 px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-300">{tasks.todo.length}</span>
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {tasks.todo.map((task) => (
                    <div 
                      key={task.id}
                      className="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer hover:shadow transition-all card-hover"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white text-sm mb-2">{task.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityClass(task.priority)}`}>
                          {task.priority}
                        </span>
                        <div className="h-6 w-6 rounded-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-800 dark:text-primary-300 font-medium">
                          {task.assignee.split(' ')[0][0] + (task.assignee.split(' ')[1]?.[0] || '')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* In Progress Column */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-750 rounded-t-lg">
                  <h3 className="font-medium text-gray-800 dark:text-white flex items-center">
                    In Progress <span className="ml-2 px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-300">{tasks.inProgress.length}</span>
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {tasks.inProgress.map((task) => (
                    <div 
                      key={task.id}
                      className="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer hover:shadow transition-all card-hover"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white text-sm mb-2">{task.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityClass(task.priority)}`}>
                          {task.priority}
                        </span>
                        <div className="h-6 w-6 rounded-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-800 dark:text-primary-300 font-medium">
                          {task.assignee.split(' ')[0][0] + (task.assignee.split(' ')[1]?.[0] || '')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Column */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-750 rounded-t-lg">
                  <h3 className="font-medium text-gray-800 dark:text-white flex items-center">
                    Review <span className="ml-2 px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-300">{tasks.review.length}</span>
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {tasks.review.map((task) => (
                    <div 
                      key={task.id}
                      className="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer hover:shadow transition-all card-hover"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white text-sm mb-2">{task.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityClass(task.priority)}`}>
                          {task.priority}
                        </span>
                        <div className="h-6 w-6 rounded-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-800 dark:text-primary-300 font-medium">
                          {task.assignee.split(' ')[0][0] + (task.assignee.split(' ')[1]?.[0] || '')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Done Column */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-750 rounded-t-lg">
                  <h3 className="font-medium text-gray-800 dark:text-white flex items-center">
                    Done <span className="ml-2 px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-300">{tasks.done.length}</span>
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  {tasks.done.map((task) => (
                    <div 
                      key={task.id}
                      className="bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 cursor-pointer hover:shadow transition-all card-hover"
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white text-sm mb-2">{task.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityClass(task.priority)}`}>
                          {task.priority}
                        </span>
                        <div className="h-6 w-6 rounded-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-800 dark:text-primary-300 font-medium">
                          {task.assignee.split(' ')[0][0] + (task.assignee.split(' ')[1]?.[0] || '')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'deliverables' && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Client Deliverables</h2>
              <button 
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                onClick={handleUpload}
              >
                Upload File
              </button>
            </div>

            <Card icon={FileText} animateOnScroll={true}>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Size
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Updated
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        By
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {deliverables.map((file) => (
                      <tr
                        key={file.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gray-500 mr-3" />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{file.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs ${getFileTypeClass(file.type)}`}>
                            {file.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {file.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {file.updatedAt}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {file.updatedBy}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button
                            className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300"
                            onClick={() => handleDownload(file.name)}
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default Projects;
