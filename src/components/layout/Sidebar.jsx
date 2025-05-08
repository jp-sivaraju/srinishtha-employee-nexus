
import React from 'react';
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
  X
} from 'lucide-react';

// Define navigation items with role permissions
const navigationItems = [
  { 
    name: 'Dashboard',
    path: '/dashboard',
    icon: Home,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern']
  },
  { 
    name: 'HR Zone',
    path: '/hr-zone',
    icon: Users, 
    allowedRoles: ['Admin', 'HR', 'Manager']
  },
  { 
    name: 'IT Helpdesk',
    path: '/it-helpdesk',
    icon: HelpCircle,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern'] 
  },
  { 
    name: 'Projects & Tasks',
    path: '/projects',
    icon: Folder,
    allowedRoles: ['Admin', 'Manager', 'Developer', 'Intern'] 
  },
  { 
    name: 'Knowledge Base',
    path: '/knowledge-base',
    icon: Book,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern'] 
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
    allowedRoles: ['Admin', 'HR', 'Manager'] 
  },
  { 
    name: 'Regional & Travel',
    path: '/regional',
    icon: Plane,
    allowedRoles: ['Admin', 'HR', 'Manager', 'Developer', 'Intern'] 
  }
];

export const Sidebar = ({ collapsed, toggleSidebar, userRole }) => {
  const location = useLocation();
  
  // Filter navigation items based on user role
  const filteredNavigation = navigationItems.filter(item => 
    item.allowedRoles.includes(userRole)
  );

  const isActive = (path) => {
    return location.pathname === path;
  };

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
