
import React, { useState } from 'react';
import { Check, X, FileText, User, Calendar, Clock } from 'lucide-react';
import { toast } from '../../ui/sonner';

// Mock data for pending approvals
const pendingApprovalsData = [
  {
    id: 1,
    employeeName: 'Alex Johnson',
    employeePhoto: null,
    employeeRole: 'UI/UX Designer',
    leaveType: 'Annual Leave',
    startDate: '2025-06-15',
    endDate: '2025-06-20',
    duration: '6 days',
    requestedOn: '2025-05-20',
    reason: 'Family vacation to Europe',
    attachments: [],
    overlappingTeamMembers: ['Michael Brown']
  },
  {
    id: 2,
    employeeName: 'Sarah Williams',
    employeePhoto: null,
    employeeRole: 'Project Manager',
    leaveType: 'Personal Leave',
    startDate: '2025-05-30',
    endDate: '2025-05-31',
    duration: '2 days',
    requestedOn: '2025-05-15',
    reason: 'Personal matters',
    attachments: [],
    overlappingTeamMembers: []
  },
  {
    id: 3,
    employeeName: 'Michael Brown',
    employeePhoto: null,
    employeeRole: 'QA Engineer',
    leaveType: 'Sick Leave',
    startDate: '2025-05-25',
    endDate: '2025-05-26',
    duration: '2 days',
    requestedOn: '2025-05-24',
    reason: 'Medical appointment and recovery',
    attachments: ['medical_certificate.pdf'],
    overlappingTeamMembers: []
  }
];

const NexusLeaveApprovals = () => {
  const [pendingApprovals, setPendingApprovals] = useState(pendingApprovalsData);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [approvalComment, setApprovalComment] = useState('');
  
  const handleRequestSelection = (request) => {
    setSelectedRequest(selectedRequest?.id === request.id ? null : request);
    setApprovalComment('');
  };
  
  const handleApproveRequest = (id) => {
    // In a real app, this would be an API call
    toast.success('Leave request approved successfully');
    setPendingApprovals(pendingApprovals.filter(req => req.id !== id));
    setSelectedRequest(null);
  };
  
  const handleRejectRequest = (id) => {
    if (!approvalComment) {
      toast.error('Please provide a reason for rejection');
      return;
    }
    
    // In a real app, this would be an API call
    toast.success('Leave request rejected');
    setPendingApprovals(pendingApprovals.filter(req => req.id !== id));
    setSelectedRequest(null);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h3 className="text-lg font-medium text-[#1C2526] mb-4">Pending Approvals</h3>
          
          {pendingApprovals.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="mx-auto h-8 w-8 text-gray-400" />
              <p className="mt-2 text-gray-500">No pending approvals</p>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingApprovals.map(request => (
                <div 
                  key={request.id} 
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedRequest?.id === request.id 
                      ? 'border-[#6B48FF] bg-[#6B48FF]/5' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => handleRequestSelection(request)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-[#1C2526]">{request.employeeName}</div>
                    <div className="text-xs text-gray-500">{request.requestedOn}</div>
                  </div>
                  
                  <div className="flex items-center mb-1">
                    <User className="h-3 w-3 text-gray-500 mr-1" />
                    <span className="text-xs text-gray-500">{request.employeeRole}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#6B48FF]">{request.leaveType}</span>
                    <span className="text-xs bg-[#6B48FF]/10 text-[#6B48FF] px-2 py-0.5 rounded-full">
                      {request.duration}
                    </span>
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-600 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="lg:col-span-2">
        {selectedRequest ? (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold text-[#1C2526]">{selectedRequest.employeeName}</h3>
                <p className="text-sm text-gray-600">{selectedRequest.employeeRole}</p>
              </div>
              
              <div className="bg-[#6B48FF]/10 text-[#6B48FF] px-3 py-1 rounded-md font-medium">
                {selectedRequest.leaveType}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> Leave Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2">
                    <span className="text-gray-500">Leave Period:</span>
                    <span>{new Date(selectedRequest.startDate).toLocaleDateString()} - {new Date(selectedRequest.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-gray-500">Duration:</span>
                    <span>{selectedRequest.duration}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-gray-500">Requested On:</span>
                    <span>{new Date(selectedRequest.requestedOn).toLocaleDateString()}</span>
                  </div>
                  <div className="col-span-2 mt-1">
                    <span className="text-gray-500">Reason:</span>
                    <p className="mt-1 p-2 bg-white rounded border border-gray-200 text-gray-700">
                      {selectedRequest.reason}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                  <FileText className="h-4 w-4 mr-1" /> Additional Information
                </h4>
                
                <div className="space-y-3 text-sm">
                  {selectedRequest.attachments.length > 0 && (
                    <div>
                      <span className="text-gray-500 block mb-1">Attachments:</span>
                      <ul className="space-y-1">
                        {selectedRequest.attachments.map((attachment, index) => (
                          <li key={index} className="flex items-center">
                            <FileText className="h-3 w-3 text-[#6B48FF] mr-1" />
                            <a href="#" className="text-[#6B48FF] hover:underline">
                              {attachment}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <span className="text-gray-500 block mb-1">Overlapping Team Members:</span>
                    {selectedRequest.overlappingTeamMembers.length > 0 ? (
                      <div className="p-2 bg-yellow-50 border border-yellow-200 rounded-md">
                        <p className="text-xs text-yellow-700">
                          <strong>Note:</strong> The following team members have leave overlapping with this request:
                        </p>
                        <ul className="mt-1 text-xs list-disc list-inside text-yellow-800">
                          {selectedRequest.overlappingTeamMembers.map((member, idx) => (
                            <li key={idx}>{member}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="p-2 bg-green-50 border border-green-200 rounded-md">
                        <p className="text-xs text-green-700">No overlapping leave requests from team members.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-700 mb-2">Approval Decision</h4>
              
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">Comments (required for rejection)</label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="2"
                  placeholder="Enter comments for the employee regarding this leave request..."
                  value={approvalComment}
                  onChange={(e) => setApprovalComment(e.target.value)}
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => handleRejectRequest(selectedRequest.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center"
                >
                  <X className="h-4 w-4 mr-1" /> Reject
                </button>
                
                <button
                  onClick={() => handleApproveRequest(selectedRequest.id)}
                  className="px-4 py-2 bg-[#6B48FF] text-white rounded-md hover:bg-[#A78BFA] flex items-center"
                >
                  <Check className="h-4 w-4 mr-1" /> Approve
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center h-full">
            <FileText className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">No Leave Request Selected</h3>
            <p className="text-gray-500 text-center">
              Select a leave request from the list to view details and take action.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NexusLeaveApprovals;
