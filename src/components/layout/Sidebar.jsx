
import React, { useState } from 'react';
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
    allowedRoles: ['Admin', 'HR', 'Manager'],
    submenu: [
      { 
        name: 'Employee Directory', 
        path: '/hr-zone?tab=directory', 
        icon: Users 
      },
      { 
        name: 'Recruitment', 
        path: '/hr-zone?tab=recruitment', 
        icon: UserPlus 
      },
      { 
        name: 'Training', 
        path: '/hr-zone?tab=training', 
        icon: BookOpen 
      },
      { 
        name: 'Compensation', 
        path: '/hr-zone?tab=compensation', 
        icon: DollarSign 
      },
      { 
        name: 'Performance', 
        path: '/hr-zone?tab=performance', 
        icon: Award 
      },
      { 
        name: 'Attendance', 
        path: '/hr-zone?tab=attendance', 
        icon: Clock 
      },
      { 
        name: 'Holidays', 
        path: '/hr-zone?tab=holidays', 
        icon: Calendar 
      }
    ]
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
  const searchParams = new URLSearchParams(location.search);
  const currentTab = searchParams.get('tab');
  
  // Filter navigation items based on user role
  const filteredNavigation = navigationItems.filter(item => 
    item.allowedRoles.includes(userRole)
  );

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isSubActive = (path) => {
    const basePathMatch = location.pathname === '/hr-zone';
    
    // Extract tab from path
    const submenuTab = path.split('=')[1];
    
    return basePathMatch && currentTab === submenuTab;
  };

  const toggleSubmenu = (itemName) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  // Auto-open HR submenu if we're on an HR page
  React.useEffect(() => {
    if (isHrZonePath && !openSubmenus['HR Zone']) {
      setOpenSubmenus(prev => ({
        ...prev,
        'HR Zone': true
      }));
    }
  }, [isHrZonePath]);

  return (
    <aside 
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } hidden md:block transition-all duration-300 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between h-16 px-4">
          {!collapsed && (
            <Link to="/dashboard" className="flex items-center">
              <span className="text-xl font-bold text-primary">Srinishtha Hub</span>
            </Link>
          )}
          <button 
            onClick={toggleSidebar}
            className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                            ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        } w-full group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md transition-all`}
                      >
                        <div className="flex items-center">
                          <item.icon
                            className={`${
                              isActive(item.path) ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
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
                      
                      {!collapsed && openSubmenus[item.name] && (
                        <ul className="mt-1 space-y-1 pl-6">
                          {item.submenu.map(subItem => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                className={`${
                                  isSubActive(subItem.path)
                                    ? 'bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                } group flex items-center px-2 py-1.5 text-xs font-medium rounded-md transition-all`}
                              >
                                <subItem.icon
                                  className={`${
                                    isSubActive(subItem.path) ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
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
                          ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all`}
                    >
                      <item.icon
                        className={`${
                          isActive(item.path) ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
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
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {userRole} Role
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
