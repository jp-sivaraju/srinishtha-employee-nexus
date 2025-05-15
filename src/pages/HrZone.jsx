
import React from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import HrHeroSection from '../components/hr/HrHeroSection';
import HrTabContent from '../components/hr/HrTabContent';
import useHrTabNavigation from '../components/hr/useHrTabNavigation';

const HrZone = () => {
  const { activeTab, setActiveTab } = useHrTabNavigation();

  return (
    <AppLayout>
      <div className="min-h-screen bg-white dark:bg-dark text-foreground">
        <div className="px-4 md:px-6 pb-6 mx-auto max-w-[1400px] w-full">
          <HrHeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="mt-6">
            {/* Main Content */}
            <HrTabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HrZone;
