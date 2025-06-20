
import React, { useState } from 'react';
import { BarChart2, Filter, Download, Workflow } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import PMOWorkflowDashboard from './PMOWorkflowDashboard';
import PMOKPICards from './pmo/PMOKPICards';
import PMOCharts from './pmo/PMOCharts';
import PMOProjectMetrics from './pmo/PMOProjectMetrics';

const PMODashboard = () => {
  const { showToast } = useToast();
  const [selectedTimeframe, setSelectedTimeframe] = useState('quarter');
  const [activeView, setActiveView] = useState('overview');

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
            onChange={link => setSelectedTimeframe(e.target.value)}
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

      <PMOKPICards />
      <PMOCharts />
      <PMOProjectMetrics />
    </div>
  );
};

export default PMODashboard;
