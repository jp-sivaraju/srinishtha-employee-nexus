
import React from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const salaryData = [
  { name: 'Engineering', value: 120000, fill: '#8884d8' },
  { name: 'Sales', value: 95000, fill: '#83a6ed' },
  { name: 'Marketing', value: 85000, fill: '#8dd1e1' },
  { name: 'HR', value: 80000, fill: '#82ca9d' },
  { name: 'Finance', value: 110000, fill: '#a4de6c' },
];

const benefitsData = [
  { name: 'Health Insurance', value: 85 },
  { name: 'Retirement', value: 70 },
  { name: 'PTO', value: 90 },
  { name: 'Education', value: 60 },
  { name: 'Wellness', value: 40 },
];

const CompensationBenefits = () => {
  return (
    <GlassContainer className="p-6">
      <GradientText as="h2" className="text-2xl font-semibold mb-6" gradient="night-owl">
        Compensation & Benefits
      </GradientText>
      
      <Tabs defaultValue="compensation" className="mb-6">
        <TabsList className="grid grid-cols-2 gap-4 mb-6 bg-primary-900/20">
          <TabsTrigger value="compensation" className="data-[state=active]:bg-primary-400 data-[state=active]:text-primary-950">
            Compensation
          </TabsTrigger>
          <TabsTrigger value="benefits" className="data-[state=active]:bg-primary-400 data-[state=active]:text-primary-950">
            Benefits
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="compensation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-900/20 p-6 rounded-lg border border-primary-400/20">
              <h3 className="text-lg font-semibold text-white mb-4">Average Salary by Department</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={salaryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {salaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-primary-900/20 p-6 rounded-lg border border-primary-400/20">
              <h3 className="text-lg font-semibold text-white mb-4">Your Compensation Package</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-primary-100">Base Salary</span>
                    <span className="text-white font-semibold">$110,000</span>
                  </div>
                  <div className="h-2 w-full bg-primary-800 rounded-full">
                    <div className="h-full bg-primary-400 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-primary-300 mt-1">
                    <span>Range Min: $95,000</span>
                    <span>Range Max: $125,000</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-primary-100">Performance Bonus</span>
                    <span className="text-white font-semibold">$16,500 (15%)</span>
                  </div>
                  <div className="h-2 w-full bg-primary-800 rounded-full">
                    <div className="h-full bg-accent-blue rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-primary-100">Equity</span>
                    <span className="text-white font-semibold">1,200 RSUs</span>
                  </div>
                  <div className="h-2 w-full bg-primary-800 rounded-full">
                    <div className="h-full bg-accent rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-primary-700 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-100">Total Compensation</span>
                    <span className="text-white font-bold">$136,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="benefits">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-900/20 p-6 rounded-lg border border-primary-400/20">
              <h3 className="text-lg font-semibold text-white mb-4">Benefits Utilization</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={benefitsData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-primary-900/20 p-6 rounded-lg border border-primary-400/20">
              <h3 className="text-lg font-semibold text-white mb-4">Your Benefits Summary</h3>
              <div className="space-y-4">
                <div className="p-3 bg-primary-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <span className="text-blue-400 text-xl">🏥</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Health & Wellness</h4>
                      <p className="text-xs text-primary-300">Premium Plan + Dental & Vision</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-primary-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <span className="text-green-400 text-xl">🏦</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Retirement</h4>
                      <p className="text-xs text-primary-300">401(k) with 6% company match</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-primary-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                      <span className="text-amber-400 text-xl">✈️</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Paid Time Off</h4>
                      <p className="text-xs text-primary-300">25 days + 12 holidays</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-primary-800/50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <span className="text-purple-400 text-xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Learning & Development</h4>
                      <p className="text-xs text-primary-300">$5,000 annual education allowance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </GlassContainer>
  );
};

export default CompensationBenefits;
