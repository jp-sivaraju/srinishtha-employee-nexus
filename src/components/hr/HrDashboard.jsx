
import React from 'react';
import LeaveManagement from './LeaveManagement';
import LeaveBalance from './LeaveBalance';

const HrDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeaveManagement />
        <LeaveBalance />
      </div>
    </div>
  );
};

export default HrDashboard;
