
import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Target, CheckCircle, PlusCircle, Edit, Trash2, Clock } from 'lucide-react';

const PerformanceGoals = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Complete Advanced React certification",
      description: "Finish the course and get certified in Advanced React techniques",
      progress: 75,
      deadline: "2025-06-30",
      category: "Professional Development",
      priority: "high"
    },
    {
      id: 2,
      title: "Improve code review process",
      description: "Implement automated code quality checks and establish team review standards",
      progress: 40,
      deadline: "2025-07-15",
      category: "Process Improvement",
      priority: "medium"
    },
    {
      id: 3,
      title: "Lead project planning for Q3",
      description: "Coordinate with stakeholders and create project roadmap for Q3 initiatives",
      progress: 20,
      deadline: "2025-05-30",
      category: "Leadership",
      priority: "high"
    },
    {
      id: 4,
      title: "Mentor junior developer",
      description: "Provide weekly mentoring sessions for skill development",
      progress: 60,
      deadline: "2025-12-15",
      category: "Mentorship",
      priority: "medium"
    }
  ]);

  const okrs = [
    {
      id: 1,
      objective: "Launch mobile application redesign",
      keyResults: [
        { id: 1, text: "Increase user engagement by 25%", progress: 80 },
        { id: 2, text: "Reduce loading time by 40%", progress: 90 },
        { id: 3, text: "Achieve 4.8+ star rating on app stores", progress: 60 }
      ],
      progress: 76,
      quarter: "Q2 2025"
    },
    {
      id: 2,
      objective: "Improve team development velocity",
      keyResults: [
        { id: 1, text: "Reduce bug rate by 30%", progress: 65 },
        { id: 2, text: "Implement CI/CD pipeline", progress: 100 },
        { id: 3, text: "Increase test coverage to 85%", progress: 50 }
      ],
      progress: 71,
      quarter: "Q2 2025"
    }
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  const daysUntil = (dateString) => {
    const today = new Date();
    const deadline = new Date(dateString);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-2/3">
          <Card title="Performance Goals">
            <div className="mb-4 flex justify-between items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing {goals.length} goals
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                <PlusCircle size={16} />
                <span>Add Goal</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {goals.map((goal) => (
                <div 
                  key={goal.id} 
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {goal.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityClass(goal.priority)}`}>
                      {goal.priority.charAt(0).toUpperCase() + goal.priority.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {goal.description}
                  </p>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          goal.progress >= 75 ? 'bg-green-500' : 
                          goal.progress >= 50 ? 'bg-blue-500' : 
                          goal.progress >= 25 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-gray-700 dark:text-gray-300">
                        {goal.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Clock size={14} className="mr-1" />
                        <span>Due {formatDate(goal.deadline)} ({daysUntil(goal.deadline)} days)</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <Edit size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-rose-600 dark:text-gray-400 dark:hover:text-rose-400">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="w-full md:w-1/3">
          <Card title="OKR Overview">
            <div className="space-y-4">
              {okrs.map((okr) => (
                <div 
                  key={okr.id} 
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-medium text-gray-900 dark:text-white flex items-center">
                      <Target size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                      {okr.objective}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {okr.quarter}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Overall Progress</span>
                      <span>{okr.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-primary-500"
                        style={{ width: `${okr.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">
                      Key Results
                    </h4>
                    
                    {okr.keyResults.map((kr) => (
                      <div key={kr.id} className="flex items-center">
                        <div className="h-5 w-5 mr-2">
                          {kr.progress === 100 ? (
                            <CheckCircle size={18} className="text-green-500" />
                          ) : (
                            <div className="rounded-full h-4 w-4 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                              <div 
                                className="rounded-full bg-primary-500" 
                                style={{ 
                                  height: `${Math.max(1, Math.min(kr.progress, 100)) * 0.75}px`,
                                  width: `${Math.max(1, Math.min(kr.progress, 100)) * 0.75}px` 
                                }}
                              ></div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700 dark:text-gray-300">
                              {kr.text}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 text-xs">
                              {kr.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-1">
                            <div 
                              className="h-1 rounded-full bg-primary-500"
                              style={{ width: `${kr.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <button className="w-full flex items-center justify-center gap-1 p-2 mt-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-md text-gray-500 hover:text-primary-600 hover:border-primary-500 dark:hover:text-primary-400 dark:hover:border-primary-500 transition-colors">
                <PlusCircle size={16} />
                <span>Add OKR</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PerformanceGoals;
