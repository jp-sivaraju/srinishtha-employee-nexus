
import React, { useState } from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';
import { toast } from '../../ui/sonner';

const leaveTypes = [
  { id: 'annual', label: 'Annual Leave', balance: 18 },
  { id: 'sick', label: 'Sick Leave', balance: 12 },
  { id: 'personal', label: 'Personal Leave', balance: 5 },
  { id: 'bereavement', label: 'Bereavement Leave', balance: 3 },
  { id: 'parental', label: 'Parental Leave', balance: 30 },
  { id: 'unpaid', label: 'Unpaid Leave', balance: null },
];

const NexusLeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    leaveType: 'annual',
    startDate: '',
    endDate: '',
    startHalf: 'full',
    endHalf: 'full',
    reason: '',
    attachments: [],
    notifyManager: true,
    notifyTeam: false,
  });
  
  const [calculatedDays, setCalculatedDays] = useState(0);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: [...formData.attachments, ...files] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Recalculate days when dates change
    if (name === 'startDate' || name === 'endDate' || name === 'startHalf' || name === 'endHalf') {
      calculateLeaveDays();
    }
  };
  
  const calculateLeaveDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      
      // Calculate days between dates
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end dates
      
      // Adjust for half days
      let adjustedDays = diffDays;
      if (formData.startHalf === 'half') adjustedDays -= 0.5;
      if (formData.endHalf === 'half') adjustedDays -= 0.5;
      
      setCalculatedDays(adjustedDays);
    }
  };
  
  const handleRemoveAttachment = (index) => {
    const newAttachments = [...formData.attachments];
    newAttachments.splice(index, 1);
    setFormData({ ...formData, attachments: newAttachments });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.startDate || !formData.endDate) {
      toast.error('Please select both start and end dates');
      return;
    }
    
    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      toast.error('End date cannot be before start date');
      return;
    }
    
    // Submit form (this would connect to an API in a real application)
    toast.success('Leave request submitted successfully');
    console.log('Leave request submitted:', formData);
    
    // Reset form
    setFormData({
      leaveType: 'annual',
      startDate: '',
      endDate: '',
      startHalf: 'full',
      endHalf: 'full',
      reason: '',
      attachments: [],
      notifyManager: true,
      notifyTeam: false,
    });
    setCalculatedDays(0);
  };
  
  // Find selected leave type
  const selectedLeaveType = leaveTypes.find(type => type.id === formData.leaveType);
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Leave Type</label>
              <select
                name="leaveType"
                value={formData.leaveType}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#6B48FF] rounded-md shadow-sm focus:ring-[#6B48FF] focus:border-[#6B48FF]"
              >
                {leaveTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              {selectedLeaveType.balance !== null && (
                <div className="bg-[#6B48FF]/10 p-3 rounded-md border border-[#6B48FF]/20 flex items-center text-[#6B48FF] font-medium">
                  <Clock className="h-4 w-4 mr-2" />
                  Available: {selectedLeaveType.balance} days
                </div>
              )}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <div className="flex gap-2">
                <div className="flex-grow">
                  <div className="relative">
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 p-2 border border-[#6B48FF] rounded-md shadow-sm focus:ring-[#6B48FF] focus:border-[#6B48FF]"
                    />
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <select
                  name="startHalf"
                  value={formData.startHalf}
                  onChange={handleInputChange}
                  className="w-1/3 p-2 border border-[#6B48FF] rounded-md shadow-sm focus:ring-[#6B48FF] focus:border-[#6B48FF]"
                >
                  <option value="full">Full Day</option>
                  <option value="half">Half Day</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <div className="flex gap-2">
                <div className="flex-grow">
                  <div className="relative">
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 p-2 border border-[#6B48FF] rounded-md shadow-sm focus:ring-[#6B48FF] focus:border-[#6B48FF]"
                    />
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <select
                  name="endHalf"
                  value={formData.endHalf}
                  onChange={handleInputChange}
                  className="w-1/3 p-2 border border-[#6B48FF] rounded-md shadow-sm focus:ring-[#6B48FF] focus:border-[#6B48FF]"
                >
                  <option value="full">Full Day</option>
                  <option value="half">Half Day</option>
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              rows="3"
              placeholder="Please provide a reason for your leave request"
              className="w-full p-2 border border-[#6B48FF] rounded-md shadow-sm focus:ring-[#6B48FF] focus:border-[#6B48FF]"
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Attachments</label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
              <input
                type="file"
                name="attachments"
                onChange={handleInputChange}
                multiple
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <FileText className="mx-auto h-8 w-8 text-gray-400" />
                <p className="mt-1 text-sm text-gray-500">Click to upload supporting documents</p>
                <p className="text-xs text-gray-400">(Medical certificates, event invitations, etc.)</p>
              </label>
            </div>
            
            {formData.attachments.length > 0 && (
              <div className="mt-2">
                <p className="text-xs font-medium text-gray-700 mb-1">Uploaded files:</p>
                <ul className="text-xs space-y-1">
                  {formData.attachments.map((file, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-50 p-1 rounded">
                      <span className="truncate">{file.name}</span>
                      <button 
                        type="button" 
                        onClick={() => handleRemoveAttachment(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifyManager"
                  name="notifyManager"
                  checked={formData.notifyManager}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#6B48FF] focus:ring-[#6B48FF] border-gray-300 rounded"
                />
                <label htmlFor="notifyManager" className="ml-2 text-sm text-gray-700">
                  Notify my manager
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifyTeam"
                  name="notifyTeam"
                  checked={formData.notifyTeam}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#6B48FF] focus:ring-[#6B48FF] border-gray-300 rounded"
                />
                <label htmlFor="notifyTeam" className="ml-2 text-sm text-gray-700">
                  Notify my team members
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="px-6 py-2 bg-[#6B48FF] text-white rounded-md hover:bg-[#A78BFA] focus:outline-none focus:ring-2 focus:ring-[#6B48FF] shadow-md transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
      
      <div className="bg-[#6B48FF]/5 p-4 rounded-lg border border-[#6B48FF]/20">
        <h3 className="text-lg font-medium text-[#1C2526] mb-4">Request Summary</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Leave Type</p>
            <p className="font-medium">{selectedLeaveType.label}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{calculatedDays > 0 ? `${calculatedDays} day${calculatedDays !== 1 ? 's' : ''}` : 'Select dates'}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Leave Period</p>
            <p className="font-medium">
              {formData.startDate && formData.endDate 
                ? `${new Date(formData.startDate).toLocaleDateString()} to ${new Date(formData.endDate).toLocaleDateString()}` 
                : 'Not selected'}
            </p>
          </div>
          
          {selectedLeaveType.balance !== null && (
            <div className="pt-2 border-t border-[#6B48FF]/20">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm text-gray-500">Remaining Balance After</p>
                <p className="font-medium text-[#6B48FF]">
                  {calculatedDays > 0 
                    ? `${Math.max(0, selectedLeaveType.balance - calculatedDays)} days` 
                    : `${selectedLeaveType.balance} days`}
                </p>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#6B48FF] h-2 rounded-full" 
                  style={{ 
                    width: `${Math.max(0, 100 - (calculatedDays / selectedLeaveType.balance * 100))}%` 
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NexusLeaveRequestForm;
