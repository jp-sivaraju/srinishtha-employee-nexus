
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const NavbarThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference stored
    const darkModePreference = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="ml-2 text-gray-500 hover:text-primary-500"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default NavbarThemeToggle;
