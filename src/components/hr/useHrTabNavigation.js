
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHrTabNavigation = () => {
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

  return { activeTab, setActiveTab };
};

export default useHrTabNavigation;
