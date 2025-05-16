
import React from 'react';
import { Progress } from '../../ui/progress';

const NexusLeaveStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-medium text-[#1C2526] mb-4">Your Leave Balance</h3>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Annual Leave</p>
                <p className="text-xl font-semibold text-[#1C2526]">18 days remaining</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6B48FF]" style={{ width: '75%' }}></div>
                </div>
                <span className="text-sm font-bold text-[#1C2526] relative z-10">18/24</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Used</span>
                <span className="text-gray-600">6 of 24 days</span>
              </div>
              <Progress value={25} className="h-2 bg-gray-200" indicatorClassName="bg-[#6B48FF]" />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Sick Leave</p>
                <p className="text-xl font-semibold text-[#1C2526]">6 days remaining</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6B48FF]" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm font-bold text-[#1C2526] relative z-10">6/10</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Used</span>
                <span className="text-gray-600">4 of 10 days</span>
              </div>
              <Progress value={40} className="h-2 bg-gray-200" indicatorClassName="bg-[#6B48FF]" />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Personal Leave</p>
                <p className="text-xl font-semibold text-[#1C2526]">3 days remaining</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6B48FF]" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm font-bold text-[#1C2526] relative z-10">3/5</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Used</span>
                <span className="text-gray-600">2 of 5 days</span>
              </div>
              <Progress value={40} className="h-2 bg-gray-200" indicatorClassName="bg-[#6B48FF]" />
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-[#1C2526] mb-4">Recent Leave History</h3>
        
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="divide-y divide-gray-100">
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Approved</span>
                  <p className="font-medium text-[#1C2526] mt-1">Annual Leave</p>
                </div>
                <p className="text-sm text-gray-500">April 10-17, 2025</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">Family vacation</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">8 days</p>
                <p className="text-xs text-gray-500">Approved by: John Smith</p>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Approved</span>
                  <p className="font-medium text-[#1C2526] mt-1">Sick Leave</p>
                </div>
                <p className="text-sm text-gray-500">March 5-6, 2025</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">Flu</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">2 days</p>
                <p className="text-xs text-gray-500">Approved by: John Smith</p>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Rejected</span>
                  <p className="font-medium text-[#1C2526] mt-1">Personal Leave</p>
                </div>
                <p className="text-sm text-gray-500">February 15-17, 2025</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">Personal matters</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">3 days</p>
                <p className="text-xs text-gray-500">Rejected by: John Smith</p>
              </div>
              <p className="text-xs text-red-600 mt-1">Reason: Project deadline conflicts</p>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Approved</span>
                  <p className="font-medium text-[#1C2526] mt-1">Annual Leave</p>
                </div>
                <p className="text-sm text-gray-500">January 5-8, 2025</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">Post-holiday break</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">4 days</p>
                <p className="text-xs text-gray-500">Approved by: John Smith</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t border-gray-100 bg-gray-50 text-center">
            <button className="text-sm text-[#6B48FF] hover:underline">
              View All History
            </button>
          </div>
        </div>
        
        <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium text-[#1C2526] mb-3">Upcoming Team Absences</h4>
          
          <div className="space-y-3">
            <div className="flex items-center p-2 bg-[#6B48FF]/5 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-sm text-[#1C2526]">Alex Johnson</p>
                <p className="text-xs text-gray-500">Annual Leave</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#1C2526]">May 10-17, 2025</p>
                <p className="text-xs text-gray-500">8 days</p>
              </div>
            </div>
            
            <div className="flex items-center p-2 bg-[#6B48FF]/5 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-sm text-[#1C2526]">Sarah Williams</p>
                <p className="text-xs text-gray-500">Personal Leave</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#1C2526]">June 1-2, 2025</p>
                <p className="text-xs text-gray-500">2 days</p>
              </div>
            </div>
            
            <div className="flex items-center p-2 bg-[#6B48FF]/5 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-sm text-[#1C2526]">Michael Brown</p>
                <p className="text-xs text-gray-500">Parental Leave</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#1C2526]">July 1-31, 2025</p>
                <p className="text-xs text-gray-500">31 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NexusLeaveStats;
