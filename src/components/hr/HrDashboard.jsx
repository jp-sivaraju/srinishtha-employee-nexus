
import React from 'react';
import LeaveManagement from './CompanyPolicies';
import LeaveBalance from './LeaveBalance';
import CompanyPolicies from './CompanyPolicies';

const HrDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CompanyPolicies />
        
      </div>
    </div>
  );
};

export default HrDashboard;
