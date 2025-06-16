
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/button';
import { 
  Calendar, 
  Clock, 
  Target, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  Eye,
  Edit,
  PlayCircle,
  Settings,
  FileText,
  Mail,
  BarChart3,
  Copy,
  Archive
} from 'lucide-react';
import { toast } from '../ui/sonner';

const AppraisalCycles = () => {
  const [cycles, setCycles] = useState([
    {
      id: 1,
      name: 'Q2 2025 Performance Review',
      type: 'Quarterly',
      startDate: '2025-04-01',
      endDate: '2025-06-30',
      status: 'Active',
      participants: 24,
      completedReviews: 8,
      stage: 'Goal Setting',
      description: 'Q2 quarterly performance appraisal focusing on product development goals',
      template: 'Standard Quarterly',
      departments: ['Engineering', 'Design', 'Product'],
      notificationsEnabled: true,
      autoReminders: true
    },
    {
      id: 2,
      name: 'Annual Review 2024',
      type: 'Annual',
      startDate: '2024-12-01',
      endDate: '2025-01-31',
      status: 'Completed',
      participants: 45,
      completedReviews: 45,
      stage: 'Closed',
      description: 'Comprehensive annual performance review for all departments',
      template: 'Comprehensive Annual',
      departments: ['All Departments'],
      notificationsEnabled: true,
      autoReminders: true
    },
    {
      id: 3,
      name: 'Mid-Year Assessment',
      type: 'Half-yearly',
      startDate: '2025-07-01',
      endDate: '2025-12-31',
      status: 'Planned',
      participants: 0,
      completedReviews: 0,
      stage: 'Planning',
      description: 'Mid-year performance assessment and goal adjustment',
      template: 'Mid-Year Check-in',
      departments: ['Engineering', 'Sales', 'Marketing'],
      notificationsEnabled: false,
      autoReminders: false
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCycle, setNewCycle] = useState({
    name: '',
    type: 'Quarterly',
    startDate: '',
    endDate: '',
    description: '',
    template: 'Standard Quarterly',
    departments: [],
    notificationsEnabled: true,
    autoReminders: true
  });

  const templates = [
    'Standard Quarterly',
    'Comprehensive Annual',
    'Mid-Year Check-in',
    'Monthly Sprint Review',
    'Probationary Review',
    'Leadership Assessment',
    'Custom Template'
  ];

  const departmentsList = [
    'Engineering',
    'Design',
    'Product',
    'Sales',
    'Marketing',
    'HR',
    'Finance',
    'Operations',
    'Customer Success'
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Planned':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Paused':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Archived':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Planning':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'Goal Setting':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Self Assessment':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Supervisor Review':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'Calibration':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Finalization':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      case 'Closed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleCreateCycle = () => {
    if (!newCycle.name || !newCycle.startDate || !newCycle.endDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (newCycle.departments.length === 0) {
      toast.error('Please select at least one department');
      return;
    }

    const cycle = {
      id: cycles.length + 1,
      ...newCycle,
      status: 'Planned',
      participants: 0,
      completedReviews: 0,
      stage: 'Planning'
    };

    setCycles([...cycles, cycle]);
    setNewCycle({
      name: '',
      type: 'Quarterly',
      startDate: '',
      endDate: '',
      description: '',
      template: 'Standard Quarterly',
      departments: [],
      notificationsEnabled: true,
      autoReminders: true
    });
    setShowCreateForm(false);
    toast.success('Appraisal cycle created successfully');
  };

  const startCycle = (cycleId) => {
    setCycles(cycles.map(cycle => 
      cycle.id === cycleId 
        ? { ...cycle, status: 'Active', stage: 'Goal Setting' }
        : cycle
    ));
    toast.success('Appraisal cycle started');
  };

  const duplicateCycle = (cycle) => {
    const duplicated = {
      ...cycle,
      id: cycles.length + 1,
      name: `${cycle.name} (Copy)`,
      status: 'Planned',
      stage: 'Planning',
      participants: 0,
      completedReviews: 0
    };
    setCycles([...cycles, duplicated]);
    toast.success('Cycle duplicated successfully');
  };

  const archiveCycle = (cycleId) => {
    setCycles(cycles.map(cycle => 
      cycle.id === cycleId 
        ? { ...cycle, status: 'Archived' }
        : cycle
    ));
    toast.success('Cycle archived');
  };

  const sendReminders = (cycleId) => {
    toast.success('Reminders sent to all participants');
  };

  const toggleDepartment = (dept) => {
    setNewCycle({
      ...newCycle,
      departments: newCycle.departments.includes(dept)
        ? newCycle.departments.filter(d => d !== dept)
        : [...newCycle.departments, dept]
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Appraisal Cycles</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage comprehensive performance appraisal cycles across all organizational levels
          </p>
        </div>
        <Button 
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          Create New Cycle
        </Button>
      </div>

      {showCreateForm && (
        <Card title="Create New Appraisal Cycle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cycle Name *
              </label>
              <input
                type="text"
                value={newCycle.name}
                onChange={(e) => setNewCycle({ ...newCycle, name: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                placeholder="e.g., Q3 2025 Performance Review"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cycle Type
              </label>
              <select
                value={newCycle.type}
                onChange={(e) => setNewCycle({ ...newCycle, type: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              >
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Half-yearly">Half-yearly</option>
                <option value="Annual">Annual</option>
                <option value="Probationary">Probationary</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Date *
              </label>
              <input
                type="date"
                value={newCycle.startDate}
                onChange={(e) => setNewCycle({ ...newCycle, startDate: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Date *
              </label>
              <input
                type="date"
                value={newCycle.endDate}
                onChange={(e) => setNewCycle({ ...newCycle, endDate: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Template
              </label>
              <select
                value={newCycle.template}
                onChange={(e) => setNewCycle({ ...newCycle, template: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              >
                {templates.map(template => (
                  <option key={template} value={template}>{template}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Departments *
              </label>
              <div className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800 max-h-32 overflow-y-auto">
                {departmentsList.map(dept => (
                  <label key={dept} className="flex items-center space-x-2 py-1">
                    <input
                      type="checkbox"
                      checked={newCycle.departments.includes(dept)}
                      onChange={() => toggleDepartment(dept)}
                      className="rounded"
                    />
                    <span className="text-sm">{dept}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={newCycle.description}
              onChange={(e) => setNewCycle({ ...newCycle, description: e.target.value })}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              rows="3"
              placeholder="Brief description of the appraisal cycle objectives"
            />
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={newCycle.notificationsEnabled}
                onChange={(e) => setNewCycle({ ...newCycle, notificationsEnabled: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Enable email notifications</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={newCycle.autoReminders}
                onChange={(e) => setNewCycle({ ...newCycle, autoReminders: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Automatic reminders</span>
            </label>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <Button 
              variant="outline" 
              onClick={() => setShowCreateForm(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleCreateCycle}>
              Create Cycle
            </Button>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cycles.map((cycle) => (
          <Card key={cycle.id}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cycle.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cycle.type} • {cycle.template}
                  </p>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(cycle.status)}`}>
                    {cycle.status}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {cycle.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <Calendar size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {new Date(cycle.startDate).toLocaleDateString()} - {new Date(cycle.endDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Users size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {cycle.participants} participants • {cycle.departments.join(', ')}
                  </span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-gray-500" />
                  <span className={`px-2 py-1 rounded-full text-xs ${getStageColor(cycle.stage)}`}>
                    {cycle.stage}
                  </span>
                </div>
                
                {cycle.status === 'Active' && (
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{cycle.completedReviews}/{cycle.participants}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ 
                          width: cycle.participants > 0 
                            ? `${(cycle.completedReviews / cycle.participants) * 100}%` 
                            : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye size={14} className="mr-1" />
                  View
                </Button>
                
                {cycle.status === 'Planned' && (
                  <Button 
                    size="sm" 
                    onClick={() => startCycle(cycle.id)}
                    className="flex-1"
                  >
                    <PlayCircle size={14} className="mr-1" />
                    Start
                  </Button>
                )}
                
                {cycle.status === 'Active' && (
                  <>
                    <Button variant="outline" size="sm">
                      <Edit size={14} className="mr-1" />
                      Manage
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => sendReminders(cycle.id)}
                    >
                      <Mail size={14} className="mr-1" />
                      Remind
                    </Button>
                  </>
                )}
                
                {(cycle.status === 'Completed' || cycle.status === 'Planned') && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => duplicateCycle(cycle)}
                  >
                    <Copy size={14} className="mr-1" />
                    Duplicate
                  </Button>
                )}
                
                {cycle.status === 'Completed' && (
                  <>
                    <Button variant="outline" size="sm">
                      <BarChart3 size={14} className="mr-1" />
                      Analytics
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => archiveCycle(cycle.id)}
                    >
                      <Archive size={14} className="mr-1" />
                      Archive
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AppraisalCycles;
