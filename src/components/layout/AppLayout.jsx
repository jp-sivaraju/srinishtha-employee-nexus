
import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';

export const AppLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('currentUser');
    if (!user) {
      navigate('/login');
      return;
    }

    setCurrentUser(JSON.parse(user));
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  if (!currentUser) return null;

  return (
    <div className="flex h-screen bg-white dark:bg-dark">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        toggleSidebar={toggleSidebar}
        userRole={currentUser.role} 
      />
      <div className="flex flex-col flex-1 w-full overflow-y-auto">
        <Navbar user={currentUser} toggleSidebar={toggleSidebar} />
        <main className="h-full pb-16 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
