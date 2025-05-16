
import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { 
  Check, 
  Clock, 
  AlertTriangle, 
  Search, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';

const TeamPerformance = () => {
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  
  const teamMembers = [
    { 
      id: 1, 
      name: 'John Doe', 
      role: 'Senior Developer',
      avatar: 'JD', 
      performance: 92,
      status: 'completed',
      project: 'Website Redesign', 
      lastReviewed: '2025-04-10' 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      role: 'Product Designer',
      avatar: 'JS', 
      performance: 88,
      status: 'in-progress', 
      project: 'Mobile App Development',
      lastReviewed: '2025-04-05' 
    },
    { 
      id: 3, 
      name: 'Robert Johnson', 
      role: 'QA Engineer',
      avatar: 'RJ', 
      performance: 78,
      status: 'needs-attention', 
      project: 'Database Migration',
      lastReviewed: '2025-03-22' 
    },
    { 
      id: 4, 
      name: 'Emily Davis', 
      role: 'Frontend Developer',
      avatar: 'ED', 
      performance: 85,
      status: 'completed',
      project: 'Customer Portal', 
      lastReviewed: '2025-04-12' 
    },
    { 
      id: 5, 
      name: 'Michael Wilson', 
      role: 'Backend Developer',
      avatar: 'MW', 
      performance: 82,
      status: 'in-progress',
      project: 'API Integration', 
      lastReviewed: '2025-04-01' 
    },
  ];
  
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  const getSortedData = () => {
    const filteredData = teamMembers.filter(
      (member) => 
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.project.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return filteredData.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      
      if (typeof aValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
    });
  };
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'needs-attention':
        return <AlertTriangle className="h-5 w-5 text-rose-500" />;
      default:
        return null;
    }
  };
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'in-progress':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'needs-attention':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  
  const getPerformanceClass = (score) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 80) return 'text-blue-600 dark:text-blue-400';
    if (score >= 70) return 'text-amber-600 dark:text-amber-400';
    return 'text-rose-600 dark:text-rose-400';
  };

  return (
    <Card title="Team Performance Overview">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search team members, roles, or projects..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center">
                  <span>Employee</span>
                  {sortColumn === 'name' && (
                    sortDirection === 'asc' ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('project')}
              >
                <div className="flex items-center">
                  <span>Project</span>
                  {sortColumn === 'project' && (
                    sortDirection === 'asc' ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('performance')}
              >
                <div className="flex items-center">
                  <span>Performance</span>
                  {sortColumn === 'performance' && (
                    sortDirection === 'asc' ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">
                  <span>Status</span>
                  {sortColumn === 'status' && (
                    sortDirection === 'asc' ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {getSortedData().map((member) => (
              <tr 
                key={member.id} 
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-sm font-medium text-primary-700 dark:text-primary-300">
                        {member.avatar}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {member.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {member.project}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${getPerformanceClass(member.performance)}`}>
                    {member.performance}/100
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                    <div className="h-1.5 rounded-full bg-primary-500" style={{ width: `${member.performance}%` }}></div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(member.status)}`}>
                      {getStatusIcon(member.status)}
                      <span className="ml-1 capitalize">
                        {member.status.replace('-', ' ')}
                      </span>
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-primary-600 hover:text-primary-900 font-medium dark:text-primary-400 dark:hover:text-primary-300 mr-3">
                    View
                  </button>
                  <button className="text-primary-600 hover:text-primary-900 font-medium dark:text-primary-400 dark:hover:text-primary-300">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TeamPerformance;
