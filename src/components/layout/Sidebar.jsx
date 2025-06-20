import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationItems } from './SidebarNavItems';
import SidebarNavItem from './SidebarNavItem';

export const Sidebar = ({ collapsed, toggleSidebar, userRole }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [currentUser, setCurrentUser] = useState(null); // Add this if you're planning to use currentUser
  const navigate = useNavigate(); // ✅ Proper use of useNavigate

  const toggleSubmenu = (itemName) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      navigate('/hr-zone');
      return;
    }

    setCurrentUser(JSON.parse(user));
  }, [navigate]);

  return (
    <aside 
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } hidden md:block transition-all duration-300 bg-white border-r border-gray-200 z-20`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between h-16 px-4">
          {!collapsed && (
            <Link to="/dashboard" className="flex items-center">
              <span className="text-xl font-bold text-[#6B48FF]">Srinishtha Hub</span>
            </Link>
          )}
          <button 
            onClick={toggleSidebar}
            className="rounded-md p-1.5 text-[#666666] hover:bg-gray-100"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <div className="py-4 flex flex-col flex-1 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarNavItem 
                  key={item.name}
                  item={item}
                  collapsed={collapsed}
                  userRole={userRole}
                  openSubmenus={openSubmenus}
                  toggleSubmenu={toggleSubmenu}
                />
              ))}
            </ul>
          </nav>
        </div>
        
        {!collapsed && (
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs font-semibold text-[#666666] uppercase tracking-wider">
              {userRole} Role
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
