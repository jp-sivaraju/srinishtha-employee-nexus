
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { 
  Calendar, 
  FileText, 
  User, 
  Check, 
  Users, 
  Award, 
  BookOpen, 
  DollarSign
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { toast } from '../components/ui/sonner';
import GlassContainer from '../components/ui/GlassContainer';
import GradientText from '../components/ui/GradientText';
import EmployeeDirectory from '../components/hr/EmployeeDirectory';
import RecruitmentDashboard from '../components/hr/RecruitmentDashboard';
import TrainingDevelopment from '../components/hr/TrainingDevelopment';
import CompensationBenefits from '../components/hr/CompensationBenefits';
import PerformanceReviews from '../components/hr/PerformanceReviews';

const HrZone = () => {
  const [leaveForm, setLeaveForm] = useState({
    startDate: '',
    endDate: '',
    leaveType: 'annual',
    reason: ''
  });
  const [activeTab, setActiveTab] = useState('dashboard');

  const holidays = [
    { date: 'January 1, 2025', name: 'New Year\'s Day', type: 'Public Holiday' },
    { date: 'January 26, 2025', name: 'Republic Day', type: 'Public Holiday' },
    { date: 'March 25, 2025', name: 'Holi', type: 'Public Holiday' },
    { date: 'April 14, 2025', name: 'Dr. Ambedkar Jayanti', type: 'Public Holiday' },
    { date: 'May 1, 2025', name: 'Labor Day', type: 'Public Holiday' },
    { date: 'August 15, 2025', name: 'Independence Day', type: 'Public Holiday' },
    { date: 'October 2, 2025', name: 'Gandhi Jayanti', type: 'Public Holiday' },
    { date: 'December 25, 2025', name: 'Christmas', type: 'Public Holiday' },
  ];

  const attendanceLogs = [
    { date: 'May 7, 2025', checkIn: '09:05 AM', checkOut: '06:12 PM', status: 'Present' },
    { date: 'May 6, 2025', checkIn: '08:55 AM', checkOut: '06:03 PM', status: 'Present' },
    { date: 'May 5, 2025', checkIn: '09:15 AM', checkOut: '06:30 PM', status: 'Present' },
    { date: 'May 4, 2025', checkIn: '-', checkOut: '-', status: 'Weekend' },
    { date: 'May 3, 2025', checkIn: '-', checkOut: '-', status: 'Weekend' },
    { date: 'May 2, 2025', checkIn: '09:00 AM', checkOut: '05:45 PM', status: 'Present' },
  ];

  const onBoardingSteps = [
    { id: 1, title: 'Complete HR Documentation', completed: true },
    { id: 2, title: 'IT Equipment Setup', completed: true },
    { id: 3, title: 'Team Introduction', completed: true },
    { id: 4, title: 'Training Sessions', completed: false },
    { id: 5, title: 'First Project Assignment', completed: false }
  ];

  const handleLeaveFormChange = (e) => {
    const { name, value } = e.target;
    setLeaveForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    toast.success('Leave request submitted successfully!');
    setLeaveForm({
      startDate: '',
      endDate: '',
      leaveType: 'annual',
      reason: ''
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg flex items-center">
                <div className="bg-primary-400/30 p-3 rounded-md mr-4">
                  <Users className="text-primary-100 h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-300">Total Employees</p>
                  <p className="text-2xl font-bold text-white">248</p>
                </div>
              </div>
              
              <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg flex items-center">
                <div className="bg-primary-400/30 p-3 rounded-md mr-4">
                  <Calendar className="text-primary-100 h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-300">Leave Requests</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
              </div>
              
              <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg flex items-center">
                <div className="bg-primary-400/30 p-3 rounded-md mr-4">
                  <Award className="text-primary-100 h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-300">New Hires (Month)</p>
                  <p className="text-2xl font-bold text-white">8</p>
                </div>
              </div>
              
              <div className="bg-primary-900/20 p-4 rounded-lg border border-primary-400/20 shadow-lg flex items-center">
                <div className="bg-primary-400/30 p-3 rounded-md mr-4">
                  <BookOpen className="text-primary-100 h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-300">Training Hours</p>
                  <p className="text-2xl font-bold text-white">156</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassContainer>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <GradientText as="h2" className="text-xl font-semibold" gradient="night-owl">
                      Leave Management
                    </GradientText>
                  </div>
                  
                  <form onSubmit={handleLeaveSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-200 mb-1">Leave Type</label>
                      <select
                        name="leaveType"
                        value={leaveForm.leaveType}
                        onChange={handleLeaveFormChange}
                        className="w-full p-2 border border-primary-400/30 rounded-md shadow-sm bg-primary-900/50 text-white focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="annual">Annual Leave</option>
                        <option value="sick">Sick Leave</option>
                        <option value="personal">Personal Leave</option>
                        <option value="bereavement">Bereavement Leave</option>
                        <option value="unpaid">Unpaid Leave</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-200 mb-1">Start Date</label>
                        <input
                          type="date"
                          name="startDate"
                          value={leaveForm.startDate}
                          onChange={handleLeaveFormChange}
                          className="w-full p-2 border border-primary-400/30 rounded-md shadow-sm bg-primary-900/50 text-white focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-200 mb-1">End Date</label>
                        <input
                          type="date"
                          name="endDate"
                          value={leaveForm.endDate}
                          onChange={handleLeaveFormChange}
                          className="w-full p-2 border border-primary-400/30 rounded-md shadow-sm bg-primary-900/50 text-white focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-200 mb-1">Reason</label>
                      <textarea
                        name="reason"
                        value={leaveForm.reason}
                        onChange={handleLeaveFormChange}
                        rows="3"
                        className="w-full p-2 border border-primary-400/30 rounded-md shadow-sm bg-primary-900/50 text-white focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Please provide a reason for your leave request"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </GlassContainer>
              
              <GlassContainer>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <GradientText as="h2" className="text-xl font-semibold" gradient="night-owl">
                      Leave Balance
                    </GradientText>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-primary-300">Annual Leave</p>
                        <p className="text-xl font-semibold text-white">18 days remaining</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-green-400/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-green-400">18/24</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-primary-300">Sick Leave</p>
                        <p className="text-xl font-semibold text-white">6 days remaining</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-blue-400/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-400">6/10</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-primary-700 mt-4">
                      <h4 className="font-medium text-primary-200 mb-2">Recent Leave History</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-primary-100">
                          <span className="font-medium">Sick Leave:</span> April 10-11, 2025
                        </li>
                        <li className="text-sm text-primary-100">
                          <span className="font-medium">Annual Leave:</span> March 15-22, 2025
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassContainer>
            </div>
          </div>
        );
        
      case 'directory':
        return <EmployeeDirectory />;
        
      case 'recruitment':
        return <RecruitmentDashboard />;
        
      case 'training':
        return <TrainingDevelopment />;
        
      case 'compensation':
        return <CompensationBenefits />;
        
      case 'performance':
        return <PerformanceReviews />;
        
      case 'holidays':
        return (
          <GlassContainer className="p-6">
            <GradientText as="h2" className="text-2xl font-semibold mb-6" gradient="night-owl">
              Holiday Calendar 2025
            </GradientText>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-primary-700">
                <thead className="bg-primary-900/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                      Holiday
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-primary-900/20 divide-y divide-primary-800">
                  {holidays.map((holiday, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-primary-800/30 cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-100">
                        {holiday.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {holiday.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs">
                          {holiday.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassContainer>
        );
        
      case 'attendance':
        return (
          <GlassContainer className="p-6">
            <GradientText as="h2" className="text-2xl font-semibold mb-6" gradient="night-owl">
              Attendance Logs
            </GradientText>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-primary-700">
                <thead className="bg-primary-900/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                      Check In
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                      Check Out
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-primary-300 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-primary-900/20 divide-y divide-primary-800">
                  {attendanceLogs.map((log, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-primary-800/30"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-100">
                        {log.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {log.checkIn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {log.checkOut}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full ${
                          log.status === 'Present' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                            : log.status === 'Absent'
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        } text-xs`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassContainer>
        );
        
      case 'onboarding':
        return (
          <GlassContainer className="p-6">
            <GradientText as="h2" className="text-2xl font-semibold mb-6" gradient="night-owl">
              New Hire Onboarding Checklist
            </GradientText>
            <div className="space-y-6">
              <div className="relative">
                <div className="overflow-hidden h-2 text-xs flex bg-primary-800 rounded">
                  <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"></div>
                </div>
                <div className="mt-2 text-right text-sm text-primary-300">
                  3 of 5 completed (60%)
                </div>
              </div>
              
              <ul className="space-y-4">
                {onBoardingSteps.map((step) => (
                  <li key={step.id} className="flex items-start">
                    <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-0.5 ${
                      step.completed ? 'bg-primary-500' : 'bg-primary-800'
                    }`}>
                      {step.completed && (
                        <Check className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${
                        step.completed 
                          ? 'text-primary-200 line-through' 
                          : 'text-white'
                      }`}>
                        {step.title}
                      </p>
                      {!step.completed && (
                        <button className="mt-1 text-xs text-primary-400 hover:underline">
                          Mark as complete
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-primary-700">
                <h4 className="font-medium text-primary-200 mb-2">Notes</h4>
                <p className="text-sm text-primary-300">
                  The training sessions are scheduled for next week. Your team manager will provide more details soon.
                </p>
              </div>
            </div>
          </GlassContainer>
        );
        
      default:
        return <div>Select a tab</div>;
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FileText size={18} /> },
    { id: 'directory', label: 'Employee Directory', icon: <Users size={18} /> },
    { id: 'recruitment', label: 'Recruitment', icon: <User size={18} /> },
    { id: 'training', label: 'Training & Development', icon: <BookOpen size={18} /> },
    { id: 'compensation', label: 'Compensation', icon: <DollarSign size={18} /> },
    { id: 'performance', label: 'Performance', icon: <Award size={18} /> },
    { id: 'holidays', label: 'Holidays', icon: <Calendar size={18} /> },
    { id: 'attendance', label: 'Attendance', icon: <Check size={18} /> },
    { id: 'onboarding', label: 'Onboarding', icon: <User size={18} /> }
  ];

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title="HR Zone"
          description="Comprehensive HR Management System for your organization"
          withParallax={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-3">
            <GlassContainer className="p-4">
              <GradientText as="h3" className="text-xl font-semibold mb-4" gradient="night-owl">
                HR Management
              </GradientText>
              <nav>
                <ul className="space-y-2">
                  {navItems.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center w-full px-3 py-2 rounded-md transition-colors ${
                          activeTab === item.id
                            ? 'bg-primary-500/20 text-white'
                            : 'text-primary-300 hover:bg-primary-800/50 hover:text-primary-200'
                        }`}
                      >
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </GlassContainer>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HrZone;
