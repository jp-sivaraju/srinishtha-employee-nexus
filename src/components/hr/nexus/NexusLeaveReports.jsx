
import React, { useState } from 'react';
import { BarChart2, PieChart, Calendar, Download, Filter, FileText } from 'lucide-react';

// Mock data for reports
const leaveTypeData = [
  { name: 'Annual Leave', value: 45, color: '#4F46E5' },
  { name: 'Sick Leave', value: 20, color: '#EF4444' },
  { name: 'Personal Leave', value: 15, color: '#8B5CF6' },
  { name: 'Bereavement Leave', value: 5, color: '#6B7280' },
  { name: 'Parental Leave', value: 10, color: '#10B981' },
  { name: 'Unpaid Leave', value: 5, color: '#F59E0B' }
];

const monthlyData = [
  { name: 'Jan', value: 5 },
  { name: 'Feb', value: 7 },
  { name: 'Mar', value: 8 },
  { name: 'Apr', value: 10 },
  { name: 'May', value: 15 },
  { name: 'Jun', value: 20 },
  { name: 'Jul', value: 25 },
  { name: 'Aug', value: 18 },
  { name: 'Sep', value: 12 },
  { name: 'Oct', value: 8 },
  { name: 'Nov', value: 6 },
  { name: 'Dec', value: 10 }
];

const departmentData = [
  { name: 'Engineering', value: 35 },
  { name: 'Marketing', value: 20 },
  { name: 'Sales', value: 15 },
  { name: 'HR', value: 10 },
  { name: 'Finance', value: 12 },
  { name: 'Operations', value: 8 }
];

