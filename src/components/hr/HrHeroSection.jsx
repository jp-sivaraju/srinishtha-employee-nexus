
import React from 'react';
import { 
  Users, 
  UserPlus, 
  Award, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  Calendar,
  Clock,
  CheckSquare,
  Plane,
  BarChart3
} from 'lucide-react';

const HrHeroSection = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'Company Policies', label: 'Company Policies', icon: Award, description: 'HR overview and metrics' },
    { id: 'directory', label: 'Employee Directory', icon: Users, description: 'Manage employee information' },
    // { id: 'recruitment', label: 'Recruitment', icon: UserPlus, description: 'Hiring and onboarding' },
    // { id: 'performance', label: 'Performance', icon: TrendingUp, description: 'Appraisal cycles and reviews' },
    // { id: 'training', label: 'Training & Development', icon: BookOpen, description: 'Learning programs' },
    { id: 'compensation', label: 'Compensation & Benefits', icon: DollarSign, description: 'Salary and benefits' },
    { id: 'holidays', label: 'Holidays Calendar', icon: Calendar, description: 'Company holidays' },
    // { id: 'attendance', label: 'Attendance Log', icon: Clock, description: 'Time tracking' },
    // { id: 'onboarding', label: 'Onboarding Checklist', icon: CheckSquare, description: 'New hire process' },
    { id: 'leave', label: 'Leave Management', icon: Plane, description: 'Leave requests and approvals' }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Human Resources Zone
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive HR management platform with advanced performance tracking, employee development, and organizational insights
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                isActive
                  ? 'bg-white dark:bg-gray-800 shadow-lg ring-2 ring-blue-500 ring-opacity-50'
                  : 'bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-lg mb-3 transition-colors ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                }`}>
                  <IconComponent size={24} />
                </div>
                
                <h3 className={`font-semibold text-sm mb-1 ${
                  isActive
                    ? 'text-blue-900 dark:text-blue-100'
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {tab.label}
                </h3>
                
                <p className={`text-xs ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-300'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {tab.description}
                </p>
              </div>
              
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl animate-pulse"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HrHeroSection;
