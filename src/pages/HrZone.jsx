
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
      <div className="min-h-screen bg-gradient-to-br from-dark-light to-dark-DEFAULT text-white">
        <div className="px-4 md:px-6 pb-6 mx-auto max-w-[1400px] w-full">
          <HrHeroSection />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            {/* Sidebar Navigation */}
            <div className="md:col-span-3">
              <div className="sticky top-4">
                <HrSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-9">
              <HrTabContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HrZone;
