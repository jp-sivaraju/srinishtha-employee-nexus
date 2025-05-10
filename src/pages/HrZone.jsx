
import React from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import HrHeroSection from '../components/hr/HrHeroSection';
import HrSidebar from '../components/hr/HrSidebar';
import HrTabContent from '../components/hr/HrTabContent';
import useHrTabNavigation from '../components/hr/useHrTabNavigation';

const HrZone = () => {
  const { activeTab, setActiveTab } = useHrTabNavigation();

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
            <HrTabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HrZone;
