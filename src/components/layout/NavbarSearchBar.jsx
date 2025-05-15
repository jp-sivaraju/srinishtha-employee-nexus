
import React from 'react';
import { Search } from 'lucide-react';

const NavbarSearchBar = () => {
  return (
    <div className="flex justify-start flex-1 lg:mr-32">
      <div className="relative w-full max-w-xl mr-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="w-4 h-4 text-gray-500" />
        </div>
        <input
          className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-primary-500"
          type="text"
          placeholder="Search for anything..."
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default NavbarSearchBar;
