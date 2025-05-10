
import React, { useState, useEffect } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { useLocation } from 'react-router-dom';
import HrHeroSection from '../components/hr/HrHeroSection';
import HrSidebar from '../components/hr/HrSidebar';
import HrDashboard from '../components/hr/HrDashboard';
import EmployeeDirectory from '../components/hr/EmployeeDirectory';
import RecruitmentDashboard from '../components/hr/RecruitmentDashboard';
import TrainingDevelopment from '../components/hr/TrainingDevelopment';
import CompensationBenefits from '../components/hr/CompensationBenefits';
import PerformanceReviews from '../components/hr/PerformanceReviews';
import HolidaysCalendar from '../components/hr/HolidaysCalendar';
import AttendanceLog from '../components/hr/AttendanceLog';
import OnboardingChecklist from '../components/hr/OnboardingChecklist';

const HrZone = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tabFromUrl = searchParams.get('tab');
  
  const [activeTab, setActiveTab] = useState(tabFromUrl || 'dashboard');
  
  // Update URL when tab changes
  useEffect(() => {
    const newSearchParams = new URLSearchParams(location.search);
    if (activeTab !== 'dashboard') {
      newSearchParams.set('tab', activeTab);
    } else {
      newSearchParams.delete('tab');
    }
    
    const newSearch = newSearchParams.toString();
    const newPath = `${location.pathname}${newSearch ? `?${newSearch}` : ''}`;
    
    if (newPath !== `${location.pathname}${location.search}`) {
      window.history.pushState({}, '', newPath);
    }
  }, [activeTab, location.pathname, location.search]);
  
  // Update tab when URL changes
  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    setActiveTab(tabFromUrl || 'dashboard');
  }, [location.search]);

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

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <HrHeroSection />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-3">
            <HrSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HrZone;
