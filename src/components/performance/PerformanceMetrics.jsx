import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Star, TrendingUp, Award, FileText } from 'lucide-react';

const PerformanceMetrics = () => {
  const [period, setPeriod] = useState('quarterly');
  
  const performanceData = [
    { category: 'Productivity', self: 80, manager: 75, average: 70 },
    { category: 'Quality', self: 85, manager: 80, average: 75 },
    { category: 'Communication', self: 70, manager: 75, average: 72 },
    { category: 'Teamwork', self: 90, manager: 85, average: 78 },
    { category: 'Initiative', self: 75, manager: 70, average: 68 },
  ];

  const competencyScores = [
    { name: 'Technical Expertise', score: 85, color: '#6B48FF' },
    { name: 'Problem Solving', score: 78, color: '#8B5CF6' },
    { name: 'Time Management', score: 72, color: '#A78BFA' },
    { name: 'Leadership', score: 80, color: '#C4B5FD' },
    { name: 'Innovation', score: 75, color: '#DDD6FE' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <Card title="Performance Score" className="w-full md:w-1/3">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="relative w-40 h-40 mb-4">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <div className="absolute inset-3 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-600">85</div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                    className="dark:stroke-gray-600"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#6B48FF"
                    strokeWidth="8"
                    strokeDasharray="282.7"
                    strokeDashoffset="42.4"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Great Performance</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Top 15% in your department</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Quarter</div>
              <div className="text-lg font-semibold flex items-center justify-center gap-1">
                <span>82</span>
                <TrendingUp size={16} className="text-green-500" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">YTD Avg</div>
              <div className="text-lg font-semibold">83.5</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Badges</div>
              <div className="text-lg font-semibold flex items-center justify-center gap-1">
                <span>4</span>
                <Star size={16} className="text-amber-500" />
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Rating Comparison" className="w-full md:w-2/3">
          <div className="p-2">
            <div className="mb-4 flex justify-end">
              <select 
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="category" type="category" width={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="self" name="Self Rating" fill="#6B48FF" />
                <Bar dataKey="manager" name="Manager Rating" fill="#A78BFA" />
                <Bar dataKey="average" name="Department Average" fill="#E2E8F0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      
      <Card title="Core Competencies" className="animate-fade-in">
        <div className="space-y-4 p-2">
          {competencyScores.map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                <span className="font-semibold">{item.score}/100</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full" 
                  style={{ width: `${item.score}%`, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      <Card title="Performance Notes & Comments">
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <h4 className="font-medium text-gray-900 dark:text-white">Q2 Performance Review</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">April 15, 2025</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Excellent work on the product launch this quarter. Your leadership in coordinating across teams was instrumental to the project's success. Continue focusing on documentation processes to ensure knowledge transfer.
            </p>
            <div className="flex items-center mt-3">
              <Award className="w-4 h-4 text-amber-500 mr-1" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Received "Project Excellence" badge</span>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <h4 className="font-medium text-gray-900 dark:text-white">Q1 Performance Review</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">January 20, 2025</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Strong technical performance and problem-solving skills demonstrated. Recommend more proactive communication with stakeholders on project status and potential roadblocks.
            </p>
          </div>
          
          <div className="mt-4">
            <button className="text-primary-600 dark:text-primary-400 font-medium flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              View all performance notes
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PerformanceMetrics;
