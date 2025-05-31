import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  Target, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  DollarSign, 
  Calendar,
  BarChart2,
  Filter,
  Download,
  Workflow,
  Settings
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useToast } from '../ui/Toast';
import PMOWorkflowDashboard from './PMOWorkflowDashboard';

const PMODashboard = () => {
  const { showToast } = useToast();
  const [selectedTimeframe, setSelectedTimeframe] = useState('quarter');
  const [activeView, setActiveView] = useState('overview');

  const scopeCreepData = [
    { month: 'Jan', originalScope: 100, currentScope: 105, budget: 95 },
    { month: 'Feb', originalScope: 100, currentScope: 108, budget: 92 },
    { month: 'Mar', originalScope: 100, currentScope: 115, budget: 88 },
    { month: 'Apr', originalScope: 100, currentScope: 118, budget: 85 },
    { month: 'May', originalScope: 100, currentScope: 125, budget: 80 },
  ];

  const scheduleData = [
    { week: 'W1', planned: 20, actual: 18 },
    { week: 'W2', planned: 40, actual: 35 },
    { week: 'W3', planned: 60, actual: 52 },
    { week: 'W4', planned: 80, actual: 68 },
    { week: 'W5', planned: 100, actual: 82 },
  ];

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

  const handleExportReport = () => {
    showToast('Exporting PMO report...', 'success');
  };

  if (activeView === 'workflows') {
    return <PMOWorkflowDashboard />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">PMO Dashboard</h2>
        <div className="flex gap-3">
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-md">
            <button
              onClick={() => setActiveView('overview')}
              className={`px-4 py-2 text-sm ${
                activeView === 'overview'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              } rounded-l-md`}
            >
              <BarChart2 size={16} className="inline mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveView('workflows')}
              className={`px-4 py-2 text-sm ${
                activeView === 'workflows'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              } rounded-r-md border-l border-gray-300 dark:border-gray-600`}
            >
              <Workflow size={16} className="inline mr-2" />
              Workflows
            </button>
          </div>
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
          >
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter size={18} className="text-gray-500 dark:text-gray-400" />
          </button>
          <button 
            onClick={handleExportReport}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
          >
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">12%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Avg Scope Creep</div>
            </div>
            <div className="flex items-center text-amber-600">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">9%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Schedule Slippage</div>
            </div>
            <div className="flex items-center text-rose-600">
              <TrendingDown className="h-6 w-6" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">7%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Budget Overrun</div>
            </div>
            <div className="flex items-center text-amber-600">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Critical Projects</div>
            </div>
            <div className="flex items-center text-rose-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Scope Creep Analysis" icon={Target}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={scopeCreepData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="originalScope" stackId="1" stroke="#6366F1" fill="#6366F1" fillOpacity={0.3} />
                <Area type="monotone" dataKey="currentScope" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Schedule Performance" icon={Calendar}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scheduleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="planned" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="actual" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Project Metrics Table */}
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
    </div>
  );
};

export default PMODashboard;
