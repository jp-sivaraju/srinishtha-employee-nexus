
import React from 'react';
import { Home, HelpCircle, Users, Calendar, Target } from 'lucide-react';

const NavbarQuickActions = () => {
  return (
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
      <button className="text-gray-500 hover:text-primary-500" title="Calendar">
        <Calendar size={20} />
      </button>
      <button className="text-gray-500 hover:text-primary-500" title="My Goals">
        <Target size={20} />
      </button>
    </div>
  );
};

export default NavbarQuickActions;
