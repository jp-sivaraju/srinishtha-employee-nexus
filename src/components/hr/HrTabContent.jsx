
import React from 'react';
import HrDashboard from './HrDashboard';
import EmployeeDirectory from './EmployeeDirectory';
import RecruitmentDashboard from './RecruitmentDashboard';
import TrainingDevelopment from './TrainingDevelopment';
import CompensationBenefits from './CompensationBenefits';
import PerformanceReviews from './PerformanceReviews';
import HolidaysCalendar from './HolidaysCalendar';
import AttendanceLog from './AttendanceLog';
import OnboardingChecklist from './OnboardingChecklist';

const HrTabContent = ({ activeTab }) => {
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
      return <PerformanceReviews />;
    case 'holidays':
      return <HolidaysCalendar />;
    case 'attendance':
      return <AttendanceLog />;
    case 'onboarding':
      return <OnboardingChecklist />;
    default:
      return <div>Select a tab</div>;
  }
};

export default HrTabContent;
