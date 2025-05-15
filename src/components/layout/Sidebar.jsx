import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  Users,
  Folder,
  HelpCircle, 
  Book,
  Image,
  DollarSign,
  Plane,
  Menu,
  X,
  BarChart2,
  Target,
  ChevronDown,
  ChevronRight,
  Calendar,
  Clock,
  UserPlus,
  Award,
  BookOpen
} from 'lucide-react';

// Define navigation items with role permissions
const navigationItems = [
  { 
    name: 'Dashboard',
    path: '/dashboard',
    icon: Home,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor']
  },
  { 
    name: 'HR Zone',
    path: '/hr-zone',
    icon: Users, 
    allowedRoles: ['Admin', 'HR', 'Manager']
    // Removed submenu items to avoid duplication with the HR Zone page content
  },
  { 
    name: 'IT Helpdesk',
    path: '/it-helpdesk',
    icon: HelpCircle,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor'] 
  },
  { 
    name: 'Projects & Tasks',
    path: '/projects',
    icon: Folder,
    allowedRoles: ['Admin', 'Manager', 'Developer', 'Intern', 'Assessor'] 
  },
  { 
    name: 'Performance Tracker',
    path: '/performance',
    icon: BarChart2,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Assessor'] 
  },
  {
    name: 'PMO / Execution',
    path: '/pmo',
    icon: Target,
    allowedRoles: ['Admin', 'Manager', 'Assessor']
  },
  { 
    name: 'Knowledge Base',
    path: '/knowledge-base',
    icon: Book,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor'] 
  },
  { 
    name: 'Brand Assets',
    path: '/brand-assets',
    icon: Image,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer'] 
  },
  { 
    name: 'Finance Tools',
    path: '/finance',
    icon: DollarSign,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Finance'] 
  },
  { 
    name: 'Regional & Travel',
    path: '/regional',
    icon: Plane,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor'] 
  }
];

export const Sidebar = ({ collapsed, toggleSidebar, userRole }) => {
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState({});
  
  // Check if the current route is the HR Zone or a subpath
  const isHrZonePath = location.pathname === '/hr-zone';
  
  // Filter navigation items based on user role
  const filteredNavigation = navigationItems.filter(item => 
    item.allowedRoles.includes(userRole)
  );

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleSubmenu = (itemName) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <aside 
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } hidden md:block transition-all duration-300 bg-white dark:bg-dark border-r border-gray-200 dark:border-dark-lighter z-20`}
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
            className="rounded-md p-1.5 text-[#666666] hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <div className="py-4 flex flex-col flex-1 overflow-y-auto">
          <nav className="mt-5 flex-1 px-2">
            <ul className="space-y-1">
              {filteredNavigation.map((item) => (
                <li key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={`${
                          isActive(item.path)
                            ? 'bg-[#F3F0FF] dark:bg-dark-light text-[#6B48FF] dark:text-[#A78BFA]'
                            : 'text-[#1C2526] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        } w-full group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md transition-all`}
                      >
                        <div className="flex items-center">
                          <item.icon
                            className={`${
                              isActive(item.path) ? 'text-[#6B48FF]' : 'text-[#666666] group-hover:text-[#A78BFA]'
                            } ${collapsed ? 'mx-auto' : 'mr-3'} flex-shrink-0 h-5 w-5 transition-colors`}
                          />
                          {!collapsed && <span>{item.name}</span>}
                        </div>
                        {!collapsed && (
                          openSubmenus[item.name] ? 
                            <ChevronDown size={16} /> : 
                            <ChevronRight size={16} />
                        )}
                      </button>
                      
                      {!collapsed && openSubmenus[item.name] && item.submenu && (
                        <ul className="mt-1 space-y-1 pl-6">
                          {item.submenu.map(subItem => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                className={`${
                                  location.pathname === subItem.path
                                    ? 'bg-[#F3F0FF] dark:bg-dark-light/50 text-[#6B48FF] dark:text-[#A78BFA]'
                                    : 'text-[#1C2526] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                } group flex items-center px-2 py-1.5 text-xs font-medium rounded-md transition-all`}
                              >
                                <subItem.icon
                                  className={`${
                                    location.pathname === subItem.path ? 'text-[#6B48FF]' : 'text-[#666666] group-hover:text-[#A78BFA]'
                                  } mr-2 flex-shrink-0 h-4 w-4 transition-colors`}
                                />
                                <span>{subItem.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`${
                        isActive(item.path)
                          ? 'bg-[#F3F0FF] dark:bg-dark-light text-[#6B48FF] dark:text-[#A78BFA]'
                          : 'text-[#1C2526] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all`}
                    >
                      <item.icon
                        className={`${
                          isActive(item.path) ? 'text-[#6B48FF]' : 'text-[#666666] group-hover:text-[#A78BFA]'
                        } ${collapsed ? 'mx-auto' : 'mr-3'} flex-shrink-0 h-5 w-5 transition-colors`}
                      />
                      {!collapsed && <span>{item.name}</span>}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {!collapsed && (
          <div className="p-4 border-t border-gray-200 dark:border-dark-lighter">
            <div className="text-xs font-semibold text-[#666666] uppercase tracking-wider">
              {userRole} Role
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
