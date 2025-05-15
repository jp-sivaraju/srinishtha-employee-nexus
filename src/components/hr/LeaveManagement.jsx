
import React, { useState } from 'react';
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
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1C2526]">Leave Management</h2>
      </div>
      
      <form onSubmit={handleLeaveSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#1C2526] mb-1">Leave Type</label>
          <select
            name="leaveType"
            value={leaveForm.leaveType}
            onChange={handleLeaveFormChange}
            className="w-full p-2 border border-[#6B48FF] rounded-md shadow-sm bg-white text-[#1C2526] focus:ring-[#6B48FF] focus:border-[#6B48FF] transition-colors"
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
            <label className="block text-sm font-medium text-[#1C2526] mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={leaveForm.startDate}
              onChange={handleLeaveFormChange}
              className="w-full p-2 border border-[#6B48FF] rounded-md shadow-sm bg-white text-[#1C2526] focus:ring-[#6B48FF] focus:border-[#6B48FF] transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1C2526] mb-1">End Date</label>
            <input
              type="date"
              name="endDate"
              value={leaveForm.endDate}
              onChange={handleLeaveFormChange}
              className="w-full p-2 border border-[#6B48FF] rounded-md shadow-sm bg-white text-[#1C2526] focus:ring-[#6B48FF] focus:border-[#6B48FF] transition-colors"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#1C2526] mb-1">Reason</label>
          <textarea
            name="reason"
            value={leaveForm.reason}
            onChange={handleLeaveFormChange}
            rows="3"
            className="w-full p-2 border border-[#6B48FF] rounded-md shadow-sm bg-white text-[#1C2526] focus:ring-[#6B48FF] focus:border-[#6B48FF] transition-colors"
            placeholder="Please provide a reason for your leave request"
            required
          ></textarea>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-[#6B48FF] text-white rounded-md hover:bg-[#A78BFA] focus:outline-none focus:ring-2 focus:ring-[#6B48FF] shadow-md transition-colors"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveManagement;
