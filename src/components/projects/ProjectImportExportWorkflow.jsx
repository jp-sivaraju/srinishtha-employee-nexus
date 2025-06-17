
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { 
  Upload, 
  Download, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  X,
  ArrowRight,
  Database,
  Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const ProjectImportExportWorkflow = ({ onClose }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('import');
  const [importStep, setImportStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [mappingData, setMappingData] = useState({});
  const [exportOptions, setExportOptions] = useState({
    format: 'json',
    includeFields: {
      basic: true,
      stakeholders: true,
      timeline: true,
      budget: true,
      scope: true,
      risks: true,
      tasks: false,
      documents: false
    }
  });

  const supportedFormats = [
    {
      format: 'JSON',
      description: 'JavaScript Object Notation - Best for API integration',
      extension: '.json',
      icon: Database
    },
    {
      format: 'CSV',
      description: 'Comma Separated Values - Excel compatible',
      extension: '.csv',
      icon: FileText
    },
    {
      format: 'Excel',
      description: 'Microsoft Excel format',
      extension: '.xlsx',
      icon: FileText
    },
    {
      format: 'JIRA',
      description: 'JIRA project export format',
      extension: '.xml',
      icon: Settings
    },
    {
      format: 'Monday.com',
      description: 'Monday.com board export',
      extension: '.json',
      icon: Database
    }
  ];

  const fieldMappings = [
    { source: 'Name', target: 'projectName', required: true },
    { source: 'Key', target: 'projectCode', required: true },
    { source: 'Description', target: 'description', required: false },
    { source: 'Lead', target: 'projectManager', required: true },
    { source: 'Start Date', target: 'startDate', required: false },
    { source: 'End Date', target: 'endDate', required: false },
    { source: 'Priority', target: 'priority', required: false },
    { source: 'Type', target: 'projectType', required: false }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImportStep(2);
      showToast(`File "${file.name}" uploaded successfully`, 'success');
    }
  };

  const handleMappingChange = (sourceField, targetField) => {
    setMappingData(prev => ({
      ...prev,
      [sourceField]: targetField
    }));
  };

  const validateMapping = () => {
    const requiredFields = fieldMappings.filter(f => f.required);
    const mappedRequiredFields = requiredFields.filter(f => mappingData[f.source]);
    
    if (mappedRequiredFields.length !== requiredFields.length) {
      showToast('Please map all required fields', 'error');
      return false;
    }
    return true;
  };

  const processImport = () => {
    if (!validateMapping()) return;
    
    setImportStep(3);
    
    // Simulate processing
    setTimeout(() => {
      setImportStep(4);
      showToast('Project import completed successfully!', 'success');
    }, 2000);
  };

  const handleExport = () => {
    const selectedFields = Object.entries(exportOptions.includeFields)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    
    showToast(`Exporting projects as ${exportOptions.format.toUpperCase()} with ${selectedFields.length} field groups`, 'success');
  };

  const resetImport = () => {
    setImportStep(1);
    setSelectedFile(null);
    setMappingData({});
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Project Import / Export Workflow
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Tab Navigation */}
          <div className="mt-4 border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('import')}
                className={`py-2 px-4 font-medium text-sm border-b-2 ${
                  activeTab === 'import'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Import Projects
              </button>
              <button
                onClick={() => setActiveTab('export')}
                className={`py-2 px-4 font-medium text-sm border-b-2 ${
                  activeTab === 'export'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Export Projects
              </button>
            </nav>
          </div>
        </div>

        <div className="p-6">
          {/* Import Tab */}
          {activeTab === 'import' && (
            <div className="space-y-6">
              {/* Import Progress */}
              <div className="flex items-center justify-between mb-6">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      importStep >= step 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                    }`}>
                      {importStep > step ? <CheckCircle size={16} /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`w-16 h-0.5 mx-2 ${
                        importStep > step ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: File Upload */}
              {importStep === 1 && (
                <Card title="Step 1: Select Import File" icon={Upload}>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Choose a file to import
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Supported formats: JSON, CSV, Excel, JIRA XML, Monday.com JSON
                      </div>
                      <label className="cursor-pointer bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 inline-block">
                        <input
                          type="file"
                          className="hidden"
                          accept=".json,.csv,.xlsx,.xls,.xml"
                          onChange={handleFileUpload}
                        />
                        Select File
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {supportedFormats.map((format, index) => (
                        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div className="flex items-center mb-2">
                            <format.icon className="h-5 w-5 text-primary-600 mr-2" />
                            <span className="font-medium">{format.format}</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{format.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              {/* Step 2: Field Mapping */}
              {importStep === 2 && (
                <Card title="Step 2: Map Fields" icon={ArrowRight}>
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <div className="text-sm text-blue-800 dark:text-blue-200">
                        File: <span className="font-medium">{selectedFile?.name}</span>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                              Source Field
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                              Target Field
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                              Required
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                          {fieldMappings.map((mapping, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                {mapping.source}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <select
                                  value={mappingData[mapping.source] || ''}
                                  onChange={(e) => handleMappingChange(mapping.source, e.target.value)}
                                  className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 bg-white dark:bg-gray-800"
                                >
                                  <option value="">Select target field</option>
                                  <option value={mapping.target}>{mapping.target}</option>
                                </select>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {mapping.required ? (
                                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full dark:bg-red-900/30 dark:text-red-300">
                                    Required
                                  </span>
                                ) : (
                                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full dark:bg-gray-700 dark:text-gray-300">
                                    Optional
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={resetImport}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        Back
                      </button>
                      <button
                        onClick={processImport}
                        className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                      >
                        Process Import
                      </button>
                    </div>
                  </div>
                </Card>
              )}

              {/* Step 3: Processing */}
              {importStep === 3 && (
                <Card title="Step 3: Processing Import" icon={Clock}>
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Processing your import...
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Please wait while we validate and import your project data
                    </div>
                  </div>
                </Card>
              )}

              {/* Step 4: Complete */}
              {importStep === 4 && (
                <Card title="Step 4: Import Complete" icon={CheckCircle}>
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <div className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Import completed successfully!
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      Your projects have been imported and are ready to use
                    </div>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={resetImport}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        Import Another File
                      </button>
                      <button
                        onClick={onClose}
                        className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* Export Tab */}
          {activeTab === 'export' && (
            <div className="space-y-6">
              <Card title="Export Configuration" icon={Download}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Export Format
                    </label>
                    <select
                      value={exportOptions.format}
                      onChange={(e) => setExportOptions(prev => ({ ...prev, format: e.target.value }))}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                    >
                      <option value="json">JSON</option>
                      <option value="csv">CSV</option>
                      <option value="excel">Excel</option>
                      <option value="pdf">PDF Report</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Include Field Groups
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Object.entries(exportOptions.includeFields).map(([field, checked]) => (
                        <label key={field} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => setExportOptions(prev => ({
                              ...prev,
                              includeFields: {
                                ...prev.includeFields,
                                [field]: e.target.checked
                              }
                            }))}
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="ml-2 text-sm capitalize">{field}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleExport}
                      className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
                    >
                      <Download size={16} />
                      Export Projects
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectImportExportWorkflow;
