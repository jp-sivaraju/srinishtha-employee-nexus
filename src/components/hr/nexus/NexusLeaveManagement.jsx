
import React, { useState } from 'react';
import { CalendarCheck, Clock, Users, FileText, BarChart2 } from 'lucide-react';
import { toast } from '../../ui/sonner';
import NexusLeaveRequestForm from './NexusLeaveRequestForm';
import NexusLeaveHistory from './NexusLeaveHistory';
import NexusLeaveStats from './NexusLeaveStats';
import NexusLeaveCalendar from './NexusLeaveCalendar';
import NexusLeaveApprovals from './NexusLeaveApprovals';
import NexusLeaveReports from './NexusLeaveReports';

const NexusLeaveManagement = () => {
  const [activeTab, setActiveTab] = useState('request');
  
  const tabs = [
    { id: 'request', label: 'Request Leave', icon: <CalendarCheck className="h-5 w-5" /> },
    { id: 'history', label: 'Leave History', icon: <Clock className="h-5 w-5" /> },
    // { id: 'team', label: 'Team Calendar', icon: <Users className="h-5 w-5" /> },
    // { id: 'approvals', label: 'Approvals', icon: <FileText className="h-5 w-5" /> },
    // { id: 'reports', label: 'Reports', icon: <BarChart2 className="h-5 w-5" /> },
  ];
  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'request':
        return <NexusLeaveRequestForm />;
      case 'history':
        return <NexusLeaveHistory />;
      case 'team':
        return <NexusLeaveCalendar />;
      case 'approvals':
        return <NexusLeaveApprovals />;
      case 'reports':
        return <NexusLeaveReports />;
      default:
        return <NexusLeaveRequestForm />;
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-0 overflow-hidden">
      <div className="bg-[#6B48FF]/10 p-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-[#1C2526] flex items-center">
          <CalendarCheck className="h-5 w-5 text-[#6B48FF] mr-2" />
          Nexus Leave Management
        </h2>
        <p className="text-gray-600 mt-1">
          Request, track and manage employee leave efficiently
        </p>
      </div>
      
      <div className="border-b border-gray-100">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 flex items-center whitespace-nowrap transition-colors ${
                activeTab === tab.id 
                  ? 'text-[#6B48FF] border-b-2 border-[#6B48FF] bg-[#6B48FF]/5' 
                  : 'text-gray-600 hover:text-[#6B48FF] hover:bg-[#6B48FF]/5'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default NexusLeaveManagement;
