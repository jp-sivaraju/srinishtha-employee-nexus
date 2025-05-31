
import React from 'react';
import { Card } from '../../ui/Card';
import { Target, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const PMOCharts = () => {
  const scopeCreepData = [
    { month: 'Jan', originalScope: 100, currentScope: 105, budget: 95 },
    { month: 'Feb', originalScope: 100, currentScope: 108, budget: 92 },
    { month: 'Mar', originalScope: 100, currentScope: 115, budget: 88 },
    { month: 'Apr', originalScope: 100, currentScope: 118, budget: 85 },
    { month: 'May', originalScope: 100, currentScope: 125, budget: 80 },
  ];

  const scheduleData = [
    { week: 'W1', planned: 20, actual: 18 },
    { week: 'W2', planned: 40, actual: 35 },
    { week: 'W3', planned: 60, actual: 52 },
    { week: 'W4', planned: 80, actual: 68 },
    { week: 'W5', planned: 100, actual: 82 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Scope Creep Analysis" icon={Target}>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={scopeCreepData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="originalScope" stackId="1" stroke="#6366F1" fill="#6366F1" fillOpacity={0.3} />
              <Area type="monotone" dataKey="currentScope" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Schedule Performance" icon={Calendar}>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={scheduleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="planned" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="actual" stroke="#EF4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default PMOCharts;
