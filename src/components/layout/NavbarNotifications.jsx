
import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const NavbarNotifications = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
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

      {isNotificationsOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-700">Notifications</p>
          </div>
          <div className="max-h-64 overflow-y-auto">
            <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <p className="text-sm font-medium text-gray-900">New project assigned</p>
              <p className="text-xs text-gray-500">10 minutes ago</p>
            </div>
            <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <p className="text-sm font-medium text-gray-900">Leave request approved</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
            <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
              <p className="text-sm font-medium text-gray-900">IT ticket status update</p>
              <p className="text-xs text-gray-500">3 hours ago</p>
            </div>
          </div>
          <div className="px-4 py-2 border-t border-gray-200 text-center">
            <a href="#" className="text-sm text-primary-600 hover:underline">
              View all notifications
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarNotifications;
