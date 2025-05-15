
import React from 'react';
import { Menu } from 'lucide-react';
import NavbarSearchBar from './NavbarSearchBar';
import NavbarQuickActions from './NavbarQuickActions';
import NavbarThemeToggle from './NavbarThemeToggle';
import NavbarNotifications from './NavbarNotifications';
import NavbarProfileMenu from './NavbarProfileMenu';

export const Navbar = ({ user, toggleSidebar }) => {
  return (
    <header className="z-10 py-4 bg-white shadow-md border-b border-gray-200">
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
        <NavbarSearchBar />

        {/* Quick action icons */}
        <div className="flex items-center space-x-3">
          <NavbarQuickActions />

          {/* Theme toggle */}
          <NavbarThemeToggle />

          {/* Notifications */}
          <NavbarNotifications />

          {/* Profile dropdown */}
          <NavbarProfileMenu user={user} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