const NexusLeaveReports = () => {
  const [reportType, setReportType] = useState('overview');
  const [year, setYear] = useState('2025');
  const [department, setDepartment] = useState('all');
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h3 className="text-lg font-medium text-[#1C2526] mb-2 md:mb-0">
          <BarChart2 className="inline-block h-5 w-5 mr-2 text-[#6B48FF]" />
          Leave Analytics & Reports
        </h3>
        
        <div className="flex flex-wrap gap-2">
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="p-2 text-sm border border-[#6B48FF] rounded-md focus:ring-[#6B48FF] focus:border-[#6B48FF]"
          >
            <option value="overview">Overview</option>
            <option value="monthly">Monthly Distribution</option>
            <option value="department">Department Analysis</option>
            <option value="custom">Custom Report</option>
          </select>
          
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="p-2 text-sm border border-[#6B48FF] rounded-md focus:ring-[#6B48FF] focus:border-[#6B48FF]"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
          
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="p-2 text-sm border border-[#6B48FF] rounded-md focus:ring-[#6B48FF] focus:border-[#6B48FF]"
          >
            <option value="all">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="hr">HR</option>
            <option value="finance">Finance</option>
          </select>
          
          <button className="p-2 bg-[#6B48FF] text-white rounded-md hover:bg-[#A78BFA] flex items-center">
            <Download className="h-4 w-4 mr-1" />
            Export
          </button>
        </div>
      </div>
      
      {reportType === 'overview' && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Total Leave Days</h4>
              <div className="text-2xl font-bold text-[#1C2526]">145</div>
              <div className="text-xs text-green-600 mt-1">+12% from previous year</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Annual Leave Usage</h4>
              <div className="text-2xl font-bold text-[#1C2526]">78%</div>
              <div className="text-xs text-red-600 mt-1">+5% from previous year</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Sick Leave Usage</h4>
              <div className="text-2xl font-bold text-[#1C2526]">42%</div>
              <div className="text-xs text-green-600 mt-1">-3% from previous year</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Average Leave/Employee</h4>
              <div className="text-2xl font-bold text-[#1C2526]">12.5</div>
              <div className="text-xs text-yellow-600 mt-1">Same as previous year</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-md font-medium text-[#1C2526] mb-4">Leave Type Distribution</h4>
              
              <div className="relative pt-0 h-60">
                {/* In a real app, this would be a proper chart component */}
                <div className="flex h-full items-end">
                  {leaveTypeData.map((item, index) => (
                    <div key={index} className="flex-1 mx-1 flex flex-col items-center">
                      <div 
                        className="w-full rounded-t-sm" 
                        style={{ 
                          height: `${item.value * 2}px`, 
                          backgroundColor: item.color 
                        }}
                      ></div>
                      <div className="text-xs mt-1 text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                {leaveTypeData.map((item, index) => (
                  <div key={index} className="flex items-center text-xs">
                    <div className="h-3 w-3 mr-2 rounded-sm" style={{ backgroundColor: item.color }}></div>
                    <div className="flex items-center justify-between w-full">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-md font-medium text-[#1C2526] mb-4">Monthly Leave Trends</h4>
              
              <div className="relative pt-0 h-60">
                {/* In a real app, this would be a proper chart component */}
                <div className="flex h-full items-end">
                  {monthlyData.map((item, index) => (
                    <div key={index} className="flex-1 mx-0.5 flex flex-col items-center">
                      <div 
                        className={`w-full rounded-t-sm ${
                          item.value > 15 ? 'bg-[#6B48FF]' : 'bg-[#A78BFA]'
                        }`} 
                        style={{ height: `${item.value * 2}px` }}
                      ></div>
                      <div className="text-xs mt-1 text-gray-600">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                <p className="flex items-center justify-end">
                  <span className="h-2 w-2 rounded-full bg-[#6B48FF] mr-1"></span>
                  Peak season (June-August)
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-md font-medium text-[#1C2526] mb-4">Top Leave Takers</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Employee
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Leave Days
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Common Type
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Michael Brown
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Engineering
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      24 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Parental Leave
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600">↑ 10%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Sarah Williams
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Marketing
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      18 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Annual Leave
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-yellow-600">↔ 0%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Alex Johnson
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Sales
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      15 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Sick Leave
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-red-600">↓ 5%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {reportType === 'monthly' && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-md font-medium text-[#1C2526] mb-6">Monthly Leave Distribution ({year})</h4>
          
          <div className="relative pt-0 h-80">
            {/* In a real app, this would be a proper chart component */}
            <div className="flex h-full items-end">
              {monthlyData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className={`w-4/5 rounded-t-sm ${
                      item.value > 15 ? 'bg-[#6B48FF]' : 'bg-[#A78BFA]'
                    }`} 
                    style={{ height: `${item.value * 3}px` }}
                  ></div>
                  <div className="text-xs mt-1 text-gray-600">
                    {item.name}
                  </div>
                  <div className="text-xs font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">Key Findings</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#6B48FF] mt-1.5 mr-2"></span>
                  Highest leave usage in July (25 days) coincides with summer vacation period
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#6B48FF] mt-1.5 mr-2"></span>
                  Lowest leave usage in November (6 days) and February (7 days)
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#6B48FF] mt-1.5 mr-2"></span>
                  Q2 and Q3 account for 65% of total annual leave usage
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-2">Recommendations</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#6B48FF] mt-1.5 mr-2"></span>
                  Encourage leave usage in low-demand periods (Feb, Nov)
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#6B48FF] mt-1.5 mr-2"></span>
                  Consider rotating staff during peak leave periods
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-[#6B48FF] mt-1.5 mr-2"></span>
                  Plan project deadlines around typical high leave periods
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {reportType === 'department' && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-md font-medium text-[#1C2526] mb-6">Department Leave Analysis ({year})</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-4">Leave Days by Department</h5>
              
              <div className="space-y-4">
                {departmentData.map((dept, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm text-gray-700">{dept.name}</div>
                      <div className="text-sm font-medium">{dept.value} days</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#6B48FF] h-2 rounded-full" 
                        style={{ width: `${dept.value / 0.35}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-4">Leave Type Distribution by Department</h5>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Engineering</p>
                  <div className="flex h-4">
                    <div className="bg-[#4F46E5] h-full" style={{ width: '40%' }}></div>
                    <div className="bg-[#EF4444] h-full" style={{ width: '30%' }}></div>
                    <div className="bg-[#8B5CF6] h-full" style={{ width: '15%' }}></div>
                    <div className="bg-[#10B981] h-full" style={{ width: '10%' }}></div>
                    <div className="bg-[#F59E0B] h-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1">Marketing</p>
                  <div className="flex h-4">
                    <div className="bg-[#4F46E5] h-full" style={{ width: '50%' }}></div>
                    <div className="bg-[#EF4444] h-full" style={{ width: '20%' }}></div>
                    <div className="bg-[#8B5CF6] h-full" style={{ width: '20%' }}></div>
                    <div className="bg-[#10B981] h-full" style={{ width: '5%' }}></div>
                    <div className="bg-[#F59E0B] h-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1">Sales</p>
                  <div className="flex h-4">
                    <div className="bg-[#4F46E5] h-full" style={{ width: '45%' }}></div>
                    <div className="bg-[#EF4444] h-full" style={{ width: '15%' }}></div>
                    <div className="bg-[#8B5CF6] h-full" style={{ width: '25%' }}></div>
                    <div className="bg-[#10B981] h-full" style={{ width: '10%' }}></div>
                    <div className="bg-[#F59E0B] h-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="flex items-center text-xs">
                    <div className="h-3 w-3 mr-1 bg-[#4F46E5]"></div>
                    <span>Annual</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="h-3 w-3 mr-1 bg-[#EF4444]"></div>
                    <span>Sick</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="h-3 w-3 mr-1 bg-[#8B5CF6]"></div>
                    <span>Personal</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="h-3 w-3 mr-1 bg-[#10B981]"></div>
                    <span>Parental</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="h-3 w-3 mr-1 bg-[#F59E0B]"></div>
                    <span>Other</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h5 className="text-sm font-medium text-gray-700 mb-2">Department Insights</h5>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg. Leave/Person
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Most Common Type
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      YoY Change
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Leave Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Engineering
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      14.2 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Annual Leave (40%)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600">+8%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      68% used
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Marketing
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      15.8 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Annual Leave (50%)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600">+12%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      75% used
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Sales
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      12.5 days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Annual Leave (45%)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-red-600">-3%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      62% used
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {reportType === 'custom' && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-md font-medium text-[#1C2526] mb-4">Custom Report Generator</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-6">
              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-3">Report Parameters</h5>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Report Title</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Enter report title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Date Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="date" 
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      />
                      <input 
                        type="date" 
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Departments</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      multiple
                      size="4"
                    >
                      <option value="all">All Departments</option>
                      <option value="engineering">Engineering</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="hr">HR</option>
                      <option value="finance">Finance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Leave Types</label>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <input type="checkbox" id="annual" className="h-3 w-3 text-[#6B48FF]" defaultChecked />
                        <label htmlFor="annual" className="ml-2 text-xs text-gray-700">Annual Leave</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="sick" className="h-3 w-3 text-[#6B48FF]" defaultChecked />
                        <label htmlFor="sick" className="ml-2 text-xs text-gray-700">Sick Leave</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="personal" className="h-3 w-3 text-[#6B48FF]" defaultChecked />
                        <label htmlFor="personal" className="ml-2 text-xs text-gray-700">Personal Leave</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="parental" className="h-3 w-3 text-[#6B48FF]" defaultChecked />
                        <label htmlFor="parental" className="ml-2 text-xs text-gray-700">Parental Leave</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="other" className="h-3 w-3 text-[#6B48FF]" defaultChecked />
                        <label htmlFor="other" className="ml-2 text-xs text-gray-700">Other Types</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Group By</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option value="month">Month</option>
                      <option value="department">Department</option>
                      <option value="leaveType">Leave Type</option>
                      <option value="employee">Employee</option>
                    </select>
                  </div>
                  
                  <button 
                    type="button"
                    className="w-full px-4 py-2 bg-[#6B48FF] text-white rounded-md hover:bg-[#A78BFA] flex items-center justify-center text-sm"
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    Generate Report
                  </button>
                </form>
              </div>
              
              <div>
                <h5 className="text-sm font-medium text-gray-700 mb-2">Saved Reports</h5>
                
                <div className="space-y-2">
                  <div className="p-2 border border-gray-200 rounded-md flex items-center justify-between group hover:border-[#6B48FF]">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-gray-500 mr-2" />
                      <div className="text-xs">Annual Leave Usage 2025</div>
                    </div>
                    <button className="text-[#6B48FF] opacity-0 group-hover:opacity-100 text-xs">Load</button>
                  </div>
                  
                  <div className="p-2 border border-gray-200 rounded-md flex items-center justify-between group hover:border-[#6B48FF]">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-gray-500 mr-2" />
                      <div className="text-xs">Department Comparison</div>
                    </div>
                    <button className="text-[#6B48FF] opacity-0 group-hover:opacity-100 text-xs">Load</button>
                  </div>
                  
                  <div className="p-2 border border-gray-200 rounded-md flex items-center justify-between group hover:border-[#6B48FF]">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-gray-500 mr-2" />
                      <div className="text-xs">Quarterly Report Q1 2025</div>
                    </div>
                    <button className="text-[#6B48FF] opacity-0 group-hover:opacity-100 text-xs">Load</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-sm font-medium text-gray-700">Report Preview</h5>
                
                <div className="flex items-center space-x-2">
                  <button className="px-2 py-1 bg-gray-100 rounded text-xs hover:bg-gray-200 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    Table
                  </button>
                  
                  <button className="px-2 py-1 bg-gray-100 rounded text-xs hover:bg-gray-200 flex items-center">
                    <BarChart2 className="h-3 w-3 mr-1" />
                    Chart
                  </button>
                  
                  <button className="px-2 py-1 bg-gray-100 rounded text-xs hover:bg-gray-200 flex items-center">
                    <PieChart className="h-3 w-3 mr-1" />
                    Pie
                  </button>
                </div>
              </div>
              
              <div className="border border-dashed border-gray-300 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Generate a report to preview</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Configure parameters on the left panel and click "Generate Report"
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex justify-center space-x-2">
                  <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 flex items-center">
                    <Download className="h-3 w-3 mr-1" />
                    PDF
                  </button>
                  
                  <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 flex items-center">
                    <Download className="h-3 w-3 mr-1" />
                    Excel
                  </button>
                  
                  <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 flex items-center">
                    <Download className="h-3 w-3 mr-1" />
                    CSV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NexusLeaveReports;
