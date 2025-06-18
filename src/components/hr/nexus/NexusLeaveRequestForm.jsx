
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';
import { toast } from '../../ui/sonner';
import { useNavigate } from 'react-router-dom';


const RequestLeave = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    leaveType: 'Casual Leave',
    startDate: '',
    dayType: 'Full Day',
    endDate: '',
    reason: '',
  });
 
  const [duration, setDuration] = useState(0);
  const availableDays = 20;
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  useEffect(() => {
    calculateDuration();
    setErrorMessage(availableDays === 0 ? 'No leave balance available' : '');
  }, [formData.startDate, formData.endDate, formData.dayType]);
 
  const calculateDuration = () => {
    if (!formData.startDate) return;
 
    const start = new Date(formData.startDate);
    const end = formData.endDate ? new Date(formData.endDate) : new Date(formData.startDate);
 
    if (formData.startDate === formData.endDate || !formData.endDate) {
      const days = formData.dayType === 'Half Day' ? 0.5 : 1;
      setDuration(days);
      return;
    }
 
    end.setDate(end.getDate() + 1);
    let days = 0;
    const currentDate = new Date(start);
 
    while (currentDate < end) {
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        days++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
 
    days = formData.dayType === 'Half Day' ? days * 0.5 : days;
    setDuration(days);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
 
    setIsSubmitting(true);
    try {
      const leaveRequest = {
        ...formData,
        duration,
        remainingBalance: availableDays - duration,
        status: 'Pending',
        employeeEmail: localStorage.getItem('employeeEmail'),
        createdAt: new Date().toISOString(),
      };
 
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
      successMessage.textContent = 'Leave request submitted successfully!';
      document.body.appendChild(successMessage);
 
      setTimeout(() => {
        document.body.removeChild(successMessage);
        navigate('/hr-zone/leave-history');
      }, 2000);
    } catch (error) {
      setErrorMessage('Failed to submit leave request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
 
  const validateForm = () => {
    if (!formData.startDate) {
      setErrorMessage('Please select a start date');
      return false;
    }
 
    if (formData.endDate && new Date(formData.endDate) < new Date(formData.startDate)) {
      setErrorMessage('End date cannot be before start date');
      return false;
    }
 
    if (duration > availableDays) {
      setErrorMessage('Insufficient leave balance');
      return false;
    }
 
    return true;
  };
 
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Request Leave</h2>
          <p className="text-gray-600 mt-2">Available Balance: {availableDays} days</p>
        </div>
 
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Leave Type</label>
              <select
                value={formData.leaveType}
                onChange={(e) => {
                  const selectedLeaveType = e.target.value;
                  setFormData({
                    ...formData,
                    leaveType: selectedLeaveType,
                    dayType: selectedLeaveType === 'Casual Leave' ? formData.dayType : 'Full Day',
                  });
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option>Casual Leave</option>
                <option>Sick Leave</option>
                <option>Personal Leave</option>
                <option>Paternity Leave</option>
                <option>Maternity Leave</option>
                <option>Unpaid Leave</option>
              </select>
            </div>
 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Day Type</label>
              <select
                value={formData.dayType}
                onChange={(e) => setFormData({ ...formData, dayType: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                disabled={formData.leaveType !== 'Casual Leave'}
              >
                <option>Full Day</option>
                {formData.leaveType === 'Casual Leave' && <option>Half Day</option>}
              </select>
            </div>
 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                min={formData.startDate}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
 
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
              placeholder="Please provide a reason for your leave request"
            />
          </div>
 
          {errorMessage && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}
 
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Leave Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Duration:</p>
                <p className="font-medium">{duration} days</p>
              </div>
              <div>
                <p className="text-gray-600">Remaining Balance:</p>
                <p className="font-medium">{availableDays - duration} days</p>
              </div>
            </div>
          </div>
 
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
 
export default RequestLeave;
 