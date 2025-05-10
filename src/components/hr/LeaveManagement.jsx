
import React, { useState } from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';
import { toast } from '../ui/sonner';

const LeaveManagement = () => {
  const [leaveForm, setLeaveForm] = useState({
    startDate: '',
    endDate: '',
    leaveType: 'annual',
    reason: ''
  });

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

  return (
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
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transition-all"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </GlassContainer>
  );
};

export default LeaveManagement;
