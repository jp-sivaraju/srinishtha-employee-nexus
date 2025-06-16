
import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/button';
import { 
  Calendar, 
  Clock, 
  Users, 
  Eye,
  Edit,
  PlayCircle,
  Mail,
  BarChart3,
  Copy,
  Archive
} from 'lucide-react';

const AppraisalCycleCard = ({ 
  cycle, 
  onStart, 
  onDuplicate, 
  onArchive, 
  onSendReminders 
}) => {
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

  return (
    <Card>
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
              onClick={() => onStart(cycle.id)}
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
                onClick={() => onSendReminders(cycle.id)}
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
              onClick={() => onDuplicate(cycle)}
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
                onClick={() => onArchive(cycle.id)}
              >
                <Archive size={14} className="mr-1" />
                Archive
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AppraisalCycleCard;
