
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SidebarNavItem = ({ item, collapsed, userRole, openSubmenus, toggleSubmenu }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Filter out items not allowed for the current user role
  if (!item.allowedRoles.includes(userRole)) {
    return null;
  }

  if (item.submenu) {
    return (
      <li key={item.name} className="group/menu-item relative">
        <button
          onClick={() => toggleSubmenu(item.name)}
          className={`${
            isActive(item.path)
              ? 'bg-[#F3F0FF] text-[#6B48FF]'
              : 'text-[#1C2526] hover:bg-gray-100'
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
                      ? 'bg-[#F3F0FF] text-[#6B48FF]'
                      : 'text-[#1C2526] hover:bg-gray-100'
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
      </li>
    );
  }

  return (
    <li key={item.name} className="group/menu-item relative">
      <Link
        to={item.path}
        className={`${
          isActive(item.path)
            ? 'bg-[#F3F0FF] text-[#6B48FF]'
            : 'text-[#1C2526] hover:bg-gray-100'
        } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all`}
      >
        <item.icon
          className={`${
            isActive(item.path) ? 'text-[#6B48FF]' : 'text-[#666666] group-hover:text-[#A78BFA]'
          } ${collapsed ? 'mx-auto' : 'mr-3'} flex-shrink-0 h-5 w-5 transition-colors`}
        />
        {!collapsed && <span>{item.name}</span>}
      </Link>
    </li>
  );
};

export default SidebarNavItem;
