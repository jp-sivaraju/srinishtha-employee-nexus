
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  Upload, 
  Download, 
  FileText, 
  Database, 
  Settings, 
  CheckCircle,
  Clock,
  AlertTriangle,
  Archive
} from 'lucide-react';
import { useToast } from '../ui/Toast';

const ImportExportModule = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('import');

  const importHistory = [
    {
      id: 1,
      filename: 'project-data-export.csv',
      type: 'CSV',
      status: 'completed',
      importedAt: '2025-05-30 14:30',
      records: 145,
      source: 'JIRA'
    },
    {
      id: 2,
      filename: 'timesheet-data.xlsx',
      type: 'Excel',
      status: 'processing',
      importedAt: '2025-05-30 14:25',
      records: 67,
      source: 'Manual Upload'
    },
    {
      id: 3,
      filename: 'tasks-export.json',
      type: 'JSON',
      status: 'failed',
      importedAt: '2025-05-30 14:20',
      records: 0,
      source: 'monday.com',
      error: 'Invalid JSON format'
    }
  ];

  const exportTemplates = [
    {
      id: 1,
      name: 'Project Summary Report',
      description: 'Complete project overview with tasks, timelines, and budgets',
      format: 'PDF',
      icon: FileText,
      lastGenerated: '2025-05-29'
    },
    {
      id: 2,
      name: 'Timesheet Export',
      description: 'Detailed timesheet data for payroll and billing',
      format: 'Excel',
      icon: Clock,
      lastGenerated: '2025-05-30'
    },
    {
      id: 3,
      name: 'Task Data Export',
      description: 'All task data in structured format for external tools',
      format: 'CSV',
      icon: Database,
      lastGenerated: '2025-05-28'
    },
    {
      id: 4,
      name: 'PMO Dashboard Data',
      description: 'Project metrics and KPIs for executive reporting',
      format: 'JSON',
      icon: Settings,
      lastGenerated: '2025-05-27'
    }
  ];

  const supportedFormats = [
    { format: 'CSV', description: 'Comma-separated values for spreadsheet import' },
    { format: 'Excel', description: 'Microsoft Excel format (.xlsx, .xls)' },
    { format: 'JSON', description: 'JavaScript Object Notation for API integration' },
    { format: 'PDF', description: 'Portable Document Format for reports' },
    { format: 'XML', description: 'Extensible Markup Language for structured data' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-blue-600" />;
      case 'failed':
        return <AlertTriangle className="h-5 w-5 text-rose-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'processing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'failed':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleFileImport = () => {
    showToast('File import dialog would open here', 'info');
  };

  const handleExportGenerate = (templateName) => {
    showToast(`Generating ${templateName}...`, 'success');
  };

  const handleBulkImport = () => {
    showToast('Bulk import functionality would open here', 'info');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Import / Export</h2>
        <div className="flex gap-3">
          <button 
            onClick={handleBulkImport}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <Archive size={16} />
            <span>Bulk Import</span>
          </button>
          <button 
            onClick={handleFileImport}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
          >
            <Upload size={16} />
            <span>Import Data</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('import')}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'import'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Import Data
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'export'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Export Data
          </button>
          <button
            onClick={() => setActiveTab('formats')}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === 'formats'
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Supported Formats
          </button>
        </nav>
      </div>

      {/* Import Tab */}
      {activeTab === 'import' && (
        <div className="space-y-6">
          <Card title="Recent Imports" icon={Upload} animateOnScroll={true}>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">File</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Records</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Source</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Date</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {importHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-500 mr-3" />
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.filename}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getStatusIcon(item.status)}
                          <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getStatusClass(item.status)}`}>
                            {item.status}
                          </span>
                        </div>
                        {item.error && (
                          <div className="text-xs text-rose-600 mt-1">{item.error}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.records}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.source}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{item.importedAt}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <button className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 mr-2">
                          View Details
                        </button>
                        {item.status === 'failed' && (
                          <button className="text-amber-600 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300">
                            Retry
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* Export Tab */}
      {activeTab === 'export' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exportTemplates.map((template) => (
              <Card key={template.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <template.icon className="h-8 w-8 text-primary-600 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{template.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{template.description}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded">
                    {template.format}
                  </span>
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Last generated: {template.lastGenerated}
                </div>
                
                <button 
                  onClick={() => handleExportGenerate(template.name)}
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  <span>Generate Export</span>
                </button>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Supported Formats Tab */}
      {activeTab === 'formats' && (
        <div className="space-y-6">
          <Card title="Supported File Formats" icon={Settings} animateOnScroll={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportedFormats.map((format, index) => (
                <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">{format.format}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{format.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Integration Guidelines" icon={FileText} animateOnScroll={true}>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">JIRA Import</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Export your JIRA issues as CSV or XML. Ensure fields include: Summary, Description, Status, Assignee, Priority, Created Date.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">monday.com Import</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use the monday.com API or export boards as Excel files. Map columns to our task fields during import.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">GitHub Integration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connect via webhooks for real-time sync or export repository data as JSON for batch import.
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ImportExportModule;
