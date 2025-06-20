
import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { BarChart2, PieChart as PieChartIcon, TrendingUp, Download, Filter } from 'lucide-react';

const PerformanceSummary = () => {
  const [timeRange, setTimeRange] = useState('year');
  
  const performanceTrend = [
    { month: 'Jan', score: 78 },
    { month: 'Feb', score: 80 },
    { month: 'Mar', score: 79 },
    { month: 'Apr', score: 82 },
    { month: 'May', score: 85 },
    { month: 'Jun', score: 83 },
    { month: 'Jul', score: 87 },
    { month: 'Aug', score: 90 },
    { month: 'Sep', score: 88 },
    { month: 'Oct', score: 88 },
    { month: 'Nov', score: 85 },
    { month: 'Dec', score: 85 }
  ];
  
  const skillsData = [
    { name: 'Technical', score: 85 },
    { name: 'Communication', score: 78 },
    { name: 'Leadership', score: 80 },
    { name: 'Problem Solving', score: 90 },
    { name: 'Teamwork', score: 85 }
  ];
  
  const categoryData = [
    { name: 'Product Knowledge', value: 85 },
    { name: 'Innovation', value: 70 },
    { name: 'Quality', value: 90 },
    { name: 'Efficiency', value: 75 }
  ];
  
  const COLORS = ['#6B48FF', '#A78BFA', '#C4B5FD', '#DDD6FE'];
  
  const performanceMetrics = [
    {
      title: 'Average Performance Score',
      value: '85/100',
      change: '+3.2%',
      positive: true,
      description: 'Compared to previous year'
    },
    {
      title: 'Goals Completed',
      value: '16/20',
      change: '+4',
      positive: true,
      description: 'Goal completion rate'
    },
    {
      title: 'Feedback Received',
      value: '28',
      change: '+8',
      positive: true,
      description: 'Across all projects'
    },
    {
      title: 'Team Ranking',
      value: '#3',
      change: '+2',
      positive: true,
      description: 'Out of 12 teams'
    }
  ];
  
  const renderPerformanceTrendChart = () => {
    let data = performanceTrend;
    
    if (timeRange === 'quarter') {
      data = performanceTrend.slice(-3);
    } else if (timeRange === 'halfYear') {
      data = performanceTrend.slice(-6);
    }
    
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="score" 
            name="Performance Score" 
            stroke="#6B48FF" 
            strokeWidth={3} 
            dot={{ r: 4 }} 
            activeDot={{ r: 6, stroke: '#6B48FF', strokeWidth: 2, fill: '#fff' }} 
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="animate-fade-in">
            <div className="p-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.title}
              </h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
                <p className={`ml-2 flex items-baseline text-sm font-medium ${
                  metric.positive ? 'text-green-600 dark:text-green-400' : 'text-rose-600 dark:text-rose-400'
                }`}>
                  {metric.change}
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {metric.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          <Card title="Performance Trend" icon={TrendingUp}>
            <div className="mb-4 flex justify-between items-center p-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Performance score over time
              </div>
              <div className="flex items-center space-x-2">
                <select
                  className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm bg-white dark:bg-gray-800"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option value="quarter">Last Quarter</option>
                  <option value="halfYear">Last 6 Months</option>
                  <option value="year">Full Year</option>
                </select>
                <button className="p-1 border border-gray-300 dark:border-gray-600 rounded">
                  <Download size={16} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
            {renderPerformanceTrendChart()}
          </Card>
        </div>
        
        <div className="w-full lg:w-1/3">
          <Card title="Performance by Category" icon={PieChartIcon}>
            <div className="p-2">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}/100`, 'Score']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
      
      <Card title="Skills Assessment" icon={BarChart2}>
        <div className="mb-4 flex justify-between items-center p-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Performance by skill area
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm">
              <Filter size={14} />
              <span>Filter</span>
            </button>
            <button className="p-1 border border-gray-300 dark:border-gray-600 rounded">
              <Download size={16} className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>
        <div className="p-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skillsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="score" 
                name="Skill Score" 
                fill="#6B48FF" 
                radius={[4, 4, 0, 0]} 
                barSize={40} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-primary-600 text-white rounded-md flex items-center space-x-2 hover:bg-primary-700 transition-colors">
          <Download size={16} />
          <span>Export Performance Report</span>
        </button>
      </div>
    </div>
  );
};

export default PerformanceSummary;
