
import React, { useState } from 'react';
import { Calendar, Clock, FileText, Check, X, ChevronDown, ChevronUp } from 'lucide-react';

// Mock data for leave history
const leaveHistoryData = [
  {
    id: 1,
    type: 'Annual Leave',
    status: 'approved',
    startDate: '2025-05-15',
    endDate: '2025-05-22',
    duration: '8 days',
    requestedOn: '2025-04-20',
    approvedBy: 'John Smith',
    approvedOn: '2025-04-22',
    reason: 'Family vacation',
    attachments: ['vacation_itinerary.pdf'],
    comments: [
      { user: 'John Smith', role: 'Manager', comment: 'Approved. Enjoy your vacation!', date: '2025-04-22' }
    ]
  },
  {
    id: 2,
    type: 'Sick Leave',
    status: 'approved',
    startDate: '2025-04-10',
    endDate: '2025-04-11',
    duration: '2 days',
    requestedOn: '2025-04-10',
    approvedBy: 'John Smith',
    approvedOn: '2025-04-12',
    reason: 'Flu',
    attachments: ['medical_certificate.pdf'],
    comments: []
  },
  {
    id: 3,
    type: 'Personal Leave',
    status: 'rejected',
    startDate: '2025-03-05',
    endDate: '2025-03-07',
    duration: '3 days',
    requestedOn: '2025-02-25',
    approvedBy: null,
    approvedOn: null,
    reason: 'Personal matters',
    attachments: [],
    comments: [
      { user: 'John Smith', role: 'Manager', comment: 'Rejected due to project deadline conflicts.', date: '2025-02-28' }
    ]
  },
  {
    id: 4,
    type: 'Annual Leave',
    status: 'pending',
    startDate: '2025-06-10',
    endDate: '2025-06-12',
    duration: '3 days',
    requestedOn: '2025-05-15',
    approvedBy: null,
    approvedOn: null,
    reason: 'Wedding anniversary',
    attachments: [],
    comments: []
  }
];

const NexusLeaveHistory = () => {
  const [expandedLeave, setExpandedLeave] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const toggleLeaveDetails = (id) => {
    setExpandedLeave(expandedLeave === id ? null : id);
  };
  
  const filteredLeaves = filter === 'all' 
    ? leaveHistoryData 
    : leaveHistoryData.filter(leave => leave.status === filter);
  
  const getStatusBadge = (status) => {
    switch(status) {
      case 'approved':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Approved</span>;
      case 'rejected':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Rejected</span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pending</span>;
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h3 className="text-lg font-medium text-[#1C2526] mb-2 md:mb-0">Leave History</h3>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Filter:</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-1.5 pl-3 pr-8 text-sm border border-[#6B48FF] rounded-md shadow-sm focus:ring-[#6B48FF] focus:border-[#6B48FF]"
          >
            <option value="all">All Requests</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredLeaves.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No leave requests found with the selected filter.
          </div>
        ) : (
          filteredLeaves.map(leave => (
            <div 
              key={leave.id} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div 
                className={`flex flex-col md:flex-row md:items-center justify-between p-4 cursor-pointer ${
                  leave.status === 'approved' ? 'bg-green-50' : 
                  leave.status === 'rejected' ? 'bg-red-50' : 
                  'bg-yellow-50'
                }`}
                onClick={() => toggleLeaveDetails(leave.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0">
                  <div className="font-medium text-[#1C2526] md:w-32">{leave.type}</div>
                  <div className="text-sm text-gray-600 md:ml-4">
                    {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end">
                  <div className="md:mr-4">{getStatusBadge(leave.status)}</div>
                  {expandedLeave === leave.id ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </div>
              </div>
              
              {expandedLeave === leave.id && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Leave Details</h4>
                      <dl className="space-y-1">
                        <div className="grid grid-cols-2">
                          <dt className="text-xs text-gray-500">Duration:</dt>
                          <dd className="text-xs">{leave.duration}</dd>
                        </div>
                        <div className="grid grid-cols-2">
                          <dt className="text-xs text-gray-500">Requested On:</dt>
                          <dd className="text-xs">{new Date(leave.requestedOn).toLocaleDateString()}</dd>
                        </div>
                        {leave.approvedBy && (
                          <>
                            <div className="grid grid-cols-2">
                              <dt className="text-xs text-gray-500">Approved By:</dt>
                              <dd className="text-xs">{leave.approvedBy}</dd>
                            </div>
                            <div className="grid grid-cols-2">
                              <dt className="text-xs text-gray-500">Approved On:</dt>
                              <dd className="text-xs">{new Date(leave.approvedOn).toLocaleDateString()}</dd>
                            </div>
                          </>
                        )}
                        <div className="grid grid-cols-2">
                          <dt className="text-xs text-gray-500">Reason:</dt>
                          <dd className="text-xs">{leave.reason}</dd>
                        </div>
                      </dl>
                    </div>
                    
                    <div>
                      {leave.attachments.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments</h4>
                          <ul className="space-y-1">
                            {leave.attachments.map((attachment, index) => (
                              <li key={index} className="flex items-center text-xs">
                                <FileText className="h-3 w-3 text-[#6B48FF] mr-1" />
                                <a href="#" className="text-[#6B48FF] hover:underline">
                                  {attachment}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {leave.comments.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Comments</h4>
                          <div className="space-y-2">
                            {leave.comments.map((comment, index) => (
                              <div key={index} className="bg-gray-50 p-2 rounded-md">
                                <div className="flex justify-between items-center mb-1">
                                  <div className="text-xs font-medium">{comment.user} ({comment.role})</div>
                                  <div className="text-xs text-gray-500">{new Date(comment.date).toLocaleDateString()}</div>
                                </div>
                                <div className="text-xs">{comment.comment}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {leave.status === 'pending' && (
                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
                      <button 
                        className="px-3 py-1 bg-red-100 text-red-800 rounded-md hover:bg-red-200 text-xs font-medium mr-2"
                      >
                        Cancel Request
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NexusLeaveHistory;
