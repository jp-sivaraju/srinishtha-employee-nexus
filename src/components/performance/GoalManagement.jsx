
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/button';
import { 
  Target, 
  Plus, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Edit,
  Trash2,
  MessageSquare,
  UserCheck
} from 'lucide-react';
import { toast } from '../ui/sonner';

const GoalManagement = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Complete React Advanced Certification",
      description: "Finish the advanced React course and obtain certification by end of quarter",
      category: "Professional Development",
      priority: "High",
      progress: 65,
      status: "In Progress",
      dueDate: "2025-06-30",
      cycleId: 1,
      cycleName: "Q2 2025 Performance Review",
      approvalStatus: "Approved",
      supervisorComments: "Good progress on the learning path. Keep it up!",
      lastUpdate: "2025-01-10"
    },
    {
      id: 2,
      title: "Lead Frontend Architecture Migration",
      description: "Successfully migrate the frontend architecture to modern React patterns",
      category: "Technical Leadership",
      priority: "High",
      progress: 40,
      status: "In Progress",
      dueDate: "2025-08-15",
      cycleId: 1,
      cycleName: "Q2 2025 Performance Review",
      approvalStatus: "Pending Approval",
      supervisorComments: "",
      lastUpdate: "2025-01-08"
    },
    {
      id: 3,
      title: "Mentor Two Junior Developers",
      description: "Provide weekly mentoring sessions and track their skill development",
      category: "Mentorship",
      priority: "Medium",
      progress: 80,
      status: "On Track",
      dueDate: "2025-12-31",
      cycleId: 1,
      cycleName: "Q2 2025 Performance Review",
      approvalStatus: "Approved",
      supervisorComments: "Excellent mentoring approach. Mentees are showing great progress.",
      lastUpdate: "2025-01-12"
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: 'Professional Development',
    priority: 'Medium',
    dueDate: '',
    cycleId: 1
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'On Track':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'At Risk':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getApprovalColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Pending Approval':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleCreateGoal = () => {
    if (!newGoal.title || !newGoal.dueDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    const goal = {
      id: goals.length + 1,
      ...newGoal,
      progress: 0,
      status: 'In Progress',
      approvalStatus: 'Pending Approval',
      supervisorComments: '',
      lastUpdate: new Date().toISOString().split('T')[0],
      cycleName: 'Q2 2025 Performance Review'
    };

    setGoals([...goals, goal]);
    setNewGoal({
      title: '',
      description: '',
      category: 'Professional Development',
      priority: 'Medium',
      dueDate: '',
      cycleId: 1
    });
    setShowCreateForm(false);
    toast.success('Goal created successfully and sent for supervisor approval');
  };

  const updateGoalProgress = (goalId, newProgress) => {
    setGoals(goals.map(goal => 
      goal.id === goalId 
        ? { 
            ...goal, 
            progress: newProgress,
            status: newProgress === 100 ? 'Completed' : 'In Progress',
            lastUpdate: new Date().toISOString().split('T')[0]
          }
        : goal
    ));
    toast.success('Goal progress updated');
  };

  const requestSupervisorReview = (goalId) => {
    toast.success('Review request sent to supervisor');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Goal Management</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Set, track, and manage your performance goals throughout the appraisal cycle
          </p>
        </div>
        <Button 
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          Add New Goal
        </Button>
      </div>

      {showCreateForm && (
        <Card title="Create New Goal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Goal Title *
              </label>
              <input
                type="text"
                value={newGoal.title}
                onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                placeholder="e.g., Complete Advanced React Certification"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={newGoal.description}
                onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
                rows="3"
                placeholder="Detailed description of the goal and expected outcomes"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={newGoal.category}
                onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              >
                <option value="Professional Development">Professional Development</option>
                <option value="Technical Leadership">Technical Leadership</option>
                <option value="Project Management">Project Management</option>
                <option value="Mentorship">Mentorship</option>
                <option value="Innovation">Innovation</option>
                <option value="Quality Improvement">Quality Improvement</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Priority
              </label>
              <select
                value={newGoal.priority}
                onChange={(e) => setNewGoal({ ...newGoal, priority: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Due Date *
              </label>
              <input
                type="date"
                value={newGoal.dueDate}
                onChange={(e) => setNewGoal({ ...newGoal, dueDate: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <Button 
              variant="outline" 
              onClick={() => setShowCreateForm(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleCreateGoal}>
              Create Goal
            </Button>
          </div>
        </Card>
      )}

      <div className="space-y-4">
        {goals.map((goal) => (
          <Card key={goal.id}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {goal.description}
                  </p>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getApprovalColor(goal.approvalStatus)}`}>
                    {goal.approvalStatus}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(goal.status)}`}>
                    {goal.status}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center text-sm">
                  <Target size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {goal.category}
                  </span>
                </div>
                
                <div className="flex items-center text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(goal.priority)}`}>
                    {goal.priority} Priority
                  </span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Due: {new Date(goal.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      goal.progress >= 75 ? 'bg-green-500' : 
                      goal.progress >= 50 ? 'bg-blue-500' : 
                      goal.progress >= 25 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                
                {goal.approvalStatus === 'Approved' && (
                  <div className="mt-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={goal.progress}
                      onChange={(e) => updateGoalProgress(goal.id, parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
              
              {goal.supervisorComments && (
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-1">
                    Supervisor Comments:
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    {goal.supervisorComments}
                  </p>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Last updated: {new Date(goal.lastUpdate).toLocaleDateString()}
                </span>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => requestSupervisorReview(goal.id)}
                  >
                    <UserCheck size={14} className="mr-1" />
                    Request Review
                  </Button>
                  
                  <Button variant="outline" size="sm">
                    <MessageSquare size={14} className="mr-1" />
                    Comment
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GoalManagement;
