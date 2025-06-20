
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { FileText, Download, Plus, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const ProjectDeliverables = () => {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');

  // Deliverables data
  const initialDeliverables = [
    { id: 'd1', name: 'Project Requirements Doc', type: 'PDF', size: '2.4 MB', updatedAt: '2025-04-28', updatedBy: 'Mike S.', project: 'Website Redesign' },
    { id: 'd2', name: 'Brand Guidelines', type: 'PDF', size: '5.7 MB', updatedAt: '2025-04-25', updatedBy: 'Jane D.', project: 'Website Redesign' },
    { id: 'd3', name: 'UI Design Mockups', type: 'Figma', size: '---', updatedAt: '2025-05-02', updatedBy: 'Alex W.', project: 'Mobile App' },
    { id: 'd4', name: 'API Documentation', type: 'Markdown', size: '1.2 MB', updatedAt: '2025-04-30', updatedBy: 'Sam T.', project: 'Data Migration' },
    { id: 'd5', name: 'Project Timeline', type: 'Excel', size: '1.8 MB', updatedAt: '2025-05-01', updatedBy: 'Lisa M.', project: 'Dashboard' },
    { id: 'd6', name: 'Technical Architecture', type: 'PDF', size: '3.2 MB', updatedAt: '2025-05-05', updatedBy: 'John D.', project: 'Mobile App' },
    { id: 'd7', name: 'User Research Results', type: 'PowerPoint', size: '4.5 MB', updatedAt: '2025-04-20', updatedBy: 'Jane D.', project: 'Website Redesign' },
    { id: 'd8', name: 'Performance Test Results', type: 'Excel', size: '2.1 MB', updatedAt: '2025-05-03', updatedBy: 'Sam T.', project: 'Dashboard' }
  ];

  const [deliverables, setDeliverables] = useState(initialDeliverables);

  const handleUpload = () => {
    showToast('File upload functionality would open here', 'info');
  };

  const handleDownload = (name) => {
    showToast(`Downloading ${name}...`, 'info');
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
      case 'PowerPoint':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const filteredDeliverables = searchQuery 
    ? deliverables.filter(file => 
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.updatedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.project.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : deliverables;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Project Deliverables</h2>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search deliverables..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full md:w-64 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchQuery}
              onChange={link => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2"
            onClick={handleUpload}
          >
            <Plus size={16} />
            <span>Upload File</span>
          </button>
        </div>
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
                  Project
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
              {filteredDeliverables.map((file) => (
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {file.project}
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

              {filteredDeliverables.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                    No deliverables found matching your search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDeliverables;
