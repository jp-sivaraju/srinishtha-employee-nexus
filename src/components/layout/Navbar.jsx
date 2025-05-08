
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  Home, 
  HelpCircle, 
  Users, 
  ChevronDown, 
  Moon, 
  Sun, 
  LogOut,
  Menu
} from 'lucide-react';

const availableRoles = ['Admin', 'HR', 'Manager', 'Developer', 'Intern'];

export const Navbar = ({ user, toggleSidebar }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsProfileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
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
    <header className="z-10 py-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Mobile menu button */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search bar */}
        <div className="flex justify-start flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            <input
              className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 dark:placeholder-gray-400 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-primary-500"
              type="text"
              placeholder="Search for anything..."
              aria-label="Search"
            />
          </div>
        </div>

        {/* Quick action icons */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-primary-500" title="My Office">
              <Home size={20} />
            </button>
            <button className="text-gray-500 hover:text-primary-500" title="IT Help">
              <HelpCircle size={20} />
            </button>
            <button className="text-gray-500 hover:text-primary-500" title="Directory">
              <Users size={20} />
            </button>
          </div>

          {/* Theme toggle */}
          <button
            className="ml-2 text-gray-500 hover:text-primary-500"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              className="relative ml-2 text-gray-500 hover:text-primary-500"
              onClick={toggleNotifications}
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
            </button>

            {/* Notifications dropdown */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50 border border-gray-200 dark:border-gray-700">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Notifications</p>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">New project assigned</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">10 minutes ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Leave request approved</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">IT ticket status update</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">3 hours ago</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-center">
                  <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                    View all notifications
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Profile dropdown */}
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

            {/* Profile dropdown menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>

                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Switch Role</p>
                  <div className="space-y-1">
                    {availableRoles.map(role => (
                      <button
                        key={role}
                        onClick={() => handleRoleChange(role)}
                        className={`w-full text-left px-2 py-1 text-xs rounded-md ${
                          user.role === role
                            ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Your Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
