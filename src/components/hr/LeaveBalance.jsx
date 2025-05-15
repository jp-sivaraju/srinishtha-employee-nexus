
import React from 'react';
import { Progress } from '../ui/progress';

const LeaveBalance = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1C2526]">Leave Balance</h2>
      </div>
      
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[#666666]">Annual Leave</p>
            <p className="text-xl font-semibold text-[#1C2526]">18 days remaining</p>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-[#D3D3D3] flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="h-full bg-[#6B48FF]" style={{ width: '75%' }}></div>
            </div>
            <span className="text-sm font-bold text-[#1C2526] relative z-10">18/24</span>
          </div>
        </div>
        
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-[#666666]">Annual Leave Used</span>
            <span className="text-[#666666]">6 of 24 days</span>
          </div>
          <Progress value={25} className="h-2 bg-[#D3D3D3]" indicatorClassName="bg-[#6B48FF]" />
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-[#666666]">Sick Leave</p>
            <p className="text-xl font-semibold text-[#1C2526]">6 days remaining</p>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-[#D3D3D3] flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="h-full bg-[#6B48FF]" style={{ width: '60%' }}></div>
            </div>
            <span className="text-sm font-bold text-[#1C2526] relative z-10">6/10</span>
          </div>
        </div>
        
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-[#666666]">Sick Leave Used</span>
            <span className="text-[#666666]">4 of 10 days</span>
          </div>
          <Progress value={40} className="h-2 bg-[#D3D3D3]" indicatorClassName="bg-[#6B48FF]" />
        </div>
        
        <div className="pt-4 border-t border-gray-200 mt-4">
          <h4 className="font-medium text-[#1C2526] mb-2">Recent Leave History</h4>
          <ul className="space-y-2">
            <li className="text-sm text-[#1C2526] bg-white p-2 rounded-md border border-[#A78BFA]">
              <span className="font-medium">Sick Leave:</span> April 10-11, 2025
            </li>
            <li className="text-sm text-[#1C2526] bg-white p-2 rounded-md border border-[#A78BFA]">
              <span className="font-medium">Annual Leave:</span> March 15-22, 2025
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeaveBalance;
