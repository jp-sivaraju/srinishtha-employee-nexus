
import React, { useState } from 'react';
import { ChevronDown, LogOut } from 'lucide-react';

const availableRoles = ['Admin', 'HR', 'Manager', 'Developer', 'Intern', 'Finance', 'Assessor'];

const NavbarProfileMenu = ({ user }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleRoleChange = (role) => {
    const updatedUser = { ...user, role };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  };

  return (
    <div className="relative ml-3">
      <div>
        <button
          className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={toggleProfileMenu}
        >
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="ml-2 hidden md:block">{user.name}</span>
            <ChevronDown size={16} className="ml-1 hidden md:block" />
          </div>
        </button>
      </div>

      {isProfileMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-700">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>

          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-xs font-medium text-gray-700 mb-1">Switch Role</p>
            <div className="space-y-1">
              {availableRoles.map(role => (
                <button
                  key={role}
                  onClick={() => handleRoleChange(role)}
                  className={`w-full text-left px-2 py-1 text-xs rounded-md ${
                    user.role === role
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Your Profile
          </link>
          <link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </link>
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut size={16} className="mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarProfileMenu;
