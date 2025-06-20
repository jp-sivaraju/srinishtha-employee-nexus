
import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Clock, 
  Users, 
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Filter,
  Download
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ScatterChart,
  Scatter
} from 'recharts';

const ProjectAnalyticsDashboard = () => {
  const [timeframe, setTimeframe] = useState('quarter');
  const [selectedMetric, setSelectedMetric] = useState('velocity');

  const velocityData = [
    { week: 'W1', planned: 25, actual: 23, burndown: 100 },
    { week: 'W2', planned: 22, actual: 25, burndown: 75 },
    { week: 'W3', planned: 28, actual: 26, burndown: 49 },
    { week: 'W4', planned: 24, actual: 22, burndown: 27 },
    { week: 'W5', planned: 26, actual: 28, burndown: 2 },
    { week: 'W6', planned: 23, actual: 24, burndown: 0 }
  ];

  const resourceUtilizationData = [
    { name: 'Developers', utilized: 85, available: 100, color: '#3B82F6' },
    { name: 'Designers', utilized: 72, available: 100, color: '#10B981' },
    { name: 'QA Engineers', utilized: 91, available: 100, color: '#F59E0B' },
    { name: 'DevOps', utilized: 68, available: 100, color: '#8B5CF6' },
    { name: 'Product Managers', utilized: 78, available: 100, color: '#EF4444' }
  ];

  const projectHealthData = [
    { name: 'On Track', value: 65, color: '#10B981' },
    { name: 'At Risk', value: 25, color: '#F59E0B' },
    { name: 'Critical', value: 10, color: '#EF4444' }
  ];

  const predictiveData = [
    { month: 'Jan', predicted: 85, actual: 82 },
    { month: 'Feb', predicted: 88, actual: 85 },
    { month: 'Mar', predicted: 90, actual: 87 },
    { month: 'Apr', predicted: 92, actual: 89 },
    { month: 'May', predicted: 94, actual: null },
    { month: 'Jun', predicted: 96, actual: null }
  ];

  const teamPerformanceData = [
    { team: 'Frontend', velocity: 28, quality: 92, satisfaction: 85 },
    { team: 'Backend', velocity: 32, quality: 88, satisfaction: 90 },
    { team: 'Mobile', velocity: 24, quality: 94, satisfaction: 82 },
    { team: 'DevOps', velocity: 18, quality: 96, satisfaction: 88 },
    { team: 'QA', velocity: 22, quality: 98, satisfaction: 87 }
  ];

  const kpiMetrics = [
    {
      title: 'Team Velocity',
      value: '26.4',
      unit: 'story points/sprint',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Delivery Predictability',
      value: '89%',
      unit: 'on-time delivery',
      change: '+5.1%',
      trend: 'up',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      title: 'Resource Utilization',
      value: '78.8%',
      unit: 'avg utilization',
      change: '-2.3%',
      trend: 'down',
      icon: Users,
      color: 'text-orange-600'
    },
    {
      title: 'Budget Efficiency',
      value: '94.2%',
      unit: 'budget adherence',
      change: '+1.8%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-600'
    }
  ];

  const formatTooltip = (value, name) => {
    if (name === 'predicted') return [`${value}%`, 'Predicted Success Rate'];
    if (name === 'actual') return [`${value}%`, 'Actual Success Rate'];
    return [value, name];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Project Analytics</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Advanced insights and predictive analytics</p>
        </div>
        <div className="flex gap-3">
          <select
            value={timeframe}
            onChange={link => setTimeframe(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter size={18} />
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center gap-2">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {kpiMetrics.map((metric, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {metric.title}
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500">
                  {metric.unit}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
                <div className={`text-sm flex items-center mt-1 ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  <span className="ml-1">{metric.change}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Velocity & Burndown */}
        <Card title="Sprint Velocity & Burndown" icon={TrendingUp}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={velocityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="planned" stroke="#6366F1" strokeWidth={2} name="Planned Velocity" />
                <Line type="monotone" dataKey="actual" stroke="#10B981" strokeWidth={2} name="Actual Velocity" />
                <Line type="monotone" dataKey="burndown" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" name="Burndown" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Resource Utilization */}
        <Card title="Resource Utilization" icon={Users}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={resourceUtilizationData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip formatter={(value) => [`${value}%`, 'Utilization']} />
                <Bar dataKey="utilized" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Project Health Distribution */}
        <Card title="Project Health Distribution" icon={Target}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectHealthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {projectHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Projects']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {projectHealthData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Predictive Analytics */}
        <Card title="Predictive Success Rate" icon={TrendingUp}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={predictiveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[80, 100]} />
                <Tooltip formatter={formatTooltip} />
                <Area type="monotone" dataKey="predicted" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} strokeDasharray="5 5" />
                <Area type="monotone" dataKey="actual" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Team Performance Matrix */}
      <Card title="Team Performance Matrix" icon={Users}>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart data={teamPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="velocity" name="Velocity" unit=" SP" />
              <YAxis dataKey="quality" name="Quality" unit="%" />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                        <p className="font-medium">{data.team} Team</p>
                        <p className="text-sm">Velocity: {data.velocity} SP</p>
                        <p className="text-sm">Quality: {data.quality}%</p>
                        <p className="text-sm">Satisfaction: {data.satisfaction}%</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter dataKey="quality" fill="#3B82F6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default ProjectAnalyticsDashboard;
