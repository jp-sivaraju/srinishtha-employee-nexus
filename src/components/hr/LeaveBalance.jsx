
import React from 'react';
import GlassContainer from '../ui/GlassContainer';
import GradientText from '../ui/GradientText';
import { Progress } from '../ui/progress';

const LeaveBalance = () => {
  return (
    <GlassContainer>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <GradientText as="h2" className="text-xl font-semibold" gradient="night-owl">
            Leave Balance
          </GradientText>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-primary-300">Annual Leave</p>
              <p className="text-xl font-semibold text-white">18 days remaining</p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-green-400/30 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="h-full bg-green-500/30" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm font-bold text-green-400 relative z-10">18/24</span>
            </div>
          </div>
          
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-primary-300">Annual Leave Used</span>
              <span className="text-primary-200">6 of 24 days</span>
            </div>
            <Progress value={25} className="h-2" />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-primary-300">Sick Leave</p>
              <p className="text-xl font-semibold text-white">6 days remaining</p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-blue-400/30 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500/30" style={{ width: '60%' }}></div>
              </div>
              <span className="text-sm font-bold text-blue-400 relative z-10">6/10</span>
            </div>
          </div>
          
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-primary-300">Sick Leave Used</span>
              <span className="text-primary-200">4 of 10 days</span>
            </div>
            <Progress value={40} className="h-2" />
          </div>
          
          <div className="pt-4 border-t border-primary-700 mt-4">
            <h4 className="font-medium text-primary-200 mb-2">Recent Leave History</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-100 bg-primary-800/30 p-2 rounded-md border border-primary-700/30">
                <span className="font-medium">Sick Leave:</span> April 10-11, 2025
              </li>
              <li className="text-sm text-primary-100 bg-primary-800/30 p-2 rounded-md border border-primary-700/30">
                <span className="font-medium">Annual Leave:</span> March 15-22, 2025
              </li>
            </ul>
          </div>
        </div>
      </div>
    </GlassContainer>
  );
};

export default LeaveBalance;
