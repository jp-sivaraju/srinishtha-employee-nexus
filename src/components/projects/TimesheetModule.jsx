
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Clock, Calendar, Plus, Filter, Download, Upload, User, CheckCircle } from 'lucide-react';
import { useToast } from '../ui/Toast';

const TimesheetModule = () => {
  const { showToast } = useToast();
  const [selectedWeek, setSelectedWeek] = useState('2025-05-26');
  const [selectedProject, setSelectedProject] = useState('all');

  const timesheetEntries = [
    { id: 1, date: '2025-05-26', project: 'Website Redesign', task: 'Homepage Design', hours: 8.0, status: 'submitted', user: 'Jane D.' },
    { id: 2, date: '2025-05-27', project: 'Mobile App', task: 'Authentication Flow', hours: 6.5, status: 'draft', user: 'Sam T.' },
    { id: 3, date: '2025-05-28', project: 'Data Migration', task: 'Database Schema Review', hours: 4.0, status: 'approved', user: 'John D.' },
    { id: 4, date: '2025-05-29', project: 'Website Redesign', task: 'UI Components', hours: 7.5, status: 'submitted', user: 'Alex W.' },
    { id: 5, date: '2025-05-30', project: 'Dashboard', task: 'Analytics Integration', hours: 5.0, status: 'draft', user: 'Lisa M.' },
  ];

  const projects = ['Website Redesign', 'Mobile App', 'Data Migration', 'Dashboard'];

  const getStatusClass = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'submitted':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'draft':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleAddEntry = () => {
    showToast('Add timesheet entry modal would open here', 'info');
  };

  const handleExport = () => {
    showToast('Exporting timesheet data...', 'success');
  };

  const handleImport = () => {
    showToast('Import timesheet data functionality would open here', 'info');
  };

  const totalHours = timesheetEntries
    .filter(entry => selectedProject === 'all' || entry.project === selectedProject)
    .reduce((sum, entry) => sum + entry.hours, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Timesheet Management</h2>
        <div className="flex gap-3">
          <button 
            onClick={handleImport}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <Upload size={16} />
            <span>Import</span>
          </button>
          <button 
            onClick={handleExport}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
          <button 
            onClick={handleAddEntry}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
          >
            <Plus size={16} />
            <span>Add Entry</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-primary-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{totalHours}h</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Hours This Week</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {timesheetEntries.filter(e => e.status === 'approved').length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Approved Entries</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <User className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {new Set(timesheetEntries.map(e => e.user)).size}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Active Users</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <input
            type="week"
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
          />
        </div>
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
        >
          <option value="all">All Projects</option>
          {projects.map(project => (
            <option key={project} value={project}>{project}</option>
          ))}
        </select>
        <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
          <Filter size={18} className="text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      <Card icon={Clock} animateOnScroll={true}>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {timesheetEntries
                .filter(entry => selectedProject === 'all' || entry.project === selectedProject)
                .map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {new Date(entry.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{entry.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{entry.task}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{entry.hours}h</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{entry.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(entry.status)}`}>
                      {entry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 mr-2">
                      Edit
                    </button>
                    <button className="text-rose-600 dark:text-rose-400 hover:text-rose-900 dark:hover:text-rose-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default TimesheetModule;
