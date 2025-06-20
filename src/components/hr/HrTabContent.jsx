
import React from 'react';
import HrDashboard from './HrDashboard';
import EmployeeDirectory from './EmployeeDirectory';
import RecruitmentDashboard from './RecruitmentDashboard';
import TrainingDevelopment from './TrainingDevelopment';
import CompensationBenefits from './CompensationBenefits';
import AppraisalCycles from '../performance/AppraisalCycles';
import HolidaysCalendar from './HolidaysCalendar';
import AttendanceLog from './AttendanceLog';
import OnboardingChecklist from './OnboardingChecklist';
import NexusLeaveManagement from './nexus/NexusLeaveManagement';
import PerformanceManagement from './PerformanceManagement';

const HrTabContent = ({ activeTab }) => {
  // Function to render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <HrDashboard />;
      case 'directory':
        return <EmployeeDirectory />;
      case 'recruitment':
        return <RecruitmentDashboard />;
      case 'training':
        return <TrainingDevelopment />;
      case 'compensation':
        return <CompensationBenefits />;
      case 'performance':
        return <PerformanceManagement />;
      case 'holidays':
        return <HolidaysCalendar />;
      case 'attendance':
        return <AttendanceLog />;
      case 'onboarding':
        return <OnboardingChecklist />;
      case 'leave':
        return <NexusLeaveManagement />;
      default:
        return <HrDashboard />;
    }
  };

  return (
    <div className="p-6 animate-fade-in bg-white dark:bg-dark shadow-md rounded-xl border border-gray-100 dark:border-dark-lighter">
      {renderTabContent()}
    </div>
  );
};

export default HrTabContent;
