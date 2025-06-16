
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
  PlayCircle
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
      description: 'Q2 quarterly performance appraisal focusing on product development goals'
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
      description: 'Comprehensive annual performance review for all departments'
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
      description: 'Mid-year performance assessment and goal adjustment'
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCycle, setNewCycle] = useState({
    name: '',
    type: 'Quarterly',
    startDate: '',
    endDate: '',
    description: ''
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Planned':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Goal Setting':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Self Assessment':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Supervisor Review':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
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

    const cycle = {
      id: cycles.length + 1,
      ...newCycle,
      status: 'Planned',
      participants: 0,
      completedReviews: 0,
      stage: 'Planning'
    };

    setCycles([...cycles, cycle]);
    setNewCycle({ name: '', type: 'Quarterly', startDate: '', endDate: '', description: '' });
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Appraisal Cycles</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage performance appraisal cycles and track progress
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
                    {cycle.type} Cycle
                  </p>
                </div>
                <div className="flex space-x-2">
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
                    {cycle.participants} participants
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
              
              <div className="flex space-x-2">
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit size={14} className="mr-1" />
                    Manage
                  </Button>
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
