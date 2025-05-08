
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Calendar, FileText, User, Check } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

const HrZone = () => {
  const [leaveForm, setLeaveForm] = useState({
    startDate: '',
    endDate: '',
    leaveType: 'annual',
    reason: ''
  });
  const [activeTab, setActiveTab] = useState('leave');
  const { showToast, ToastContainer } = useToast();

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
    showToast('Leave request submitted successfully!', 'success');
    setLeaveForm({
      startDate: '',
      endDate: '',
      leaveType: 'annual',
      reason: ''
    });
  };

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title="HR Zone"
          description="Manage your leaves, view holidays, and access HR resources"
          withParallax={true}
        />

        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('leave')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'leave'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Leave Application
              </button>
              <button
                onClick={() => setActiveTab('holidays')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'holidays'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Holiday Calendar
              </button>
              <button
                onClick={() => setActiveTab('attendance')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'attendance'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Attendance
              </button>
              <button
                onClick={() => setActiveTab('onboarding')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'onboarding'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                New Hire Checklist
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'leave' && (
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            <Card title="Apply for Leave" icon={Calendar} animateOnScroll={true}>
              <form onSubmit={handleLeaveSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Leave Type
                  </label>
                  <select
                    name="leaveType"
                    value={leaveForm.leaveType}
                    onChange={handleLeaveFormChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                    required
                  >
                    <option value="annual">Annual Leave</option>
                    <option value="sick">Sick Leave</option>
                    <option value="personal">Personal Leave</option>
                    <option value="bereavement">Bereavement Leave</option>
                    <option value="unpaid">Unpaid Leave</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={leaveForm.startDate}
                      onChange={handleLeaveFormChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={leaveForm.endDate}
                      onChange={handleLeaveFormChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Reason
                  </label>
                  <textarea
                    name="reason"
                    value={leaveForm.reason}
                    onChange={handleLeaveFormChange}
                    rows="3"
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
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
            </Card>

            <Card title="Leave Balance" icon={FileText} animateOnScroll={true}>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Annual Leave</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">18 days remaining</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-green-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-green-600">18/24</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Sick Leave</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">6 days remaining</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-blue-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">6/10</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Recent Leave History</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Sick Leave:</span> April 10-11, 2025
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Annual Leave:</span> March 15-22, 2025
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'holidays' && (
          <div className="mb-8">
            <Card title="Holiday Calendar 2025" icon={Calendar} animateOnScroll={true}>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Holiday
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {holidays.map((holiday, index) => (
                      <tr 
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer group"
                        title={`${holiday.name} - ${holiday.type}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {holiday.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {holiday.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-xs">
                            {holiday.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="mb-8">
            <Card title="Attendance Logs" icon={User} animateOnScroll={true}>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Check In
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Check Out
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {attendanceLogs.map((log, index) => (
                      <tr 
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {log.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {log.checkIn}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {log.checkOut}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full ${
                            log.status === 'Present' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
                              : log.status === 'Absent'
                                ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          } text-xs`}>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'onboarding' && (
          <div className="mb-8">
            <Card title="New Hire Onboarding Checklist" icon={Check} animateOnScroll={true}>
              <div className="space-y-6">
                <div className="relative">
                  <div className="overflow-hidden h-2 text-xs flex bg-gray-200 dark:bg-gray-700 rounded">
                    <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"></div>
                  </div>
                  <div className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">
                    3 of 5 completed (60%)
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {onBoardingSteps.map((step) => (
                    <li key={step.id} className="flex items-start">
                      <div className={`h-5 w-5 rounded-full mr-3 flex-shrink-0 mt-0.5 ${
                        step.completed ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-700'
                      }`}>
                        {step.completed && (
                          <Check className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          step.completed 
                            ? 'text-gray-700 dark:text-gray-300 line-through' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {step.title}
                        </p>
                        {!step.completed && (
                          <button className="mt-1 text-xs text-primary-600 dark:text-primary-400 hover:underline">
                            Mark as complete
                          </button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Notes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The training sessions are scheduled for next week. Your team manager will provide more details soon.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default HrZone;
