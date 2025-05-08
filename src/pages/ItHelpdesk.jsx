
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Laptop, HelpCircle, Package, Search } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

const ItHelpdesk = () => {
  const [ticketForm, setTicketForm] = useState({
    title: '',
    category: 'hardware',
    priority: 'medium',
    description: '',
    attachFile: null
  });
  const { showToast, ToastContainer } = useToast();
  const [filter, setFilter] = useState('');

  const softwareList = [
    { name: 'Microsoft Office 365', category: 'Productivity', status: 'Approved' },
    { name: 'Adobe Creative Cloud', category: 'Design', status: 'Requires Approval' },
    { name: 'Zoom', category: 'Communication', status: 'Approved' },
    { name: 'Slack', category: 'Communication', status: 'Approved' },
    { name: 'VS Code', category: 'Development', status: 'Approved' },
    { name: 'Figma', category: 'Design', status: 'Approved' },
    { name: 'IntelliJ IDEA', category: 'Development', status: 'Requires Approval' },
    { name: 'Notion', category: 'Productivity', status: 'Approved' },
    { name: 'Jira', category: 'Project Management', status: 'Approved' }
  ];

  const devices = [
    { id: 'LT-2023-056', type: 'Laptop', model: 'MacBook Pro 16"', assignedDate: '2023-05-15', status: 'Assigned' },
    { id: 'MN-2023-124', type: 'Monitor', model: 'Dell 27" 4K', assignedDate: '2023-05-15', status: 'Assigned' },
    { id: 'KB-2023-056', type: 'Keyboard', model: 'Logitech MX Keys', assignedDate: '2023-05-15', status: 'Assigned' },
    { id: 'MS-2023-056', type: 'Mouse', model: 'Logitech MX Master', assignedDate: '2023-05-15', status: 'Assigned' },
    { id: 'HD-2023-056', type: 'Headset', model: 'Jabra Evolve 75', assignedDate: '2023-05-15', status: 'Assigned' }
  ];

  const handleTicketFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachFile' && files) {
      setTicketForm(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setTicketForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    showToast('IT support ticket submitted successfully!', 'success');
    setTicketForm({
      title: '',
      category: 'hardware',
      priority: 'medium',
      description: '',
      attachFile: null
    });
  };

  const filteredSoftware = filter
    ? softwareList.filter(item => 
        item.name.toLowerCase().includes(filter.toLowerCase()) || 
        item.category.toLowerCase().includes(filter.toLowerCase())
      )
    : softwareList;

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title="IT Helpdesk"
          description="Get help with technical issues, manage your devices, and explore approved software"
          withParallax={true}
        />

        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <Card title="Submit Support Ticket" icon={HelpCircle} animateOnScroll={true}>
            <form onSubmit={handleTicketSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                  Issue Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={ticketForm.title}
                  onChange={handleTicketFormChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                  placeholder="Brief description of the issue"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={ticketForm.category}
                    onChange={handleTicketFormChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                  >
                    <option value="hardware">Hardware</option>
                    <option value="software">Software</option>
                    <option value="network">Network</option>
                    <option value="access">Access/Permissions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Priority
                  </label>
                  <select
                    name="priority"
                    value={ticketForm.priority}
                    onChange={handleTicketFormChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="critical">Critical</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={ticketForm.description}
                  onChange={handleTicketFormChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                  placeholder="Please provide details about your issue"
                  required
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                  Attach Screenshot or File (optional)
                </label>
                <input
                  type="file"
                  name="attachFile"
                  onChange={handleTicketFormChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </Card>
          
          <Card title="Your Recent Tickets" icon={HelpCircle} animateOnScroll={true} className="overflow-hidden">
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 p-4 rounded">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="font-medium text-green-800 dark:text-green-400">Ticket #4590 - Resolved</h3>
                    <p className="text-sm text-green-700 dark:text-green-300">VPN connection issue</p>
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    2 days ago
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-800 dark:text-blue-400">Ticket #4582 - In Progress</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Software installation request</p>
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    5 days ago
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 border-l-4 border-gray-400 p-4 rounded">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 dark:text-gray-300">Ticket #4550 - Closed</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Password reset</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    2 weeks ago
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="grid gap-6 mb-8 md:grid-cols-1">
          <Card title="Device Inventory" icon={Laptop} animateOnScroll={true}>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Asset ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Model
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Assigned Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {devices.map((device) => (
                    <tr
                      key={device.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {device.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {device.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {device.model}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {device.assignedDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-xs">
                          {device.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card title="Approved Software" icon={Package} animateOnScroll={true}>
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                placeholder="Filter software by name or category..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Software
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredSoftware.map((software, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {software.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {software.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full ${
                          software.status === 'Approved'
                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                        } text-xs`}>
                          {software.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default ItHelpdesk;
